import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaHeart, FaComments, FaBook, FaHandsHelping, FaQuoteLeft } from 'react-icons/fa';
import './SGBV.css';

const dialogueItems = [
  {
    icon: '🗣️',
    title: 'Safe Spaces',
    description: 'Confidential forums for sharing and healing'
  },
  {
    icon: '📚',
    title: 'Education',
    description: 'Awareness on rights and available resources'
  },
  {
    icon: '🤝',
    title: 'Support Networks',
    description: 'Peer support and professional counseling'
  }
];

const SGBV = () => {
  return (
    <div className="sgbv-page">
      {/* Hero Section */}
      <section className="sgbv-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>SGBV & SRHR Programs</h1>
          <p className="lead-text">Protection, Rights, and Dignity for All</p>
        </motion.div>
      </section>

      {/* Programs Section */}
      <section className="programs-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Our Programs</h6>
            <h2>Creating <span className="highlight">Safe Communities</span> for All</h2>
            <p className="lead-text">
              Comprehensive programs addressing <strong>gender-based violence</strong> and promoting <em>reproductive health rights</em>
            </p>
          </motion.div>

          <div className="programs-grid">
            {/* SGBV Prevention */}
            <motion.div
              className="program-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>🛡️ SGBV Prevention Training</h3>
              <span className="subtitle">Creating safe communities</span>
              
              <div className="program-content">
                <h4>Understanding SGBV:</h4>
                <ul>
                  <li><em>Types and forms</em> of gender-based violence</li>
                  <li>Root causes and contributing factors</li>
                  <li>Cultural and social dimensions</li>
                </ul>
                
                <h4>Prevention Strategies:</h4>
                <ul>
                  <li>Bystander intervention techniques</li>
                  <li>Community awareness campaigns</li>
                  <li>Male engagement in prevention</li>
                </ul>

                <h4>Survivor Support:</h4>
                <ul>
                  <li>First responder training</li>
                  <li>Referral pathways</li>
                  <li>Psychosocial support basics</li>
                </ul>
              </div>
            </motion.div>

            {/* SRHR Awareness */}
            <motion.div
              className="program-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>❤️ SRHR Awareness</h3>
              <span className="subtitle">Empowering informed choices</span>
              
              <div className="program-content">
                <h4>Reproductive Health:</h4>
                <ul>
                  <li><em>Family planning</em> methods and access</li>
                  <li>Maternal health services</li>
                  <li>Adolescent reproductive health</li>
                </ul>
                
                <h4>Rights Education:</h4>
                <ul>
                  <li>Bodily autonomy and consent</li>
                  <li>Access to health services</li>
                  <li>Legal frameworks and protections</li>
                </ul>

                <h4>Health Promotion:</h4>
                <ul>
                  <li>STI prevention and treatment</li>
                  <li>HIV/AIDS awareness</li>
                  <li>Youth-friendly services</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="impact-showcase section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Our Community Impact</h2>
            <p className="lead-text">
              <em>Raising awareness and <strong>creating safe spaces</strong> in communities</em>
            </p>
          </motion.div>
          <motion.div
            className="impact-image-container"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="/GBV awareness at Natiir village 2.jpeg" 
              alt="GBV Awareness Session at Natiir Village" 
              className="impact-image"
            />
            <div className="image-caption">
              <h4>GBV Awareness at Natiir Village</h4>
              <p>Community members engaging in dialogue about gender-based violence prevention and support</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Dialogues Section */}
      <section className="dialogues-section">
        <div className="container">
          <motion.div
            className="dialogues-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Safety & Dignity Dialogues</h3>
            
            <div className="dialogues-grid">
              {dialogueItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="dialogue-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="dialogue-icon">{item.icon}</div>
                  <h5>{item.title}</h5>
                  <p>{item.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="quote-block">
              <FaQuoteLeft style={{ fontSize: '2rem', color: '#7B1FA2', opacity: 0.3, marginBottom: '1rem' }} />
              <p>"No one is free until we are all free."</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Get Support or Get Involved</h2>
            <p className="lead-text">
              Creating communities where <strong>everyone feels safe and valued</strong>
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Contact Us Today
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn About Our Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SGBV;
