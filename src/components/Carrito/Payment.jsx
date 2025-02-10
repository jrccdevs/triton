// src/components/PayPalPayment.jsx
import React, { useEffect } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const PayPalPayment = ({ amount }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID";  // Reemplaza con tu client-id
    script.addEventListener('load', () => setUpPayPalButton());
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const setUpPayPalButton = () => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount,  // Aquí va el monto de la compra
              },
            }],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert('Pago realizado por: ' + details.payer.name.given_name);
          });
        },
        onError: (err) => {
          console.error('Error en el pago:', err);
        }
      }).render('#paypal-button-container');
    }
  };

  return (
    <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
    <div>
      
      <PayPalButtons
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount, // Aquí debes pasar el monto a cobrar
              },
            }],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then(function(details) {
            alert('Pago realizado por ' + details.payer.name.given_name);
          });
        }}
      />
    </div>
  </PayPalScriptProvider>
  );
};

export default PayPalPayment;
