import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCoins, FaPiggyBank, FaChartLine, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';
import './EconomicEmpowerment.css';

const programs = [
  {
    icon: '💰',
    title: 'Table Banking',
    subtitle: 'Community-based savings model',
    features: [
      { label: 'Group Savings', text: 'Regular contributions and loans', bold: true },
      { label: 'Financial Literacy', text: 'Money management training', italic: true },
      { label: 'Low Interest', text: 'Affordable credit access', bold: true },
      { label: 'Solidarity', text: "Supporting each other's growth", italic: true }
    ],
    quote: 'Together we save, together we thrive'
  },
  {
    icon: '🏦',
    title: 'Savings Groups',
    subtitle: 'Village Savings and Loan Associations (VSLAs)',
    features: [
      { label: 'Structured Savings', text: 'Weekly/monthly contributions', bold: true },
      { label: 'Emergency Funds', text: 'Social support mechanisms', italic: true },
      { label: 'Investment Capital', text: 'Business startup loans', bold: true },
      { label: 'Record Keeping', text: 'Financial tracking skills', italic: true }
    ],
    quote: 'Small savings, big dreams'
  },
  {
    icon: '📈',
    title: 'Microenterprise Mentorship',
    subtitle: 'From idea to profitable business',
    features: [
      { label: 'Business Planning', text: 'Feasibility and strategy', bold: true },
      { label: 'Market Research', text: 'Understanding your customers', italic: true },
      { label: 'Financial Management', text: 'Bookkeeping and budgeting', bold: true },
      { label: 'Growth Strategies', text: 'Scaling your enterprise', italic: true }
    ],
    quote: 'Every business starts with a vision'
  }
];

const impactStats = [
  { value: '500+', label: 'Women in Savings Groups' },
  { value: 'KES 2M+', label: 'Cumulative Savings' },
  { value: '150+', label: 'Microenterprises Started' },
  { value: '85%', label: 'Loan Repayment Rate' }
];

const EconomicEmpowerment = () => {
  return (
    <div className="economicempowerment-page">
      {/* Hero Section */}
      <section className="economic-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Economic Empowerment</h1>
          <p className="lead-text">Building Prosperity Through Financial Inclusion</p>
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
            <h6 className="section-tag">Financial Independence</h6>
            <h2>Creating Pathways to <span className="highlight">Economic Self-Reliance</span></h2>
            <p className="lead-text">
              Empowering communities through <strong>financial literacy</strong>, <em>savings groups</em>, and <strong>microenterprise support</strong>
            </p>
          </motion.div>

          <div className="programs-grid">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="program-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>
                  {program.icon} {program.title}
                </h3>
                <span className="subtitle">{program.subtitle}</span>
                <ul>
                  {program.features.map((feature, idx) => (
                    <li key={idx}>
                      {feature.bold && <strong>{feature.label}:</strong>}
                      {feature.italic && <em>{feature.label}:</em>}
                      {` ${feature.text}`}
                    </li>
                  ))}
                </ul>
                <blockquote>"{program.quote}"</blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact-section">
        <div className="container">
          <motion.div
            className="impact-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Success Metrics</h3>
            <div className="impact-grid">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="impact-stat"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h2>{stat.value}</h2>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p>"Financial freedom is available to those who learn about it and work for it"</p>
        </motion.div>
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
            <h2>Join Our Economic Programs</h2>
            <p className="lead-text">
              Transform your financial future through <strong>community-based savings</strong> and <em>business mentorship</em>
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Get Started Today
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

export default EconomicEmpowerment;
