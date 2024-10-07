import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa'; // Importa el ícono de carrito
import '../../estilos/Product/ProductDetail.css'; // Asegúrate de tener el archivo CSS correspondiente

// Ejemplo de productos (puedes cambiar los datos)
const products = [
  {
    id: 1,
    name: 'Striker XT Gen 3',
    price: 299.99,
    mainImage: 'https://via.placeholder.com/400',
    description: 'Las Striker XT Gen 3 son pantalones de combate de última generación con funcionalidades avanzadas.',
    images: {
      Black: [
        'https://via.placeholder.com/100/000000',
        'https://via.placeholder.com/500/000000',
        'https://via.placeholder.com/900/000000',
        'https://via.placeholder.com/1000/000000'
      ],
      Green: [
        'https://via.placeholder.com/100/008000',
        'https://via.placeholder.com/500/008000',
        'https://via.placeholder.com/900/008000',
        'https://via.placeholder.com/1000/008000'
      ],
      Camo: [
        'https://via.placeholder.com/100/556b2f',
        'https://via.placeholder.com/500/556b2f',
        'https://via.placeholder.com/900/556b2f',
        'https://via.placeholder.com/1000/556b2f'
      ],
      Red: [
        'https://via.placeholder.com/100/ff0000',
        'https://via.placeholder.com/500/ff0000',
        'https://via.placeholder.com/900/ff0000',
        'https://via.placeholder.com/1000/ff0000'
      ],
      Blue: [
        'https://via.placeholder.com/100/0000ff',
        'https://via.placeholder.com/500/0000ff',
        'https://via.placeholder.com/900/0000ff',
        'https://via.placeholder.com/1000/0000ff'
      ],
      Yellow: [
        'https://via.placeholder.com/100/ffff00',
        'https://via.placeholder.com/500/ffff00',
        'https://via.placeholder.com/900/ffff00',
        'https://via.placeholder.com/1000/ffff00'
      ],
      White: [
        'https://via.placeholder.com/100/ffffff',
        'https://via.placeholder.com/500/ffffff',
        'https://via.placeholder.com/900/ffffff',
        'https://via.placeholder.com/1000/ffffff'
      ],
      Grey: [
        'https://via.placeholder.com/100/808080',
        'https://via.placeholder.com/500/808080',
        'https://via.placeholder.com/900/808080',
        'https://via.placeholder.com/1000/808080'
      ],
      Pink: [
        'https://via.placeholder.com/100/ffc0cb',
        'https://via.placeholder.com/500/ffc0cb',
        'https://via.placeholder.com/900/ffc0cb',
        'https://via.placeholder.com/1000/ffc0cb'
      ],
      Orange: [
        'https://via.placeholder.com/100/ffa500',
        'https://via.placeholder.com/500/ffa500',
        'https://via.placeholder.com/900/ffa500',
        'https://via.placeholder.com/1000/ffa500'
      ],
      Purple: [
        'https://via.placeholder.com/100/800080',
        'https://via.placeholder.com/500/800080',
        'https://via.placeholder.com/900/800080',
        'https://via.placeholder.com/1000/800080'
      ],
    },
    colorImages: {
      Black: 'https://via.placeholder.com/50/000000',
      Green: 'https://via.placeholder.com/50/008000',
      Camo: 'https://via.placeholder.com/50/556b2f',
      Red: 'https://via.placeholder.com/50/ff0000',
      Blue: 'https://via.placeholder.com/50/0000ff',
      Yellow: 'https://via.placeholder.com/50/ffff00',
      White: 'https://via.placeholder.com/50/ffffff',
      Grey: 'https://via.placeholder.com/50/808080',
      Pink: 'https://via.placeholder.com/50/ffc0cb',
      Orange: 'https://via.placeholder.com/50/ffa500',
      Purple: 'https://via.placeholder.com/50/800080',
    },
    sizes: ['S', 'M', 'L', 'XL'],
    categoria: ['PANTALONES', 'CAMISAS', 'GORROS', 'ACCESORIOS'],
  },
  // Otros productos
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  
  const [selectedImage, setSelectedImage] = useState(product.images.Black[0]); // Imagen inicial del color negro
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('Black'); // Color inicial

  // Cambiar talla seleccionada
  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  // Cambiar color y actualizar la imagen principal
  const handleColorChange = (color) => {
    setSelectedColor(color);
    setSelectedImage(product.images[color][0]); // Cambia la imagen principal a la primera imagen del color seleccionado
  };

  // Cambiar imagen seleccionada
  const handleThumbnailClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product-detail-container">
      {/* Imagen principal del producto */}
      <div className="product-images">
        <img src={selectedImage} alt={product.name} className="main-product-image" />
        <div className="product-thumbnails">
          {product.images[selectedColor].map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(image)}
              className={`thumbnail ${image === selectedImage ? 'active' : ''}`}
            />
          ))}
        </div>
      </div>

      {/* Detalle del producto */}
      <div className="product-info">
        <h1 className="product-name">{product.name}</h1>
        <p className="product-price">${product.price.toFixed(2)}</p>
        <p className="product-description">{product.description}</p>

        {/* Colores disponibles */}
        <div className="product-colors">
          <h3>Colores:</h3>
          <div className="colors-container">
            {Object.keys(product.colorImages).map((color, index) => (
              <div
                key={index}
                className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                style={{ backgroundImage: `url(${product.colorImages[color]})` }}
                onClick={() => handleColorChange(color)}
              />
            ))}
          </div>
        </div>

        {/* Tallas disponibles */}
        <div className="product-sizes">
          <h3>Tallas:</h3>
          <div className="sizes">
            {product.sizes.map((size, index) => (
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
  );
};

export default ProductDetail;



import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import '../../estilos/Product/ProductDetail.css'; // Asegúrate de tener el archivo CSS correspondiente


const PruebaDetalle = () => {
  const { id } = useParams(); // ID del producto desde la URL
  const [product, setProduct] = useState(null); // Estado para almacenar el producto
  const [selectedImage, setSelectedImage] = useState(product.main_images[0][0]); // Imagen inicial del color negro
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState([0]); // Color inicial
  const [loading, setLoading] = useState(true); // Estado de carga
  const [error, setError] = useState(null); // Estado de error

  // Función para obtener los detalles del producto desde la API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:4001/api/products/${id}`);
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

        // Asignar los datos del producto directamente
        setProduct(data);
        setSelectedImage(images.length > 0 ? images[0].url : data.main_image); // Imagen inicial
        setSelectedColor(images.length > 0 ? images[0].color : ''); // Color inicial

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
    <div className="product-detail-container">
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
  );
};

export default PruebaDetalle;
