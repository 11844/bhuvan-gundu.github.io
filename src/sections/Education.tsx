import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const education = [
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'KL University',
    location: 'Hyderabad, India',
    period: 'September 2023 – Present',
    description:
      'Currently in final year, building strong fundamentals in programming, data structures, and software development. Completed an NLP-based AI project and earned two cloud certifications during the program.',
    highlights: ['Python & JavaScript', 'Data Structures', 'Backend Development', 'AI & NLP', 'Cloud Computing'],
  },
  {
    degree: 'Class X + 2 (Higher Secondary)',
    institution: 'Ganges Valley School',
    location: 'Nizampet, Bachupally',
    period: 'March 2019 – March 2023',
    description:
      'Completed higher secondary education with a strong foundation in science and mathematics, which sparked an interest in computing and problem-solving.',
    highlights: ['Mathematics', 'Science', 'Computer Fundamentals'],
  },
];

export default function Education() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section id="education" ref={ref} className="relative py-24 md:py-32 bg-navy-800">
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-divider mx-auto" />
          <h2 className="section-heading">Education</h2>
          <p className="section-subheading">
            Academic background that built the foundation for my technical journey.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-7 top-0 bottom-0 w-px bg-slate-700/50 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, i) => (
              <div
                key={i}
                className={`relative flex gap-6 transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <div className="hidden md:flex w-14 h-14 rounded-xl bg-cyan-500/10 border border-cyan-500/20 items-center justify-center flex-shrink-0 relative z-10">
                  <GraduationCap className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="flex-1 card">
                  <h3 className="text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                  <p className="text-base font-medium text-cyan-400 mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-slate-600" />
                      {edu.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={13} className="text-slate-600" />
                      {edu.location}
                    </span>
                  </div>
                  <p className="text-slate-400 leading-relaxed mb-4 text-sm">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((h, hi) => (
                      <span key={hi} className="tag text-xs">{h}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
