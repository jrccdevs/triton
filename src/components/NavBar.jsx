import Empresa from "../img/triton.svg";
import '../estilos/Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineShoppingCart } from "react-icons/hi";
import Buscador from "./Buscador";
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="navbar-container">

      {/* FILA 1: LOGO + HAMBURGUESA */}
      <div className="navbar-header">
        <div className="logo">
          <Link to="/" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>
            <img src={Empresa} alt="Logo" />
          </Link>
        </div>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* FILA 2: BUSCADOR */}
      <div className="search-container">
        <Buscador />
      </div>

      {/* MENÚ PARA ESCRITORIO */}
      <div className="menu-container">
        <Link to="/pantalones" className="menu-button">Pantalones</Link>
        <Link to="/chaquetas" className="menu-button">Chaquetas</Link>
        <Link to="/camisas" className="menu-button">Camisas</Link>
        <Link to="/gorros" className="menu-button">Gorras</Link>
        <Link to="/accesorios" className="menu-button">Accesorios</Link>
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
        <Link to="/cart" onClick={() => window.scrollTo(0, 0)} className="menu-button">
          <HiOutlineShoppingCart />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
