import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom';
import '../css/footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiPaypal, SiVisa, SiMastercard } from 'react-icons/si';
import { FaCcAmex } from 'react-icons/fa'; // Añadido icono de American Express de react-icons/fa
import { FiCreditCard } from 'react-icons/fi'; // Añadido icono de PayPal de react-icons/fi



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>TRITON</h2>
          <p>Equipamiento y uniformes para todas las necesidades militares.</p>
        </div>
        
        <div className="footer-section">
          <h3>Enlaces Rápidos</h3>
          <ul>
            <li><a href="/">Inicio</a></li>
            <li><a href="/">Productos</a></li>
            <li><a href="/">Contacto</a></li>
            <li><a href="/">Nosotros</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>Email: <a href="mailto:ponercorreo0@gmail.com" >ponercorreo@gmail.com</a></p>
          <p>Teléfono: <a href="tel:+123456789">+123 456 789</a></p>
          <p>WhatsApp: <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">Enviar mensaje</a></p>
        </div>
        
        {/*<div className="footer-section">
          <h3>Suscríbete</h3>
          <form className="newsletter-form">
            <Link to="/user">
            <button type="submit" style={{width:'auto'}}>Suscribirse</button>
            </Link>
          </form>
         </div>*/}
      </div>
      
      <div className="footer-bottom">
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="facebook">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="twitter">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="instagram">
            <FaInstagram />
          </a>
          <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer" className="whatsapp">
            <FaWhatsapp />
          </a>
        </div>
        <div className="payment-methods">
          <h3>Métodos de Pago</h3>
          <div className="payment-icons">
            <SiPaypal title="PayPal" className="paypal" />
            <SiVisa title="Visa" className="visa" />
            <SiMastercard title="MasterCard" className="mastercard" />
            <FaCcAmex title="American Express" className="americanexpress" />
          </div>
        </div>
        <p>&copy; 2024 Triton. Todos los derechos reservados.</p>
      </div>
     
    </footer>
  );
}
export default Footer