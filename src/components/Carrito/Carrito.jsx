// src/components/CartView.jsx
import React, { useState, useEffect, useContext, useMemo } from 'react';
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

const CartView = () => {
  const [cart, setCart] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  const [showFactura, setShowFactura] = useState(false);
  const [merchantName] = useState("Mi Comercio");
  const [merchantCity] = useState("La Paz");
  const [merchantCode] = useState("12345678"); // Aquí pones tu código/alias de Yape
  const [includeCRC] = useState(true);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  const removeItemFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const total = cart.reduce((total, item) => total + item.price, 0);

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
      put("00", "01") + // Payload format indicator
      put("01", "12") + // Dynamic
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
                      <p>Precio: ${item.price.toFixed(2)}</p>
                    </div>
                    <button onClick={() => removeItemFromCart(index)} className="remove-item-button">
                      Eliminar
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="cart-summary">
              <p>Total: ${total.toFixed(2)}</p>
              <PayPalButton amount={total} />

              {/* QR de pago con Yape */}
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
              <Factura cart={cart} total={total} onClose={() => setShowFactura(false)} />
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
