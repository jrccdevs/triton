import React from 'react';
import ProductCard from './ProductCard';
import '../../estilos/CategoriaPants.css'
import Empresa from "../../img/homepage.webp";
import Slider from 'react-slick'; // Importamos el carrusel
import Negro from '../../img/negro-n.png';
import Blanco from '../../img/blanco-n.png';
import Mision from '../../img/mision.png';
import Montana from '../../img/montana.png';

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
          <img src={Negro} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants">
            <div className="overlay-content-pants">
              <h2 className="pants-t">Negro en la nieve. Presencia que impone, sigilo que domina.</h2>
              <p className="pants-p">La ropa militar negra no solo rompe el blanco del entorno: 
                lo conquista. Diseñada para operaciones en climas fríos y
                 extremos, esta indumentaria ofrece aislamiento térmico,
                  movilidad táctica y protección contra viento y nieve.</p>
            </div>
            <button className="overlay-button-pants">compra   ahora</button>
          </div>
        </div>

          {/* Cuadro 2 */}
          <div className="image-container-pants">
          <img src={Blanco} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants2">
            <div className="overlay-content-pants">
              <h2 className="pants-t2">Verde entre nieve. Adaptación que desafía el entorno.</h2>
              <p className="pants-p2">La ropa militar verde en terreno nevado simboliza al 
                combatiente que desafía las condiciones con audacia y 
                preparación. Confeccionada con materiales térmicos,
                 resistentes al agua y al viento, esta indumentaria 
                 ofrece abrigo, movilidad y camuflaje funcional en zonas 
                 mixtas de nieve, vegetación o sombra.</p>
            </div>
            <button className="overlay-button-pants">compra ahora</button>
          </div>
        </div>

          {/* Cuadro 3 */}
          <div className="image-container-pants">
          <img src={Mision} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants3">
            <div className="overlay-content-pants">
              <h2 className="pants-t3">Tres sombras en movimiento. Una misión. Cero margen de error.</h2>
              <p className="pants-p3">Cuando el rotor corta el silencio y los motores rugen en 
                sincronía, comienza la misión. Un helicóptero sobrevuela el 
                terreno mientras dos camiones avanzan por rutas críticas: 
                velocidad, precisión y fuerza en acción. En este tipo de 
                operaciones, no hay espacio para fallos. Cada soldado, cada 
                pieza de equipo, cada segundo cuenta. Ya sea por aire o por 
                tierra, la misión exige preparación total. Y tú llevas el 
                uniforme, los accesorios y la actitud que marcan la diferencia.</p>
            </div>
            {/*<button className="overlay-button-pants">Botón de Acción</button>*/}
          </div>
        </div>

          {/* Cuadro 4 */}
          <div className="image-container-pants">
          <img src={Montana} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants4">
            <div className="overlay-content-pants">
              <h2 className="pants-t4">Multicam en el agua. Invisibilidad que resiste lo imposible.</h2>
              <p className="pants-p4">En operaciones anfibias, la diferencia entre el éxito y el 
                fracaso está en el equipo. El uniforme táctico Multicam se 
                adapta al entorno acuático como una segunda piel: resistente 
                al agua, de secado rápido y con camuflaje que se funde entre 
                reflejos, rocas y vegetación húmeda. </p>
            </div>
            {/*<button className="overlay-button-pants">Botón de Acción</button>*/}
          </div>
        </div>
        </Slider>
      </div>

      {/* Cuadrícula en pantallas grandes */}
      <div className="grid-large-pants">
        {/* Cuadro 1 */}
        <div className="image-container-pants">
          <img src={Negro} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants">
            <div className="overlay-content-pants">
              <h2 className="pants-t">Negro en la nieve. Presencia que impone, sigilo que domina.</h2>
              <p className="pants-p">La ropa militar negra no solo rompe el blanco del entorno: 
                lo conquista. Diseñada para operaciones en climas fríos y
                 extremos, esta indumentaria ofrece aislamiento térmico,
                  movilidad táctica y protección contra viento y nieve.</p>
            </div>
            <button className="overlay-button-pants">compra   ahora</button>
          </div>
        </div>

        {/* Cuadro 2 */}
        <div className="image-container-pants">
          <img src={Blanco} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants2">
            <div className="overlay-content-pants">
              <h2 className="pants-t2">Verde entre nieve. Adaptación que desafía el entorno.</h2>
              <p className="pants-p2">La ropa militar verde en terreno nevado simboliza al 
                combatiente que desafía las condiciones con audacia y 
                preparación. Confeccionada con materiales térmicos,
                 resistentes al agua y al viento, esta indumentaria 
                 ofrece abrigo, movilidad y camuflaje funcional en zonas 
                 mixtas de nieve, vegetación o sombra.</p>
            </div>
            <button className="overlay-button-pants">compra ahora</button>
          </div>
        </div>

        {/* Cuadro 3 */}
        <div className="image-container-pants">
          <img src={Mision} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants3">
            <div className="overlay-content-pants">
              <h2 className="pants-t3">Tres sombras en movimiento. Una misión. Cero margen de error.</h2>
              <p className="pants-p3">Cuando el rotor corta el silencio y los motores rugen en 
                sincronía, comienza la misión. Un helicóptero sobrevuela el 
                terreno mientras dos camiones avanzan por rutas críticas: 
                velocidad, precisión y fuerza en acción. En este tipo de 
                operaciones, no hay espacio para fallos. Cada soldado, cada 
                pieza de equipo, cada segundo cuenta. Ya sea por aire o por 
                tierra, la misión exige preparación total. Y tú llevas el 
                uniforme, los accesorios y la actitud que marcan la diferencia.</p>
            </div>
            {/*<button className="overlay-button-pants">Botón de Acción</button>*/}
          </div>
        </div>

        {/* Cuadro 4 */}
        <div className="image-container-pants">
          <img src={Montana} alt="Descripción de la imagen" className="image-pants" />
          <div className="overlay-right-pants4">
            <div className="overlay-content-pants">
              <h2 className="pants-t4">Multicam en el agua. Invisibilidad que resiste lo imposible.</h2>
              <p className="pants-p4">En operaciones anfibias, la diferencia entre el éxito y el 
                fracaso está en el equipo. El uniforme táctico Multicam se 
                adapta al entorno acuático como una segunda piel: resistente 
                al agua, de secado rápido y con camuflaje que se funde entre 
                reflejos, rocas y vegetación húmeda. </p>
            </div>
            {/*<button className="overlay-button-pants">Botón de Acción</button>*/}
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductGallery;