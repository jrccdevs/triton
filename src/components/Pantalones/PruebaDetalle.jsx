import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../../estilos/Product/ProductDetail.css'; // Asegúrate de tener el archivo CSS correspondiente
import NavBar from '../NavBar';

const PruebaDetalle = () => {
  const { id } = useParams(); // ID del producto desde la URL
  const [product, setProduct] = useState([]); // Estado para almacenar el producto
  const [selectedImage, setSelectedImage] = useState(''); // Imagen inicial
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(''); // Color inicial
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para obtener los detalles del producto desde la API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://server-triton.vercel.app/productos/${id}`);
        const data = await response.json();
        console.log("Datos del producto:", JSON.stringify(data, null, 2)); // Verifica la respuesta aquí
  
        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
  
        // Verifica que `data` tenga al menos un producto
        if (!data || !Array.isArray(data) || data.length === 0) {
          throw new Error("No se encontraron productos.");
        }
  
        // Establece el primer producto en el estado
        const productData = data[0];
        setProduct({
          ...productData,
          price: parseFloat(productData.price), // Asegúrate de que `price` sea un número
        });
  
        // Asignar las imágenes y otros estados según sea necesario
        const images = parseImages(productData.product_images);
        setSelectedImage(images.length > 0 ? images[0].url : productData.main_image);
        setSelectedColor(images.length > 0 ? images[0].color : '');
  
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
    // Verifica si el parámetro es válido antes de aplicar split
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
        <img
          src={selectedImage}
          alt={product?.product_name || 'Producto'}
          className="main-product-image"
        />
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

        {/* Colores disponibles */}
        <div className="product-colors">
          <h3>Colores:</h3>
          <div className="colors-container">
            {parseImages(product?.product_images || []).map((image, index) => (
              <div
                key={index}
                className={`color-option ${selectedColor === image.color ? 'selected' : ''}`}
                style={{ backgroundImage: `url(${image.url})` }}
                onClick={() => handleColorChange(image.color)}
              />
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
  </>
  );
};

export default PruebaDetalle;
