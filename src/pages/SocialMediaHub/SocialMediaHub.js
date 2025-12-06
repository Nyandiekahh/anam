import React from 'react';
import { motion } from 'framer-motion';
import {
  FaFacebook,
  FaTiktok,
  FaLinkedin,
  FaYoutube,
  FaWhatsapp,
  FaUsers,
  FaChartLine,
  FaEye,
  FaHeart,
  FaBullhorn,
  FaComments,
  FaShareAlt,
  FaCamera,
  FaVideo,
  FaNewspaper,
  FaHashtag,
  FaBell,
  FaArrowRight,
  FaPlay,
  FaThumbsUp
} from 'react-icons/fa';
import './SocialMediaHub.css';

const SocialMediaHub = () => {
  const socialPlatforms = [
    {
      icon: <FaFacebook />,
      name: 'Facebook',
      handle: '@ANAM Community Based Organization',
      description: 'Join our vibrant Facebook community where we share daily updates, program highlights, success stories, and connect with our growing family of 5,000+ members.',
      features: [
        'Live event coverage & photo albums',
        'Program enrollment announcements',
        'Success stories & testimonials',
        'Community Q&A sessions'
      ],
      stats: { followers: '5K+', engagement: 'High', posts: 'Daily' },
      color: '#1877F2',
      link: 'https://www.facebook.com/people/ANAM-Community-Based-Organization-Turkana/61580072218437/'
    },
    {
      icon: <FaTiktok />,
      name: 'TikTok',
      handle: '@anamcbokakuma',
      description: 'Short-form videos showcasing our programs, participant journeys, skill demonstrations, and the vibrant energy of our training sessions.',
      features: [
        'Behind-the-scenes training moments',
        'Quick skill tutorials & tips',
        'Participant transformation stories',
        'Graduation celebrations & highlights'
      ],
      stats: { followers: '2K+', views: '50K+', engagement: 'Viral' },
      color: '#000000',
      link: 'https://www.tiktok.com/@anamcbokakuma'
    },
    {
      icon: <FaYoutube />,
      name: 'YouTube',
      handle: '@ANAMCBO_Turkana',
      description: 'Comprehensive video library with full training tutorials, documentary films, webinars, and step-by-step guides to help you learn and grow.',
      features: [
        'Full training session recordings',
        'Documentary films on community impact',
        'Skill demonstration series',
        'Webinars & panel discussions'
      ],
      stats: { subscribers: '1.5K+', videos: '100+', watch: '50K hrs' },
      color: '#FF0000',
      link: 'https://www.youtube.com/@ANAMCBO_Turkana'
    },
    {
      icon: <FaLinkedin />,
      name: 'LinkedIn',
      handle: 'ANAM C-B-O',
      description: 'Connect professionally with ANAM CBO. Access career opportunities, professional development resources, and network with our alumni community.',
      features: [
        'Job opportunities & career tips',
        'Professional development content',
        'Alumni success spotlights',
        'Partnership announcements'
      ],
      stats: { connections: '2K+', posts: 'Weekly', reach: 'Professional' },
      color: '#0A66C2',
      link: 'https://www.linkedin.com/company/anam-c-b-o/'
    },
    {
      icon: <FaWhatsapp />,
      name: 'WhatsApp',
      handle: '+254 729 217016',
      description: 'Direct line for quick inquiries, enrollment support, and instant updates. Join program-specific groups and get real-time responses from our team.',
      features: [
        'Instant enrollment support',
        'Program-specific group chats',
        'Quick Q&A responses',
        'Daily updates & motivations'
      ],
      stats: { groups: '20+', members: '2K+', response: '< 1hr' },
      color: '#25D366',
      link: 'https://wa.me/254729217016'
    }
  ];

  const contentTypes = [
    {
      icon: <FaCamera />,
      title: 'Photo Stories',
      description: 'Stunning visuals capturing training moments, graduations, and transformations',
      count: '1,000+ photos'
    },
    {
      icon: <FaVideo />,
      title: 'Video Content',
      description: 'Engaging tutorials, testimonials, documentaries, and skill demonstrations',
      count: '100+ videos'
    },
    {
      icon: <FaBullhorn />,
      title: 'Program Updates',
      description: 'Latest news on enrollments, events, opportunities, and achievements',
      count: 'Daily posts'
    },
    {
      icon: <FaComments />,
      title: 'Success Stories',
      description: 'Real testimonials from alumni who transformed their lives through our programs',
      count: '200+ stories'
    },
    {
      icon: <FaNewspaper />,
      title: 'Impact Reports',
      description: 'Data-driven insights on community impact and program outcomes',
      count: 'Monthly updates'
    },
    {
      icon: <FaThumbsUp />,
      title: 'Tips & Resources',
      description: 'Career advice, skill tips, motivational content, and learning resources',
      count: 'Weekly tips'
    }
  ];

  const impactMetrics = [
    {
      icon: <FaUsers />,
      number: '15,000+',
      label: 'Total Followers',
      description: 'Engaged community members across all platforms'
    },
    {
      icon: <FaEye />,
      number: '100K+',
      label: 'Monthly Reach',
      description: 'People reached with our stories and updates'
    },
    {
      icon: <FaHeart />,
      number: '15%',
      label: 'Engagement Rate',
      description: 'Active interaction with our content'
    },
    {
      icon: <FaShareAlt />,
      number: '2,000+',
      label: 'Monthly Shares',
      description: 'Our impact stories spread organically'
    }
  ];

  return (
    <div className="socialmediahub-page">
      {/* Hero Section */}
      <section className="social-hero">
        <div className="social-hero-background">
          <div className="social-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="social-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <FaHashtag className="hero-hashtag-icon" />
            <h1>
              <span className="title-part">Social Media</span>
              <span className="title-part gradient-text"> Hub</span>
            </h1>
            <p className="lead-text">
              <em>Connect with us across <strong>all platforms</strong>—follow our journey, 
              join the conversation, and be part of the <strong>transformation story</strong></em>
            </p>
            <div className="hero-platforms-quick">
              <a href="https://www.facebook.com/people/ANAM-Community-Based-Organization-Turkana/61580072218437/" target="_blank" rel="noopener noreferrer" className="quick-platform">
                <FaFacebook />
              </a>
              <a href="https://www.tiktok.com/@anamcbokakuma" target="_blank" rel="noopener noreferrer" className="quick-platform">
                <FaTiktok />
              </a>
              <a href="https://www.youtube.com/@ANAMCBO_Turkana" target="_blank" rel="noopener noreferrer" className="quick-platform">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/company/anam-c-b-o/" target="_blank" rel="noopener noreferrer" className="quick-platform">
                <FaLinkedin />
              </a>
              <a href="https://wa.me/254729217016" target="_blank" rel="noopener noreferrer" className="quick-platform">
                <FaWhatsapp />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="intro-section section">
        <div className="container">
          <motion.div
            className="intro-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Stay Connected</h6>
            <h2>Your Gateway to <span className="highlight">Our Community</span></h2>
            <p className="lead-text">
              Follow us across <strong>multiple platforms</strong> to stay updated on programs, 
              success stories, opportunities, and the impact we're creating together. Join <strong>15,000+ community members</strong> who are part of this transformation journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="platforms-section section bg-light">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">Our Platforms</h6>
            <h2>Find Us <em>Everywhere</em> You Are</h2>
          </motion.div>

          <div className="platforms-grid">
            {socialPlatforms.map((platform, index) => (
              <motion.div
                key={index}
                className="platform-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="platform-icon-wrapper" style={{ background: platform.color }}>
                  {platform.icon}
                </div>
                <h3>{platform.name}</h3>
                <p className="platform-handle">{platform.handle}</p>
                <p className="platform-description">{platform.description}</p>

                <div className="platform-features">
                  <strong>What We Share:</strong>
                  <ul>
                    {platform.features.map((feature, idx) => (
                      <li key={idx}>
                        <FaArrowRight className="feature-arrow" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="platform-stats">
                  {Object.entries(platform.stats).map(([key, value], idx) => (
                    <div key={idx} className="stat-pill">
                      <strong>{value}</strong> {key}
                    </div>
                  ))}
                </div>

                <a 
                  href={platform.link} 
                  className="btn btn-platform"
                  style={{ background: platform.color }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {platform.name === 'WhatsApp' ? 'Message Us' : 'Follow Us'}
                  <FaArrowRight />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="content-section section">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag">What We Share</h6>
            <h2>Rich <span className="highlight">Content</span> Across All Platforms</h2>
            <p className="lead-text">
              From inspiring photos to in-depth tutorials, we create <strong>diverse content</strong> that educates, inspires, and empowers
            </p>
          </motion.div>

          <div className="content-grid">
            {contentTypes.map((content, index) => (
              <motion.div
                key={index}
                className="content-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="content-icon">{content.icon}</div>
                <h4>{content.title}</h4>
                <p>{content.description}</p>
                <span className="content-count">{content.count}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="metrics-section section bg-gradient">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h6 className="section-tag text-white">Our Digital Impact</h6>
            <h2 className="text-white">Growing <em>Together</em> Online</h2>
            <p className="lead-text text-white">
              Our social media presence is more than numbers—it's about <strong>real connections</strong>, 
              authentic engagement, and spreading <strong>stories of transformation</strong>
            </p>
          </motion.div>

          <div className="metrics-grid">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="metric-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="metric-icon">{metric.icon}</div>
                <h2 className="metric-number">{metric.number}</h2>
                <h4 className="metric-label">{metric.label}</h4>
                <p className="metric-description">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Section */}
      <section className="engagement-section section">
        <div className="container">
          <motion.div
            className="engagement-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaComments className="engagement-icon-large" />
            <h2>Be Part of the <span className="highlight">Conversation</span></h2>
            <p className="lead-text">
              Share your journey, connect with fellow learners, and inspire others with your transformation story
            </p>
            <div className="engagement-grid">
              <div className="engagement-action">
                <FaHashtag className="action-icon" />
                <h4>Use Our Hashtag</h4>
                <p>Tag your posts with <strong>#ANAMTransforms</strong></p>
              </div>
              <div className="engagement-action">
                <FaBell className="action-icon" />
                <h4>Turn On Notifications</h4>
                <p>Never miss updates, opportunities, or events</p>
              </div>
              <div className="engagement-action">
                <FaShareAlt className="action-icon" />
                <h4>Share Your Story</h4>
                <p>Inspire others by sharing your success journey</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section bg-light">
        <div className="container">
          <motion.div
            className="cta-content text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaPlay className="cta-play-icon" />
            <h2>Let's Connect and <em>Grow Together</em></h2>
            <p className="lead-text">
              Choose your preferred platform and join <strong>15,000+ community members</strong> 
              who are transforming their lives through skills and empowerment
            </p>
            <div className="social-icons-large">
              <motion.a 
                href="https://www.facebook.com/people/ANAM-Community-Based-Organization-Turkana/61580072218437/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-large"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaFacebook />
                <span>Facebook</span>
              </motion.a>
              <motion.a 
                href="https://www.tiktok.com/@anamcbokakuma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-large"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTiktok />
                <span>TikTok</span>
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@ANAMCBO_Turkana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-large"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaYoutube />
                <span>YouTube</span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/company/anam-c-b-o/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-large"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaLinkedin />
                <span>LinkedIn</span>
              </motion.a>
              <motion.a 
                href="https://wa.me/254729217016" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-large"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
                <span>WhatsApp</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaHub;
