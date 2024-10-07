// src/pages/CartPage.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/cartActions';
import CheckoutButton from './CheckoutButton';

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart-page">
      <h2>Tu Carrito</h2>
      {cartItems.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.product.id} className="cart-item">
                <img src={item.product.image} alt={item.product.name} />
                <h3>{item.name}hola</h3>
                <p>Cantidad: {item.quantity}</p>
                <p>Precio: {item.product.price * item.quantity} €</p>
                <button onClick={() => handleRemoveFromCart(item.product.id)}>
                  Eliminar
                </button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: {totalAmount} €</h3>
            <CheckoutButton price={totalAmount} />
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
