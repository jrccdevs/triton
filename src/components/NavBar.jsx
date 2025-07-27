// src/components/NavBar.jsx
import Empresa from "../img/triton.svg";
import '../estilos/Navbar.css';
import React, { useState, useContext } from 'react'; // Importa useContext
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import Buscador from "./Buscador";
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
// import PropTypes from 'prop-types'; // Ya no es necesario si no recibe props

import { ThemeContext } from './ThemeToggle'; // Importa tu contexto

// Ya no recibe props de `darkMode` o `toggleTheme`
const Navbar = () => {
  // Usa useContext para obtener el estado del tema y la función para alternarlo
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className={`navbar-container ${darkMode ? 'dark-mode' : ''}`}>

      {/* FILA 1: LOGO + HAMBURGUESA + BOTÓN TEMA (para móviles) */}
      <div className="navbar-header">
        <div className="logo">
          <Link to="/" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
            <img src={Empresa} alt="Logo" />
          </Link>
        </div>

        <button onClick={toggleTheme} className="theme-toggle-mobile" aria-label="Toggle dark mode">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* FILA 2: BUSCADOR */}
      <div className="search-container">
        <Buscador />
      </div>

      {/* MENÚ PARA ESCRITORIO (incluye el botón de tema para escritorio) */}
      <div className="menu-container">
        <Link to="/pantalones" className="menu-button">Pantalones</Link>
        <Link to="/chaquetas" className="menu-button">Chaquetas</Link>
        <Link to="/camisas" className="menu-button">Camisas</Link>
        <Link to="/gorros" className="menu-button">Gorras</Link>
        <Link to="/accesorios" className="menu-button">Accesorios</Link>
        
        <button onClick={toggleTheme} className="theme-toggle-desktop" aria-label="Toggle dark mode">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* MENÚ MÓVIL (solo visible cuando isMenuOpen es true) */}
      {isMenuOpen && (
        <div className="mobile-dropdown-menu">
          <Link to="/pantalones" onClick={closeMenu} className="menu-button">Pantalones</Link>
          <Link to="/chaquetas" onClick={closeMenu} className="menu-button">Chaquetas</Link>
          <Link to="/camisas" onClick={closeMenu} className="menu-button">Camisas</Link>
          <Link to="/gorros" onClick={closeMenu} className="menu-button">Gorras</Link>
          <Link to="/accesorios" onClick={closeMenu} className="menu-button">Accesorios</Link>
        </div>
      )}

      {/* ÍCONO CARRITO */}
      <div className="cart-icon">
        <Link to="/carrito" onClick={() => window.scrollTo(0, 0)} className="menu-button">
          <HiOutlineShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

// Elimina la validación de PropTypes para darkMode y toggleTheme, ya no son props
// Navbar.propTypes = {
//   darkMode: PropTypes.bool.isRequired,
//   toggleTheme: PropTypes.func.isRequired,
// };

export default Navbar;