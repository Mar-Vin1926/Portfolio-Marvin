import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes, FaHome, FaUser, FaCode, FaProjectDiagram, FaPaperPlane, FaPhone } from 'react-icons/fa';
import './App.css';
import './styles/buttons.css'; // Importar estilos de botones
import AboutMe from './components/AboutMe/AboutMe';
import SkillsSection from './components/SkillsSection/SkillsSection';
import ProjectCard from './components/ProjectCard/ProjectCard';
import Contact from './components/Contact/Contact';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef();
  const sections = ['inicio', 'sobre-mi', 'habilidades', 'proyectos', 'contacto'];

  // Efecto para manejar el scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Función para hacer scroll suave a una sección
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Usar scrollIntoView para mejor compatibilidad
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
      
      // Ajuste adicional para el header fijo
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
      
      setIsMenuOpen(false);
    }
  };

  // Proyectos
  const projects = [
    {
      title: 'Nuevas Tecnologías de Programación',
      subtitle: 'Programa de Desarrollo de Software',
      description: 'Aplicación interactiva desarrollada con Streamlit que muestra diversos ejemplos de manipulación y visualización de datos usando DataFrames de Pandas. Incluye múltiples ejemplos prácticos con archivos CSV y Excel, mostrando tanto el código como los resultados.',
      features: [
        'Visualización interactiva de datos con múltiples tipos de gráficos',
        'Filtros dinámicos por columnas, valores y rangos',
        'Carga y procesamiento de archivos CSV y Excel',
        'Ejemplos didácticos con código fuente integrado',
        'Interfaz intuitiva con pestañas para diferentes ejemplos'
      ],
      technologies: ['Python', 'Streamlit', 'Pandas', 'Matplotlib', 'Plotly', 'Numpy'],
      images: [
        '/Captura1.jpg',
        '/captura2.jpg',
        '/captura3.jpg'
      ],
      githubLink: 'https://github.com/Mar-Vin1926/Proyecto-Integrador',
      demoLink: 'https://proyecto-integrador-marvin-garcia.streamlit.app'
    },
    {
      title: 'EvaluAPP',
      subtitle: 'Sistema de Evaluación en Línea',
      description: 'Aplicación web desarrollada con React y Vite que permite la gestión de evaluaciones en línea con diferentes roles de usuario: administrador, docente y estudiante. Incluye autenticación, creación de exámenes, realización de evaluaciones y visualización de calificaciones.',
      features: [
        'Sistema de autenticación con roles (admin, docente, estudiante)',
        'Panel de administración para gestión de usuarios',
        'Creación y edición de exámenes para docentes',
        'Realización de exámenes en tiempo real para estudiantes',
        'Visualización de calificaciones y retroalimentación',
        'Interfaz intuitiva y responsiva'
      ],
      technologies: ['React', 'Vite', 'JavaScript', 'CSS', 'React Router', 'Context API'],
      images: [
        '/Captura4.jpg',
        '/Captura5.jpg'
      ],
      githubLink: 'https://github.com/tuusuario/evaluapp',
      demoLink: '#'
    },
    {
      title: 'FinanzAPP',
      subtitle: 'Sistema de Gestión Financiera Personal',
      description: 'Aplicación de escritorio desarrollada en Python para el control de finanzas personales. Permite registrar ingresos, gastos y ahorros, mostrando un balance detallado con visualizaciones diarias, semanales y mensuales. Los datos se almacenan de forma segura en archivos Excel para su fácil acceso y respaldo.',
      features: [
        'Registro de transacciones (ingresos, gastos, ahorros)',
        'Visualización de balances diarios, semanales y mensuales',
        'Categorización de movimientos financieros',
        'Almacenamiento persistente en archivos Excel',
        'Interfaz gráfica intuitiva y fácil de usar',
        'Resúmenes visuales del estado financiero'
      ],
      technologies: ['Python', 'Tkinter', 'Pandas', 'Matplotlib', 'OpenPyXL'],
      images: [
        '/Captura6.jpg'
      ],
      githubLink: 'https://github.com/Mar-Vin1926/FinanzAPP.git',
      demoLink: '#'
    },
    {
      title: 'Organizador de Archivos',
      subtitle: 'Aplicación de Escritorio',
      description: 'Herramienta de productividad que organiza automáticamente archivos en carpetas según su extensión. Con una interfaz sencilla, permite seleccionar cualquier carpeta para organizar sus archivos de manera eficiente y mantener un sistema de archivos ordenado.',
      features: [
        'Interfaz gráfica intuitiva y fácil de usar',
        'Organización automática por tipo de archivo',
        'Procesamiento rápido de múltiples archivos',
        'Soporte para una amplia variedad de extensiones',
        'Creación automática de carpetas por categorías',
        'Mensajes de retroalimentación sobre el proceso'
      ],
      technologies: ['Python', 'Tkinter', 'OS Module', 'shutil'],
      images: [
        '/Captura7.jpg'
      ],
      githubLink: 'https://github.com/Mar-Vin1926/Organizador-de-Archivos.git',
      demoLink: '#'
    }
  ];

  // Datos de habilidades (puedes personalizarlos según tus habilidades reales)
  const skills = [
    {
      category: 'Lenguajes de Programación',
      items: [
        { name: 'Python', level: 90 },
        { name: 'JavaScript', level: 80 },
        { name: 'Java', level: 70 },
      ]
    },
    {
      category: 'Desarrollo Web',
      items: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'React', level: 80 },
        { name: 'Vite', level: 75 },
      ]
    },
    {
      category: 'Herramientas',
      items: [
        { name: 'Git', level: 80 },
        { name: 'Power BI', level: 75 },
        { name: 'SQL', level: 70 },
        { name: 'Excel Avanzado', level: 85 },
      ]
    },
    {
      category: 'En Proceso',
      items: [
        { name: 'Análisis de Datos', level: 65 },
        { name: 'Machine Learning', level: 50 },
        { name: 'Django', level: 60 },
      ]
    }
  ];

  return (
    <div className="app">
      {/* Navegación Estilo Cómic */}
      <nav className={`comic-navbar ${isScrolled ? 'scrolled' : ''}`} ref={navRef}>
        <div className="comic-navbar-container">
          <a 
            href="#" 
            className="comic-logo" 
            onClick={(e) => { 
              e.preventDefault(); 
              scrollToSection('inicio'); 
              setIsMenuOpen(false);
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '1.5rem',
              color: 'var(--dark-color)',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              fontFamily: '"Bangers", cursive',
              textShadow: '2px 2px 0 #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
              padding: '5px 15px',
              border: '3px solid #000',
              background: 'var(--light-color)',
              transform: 'rotate(-2deg)',
              boxShadow: '3px 3px 0 #000',
              transition: 'all 0.2s ease'
            }}
          >
            <span style={{ color: 'var(--primary-color)' }}>Marvin</span>
            <span style={{ color: 'var(--dark-color)' }}>Dev</span>
          </a>
          
          <div className={`comic-nav-links ${isMenuOpen ? 'active' : ''}`}>
            <button 
              className="comic-button small"
              onClick={() => {
                scrollToSection('inicio');
                setIsMenuOpen(false);
              }}
            >
              <FaHome className="nav-icon" /> Inicio
            </button>
            <button 
              className="comic-button small"
              onClick={() => {
                scrollToSection('sobre-mi');
                setIsMenuOpen(false);
              }}
            >
              <FaUser className="nav-icon" /> Sobre Mí
            </button>
            <button 
              className="comic-button small"
              onClick={() => {
                scrollToSection('habilidades');
                setIsMenuOpen(false);
              }}
            >
              <FaCode className="nav-icon" /> Habilidades
            </button>
            <button 
              className="comic-button small"
              onClick={() => {
                scrollToSection('proyectos');
                setIsMenuOpen(false);
              }}
            >
              <FaProjectDiagram className="nav-icon" /> Proyectos
            </button>
            <button 
              className="comic-button small primary"
              onClick={() => {
                scrollToSection('contacto');
                setIsMenuOpen(false);
              }}
            >
              <FaPaperPlane className="nav-icon" /> Contacto
            </button>
          </div>
          
          <button 
            className="comic-button menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '50px',
              height: '50px',
              padding: '0',
              position: 'relative',
              zIndex: 1000
            }}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1>¡HOLA! SOY <span className="highlight">MARVIN</span></h1>
              <h2>DESARROLLADOR EN FORMACIÓN</h2>
              <p>Apasionado por Python, Análisis de Datos y Desarrollo Web. Transformando ideas en soluciones digitales creativas y funcionales.</p>
              
              <div className="hero-buttons">
                <button 
                  className="comic-button primary large"
                  onClick={() => scrollToSection('contacto')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transform: 'rotate(-1deg)'
                  }}
                >
                  <FaPaperPlane /> Contáctame
                </button>
                <button 
                  className="comic-button dark large"
                  onClick={() => scrollToSection('proyectos')}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    transform: 'rotate(1deg)'
                  }}
                >
                  <FaCode /> Ver Proyectos
                </button>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
            style={{
              flex: 1,
              minWidth: '300px',
              maxWidth: '500px',
              position: 'relative',
              margin: '0 auto'
            }}
          >
            <div className="comic-bubble" style={{
              position: 'absolute',
              top: '20px',
              right: '20px',
              background: 'white',
              padding: '15px 25px',
              borderRadius: '30px',
              border: '3px solid #000',
              boxShadow: '5px 5px 0 #000',
              zIndex: 2,
              transform: 'rotate(5deg)',
              fontFamily: '"Comic Neue", cursive',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              animation: 'bounce 2s infinite alternate'
            }}>
              <span>¡HOLA MUNDO! 👋</span>
            </div>
            
            <div className="profile-placeholder" style={{
              width: '100%',
              maxWidth: '400px',
              aspectRatio: '1',
              margin: '0 auto',
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              border: '5px solid #000',
              boxShadow: '10px 10px 0 #000',
              transform: 'rotate(5deg)',
              transition: 'all 0.4s ease',
              backgroundColor: 'var(--comic-yellow)'
            }}>
              <img 
                src="/Marvin2.png" 
                alt="Marvin" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  transform: 'scale(1.05)',
                  filter: 'contrast(1.1) saturate(1.1)'
                }}
              />
              
              {/* Efecto de destello */}
              <div style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 60%)',
                zIndex: 1
              }} />
            </div>
            
            {/* Elementos decorativos */}
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '20px',
              width: '100px',
              height: '100px',
              background: 'var(--comic-red)',
              borderRadius: '50%',
              opacity: '0.7',
              filter: 'blur(30px)',
              zIndex: '-1',
              animation: 'pulse 4s infinite alternate'
            }} />
          </motion.div>
        </div>
        
        {/* Línea decorativa inferior */}
        <div style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          right: '0',
          height: '20px',
          background: 'repeating-linear-gradient(45deg, var(--comic-red), var(--comic-red) 10px, var(--comic-yellow) 10px, var(--comic-yellow) 20px, var(--comic-blue) 20px, var(--comic-blue) 30px)',
          borderTop: '3px solid #000'
        }} />
        
        {/* Flecha de desplazamiento */}
        <a 
          href="#sobre-mi" 
          className="scroll-down"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('sobre-mi');
          }}
          aria-label="Desplazarse a la siguiente sección"
        >
          Desplázate
          <div className="arrow"></div>
        </a>
      </section>
      
      {/* Sobre Mí */}
      <AboutMe />

      {/* Habilidades */}
      <SkillsSection />

      {/* Proyectos */}
      <section id="proyectos" className="projects-section">
        
        <div className="container" style={{
          position: 'relative',
          zIndex: 1
        }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
            style={{ textAlign: 'center', marginBottom: '30px' }}
          >
            <h2 className="projects-title">
              MIS <span className="highlight">PROYECTOS</span>
            </h2>
          </motion.div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '40px',
            padding: '20px 0',
            position: 'relative',
            zIndex: '1'
          }}>
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
          
          {/* Elementos decorativos */}
          <div style={{
            position: 'absolute',
            top: '50px',
            left: '5%',
            width: '100px',
            height: '100px',
            backgroundColor: 'var(--comic-yellow)',
            borderRadius: '50%',
            opacity: '0.1',
            zIndex: '0'
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '20px',
            right: '10%',
            width: '150px',
            height: '150px',
            backgroundColor: 'var(--comic-blue)',
            borderRadius: '50%',
            opacity: '0.1',
            zIndex: '0'
          }}></div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto">
        <Contact />
      </section>

      {/* Footer */}
      <footer className="main-footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-about">
              <h3>Marvin</h3>
              <p>Desarrollador en formación apasionado por crear soluciones innovadoras con código.</p>
            </div>
            <div className="footer-links">
              <h4>Enlaces Rápidos</h4>
              <ul>
                {sections.map((section) => (
                  <li key={section}>
                    <a 
                      href={`#${section}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(section);
                      }}
                    >
                      {section.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-social">
              <h4>Sígueme</h4>
              <div className="social-links">
                <a href="https://github.com/Mar-Vin1926" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/marvin-garcía-216486354/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="tel:+573113749226" aria-label="Llamar">
                  <FaPhone />
                </a>
                <a href="mailto:esteban_16_11@hotmail.com" aria-label="Enviar correo">
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Marvin. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
