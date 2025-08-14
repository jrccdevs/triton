import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../estilos/Pantalones.css'
const ProductCard = ({ categorias }) => {
  const [products, setProducts] = useState([ { product_id: 1, main_image: "ruta_a_imagen", product_name: "Producto de Prueba", price: 100 }]);

  useEffect(() => {
    console.log('Categoría capturada:', categorias);  // Verificar el valor de la categoría

    if (!categorias) {
      console.error('La categoría no está definida');
      return;
    }

    const fetchProducts = async () => {
      try {
        const response = await axios.get(`https://server-triton.vercel.app/categorias/${categorias}`);
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
  }, [categorias]);
  console.log("Productos en el estado:", products);

  return (
    <>
    
    <div className="product-gallery">
      {products.length > 0 ? (
        products.map(product => (
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
              <Link to={`/productos/${product.product_id}`} style={{textDecoration: 'none'}} className="card-button">
                Agregar al carrito
              </Link>
            </div>
          </div>
        ))
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  </>
  );
};

export default ProductCard;
