import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';

import '../../estilos/Product/ProductDetail.css'; 
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import Productos2 from '../Productos2';

import Footer from '../Footer';
import PaypalButton from "../Carrito/Paypal";

import ReactImageZoom from 'react-image-zoom';


const PruebaDetalle = () => {
  const { id } = useParams(); // ID del producto desde la URL
  const [product, setProduct] = useState(null); // Inicializa como null
  const [selectedImage, setSelectedImage] = useState(''); // Imagen inicial
  const [selectedSize, setSelectedSize] = useState(''); // Talla seleccionada
  const [selectedColor, setSelectedColor] = useState(''); // Color inicial
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error


  
  // Función para obtener los detalles del producto desde la API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://server-triton.vercel.app/productos/${id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        if (!data || !Array.isArray(data) || data.length === 0) {
          throw new Error("No se encontraron productos.");
        }

        const productData = data[0];
        setProduct({
          ...productData,
          price: parseFloat(productData.price),
        });

        const images = parseImages(productData.product_images);
        setSelectedImage(images.length > 0 ? images[0].url : productData.main_image);
        setSelectedColor(images.length > 0 ? images[0].color : '');

        const similarProductsResponse = await fetch(`https://server-triton.vercel.app/name?name=${encodeURIComponent(productData.product_name)}`);
        const similarProductsData = await similarProductsResponse.json();

        if (!similarProductsResponse.ok || !Array.isArray(similarProductsData)) {
          throw new Error("Error al obtener productos similares.");
        }

        const similarProducts = similarProductsData.filter(prod => prod.product_id !== productData.product_id);
        setProduct((prevProduct) => ({
          ...prevProduct,
          similarProducts: similarProducts,
        }));

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    console.log("Producto actualizado:", product);
  }, [product]);

  const parseImages = (imagesString) => {
  if (!imagesString || typeof imagesString !== 'string') return [];

  return imagesString.split('~').map(item => {
    const [color, url, caracteristicas] = item.split('|');
    return {
      color: color?.trim() || '',
      url: url?.trim() || '',
      caracteristicas: caracteristicas?.trim() || '',
    };
  }).filter(img => img.url);
};

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const images = parseImages(product.product_images);
    setSelectedImage(images.find(image => image.color === color)?.url || '');
  };

  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  const addToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Por favor, seleccione una talla y un color.");
      return;
    }

    const cartItem = {
      id: product.product_id,
      name: product.product_name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: selectedImage,
    };

    // Guardar en localStorage o gestionar un estado global
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert("Producto agregado al carrito");
  };
 // Obtener la cantidad de productos en el carrito
 const getCartCount = () => {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  return cart.length;
};
  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No se encontró el producto</p>;

  
  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="product-detail-container" style={{ marginTop: '90px' }}>
        <div className="product-images">
          <div className="producto-p" >
         
          <ReactImageZoom 
               width={550}
               height={550}
               zoomWidth={550}
               img={selectedImage}

          />
          
           
          </div>
          <div className="product-thumbnails">
            {parseImages(product?.product_images || []).map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={`Thumbnail ${index}`}
                onClick={() => handleThumbnailClick(image.url)}
                className={`thumbnail ${image.url === selectedImage ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>

        <div className="product-info">
          <h1 className="producto-name">{product?.product_name || 'Cargando...'}</h1>
          <p className="producto-price">${product?.price ? product.price.toFixed(2) : '0.00'}</p>
          <p className="product-description">{product?.description || 'Descripción no disponible.'}</p>

          <div className="product-similar">
            <h3>Productos similares:</h3>
            <div className="similar-products-container">
              {product.similarProducts?.map((item, index) => (
                <div key={index} className="similar-product">
                  <Link to={`/productos/${item.id}`} className="">
                    <img src={item.main_image} alt={item.product_name} className="similar-product-thumbnail" />
                  </Link>
                  <p>{item.product_name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="product-sizes">
            <h3>Tallas:</h3>
            <div className="sizes">
              {product?.sizes ? product.sizes.split(', ').map((size, index) => (
                <button
                  key={index}
                  className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => handleSizeChange(size)}
                >
                  {size}
                </button>
              )) : 'No hay tallas disponibles.'}
            </div>
          </div>

          <button className="add-to-cart-button" onClick={addToCart}>
            <FaShoppingCart style={{ marginRight: '8px' }} /> Agregar al carrito
          </button>
           {/* Enlace al carrito con el contador de productos */}
           <Link to="/carrito" className="view-cart-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2rim1.5.5 0 0 0 1.5.5V2H14v.5a.5.5 0 0 1 1 0v-1H15.5a.5.5 0 0 1 .5-.5v-1A.5.5 0 0 1 16 1H4.5a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 .5-.5H5zM5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm7 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
            </svg>
              <HiOutlineShoppingCart />Ver carrito {getCartCount()}
           </Link>
           {/*<div>
              <h1>Paga Ahora con.... </h1>
              <PaypalButton />
           </div>*/}
        </div>
      </div>

      {product?.product_images && (
  <div className="image-text-columns">
    {parseImages(product?.product_images || []).map((image, index) => (
      <div className="imgen-text" key={index}style={{ '--delay': `${index * 0.3}s` }}>
        <div className="image-column animate-image">
          <img src={image.url} alt={`Thumbnail ${index}`} className="column-image" />
        </div>
        <div className="text-column animate-text">
          <p className="column-text">{image.caracteristicas}</p>
        </div>
      </div>
    ))}
  </div>
)}
      <div style={{ width: '100%' }}>
        <Productos2 />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default PruebaDetalle;
