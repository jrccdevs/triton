import React, { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css';
import Swal from 'sweetalert2';

import '../../estilos/Product/ProductDetail.css';
import NavBar from '../NavBar';
import Productos2 from '../Productos2';
import Footer from '../Footer';
import { ThemeContext } from '../ThemeToggle';
import { CartContext } from '../Carrito/cartContext';

const PruebaDetalle = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { darkMode } = useContext(ThemeContext);
  const { addToCart, cartCount } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);


  const actualizarStock = async (idProducto, cantidadVendida) => {
    try {
      const response = await fetch(
        `https://server-triton.vercel.app/productos/${idProducto}/stock`,
        {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ cantidadVendida }),
        }
      );

      if (!response.ok) throw new Error('Error al actualizar el stock');
      const data = await response.json();
      console.log('✅', data.message);
    } catch (error) {
      console.error('❌ Error:', error);
    }
  };


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://server-triton.vercel.app/productos/${id}`);
        const data = await response.json();

        if (!response.ok) throw new Error(`Error: ${response.status} ${response.statusText}`);
        if (!data || !Array.isArray(data) || data.length === 0) throw new Error("No se encontraron productos.");

        const productData = data[0];
        setProduct({ ...productData, price: parseFloat(productData.price) });

        const images = parseImages(productData.product_images);
        setSelectedImage(images.length > 0 ? images[0].url : productData.main_image);
        setSelectedColor(images.length > 0 ? images[0].color : '');

        const similarProductsResponse = await fetch(`https://server-triton.vercel.app/name?name=${encodeURIComponent(productData.product_name)}`);
        const similarProductsData = await similarProductsResponse.json();

        if (!similarProductsResponse.ok || !Array.isArray(similarProductsData)) throw new Error("Error al obtener productos similares.");

        const similarProducts = similarProductsData.filter(prod => prod.product_id !== productData.product_id);
        setProduct(prev => ({ ...prev, similarProducts }));
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

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

  const handleSizeChange = (size) => setSelectedSize(size);

  const handleColorChange = (color) => {
    setSelectedColor(color);
    const images = parseImages(product.product_images);
    setSelectedImage(images.find(image => image.color === color)?.url || '');
  };

  const handleThumbnailClick = (image) => setSelectedImage(image);
  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (isNaN(value)) {
      setQuantity(1);
      return;
    }
    if (value < 1) {
      setQuantity(1);
    } else if (value > product.cantidad) {
      Swal.fire({
        title: '⚠️ Cantidad no disponible',
        text: `Solo hay ${product.cantidad} unidades en stock.`,
        icon: 'warning',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#3085d6',
        background: '#1e1e1e',
        color: '#fff',
      });
      setQuantity(product.cantidad);
    } else {
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      Swal.fire({
        title: '⚠️ Selección incompleta',
        text: 'Por favor, selecciona una talla y un color antes de continuar.',
        icon: 'warning',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#3085d6',
        background: '#1e1e1e',
        color: '#fff',
      });
      return;
    }

    if (quantity > product.cantidad) {
      Swal.fire({
        title: '❌ Stock insuficiente',
        text: `Solo hay ${product.cantidad} unidades disponibles.`,
        icon: 'error',
        confirmButtonText: 'Ok',
        confirmButtonColor: '#d33',
        background: '#1e1e1e',
        color: '#fff',
      });
      return;
    }

    const cartItem = {
      id: product.product_id,
      name: product.product_name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: selectedImage,
      quantity,
    };

    addToCart(cartItem);

    Swal.fire({
      title: '✅ Producto agregado',
      text: 'El producto se añadió a tu carrito correctamente.',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
      background: '#1e1e1e',
      color: '#fff',
      confirmButtonColor: '#28a745',
    });
  };

  if (loading) return <p>Cargando producto...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!product) return <p>No se encontró el producto</p>;

  return (
    <>
      <NavBar />
      <div className="product-detail-container" style={{ marginTop: '80px' }}>
        <div className="product-images">
          <div className="producto-p">
            <InnerImageZoom
              width={550}
              height={550}
              src={selectedImage}
              zoomSrc={selectedImage}
              zoomScale={2}            // zoom más grande
              zoomType="hover"          // hover en desktop
              fadeDuration={300}        // suaviza la animación
              transitionDuration={300}  // transición suave al mover mouse
              fullscreenOnMobile={true} // fullscreen en móviles
              mobileBreakpoint={480}    // a partir de 480px
              zoomPreload={true}        // precarga la imagen de zoom
              hint={true}               // muestra tooltip de zoom
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
                  <Link to={`/productos/${item.id}`}>
                    <img src={item.main_image} alt={item.product_name} className="similar-product-thumbnail" />
                  </Link>
                  <p>{item.product_name}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="product-sizes" translate="no">
            <h3>Tallas:</h3>
            <div className="sizes">
              {product?.sizes
                ? product.sizes.split(/,\s*/).map((size, index) => (
                  <button
                    key={index}
                    className={`size-option ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </button>
                ))
                : 'No hay tallas disponibles.'}
            </div>
          </div>
          <div className="product-quantity">
            <h3>Cantidad:</h3>
            <input
              type="number"
              min="1"
              onChange={handleQuantityChange}
              value={quantity}

              className="quantity-input"
            />
          </div>
          <button className="add-to-cart-button1" onClick={handleAddToCart}>
            <FaShoppingCart /> Agregar al carrito
          </button>

          <Link to="/carrito" onClick={() => window.scrollTo(0, 0)} className="view-cart-link">
            <HiOutlineShoppingCart /> Ver Carrito {cartCount > 0 && (
              <span className="cart-count-badge">{cartCount}</span>
            )}
          </Link>
        </div>
      </div>

      {product?.product_images && (
        <div className={`image-text-columns ${darkMode ? 'dark-mode' : ''}`}>
          {parseImages(product?.product_images || []).map((image, index) => (
            <div
              className="image-text-row"
              key={index}
              style={{ '--delay': `${index * 0.3}s` }}
            >
              <img
                src={image.url}
                alt={`Thumbnail ${index}`}
                className="column-image"
              />
              <p className="column-text">{image.caracteristicas}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ width: '100%' }}>
        <Productos2 />
      </div>

      <Footer />
    </>
  );
};

export default PruebaDetalle;
