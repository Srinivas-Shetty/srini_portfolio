import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Header from './components/Header';
import CustomCursor from './utils/CustomCursor';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import About from './components/About';
import Contact from './components/Contact';
import BackToTop from './utils/BackToTop'; // Add this import
import Footer from './components/Footer';
import Certifications from './components/Certifications';

function App() {
  const [darkMode] = useState(true); // Force dark mode

  return (
    <div className={darkMode ? "dark" : ""}>
      <CustomCursor />
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certifications />
      <About />
      <Contact />
      <Footer />
      <BackToTop /> 
    </div>
  );
}

export default App;