import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaGraduationCap,
  FaUsers,
  FaBriefcase,
  FaHandsHelping,
  FaHeart,
  FaLeaf,
  FaPeace,
  FaPhone
} from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = [
    { path: '/', label: 'Home', icon: null },
    { path: '/about', label: 'About Us', icon: null },
    {
      label: 'Programs',
      icon: <FaChevronDown />,
      submenu: [
        { path: '/skills-training', label: 'Skills Training & Certification', icon: <FaGraduationCap /> },
        { path: '/fellowship', label: 'Fellowship Program', icon: <FaUsers /> },
        { path: '/career-coaching', label: 'Career Coaching', icon: <FaBriefcase /> },
        { path: '/health-programs', label: 'Health Management', icon: <FaHeart /> },
        { path: '/tailoring', label: 'Commercial Tailoring', icon: <FaLeaf /> },
        { path: '/peace-leadership', label: 'Peace & Leadership', icon: <FaPeace /> },
        { path: '/sgbv-srhr', label: 'SGBV & SRHR', icon: <FaHandsHelping /> },
        { path: '/economic-empowerment', label: 'Economic Empowerment', icon: <FaBriefcase /> }
      ]
    },
    { path: '/social-media', label: 'Social Media Hub', icon: null },
    { path: '/gallery', label: 'Gallery', icon: null },
    { path: '/partnerships', label: 'Partnerships', icon: null },
    { path: '/contact', label: 'Contact', icon: <FaPhone /> }
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container">
        <Link to="/" className="logo">
          <motion.div
            className="logo-content"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-text">
              <span className="logo-anam">ANAM</span>
              <span className="logo-cbo">CBO</span>
            </span>
            <span className="logo-tagline">Empowering Communities</span>
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {menuItems.map((item, index) => (
              <li 
                key={index} 
                className="nav-item"
                onMouseEnter={() => item.submenu && setActiveDropdown(item.label)}
                onMouseLeave={() => item.submenu && setActiveDropdown(null)}
              >
                {item.submenu ? (
                  <>
                    <button className="nav-link dropdown-toggle">
                      {item.label}
                      <span className="dropdown-icon">{item.icon}</span>
                    </button>
                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          className="dropdown-menu"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.submenu.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              to={subItem.path}
                              className="dropdown-item"
                            >
                              {subItem.icon && <span className="item-icon">{subItem.icon}</span>}
                              {subItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                  >
                    {item.label}
                    {item.icon && <span className="nav-icon">{item.icon}</span>}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="header-cta">
          <Link to="/contact" className="btn btn-primary btn-sm">
            Get Involved
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="mobile-nav-list">
              {menuItems.map((item, index) => (
                <li key={index} className="mobile-nav-item">
                  {item.submenu ? (
                    <>
                      <button
                        className="mobile-nav-link dropdown-toggle"
                        onClick={() => toggleDropdown(item.label)}
                      >
                        {item.label}
                        <span className={`dropdown-icon ${activeDropdown === item.label ? 'open' : ''}`}>
                          {item.icon}
                        </span>
                      </button>
                      <AnimatePresence>
                        {activeDropdown === item.label && (
                          <motion.ul
                            className="mobile-dropdown"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.submenu.map((subItem, subIndex) => (
                              <li key={subIndex}>
                                <Link to={subItem.path} className="mobile-dropdown-item">
                                  {subItem.icon && <span className="item-icon">{subItem.icon}</span>}
                                  {subItem.label}
                                </Link>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`mobile-nav-link ${location.pathname === item.path ? 'active' : ''}`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
