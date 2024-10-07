import React, { useState } from 'react';
import '../../estilos/Carrito/Carrito.css';

const Carrito = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío de los datos del formulario
    console.log({ name, address, email, quantity, size });
  };

  return (
    <div className="cart-form-container">
      <h2>Formulario de Compra</h2>
      <form onSubmit={handleSubmit} className="cart-form">
        <div className="form-group">
          <label htmlFor="product">Producto:</label>
          <input type="text" id="product" value="Camiseta Militar" readOnly />
        </div>

        <div className="form-group">
          <label htmlFor="size">Talla:</label>
          <select id="size" value={size} onChange={(e) => setSize(e.target.value)} required>
            <option value="">Selecciona una talla</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Cantidad:</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="address">Dirección de envío:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Realizar Compra</button>
      </form>
    </div>
  );
};

export default Carrito;