// src/components/PopularProducts.jsx
import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import '../../estilos/Carrito/PopularProducts.css';
import { Link } from 'react-router-dom';
const PopularProducts = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      const data = [
        { id: 1, name: "Producto 1", price: 29.99, image: "link-to-image1" },
        { id: 2, name: "Producto 2", price: 39.99, image: "link-to-image2" },
        { id: 3, name: "Producto 3", price: 19.99, image: "link-to-image3" },
      ];
      setPopularProducts(data);
    };
    fetchPopularProducts();
  }, []);

  return (
    <div className="popular-products-container">
      <h3>Productos Más Comprados</h3>
      <div className="popular-products-list">
        {popularProducts.map((product) => (
          <div key={product.id} className="popular-product-item">
            <img src={product.image} alt={product.name} className="popular-product-image" />
            <div className="popular-product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">${product.price.toFixed(2)}</p>
              <Link to={`/productos/${product.id}`} className="add-to-cart-button">
                <FaShoppingCart /> Agregar al carrito
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
