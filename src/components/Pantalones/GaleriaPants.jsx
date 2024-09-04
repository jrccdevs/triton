import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Product 2', price: 49.99, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'Product 4', price: 99.99, image: 'https://via.placeholder.com/200' },
  { id: 5, name: 'Product 3', price: 19.99, image: 'https://via.placeholder.com/200' },
  { id: 6, name: 'Product 4', price: 99.99, image: 'https://via.placeholder.com/200' },
  
  // Puedes agregar más productos aquí
];

const ProductGallery = () => {
  return (
    <div>
      {products.map((product) => (
         <ProductCard key={product.id} product={product} >
         
        </ProductCard>
      ))}
    </div>
  );
};

export default ProductGallery;