// CheckoutButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCreditCard } from 'react-icons/fa';
//import './CheckoutButton.css'; // Puedes personalizar los estilos en este archivo

const CheckoutButton = () => {
  const navigate = useNavigate();

  const handleCheckout = () => {
    // Puedes agregar lógica adicional aquí si es necesario
    navigate('/checkout');
  };

  return (
    <button className="checkout-button" onClick={handleCheckout}>
      <FaCreditCard style={{ marginRight: '8px' }} />
      Proceder al pago
    </button>
  );
};

export default CheckoutButton;
