import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../../estilos/Product/ProductDetail.css'; 
import NavBar from '../NavBar';
import { Link } from 'react-router-dom';
import Productos2 from '../Productos2';
import ImageMagnifier from './Lupa';
import Footer from '../Footer';

import {
  Magnifier,
  GlassMagnifier,
  SideBySideMagnifier,
  PictureInPictureMagnifier,
  MOUSE_ACTIVATION,
  TOUCH_ACTIVATION
} from "react-image-magnifiers";

const PruebaDetalle = () => {
  const { id } = useParams(); // ID del producto desde la URL
  const [product, setProduct] = useState(null); // Inicializa como null
  const [selectedImage, setSelectedImage] = useState(''); // Imagen inicial
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(''); // Color inicial
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para obtener los detalles del producto desde la API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Primera solicitud: obtener el producto específico por ID
        const response = await fetch(`https://server-triton.vercel.app/productos/${id}`);
        const data = await response.json();
        console.log("Datos del producto:", JSON.stringify(data, null, 2)); 

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        if (!data || !Array.isArray(data) || data.length === 0) {
          throw new Error("No se encontraron productos.");
        }

        // Producto principal
        const productData = data[0];
        setProduct({
          ...productData,
          price: parseFloat(productData.price),
        });

        // Imágenes principales y color
        const images = parseImages(productData.product_images);
        setSelectedImage(images.length > 0 ? images[0].url : productData.main_image);
        setSelectedColor(images.length > 0 ? images[0].color : '');

        // Segunda solicitud: obtener productos similares por nombre desde la API
        const similarProductsResponse = await fetch(`https://server-triton.vercel.app/name?name=${encodeURIComponent(productData.product_name)}`);
        const similarProductsData = await similarProductsResponse.json();
        console.log("Productos similares:", similarProductsData);

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

  // Función para parsear las imágenes desde el string product_images
  const parseImages = (imagesString) => {
    if (!imagesString || typeof imagesString !== 'string') {
      return []; // Devuelve un array vacío si no hay imágenes
    }
    return imagesString.split(';').map((img) => {
      const [colorPart, urlPart] = img.split(', URL:');
      const color = colorPart.replace("Color: ", "").trim();
      const url = urlPart ? urlPart.trim() : '';
      return { url, color };
    });
  };

  // Cambiar talla seleccionada
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Cambiar color y actualizar la imagen principal
  const handleColorChange = (color) => {
    setSelectedColor(color);
    const images = parseImages(product.product_images);
    setSelectedImage(images.find(image => image.color === color)?.url || ''); // Cambia la imagen principal
  };

  // Cambiar imagen seleccionada
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  // Mostrar un mensaje si el producto no existe
  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No se encontró el producto</p>;

  return (
    <>
      <div>
        <NavBar />
      </div>
      <div className="product-detail-container" style={{ marginTop: '120px' }}>
        {/* Imagen principal del producto */}
        <div className="product-images">
        
        <div style={{ width: '600px', height: 'auto' }}>   
        <SideBySideMagnifier 
         className="main-product-image"
          imageSrc={selectedImage}
          imageAlt={product?.product_name || 'Producto'}
          alwaysInPlace={false}           // Permite mostrar al lado cuando haya espacio
          fillAvailableSpace={false}      // Mantiene el tamaño de la imagen original
          zoomPosition="right"            // Cambia la posición del zoom si deseas
          zoomContainerBorder="1px solid #ccc"
          zoomContainerBoxShadow="0 4px 8px rgba(0, 0, 0, 0.2)"

        
        //overlayBackgroundColor={"#4C4C4C"}
       
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

        {/* Detalle del producto */}
        <div className="product-info">
          <h1 className="product-name">{product?.product_name || 'Cargando...'}</h1>
          <p className="product-price">
            ${product?.price ? product.price.toFixed(2) : '0.00'}
          </p>
          <p className="product-description">{product?.description || 'Descripción no disponible.'}</p>

          {/* Productos similares */}
          <div className="product-similar">
            <h3>Productos similares:</h3>
            <div className="similar-products-container">
              {product.similarProducts?.map((item, index) => (
                <div
                  key={index}
                  className="similar-product"
                    >
                      <Link to={`/productos/${item.id}`} className="">
                      <img
                    src={item.main_image}
                    alt={item.product_name}
                    className="similar-product-thumbnail"
                  />
               </Link>
                 
                  <p>{item.product_name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tallas disponibles */}
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

          {/* Botón de añadir al carrito */}
          <button className="add-to-cart-button">
            <FaShoppingCart style={{ marginRight: '8px' }} /> Agregar al carrito
          </button>
        </div>
      </div>
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
