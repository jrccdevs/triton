// src/components/PopularProducts.jsx
import React, { useState, useEffect, useContext } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../../estilos/Carrito/PopularProducts.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ThemeContext } from '../ThemeToggle'; // Importa useTheme

const PopularProducts = () => {
  const [products, setProducts] = useState([ { product_id: 1, main_image: "ruta_a_imagen", product_name: "Producto de Prueba", price: 100 }]);
  const { darkMode } = useContext(ThemeContext); // Usa el hook para obtener el estado del tema

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
      // console.log("Datos completos de la API:", response.data);
 
       // Verifica que la respuesta contenga productos antes de actualizar el estado
       const productos = response.data.products || response.data;
       setProducts(Array.isArray(productos) ? productos : []);
     } catch (error) {
       console.error('Error fetching products:', error.response ? error.response.data : error.message);
       setProducts([]); // Asegura que productos sea vacío en caso de error
     }
   };
 
 
   fetchProducts();
 
  
 

  return (
    <div className={`popular-products-container ${darkMode ? 'dark-mode' : ''}`}>
      <h3>Productos Más Comprados</h3>
      <div className="popular-products-list">
      {products.length > 0 ? (
  products.map(product => (
          <div key={product.id} className="popular-product-item">
            <img src={product.main_image} alt={product.name} className="popular-product-image" />
            <div className="popular-product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">${product.price}</p>
              <Link to={`/productos/${product.id}`} className="add-to-cart-button">
                <FaShoppingCart /> Agregar al carrito
              </Link>
            </div>
          </div>
        ))
        ) : (
          <p>No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
};

export default PopularProducts;
