import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import "../../estilos/Pantalones.css";

const products = [
    { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/200' },
    { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/200' },
    { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/200' },
    { id: 4, name: 'Product 4', price: 99.99, image: 'https://via.placeholder.com/200' },
    { id: 5, name: 'Product 5', price: 39.99, image: 'https://via.placeholder.com/200' },
    { id: 6, name: 'Product 6', price: 39.99, image: 'https://via.placeholder.com/200' },
   
    // Puedes añadir más productos si lo deseas.
  ];
const ProductCard = () => {
  return (
    <div className="product-gallery">
    {products.map(product => (
      <div key={product.id} className="card">
        <div className="card-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="card-color-boxes">
          <Link to="/" className="color-box color-box-black"></Link>
          <Link to="/" className="color-box color-box-gray"></Link>
          <Link to="/" className="color-box color-box-green-camo"></Link>
          <Link to="/" className="color-box color-box-camel-camo"></Link>
        </div>

        <div className="card-content">
          <h3 className="card-title">{product.name}</h3>
          <p className="card-description">${product.price}</p>
          <a href="#" className="card-button">Leer Más</a>
        </div>
      </div>
    ))}
  </div>
);
};
  
export default ProductCard;