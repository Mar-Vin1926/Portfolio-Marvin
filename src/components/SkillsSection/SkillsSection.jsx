import React from 'react';
import { motion } from 'framer-motion';
import './SkillsSection.css';

const skills = [
  {
    category: 'LENGUAJES',
    icon: '💻',
    items: [
      { name: 'Python', level: 80, color: 'var(--comic-blue)' },
      { name: 'JavaScript', level: 80, color: 'var(--comic-yellow)' },
      { name: 'Java', level: 75, color: 'var(--comic-red)' },
    ]
  },
  {
    category: 'DESARROLLO WEB',
    icon: '🌐',
    items: [
      { name: 'HTML5', level: 90, color: 'var(--comic-orange)' },
      { name: 'CSS3', level: 85, color: 'var(--comic-blue)' },
      { name: 'React', level: 80, color: 'var(--comic-cyan)' },
      { name: 'Vite', level: 75, color: 'var(--comic-purple)' },
    ]
  },
  {
    category: 'HERRAMIENTAS',
    icon: '🛠️',
    items: [
      { name: 'Git', level: 80, color: 'var(--comic-red)' },
      { name: 'Power BI', level: 90, color: 'var(--comic-yellow)' },
      { name: 'SQL', level: 70, color: 'var(--comic-blue)' },
      { name: 'Excel', level: 85, color: 'var(--comic-green)' },
    ]
  },
  {
    category: 'EN PROCESO',
    icon: '🚀',
    items: [
      { name: 'Análisis de Datos', level: 65, color: 'var(--comic-pink)' },
      { name: 'Machine Learning', level: 50, color: 'var(--comic-purple)' },
      { name: 'Django', level: 20, color: 'var(--comic-green)' },
    ]
  }
];

const SkillBar = ({ name, level, color = 'var(--comic-blue)', index }) => {
  return (
    <motion.div 
      className="skill-item"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{
        marginBottom: '25px',
        position: 'relative',
        transform: `rotate(${Math.random() * 2 - 1}deg)`,
        zIndex: '1'
      }}
    >
      <div className="skill-header" style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '10px',
        fontFamily: '"Comic Neue", cursive, sans-serif',
        fontWeight: 'bold',
        fontSize: '1.1rem',
        color: '#000'
      }}>
        <span className="skill-name" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <span style={{
            display: 'inline-flex',
            width: '28px',
            height: '28px',
            backgroundColor: color,
            borderRadius: '50%',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '14px',
            color: '#000',
            border: '2px solid #000',
            boxShadow: '2px 2px 0 #000',
            flexShrink: '0'
          }}>
            {name[0]}
          </span>
          {name}
        </span>
        <span className="skill-level" style={{
          backgroundColor: '#fff',
          padding: '2px 12px',
          borderRadius: '15px',
          border: '2px solid #000',
          boxShadow: '3px 3px 0 #000',
          fontSize: '0.9rem',
          transform: 'rotate(2deg)'
        }}>
          {level}%
        </span>
      </div>
      <div className="skill-bar" style={{
        width: '100%',
        height: '20px',
        backgroundColor: '#f0f0f0',
        borderRadius: '10px',
        border: '2px solid #000',
        overflow: 'hidden',
        boxShadow: '3px 3px 0 #000',
        position: 'relative'
      }}>
        <motion.div 
          className="skill-progress" 
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
          style={{
            height: '100%',
            backgroundColor: color,
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            transform: 'translateX(-100%)',
            animation: 'shimmer 2s infinite'
          }}></div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <section id="habilidades" className="skills-section">
      <div className="container">
        <div className="skills-content">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="section-header"
            style={{ textAlign: 'center', marginBottom: '30px' }}
          >
            <h2 className="skills-title">
              MIS <span className="highlight">HABILIDADES</span>
            </h2>
          </motion.div>

          <div className="skills-container">
            {skills.map((category, index) => (
              <motion.div 
                key={index} 
                className={`skill-category ${index % 2 === 0 ? 'rotate-left' : 'rotate-right'}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="decorative-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot blue"></span>
                </div>
                
                <h3 className="category-title">
                  <span className="category-icon">{category.icon}</span>
                  {category.category}
                </h3>
                
                <div className="skills-grid">
                  {category.items.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex} 
                      name={skill.name} 
                      level={skill.level} 
                      color={skill.color}
                      index={index * category.items.length + skillIndex}
                    />
                  ))}
                </div>
                
                <div 
                  className="decorative-circle" 
                  style={{ backgroundColor: category.items[0].color }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
