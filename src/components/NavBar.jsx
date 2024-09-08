
import Empresa from "../img/triton.svg";
import '../estilos/Navbar.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import { HiOutlineShoppingCart } from "react-icons/hi";

import { FaShoppingCart, FaSearch, FaBars, FaTimes  } from 'react-icons/fa';

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="navbar-container">
    <div className="logo">
      <img src={Empresa} alt="Logo" /> {/* Reemplaza con la ruta a tu imagen */}
    </div>
    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/pantalones" onClick={() => window.scrollTo(0, 0)} className="menu-button">Pantalones</Link>
        <Link to="/about" onClick={() => window.scrollTo(0, 0)} className="menu-button">Chaquetas</Link>
        <Link to="/services" onClick={() => window.scrollTo(0, 0)}className="menu-button">Camisas</Link>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)}className="menu-button">Gorras</Link>
        <Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="menu-button">Accesorios</Link>
      </div>
    </div>
    <div className="search-container">
      <input className="search-bar" type="text" placeholder="Search..." />
      <FaSearch className="search-icon" />
    </div>
    <div className="cart-icon">
      <HiOutlineShoppingCart />
    </div>
  </nav>
  );
};

export default Navbar;