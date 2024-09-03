import React from 'react';
import Empresa from "../img/homepage.webp";
import '../estilos/Seccion1.css'; // Archivo CSS para estilos personalizados

export default function Seccion1() {
  return (
    <div className="image-container">
      <img 
        src={Empresa}
        alt="Descripción de la imagen" 
        className="image"
      />
       <div className="overlay-right">
        <div className="overlay-content">
          <h2>Texto Superpuesto</h2>
          <p>Este es un texto superpuesto sobre la imagen.</p>
        </div>
        <button className="overlay-button">Botón de Acción</button>
      </div>
    </div>
  );
};

 