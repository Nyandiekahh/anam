import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaBullseye,
  FaFileAlt,
  FaLinkedin,
  FaComments,
  FaNetworkWired,
  FaUserTie,
  FaSearch,
  FaBriefcase,
  FaChartLine,
  FaCheckCircle,
  FaTools,
  FaBook,
  FaHandshake,
  FaAward,
  FaClock,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaQuoteLeft
} from 'react-icons/fa';
import './CareerCoaching.css';

const CareerCoaching = () => {
  const [activeSession, setActiveSession] = useState(null);

  const sessions = [
    {
      number: 1,
      title: 'Self-Assessment & Goal Setting',
      phase: 'Foundation Phase',
      duration: '90 minutes',
      objectives: [
        'Identify your core strengths, skills, and values',
        'Assess your career interests and aspirations',
        'Set SMART career goals',
        'Create your personal career vision statement'
      ],
      activities: [
        'Skills inventory exercise',
        'Values clarification workshop',
        'Career interests assessment',
        'Goal-setting framework practice'
      ],
      outcomes: 'Clear understanding of your career direction and concrete, achievable goals'
    },
    {
      number: 2,
      title: 'Resume Building & CV Optimization',
      phase: 'Foundation Phase',
      duration: '2 hours',
      objectives: [
        'Learn professional resume/CV formats and standards',
        'Craft compelling achievement statements',
        'Tailor resumes for different opportunities',
        'Avoid common resume mistakes'
      ],
      activities: [
        'Resume templates review and selection',
        'Achievement statement writing workshop',
        'Resume critique and feedback session',
        'ATS (Applicant Tracking System) optimization'
      ],
      outcomes: 'Professional, polished resume that highlights your unique value'
    },
    {
      number: 3,
      title: 'LinkedIn Profile Optimization',
      phase: 'Foundation Phase',
      duration: '90 minutes',
      objectives: [
        'Create/optimize your LinkedIn profile',
        'Write a compelling headline and summary',
        'Showcase skills and endorsements',
        'Build your professional network online'
      ],
      activities: [
        'LinkedIn profile audit',
        'Headline and summary writing workshop',
        'Skills section optimization',
        'Networking strategy development'
      ],
      outcomes: 'Optimized LinkedIn presence that attracts opportunities'
    },
    {
      number: 4,
      title: 'Interview Preparation & Techniques',
      phase: 'Skills Development Phase',
      duration: '2 hours',
      objectives: [
        'Master common interview questions',
        'Learn STAR method for behavioral questions',
        'Develop confident interview presence',
        'Handle difficult questions with grace'
      ],
      activities: [
        'Mock interview practice',
        'STAR method workshop',
        'Body language and communication coaching',
        'Salary negotiation basics'
      ],
      outcomes: 'Confidence and skills to excel in any interview situation'
    },
    {
      number: 5,
      title: 'Professional Networking Strategies',
      phase: 'Skills Development Phase',
      duration: '90 minutes',
      objectives: [
        'Build authentic professional relationships',
        'Master in-person and online networking',
        'Create your elevator pitch',
        'Leverage informational interviews'
      ],
      activities: [
        'Elevator pitch development',
        'Networking event role-play',
        'Email outreach templates',
        'Relationship management strategies'
      ],
      outcomes: 'Strong networking skills and expanding professional connections'
    },
    {
      number: 6,
      title: 'Personal Branding & Online Presence',
      phase: 'Skills Development Phase',
      duration: '90 minutes',
      objectives: [
        'Define your unique professional brand',
        'Create consistent online presence',
        'Build thought leadership',
        'Manage your digital reputation'
      ],
      activities: [
        'Personal brand statement creation',
        'Social media audit',
        'Content strategy development',
        'Portfolio building guidance'
      ],
      outcomes: 'Distinctive personal brand that sets you apart'
    },
    {
      number: 7,
      title: 'Job Search Strategies & Techniques',
      phase: 'Application & Growth Phase',
      duration: '2 hours',
      objectives: [
        'Identify job opportunities effectively',
        'Navigate job boards and company websites',
        'Use the hidden job market',
        'Organize your job search'
      ],
      activities: [
        'Job board optimization',
        'Company research techniques',
        'Application tracking system setup',
        'Weekly job search plan creation'
      ],
      outcomes: 'Systematic, effective job search approach'
    },
    {
      number: 8,
      title: 'Freelancing & Online Work Opportunities',
      phase: 'Application & Growth Phase',
      duration: '90 minutes',
      objectives: [
        'Explore freelancing platforms',
        'Create winning proposals',
        'Set competitive rates',
        'Manage freelance clients'
      ],
      activities: [
        'Platform profile optimization (Upwork, Fiverr)',
        'Proposal writing workshop',
        'Pricing strategy session',
        'Client communication best practices'
      ],
      outcomes: 'Ready to launch or scale your freelancing career'
    },
    {
      number: 9,
      title: 'Long-term Career Growth Planning',
      phase: 'Application & Growth Phase',
      duration: '90 minutes',
      objectives: [
        'Create 1, 3, and 5-year career roadmap',
        'Identify skill gaps and development needs',
        'Build sustainable career advancement strategy',
        'Develop resilience and adaptability'
      ],
      activities: [
        'Career roadmap creation',
        'Skills gap analysis',
        'Professional development plan',
        'Accountability partner setup'
      ],
      outcomes: 'Clear career trajectory and actionable growth plan'
    }
  ];

  const tools = [
    { icon: <FaFileAlt />, name: 'Resume Templates', description: 'Professional, ATS-friendly formats' },
    { icon: <FaLinkedin />, name: 'LinkedIn Guide', description: 'Profile optimization checklist' },
    { icon: <FaComments />, name: 'Interview Scripts', description: 'Common questions & answers' },
    { icon: <FaSearch />, name: 'Job Search Tracker', description: 'Organize your applications' },
    { icon: <FaBriefcase />, name: 'Portfolio Templates', description: 'Showcase your work' },
    { icon: <FaNetworkWired />, name: 'Networking Kit', description: 'Email templates & scripts' }
  ];

  const mentorshipFeatures = [
    'One-on-one guidance from experienced career coaches',
    'Personalized feedback on resumes, cover letters, and LinkedIn',
    'Mock interviews with constructive feedback',
    'Ongoing support throughout your job search',
    'Access to career coach via WhatsApp for quick questions',
    'Alumni network connections'
  ];

  const expectedOutcomes = [
    { icon: <FaCheckCircle />, text: 'Professional resume and LinkedIn profile' },
    { icon: <FaCheckCircle />, text: 'Confidence in interviews and networking' },
    { icon: <FaCheckCircle />, text: 'Clear career goals and action plan' },
    { icon: <FaCheckCircle />, text: 'Job search and freelancing strategies' },
    { icon: <FaCheckCircle />, text: 'Personal brand and online presence' },
    { icon: <FaCheckCircle />, text: 'Long-term career growth roadmap' }
  ];

  return (
    <div className="careercoaching-page">
      {/* Hero Section */}
      <section className="coaching-hero">
        <div className="coaching-hero-background">
          <div className="coaching-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="coaching-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span className="title-part">Career Coaching &</span>
              <span className="title-part gradient-text">Professional Guidance</span>
            </h1>
            <p className="lead-text">
              <em>Your comprehensive journey from <strong>skills acquisition to successful employment</strong>—
              structured, personalized, and results-driven</em>
            </p>
            <div className="hero-features">
              <div className="feature-badge">
                <FaClock /> 9 Structured Sessions
              </div>
              <div className="feature-badge">
                <FaUsers /> Expert Coaches
              </div>
              <div className="feature-badge">
                <FaAward /> Career Tools Included
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="overview-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Program Overview</h6>
            <h2>Transforming <span className="highlight">Skills into Careers</span></h2>
            <p className="lead-text">
              Our <strong>9-Session Career Coaching Program</strong> is designed to guide you through 
              every stage of career development—from <em>self-discovery to job offers</em>
            </p>
          </motion.div>

          <div className="overview-content">
            <motion.div
              className="overview-card"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaLightbulb className="overview-icon" />
              <h3>What You'll Achieve</h3>
              <p>
                This program bridges the gap between <strong>technical skills</strong> and 
                <strong> career success</strong>. You'll develop a professional identity, master job 
                search strategies, and build confidence to pursue opportunities.
              </p>
            </motion.div>

            <motion.div
              className="overview-card"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <FaRocket className="overview-icon" />
              <h3>Who It's For</h3>
              <p>
                Whether you're a <em>recent graduate, career changer, skills training participant, 
                or job seeker</em>, this program provides the structure, tools, and support you need 
                to achieve your career goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Session Breakdown Section */}
      <section className="sessions-section section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Detailed Curriculum</h6>
            <h2>9-Session <em>Coaching Journey</em></h2>
            <p className="lead-text">
              Each session builds on the previous, creating a <strong>comprehensive career development experience</strong>
            </p>
          </motion.div>

          <div className="sessions-timeline">
            {sessions.map((session, index) => (
              <motion.div
                key={index}
                className="session-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div 
                  className="session-header"
                  onClick={() => setActiveSession(activeSession === session.number ? null : session.number)}
                >
                  <div className="session-number">
                    <span>Session</span>
                    <strong>{session.number}</strong>
                  </div>
                  <div className="session-title-group">
                    <span className="session-phase">{session.phase}</span>
                    <h3>{session.title}</h3>
                    <span className="session-duration"><FaClock /> {session.duration}</span>
                  </div>
                  <div className="expand-icon">
                    {activeSession === session.number ? '−' : '+'}
                  </div>
                </div>

                {activeSession === session.number && (
                  <motion.div
                    className="session-details"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="detail-section">
                      <h4><FaBullseye /> Learning Objectives</h4>
                      <ul>
                        {session.objectives.map((obj, idx) => (
                          <li key={idx}>{obj}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="detail-section">
                      <h4><FaTools /> Activities</h4>
                      <ul>
                        {session.activities.map((activity, idx) => (
                          <li key={idx}>{activity}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="outcomes-box">
                      <strong>Expected Outcomes:</strong> {session.outcomes}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Tools Section */}
      <section className="tools-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Resources & Tools</h6>
            <h2>Career Development <span className="highlight">Toolkit</span></h2>
            <p className="lead-text">
              Practical templates, guides, and resources to <em>accelerate your career journey</em>
            </p>
          </motion.div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="tool-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="tool-icon">{tool.icon}</div>
                <h4>{tool.name}</h4>
                <p>{tool.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentorship Support Section */}
      <section className="mentorship-section section bg-light">
        <div className="container">
          <div className="mentorship-content">
            <motion.div
              className="mentorship-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="image-placeholder">
                <FaHandshake className="placeholder-icon" />
              </div>
            </motion.div>

            <motion.div
              className="mentorship-text"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h6 className="section-tag">Personalized Support</h6>
              <h2>Expert <em>Mentorship</em> Every Step</h2>
              <p className="lead-text">
                You won't navigate your career journey alone—our <strong>experienced career coaches</strong> 
                provide continuous guidance and support
              </p>
              <ul className="mentorship-features">
                {mentorshipFeatures.map((feature, index) => (
                  <li key={index}>
                    <FaCheckCircle /> {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expected Outcomes Section */}
      <section className="outcomes-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Program Outcomes</h6>
            <h2>What You'll <span className="highlight">Walk Away With</span></h2>
          </motion.div>

          <div className="outcomes-grid">
            {expectedOutcomes.map((outcome, index) => (
              <motion.div
                key={index}
                className="outcome-item"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="outcome-icon">{outcome.icon}</div>
                <p>{outcome.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="quote-section section bg-primary">
        <div className="container">
          <motion.div
            className="quote-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaQuoteLeft className="quote-icon-large" />
            <blockquote>
              <p>
                <em>"Success is not final, failure is not fatal: it is the <strong>courage to continue</strong> that counts. 
                Our career coaching program gives you that courage, plus the skills and support to thrive."</em>
              </p>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Career?</h2>
            <p className="lead-text">
              Join hundreds of graduates who have successfully <strong>launched and advanced their careers</strong> 
              through our coaching program
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary btn-lg">
                Enroll in Career Coaching
              </Link>
              <Link to="/skills-training" className="btn btn-outline btn-lg">
                View Skills Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CareerCoaching;
