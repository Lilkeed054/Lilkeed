import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import SideNavigation from './components/SideNavigation';
import FloatingElements from './components/FloatingElements';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App" style={{ position: 'relative', overflowX: 'hidden' }}>
      <SideNavigation />
      <FloatingElements />
      <Hero />
      <Projects />
      <Skills />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;