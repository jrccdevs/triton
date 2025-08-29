// src/components/CartView.jsx
import React, { useState, useContext, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';
import PopularProducts from './PopularProducts';
import '../../estilos/Carrito/Carrito.css';
import NavBar from '../../components/NavBar';
import PayPalButton from '../Carrito/Payment'; 
import Footer from '../Footer';
import { ThemeContext } from '../ThemeToggle';
import Factura from './Factura';
import { CartContext } from "./cartContext"; // ruta correcta

const CartView = () => {
  const { darkMode } = useContext(ThemeContext);
  const { cart, removeFromCart, clearCart, cartCount, total } = useContext(CartContext);

  const [showFactura, setShowFactura] = useState(false);
  const [merchantName] = useState("Mi Comercio");
  const [merchantCity] = useState("La Paz");
  const [merchantCode] = useState("0000");
  const [includeCRC] = useState(true);

  // Helper para formato monto
  const formatAmount = (value) => Number(value || 0).toFixed(2);

  // CRC16-CCITT
  const crc16ccitt = (str) => {
    let crc = 0xffff;
    for (let i = 0; i < str.length; i++) {
      crc ^= str.charCodeAt(i) << 8;
      for (let j = 0; j < 8; j++) {
        crc = (crc & 0x8000) !== 0 ? ((crc << 1) ^ 0x1021) & 0xffff : (crc << 1) & 0xffff;
      }
    }
    return crc.toString(16).toUpperCase().padStart(4, "0");
  };

  // Cadena EMV-like
  const emvFull = useMemo(() => {
    const put = (tag, value) => {
      if (!value) return "";
      const val = String(value);
      const len = String(val.length).padStart(2, "0");
      return `${tag}${len}${val}`;
    };

    const body =
      put("00", "01") +
      put("01", "12") +
      put("26", merchantCode) +
      put("52", "0000") +
      put("58", "BO") +
      put("59", merchantName) +
      put("60", merchantCity) +
      put("54", formatAmount(total));

    if (!includeCRC) return body;
    const toCrc = `${body}6304`;
    const crc = crc16ccitt(toCrc);
    return `${body}6304${crc}`;
  }, [merchantName, merchantCity, merchantCode, total, includeCRC]);

  const contacto = useMemo(() => {
    return JSON.parse(localStorage.getItem("lastContact")) || {
      nombreCompleto: "Consumidor Final",
      ci_nit: "0"
    };
  }, []);

  const isContactRegistered = () => {
    const contact = JSON.parse(localStorage.getItem("lastContact"));
    return contact && contact.nombreCompleto && contact.ci_nit;
  };

  const clearContact = () => {
    localStorage.removeItem("lastContact");
  };

  return (
    <>
      <NavBar />
      <div className={`cart-view-container ${darkMode ? 'dark-mode' : ''}`} style={{ marginTop: "90px" }}>
        <div className="cart-main">
          <div className="cart-left">
            <Link to="/user" className="checkout-button">Registrate</Link>
            <br /><br />
            <h2><FaShoppingCart /> Productos en el carrito</h2>

            {cart.length === 0 ? (
              <div className="empty-cart">
                <h3>¡Tu carrito está vacío!</h3>
                <p>No tienes productos en el carrito.</p>
                <Link to="/" className="shop-now-button">Seguir comprando</Link>
              </div>
            ) : (
              <div className="cart-items">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-info">
                      <p>{item.name}</p>
                      <p>Talla: {item.size}</p>
                      <p>Color: {item.color}</p>
                      <p>Precio unitario: ${item.price.toFixed(2)}</p>
                      <p>Cantidad: {item.quantity || 1}</p>
                    </div>
                    <button onClick={() => removeFromCart(item)} className="remove-item-button">
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="cart-summary">
              <p><strong>Total: ${total.toFixed(2)}</strong></p> {/* total reactivo correcto */}

              {isContactRegistered() ? (
                <PayPalButton amount={total} />
              ) : (
                <button
                  className="paypal-disabled-button"
                  onClick={() => {
                    alert("Debes registrarte antes de pagar con PayPal.");
                    window.location.href = "/user";
                  }}
                >
                  Pagar con PayPal
                </button>
              )}

              {cart.length > 0 && (
                <div style={{ marginTop: "20px", textAlign: "center" }}>
                  <h4>Pago con Yape Bolivia</h4>
                  <QRCodeCanvas value={emvFull} size={200} />
                  <p style={{ fontSize: "12px", marginTop: "5px" }}>Escanea este código en tu app Yape</p>
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <button className="checkout-button" onClick={() => setShowFactura(true)}>
                Generar Factura
              </button>
            )}

            {showFactura && (
              <Factura
                cart={cart}
                total={total}
                contacto={contacto}
                onClose={() => {
                  setShowFactura(false);
                  clearContact();
                }}
              />
            )}
          </div>

          <div className="cart-right">
            <PopularProducts />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CartView;
