import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import SkillsTraining from './pages/SkillsTraining/SkillsTraining';
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
            {/* Additional routes will be added as you create more pages */}
            {/* 
            <Route path="/fellowship" element={<Fellowship />} />
            <Route path="/career-coaching" element={<CareerCoaching />} />
            <Route path="/health-programs" element={<HealthPrograms />} />
            <Route path="/tailoring" element={<Tailoring />} />
            <Route path="/peace-leadership" element={<PeaceLeadership />} />
            <Route path="/sgbv-srhr" element={<SGBVSRHR />} />
            <Route path="/economic-empowerment" element={<EconomicEmpowerment />} />
            <Route path="/social-media" element={<SocialMedia />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/partnerships" element={<Partnerships />} />
            <Route path="/contact" element={<Contact />} />
            */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
