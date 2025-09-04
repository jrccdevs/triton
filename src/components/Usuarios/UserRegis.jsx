import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../../estilos/Usuarios/UserRegis.css';
import Swal from 'sweetalert2';

const UserRegistrationForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', correo: '', phone: '', metodo_p: 'paypal', ci: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const API_URL = 'https://server-triton.vercel.app/contactos';

  useEffect(() => {
    // Revisar si hay método de pago pendiente
    const pending = localStorage.getItem("pendingPayment");
    if (pending) setFormData(prev => ({ ...prev, metodo_p: pending }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.firstName.trim()) formErrors.firstName = 'El nombre es obligatorio.';
    if (!formData.lastName.trim()) formErrors.lastName = 'El apellido es obligatorio.';
    if (!formData.correo.trim()) formErrors.correo = 'El correo electrónico es obligatorio.';
    else if (!/\S+@\S+\.\S+/.test(formData.correo)) formErrors.correo = 'Correo inválido.';
    if (!formData.phone.trim()) formErrors.phone = 'El número de teléfono es obligatorio.';
    else if (!/^\d{8}$/.test(formData.phone)) formErrors.phone = 'Número de teléfono inválido.';
    if (!formData.ci.trim()) formErrors.ci = 'El CI o NIT es obligatorio.';
    if (!formData.metodo_p.trim()) formErrors.metodo_p = 'Seleccione el método de pago';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      // Verificar si ya existe en la base de datos
      const existing = await axios.get(`${API_URL}?correo=${formData.correo}`);
      if (existing.data.length > 0) {
        Swal.fire("ℹ️ Cliente ya registrado", "Se retoma el método de pago", "info");
        localStorage.setItem("lastContact", JSON.stringify(existing.data[0]));
      } else {
        // Registrar contacto
        const response = await axios.post(API_URL, {
          nombre: formData.firstName,
          apellido: formData.lastName,
          correo: formData.correo,
          telefono: formData.phone,
          metodo_pago: formData.metodo_p,
          ci: formData.ci
        });
        localStorage.setItem("lastContact", JSON.stringify({
          id: response.data.id,
          nombreCompleto: `${response.data.nombre} ${response.data.apellido}`,
          ci_nit: response.data.ci
        }));
      }

      setIsSubmitted(true);

      // Volver automáticamente al método de pago
      const pendingPayment = formData.metodo_p;
      navigate(`/carrito?resume=${pendingPayment}`);

    } catch (error) {
      console.error("Error al registrar o verificar contacto:", error);
      Swal.fire("❌ Error", "Ocurrió un problema al registrar el contacto", "error");
    }
  };

  return (
    <div className="user-registration-container">
      {isSubmitted ? (
        <div className="success-message">
          <h2>¡Registro exitoso!</h2>
          <p>Se completó la verificación del contacto.</p>
          <button onClick={() => setIsSubmitted(false)}>Registrar otro contacto</button>
        </div>
      ) : (
        <form className="user-registration-form" onSubmit={handleSubmit}>
          <h1>Registro de Contactos</h1>

          <div className="form-group">
            <label htmlFor="firstName">Nombre</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Apellido</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="correo">Correo</label>
            <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} />
            {errors.correo && <p className="error">{errors.correo}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Teléfono</label>
            <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone && <p className="error">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="ci">CI / NIT</label>
            <input type="text" id="ci" name="ci" value={formData.ci} onChange={handleChange} />
            {errors.ci && <p className="error">{errors.ci}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="metodo_p">Método de Pago</label>
            <select id="metodo_p" name="metodo_p" value={formData.metodo_p} onChange={handleChange}>
              <option value="paypal">PayPal</option>
              <option value="qr">QR</option>
            </select>
            {errors.metodo_p && <p className="error">{errors.metodo_p}</p>}
          </div>

          <button type="submit" className="submit-button">Registrar / Verificar</button>
          <Link to="/carrito" className="back-to-cart">Volver al carrito</Link>
        </form>
      )}
    </div>
  );
};

export default UserRegistrationForm;
