import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaExternalLinkAlt, FaGoogle, FaImages, FaArrowRight, FaGraduationCap, FaUsers, FaHeart, FaHandshake } from 'react-icons/fa';
import './Gallery.css';

const Gallery = () => {
  const GOOGLE_DRIVE_URL = 'https://drive.google.com/drive/folders/1OyA5_EXcy8YZ2gbfvdJ-_fsu8ZzMHwzx?usp=sharing';

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = GOOGLE_DRIVE_URL;
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleViewGallery = () => {
    window.open(GOOGLE_DRIVE_URL, '_blank');
  };

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="gallery-hero-background">
          <div className="gallery-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="gallery-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaCamera className="hero-camera-icon" />
            <h1>
              <span className="title-part">Photo</span>
              <span className="title-part gradient-text"> Gallery</span>
            </h1>
            <p className="lead-text">
              <em>Capturing <strong>moments of transformation</strong>, celebrating success, and sharing the stories behind the impact</em>
            </p>
          </motion.div>
        </div>
      </section>

      <section className="gallery-redirect-section section">
        <div className="container">
          <motion.div
            className="redirect-content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="redirect-card">
              <div className="redirect-icon-wrapper">
                <FaGoogle className="google-icon" />
                <FaImages className="images-icon" />
              </div>
              <h2>View Our Complete <span className="highlight">Photo Gallery</span></h2>
              <p className="redirect-description">
                Our photo gallery is hosted on <strong>Google Drive</strong> where you can view hundreds of photos from our programs, events, training sessions, and community activities.
              </p>
              <div className="gallery-highlights">
                <div className="highlight-item">
                  <FaCamera />
                  <span>Training & Workshop Sessions</span>
                </div>
                <div className="highlight-item">
                  <FaImages />
                  <span>Graduation Ceremonies</span>
                </div>
                <div className="highlight-item">
                  <FaCamera />
                  <span>Community Events</span>
                </div>
                <div className="highlight-item">
                  <FaImages />
                  <span>Success Stories & More</span>
                </div>
              </div>
              <div className="redirect-buttons">
                <button className="btn btn-primary btn-lg" onClick={handleViewGallery}>
                  <FaExternalLinkAlt />
                  View Gallery on Google Drive
                  <FaArrowRight />
                </button>
              </div>
              <p className="redirect-note">
                <em>You will be redirected automatically in 5 seconds, or click the button above</em>
              </p>
              <div className="loading-bar">
                <motion.div
                  className="loading-progress"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: 'linear' }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="categories-overview section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">What You'll Find</h6>
            <h2>Our <em>Visual Story</em></h2>
            <p className="lead-text">
              Browse through our collection of <strong>memorable moments</strong> and <em>inspiring stories</em>
            </p>
          </motion.div>
          <div className="categories-grid">
            {[
              { icon: <FaGraduationCap />, title: 'Training Sessions', desc: 'Participants learning digital skills, entrepreneurship, and more' },
              { icon: <FaGraduationCap />, title: 'Graduation Ceremonies', desc: 'Celebrating achievements and success stories' },
              { icon: <FaUsers />, title: 'Community Events', desc: 'Outreach programs and community engagement' },
              { icon: <FaHeart />, title: 'Success Stories', desc: 'Alumni thriving in their careers and businesses' },
              { icon: <FaHandshake />, title: 'Partnership Moments', desc: 'Collaboration with partners and stakeholders' },
              { icon: <FaHeart />, title: 'Special Events', desc: 'Celebrations, milestones, and memorable occasions' }
            ].map((cat, index) => (
              <motion.div
                key={index}
                className="category-overview-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="category-icon">{cat.icon}</div>
                <h4>{cat.title}</h4>
                <p>{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="gallery-info-section section">
        <div className="container">
          <motion.div
            className="info-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaCamera className="info-icon" />
            <h3>Share Your <span className="highlight">Moments</span> With Us</h3>
            <p className="lead-text">
              <em>Have photos from ANAM CBO events or programs? We'd love to feature them!</em>
            </p>
            <div className="contact-info">
              <p><strong>Email your photos to:</strong> marketing@anamcbo.org</p>
              <p><strong>Include:</strong> Your name, program, date, and a brief description</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
