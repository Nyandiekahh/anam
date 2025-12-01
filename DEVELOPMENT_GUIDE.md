# ANAM CBO Website - Development Guide

## 🎉 What Has Been Built

### ✅ Completed Components & Pages

1. **Global Styles System** (`src/styles/GlobalStyles.css`)
   - Complete CSS variable system
   - Typography scales (Inter, Poppins, Playfair Display)
   - Color palette with gradients
   - Reusable utility classes
   - Animation keyframes
   - Responsive breakpoints
   - Button styles, card styles, grid systems

2. **Header Component** (`src/components/Header/`)
   - Fixed navigation with scroll effects
   - Desktop dropdown menus
   - Mobile hamburger menu with smooth animations
   - Active route highlighting
   - Fully responsive

3. **Footer Component** (`src/components/Footer/`)
   - Newsletter subscription section
   - Quick links & programs
   - Contact information
   - Social media links with hover effects
   - Copyright and legal links
   - Animated heart icon

4. **Home Page** (`src/pages/Home/`)
   - Animated hero section with gradient background
   - About ANAM preview with value propositions
   - 8 program cards with icons and descriptions
   - Impact statistics section
   - Success story testimonial
   - 3 CTA cards (Join, Become Fellow, Partner)
   - Fully animated with Framer Motion

5. **About Page** (`src/pages/About/`)
   - Hero section
   - Who We Are with inline statistics
   - Vision, Mission & 6 Core Values
   - 5-step approach timeline
   - Leadership team showcase (4 members)
   - Geographic reach (3 locations)
   - Registration & Governance section

6. **Skills Training Page** (`src/pages/SkillsTraining/`)
   - Tabbed interface for 5 categories
   - 28 different course cards
   - Benefits grid (6 benefits)
   - Learning modes section (3 modes)
   - Enrollment CTA

7. **Contact Page** (`src/pages/Contact/`)
   - Hero section
   - 3 contact info cards
   - Working contact form with validation
   - Map placeholder
   - Office hours
   - Social media links
   - Support/donation CTA

## 📋 Pages Still To Create

### Priority 1: Core Program Pages

#### 1. Fellowship Program Page
**File**: `src/pages/Fellowship/Fellowship.js` & `Fellowship.css`

**Sections to Include**:
```jsx
- Hero Section (similar to existing pages)
- About the Fellowship
- How It Works (step-by-step process)
- Who Can Join (eligibility criteria)
- 4 Fellowship Tracks:
  1. Digital & Tech Mentors
  2. Entrepreneurship & Business Mentors  
  3. Community Leadership Mentors
  4. Peace & Social Impact Mentors
- Benefits & Networking
- Success Stories from Fellows
- Application Process
- Current Fellows Showcase
- Apply Now CTA
```

**Design Pattern**: Follow SkillsTraining.js structure with cards for each track

#### 2. Career Coaching Page
**File**: `src/pages/CareerCoaching/CareerCoaching.js` & `CareerCoaching.css`

**Sections**:
```jsx
- Hero with program overview
- 9 Session Breakdown (accordion or numbered list):
  Session 1: Self-Assessment & Goal Setting
  Session 2: Resume Building
  Session 3: LinkedIn Optimization
  Session 4: Interview Preparation
  Session 5: Personal Branding
  Session 6: Networking Strategies
  Session 7: Salary Negotiation
  Session 8: Career Transition Planning
  Session 9: Long-term Career Development
- Career Tools & Resources
- Mentorship Support
- Expected Outcomes
- Success Metrics
- Testimonials
- Enroll CTA
```

#### 3. Health Management Programs
**File**: `src/pages/HealthPrograms/HealthPrograms.js` & `.css`

**Sections**:
```jsx
- Hero
- Program Introduction
- Two Main Programs:
  1. Reusable Sanitary Pad Production
     - Training curriculum
     - Equipment & materials
     - Income generation potential
  2. Detergent & Hygiene Products
     - Product types
     - Training process
     - Business opportunities
- Community Health Impact
- Success Stories
- How to Participate
- Gallery of products
```

#### 4. Commercial Tailoring
**File**: `src/pages/Tailoring/Tailoring.js` & `.css`

**Sections**:
```jsx
- Hero
- Program Overview
- Curriculum:
  - Basic Sewing Skills
  - Fashion Design Principles
  - Machine Operation & Maintenance
  - Pattern Making
  - Business Skills
- Equipment & Facilities
- Success Stories from Graduates
- Job Placement Support
- Enroll Now CTA
```

#### 5. Peace & Leadership
**File**: `src/pages/PeaceLeadership/PeaceLeadership.js` & `.css`

**Sections**:
```jsx
- Hero
- Peace Ambassador Program
- Leadership Fellowship
- Civic Engagement Sessions
- Community Dialogue & Mediation
- Conflict Resolution Training
- Impact Stories
- How to Join
- Upcoming Events
```

#### 6. SGBV & SRHR
**File**: `src/pages/SGBVSRHR/SGBVSRHR.js` & `.css`

**Sections**:
```jsx
- Hero (sensitive, empowering imagery)
- SGBV Prevention Training
- SRHR Awareness Programs
- Safety & Dignity Dialogues
- Support Resources
- Community Impact
- Confidential Support Hotline
- Get Involved/Support CTA
```

#### 7. Economic Empowerment
**File**: `src/pages/EconomicEmpowerment/EconomicEmpowerment.js` & `.css`

**Sections**:
```jsx
- Hero
- Table Banking Overview
- Savings Groups Model
- Microenterprise Mentorship
- Financial Literacy Training
- Success Stories
- Economic Impact Data
- Join a Group CTA
```

### Priority 2: Community & Engagement Pages

#### 8. Social Media Hub
**File**: `src/pages/SocialMedia/SocialMedia.js` & `.css`

**Sections**:
```jsx
- Hero
- Platform Showcase (6 platforms with icons and descriptions):
  - Facebook
  - Instagram
  - Twitter/X
  - LinkedIn
  - YouTube
  - WhatsApp/Telegram
- Why Our Digital Strategy Works
- Engagement Metrics/Stats
- Featured Posts (grid)
- Follow Us CTA with all social links
- Community Participation Examples
```

**Special Features**:
- Large, interactive social media icons
- Embed actual social media feeds (optional)
- Social share functionality

#### 9. Gallery Page
**File**: `src/pages/Gallery/Gallery.js` & `.css`

**Sections**:
```jsx
- Hero
- Filter Buttons (All, Skills Training, Fellowship, Health, Tailoring, Peace, Events)
- Masonry Grid Layout
- Lightbox for full-size viewing
- Image Categories
- Caption overlays on hover
```

**Required Package**:
```bash
npm install react-image-lightbox
# OR
npm install yet-another-react-lightbox
```

**Code Pattern**:
```jsx
const [filter, setFilter] = useState('all');
const [lightboxOpen, setLightboxOpen] = useState(false);
const [photoIndex, setPhotoIndex] = useState(0);

const images = [
  { id: 1, src: '/images/...', category: 'skills', caption: '...' },
  // ... more images
];

const filteredImages = filter === 'all' 
  ? images 
  : images.filter(img => img.category === filter);
```

#### 10. Partnerships Page
**File**: `src/pages/Partnerships/Partnerships.js` & `.css`

**Sections**:
```jsx
- Hero
- Current Partners Section:
  - Partner logos grid
  - Partner descriptions
  - Partnership type (funding, technical, etc.)
- Partnership Opportunities
- Collaboration Models
- Benefits of Partnering:
  - For Corporates
  - For NGOs
  - For Government
  - For Individuals
- Donor Relations
- Impact Report Download
- Partnership Application Form
- Contact CTA
```

## 🎨 Code Templates for New Pages

### Basic Page Template

```jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaIcon1, 
  FaIcon2 
  // ... import relevant icons
} from 'react-icons/fa';
import './PageName.css';

const PageName = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="page-name-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="page-hero-background">
          <div className="page-hero-overlay"></div>
        </div>
        <div className="container">
          <motion.div
            className="page-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1>
              Page <span className="gradient-text">Title</span>
            </h1>
            <p className="lead-text">
              <em>Description with <strong>emphasis</strong></em>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="content-section section">
        <div className="container">
          {/* Add content here */}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section section bg-primary">
        <div className="container">
          <motion.div
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Call to Action Title</h2>
            <p>Description</p>
            <Link to="/contact" className="btn btn-white btn-lg">
              Take Action
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PageName;
```

### CSS Template

```css
/* Hero Section */
.page-hero {
  position: relative;
  padding: calc(var(--spacing-2xl) + 80px) 0 var(--spacing-xl);
  min-height: 60vh;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.page-hero-background {
  position: absolute;
  inset: 0;
  background: var(--gradient-primary); /* Change gradient */
  z-index: 0;
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: rgba(26, 26, 46, 0.3);
}

.page-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  max-width: 900px;
  margin: 0 auto;
}

.page-hero-content h1 {
  font-size: clamp(2.5rem, 6vw, 4rem);
  color: var(--pure-white);
  margin-bottom: var(--spacing-md);
}

/* Add more styles as needed */

/* Responsive */
@media (max-width: 768px) {
  .page-hero {
    min-height: 50vh;
  }
}
```

## 📝 Step-by-Step Guide to Create a New Page

### Step 1: Create Component Files
```bash
mkdir src/pages/PageName
touch src/pages/PageName/PageName.js
touch src/pages/PageName/PageName.css
```

### Step 2: Copy Template
- Copy the basic page template above
- Rename all instances of "PageName" to your actual page name
- Update imports for relevant icons

### Step 3: Add Sections
Based on the requirements, add sections:
- Hero (always first)
- Content sections (grids, cards, timelines, etc.)
- CTA section (usually last)

### Step 4: Style the Page
- Copy CSS template
- Customize colors using CSS variables
- Add section-specific styles
- Ensure mobile responsiveness

### Step 5: Add Route in App.js
```jsx
import PageName from './pages/PageName/PageName';

// In Routes:
<Route path="/page-route" element={<PageName />} />
```

### Step 6: Update Navigation
The Header component already has the route - just make sure the path matches!

## 🎯 Design Guidelines

### Typography Patterns
```jsx
{/* Main Heading */}
<h1>Main <span className="gradient-text">Highlighted</span></h1>

{/* Section Tag */}
<h6 className="section-tag">Section Category</h6>

{/* Section Title */}
<h2>Section Title with <span className="highlight">Highlight</span></h2>

{/* Lead Text */}
<p className="lead-text">
  <em>Emphasized text with <strong>bold parts</strong></em>
</p>
```

### Card Patterns
```jsx
<motion.div
  className="card"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  whileHover={{ y: -5 }}
>
  <div className="card-icon">
    <FaIcon />
  </div>
  <h3>Card Title</h3>
  <p>Card description text</p>
  <Link to="/path" className="btn btn-outline btn-sm">
    Learn More
  </Link>
</motion.div>
```

### Grid Layouts
```jsx
{/* 3 Column Grid */}
<div className="grid-3">
  {items.map((item, index) => (
    <motion.div key={index} {...fadeInUp}>
      {/* Card content */}
    </motion.div>
  ))}
</div>

{/* Or in CSS */}
.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
}
```

## 🎨 Color Usage Guide

```css
/* Primary Actions */
background: var(--gradient-primary); /* Green gradient */

/* Secondary Actions */
background: var(--gradient-secondary); /* Blue-Purple gradient */

/* Warm CTAs */
background: var(--gradient-warm); /* Orange-Gold gradient */

/* Individual Colors */
color: var(--primary-green);
color: var(--primary-blue);
color: var(--accent-gold);
color: var(--accent-teal);
```

## 📱 Mobile-First Approach

Always style for mobile first, then add media queries for larger screens:

```css
/* Mobile (default) */
.element {
  padding: var(--spacing-md);
  font-size: 1rem;
}

/* Tablet */
@media (min-width: 768px) {
  .element {
    padding: var(--spacing-lg);
    font-size: 1.125rem;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .element {
    padding: var(--spacing-xl);
    font-size: 1.25rem;
  }
}
```

## 🚀 Quick Start Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Install additional packages
npm install package-name
```

## 📦 Recommended Additional Packages

```bash
# For Gallery/Lightbox
npm install yet-another-react-lightbox

# For Form Validation
npm install react-hook-form

# For Notifications
npm install react-hot-toast

# For Image Lazy Loading
npm install react-lazy-load-image-component

# For Smooth Scrolling
npm install react-scroll
```

## ✅ Final Checklist Before Launch

- [ ] All pages created and styled
- [ ] All images optimized and added
- [ ] Contact form connected to backend/email service
- [ ] Social media links updated with real URLs
- [ ] Contact information (phone, email, address) updated
- [ ] Meta tags and SEO added
- [ ] Favicon and logo added
- [ ] All links tested
- [ ] Mobile responsiveness verified on real devices
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Accessibility audit (ARIA labels, alt text, keyboard navigation)
- [ ] Browser compatibility testing
- [ ] Analytics integration (Google Analytics, etc.)
- [ ] 404 page created
- [ ] Privacy policy and Terms of Service pages

## 🎉 You're All Set!

The foundation is solid. Follow the templates and patterns established in the existing pages. Each new page should take 1-2 hours to complete if you follow the templates closely.

**Key Success Factors**:
1. Consistency - Use established design patterns
2. Content - Write compelling, benefit-focused copy
3. Images - Use high-quality, relevant images
4. Testing - Test on real devices frequently
5. Iteration - Refine based on user feedback

Good luck building the rest of the ANAM CBO website! 🚀
