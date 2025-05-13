import React from 'react';
import Empresa from "../img/comb.png";
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
          <h2 className="titulo-p">Infiltración total. Dominio en agua y montaña.</h2>
          <p className="des-d">El uniforme táctico Multicam está diseñado para quienes 
            operan en los entornos más exigentes. Su camuflaje adaptativo
             se mimetiza perfectamente tanto en zonas húmedas como en 
             terrenos montañosos, brindando discreción y protección. 
             Con tejidos resistentes al agua, de secado rápido 
             y alta durabilidad, ofrece libertad de movimiento, ventilación 
             y resistencia al desgaste. Ya sea cruzando ríos o ascendiendo 
             alturas, este uniforme es tu escudo silencioso en cada misión.</p>
        </div>
        <button className="overlay-button">compra  ahora</button>
      </div>
    </div>
  );
};

 