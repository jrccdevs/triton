// src/components/CheckoutButton.js
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const CheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'tu_clave_publica_de_stripe';

  const onToken = (token) => {
    alert('Pago exitoso');
  };

  return (
    <StripeCheckout
      label="Pagar Ahora"
      name="Tienda Militar"
      billingAddress
      shippingAddress
      description={`Total: ${price} €`}
      amount={priceForStripe}
      panelLabel="Pagar Ahora"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default CheckoutButton;
