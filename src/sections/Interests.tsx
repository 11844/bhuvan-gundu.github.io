import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Music, Zap } from 'lucide-react';

const interests = [
  {
    icon: Music,
    title: 'Guitar',
    category: 'Music',
    description:
      'I enjoy playing guitar in my free time. Music is a great creative outlet that helps me relax and express myself outside of coding.',
    color: 'from-amber-500/20 to-orange-500/10',
    iconColor: 'text-amber-400',
    bgColor: 'bg-amber-500/10 group-hover:bg-amber-500/20',
  },
  {
    icon: Zap,
    title: 'Cricket',
    category: 'Sports',
    description:
      'I play cricket with friends occasionally. Team sports teach collaboration, strategy, and staying composed under pressure — skills that translate into development work too.',
    color: 'from-emerald-500/20 to-teal-500/10',
    iconColor: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10 group-hover:bg-emerald-500/20',
  },
];

export default function Interests() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section id="interests" ref={ref} className="relative py-24 md:py-32 bg-navy-800">
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-divider mx-auto" />
          <h2 className="section-heading">Interests & Hobbies</h2>
          <p className="section-subheading">
            What I enjoy outside of building software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {interests.map((item, i) => (
            <div
              key={i}
              className={`card group transition-all duration-700 hover:-translate-y-1 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${item.bgColor} flex items-center justify-center mb-5 transition-colors`}>
                <item.icon className={`w-7 h-7 ${item.iconColor}`} />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <span className="text-xs text-slate-500 font-mono">/ {item.category}</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
