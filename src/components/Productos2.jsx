import React, { useEffect, useState } from 'react';
//import { getProductosRequest } from "../api/productosCar"
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import Button from 'react-bootstrap/Button';
import axios from 'axios';
//import ImgPro from '../img/Stri.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../estilos/Productos2.css"
 export default function Productos2 () {

  const [products, setProducts] = useState([ { product_id: 1, main_image: "ruta_a_imagen", product_name: "Producto de Prueba", price: 100 }]);

 /* const productos =[
    require('../img/Stri.jpeg'),
    'https://res.cloudinary.com/dsfscypwv/image/upload/v1698807683/controlAlfaSA/zajg0tnrbnomhph0vlbo.png',
    'https://res.cloudinary.com/dsfscypwv/image/upload/v1698807683/controlAlfaSA/zajg0tnrbnomhph0vlbo.png',
    'https://res.cloudinary.com/dsfscypwv/image/upload/v1698807683/controlAlfaSA/zajg0tnrbnomhph0vlbo.png',
    'https://res.cloudinary.com/dsfscypwv/image/upload/v1698807683/controlAlfaSA/zajg0tnrbnomhph0vlbo.png',
   
  ]*/
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://server-triton.vercel.app/productos`);
      console.log("Datos completos de la API:", response.data);

      // Verifica que la respuesta contenga productos antes de actualizar el estado
      const productos = response.data.products || response.data;
      setProducts(Array.isArray(productos) ? productos : []);
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
      setProducts([]); // Asegura que productos sea vacío en caso de error
    }
  };


  fetchProducts();

 

  
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
    {products.length > 0 ? (
  products.map(product => (
        <div key={product.product_id} className="card-container">
          <div className="card-image">
          <Link  to={`/productos/${product.id}`}>
           <img src={product.main_image} alt={product.product_name}/>
          </Link>
          </div>
          <div className="card-color-boxe">
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="color-boxe color-box-black"></Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="color-boxe color-box-gray"></Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="color-boxe color-box-green-camo"></Link>
              <Link to="/" onClick={() => window.scrollTo(0, 0)} className="color-boxe color-box-camel-camo"></Link>
            </div>
          <div className="card-content">
            <h3 className="card-title">{product.name}</h3>
            <p className="card-description">Desde: {product.price}$</p></div>
          </div>
        ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
    </Slider>
  </div>
  );
};

