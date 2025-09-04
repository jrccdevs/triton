import {React, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route,  useLocation } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeToggle'; // Importa el ThemeProvider

// Importa todos tus componentes de página
import Inicio from './components/Inicio'; // Inicio mantendrá su Navbar/Footer interno
import Nosotros from './paginas/Nosotros';
import Productos2 from './components/Productos2';
import Productos3 from './components/Productos3';
import Pantalones from './components/Pantalones/Pantalones';
import Chaquetas from './components/Chaquetas/Chaquetas';
import Accesorios from './components/Accesorios/Accesorios';
import Gorros from './components/Gorros/Gorros';
import Camisas from './components/Camisas/Camisas';
import ProductCard from './components/Pantalones/ProductCard';
import PruebaDetalle from './components/Pantalones/PruebaDetalle.jsx';
import CartPage from './components/Carrito/Carrito';
import Payment from './components/Carrito/Payment';
import Checkout from './components/Carrito/CheckoutButton';
import Paypal from './components/Carrito/Paypal';
import UserRegis from './components/Usuarios/UserRegis';
import Buscador from './components/Buscador';

import './App.css'; // Tu archivo CSS global para las variables de tema

window.history.scrollRestoration = 'manual'; // desactiva el scroll automático del navegador

function App() {
 
  return (
    // Envuelve toda la aplicación con ThemeProvider
    // El div app-wrapper seguirá manejando la clase 'dark-mode' para el estilo general del wrapper
    <ThemeProvider>
      <div className={`app-wrapper ${document.body.classList.contains('dark-mode') ? 'dark-mode' : ''}`}>
        <Router>
          {/* Aquí NO se renderiza Navbar ni Footer globalmente, Inicio lo hará */}
          {/* <Navbar darkMode={darkMode} toggleTheme={toggleTheme} /> <-- ELIMINAR */}
          <ScrollToTop /> {/* Maneja el scroll en todas las rutas */}
          <main className="app-main-content">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/buscador" element={<Buscador />} />
              <Route path="/productos" element={<Productos2 />} />
              <Route path="/sugerencias" element={<Productos3 />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/pantalones" element={<Pantalones />} />
              <Route path="/chaquetas" element={<Chaquetas />} />
              <Route path="/accesorios" element={<Accesorios />} />
              <Route path="/gorros" element={<Gorros />} />
              <Route path="/camisas" element={<Camisas />} />
              <Route path="/carrito" element={<CartPage />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/payment" element={<Payment />} />
              
              <Route path="/:categorias" element={<ProductCard />} />
              <Route path="/user" element={<UserRegis />} />
              <Route path="/create-orders" element={<Paypal />} />
              <Route path="/productos/:id" element={<PruebaDetalle />} />
            </Routes>
          </main>

          {/* <Footer darkMode={darkMode} /> <-- ELIMINAR */}
        </Router>
      </div>
    </ThemeProvider>
  );
}
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Esto sube el scroll al inicio al montar la ruta
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]); // se ejecuta cada vez que cambia la ruta

  return null;
}
export default App;