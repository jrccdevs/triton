import React from 'react';
import Empresa from "../../img/camisas.png";
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import GaleriaPants from '../Pantalones/GaleriaPants';
import Footer from '../Footer';
import '../../estilos/Seccion1.css'; // Archivo CSS para estilos personalizados


export default function Pantalones() {
  // Definimos la categoría que queremos pasar
  const categorias = "chaquetas";

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
            <h2 className="titulo-p">Camuflaje que domina el desierto. Protección que avanza contigo.</h2>
            <p className="des-d">La chaqueta táctica Camel Multicam está diseñada para rendir 
              al máximo en climas cálidos y terrenos áridos. Su camuflaje 
              desértico permite una integración visual precisa en zonas secas y 
              polvorientas, mientras su tejido resistente y transpirable te 
              protege del viento, el sol y el desgaste. Con bolsillos 
              funcionales, refuerzos estratégicos y un diseño que no 
              compromete movilidad, esta chaqueta está lista para misiones 
              donde la arena, el calor y la exigencia no dan tregua.</p>
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
