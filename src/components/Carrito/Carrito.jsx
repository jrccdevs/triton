import React, { useState, useContext, useMemo, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { QRCodeCanvas } from 'qrcode.react';
import PopularProducts from './PopularProducts';
import '../../estilos/Carrito/Carrito.css';
import NavBar from '../../components/NavBar';
import PayPalButton from '../Carrito/Payment';
import Footer from '../Footer';
import { ThemeContext } from '../ThemeToggle';
import Factura from './Factura';
import { CartContext } from "./cartContext";
import Swal from 'sweetalert2';
import Qr from '../../img/codigo_qr.jpeg'
const CartView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { darkMode } = useContext(ThemeContext);
  const { cart, removeFromCart, clearCart, total } = useContext(CartContext);

  const [showFactura, setShowFactura] = useState(false);
  const [contactoId, setContactoId] = useState(null);
  const [merchantName] = useState("Mi Comercio");
  const [merchantCity] = useState("La Paz");
  const [merchantCode] = useState("0000");
  const [includeCRC] = useState(true);
  const [showYapeQR, setShowYapeQR] = useState(false);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  const [cartBeforePayment, setCartBeforePayment] = useState([]);
  const [totalBeforePayment, setTotalBeforePayment] = useState(0);
  const [resumePayment, setResumePayment] = useState(null);

  // Detectar contacto registrado y método de pago pendiente
  useEffect(() => {
    const contacto = JSON.parse(localStorage.getItem("lastContact"));
    if (contacto?.id) setContactoId(contacto.id);

    const pending = localStorage.getItem("pendingPayment");
    if (pending) {
      setResumePayment(pending);
      // Solo mostrar QR si es QR
      if (pending === "qr") setShowYapeQR(true);
    }

    // Revisar si se retorna desde el formulario
    const params = new URLSearchParams(location.search);
    const resume = params.get('resume');
    if (resume) {
      Swal.fire("ℹ️ Cliente ya registrado", "Retomando método de pago", "info");
      if (resume === 'qr') setShowYapeQR(true);
      if (resume === 'paypal') setResumePayment('paypal');
      localStorage.removeItem("pendingPayment");
    }
  }, [location.search]);

  const handlePaymentSuccess = async (details, metodoPago) => {
    const contacto = JSON.parse(localStorage.getItem("lastContact"));
    if (!contacto?.id) {
      Swal.fire("❌ Error", "Debes registrarte antes de pagar", "error");
      return;
    }

    try {
      const response = await fetch("https://server-triton.vercel.app/api/facturas/crear", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contacto: {
            id: contacto.id,
            nombre: contacto.nombreCompleto?.split(" ")[0] || "N/A",
            apellido: contacto.nombreCompleto?.split(" ")[1] || "",
            ci: contacto.ci_nit || "0",
            correo: contacto.correo || "",
            telefono: contacto.telefono || ""
          },
          cart: cart.map(item => ({
            name: item.name,
            price: item.price,
            quantity: item.quantity || 1
          })),
          total,
          metodo_pago: metodoPago
        }),
      });

      if (!response.ok) throw new Error("No se pudo generar la factura");

      await response.json();

      Swal.fire("✅ Factura generada", "Se envió a tu correo y WhatsApp", "success");
      setCartBeforePayment([...cart]);
      setTotalBeforePayment(total);
      setPaymentConfirmed(true);
      clearCart();
    } catch (error) {
      console.error(error);
      Swal.fire("❌ Error", "No se pudo generar la factura", "error");
    }
  };

  const formatAmount = (value) => Number(value || 0).toFixed(2);

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

  // Función para iniciar pago → redirige al formulario
  const initiatePayment = (method) => {
    localStorage.setItem("pendingPayment", method);
    navigate("/user");
  };

  return (
    <>
      <NavBar />
      <div className={`cart-view-container ${darkMode ? 'dark-mode' : ''}`} style={{ marginTop: "140px" }}>
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
                      <button onClick={() => removeFromCart(item)} className="remove-item-button">Eliminar</button>
                    </div>
                  ))}
                </div>
              )}

            <div className="cart-summary">
              <p><strong>Total: ${total.toFixed(2)}</strong></p>

              {/* PayPalButton siempre visible */}
              <PayPalButton
                amount={total}
                onPaymentSuccess={(details) => handlePaymentSuccess(details, "PayPal")}
                onClick={() => initiatePayment("paypal")}
              />

              {/* QR Yape */}
              {cart.length > 0 && (
                <div className="yape-container">
                  <button
                    className={`yape-button ${showYapeQR ? "active" : ""}`}
                    onClick={() => {
                      if (!contactoId) {
                        initiatePayment("qr");
                        return;
                      }
                      setShowYapeQR(prev => !prev);
                    }}
                  >
                    {showYapeQR ? "❌ Cerrar QR Yape Bolivia" : "📱 Pagar con Yape Bolivia"}
                  </button>

                  {showYapeQR && (
                    <div className="yape-qr-box">
                      <h4 className="yape-title">
                        ✨ Escanea para pagar con <b>Yape Bolivia</b>
                      </h4>
                      {/*<QRCodeCanvas value={emvFull} size={200} />*/}

                      {/*<p className="yape-note">📲 Abre tu app Yape y escanea el código</p>*/}
                      <img
                        src={Qr}  // coloca tu QR estático en /public/imagenes/qr-yape.png
                        alt="QR Yape Bolivia"
                        style={{ width: "70%", height: "auto" }}
                      />
                      <p className="yape-note">Monto a pagar: <b>${total.toFixed(2)}</b></p>
                      <p className="yape-note">📲 Abre tu app Yape y escanea el código</p>
                      <button
                        className="confirm-yape-button"
                        onClick={() => {
                          Swal.fire({
                            icon: "success",
                            title: "Pago confirmado ✅",
                            text: "¡Gracias por tu compra con Yape Bolivia!",
                            confirmButtonColor: "#3085d6",
                          });
                          handlePaymentSuccess(null, "QR Yape Bolivia");
                          setShowYapeQR(false);
                        }}
                      >
                        Confirmar pago
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {paymentConfirmed && (
              <button
                className="checkout-button"
                onClick={() => setShowFactura(true)}
              >
                Generar Factura
              </button>
            )}

            {showFactura && (
              <Factura
                cart={cartBeforePayment}
                total={totalBeforePayment}
                contacto={JSON.parse(localStorage.getItem("lastContact"))}
                onClose={() => setShowFactura(false)}
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
