import { useEffect, useState } from 'react';
import { Github, Linkedin, Download, ChevronDown, Mail, Phone } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Building scalable solutions with Python & JavaScript.';

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 3000);
      }
    }, 55);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-navy-900 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-pattern bg-grid" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <div
          className="animate-fade-in animation-fill-both mb-6"
          style={{ animationDelay: '0.1s' }}
        >
          <span className="tag text-sm px-4 py-1.5">
            BCA Student @ KL University, Hyderabad
          </span>
        </div>

        <h1
          className="animate-fade-up animation-fill-both text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          style={{ animationDelay: '0.25s' }}
        >
          Gundu{' '}
          <span className="gradient-text">Bhuvan</span>
        </h1>

        <div
          className="animate-fade-up animation-fill-both mb-4"
          style={{ animationDelay: '0.4s' }}
        >
          <p className="text-lg md:text-xl text-slate-400 font-mono min-h-[2rem]">
            {displayText}
            {showCursor && <span className="text-cyan-400 animate-pulse">|</span>}
          </p>
        </div>

        <p
          className="animate-fade-up animation-fill-both text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ animationDelay: '0.55s' }}
        >
          Certified in Microsoft Azure AI Fundamentals (AI-900) and AWS Cloud Practitioner.
          Passionate about AI, NLP, and cloud architecture — continuously improving through hands-on experimentation.
        </p>

        <div
          className="animate-fade-up animation-fill-both flex flex-wrap items-center justify-center gap-4 mb-12"
          style={{ animationDelay: '0.7s' }}
        >
          <a href="./Gundu_Bhuvan_Resume.pdf" download className="btn-primary">
            <Download size={18} />
            Download Resume
          </a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="btn-outline">
            Get In Touch
          </a>
        </div>

        <div
          className="animate-fade-up animation-fill-both flex flex-wrap items-center justify-center gap-6"
          style={{ animationDelay: '0.85s' }}
        >
          <a
            href="https://github.com/GunduBhuvan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/bhuvan-gundu-65bbb1376/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:2320520030@gmail.com"
            className="text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+919381526123"
            className="text-slate-400 hover:text-cyan-400 transition-all duration-200 hover:scale-110"
            aria-label="Phone"
          >
            <Phone size={24} />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => handleScroll(e, '#about')}
          className="text-slate-600 hover:text-cyan-400 transition-colors"
        >
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
