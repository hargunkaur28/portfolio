import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SplashCursor from './components/SplashCursor';
import './index.css';

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

function App() {
  return (
    <motion.div variants={pageVariants} initial="hidden" animate="visible">
      <SplashCursor />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <TechnicalSkills />
      <Certifications />
      <Activities />
      <Projects />
      <Contact />
      <Footer />
    </motion.div>
  );
}

export default App;

