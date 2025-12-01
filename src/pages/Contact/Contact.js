import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setFormStatus('success');
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setFormStatus('');
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: ['Turkana West Sub-County', 'Kakuma Town, Kenya'],
      color: '#E67E22'
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+254 XXX XXX XXX', 'Mon-Fri: 8AM - 5PM EAT'],
      color: '#16A085'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['info@anamcbo.org', 'programs@anamcbo.org'],
      color: '#8E44AD'
    }
  ];

  const socialLinks = [
    { icon: <FaFacebook />, url: '#', label: 'Facebook', color: '#1877F2' },
    { icon: <FaInstagram />, url: '#', label: 'Instagram', color: '#E4405F' },
    { icon: <FaTwitter />, url: '#', label: 'Twitter', color: '#1DA1F2' },
    { icon: <FaLinkedin />, url: '#', label: 'LinkedIn', color: '#0A66C2' },
    { icon: <FaWhatsapp />, url: '#', label: 'WhatsApp', color: '#25D366' }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-background">
          <div className="contact-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="lead-text">
              <em>We'd love to hear from you. Whether you want to <strong>join a program</strong>, 
              <strong> become a partner</strong>, or simply learn more about our work—reach out today!</em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info-section section">
        <div className="container">
          <div className="contact-info-grid">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="contact-info-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                style={{ '--card-color': info.color }}
              >
                <div className="info-icon">{info.icon}</div>
                <h3>{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx}>{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="contact-form-section section bg-light">
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="form-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2>Send Us a Message</h2>
              <p className="form-description">
                Fill out the form below and we'll get back to you within <strong>24 hours</strong>
              </p>

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="How can we help you?"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>

                {formStatus === 'success' && (
                  <motion.div
                    className="form-success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <FaCheckCircle /> Message sent successfully! We'll be in touch soon.
                  </motion.div>
                )}

                <button type="submit" className="btn btn-primary btn-lg">
                  Send Message
                  <FaPaperPlane />
                </button>
              </form>
            </motion.div>

            {/* Map & Additional Info */}
            <motion.div
              className="map-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="map-placeholder">
                <FaMapMarkerAlt />
                <p>Turkana West, Kakuma</p>
                <span className="small-text">Interactive map coming soon</span>
              </div>

              <div className="additional-info">
                <h3>Office Hours</h3>
                <ul>
                  <li><strong>Monday - Friday:</strong> 8:00 AM - 5:00 PM</li>
                  <li><strong>Saturday:</strong> 9:00 AM - 1:00 PM</li>
                  <li><strong>Sunday:</strong> Closed</li>
                </ul>

                <h3 className="mt-4">Connect With Us</h3>
                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      className="social-link"
                      aria-label={social.label}
                      style={{ '--social-color': social.color }}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support CTA Section */}
      <section className="support-cta section">
        <div className="container">
          <motion.div
            className="support-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Support Our Mission</h2>
            <p>
              Your contribution helps us <strong>empower more communities</strong> and create 
              lasting impact through education and skills development
            </p>
            <button className="btn btn-primary btn-lg">
              Make a Donation
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
