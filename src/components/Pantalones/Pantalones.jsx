import React from 'react';
import Empresa from "../../img/homepage.webp";
import NavBar from '../NavBar';
import ProductCard from './ProductCard';
import GaleriaPants from './GaleriaPants';
import Footer from '../Footer';
import '../../estilos/Seccion1.css'; // Archivo CSS para estilos personalizados


export default function Pantalones() {
  // Definimos la categoría que queremos pasar
  const categorias = "pantalones";

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
            <h2 className="titulo-p">Paso firme. Camuflaje letal.</h2>
            <p className="des-d">Los pantalones tácticos Multicam están hechos para la acción 
              real. Diseñados con tejidos resistentes, bolsillos estratégicos 
              y libertad total de movimiento, ofrecen durabilidad en cada paso 
              y camuflaje efectivo en entornos cambiantes. Desde misiones en 
              terreno hostil hasta entrenamiento intensivo, su rendimiento es 
              tan sólido como tu determinación. Porque avanzar seguro no es una 
              opción, es parte del uniforme.</p>
          </div>
          <button className="overlay-button">compra &nbsp;&nbsp;&nbsp;ahora</button>
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
