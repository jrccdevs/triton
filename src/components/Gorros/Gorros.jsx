import React from 'react';
import Empresa from "../../img/homepage.webp";
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import GaleriaPants from '../Pantalones/GaleriaPants';
import Footer from '../Footer';

export default function Gorros() {
  // Definimos la categoría que queremos pasar
  const category = "gorros";

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
            <h2>SECCION DE GORROS.....</h2>
            <p>Este es un texto superpuesto sobre la imagen.</p>
          </div>
          <button className="overlay-button">Botón de Acción</button>
        </div>
      </div>
      <div>
        {/* Pasar la categoría a ProductCard */}
        <ProductCard category={category} />
      </div>
      <div>
        <GaleriaPants />
      </div>
      <Footer />
    </div>
  );
};
