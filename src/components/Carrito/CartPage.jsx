import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../../estilos/Carrito/Carrito.css'; // Asegúrate de que el archivo CSS esté importado


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

  return (
    <div className="cart-view-container">
      <h2><FaShoppingCart /> Productos en el carrito</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
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
        <p>Total: ${cart.reduce((total, item) => total + item.price, 0).toFixed(2)}</p>
        <Link to="/checkout" className="checkout-button">Proceder al pago</Link>
      </div>
    </div>
  );
};

export default CartView;