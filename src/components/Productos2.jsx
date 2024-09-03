import React from 'react';
//import { getProductosRequest } from "../api/productosCar"
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../estilos/Productos2.css"
 export default function Productos2 () {


  const productos =[
    'https://res.cloudinary.com/dsfscypwv/image/upload/v1698807683/controlAlfaSA/zajg0tnrbnomhph0vlbo.png',
    'https://res.cloudinary.com/dsfscypwv/image/upload/v1698807683/controlAlfaSA/zajg0tnrbnomhph0vlbo.png',
    'https://res.cloudinary.com/dsfscypwv/image/upload/v1698807683/controlAlfaSA/zajg0tnrbnomhph0vlbo.png',
    'https://res.cloudinary.com/dsfscypwv/image/upload/v1698807683/controlAlfaSA/zajg0tnrbnomhph0vlbo.png',
   
  ]


 // const [productos, setProductos] = useState([]);

 /* useEffect(() => {
    async function loadProductos() {
      const response = await getProductosRequest();
      console.log(response.data);
      setProductos(response.data);
    }
    loadProductos();
  }, []);*/

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Mostrar 4 slides a la vez
    slidesToScroll: 1, // Desplazar un slide a la vez
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Mostrar 3 slides en pantallas medianas
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2, // Mostrar 2 slides en pantallas pequeñas
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1, // Mostrar 1 slide en pantallas muy pequeñas
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ margin: '20px auto', padding: '16px', overflow: 'hidden' }}>
    <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Nuestros Productos</h2>
    
    <Slider {...settings}>
      {productos.map((image, index) => (
        <div key={index} className="card-container">
          <div className="card-image">
            <img
              src={image}
              alt={`producto-${index}`}
            />
          </div>
          <div className="card-color-boxes">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="color-box color-box-black"></Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="color-box color-box-gray"></Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="color-box color-box-green-camo"></Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="color-box color-box-camel-camo"></Link>
            </div>
          <div className="card-content">
            <h3 className="card-title">Primer Parrafo</h3>
            <p className="card-description">Descripción breve del contenido de la tarjeta.</p>
            <a href="#" className="card-button">Leer Más</a>
          </div>
        </div>
      ))}
    </Slider>
  </div>
  );
};
