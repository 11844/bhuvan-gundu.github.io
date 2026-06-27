import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-900 border-t border-slate-800/50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <span className="text-xl font-bold font-mono text-cyan-400">{'<GB/>'}</span>
            <p className="text-sm text-slate-500 mt-1">
              Built with React, Vite & Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/GunduBhuvan"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-cyan-500/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/bhuvan-gundu-65bbb1376/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-cyan-500/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:2320520030@gmail.com"
              className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-cyan-500/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-lg bg-slate-800/50 hover:bg-cyan-500/10 flex items-center justify-center text-slate-400 hover:text-cyan-400 transition-all duration-200"
            aria-label="Back to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-800/50 text-center">
          <p className="text-sm text-slate-600">
            &copy; {new Date().getFullYear()} Gundu Bhuvan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
