import React, { useEffect } from 'react';

const PayPalButton = () => {
  useEffect(() => {
    if (window.paypal) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: '50.00', // Monto del pago
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transacción completada por ${details.payer.name.given_name}`);
          });
        },
        onError: (err) => {
          console.error('Error en PayPal:', err);
        },
      }).render('#paypal-button-container');
    }
  }, []);

  return <div id="paypal-button-container"></div>;
};
