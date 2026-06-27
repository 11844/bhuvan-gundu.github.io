import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Heart, Calendar, MapPin } from 'lucide-react';

const volunteerExperiences = [
  {
    role: 'Community Volunteer',
    organization: 'Zilla Parishad School',
    location: 'Near KL University, Hyderabad',
    period: 'December 2023',
    description:
      'Participated in a community outreach initiative at a government school near KL University. Distributed essential supplies including books, bags, and snacks to children. Spent additional time entertaining and engaging with the students, contributing positively to their day.',
    impact: ['Distributed educational supplies and snacks', 'Engaged and entertained students', 'Community outreach near KL University'],
  },
];

export default function Volunteer() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section id="volunteer" ref={ref} className="relative py-24 md:py-32 bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-divider mx-auto" />
          <h2 className="section-heading">Volunteer Experience</h2>
          <p className="section-subheading">
            Giving back to the community through meaningful engagement and outreach.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {volunteerExperiences.map((exp, i) => (
            <div
              key={i}
              className={`card transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                  <p className="text-base font-medium text-cyan-400">{exp.organization}</p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-slate-600" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-slate-600" />
                  {exp.location}
                </span>
              </div>

              <p className="text-slate-400 leading-relaxed mb-5">{exp.description}</p>

              <ul className="space-y-2">
                {exp.impact.map((item, ii) => (
                  <li key={ii} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-400 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
