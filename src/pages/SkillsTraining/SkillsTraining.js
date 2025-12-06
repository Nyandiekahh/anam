import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaLaptopCode,
  FaChartBar,
  FaPalette,
  FaBriefcase,
  FaUsers,
  FaPeace,
  FaCertificate,
  FaGraduationCap,
  FaUserTie,
  FaCode,
  FaPython,
  FaDatabase,
  FaShieldAlt,
  FaCamera,
  FaVideo,
  FaPenFancy,
  FaRocket,
  FaBullhorn,
  FaCalculator,
  FaCheckCircle,
  FaClock,
  FaDesktop,
  FaMobile,
  FaHandshake
} from 'react-icons/fa';
import './SkillsTraining.css';

const SkillsTraining = () => {
  const [activeTab, setActiveTab] = useState('digital');

  const categories = [
    { id: 'digital', label: 'Digital & Data', icon: <FaChartBar /> },
    { id: 'tech', label: 'Tech & Creative', icon: <FaPalette /> },
    { id: 'business', label: 'Entrepreneurship', icon: <FaBriefcase /> },
    { id: 'leadership', label: 'Leadership & PM', icon: <FaUsers /> },
    { id: 'peace', label: 'Peace & Impact', icon: <FaPeace /> }
  ];

  const programs = {
    digital: [
      { 
        icon: <FaChartBar />, 
        title: 'Microsoft Excel Mastery', 
        description: 'From basics to advanced formulas, pivot tables, data analysis, and dashboard creation',
        duration: '8 weeks',
        level: 'Beginner to Advanced'
      },
      { 
        icon: <FaChartBar />, 
        title: 'Power BI & Tableau', 
        description: 'Business intelligence, data visualization, interactive dashboards, and reporting',
        duration: '10 weeks',
        level: 'Intermediate'
      },
      { 
        icon: <FaPython />, 
        title: 'Python Programming', 
        description: 'Complete Python for data science, automation, web scraping, and API integration',
        duration: '12 weeks',
        level: 'Beginner to Advanced'
      },
      { 
        icon: <FaCode />, 
        title: 'R for Data Analysis', 
        description: 'Statistical computing, data manipulation with tidyverse, visualization with ggplot2',
        duration: '10 weeks',
        level: 'Intermediate'
      },
      { 
        icon: <FaDatabase />, 
        title: 'Data Engineering', 
        description: 'ETL processes, data pipelines, SQL databases, and cloud data platforms',
        duration: '14 weeks',
        level: 'Advanced'
      },
      { 
        icon: <FaChartBar />, 
        title: 'Data Analysis & Insights', 
        description: 'Statistical analysis, predictive modeling, data storytelling, and business insights',
        duration: '12 weeks',
        level: 'Intermediate to Advanced'
      }
    ],
    tech: [
      { 
        icon: <FaLaptopCode />, 
        title: 'Web Development', 
        description: 'HTML, CSS, JavaScript, React, responsive design, and modern web applications',
        duration: '16 weeks',
        level: 'Beginner to Advanced'
      },
      { 
        icon: <FaPalette />, 
        title: 'UI/UX Design', 
        description: 'User research, wireframing, prototyping with Figma, design thinking, usability testing',
        duration: '12 weeks',
        level: 'Beginner to Intermediate'
      },
      { 
        icon: <FaRocket />, 
        title: 'Creative AI Tools', 
        description: 'ChatGPT, Midjourney, DALL-E, AI writing assistants, and productivity automation',
        duration: '6 weeks',
        level: 'Beginner'
      },
      { 
        icon: <FaShieldAlt />, 
        title: 'Cybersecurity Fundamentals', 
        description: 'Network security, ethical hacking basics, data protection, and online safety',
        duration: '10 weeks',
        level: 'Intermediate'
      },
      { 
        icon: <FaPenFancy />, 
        title: 'Graphic Design', 
        description: 'Adobe Creative Suite, Canva Pro, branding, visual identity, and print design',
        duration: '12 weeks',
        level: 'Beginner to Advanced'
      },
      { 
        icon: <FaVideo />, 
        title: 'Video Editing', 
        description: 'Adobe Premiere Pro, Final Cut Pro, motion graphics, color grading, storytelling',
        duration: '10 weeks',
        level: 'Intermediate'
      },
      { 
        icon: <FaCamera />, 
        title: 'Photography', 
        description: 'Camera basics, composition, lighting, editing with Lightroom, portfolio building',
        duration: '8 weeks',
        level: 'Beginner to Intermediate'
      }
    ],
    business: [
      { 
        icon: <FaRocket />, 
        title: 'Founder Academy', 
        description: 'Business model canvas, MVP development, pitching, fundraising, scaling strategies',
        duration: '12 weeks',
        level: 'All Levels'
      },
      { 
        icon: <FaBriefcase />, 
        title: 'Freelancing & Online Work', 
        description: 'Upwork, Fiverr mastery, client management, pricing strategies, portfolio building',
        duration: '8 weeks',
        level: 'Beginner to Intermediate'
      },
      { 
        icon: <FaRocket />, 
        title: 'Small Enterprise Development', 
        description: 'Business planning, financial management, marketing, operations, growth strategies',
        duration: '10 weeks',
        level: 'Beginner to Intermediate'
      }
    ],
    leadership: [
      { 
        icon: <FaUsers />, 
        title: 'Project Management', 
        description: 'Agile, Scrum, project planning, risk management, stakeholder engagement, delivery',
        duration: '10 weeks',
        level: 'Intermediate'
      },
      { 
        icon: <FaChartBar />, 
        title: 'Monitoring & Evaluation (M&E)', 
        description: 'Theory of change, logframes, indicators, data collection, impact measurement',
        duration: '8 weeks',
        level: 'Intermediate'
      },
      { 
        icon: <FaCalculator />, 
        title: 'QuickBooks & Accounting', 
        description: 'Bookkeeping, financial reporting, payroll, invoicing, small business accounting',
        duration: '8 weeks',
        level: 'Beginner to Intermediate'
      },
      { 
        icon: <FaCalculator />, 
        title: 'Sage Accounting', 
        description: 'Enterprise accounting software, financial management, reporting, audit preparation',
        duration: '10 weeks',
        level: 'Intermediate'
      },
      { 
        icon: <FaBullhorn />, 
        title: 'Digital Marketing', 
        description: 'SEO, Google Ads, Facebook Ads, email marketing, analytics, conversion optimization',
        duration: '12 weeks',
        level: 'Beginner to Advanced'
      },
      { 
        icon: <FaBullhorn />, 
        title: 'Social Media Management', 
        description: 'Content strategy, community management, scheduling, analytics, brand building',
        duration: '8 weeks',
        level: 'Beginner to Intermediate'
      }
    ],
    peace: [
      { 
        icon: <FaPeace />, 
        title: 'Conflict Resolution', 
        description: 'Mediation techniques, negotiation skills, conflict analysis, peacebuilding frameworks',
        duration: '8 weeks',
        level: 'All Levels'
      },
      { 
        icon: <FaHandshake />, 
        title: 'Social Cohesion', 
        description: 'Community dialogue facilitation, diversity awareness, inclusive programming, unity building',
        duration: '6 weeks',
        level: 'All Levels'
      }
    ]
  };

  const benefits = [
    { icon: <FaCertificate />, title: 'Industry-Recognized Certificates', description: 'Earn certificates upon successful completion' },
    { icon: <FaUserTie />, title: 'Expert Instructors', description: 'Learn from experienced professionals' },
    { icon: <FaDesktop />, title: 'Practical Training', description: 'Hands-on projects and real-world applications' },
    { icon: <FaClock />, title: 'Flexible Learning', description: 'Onsite, online, and blended options available' },
    { icon: <FaUsers />, title: 'Peer Learning', description: 'Collaborative environment with fellow learners' },
    { icon: <FaBriefcase />, title: 'Career Support', description: 'Job placement assistance and career guidance' }
  ];

  const learningModes = [
    {
      icon: <FaDesktop />,
      title: 'Onsite Training',
      description: 'Face-to-face instruction at our training centers in Kakuma and Turkana West',
      features: ['Hands-on practice', 'Direct mentorship', 'Networking opportunities', 'Access to equipment']
    },
    {
      icon: <FaMobile />,
      title: 'Online Learning',
      description: 'Self-paced courses accessible from anywhere with internet connection',
      features: ['Learn at your pace', 'Video tutorials', 'Digital resources', '24/7 access']
    },
    {
      icon: <FaGraduationCap />,
      title: 'Blended Approach',
      description: 'Combination of online learning and periodic in-person sessions',
      features: ['Flexibility + structure', 'Best of both worlds', 'Regular check-ins', 'Hybrid support']
    }
  ];

  return (
    <div className="skills-training-page">
      {/* Hero Section */}
      <section className="skills-hero">
        <div className="skills-hero-background">
          <div className="skills-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="skills-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span className="title-part">Skills Training &</span>
              <span className="title-part gradient-text">Certification Programs</span>
            </h1>
            <p className="lead-text">
              <em>Transform your future with <strong>comprehensive, industry-relevant training</strong> 
              across digital skills, technology, entrepreneurship, and community leadership.</em>
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>50+</strong>
                <span>Courses Available</span>
              </div>
              <div className="hero-stat">
                <strong>2,000+</strong>
                <span>Graduates</span>
              </div>
              <div className="hero-stat">
                <strong>95%</strong>
                <span>Satisfaction Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Tabs Section */}
      <section className="programs-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Explore Programs</h6>
            <h2>Choose Your Learning Path</h2>
            <p className="lead-text">
              Browse our comprehensive catalog of <em>skills training programs</em> across five major categories
            </p>
          </motion.div>

          {/* Category Tabs */}
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeTab === category.id ? 'active' : ''}`}
                onClick={() => setActiveTab(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-label">{category.label}</span>
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              className="programs-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {programs[activeTab].map((program, index) => (
                <motion.div
                  key={index}
                  className="program-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="program-card-icon">{program.icon}</div>
                  <h3>{program.title}</h3>
                  <p>{program.description}</p>
                  <div className="program-meta">
                    <span className="meta-item">
                      <FaClock /> {program.duration}
                    </span>
                    <span className="meta-item">
                      <FaGraduationCap /> {program.level}
                    </span>
                  </div>
                  <a 
                    href="https://docs.google.com/forms/d/e/1FAIpQLSe-2buoAY-tFj6OmBXD6TxzxIdDChfqpRwAYkW21yiSwe87QA/viewform?usp=sharing&ouid=108921294445515076886"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Apply Now
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
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
            <h6 className="section-tag">Why Choose ANAM CBO</h6>
            <h2>Training That <span className="highlight">Transforms</span></h2>
          </motion.div>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Modes Section */}
      <section className="learning-modes section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Flexible Learning</h6>
            <h2>Learn <em>Your Way</em></h2>
            <p className="lead-text">
              Choose the learning format that fits your <strong>schedule, location, and learning style</strong>
            </p>
          </motion.div>

          <div className="modes-grid">
            {learningModes.map((mode, index) => (
              <motion.div
                key={index}
                className="mode-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="mode-icon">{mode.icon}</div>
                <h3>{mode.title}</h3>
                <p>{mode.description}</p>
                <ul className="mode-features">
                  {mode.features.map((feature, idx) => (
                    <li key={idx}>
                      <FaCheckCircle /> {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="payment-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Payment Information</h6>
            <h2>How to <span className="highlight">Pay</span></h2>
            <p className="lead-text">
              Use the following payment details to complete your course registration
            </p>
          </motion.div>

          <motion.div
            className="payment-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="payment-icon">
              <FaCalculator />
            </div>
            <h3>Equity Bank Paybill</h3>
            <div className="payment-details">
              <div className="payment-item">
                <span className="payment-label">Paybill Number:</span>
                <span className="payment-value">247247</span>
              </div>
              <div className="payment-item">
                <span className="payment-label">Account Number:</span>
                <span className="payment-value">984100</span>
              </div>
              <div className="payment-item">
                <span className="payment-label">Account Name:</span>
                <span className="payment-value">Anam Community Based Organization</span>
              </div>
            </div>
            <p className="payment-note">
              <strong>Note:</strong> After payment, please submit the M-PESA confirmation message 
              along with your application form.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="enrollment-cta section bg-primary">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Start Your Learning Journey?</h2>
            <p>
              Join <strong>thousands of graduates</strong> who have transformed their careers 
              through ANAM CBO training programs
            </p>
            <div className="cta-buttons">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSe-2buoAY-tFj6OmBXD6TxzxIdDChfqpRwAYkW21yiSwe87QA/viewform?usp=sharing&ouid=108921294445515076886"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-white btn-lg"
              >
                Apply Now
              </a>
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

export default SkillsTraining;
