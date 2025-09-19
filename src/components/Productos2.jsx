import React, { useEffect, useState } from 'react';
//import { getProductosRequest } from "../api/productosCar"
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; 
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../estilos/Productos2.css"

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        background: "rgba(0, 0, 0, 0)",
        padding: "5px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0)",
        display: "flex",       
        alignItems: "center",  
        justifyContent: "center", 
        fontSize: "14px",
        cursor: "pointer",}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        background: "rgba(0, 0, 0, 0)",
        padding: "5px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0)",
        display: "flex",       
        alignItems: "center",  
        justifyContent: "center", 
        fontSize: "4px",
        cursor: "pointer",}}
      onClick={onClick}
    />
  );
}

export default function Productos2 () {
  const [products, setProducts] = useState([
    { product_id: 1, main_image: "ruta_a_imagen", product_name: "Producto de Prueba", price: 100 }
  ]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`https://server-triton.vercel.app/productos`);
      const productos = response.data.products || response.data;
      setProducts(Array.isArray(productos) ? productos : []);
    } catch (error) {
      console.error('Error fetching products:', error.response ? error.response.data : error.message);
      setProducts([]);
    }
  };

  fetchProducts();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
      { breakpoint: 600, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div style={{ margin: '20px auto', padding: '16px', overflow: 'hidden' }}>
      <h2 className="titulo_p">Nuestros Productos</h2>
      <Slider {...settings}>
        {products.length > 0 ? (
          products.map(product => (
            <div key={product.product_id} className="card-container">
              <div className="card-image" style={{ position: "relative" }}>
                {/* Franja de promoción */}
                <div style={{
                  position: "absolute",
                  top: "15px",
                  left: "-35px",
                  background: "linear-gradient(135deg, #ff4e50, #ff0000, #ff7300)", // degradado llamativo
                  color: "#fff",
                  padding: "8px 35px",
                  transform: "rotate(-20deg)",
                  fontWeight: "900",
                  fontSize: "15px",
                  textTransform: "uppercase",
                  letterSpacing: "1.5px",
                  borderRadius: "6px",
                  boxShadow: "0px 4px 12px rgba(0,0,0,0.5)",
                  textShadow: "1px 1px 4px rgba(0,0,0,0.8)",
                  animation: "glow 1.8s infinite alternate" // animación brillo
                }}>
                  🔥 Promoción
                </div>
                
                {/* Animación CSS */}
                <style>
                {`
                @keyframes glow {
                  from {
                    box-shadow: 0 0 8px #ff4e50, 0 0 15px #ff7300;
                  }
                  to {
                    box-shadow: 0 0 15px #ff0000, 0 0 25px #ff7300;
                  }
                }
                `}
                </style>
                <Link to={`/productos/${product.id}`} onClick={() => window.scrollTo(0, 0)}>
                  <img src={product.main_image} alt={product.product_name} />
                </Link>
              </div>
              <div className="card-content">
                <h3 className="card-title">{product.name}</h3>
                <p className="card-description">Desde: {product.price}$</p>
              </div>
              <Link 
                to={`/productos/${product.product_id}`} 
                style={{ textDecoration: 'none', marginBottom: "50px" }} 
                className="card-button"
              >
                Agregar al carrito
              </Link>
            </div>
          ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </Slider>
    </div>
  );
};
