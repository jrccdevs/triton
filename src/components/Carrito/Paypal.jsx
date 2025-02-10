// src/components/PaypalButton.jsx
import React, { useState } from "react";
import { createOrder } from "../../api/paypal";
import '../../estilos/Carrito/paypal.css'

const PaypalButton = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePayment = async () => {
    setLoading(true);
    setError(null);

    try {
      const order = await createOrder();
      window.location.href = order.links.find(
        (link) => link.rel === "approve"
      ).href;
    } catch (err) {
      setError("Failed to initiate payment. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button className="paypal-button" onClick={handlePayment} disabled={loading}>
        {loading ? "Processing..." : <span>PayPal</span>}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default PaypalButton;
