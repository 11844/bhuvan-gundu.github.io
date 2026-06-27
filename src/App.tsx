import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Certifications from './sections/Certifications';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Volunteer from './sections/Volunteer';
import Interests from './sections/Interests';
import Contact from './sections/Contact';

export default function App() {
  return (
    <div className="bg-navy-900 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Certifications />
        <Projects />
        <Education />
        <Volunteer />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
