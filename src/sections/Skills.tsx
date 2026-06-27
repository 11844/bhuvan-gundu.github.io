import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Lightbulb, Users2 } from 'lucide-react';

const technicalSkills = [
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 82 },
    ],
  },
  {
    category: 'Web Technologies',
    skills: [
      { name: 'HTML & CSS', level: 80 },
      { name: 'React', level: 75 },
      { name: 'Node.js', level: 65 },
    ],
  },
  {
    category: 'Core Concepts',
    skills: [
      { name: 'Data Structures', level: 80 },
      { name: 'Backend Development', level: 70 },
      { name: 'Semantic Similarity / NLP', level: 72 },
    ],
  },
  {
    category: 'Cloud Platforms',
    skills: [
      { name: 'Microsoft Azure', level: 75 },
      { name: 'AWS', level: 72 },
    ],
  },
];

const softSkills = [
  'Analytical Thinking',
  'Problem Solving',
  'Collaboration',
  'Communication',
  'Adaptability',
];

export default function Skills() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section id="skills" ref={ref} className="relative py-24 md:py-32 bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-divider mx-auto" />
          <h2 className="section-heading">Skills & Expertise</h2>
          <p className="section-subheading">
            Technologies and concepts I work with to build modern applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {technicalSkills.map((cat, ci) => (
            <div
              key={ci}
              className={`card transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${ci * 120}ms` }}
            >
              <h3 className="text-base font-semibold text-cyan-400 font-mono mb-5">
                {cat.category}
              </h3>
              <div className="space-y-4">
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-500 font-mono text-xs">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-700/70 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-sky-400 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(ci * 3 + si) * 100 + 200}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`card transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center">
              <Users2 className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-base font-semibold text-white">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, i) => (
              <span
                key={i}
                className="tag text-sm px-4 py-2 hover:bg-cyan-500/20 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
