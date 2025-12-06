import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaDove, FaBullseye, FaVoteYea, FaHandshake, FaUsers, FaLightbulb, FaQuoteLeft } from 'react-icons/fa';
import './PeaceLeadership.css';

const programs = [
  {
    icon: '🕊️',
    title: 'Peace Ambassador Program',
    subtitle: 'Train as a certified peacebuilder',
    features: [
      { label: 'Conflict Resolution', text: 'Mediation and negotiation skills', bold: true },
      { label: 'Community Dialogue', text: 'Facilitation techniques', italic: true },
      { label: 'Trauma Healing', text: 'Psychosocial support basics', bold: true },
      { label: 'Early Warning Systems', text: 'Conflict prevention strategies', italic: true }
    ]
  },
  {
    icon: '🎯',
    title: 'Leadership Fellowship',
    subtitle: 'Develop transformative leadership',
    features: [
      { label: 'Leadership Styles', text: 'Adaptive and servant leadership', bold: true },
      { label: 'Public Speaking', text: 'Communication for impact', italic: true },
      { label: 'Team Building', text: 'Collaboration and motivation', bold: true },
      { label: 'Project Leadership', text: 'Managing community initiatives', italic: true }
    ]
  },
  {
    icon: '🗳️',
    title: 'Civic Engagement Sessions',
    subtitle: 'Participate in democratic processes',
    features: [
      { text: 'Understanding governance structures' },
      { text: 'Voter education and rights' },
      { text: 'Advocacy and policy influence' },
      { text: 'Community organizing' }
    ]
  },
  {
    icon: '🤝',
    title: 'Community Dialogue & Mediation',
    subtitle: 'Resolve conflicts peacefully',
    features: [
      { text: 'Interfaith dialogue platforms' },
      { text: 'Youth-elder mediation forums' },
      { text: 'Resource conflict resolution' },
      { text: 'Social cohesion activities' }
    ]
  }
];

const impactStats = [
  { value: '200+', label: 'Peace Ambassadors Trained' },
  { value: '50+', label: 'Communities Reached' },
  { value: '150+', label: 'Conflicts Mediated' },
  { value: '85%', label: 'Conflict Resolution Success Rate' }
];

const PeaceLeadership = () => {
  return (
    <div className="peaceleadership-page">
      {/* Hero Section */}
      <section className="peace-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Peace, Leadership & Civic Engagement</h1>
          <p className="lead-text">Building bridges, fostering unity, creating change</p>
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
            <h2>Cultivating <span className="highlight">Peace Ambassadors</span> and Community Leaders</h2>
            <p className="lead-text">Comprehensive training for peacebuilding and leadership excellence</p>
          </motion.div>

          <div className="programs-grid">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="program-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3>
                  {program.icon} {program.title}
                </h3>
                <span className="subtitle">{program.subtitle}</span>
                <ul>
                  {program.features.map((feature, idx) => (
                    <li key={idx}>
                      {feature.label && feature.bold && <strong>{feature.label}:</strong>}
                      {feature.label && feature.italic && <em>{feature.label}:</em>}
                      {!feature.label && feature.text}
                      {feature.label && ` ${feature.text}`}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="impact-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Our Impact</h6>
            <h2>Making a <em>Difference</em> in Communities</h2>
          </motion.div>

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
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
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
          <blockquote>
            <FaQuoteLeft style={{ fontSize: '2rem', color: '#2C5F2D', opacity: 0.3, marginBottom: '1rem' }} />
            <p>"Peace is not merely a distant goal that we seek, but a means by which we arrive at that goal."</p>
            <footer>— Martin Luther King Jr.</footer>
          </blockquote>
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
            <h2>Become a Peace Ambassador</h2>
            <p className="lead-text">
              Join us in <strong>building peaceful communities</strong> and transforming lives
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

export default PeaceLeadership;
