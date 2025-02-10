import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import "../estilos/Buscador.css";

function useKey(key, cb) {
  const callbackRef = useRef(cb);

  useEffect(() => {
    callbackRef.current = cb;
  });

  useEffect(() => {
    function handle(event) {
      if (event.code === key) {
        callbackRef.current(event);
      }
    }
    document.addEventListener("keypress", handle);
    return () => document.removeEventListener("keypress", handle);
  }, [key]);
}

export default function Busqueda() {
  const navigate = useNavigate();
  const [formafarmaceutica, setformafarmaceuticaid] = useState("");
  const [productos, setProductos] = useState([]);
  const [productosMatch, setProductosMatch] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getProductos = async () => {
      const response = await fetch(
        `https://server-triton.vercel.app/productos/${formafarmaceutica}`
      );
      const data = await response.json();
      setProductos(data);
    };
    getProductos();
  }, [formafarmaceutica]);

  const buscarProductos = (text) => {
    if (!text) {
      setProductosMatch([]); // Limpiar las sugerencias si no hay texto
    } else {
      const matches = productos.filter((product) => {
        const regex = new RegExp(`${text}`, "gi");
        return product.name.match(regex);
      });
      setProductosMatch(matches); // Actualizar las sugerencias
    }
    setSearchText(text); // Asegurarse de que el texto de búsqueda esté actualizado
  };

  const handleRedirect = () => {
    if (productosMatch.length > 0) {
      // Redirigir al primer producto que coincida con la búsqueda
      const firstProduct = productosMatch[0];
      navigate(`/productos/${firstProduct.id}`);
    } else {
      alert("No hay productos que coincidan con tu búsqueda.");
    }
  };

  useKey("Enter", handleRedirect);

  return (
    <div className="search-bar-container fijo">
      <div className="search-container">
        <input
          onChange={(e) => buscarProductos(e.target.value)}
          type="text"
          placeholder="Buscador de Productos"
          className="search-bar"
          value={searchText}
        />
        <FaSearch className="search-icon" onClick={handleRedirect} />
      </div>

      {productosMatch.length > 0 && (
        <div className="search-suggestions">
          {productosMatch.slice(0, 5).map((item, index) => (
             <div 
          
             className="search-suggestion-item"
           
         >
            <Link
              key={index}
              to={`/productos/${item.id}`}
              className="search-suggestion-item"

              onClick={() => buscarProductos("")}
            >
              <div className="producto-card">
                <img
                  src={item.main_image}
                  alt={item.name}
                  className="producto-image"
                />
                <span>{item.name}</span>
              </div>
            </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
