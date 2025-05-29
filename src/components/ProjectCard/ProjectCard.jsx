import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, subtitle, description, images, technologies, githubLink, demoLink, features }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div 
      className="project-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundColor: '#fff',
        borderRadius: '15px',
        border: '3px solid #000',
        boxShadow: '8px 8px 0 #000',
        overflow: 'hidden',
        position: 'relative',
        transform: `rotate(${Math.random() * 2 - 1}deg)`,
        maxWidth: '100%',
        margin: '20px 0',
        zIndex: '1',
        transition: 'all 0.3s ease',
        ':hover': {
          transform: 'translateY(-5px) rotate(0deg)',
          boxShadow: '12px 12px 0 #000'
        }
      }}
    >
      {/* Puntos decorativos */}
      <div style={{
        position: 'absolute',
        top: '15px',
        right: '15px',
        display: 'flex',
        gap: '8px',
        zIndex: '2'
      }}>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--comic-red)'
        }}></span>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--comic-yellow)'
        }}></span>
        <span style={{
          display: 'inline-block',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: 'var(--comic-blue)'
        }}></span>
      </div>

      {/* Imagen del proyecto */}
      {images && images.length > 0 && (
        <div style={{
          position: 'relative',
          width: '100%',
          height: '250px',
          overflow: 'hidden',
          borderBottom: '3px solid #000'
        }}>
          <img 
            src={images[currentImageIndex]} 
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/600x400?text=Proyecto';
            }} 
          />
          
          {images.length > 1 && (
            <>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  prevImage();
                }}
                style={{
                  position: 'absolute',
                  left: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: '2'
                }}
              >
                &lt;
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  nextImage();
                }}
                style={{
                  position: 'absolute',
                  right: '10px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: '#fff',
                  border: '2px solid #fff',
                  borderRadius: '50%',
                  width: '36px',
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: '2'
                }}
              >
                &gt;
              </button>
              <div style={{
                position: 'absolute',
                bottom: '10px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px',
                zIndex: '2'
              }}>
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(index);
                    }}
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      border: '2px solid #fff',
                      backgroundColor: currentImageIndex === index ? 'var(--comic-yellow)' : 'transparent',
                      padding: '0',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    aria-label={`Ir a la imagen ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      )}

      <div style={{
        padding: '25px',
        position: 'relative',
        zIndex: '1'
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          marginBottom: '15px'
        }}>
          <div>
            <h3 style={{
              margin: '0 0 5px 0',
              fontSize: '1.8rem',
              color: '#000',
              fontFamily: '"Comic Neue", cursive, sans-serif',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1px'
            }}>
              {title}
            </h3>
            {subtitle && (
              <h4 style={{
                margin: '0 0 15px 0',
                fontSize: '1.2rem',
                color: 'var(--comic-red)',
                fontFamily: '"Comic Neue", cursive, sans-serif',
                fontWeight: 'bold',
                borderBottom: '2px dashed #000',
                paddingBottom: '10px',
                display: 'inline-block'
              }}>
                {subtitle}
              </h4>
            )}
          </div>
          
          <button 
            onClick={toggleExpand}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1.5rem',
              color: '#000',
              marginLeft: '15px',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              transition: 'all 0.3s ease',
              ':hover': {
                backgroundColor: 'rgba(0,0,0,0.1)'
              }
            }}
            aria-expanded={isExpanded}
            aria-label={isExpanded ? 'Mostrar menos' : 'Mostrar más'}
          >
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        <motion.div
          initial={false}
          animate={{
            height: isExpanded ? 'auto' : '60px',
            overflow: 'hidden'
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          style={{
            marginBottom: '20px',
            position: 'relative'
          }}
        >
          <p style={{
            margin: '0 0 15px 0',
            lineHeight: '1.6',
            color: '#333',
            fontSize: '1rem'
          }}>
            {description}
          </p>
          
          {features && features.length > 0 && (
            <div style={{
              marginTop: '15px',
              padding: '15px',
              backgroundColor: 'rgba(0,0,0,0.03)',
              borderLeft: '4px solid var(--comic-yellow)',
              borderRadius: '0 8px 8px 0'
            }}>
              <h4 style={{
                margin: '0 0 10px 0',
                fontSize: '1.1rem',
                color: '#000',
                fontFamily: '"Comic Neue", cursive, sans-serif',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{
                  display: 'inline-flex',
                  width: '24px',
                  height: '24px',
                  backgroundColor: 'var(--comic-yellow)',
                  borderRadius: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  color: '#000',
                  border: '2px solid #000',
                  boxShadow: '2px 2px 0 #000'
                }}>
                  !
                </span>
                Características principales:
              </h4>
              <ul style={{
                margin: '0',
                paddingLeft: '25px',
                listStyleType: 'none'
              }}>
                {features.map((feature, index) => (
                  <li key={index} style={{
                    position: 'relative',
                    paddingLeft: '25px',
                    marginBottom: '8px',
                    '&:before': {
                      content: '""',
                      position: 'absolute',
                      left: '0',
                      top: '8px',
                      width: '12px',
                      height: '12px',
                      backgroundColor: 'var(--comic-red)',
                      borderRadius: '50%',
                      border: '2px solid #000'
                    }
                  }}>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </motion.div>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginBottom: '20px'
        }}>
          {technologies && technologies.map((tech, index) => (
            <span 
              key={index} 
              style={{
                backgroundColor: 'var(--comic-blue)',
                color: '#000',
                padding: '4px 12px',
                borderRadius: '15px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                border: '2px solid #000',
                boxShadow: '2px 2px 0 #000',
                whiteSpace: 'nowrap',
                transform: 'rotate(-1deg)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div style={{
          display: 'flex',
          gap: '15px',
          marginTop: '15px',
          flexWrap: 'wrap'
        }}>
          {githubLink && (
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                backgroundColor: '#000',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                border: '2px solid #000',
                boxShadow: '3px 3px 0 #000',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: '#fff',
                  color: '#000',
                  transform: 'translate(2px, 2px)',
                  boxShadow: '1px 1px 0 #000'
                }
              }}
            >
              <FaGithub /> GitHub
            </a>
          )}
          {demoLink && demoLink !== '#' && (
            <a 
              href={demoLink} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 20px',
                backgroundColor: 'var(--comic-yellow)',
                color: '#000',
                textDecoration: 'none',
                borderRadius: '30px',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                border: '2px solid #000',
                boxShadow: '3px 3px 0 #000',
                transition: 'all 0.2s ease',
                ':hover': {
                  backgroundColor: '#fff',
                  transform: 'translate(2px, 2px)',
                  boxShadow: '1px 1px 0 #000'
                }
              }}
            >
              <FaExternalLinkAlt /> Ver Demo
            </a>
          )}
        </div>
      </div>
      
      {/* Elemento decorativo */}
      <div style={{
        position: 'absolute',
        bottom: '-50px',
        right: '-50px',
        width: '150px',
        height: '150px',
        backgroundColor: 'var(--comic-yellow)',
        opacity: '0.1',
        borderRadius: '50%',
        zIndex: '-1'
      }}></div>
    </motion.div>
  );
};

export default ProjectCard;
