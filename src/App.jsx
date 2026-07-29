import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Navbar from './components/Navbar';
import ProjectCard from './components/ProjectCard';
import {useEffect} from 'react';
import {useInView} from 'react-intersection-observer';

function App() {
  const [ref, inView] = useInView({threshold: 0.1});

  useEffect(() => {

  }, [inView]);

  return (
    <div>
     <Navbar />
        <main> 
          <section id="hero"><Hero /></section>
          <section id="about"><About /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>
        <Footer />
    </div>
  )
}

export default App
