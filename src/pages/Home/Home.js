import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaUsers,
  FaBriefcase,
  FaHeart,
  FaLeaf,
  FaPeace,
  FaHandsHelping,
  FaChartLine,
  FaArrowRight,
  FaQuoteLeft,
  FaCheck,
  FaStar,
  FaGlobe,
  FaLightbulb,
  FaRocket
} from 'react-icons/fa';
import SEO from '../../components/SEO/SEO';
import './Home.css';

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const programs = [
    {
      icon: <FaGraduationCap />,
      title: 'Skills Training & Certification',
      description: 'Master digital skills, tech innovation, entrepreneurship, and project management with industry-recognized certifications.',
      link: '/skills-training',
      gradient: 'linear-gradient(135deg, #2D7A3E 0%, #16A085 100%)'
    },
    {
      icon: <FaUsers />,
      title: 'Fellowship Program',
      description: 'Join our mentorship program and become a Digital Skills Fellow, Enterprise Champion, or Community Impact Advisor.',
      link: '/fellowship',
      gradient: 'linear-gradient(135deg, #1E5C8C 0%, #8E44AD 100%)'
    },
    {
      icon: <FaBriefcase />,
      title: 'Career Coaching & Guidance',
      description: 'Transform your career with structured coaching, professional development tools, and expert mentorship support.',
      link: '/career-coaching',
      gradient: 'linear-gradient(135deg, #E67E22 0%, #F39C12 100%)'
    },
    {
      icon: <FaHeart />,
      title: 'Health Management Programs',
      description: 'Empowering communities through reusable sanitary pad production and hygiene product training initiatives.',
      link: '/health-programs',
      gradient: 'linear-gradient(135deg, #E74C3C 0%, #EC407A 100%)'
    },
    {
      icon: <FaLeaf />,
      title: 'Commercial Tailoring',
      description: 'Learn tailoring skills, fashion design, and apparel business startup strategies for sustainable income.',
      link: '/tailoring',
      gradient: 'linear-gradient(135deg, #27AE60 0%, #2ECC71 100%)'
    },
    {
      icon: <FaPeace />,
      title: 'Peace & Leadership',
      description: 'Building peace ambassadors and civic leaders through conflict resolution and community dialogue programs.',
      link: '/peace-leadership',
      gradient: 'linear-gradient(135deg, #3498DB 0%, #2980B9 100%)'
    },
    {
      icon: <FaHandsHelping />,
      title: 'SGBV & SRHR Programs',
      description: 'Prevention training, awareness campaigns, and safety dialogues promoting dignity and human rights.',
      link: '/sgbv-srhr',
      gradient: 'linear-gradient(135deg, #9B59B6 0%, #8E44AD 100%)'
    },
    {
      icon: <FaChartLine />,
      title: 'Economic Empowerment',
      description: 'Building sustainable livelihoods through table banking, savings groups, and microenterprise mentorship.',
      link: '/economic-empowerment',
      gradient: 'linear-gradient(135deg, #F39C12 0%, #E67E22 100%)'
    }
  ];

  const impactStats = [
    { number: '5,000+', label: 'Lives Transformed', icon: <FaUsers /> },
    { number: '150+', label: 'Programs Delivered', icon: <FaGraduationCap /> },
    { number: '20+', label: 'Community Partners', icon: <FaHandsHelping /> },
    { number: '95%', label: 'Success Rate', icon: <FaStar /> }
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'We embrace creative solutions and cutting-edge approaches to community development.'
    },
    {
      icon: <FaGlobe />,
      title: 'Inclusion',
      description: 'Everyone deserves opportunity. We create pathways for all community members to thrive.'
    },
    {
      icon: <FaRocket />,
      title: 'Impact',
      description: 'Measurable results drive our work. We transform lives through sustainable programs.'
    }
  ];

  return (
    <div className="home">
      <SEO 
        title="Home - Empowering Communities in Turkana West, Kakuma Kenya"
        description="ANAM CBO transforms lives in Turkana West through skills training, vocational education, peace building, SGBV prevention, and economic empowerment. Join 5,000+ community members building sustainable futures."
        keywords="ANAM CBO, Turkana West CBO, Kakuma community organization, skills training Kenya, vocational training Turkana, community empowerment Kenya, NGO Turkana West, CBO Kenya programs, youth empowerment Kenya, peace building Turkana"
        canonicalUrl="/"
      />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <span className="title-line">Empower.</span>
              <span className="title-line gradient-text">Upskill.</span>
              <span className="title-line">Transform.</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <em>Building resilient communities through skills development, leadership training, 
              and sustainable empowerment programs in <strong>Turkana West, Kakuma</strong>, and beyond.</em>
            </motion.p>
            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Link to="/skills-training" className="btn btn-primary btn-lg">
                Explore Programs
                <FaArrowRight />
              </Link>
              <Link to="/about" className="btn btn-white btn-lg">
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-scroll-indicator">
          <span>Discover More</span>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About ANAM CBO Section */}
      <section className="about-preview section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <FaUsers className="placeholder-icon" />
              </div>
              <div className="image-badge">
                <span className="badge-number">10+</span>
                <span className="badge-text">Years of Impact</span>
              </div>
            </motion.div>
            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h6 className="section-tag">Who We Are</h6>
              <h2 className="section-title">
                Transforming Communities Through <span className="highlight">Empowerment</span>
              </h2>
              <p className="lead-text">
                <strong>ANAM CBO</strong> is a community-based organization dedicated to creating 
                lasting change through comprehensive skills training, leadership development, and 
                sustainable empowerment initiatives.
              </p>
              <div className="value-points">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="value-point"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="value-icon">{value.icon}</div>
                    <div>
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link to="/about" className="btn btn-outline">
                Learn More About Us
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Programs Section */}
      <section className="programs section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">What We Offer</h6>
            <h2 className="section-title">Our Transformative Programs</h2>
            <p className="lead-text">
              Comprehensive training and support across multiple domains to build 
              <em> skills, confidence, and sustainable futures</em>
            </p>
          </motion.div>

          <motion.div
            className="programs-grid"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {programs.map((program, index) => (
              <motion.div
                key={index}
                className="program-card"
                variants={fadeInUp}
                whileHover={{ y: -10, scale: 1.02 }}
                style={{ '--card-gradient': program.gradient }}
              >
                <div className="program-icon">{program.icon}</div>
                <h3>{program.title}</h3>
                <p>{program.description}</p>
                <Link to={program.link} className="program-link">
                  Explore Program
                  <FaArrowRight />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact Highlights Section */}
      <section className="impact section">
        <div className="impact-background">
          <div className="impact-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag text-white">Our Impact</h6>
            <h2 className="section-title text-white">
              Creating <span className="accent-text">Measurable Change</span>
            </h2>
            <p className="lead-text text-white">
              <em>Numbers that tell the story of transformed lives and empowered communities</em>
            </p>
          </motion.div>

          <motion.div
            className="impact-stats"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
              >
                <div className="stat-icon">{stat.icon}</div>
                <h3 className="stat-number">{stat.number}</h3>
                <p className="stat-label">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Success Story Quote */}
          <motion.div
            className="success-quote"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="quote-icon" />
            <blockquote>
              <p>
                "ANAM CBO transformed my life. Through their digital skills program, I learned 
                web development and now run my own freelancing business. The fellowship program 
                connected me with amazing mentors who believed in my potential."
              </p>
              <cite>— Sarah M., Digital Skills Fellow Graduate</cite>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section section">
        <div className="container">
          <div className="cta-grid">
            <motion.div
              className="cta-card"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="cta-icon">
                <FaGraduationCap />
              </div>
              <h3>Join a Program</h3>
              <p>
                Start your transformation journey today with our comprehensive training programs
              </p>
              <Link to="/skills-training" className="btn btn-primary">
                View Programs
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="cta-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="cta-icon">
                <FaUsers />
              </div>
              <h3>Become a Fellow</h3>
              <p>
                Share your expertise and mentor the next generation of community leaders
              </p>
              <Link to="/fellowship" className="btn btn-secondary">
                Join Fellowship
                <FaArrowRight />
              </Link>
            </motion.div>

            <motion.div
              className="cta-card"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="cta-icon">
                <FaHandsHelping />
              </div>
              <h3>Partner with Us</h3>
              <p>
                Collaborate to amplify impact and create sustainable change in communities
              </p>
              <Link to="/partnerships" className="btn btn-outline">
                Explore Partnership
                <FaArrowRight />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
