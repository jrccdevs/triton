// src/context/cartContext.js
import React, { createContext, useState, useEffect, useCallback, useMemo } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const raw = localStorage.getItem("cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  // Persistir carrito en localStorage
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Error guardando carrito:", e);
    }
  }, [cart]);

  // Agregar al carrito (si ya existe, suma cantidad)
  const addToCart = useCallback((item) => {
    setCart((prev) => {
      const idx = prev.findIndex(
        (p) => p.id === item.id && p.size === item.size && p.color === item.color
      );
      if (idx !== -1) {
        const next = [...prev];
        const prevQty = Number(next[idx].quantity) || 1;
        const addQty = Number(item.quantity) || 1;
        next[idx] = { ...next[idx], quantity: prevQty + addQty };
        return next;
      }
      return [...prev, { ...item, quantity: Number(item.quantity) || 1 }];
    });
  }, []);

  // Eliminar por id + size + color (más confiable que por índice)
  const removeFromCart = useCallback((item) => {
    setCart((prev) => prev.filter(
      (p) => !(p.id === item.id && p.size === item.size && p.color === item.color)
    ));
  }, []);

  const updateQuantity = useCallback((item, quantity) => {
    setCart((prev) => prev.map((p) => 
      (p.id === item.id && p.size === item.size && p.color === item.color)
        ? { ...p, quantity }
        : p
    ));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  // Derivados reactivos
  const cartCount = useMemo(() => 
    cart.reduce((s, it) => s + (Number(it.quantity) || 1), 0)
  , [cart]);

  const total = useMemo(() => 
    cart.reduce((s, it) => s + (Number(it.price) || 0) * (Number(it.quantity) || 1), 0)
  , [cart]);

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      cartCount,
      total
    }}>
      {children}
    </CartContext.Provider>
  );
};
