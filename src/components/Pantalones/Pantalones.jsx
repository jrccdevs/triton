import React from 'react';
import Empresa from "../../img/homepage.webp";
import NavBar from '../NavBar'
import ProductCard from './ProductCard'
import GaleriaPants from './GaleriaPants'
import Footer from '../Footer';
//import '../estilos/Seccion1.css'; // Archivo CSS para estilos personalizados

export default function Pantalones() {
  return (
      <div>
        <div>
            <NavBar />
         </div>
      
     <div className="image-container principal">
        
      <img 
        src={Empresa}
        alt="Descripción de la imagen" 
        className="image"
      />
       <div className="overlay-right">
        <div className="overlay-content">
          <h2>SECCION DE PANTALONES</h2>
          <p>Este es un texto superpuesto sobre la imagen.</p>
        </div>
        <button className="overlay-button">Botón de Acción</button>
      </div>
     </div>
     <div>
         <ProductCard />
     </div>
     <div>
         <GaleriaPants />
     </div>
     <Footer />
    </div>
  );
};

 