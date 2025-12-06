import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaHeart,
  FaArrowRight
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/about', label: 'About Us' },
    { path: '/skills-training', label: 'Skills Training' },
    { path: '/fellowship', label: 'Fellowship Program' },
    { path: '/career-coaching', label: 'Career Coaching' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const programs = [
    { path: '/health-programs', label: 'Health Management' },
    { path: '/tailoring', label: 'Commercial Tailoring' },
    { path: '/peace-leadership', label: 'Peace & Leadership' },
    { path: '/sgbv-srhr', label: 'SGBV & SRHR' },
    { path: '/economic-empowerment', label: 'Economic Empowerment' },
    { path: '/partnerships', label: 'Partnerships' }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: 'https://www.facebook.com/people/ANAM-Community-Based-Organization-Turkana/61580072218437/', label: 'Facebook', color: '#1877F2' },
    { icon: <FaTiktok />, url: 'https://www.tiktok.com/@anamcbokakuma', label: 'TikTok', color: '#000000' },
    { icon: <FaYoutube />, url: 'https://www.youtube.com/@ANAMCBO_Turkana', label: 'YouTube', color: '#FF0000' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/company/anam-c-b-o/', label: 'LinkedIn', color: '#0A66C2' },
    { icon: <FaWhatsapp />, url: 'https://wa.me/254729217016', label: 'WhatsApp', color: '#25D366' }
  ];

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Stay Connected with ANAM CBO</h3>
              <p>Get the latest updates on programs, success stories, and opportunities</p>
            </div>
            <form className="newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter-input"
                required
              />
              <button type="submit" className="btn btn-white">
                Subscribe
                <FaArrowRight />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* About Column */}
            <div className="footer-column">
              <div className="footer-logo">
                <h2 className="logo-text">
                  <span className="logo-anam">ANAM</span>
                  <span className="logo-cbo">CBO</span>
                </h2>
                <p className="logo-tagline">Empowering Communities</p>
              </div>
              <p className="footer-description">
                <em>Transforming lives through skills development, leadership training, 
                and community empowerment programs in Turkana West, Kakuma, and beyond.</em>
              </p>
              <div className="footer-social">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    className="social-link"
                    aria-label={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ '--social-color': social.color }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div className="footer-column">
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.path} className="footer-link">
                      <FaArrowRight className="link-icon" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Programs Column */}
            <div className="footer-column">
              <h4 className="footer-title">Our Programs</h4>
              <ul className="footer-links">
                {programs.map((program, index) => (
                  <li key={index}>
                    <Link to={program.path} className="footer-link">
                      <FaArrowRight className="link-icon" />
                      {program.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Column */}
            <div className="footer-column">
              <h4 className="footer-title">Get in Touch</h4>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt className="contact-icon" />
                  <div>
                    <strong>Location:</strong>
                    <p>Turkana West, Kakuma, Kenya</p>
                  </div>
                </li>
                <li>
                  <FaPhone className="contact-icon" />
                  <div>
                    <strong>Phone:</strong>
                    <p>+254 729 217016</p>
                  </div>
                </li>
                <li>
                  <FaEnvelope className="contact-icon" />
                  <div>
                    <strong>Email:</strong>
                    <p>finance@anamcbo.org</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              &copy; {currentYear} ANAM CBO. All Rights Reserved.
            </p>
            <p className="footer-love">
              Made with <FaHeart className="heart-icon" /> for Community Empowerment
            </p>
            <div className="footer-legal">
              <Link to="/privacy" className="legal-link">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms" className="legal-link">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
