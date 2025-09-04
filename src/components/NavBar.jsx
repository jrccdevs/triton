// src/components/NavBar.jsx
import Empresa from "../img/triton.svg";
import '../estilos/Navbar.css';
import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import Buscador from "./Buscador";
import { FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from './ThemeToggle';
import { CartContext } from './Carrito/cartContext';  // <-- Importa el contexto carrito

const Navbar = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { cartCount } = useContext(CartContext);  // <-- Obtiene la cantidad de items

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
        <Link to="/pantalones" onClick={() => window.scrollTo(0, 0)} className="menu-button">Pantalones</Link>
        <Link to="/chaquetas" onClick={() => window.scrollTo(0, 0)} className="menu-button">Chaquetas</Link>
        <Link to="/camisas"  onClick={() => window.scrollTo(0, 0)}className="menu-button">Camisas</Link>
        <Link to="/gorros"  onClick={() => window.scrollTo(0, 0)}className="menu-button">Gorras</Link>
        <Link to="/accesorios" onClick={() => window.scrollTo(0, 0)} className="menu-button">Accesorios</Link>
        
        <button onClick={toggleTheme} className="theme-toggle-desktop" aria-label="Toggle dark mode">
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* MENÚ MÓVIL (solo visible cuando isMenuOpen es true) */}
      {isMenuOpen && (
        <div className="mobile-dropdown-menu">
          <Link to="/pantalones" onClick={() => (window.scrollTo(0, 0), closeMenu())} className="menu-button">Pantalones</Link>
          <Link to="/chaquetas" onClick={() => (window.scrollTo(0, 0), closeMenu())} className="menu-button">Chaquetas</Link>
          <Link to="/camisas" onClick={() => (window.scrollTo(0, 0), closeMenu())}  className="menu-button">Camisas</Link>
          <Link to="/gorros" onClick={() => (window.scrollTo(0, 0), closeMenu())}  className="menu-button">Gorras</Link>
          <Link to="/accesorios" onClick={() => (window.scrollTo(0, 0), closeMenu())}  className="menu-button">Accesorios</Link>
        </div>
      )}

      {/* ÍCONO CARRITO + CONTADOR */}
      <div className="cart-icon">
        <Link to="/carrito" onClick={() => window.scrollTo(0, 0)} className="menu-button">
          <HiOutlineShoppingCart />
          {cartCount > 0 && (
            <span className="cart-count-badge">{cartCount}</span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
