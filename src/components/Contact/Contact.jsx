import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });
    
    try {
      const response = await fetch('https://formspree.io/f/mdkgqyrj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        }),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, submitted: true, error: null });
        // Limpiar el formulario
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reiniciar el mensaje de éxito después de 5 segundos
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, submitted: false }));
        }, 5000);
      } else {
        throw new Error('Error al enviar el mensaje');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setFormStatus({
        submitting: false,
        submitted: false,
        error: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.'
      });
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
          style={{ textAlign: 'center', marginBottom: '30px' }}
        >
          <h2 className="contact-title">
            CONTÁC<span className="highlight">TAME</span>
          </h2>
          <p className="contact-description">
            ¿Tienes alguna pregunta o quieres trabajar juntos? No dudes en contactarme.
          </p>
        </motion.div>
        
        <div className="contact-info">
          
          <div className="contact-methods">
            <div className="contact-method">
              <div className="contact-icon email">
                <FaEnvelope />
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:esteban_16_11@hotmail.com">esteban_16_11@hotmail.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon phone">
                <FaPhone />
              </div>
              <div>
                <h3>Teléfono</h3>
                <a href="tel:+573113749226">+57 311 374 9226</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon linkedin">
                <FaLinkedin />
              </div>
              <div>
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/marvin-garcía-216486354/" target="_blank" rel="noopener noreferrer">linkedin.com/in/marvin-garcía</a>
              </div>
            </div>
            
            <div className="contact-method">
              <div className="contact-icon github">
                <FaGithub />
              </div>
              <div>
                <h3>GitHub</h3>
                <a href="https://github.com/Mar-Vin1926" target="_blank" rel="noopener noreferrer">github.com/Mar-Vin1926</a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Asunto</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
                className="form-textarea"
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? (
                'Enviando...'
              ) : (
                <>
                  <FaPaperPlane className="btn-icon" />
                  Enviar Mensaje
                </>
              )}
            </button>
            
            {formStatus.submitted && (
              <div className="form-success">
                ¡Mensaje enviado con éxito! Me pondré en contacto contigo pronto.
              </div>
            )}
            
            {formStatus.error && (
              <div className="form-error">
                {formStatus.error}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
