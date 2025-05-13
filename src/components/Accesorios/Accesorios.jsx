import React from 'react';
import Empresa from "../../img/accesorios.png";
import NavBar from '../NavBar';
import ProductCard from '../Pantalones/ProductCard';
import GaleriaPants from '../Pantalones/GaleriaPants';
import Footer from '../Footer';
import '../../estilos/accesorios/accesorios.css'
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
        <div className="overlay-acce">
          <div className="overlay-acce">
            <h2 className="titulo-acce">Equipado para resistir. Listo para avanzar.</h2>
            <p className="des-acce" >Cada misión exige más que solo actitud: exige equipo 
              confiable. Nuestra línea de accesorios tácticos está diseñada
               para acompañarte en condiciones extremas, desde la selva hasta
                la montaña. Botas resistentes, cuchillos de supervivencia, 
                riñoneras multifuncionales, caramañolas duraderas y estuches de
                alto rendimiento… Todo pensado para ofrecer funcionalidad,
                resistencia y comodidad. No importa el terreno ni el clima:
                 con estos accesorios, cada paso te acerca al objetivo.</p>
          </div>
         {/* <button  className="button-acce">COMPRA AHORA</button>*/}
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
