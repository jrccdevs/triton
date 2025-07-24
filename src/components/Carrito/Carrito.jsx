// src/components/CartView.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import PopularProducts from './PopularProducts'; // Asegúrate de tener este componente
import '../../estilos/Carrito/Carrito.css'; // Asegúrate de que el archivo CSS esté importado
import NavBar from '../../components/NavBar';
import PayPalButton from '../Carrito/Payment'; 
import Paypal from "../Carrito/Paypal";
import Footer from '../Footer'

const CartView = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Cargar los productos del carrito desde el localStorage
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Función para eliminar un producto del carrito
  const removeItemFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart)); // Actualizar el carrito en localStorage
  };
  const total = cart.reduce((total, item) => total + item.price, 0);

  return (
    <>
    <NavBar />
    <div className="cart-view-container" style={{marginTop:"90px"}}>
      <div className="cart-main">
        <div className="cart-left">
        <Link to="/user" className="checkout-button">Registrate</Link>
            <br></br>
            <br></br>
           
          <h2><FaShoppingCart /> Productos en el carrito</h2>
          {cart.length === 0 ? (
            <div className="empty-cart">
              <img src="empty-cart-image.jpg" alt="Carrito vacío" className="empty-cart-image" />
              <h3>¡Tu carrito está vacío!</h3>
              <p>No tienes productos en el carrito. ¡Agrega algunos para proceder al pago!</p>
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
                  <button
                    onClick={() => removeItemFromCart(index)}
                    className="remove-item-button"
                  >
                    Eliminar
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="cart-summary">
            <p>Total: ${total.toFixed(2)}</p>
            <PayPalButton amount={total} />
            
           {/* <Paypal />*/}
          </div>
         
        </div>

        {/* Sección de Productos Populares al costado derecho */}
        <div className="cart-right">
          <PopularProducts />
        </div>
        
      </div>
    </div>
     <div className="">
      <Footer />
     </div>
    </>
  );
};

export default CartView;
