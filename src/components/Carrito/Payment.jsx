// src/components/PayPalPayment.jsx
import React, { useContext } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import "../../estilos/Carrito/Payment.css";
import { ThemeContext } from "../ThemeToggle";
import { CartContext } from "./cartContext"; 
import Swal from 'sweetalert2';

// Loader PayPal
const ButtonWrapper = ({ currency, amount, onPaymentSuccess }) => {
  const [{ isPending }] = usePayPalScriptReducer();
  const { clearCart } = useContext(CartContext);

  return (
    <>
      {isPending && <p className="paypal-loading">⏳ Procesando pago...</p>}
      <PayPalButtons
        style={{
          layout: "vertical",
          color: "blue",
          shape: "pill",
          label: "checkout",
          height: 50,
        }}
        forceReRender={[amount, currency]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  currency_code: currency,
                  value: amount,
                },
              },
            ],
          });
        }}
        onApprove={async (data, actions) => {
          const details = await actions.order.capture();
          
          Swal.fire({
            title: "✅ Pago completado",
            text: `Gracias ${details.payer.name.given_name}, tu pago se realizó con éxito.`,
            icon: "success",
            confirmButtonText: "OK",
          });

          clearCart(); // limpiar carrito automáticamente

          if (onPaymentSuccess) onPaymentSuccess(details); // habilita la factura
        }}
        onError={(err) => {
          Swal.fire({
            title: "❌ Error en el pago",
            text: "Hubo un problema al procesar tu pago, intenta nuevamente.",
            icon: "error",
            confirmButtonText: "Reintentar",
          });
        }}
      />
    </>
  );
};

const PayPalPayment = ({ amount, currency = "USD", onPaymentSuccess }) => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AWnViebsJELK_1OdCuUX9KruaeIrlAXx9rR4hW4NUWsweldrLelMDeDi3jyhJxowHYdh1DUvjhUwLUJe",
        components: "buttons,funding-eligibility",
        currency,
      }}
    >
      <div className={`paypal-container ${darkMode ? "dark-mode" : ""}`}>
        <h3 className="paypal-title">💳 Pago con PayPal</h3>
        <div className="paypal-box">
          <ButtonWrapper
            currency={currency}
            amount={amount}
            onPaymentSuccess={onPaymentSuccess} // <-- función que habilita la factura
          />
        </div>
      </div>
    </PayPalScriptProvider>
  );
};

export default PayPalPayment;
