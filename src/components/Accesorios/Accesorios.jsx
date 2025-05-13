import React from 'react';
import Empresa from "../../img/mochilas.png";
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import GaleriaPants from '../Pantalones/GaleriaPants';
import Footer from '../Footer';

export default function Accesorios() {
  // Definimos la categoría que queremos pasar
  const categorias = "accesorios";

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
            <h2 style={{color: '#222844',fontSize: '30px'}}>Camuflaje que se adapta. Resistencia que perdura.</h2>
            <p style={{fontSize: '20px'}} >Diseñada para operaciones exigentes y entornos hostiles, la mochila táctica Multicam combina capacidad, resistencia y camuflaje avanzado. Su diseño ergonómico y modular permite distribuir el peso eficientemente, mientras que su patrón Multicam garantiza un camuflaje superior en distintos terrenos.</p>
          </div>
          <button style={{backgroundColor: '#222844'}} className="overlay-button">COMPRA AHORA</button>
        </div>
      </div>
      <div>
        {/* Pasar la categoría a ProductCard */}
        <ProductCard categorias={categorias} />
      </div>
      <div>
        <GaleriaPants />
      </div>
      <Footer />
    </div>
  );
};
