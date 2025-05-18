import React from 'react';
import Empresa from "../../img/gorros.png";
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import GaleriaPants from '../Pantalones/GaleriaPants';
import Footer from '../Footer';
import '../../estilos/Seccion1.css'; // Archivo CSS para estilos personalizados


export default function Gorros() {
  // Definimos la categoría que queremos pasar
  const categorias = "gorros";

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
            <h2 className="titulo-p">Cubre tu mente. Oculta tu presencia.</h2>
            <p className="des-d">El gorro táctico Multicam no es solo protección: es una 
              extensión de tu camuflaje. Diseñado para resistir el clima, 
              brindar comodidad y mantener un perfil bajo en cualquier 
              terreno, se adapta a misiones en selva, montaña o desierto. 
              Ligero, funcional y con diseño militar auténtico, completa 
              tu equipo con discreción y estilo operativo. Porque en el 
              campo, hasta el detalle más pequeño marca la diferencia.</p>
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
