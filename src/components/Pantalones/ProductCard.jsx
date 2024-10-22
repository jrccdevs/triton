import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import '../../estilos/Pantalones.css'
const ProductCard = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('Categoría capturada:', category);  // Verificar el valor de la categoría

    if (!category) {
      console.error('La categoría no está definida');
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://api-triton.vercel.app/api/products/category/${category}`);
     
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [category]);

  return (
    <div>
       <div> 
         <NavBar />
       </div>
    <div className="product-gallery">
     
      {products.map(product => (
        <div key={product.product_id} className="card">
          <div className="card-image">
            <img src={product.main_image} alt={product.product_name} />
          </div>

          <div className="card-color-boxes">
            <Link to="/" className="color-box color-box-black"></Link>
            <Link to="/" className="color-box color-box-gray"></Link>
            <Link to="/" className="color-box color-box-green-camo"></Link>
            <Link to="/" className="color-box color-box-camel-camo"></Link>
          </div>

          <div className="card-content">
            <h3 className="card-title">{product.product_name}</h3>
            <p className="card-description">${product.price}</p>
            <Link to={`/product/${product.product_id}`} className="card-button">
              Agregar al carrito
            </Link>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ProductCard;
