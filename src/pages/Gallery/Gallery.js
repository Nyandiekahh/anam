import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaImages, FaVideo, FaHandHoldingHeart, FaPeace, FaSeedling, FaToilet, FaTimes } from 'react-icons/fa';
import SEO from '../../components/SEO/SEO';
import './Gallery.css';

const Gallery = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'GBV Awareness at Natiir Village',
      image: '/GBV awareness at Natiir village 2.jpeg',
      category: 'community',
      description: 'Gender-Based Violence awareness campaign at Natiir village, empowering communities through education.'
    },
    {
      id: 2,
      title: 'Peace Building with LWF',
      image: '/In partnership with Lwf for Peace building engagement.jpeg',
      category: 'peace',
      description: 'Partnership with Lutheran World Federation for peace building engagement in the community.'
    },
    {
      id: 3,
      title: 'Peace Talk Session 1',
      image: '/Peace Talk 1.jpeg',
      category: 'peace',
      description: 'Community peace dialogue session promoting conflict resolution and harmony.'
    },
    {
      id: 4,
      title: 'Peace Talk Session 2',
      image: '/Peace TALK 2.jpeg',
      category: 'peace',
      description: 'Engaging community leaders in peace building conversations.'
    },
    {
      id: 5,
      title: 'Peace Talk Session 3',
      image: '/Peace Talk 3.jpeg',
      category: 'peace',
      description: 'Community members participating in peace dialogue initiatives.'
    },
    {
      id: 6,
      title: 'Peace Talk Video',
      video: '/Peace Talk video.mp4',
      category: 'peace',
      description: 'Documentary footage of our peace building initiatives in action.'
    },
    {
      id: 7,
      title: 'World Toilet Day Showcase',
      image: '/Showcasing their products  at Kalobeyeyi during Word\'s toilet day.jpeg',
      category: 'wash',
      description: 'Showcasing sanitation products at Kalobeyeyi during World Toilet Day celebration.'
    },
    {
      id: 8,
      title: 'World Toilet Day Exhibition',
      image: '/Showcasing their products  at Kalobeyeyi during Word\'s toilet day 2.jpeg',
      category: 'wash',
      description: 'Community members demonstrating WASH products during World Toilet Day.'
    },
    {
      id: 9,
      title: 'Poultry Project Discussion',
      image: '/Poultry project talk.jpeg',
      category: 'empowerment',
      description: 'Training session on sustainable poultry farming for economic empowerment.'
    },
    {
      id: 10,
      title: 'WASH Products 1',
      image: '/Products produced at Anam CBo to aid in WASH programme 1.jpeg',
      category: 'wash',
      description: 'Locally produced sanitation products supporting our WASH program.'
    },
    {
      id: 11,
      title: 'WASH Products 2',
      image: '/Products produced at Anam CBo to aid in WASH programme 2.jpeg',
      category: 'wash',
      description: 'Community-made hygiene products promoting health and sanitation.'
    },
    {
      id: 12,
      title: 'WASH Products 3',
      image: '/Products produced at Anam CBo to aid in WASH programme 3.jpeg',
      category: 'wash',
      description: 'Innovative sanitation solutions produced at ANAM CBO.'
    },
    {
      id: 13,
      title: 'WASH Products 4',
      image: '/Products produced at Anam CBo to aid in WASH programme 4.jpeg',
      category: 'wash',
      description: 'Sustainable WASH products created by community members.'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Media', icon: <FaImages /> },
    { id: 'peace', name: 'Peace Building', icon: <FaPeace /> },
    { id: 'wash', name: 'WASH Program', icon: <FaToilet /> },
    { id: 'community', name: 'Community', icon: <FaHandHoldingHeart /> },
    { id: 'empowerment', name: 'Empowerment', icon: <FaSeedling /> }
  ];

  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const openMedia = (item) => {
    setSelectedMedia(item);
    document.body.style.overflow = 'hidden';
  };

  const closeMedia = () => {
    setSelectedMedia(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="gallery-page">
      <SEO 
        title="Gallery - Photos & Videos from Our Community Programs"
        description="Explore ANAM CBO's impact through photos and videos: GBV awareness campaigns, peace building initiatives, WASH programs, World Toilet Day events, and community empowerment projects in Turkana West, Kenya."
        keywords="ANAM CBO gallery, community programs photos, Turkana West images, peace building Kenya, GBV awareness, WASH program Kenya, World Toilet Day, community empowerment photos, Kenya NGO gallery"
        canonicalUrl="/gallery"
        ogImage="/Peace Talk 1.jpeg"
      />
      
      {/* Hero Section */}
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
              <span className="title-part">Our</span>
              <span className="title-part"> Gallery</span>
            </h1>
            <p className="lead-text">
              <em>Capturing <strong>moments of transformation</strong>, celebrating impact, and sharing stories of community empowerment</em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="category-filter section">
        <div className="container">
          <motion.div
            className="filter-tabs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                className={`filter-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-grid-section section">
        <div className="container">
          <div className="gallery-grid">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => openMedia(item)}
              >
                {item.video ? (
                  <div className="gallery-video-thumb">
                    <video src={item.video} />
                    <div className="video-overlay">
                      <FaVideo />
                    </div>
                  </div>
                ) : (
                  <img src={item.image} alt={item.title} className="gallery-image" />
                )}
                <div className="gallery-item-overlay">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* More Photos Section */}
      <section className="more-photos-section section">
        <div className="container">
          <motion.div
            className="more-photos-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <FaImages className="drive-icon" />
            <h2>View More Photos</h2>
            <p className="lead-text">
              <em>Explore our complete photo collection with <strong>hundreds more images</strong> from programs, events, and community activities</em>
            </p>
            <p className="drive-description">
              Our full photo gallery is hosted on Google Drive, featuring extensive documentation of our training sessions, graduation ceremonies, community outreach, success stories, and special events.
            </p>
            <a 
              href="https://drive.google.com/drive/folders/1OyA5_EXcy8YZ2gbfvdJ-_fsu8ZzMHwzx?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <FaImages />
              Open Google Drive Gallery
            </a>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedMedia && (
        <motion.div
          className="lightbox-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeMedia}
        >
          <button className="close-button" onClick={closeMedia}>
            <FaTimes />
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.video ? (
              <video controls autoPlay className="lightbox-video">
                <source src={selectedMedia.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <img src={selectedMedia.image} alt={selectedMedia.title} className="lightbox-image" />
            )}
            <div className="lightbox-info">
              <h3>{selectedMedia.title}</h3>
              <p>{selectedMedia.description}</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
