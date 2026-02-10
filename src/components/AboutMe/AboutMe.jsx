import React from 'react';
import { motion } from 'framer-motion';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="sobre-mi" className="about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="section-header"
          style={{ textAlign: 'center', marginBottom: '30px' }}
        >
          <h2 className="about-title">
            SOBRE <span className="highlight">MÍ</span>
          </h2>
        </motion.div>

        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="comic-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot blue"></span>
            </div>
            
            <p className="about-intro">
              <span className="greeting">¡HOLA DE NUEVO! 👋</span>
              <br />
              Soy <span className="highlight">Marvin</span>, un apasionado desarrollador con un fuerte enfoque en Python y análisis de datos. Actualmente cuento con una técnica en Desarrollo de Software y estoy cursando un máster en Python y Power BI para expandir mis habilidades en el mundo del análisis y visualización de datos.
            </p>
            <p className="about-description">
              Mi objetivo es combinar mis conocimientos en programación con el análisis de datos para crear soluciones innovadoras y significativas. Me encanta aprender nuevas tecnologías y enfrentarme a desafíos que me ayuden a crecer profesionalmente.
            </p>
            
            <div className="education">
              <h3>
                EDUCACIÓN
                <span className="education-underline"></span>
              </h3>
              <ul className="education-list">
                <li className="education-item">
                  <strong className="education-title">Técnico en Desarrollo de Software</strong>
                  <p className="education-institution">Cesde - Terminado</p>
                </li>
                <li className="education-item">
                  <strong className="education-title">Máster en Python y Power BI</strong>
                  <p className="education-institution">Daxus LATAM - En curso</p>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50, rotate: 5 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="image-container">
              <div className="image-background"></div>
              <div className="image-wrapper">
                <img 
                  src="/Marvin3.jpg" 
                  alt="Marvin" 
                  className="profile-image"
                />
                <div className="image-overlay"></div>
              </div>
              <div className="decorative-circle red"></div>
              <div className="decorative-circle blue"></div>
            </div>
            
            <div className="fun-label">
              <span className="pulse-dot"></span>
              <span>¡DISFRUTO LO QUE HAGO!</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Línea decorativa inferior */}
      <div style={{
        position: 'absolute',
        bottom: '0',
        left: '0',
        right: '0',
        height: '15px',
        background: 'repeating-linear-gradient(45deg, var(--comic-blue), var(--comic-blue) 10px, var(--comic-yellow) 10px, var(--comic-yellow) 20px, var(--comic-red) 20px, var(--comic-red) 30px)',
        zIndex: '1'
      }} />
    </section>
  );
};

export default AboutMe;
