import React from 'react';
import Empresa from "../../img/poleras.png";
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import GaleriaPants from '../Pantalones/GaleriaPants';
import Footer from '../Footer';
import '../../estilos/Seccion1.css'; // Archivo CSS para estilos personalizados


export default function Camisas() {
  // Definimos la categoría que queremos pasar
  const categorias = "camisas";

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
            <h2 className="titulo-p">Ligera. Letal. Lista para el terreno.</h2>
            <p className="des-d">La polera táctica Multicam combina comodidad, camuflaje y 
              rendimiento en una sola prenda. Confeccionada con tela 
              liviana, resistente y de secado rápido, es perfecta para 
              climas cálidos o como capa base en operaciones más exigentes. 
              Su diseño Multicam ofrece una fusión visual efectiva con 
              entornos naturales, mientras su corte ergonómico permite 
              libertad total de movimiento. Ya sea en misión, entrenamiento 
              o uso diario, esta polera se adapta al ritmo del guerrero 
              moderno.</p>
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
