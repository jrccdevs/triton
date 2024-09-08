import React from 'react';
import ProductCard from './ProductCard';
import '../../estilos/CategoriaPants.css'
import Empresa from "../../img/homepage.webp";
import Slider from 'react-slick'; // Importamos el carrusel


const ProductGallery = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      {/* Carrusel solo en pantallas pequeñas */}
      <div className="carousel-responsive-pants">
        <Slider {...settings}>
          {/* Cuadro 1 */}
          <div className="image-container-pants">
            <img src={Empresa} alt="Descripción de la imagen" className="image-pants" />
            <div className="overlay-right-pants">
              <div className="overlay-content-pants">
                <h2>Texto Superpuesto</h2>
                <p>Este es un texto superpuesto sobre la imagen.</p>
              </div>
              <button className="overlay-button-pants">Botón de Acción</button>
            </div>
          </div>

          {/* Cuadro 2 */}
          <div className="image-container-pants">
            <img src={Empresa} alt="Descripción de la imagen" className="image-pants" />
            <div className="overlay-right-pants">
              <div className="overlay-content-pants">
                <h2>Texto Superpuesto</h2>
                <p>Este es un texto superpuesto sobre la imagen.</p>
              </div>
              <button className="overlay-button-pants">Botón de Acción</button>
            </div>
          </div>

          {/* Cuadro 3 */}
          <div className="image-container-pants">
            <img src={Empresa} alt="Descripción de la imagen" className="image-pants" />
            <div className="overlay-right-pants">
              <div className="overlay-content-pants">
                <h2>Texto Superpuesto</h2>
                <p>Este es un texto superpuesto sobre la imagen.</p>
              </div>
              <button className="overlay-button-pants">Botón de Acción</button>
            </div>
          </div>

          {/* Cuadro 4 */}
          <div className="image-container-pants">
            <img src={Empresa} alt="Descripción de la imagen" className="image-pants" />
            <div className="overlay-right-pants">
              <div className="overlay-content-pants">
                <h2>Texto Superpuesto</h2>
                <p>Este es un texto superpuesto sobre la imagen.</p>
              </div>
              <button className="overlay-button-pants">Botón de Acción</button>
            </div>
          </div>
        </Slider>
      </div>

      {/* Cuadrícula en pantallas grandes */}
      <div className="grid-large-pants">
        {/* Cuadro 1 */}
        <div className="image-container-pants">
          <img src={Empresa} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants">
            <div className="overlay-content-pants">
              <h2>Texto Superpuesto</h2>
              <p>Este es un texto superpuesto sobre la imagen.</p>
            </div>
            <button className="overlay-button-pants">Botón de Acción</button>
          </div>
        </div>

        {/* Cuadro 2 */}
        <div className="image-container-pants">
          <img src={Empresa} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants">
            <div className="overlay-content-pants">
              <h2>Texto Superpuesto</h2>
              <p>Este es un texto superpuesto sobre la imagen.</p>
            </div>
            <button className="overlay-button-pants">Botón de Acción</button>
          </div>
        </div>

        {/* Cuadro 3 */}
        <div className="image-container-pants">
          <img src={Empresa} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants">
            <div className="overlay-content-pants">
              <h2>Texto Superpuesto</h2>
              <p>Este es un texto superpuesto sobre la imagen.</p>
            </div>
            <button className="overlay-button-pants">Botón de Acción</button>
          </div>
        </div>

        {/* Cuadro 4 */}
        <div className="image-container-pants">
          <img src={Empresa} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants">
            <div className="overlay-content-pants">
              <h2>Texto Superpuesto</h2>
              <p>Este es un texto superpuesto sobre la imagen.</p>
            </div>
            <button className="overlay-button-pants">Botón de Acción</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductGallery;