// src/context/ThemeContext.js
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Para validación de props en el proveedor

// 1. Crea el Contexto
export const ThemeContext = createContext();

// 2. Crea un Componente Proveedor que gestionará el estado del tema
export const ThemeProvider = ({ children }) => {
  // Estado para el modo oscuro, inicializado desde localStorage o preferencias del sistema
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      return JSON.parse(savedTheme);
    }
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Efecto para aplicar la clase 'dark-mode' al body y guardar la preferencia
  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Función para alternar el tema
  const toggleTheme = () => {
    setDarkMode(prevMode => !prevMode);
  };

  // El proveedor pasa el estado y la función a sus hijos
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Validación de prop para el ThemeProvider
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};