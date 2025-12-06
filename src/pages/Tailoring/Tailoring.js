import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaCut,
  FaTshirt,
  FaStar,
  FaBriefcase,
  FaCheckCircle,
  FaPalette,
  FaCog,
  FaGraduationCap,
  FaQuoteLeft
} from 'react-icons/fa';
import './Tailoring.css';

const Tailoring = () => {
  const skills = [
    { icon: '✂️', title: 'Tailoring Skills', description: 'Master cutting, sewing, and garment construction techniques' },
    { icon: '👗', title: 'Fashion Design', description: 'Learn design principles, pattern making, and creative styling' },
    { icon: '🪡', title: 'Machine Operation', description: 'Professional sewing machine operation and maintenance' },
    { icon: '💼', title: 'Business Skills', description: 'Start and grow your own successful apparel business' }
  ];

  const modules = [
    {
      title: 'Tailoring Fundamentals',
      icon: <FaCut />,
      topics: [
        'Body measurements and sizing',
        'Fabric selection and properties',
        'Cutting and pattern preparation',
        'Hand and machine stitching techniques',
        'Seam finishing and pressing'
      ]
    },
    {
      title: 'Fashion Design & Styling',
      icon: <FaPalette />,
      topics: [
        'Design principles and elements',
        'Pattern drafting and alterations',
        'Color theory and coordination',
        'Fashion trends and market research',
        'Portfolio development'
      ]
    },
    {
      title: 'Machine Operations & Maintenance',
      icon: <FaCog />,
      topics: [
        'Sewing machine types and uses',
        'Threading and tension adjustment',
        'Troubleshooting common issues',
        'Specialized equipment operation',
        'Machine care and maintenance'
      ]
    },
    {
      title: 'Business Startup & Management',
      icon: <FaBriefcase />,
      topics: [
        'Business registration and planning',
        'Pricing and costing strategies',
        'Customer service excellence',
        'Marketing and branding',
        'Financial management and record keeping'
      ]
    }
  ];

  const highlights = [
    { icon: <FaGraduationCap />, title: 'Hands-on Training', text: 'Learn by doing with real projects and practical experience' },
    { icon: <FaStar />, title: 'Industry Standards', text: 'Professional techniques and quality control measures' },
    { icon: <FaBriefcase />, title: 'Entrepreneurship Focus', text: 'Business planning, customer service, and market entry strategies' },
    { icon: <FaCheckCircle />, title: 'Certification', text: 'Recognized credentials upon successful program completion' }
  ];

  return (
    <div className="tailoring-page">
      {/* Hero Section */}
      <section className="tailoring-hero">
        <div className="tailoring-hero-background">
          <div className="tailoring-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="tailoring-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span className="title-part">Commercial Tailoring</span>
              <span className="title-part gradient-text">& Fashion</span>
            </h1>
            <p className="lead-text">
              <em>Stitch your future with <strong>professional tailoring and fashion design skills</strong></em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills-section section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">What You'll Learn</h6>
            <h2>Comprehensive <span className="highlight">Skills Training</span></h2>
          </motion.div>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <span className="skill-icon">{skill.icon}</span>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="modules-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Curriculum</h6>
            <h2>Training <em>Modules</em></h2>
            <p className="lead-text">
              Comprehensive curriculum covering all aspects of <strong>commercial tailoring and fashion business</strong>
            </p>
          </motion.div>

          <div className="modules-grid">
            {modules.map((module, index) => (
              <motion.div
                key={index}
                className="module-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>
                  {module.icon} {module.title}
                </h3>
                <ul>
                  {module.topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Program Features</h6>
            <h2>Why Choose Our <span className="highlight">Tailoring Program</span>?</h2>
          </motion.div>

          <motion.div
            className="highlights-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ul className="highlights-list">
              {highlights.map((highlight, index) => (
                <li key={index}>
                  <div className="highlight-icon">{highlight.icon}</div>
                  <div className="highlight-content">
                    <strong>{highlight.title}</strong>
                    <em>{highlight.text}</em>
                  </div>
                </li>
              ))}
            </ul>

            <div className="quote-block">
              <FaQuoteLeft style={{ fontSize: '2rem', color: '#7B1FA2', opacity: 0.3 }} />
              <p>"Fashion is the armor to survive the reality of everyday life."</p>
              <footer>— Bill Cunningham</footer>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Tailoring Journey?</h2>
            <p className="lead-text">
              Transform your passion for fashion into a <strong>thriving business</strong>
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Enroll Today
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tailoring;
