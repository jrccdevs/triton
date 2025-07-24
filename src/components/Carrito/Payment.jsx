// src/components/PayPalPayment.jsx
import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import '../../estilos/Carrito/Payment.css'
// src/components/PayPalPayment.jsx

const PayPalPayment = ({ amount }) => {
  const buttonConfig = {
    createOrder: (data, actions) => {
      return actions.order.create({
        purchase_units: [{
          amount: {
            value: amount,
          },
        }],
      });
    },
    onApprove: (data, actions) => {
      return actions.order.capture().then((details) => {
        alert('Pago realizado por ' + details.payer.name.given_name);
      });
    },
    onError: (err) => {
      console.error('Error en el pago:', err);
    },
  };

  return (
    <PayPalScriptProvider options={{
      "client-id": "AWnViebsJELK_1OdCuUX9KruaeIrlAXx9rR4hW4NUWsweldrLelMDeDi3jyhJxowHYdh1DUvjhUwLUJe",
      "components": "buttons,funding-eligibility",
    }}>
      <div className="paypal-container">
        <h3 className="paypal-title">💳 Pago con Paypal</h3>
        <div className="paypal-box">
          <PayPalButtons
            style={{ layout: "vertical", color: "blue", shape: "pill", label: "checkout", height: 45 }}
            {...buttonConfig}
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
