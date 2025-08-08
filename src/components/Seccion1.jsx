import React, { useContext } from 'react';
import Empresa from "../img/comb.png";
import '../estilos/Seccion1.css';
import { ThemeContext } from './ThemeToggle';

export default function Seccion1() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={`image-container ${darkMode ? 'dark-mode' : ''}`}>
      <img 
        src={Empresa}
        alt="Descripción de la imagen" 
        className="image"
      />
      <div className="overlay-right">
        <div className="overlay-content">
          <h2 className={`titulo-p ${darkMode ? 'titulo-p-dark' : ''}`}>
            Infiltración total. Dominio en agua y montaña.
          </h2>
          <p className={`des-d ${darkMode ? 'text-dark' : ''}`}>
            El uniforme táctico Multicam está diseñado para quienes 
            operan en los entornos más exigentes. Su camuflaje adaptativo
            se mimetiza perfectamente tanto en zonas húmedas como en 
            terrenos montañosos, brindando discreción y protección. 
            Con tejidos resistentes al agua, de secado rápido 
            y alta durabilidad, ofrece libertad de movimiento, ventilación 
            y resistencia al desgaste. Ya sea cruzando ríos o ascendiendo 
            alturas, este uniforme es tu escudo silencioso en cada misión.
          </p>
        </div>
        <button className="overlay-button">compra &nbsp;&nbsp; ahora</button>
      </div>
    </div>
  );
}
