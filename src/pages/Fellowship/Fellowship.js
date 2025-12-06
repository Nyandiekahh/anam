import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaLaptopCode,
  FaRocket,
  FaUsers,
  FaPeace,
  FaHandshake,
  FaGraduationCap,
  FaHeart,
  FaLightbulb,
  FaNetworkWired,
  FaChartLine,
  FaCertificate,
  FaUserTie,
  FaCheckCircle,
  FaBullhorn,
  FaComments,
  FaCalendarAlt,
  FaTrophy
} from 'react-icons/fa';
import './Fellowship.css';

const Fellowship = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fellowshipTracks = [
    {
      icon: <FaLaptopCode />,
      title: 'Digital Skills Fellow',
      subtitle: 'Digital & Tech Mentors',
      description: 'Guide youth in mastering digital tools, data analysis, web development, and creative technologies. Share your expertise in coding, design, digital marketing, and modern tech skills.',
      responsibilities: [
        'Mentor trainees in digital skills programs',
        'Conduct technical workshops and code reviews',
        'Provide career guidance in tech fields',
        'Support project development and portfolio building'
      ],
      requirements: [
        '2+ years experience in tech/digital fields',
        'Proficiency in at least two tech domains',
        'Passion for teaching and mentorship',
        'Available for 5-10 hours per month'
      ],
      gradient: 'linear-gradient(135deg, #2D7A3E 0%, #16A085 100%)'
    },
    {
      icon: <FaRocket />,
      title: 'Enterprise Growth Champion',
      subtitle: 'Entrepreneurship & Business Mentors',
      description: 'Support aspiring entrepreneurs in building sustainable businesses and freelancing careers. Share insights on business strategy, marketing, financial management, and growth.',
      responsibilities: [
        'Mentor entrepreneurs and freelancers',
        'Review business plans and strategies',
        'Provide guidance on pitching and fundraising',
        'Connect mentees with business opportunities'
      ],
      requirements: [
        'Proven entrepreneurship or business experience',
        'Track record of business growth/success',
        'Understanding of startup ecosystems',
        'Commitment to regular mentorship sessions'
      ],
      gradient: 'linear-gradient(135deg, #E67E22 0%, #F39C12 100%)'
    },
    {
      icon: <FaUsers />,
      title: 'Community Impact Advisor',
      subtitle: 'Community Leadership & Project Mentors',
      description: 'Mentor future leaders in project management, M&E, and community development. Guide trainees in designing and implementing impactful community programs.',
      responsibilities: [
        'Guide project planning and implementation',
        'Teach M&E frameworks and tools',
        'Mentor on stakeholder engagement',
        'Support proposal writing and reporting'
      ],
      requirements: [
        'Experience in community development/NGO work',
        'Strong project management skills',
        'Knowledge of M&E methodologies',
        'Excellent communication abilities'
      ],
      gradient: 'linear-gradient(135deg, #1E5C8C 0%, #3498DB 100%)'
    },
    {
      icon: <FaPeace />,
      title: 'Peace & Leadership Fellow',
      subtitle: 'Peace & Social Impact Mentors',
      description: 'Guide peacebuilding initiatives and social cohesion programs. Mentor youth in conflict resolution, dialogue facilitation, and civic engagement.',
      responsibilities: [
        'Mentor peace ambassadors and civic leaders',
        'Facilitate dialogue and mediation training',
        'Guide social cohesion initiatives',
        'Support advocacy and campaign development'
      ],
      requirements: [
        'Background in peacebuilding or social work',
        'Experience in conflict-affected settings',
        'Strong facilitation skills',
        'Passion for social justice and equity'
      ],
      gradient: 'linear-gradient(135deg, #8E44AD 0%, #9B59B6 100%)'
    }
  ];

  const benefits = [
    {
      icon: <FaHeart />,
      title: 'Make Real Impact',
      description: 'Transform lives through meaningful mentorship and see tangible results in your mentees\' growth'
    },
    {
      icon: <FaNetworkWired />,
      title: 'Expand Your Network',
      description: 'Connect with like-minded professionals, community leaders, and development practitioners'
    },
    {
      icon: <FaLightbulb />,
      title: 'Develop Leadership Skills',
      description: 'Enhance your coaching, communication, and leadership abilities through mentorship practice'
    },
    {
      icon: <FaCertificate />,
      title: 'Recognition & Certificates',
      description: 'Receive official recognition and certificates for your contribution to community development'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Continuous Learning',
      description: 'Access exclusive workshops, resources, and professional development opportunities'
    },
    {
      icon: <FaChartLine />,
      title: 'Career Growth',
      description: 'Strengthen your portfolio, gain mentorship experience, and open doors to new opportunities'
    }
  ];

  const howItWorks = [
    {
      step: '01',
      title: 'Apply',
      description: 'Submit your application with your background, expertise, and motivation to join the fellowship'
    },
    {
      step: '02',
      title: 'Interview',
      description: 'Participate in a brief interview to discuss your experience, availability, and mentorship approach'
    },
    {
      step: '03',
      title: 'Onboarding',
      description: 'Complete orientation training on our programs, mentorship best practices, and fellow responsibilities'
    },
    {
      step: '04',
      title: 'Match',
      description: 'Get matched with mentees based on your expertise, their goals, and mutual availability'
    },
    {
      step: '05',
      title: 'Mentor',
      description: 'Engage in regular mentorship sessions, provide guidance, and support your mentees\' journey'
    },
    {
      step: '06',
      title: 'Celebrate',
      description: 'Witness your mentees\' success, receive recognition, and continue making impact'
    }
  ];

  return (
    <div className="fellowship-page">
      {/* Hero Section */}
      <section className="fellowship-hero">
        <div className="fellowship-hero-background">
          <div className="fellowship-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="fellowship-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              <span className="title-part">Fellowship</span>
              <span className="title-part gradient-text">Program</span>
            </h1>
            <p className="lead-text">
              <em>Join our <strong>mentorship network</strong> and contribute to transforming 
              the next generation of community leaders, entrepreneurs, and changemakers</em>
            </p>
            <div className="hero-badges">
              <span className="badge badge-white">Mentorship Excellence</span>
              <span className="badge badge-white">Community Impact</span>
              <span className="badge badge-white">Professional Growth</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Fellowship Section */}
      <section className="about-fellowship section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">About the Fellowship</h6>
            <h2>Connecting <span className="highlight">Experience</span> with <span className="highlight">Potential</span></h2>
            <p className="lead-text">
              Our Fellowship Program bridges the gap between experienced professionals and emerging 
              talent, creating a <em>powerful ecosystem of learning, growth, and impact</em>
            </p>
          </motion.div>

          <div className="about-content">
            <motion.div
              className="content-block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Purpose</h3>
              <p>
                The ANAM CBO Fellowship Program mobilizes <strong>experienced professionals, 
                entrepreneurs, and community leaders</strong> to mentor and guide our training 
                participants. Fellows share their expertise, provide career guidance, and help 
                mentees navigate challenges in their learning journey.
              </p>
            </motion.div>

            <motion.div
              className="content-block"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>How It Works</h3>
              <p>
                Fellows commit to <em>5-10 hours per month</em> of mentorship activities, including 
                one-on-one sessions, group workshops, project reviews, and career counseling. The 
                fellowship is <strong>flexible, remote-friendly, and deeply rewarding</strong>, 
                allowing you to make impact from anywhere.
              </p>
            </motion.div>

            <motion.div
              className="content-block full-width"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Who Can Join</h3>
              <p>
                We welcome professionals from all backgrounds who have <strong>relevant experience, 
                a passion for mentorship, and a commitment to community development</strong>. Whether 
                you're a tech expert, business owner, project manager, or peacebuilding practitioner, 
                there's a place for you in our fellowship.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fellowship Tracks Section */}
      <section className="tracks-section section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Fellowship Tracks</h6>
            <h2>Choose Your <em>Mentorship Focus</em></h2>
            <p className="lead-text">
              Four specialized tracks aligned with our core program areas
            </p>
          </motion.div>

          <div className="tracks-grid">
            {fellowshipTracks.map((track, index) => (
              <motion.div
                key={index}
                className="track-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                style={{ '--track-gradient': track.gradient }}
              >
                <div className="track-header">
                  <div className="track-icon">{track.icon}</div>
                  <div className="track-title-group">
                    <h3>{track.title}</h3>
                    <p className="track-subtitle"><em>{track.subtitle}</em></p>
                  </div>
                </div>
                <p className="track-description">{track.description}</p>
                
                <div className="track-details">
                  <div className="detail-section">
                    <h4><FaCheckCircle /> Key Responsibilities</h4>
                    <ul>
                      {track.responsibilities.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="detail-section">
                    <h4><FaUserTie /> Requirements</h4>
                    <ul>
                      {track.requirements.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button className="btn btn-primary btn-block">
                  Apply for This Track
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="benefits-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Why Join?</h6>
            <h2>Benefits of <span className="highlight">Fellowship</span></h2>
            <p className="lead-text">
              More than mentorship—it's a <em>transformative experience</em> for both you and your mentees
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
                whileHover={{ scale: 1.05 }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="process-section section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">The Process</h6>
            <h2>Your Journey to <em>Fellowship</em></h2>
          </motion.div>

          <div className="process-timeline">
            {howItWorks.map((item, index) => (
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

      {/* Testimonials Section */}
      <section className="testimonials-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Fellow Stories</h6>
            <h2>Voices from Our <span className="highlight">Community</span></h2>
          </motion.div>

          <div className="testimonials-grid">
            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="testimonial-text">
                <em>"Being a Digital Skills Fellow has been incredibly rewarding. Watching my 
                mentees grow from beginners to confident developers and landing their first clients 
                fills me with pride. This fellowship amplifies your impact."</em>
              </p>
              <div className="testimonial-author">
                <strong>James K.</strong> — Digital Skills Fellow
              </div>
            </motion.div>

            <motion.div
              className="testimonial-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="testimonial-text">
                <em>"The Enterprise Growth Champion track allowed me to give back while sharpening 
                my own coaching skills. The fellows community is supportive, and the impact is real."</em>
              </p>
              <div className="testimonial-author">
                <strong>Mary A.</strong> — Enterprise Growth Champion
              </div>
            </motion.div>
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
            <FaTrophy className="cta-icon-large" />
            <h2>Ready to Make a Difference?</h2>
            <p className="lead-text text-white">
              Join our fellowship and become part of a <strong>movement transforming communities</strong> 
              through the power of mentorship
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-white btn-lg">
                Become a Fellow Today
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

export default Fellowship;
