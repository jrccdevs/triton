import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../estilos/Usuarios/UserRegis.css';

const UserRegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    correo: '',
    phone: '',
    metodo_p: 'paypal',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // URL base de la API
  const API_URL = 'http://localhost:5000/contactos'; // Cambia según tu entorno

  // Maneja el cambio de datos en los inputs del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Limpia errores al editar el campo
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  // Valida los datos del formulario
  const validateForm = () => {
    let formErrors = {};

    if (!formData.firstName.trim()) formErrors.firstName = 'El nombre es obligatorio.';
    if (!formData.lastName.trim()) formErrors.lastName = 'El apellido es obligatorio.';
    if (!formData.correo.trim()) formErrors.correo = 'El correo electrónico es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(formData.correo)) formErrors.correo = 'Correo electrónico inválido.';
    if (!formData.phone.trim()) formErrors.phone = 'El número de teléfono es obligatorio.';
    else if (!/^\d{8}$/.test(formData.phone)) formErrors.phone = 'Número de teléfono inválido.';
    if (!formData.metodo_p.trim()) formErrors.metodo_p = 'Selecciione el metodo de pago';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Maneja el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Envía los datos a la API
        const response = await axios.post(API_URL, {
          nombre: formData.firstName,
          apellido: formData.lastName,
          correo: formData.correo,
          telefono: formData.phone,
          metodo_pago: formData.metodo_p
        });
        console.log(response)
        console.log('Contacto registrado:', response.data);

        setIsSubmitted(true); // Indica que se ha registrado correctamente
        setFormData({ firstName: '', lastName: '', correo: '', phone: '', metodo_p: 'paypal'}); // Limpia el formulario
      } catch (error) {
        console.error('Error al registrar el contacto:', error);
      }
    }
  };

  return (
    <div className="user-registration-container">
      {isSubmitted ? (
        <div className="success-message">
          <h2>¡Registro exitoso!</h2>
          <p>El contacto ha sido registrado correctamente.</p>
          <button onClick={() => setIsSubmitted(false)}>Registrar otro contacto</button>
        </div>
      ) : (
        <form className="user-registration-form" onSubmit={handleSubmit}>
          <h1>Registro de Contactos</h1>
          <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Ingresa tu nombre"
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Ingresa tu apellido"
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Ingresa tu correo electrónico"
            />
            {errors.correo && <p className="error">{errors.correo}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Ingresa tu número de teléfono"
            />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="metodo_p">Método de Pago</label>
            <select
              id="metodo_p"
              name="metodo_o"
              value={formData.metodo_p}
              onChange={handleChange}
            >
              <option value="paypal">PayPal</option>
              <option value="card">Tarjeta de Crédito/Débito</option>
            </select>
            {errors.metodo_p && <p className="error">{errors.metodo_p}</p>}
          </div>
          <Link to='/carrito'>
          <button type="submit" className="submit-button">
            Registrar Contacto
          </button>
          </Link>
        </form>
      )}
    </div>
  );
};

export default UserRegistrationForm;
