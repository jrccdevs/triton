import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../../estilos/Product/ProductDetail.css'; // Asegúrate de tener el archivo CSS correspondiente
import NavBar from '../NavBar';

const PruebaDetalle = () => {
  const { id } = useParams(); // ID del producto desde la URL
  const [product, setProduct] = useState(null); // Estado para almacenar el producto
  const [selectedImage, setSelectedImage] = useState(''); // Imagen inicial
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState(''); // Color inicial
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para obtener los detalles del producto desde la API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://api-triton.vercel.app/api/products/${id}`);
        const data = await response.json();
        console.log(data); // Para verificar la respuesta

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        // Verifica si hay un producto en los datos
        if (!data) {
          throw new Error("No se encontraron productos.");
        }

        // Extrae las imágenes del campo product_images
       const images = parseImages(data.product_images); // Ver función parseImages abajo
        const img_principal = parseImages(data.main_image) 
        const color_principal = parseImages(data.color_thumbnails)  
        // Asignar los datos del producto directamente
        setProduct(data);
      //  setSelectedImage(images.length > 0 ? images[0].url : data.main_image); // Imagen inicial
        setSelectedImage(img_principal.length > 0 ? img_principal[0].color : data.main_image); // Imagen inicial se modifico la instruccion 
        setSelectedColor(images.length > 0 ? images[0].color : ''); // Color inicial
        //setSelectedColor(color_principal.length > 0 ? color_principal[0].color : ''); // Color inicial
        console.log(images)
console.log(color_principal)

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Ahora solo dependemos de 'id'

  
  // Función para parsear las imágenes desde el string product_images
  const parseImages = (productImages) => {
    const imagesArray = productImages.split('; ').map(imageString => {
      const [color, url] = imageString.split(', URL: ');
      return { color: color.replace('Color: ', ''), url }; // Limpia el color
    });
    return imagesArray;
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
    <div>
      <div>
        <NavBar />
      </div>
    <div className="product-detail-container" style={{marginTop:'120px'}}>
      {/* Imagen principal del producto */}
      <div className="product-images">
        <img src={selectedImage} alt={product.product_name} className="main-product-image" />
        <div className="product-thumbnails">
          {parseImages(product.product_images).map((image, index) => (
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
        <h1 className="product-name">{product.product_name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>

        {/* Colores disponibles */}
        <div className="product-colors">
          <h3>Colores:</h3>
          <div className="colors-container">
            {parseImages(product.product_images).map((image, index) => (
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
            {product.sizes.split(', ').map((size, index) => (
              <button
                key={index}
                className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                onClick={() => handleSizeChange(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Botón de añadir al carrito */}
        <button className="add-to-cart-button">
          <FaShoppingCart style={{ marginRight: '8px' }} /> Agregar al carrito
        </button>
      </div>
    </div>
    </div>
  );
};

export default PruebaDetalle;
