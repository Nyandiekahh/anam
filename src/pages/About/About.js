import React from 'react';
import { motion } from 'framer-motion';
import {
  FaEye,
  FaBullseye,
  FaHeart,
  FaUsers,
  FaMapMarkerAlt,
  FaFileAlt,
  FaHandshake,
  FaLightbulb,
  FaGlobe,
  FaRocket,
  FaBalanceScale,
  FaShieldAlt,
  FaCheckCircle,
  FaAward,
  FaHandHoldingHeart,
  FaChalkboardTeacher,
  FaSeedling,
  FaNetworkWired
} from 'react-icons/fa';
import './About.css';

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace creative solutions, cutting-edge methodologies, and forward-thinking approaches to solve community challenges and drive sustainable development.',
      color: '#F39C12'
    },
    {
      icon: <FaGlobe />,
      title: 'Inclusion',
      description: 'We believe everyone deserves equal opportunity. Our programs are designed to reach marginalized communities and create pathways for all to thrive.',
      color: '#16A085'
    },
    {
      icon: <FaRocket />,
      title: 'Impact',
      description: 'Measurable results drive our work. We are committed to creating tangible, sustainable change that transforms lives and builds resilient communities.',
      color: '#E74C3C'
    },
    {
      icon: <FaBalanceScale />,
      title: 'Integrity',
      description: 'We operate with transparency, accountability, and ethical practices in all our programs, partnerships, and community engagements.',
      color: '#8E44AD'
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration',
      description: 'We believe in the power of partnerships. Working together with communities, organizations, and stakeholders amplifies our collective impact.',
      color: '#3498DB'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Empowerment',
      description: 'We equip individuals with skills, knowledge, and confidence to take control of their futures and become agents of change in their communities.',
      color: '#27AE60'
    }
  ];

  const team = [
    {
      name: 'John Doe',
      position: 'Executive Director',
      bio: 'Passionate community leader with 15+ years of experience in grassroots development and capacity building.',
      image: null
    },
    {
      name: 'Jane Smith',
      position: 'Programs Director',
      bio: 'Expert in curriculum development and skills training with a focus on digital literacy and entrepreneurship.',
      image: null
    },
    {
      name: 'David Okoth',
      position: 'Community Engagement Lead',
      bio: 'Dedicated to building strong community relationships and ensuring inclusive participation in all programs.',
      image: null
    },
    {
      name: 'Sarah Akinyi',
      position: 'M&E Coordinator',
      bio: 'Data-driven professional ensuring program effectiveness through robust monitoring and evaluation frameworks.',
      image: null
    }
  ];

  const reach = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Turkana West Sub-County',
      description: 'Primary operational base with comprehensive program delivery across multiple locations'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Kakuma Town & Refugee Camp',
      description: 'Serving both host community and refugee populations with integrated programming'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Kalobeyei Settlement',
      description: 'Extended reach providing training and empowerment services to settlement residents'
    }
  ];

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="about-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Building <span className="gradient-text">Resilient Communities</span>
            </h1>
            <p className="lead-text">
              <em>ANAM CBO is more than an organization—we are a <strong>movement of change-makers</strong>, 
              committed to transforming lives through education, skills development, and sustainable empowerment.</em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="who-we-are section">
        <div className="container">
          <div className="content-grid">
            <motion.div
              className="content-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <FaUsers className="placeholder-icon" />
              </div>
            </motion.div>
            <motion.div
              className="content-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h6 className="section-tag">Who We Are</h6>
              <h2>A Community-Led Force for Change</h2>
              <p>
                Founded with a vision to <strong>empower, upskill, and transform</strong>, ANAM CBO 
                has grown into a trusted partner for community development in Turkana West and beyond. 
                We are a registered Community-Based Organization committed to addressing the most pressing 
                challenges facing our communities.
              </p>
              <p>
                Our approach is <em>holistic and participatory</em>—we don't just deliver programs; 
                we co-create solutions with community members, ensuring sustainability and local ownership. 
                From <strong>digital skills training</strong> to <strong>peace-building initiatives</strong>, 
                from <strong>health programs</strong> to <strong>economic empowerment</strong>, we touch 
                every aspect of community wellbeing.
              </p>
              <div className="stats-inline">
                <div className="stat-inline-item">
                  <strong>10+</strong>
                  <span>Years of Impact</span>
                </div>
                <div className="stat-inline-item">
                  <strong>5,000+</strong>
                  <span>Lives Transformed</span>
                </div>
                <div className="stat-inline-item">
                  <strong>150+</strong>
                  <span>Programs Delivered</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="vmv section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Our Foundation</h6>
            <h2>Vision, Mission & Values</h2>
          </motion.div>

          <div className="vmv-grid">
            <motion.div
              className="vmv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="vmv-icon">
                <FaEye />
              </div>
              <h3>Our Vision</h3>
              <p className="accent-text">
                "A world where every individual has the opportunity to thrive, contribute meaningfully 
                to their community, and live with dignity and purpose."
              </p>
            </motion.div>

            <motion.div
              className="vmv-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="vmv-icon">
                <FaBullseye />
              </div>
              <h3>Our Mission</h3>
              <p>
                To <strong>empower communities</strong> through comprehensive skills training, 
                leadership development, health initiatives, and economic empowerment programs 
                that create <em>sustainable, measurable impact</em> in Turkana West, Kakuma, 
                and surrounding areas.
              </p>
            </motion.div>

            <motion.div
              className="vmv-card full-width"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="vmv-icon">
                <FaHeart />
              </div>
              <h3>Our Core Values</h3>
              <div className="values-grid">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="value-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="value-icon-small" style={{ background: value.color }}>
                      {value.icon}
                    </div>
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="approach section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">How We Work</h6>
            <h2>Our Approach to Community Development</h2>
            <p className="lead-text">
              <em>A comprehensive, participatory methodology that ensures sustainable impact</em>
            </p>
          </motion.div>

          <div className="approach-timeline">
            {[
              {
                step: '01',
                title: 'Community Assessment',
                description: 'We begin by listening—conducting thorough needs assessments and engaging community members to understand their unique challenges and aspirations.'
              },
              {
                step: '02',
                title: 'Co-Design Programs',
                description: 'Working collaboratively with communities, we design programs that are contextually relevant, culturally appropriate, and aligned with local priorities.'
              },
              {
                step: '03',
                title: 'Capacity Building',
                description: 'We deliver comprehensive training and mentorship, equipping participants with practical skills, knowledge, and tools for sustainable success.'
              },
              {
                step: '04',
                title: 'Continuous Support',
                description: 'Our commitment extends beyond training—we provide ongoing mentorship, networking opportunities, and resources to ensure long-term impact.'
              },
              {
                step: '05',
                title: 'Monitor & Evaluate',
                description: 'Using robust M&E frameworks, we track progress, measure outcomes, and continuously improve our programs based on data and feedback.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="timeline-step">{item.step}</div>
                <div className="timeline-content">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Meet Our Team</h6>
            <h2>Leadership Driving Change</h2>
            <p className="lead-text">
              <em>Experienced professionals dedicated to community empowerment</em>
            </p>
          </motion.div>

          <div className="team-grid">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="team-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <div className="team-image">
                  <div className="team-placeholder">
                    <FaUsers />
                  </div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Reach */}
      <section className="reach section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Where We Work</h6>
            <h2>Our Geographic Reach</h2>
            <p className="lead-text">
              <em>Serving diverse communities across Turkana West and beyond</em>
            </p>
          </motion.div>

          <div className="reach-grid">
            {reach.map((location, index) => (
              <motion.div
                key={index}
                className="reach-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="reach-icon">{location.icon}</div>
                <h3>{location.title}</h3>
                <p>{location.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration & Governance */}
      <section className="governance section bg-light">
        <div className="container">
          <div className="governance-content">
            <motion.div
              className="governance-icon"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaFileAlt />
            </motion.div>
            <motion.div
              className="governance-text"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Registration & Governance</h2>
              <p>
                ANAM CBO is a <strong>duly registered Community-Based Organization</strong> operating 
                under the laws of Kenya. We maintain transparent governance structures with an active 
                Board of Directors, regular community engagement, and comprehensive financial accountability.
              </p>
              <p>
                Our operations are guided by <em>constitutional bylaws, ethical standards, and best practices</em> 
                in community development. We maintain partnerships with government agencies, international 
                organizations, and local stakeholders to ensure coordinated, effective programming.
              </p>
              <div className="governance-badges">
                <span className="badge badge-primary">Registered CBO</span>
                <span className="badge badge-primary">Transparent Governance</span>
                <span className="badge badge-primary">Community-Led</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
