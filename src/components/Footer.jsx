import React, { useState, useEffect, useRef, useContext  } from 'react';
import PropTypes from 'prop-types'; // Importar PropTypes para validación
import { FaCommentDots, FaWhatsapp, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa'; // Añadido FaGithub
import '../css/footer.css'; // Asegúrate de que esta ruta sea correcta
import { ThemeContext } from './ThemeToggle'; // Importa tu contexto

function Footer() {
  const { darkMode } = useContext(ThemeContext); // Usa useContext para obtener el estado del tema

  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef(null); // Para scroll automático del chatbot

  // URLs de tus redes sociales y contacto (¡ACTUALIZA ESTO!)
  const whatsappNumber = '59175824357'; // Sin el +
  const defaultWhatsappMessage = 'Hola, necesito más información desde tu portafolio web.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultWhatsappMessage)}`;
  const facebookLink = 'https://facebook.com/tu_usuario_facebook'; // Reemplaza
  const linkedinLink = 'https://linkedin.com/in/tu_usuario_linkedin'; // Reemplaza
  const githubLink = 'https://github.com/tu_usuario_github'; // Reemplaza
  const emailAddress = 'reynaldocalani80@gmail.com'; // Reemplaza

  // Efecto para hacer scroll al final de los mensajes del chatbot
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChatbot = () => {
    setIsChatbotOpen(!isChatbotOpen);
  };

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMsg = { text: newMessage, sender: 'user' };
      setMessages((prevMessages) => [...prevMessages, userMsg]);
      setNewMessage(''); // Limpiar input inmediatamente

      // Simular respuesta del bot después de un breve retraso
      setTimeout(() => {
        setMessages((prevMessages) => [...prevMessages, { text: getChatbotResponse(userMsg.text), sender: 'bot' }]);
      }, 500);
    }
  };

  const handleInputChange = (e) => {
    setNewMessage(e.target.value);
  };

  // Lógica de respuesta simple del chatbot
  const getChatbotResponse = (userMessage) => {
    userMessage = userMessage.toLowerCase();
    if (userMessage.includes('dirección')) {
      return 'Nuestra dirección es Calle Falsa 123, La Paz, Bolivia.';
    } else if (userMessage.includes('teléfono')) {
      return `Nuestro número de teléfono es +${whatsappNumber}.`;
    } else if (userMessage.includes('correo') || userMessage.includes('email')) {
      return `Puedes escribirnos a ${emailAddress}.`;
    } else if (userMessage.includes('hola') || userMessage.includes('buenas')) {
      return '¡Hola! Soy un asistente virtual. ¿En qué puedo ayudarte hoy?';
    } else if (userMessage.includes('whatsapp') || userMessage.includes('contacto')) {
      return 'Claro, haz clic en el icono de WhatsApp para iniciar una conversación directa. También puedes revisar nuestras redes sociales.';
    } else if (userMessage.includes('servicios') || userMessage.includes('portafolio')) {
      return 'Puedes explorar mis proyectos en la sección "Portafolio" de esta web para ver lo que hago.';
    } else {
      return 'Gracias por tu mensaje. Si necesitas asistencia personalizada, te sugiero contactarnos por WhatsApp o revisar nuestras redes sociales.';
    }
  };

  return (
    <footer id="contacto" className={`footer-section ${darkMode ? 'dark-mode' : ''}`}>
      <div className="footer-container">
        {/* Columna de Información de Contacto */}
        <div className="footer-info">
          <h3>¡Hablemos!</h3>
          

          <div className="contact-details">
            <p><strong>Dirección:</strong> La Paz, Bolivia</p>
            <p><strong>Email:</strong> <a href={`mailto:${emailAddress}`}>{emailAddress}</a></p>
            <p><strong>Teléfono:</strong> +{whatsappNumber}</p>
          </div>

          <div className="social-links">
            <a href={facebookLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </a>
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href={githubLink} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Columna de Navegación Rápida (Ejemplo, puedes añadir más) */}
        <div className="footer-nav">
          <h3>Navegación Rápida</h3>
          <ul>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#sobre-mi">Sobre Mí</a></li>
            <li><a href="#proyectos">Proyectos</a></li>
            <li><a href="#habilidades">Habilidades</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Chatbot flotante */}
        <div className="chatbot-widget">
          <div className={`chatbot-toggle ${isChatbotOpen ? 'open' : ''}`} onClick={toggleChatbot}>
            <FaCommentDots size={30} />
          </div>

          {isChatbotOpen && (
            <div className={`chatbot-window ${darkMode ? 'dark-mode' : ''}`}>
              <div className="chatbot-header">
                <h4>Asistente Virtual</h4>
                <button onClick={toggleChatbot} className="chatbot-close-btn">X</button>
              </div>
              <div className="chatbot-messages-container">
                {messages.length === 0 && (
                  <div className="chatbot-placeholder-message">
                    ¡Hola! Estoy aquí para ayudarte. ¿En qué puedo asistirte?
                  </div>
                )}
                {messages.map((msg, index) => (
                  <div key={index} className={`message-bubble ${msg.sender}`}>
                    {msg.text}
                  </div>
                ))}
                <div ref={messagesEndRef} /> {/* Referencia para el scroll */}
              </div>
              <div className="chatbot-input-area">
                <input
                  type="text"
                  value={newMessage}
                  onChange={handleInputChange}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Escribe tu mensaje..."
                  className="chatbot-input-field"
                />
                <button onClick={handleSendMessage} className="chatbot-send-btn">Enviar</button>
              </div>
              <div className="chatbot-external-links">
                <p>¿Prefieres atención personalizada?</p>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="chatbot-whatsapp-btn">
                  <FaWhatsapp /> Chatear en WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Reynaldo Calani Condori. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

// Validación de PropTypes


export default Footer;