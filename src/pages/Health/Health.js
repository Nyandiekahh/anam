import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaHeartbeat,
  FaHandHoldingMedical,
  FaHandSparkles,
  FaRecycle,
  FaChartLine,
  FaUsers,
  FaLeaf,
  FaCheckCircle,
  FaQuoteLeft,
  FaDollarSign,
  FaGlobeAfrica
} from 'react-icons/fa';
import './Health.css';

const Health = () => {
  const programs = [
    {
      icon: <FaHandHoldingMedical />,
      title: 'Reusable Sanitary Pad Production',
      subtitle: 'Empowering Women with Sustainable Hygiene Solutions',
      description: 'Comprehensive training in producing high-quality, eco-friendly reusable sanitary pads that promote women\'s dignity, health, and economic empowerment.',
      modules: [
        'Pad production techniques and materials selection',
        'Quality control and hygiene standards',
        'Business planning and product distribution',
        'Menstrual health education and awareness',
        'Pricing, packaging, and branding strategies',
        'Community outreach and customer engagement'
      ],
      impact: 'Over 500 women trained, producing 10,000+ pads monthly',
      quote: 'Dignity and health are fundamental rights for every woman.',
      color: '#E74C3C'
    },
    {
      icon: <FaHandSparkles />,
      title: 'Detergent & Hygiene Products Training',
      subtitle: 'Creating Livelihoods Through Hygiene Product Manufacturing',
      description: 'Learn to manufacture essential hygiene products including liquid soap, detergents, sanitizers, and disinfectants while building a sustainable income-generating business.',
      modules: [
        'Liquid soap and detergent production formulas',
        'Hand sanitizer and disinfectant making',
        'Quality assurance and safety protocols',
        'Cost-effective production and packaging',
        'Marketing and sales strategies',
        'Business registration and growth planning'
      ],
      impact: '300+ entrepreneurs trained, serving 5,000+ households',
      quote: 'Clean hands, healthy communities, thriving businesses.',
      color: '#16A085'
    }
  ];

  const benefits = [
    {
      icon: <FaDollarSign />,
      title: 'Income Generation',
      description: 'Start your own profitable health products business with low startup costs and high demand'
    },
    {
      icon: <FaUsers />,
      title: 'Community Impact',
      description: 'Improve public health and hygiene standards in your community while empowering others'
    },
    {
      icon: <FaLeaf />,
      title: 'Environmental Sustainability',
      description: 'Promote eco-friendly, reusable solutions that reduce waste and protect our environment'
    },
    {
      icon: <FaChartLine />,
      title: 'Skills Development',
      description: 'Gain practical manufacturing, business management, and entrepreneurship skills'
    }
  ];

  const process = [
    { step: '01', title: 'Enrollment & Orientation', description: 'Join the program and learn about health product manufacturing opportunities' },
    { step: '02', title: 'Technical Training', description: 'Hands-on production training with quality materials and expert instructors' },
    { step: '03', title: 'Business Development', description: 'Learn business planning, pricing, marketing, and customer service' },
    { step: '04', title: 'Product Launch', description: 'Start your business with mentorship support and market linkages' },
    { step: '05', title: 'Ongoing Support', description: 'Access continued guidance, quality control checks, and growth resources' }
  ];

  return (
    <div className="health-page">
      {/* Hero Section */}
      <section className="health-hero">
        <div className="health-hero-background">
          <div className="health-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="health-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaHeartbeat className="hero-health-icon" />
            <h1>
              <span className="title-part">Health Management</span>
              <span className="title-part gradient-text">Programs</span>
            </h1>
            <p className="lead-text">
              <em>Promoting <strong>wellness, dignity, and economic empowerment</strong> through 
              sustainable health and hygiene solutions</em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs-section section">
        <div className="container">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="program-module"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="program-header" style={{ '--program-color': program.color }}>
                <div className="program-icon-large" style={{ background: program.color }}>
                  {program.icon}
                </div>
                <div className="program-title-section">
                  <h2>{program.title}</h2>
                  <p className="program-subtitle"><em>{program.subtitle}</em></p>
                </div>
              </div>

              <div className="program-content">
                <div className="program-description">
                  <p>{program.description}</p>
                </div>

                <div className="program-modules">
                  <h3>
                    <FaCheckCircle /> Training Modules
                  </h3>
                  <div className="modules-grid">
                    {program.modules.map((module, idx) => (
                      <div key={idx} className="module-item">
                        <span className="module-check">✓</span>
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="program-impact">
                  <FaChartLine className="impact-icon" />
                  <div>
                    <strong>Program Impact:</strong>
                    <p>{program.impact}</p>
                  </div>
                </div>

                <div className="program-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <blockquote>
                    <p><em>{program.quote}</em></p>
                  </blockquote>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Program Benefits</h6>
            <h2>Why Join Our <span className="highlight">Health Programs</span>?</h2>
            <p className="lead-text">
              Transform your life and community through <em>sustainable health entrepreneurship</em>
            </p>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">How It Works</h6>
            <h2>Your Journey to <em>Health Entrepreneurship</em></h2>
          </motion.div>

          <div className="process-timeline">
            {process.map((item, index) => (
              <motion.div
                key={index}
                className="process-step"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="step-number">{item.step}</div>
                <div className="step-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section bg-primary">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaGlobeAfrica className="cta-icon-large" />
            <h2>Ready to Transform Lives Through Health?</h2>
            <p className="lead-text text-white">
              Join our <strong>health management programs</strong> and become a health entrepreneur 
              in your community
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white btn-lg">
                Enroll Now
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Health;
