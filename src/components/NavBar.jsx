
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
    <Link to="/" onClick={() => window.scrollTo(0, 0)} className="">
    <img src={Empresa} alt="Logo" /> {/* Reemplaza con la ruta a tu imagen */}
  
    </Link>
            
      </div>
    <div className="menu-container">
      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/pantalones" onClick={() => window.scrollTo(0, 0)} className="menu-button">Pantalones</Link>
        <Link to="/chaquetas" onClick={() => window.scrollTo(0, 0)} className="menu-button">Chaquetas</Link>
        <Link to="/camisas" onClick={() => window.scrollTo(0, 0)}className="menu-button">Camisas</Link>
        <Link to="/gorros" onClick={() => window.scrollTo(0, 0)}className="menu-button">Gorras</Link>
        <Link to="/accesorios" onClick={() => window.scrollTo(0, 0)} className="menu-button">Accesorios</Link>
      </div>
    </div>
    <div className="search-container">
      <input className="search-bar" type="text" placeholder="Search..." />
      <FaSearch className="search-icon" />
    </div>
    <div className="cart-icon">
    <Link to="/cart" onClick={() => window.scrollTo(0, 0)} className="menu-button"><HiOutlineShoppingCart /></Link>
      
      
    </div>
  </nav>
  );
};

export default Navbar;