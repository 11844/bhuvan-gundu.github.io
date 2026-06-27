import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Github, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Eliminating Manual Evaluation With Automation',
    description:
      'An AI-powered online examination system that automates student assessment. Evaluates objective questions automatically and uses NLP-based evaluation for subjective answers. Manages exams, student responses, and results through a secure database — generating instant scores, feedback, and performance reports.',
    tech: ['Python', 'NLP', 'Semantic Similarity', 'Backend Development', 'Database'],
    github: 'https://github.com/GunduBhuvan',
    highlights: [
      'Automated objective & subjective question evaluation',
      'NLP-based semantic similarity scoring',
      'Secure exam & result database management',
      'Instant performance reports and feedback',
    ],
  },
];

export default function Projects() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section id="projects" ref={ref} className="relative py-24 md:py-32 bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-divider mx-auto" />
          <h2 className="section-heading">Projects</h2>
          <p className="section-subheading">
            Real-world applications that showcase technical skills and problem-solving.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`card transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-400 leading-relaxed mb-6">{project.description}</p>

              <ul className="space-y-2 mb-6">
                {project.highlights.map((h, hi) => (
                  <li key={hi} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0 mt-1.5" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t, ti) => (
                  <span key={ti} className="tag">{t}</span>
                ))}
              </div>

              <div className="pt-4 border-t border-slate-700/50">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
