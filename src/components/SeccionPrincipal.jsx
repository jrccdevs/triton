import React, { useState, useEffect } from 'react';
import Empresa from "../img/banner_tact.webp";
import Imagen from "../img/Gen1.png";
import Imagen2 from "../img/triton3.png";
import '../estilos/SeccionPrincipal.css';
import { Link } from "react-router-dom";
import Slider from 'react-slick';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style,
        background: "rgba(0, 0, 0, 0)", // Transparencia
        // borderRadius: "50%",  // Eliminado: Quita el círculo
        padding: "5px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0)",
        display: "flex",       // Para centrar el icono
        alignItems: "center",  // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
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
        background: "rgba(0, 0, 0, 0)", // Transparencia
        // borderRadius: "50%",  // Eliminado: Quita el círculo
        padding: "5px",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0)",
        display: "flex",       // Para centrar el icono
        alignItems: "center",  // Centra verticalmente
        justifyContent: "center", // Centra horizontalmente
        fontSize: "4px",
        cursor: "pointer",}}
      onClick={onClick}
    />
  );
}
export default function ControlCarousel() {

  const [productos, setProductos] = useState([]);

  const [busqueda, setBusqueda] = useState("");


  useEffect(() => {
    const loadProductos = async () => {
      const data = [
        { id: 1, name: "Producto 1", price: 29.99, image: Empresa },
        { id: 2, name: "Producto 2", price: 39.99, image: Imagen },
        { id: 3, name: "Producto 3", image: Imagen2 },
      ];
      setProductos(data);
    };
    loadProductos();
  }, []);




  const handleChange = (e) => {
    setBusqueda(e.target.value);
    buscar(e.target.value);
  };

  let result = [];

  const buscar = (e) => {
    if (!busqueda) {
      result = productos;
    } else {
      result = productos.filter((dato) =>
        dato.principioactivo
          .toLowerCase()
          .includes(busqueda.toLocaleLowerCase())
      );
    }
  };

  buscar();

  console.log(result);

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="container-fluid">
      <div className="slider-container">
      <Slider {...settings}>
      {result.map((producto) => (
        <div key={producto.id} className="carrucel">   
                <Link to={`/paginabanner/${producto.id}/page/1`}>
                  <img className="carr " src={producto.image} alt="hola" />
                </Link>
        </div>
         ))}
      </Slider>
      </div>
    </div>
       


  );
}


