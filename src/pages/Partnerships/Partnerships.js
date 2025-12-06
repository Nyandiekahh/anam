import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHandshake, FaGlobe, FaUsers, FaChartLine, FaBullseye, FaLightbulb, FaQuoteLeft, FaHeart, FaShieldAlt, FaBuilding } from 'react-icons/fa';
import './Partnerships.css';

const partners = [
  {
    name: 'Lutheran World Federation (LWF)',
    type: 'International NGO',
    logo: '🕊️',
    description: 'A global communion of churches working together for justice, peace, and reconciliation. LWF supports humanitarian assistance and sustainable development programs across the world.',
    focusAreas: [
      { text: 'Humanitarian assistance and refugee support', bold: true },
      { text: 'Livelihood programs and skills training', italic: true },
      { text: 'Peace and conflict resolution initiatives', bold: true },
      { text: 'Community empowerment and capacity building', italic: true }
    ]
  },
  {
    name: 'UNHCR',
    type: 'UN Agency',
    logo: '🌍',
    description: 'The UN Refugee Agency provides protection and assistance to refugees, asylum seekers, and displaced persons. UNHCR works to ensure that everyone has the right to seek asylum and find safe refuge.',
    focusAreas: [
      { text: 'Refugee protection and legal assistance', bold: true },
      { text: 'Emergency shelter and basic services', italic: true },
      { text: 'Education and skills development programs', bold: true },
      { text: 'Durable solutions and integration support', italic: true }
    ]
  },
  {
    name: 'World Vision',
    type: 'International NGO',
    logo: '❤️',
    description: 'A Christian humanitarian organization dedicated to working with children, families, and communities to overcome poverty and injustice through long-term development, emergency relief, and advocacy.',
    focusAreas: [
      { text: 'Child protection and education programs', bold: true },
      { text: 'Water, sanitation, and health initiatives', italic: true },
      { text: 'Economic development and livelihoods', bold: true },
      { text: 'Emergency response and resilience building', italic: true }
    ]
  },
  {
    name: 'Equity Bank',
    type: 'Financial Partner',
    logo: '🏦',
    description: 'East Africa\'s leading bank in financial inclusion, providing innovative banking solutions to individuals and businesses. Equity Bank champions financial empowerment and entrepreneurship development.',
    focusAreas: [
      { text: 'Financial literacy and inclusion programs', bold: true },
      { text: 'Microfinance and MSME support', italic: true },
      { text: 'Youth and women entrepreneurship', bold: true },
      { text: 'Digital banking solutions and innovation', italic: true }
    ]
  },
  {
    name: 'Peace Winds Japan',
    type: 'International NGO',
    logo: '🌸',
    description: 'A Japanese humanitarian organization providing emergency relief and development assistance worldwide. Peace Winds Japan focuses on disaster response, health, education, and community development.',
    focusAreas: [
      { text: 'Emergency relief and disaster response', bold: true },
      { text: 'Healthcare services and medical support', italic: true },
      { text: 'Education and vocational training', bold: true },
      { text: 'Community infrastructure development', italic: true }
    ]
  },
  {
    name: 'Government of Kenya (GoK)',
    type: 'Government Partner',
    logo: '🇰🇪',
    description: 'The national government of Kenya, committed to sustainable development, poverty reduction, and improving the quality of life for all citizens through policy frameworks, service delivery, and development programs.',
    focusAreas: [
      { text: 'Policy frameworks and regulatory support', bold: true },
      { text: 'Public service delivery and governance', italic: true },
      { text: 'National development programs and initiatives', bold: true },
      { text: 'Community development and empowerment', italic: true }
    ]
  },
  {
    name: 'Kenya Bankers Association',
    type: 'Financial Sector',
    logo: '💼',
    description: 'The umbrella body representing banks and mortgage finance companies in Kenya. KBA promotes financial sector development, financial literacy, and inclusive banking practices.',
    focusAreas: [
      { text: 'Financial literacy and education programs', bold: true },
      { text: 'Banking sector innovation and development', italic: true },
      { text: 'Financial inclusion initiatives', bold: true },
      { text: 'Consumer protection and advocacy', italic: true }
    ]
  },
  {
    name: 'ADRA Kenya',
    type: 'International NGO',
    logo: '🌟',
    description: 'The Adventist Development and Relief Agency working to provide humanitarian aid and development assistance. ADRA Kenya focuses on sustainable community development, disaster relief, and poverty alleviation.',
    focusAreas: [
      { text: 'Community health and nutrition programs', bold: true },
      { text: 'Water and sanitation projects', italic: true },
      { text: 'Livelihood and economic empowerment', bold: true },
      { text: 'Emergency response and disaster preparedness', italic: true }
    ]
  },
  {
    name: 'K De Igratium International (KDII)',
    type: 'Development Partner',
    logo: '🤝',
    description: 'An international development organization dedicated to promoting sustainable development, capacity building, and community empowerment through innovative programs and strategic partnerships.',
    focusAreas: [
      { text: 'Capacity building and institutional strengthening', bold: true },
      { text: 'Community-led development initiatives', italic: true },
      { text: 'Youth empowerment and skills development', bold: true },
      { text: 'Research and knowledge management', italic: true }
    ]
  }
];

const collaborationModels = [
  {
    icon: '🎯',
    title: 'Strategic Partnerships',
    description: 'Long-term collaboration on shared goals with comprehensive programs, joint planning, and sustained engagement for maximum community impact.'
  },
  {
    icon: '💼',
    title: 'Project-Based Partnerships',
    description: 'Time-bound collaborations for specific initiatives with clear deliverables, defined timelines, and measurable outcomes.'
  },
  {
    icon: '🌐',
    title: 'Network Partnerships',
    description: 'Membership in coalitions, learning networks, and sector platforms for knowledge sharing, advocacy, and collective action.'
  }
];

const partnershipBenefits = [
  {
    icon: <FaChartLine />,
    title: 'Amplified Impact',
    description: 'Reach more beneficiaries and create deeper, lasting change in communities',
    items: ['Expanded geographic reach', 'Increased program scale', 'Enhanced service delivery']
  },
  {
    icon: <FaLightbulb />,
    title: 'Shared Innovation',
    description: 'Access to new ideas, technologies, and best practices from diverse partners',
    items: ['Knowledge exchange', 'Technical expertise', 'Innovative solutions']
  },
  {
    icon: <FaUsers />,
    title: 'Resource Optimization',
    description: 'Efficient use of resources through collaboration and complementary strengths',
    items: ['Cost efficiency', 'Resource pooling', 'Capacity sharing']
  },
  {
    icon: <FaShieldAlt />,
    title: 'Sustainability',
    description: 'Build resilient programs through diverse funding and long-term partnerships',
    items: ['Financial stability', 'Program continuity', 'Community ownership']
  }
];

const Partnerships = () => {
  return (
    <div className="partnerships-page">
      {/* Hero Section */}
      <section className="partnerships-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Partnerships & Collaboration</h1>
          <p className="lead-text">Together, we achieve more</p>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="intro-section">
        <div className="container">
          <motion.div
            className="intro-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Building <span className="highlight">Strategic Alliances</span> for Maximum Impact</h2>
            <p className="lead-text">
              At ANAM CBO, we believe in the <strong>power of collaboration</strong>. Our partnerships with local, national, 
              and international organizations enable us to <em>expand our reach</em>, enhance program quality, and create 
              <strong>sustainable solutions</strong> for the communities we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Our Network</h6>
            <h2>Trusted <em>Partners</em> in Development</h2>
            <p className="lead-text">
              Working with diverse organizations to create <strong>meaningful change</strong> in communities
            </p>
          </motion.div>

          <div className="partners-grid">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                className="partner-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="partner-logo">{partner.logo}</div>
                <h3>{partner.name}</h3>
                <div className="partner-type">{partner.type}</div>
                <p>{partner.description}</p>
                <div className="partner-focus">
                  <h4><FaBullseye /> Focus Areas:</h4>
                  <ul>
                    {partner.focusAreas.map((area, idx) => (
                      <li key={idx}>
                        {area.bold && <strong>{area.text}</strong>}
                        {area.italic && <em>{area.text}</em>}
                        {!area.bold && !area.italic && area.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Models Section */}
      <section className="collaboration-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">How We Work</h6>
            <h2>Collaboration <span className="highlight">Models</span></h2>
            <p className="lead-text">
              Flexible partnership approaches tailored to achieve <strong>shared goals</strong>
            </p>
          </motion.div>

          <div className="collaboration-grid">
            {collaborationModels.map((model, index) => (
              <motion.div
                key={index}
                className="collaboration-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="collaboration-icon">{model.icon}</div>
                <h4>{model.title}</h4>
                <p>{model.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div
            className="benefits-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3>Why Partner with ANAM CBO?</h3>
            
            <div className="benefits-grid">
              {partnershipBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="benefit-item"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="benefit-icon">{benefit.icon}</div>
                  <div className="benefit-content">
                    <h4>{benefit.title}</h4>
                    <p>{benefit.description}</p>
                    <ul>
                      {benefit.items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="impact-stats-section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Partnership Impact</h6>
            <h2>Together We've Achieved <em>More</em></h2>
          </motion.div>

          <div className="stats-grid">
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>9+</h3>
              <p>Strategic Partners</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>50+</h3>
              <p>Joint Programs</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>10,000+</h3>
              <p>Lives Impacted</p>
            </motion.div>
            <motion.div
              className="stat-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3>15+</h3>
              <p>Years of Collaboration</p>
            </motion.div>
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
          <FaQuoteLeft className="quote-icon" />
          <p>"Alone we can do so little; together we can do so much."</p>
          <footer>— Helen Keller</footer>
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
            <h2>Become a Partner</h2>
            <p className="lead-text">
              Join us in <strong>creating lasting change</strong> and empowering communities through <em>strategic collaboration</em>
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Partner with Us
              </Link>
              <Link to="/about" className="btn btn-outline btn-lg">
                Learn More About ANAM
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;
