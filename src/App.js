import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SkillsTraining from './pages/SkillsTraining/SkillsTraining';
import Fellowship from './pages/Fellowship/Fellowship';
import CareerCoaching from './pages/CareerCoaching/CareerCoaching';
import SocialMediaHub from './pages/SocialMediaHub/SocialMediaHub';
import Health from './pages/Health/Health';
import Tailoring from './pages/Tailoring/Tailoring';
import PeaceLeadership from './pages/PeaceLeadership/PeaceLeadership';
import SGBV from './pages/SGBV/SGBV';
import EconomicEmpowerment from './pages/EconomicEmpowerment/EconomicEmpowerment';
import Gallery from './pages/Gallery/Gallery';
import Partnerships from './pages/Partnerships/Partnerships';
import Contact from './pages/Contact/Contact';
import './styles/GlobalStyles.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills-training" element={<SkillsTraining />} />
              <Route path="/fellowship" element={<Fellowship />} />
              <Route path="/career-coaching" element={<CareerCoaching />} />
              <Route path="/social-media" element={<SocialMediaHub />} />
              <Route path="/health-programs" element={<Health />} />
              <Route path="/tailoring" element={<Tailoring />} />
              <Route path="/peace-leadership" element={<PeaceLeadership />} />
              <Route path="/sgbv-srhr" element={<SGBV />} />
              <Route path="/economic-empowerment" element={<EconomicEmpowerment />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/partnerships" element={<Partnerships />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
  );
}

export default App;
