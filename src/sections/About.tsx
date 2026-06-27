import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Code2, Cloud, Brain, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'Writing readable, maintainable code in Python and JavaScript.',
  },
  {
    icon: Cloud,
    title: 'Cloud-Certified',
    desc: 'Certified on Microsoft Azure AI Fundamentals and AWS Cloud Practitioner.',
  },
  {
    icon: Brain,
    title: 'AI Enthusiast',
    desc: 'Building NLP-powered tools with semantic similarity and text preprocessing.',
  },
  {
    icon: Users,
    title: 'Collaborative',
    desc: 'Strong communication, teamwork, and adaptability in every project.',
  },
];

export default function About() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section id="about" ref={ref} className="relative py-24 md:py-32 bg-navy-800">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-divider mx-auto" />
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">
            A driven developer with a passion for continuous learning and building impactful software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="card">
              <h3 className="text-xl font-semibold text-white mb-4">My Journey</h3>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm currently completing my Bachelor of Computer Applications (BCA) at KL University, Hyderabad.
                I have strong fundamentals in Python, JavaScript, and Data Structures, and I've built an NLP-based
                AI project implementing text preprocessing and model evaluation techniques.
              </p>
              <p className="text-slate-400 leading-relaxed mb-4">
                I'm certified in Microsoft Azure AI Fundamentals (AI-900) and AWS Cloud Practitioner, with working
                knowledge of cloud architecture and security principles.
              </p>
              <p className="text-slate-400 leading-relaxed">
                I'm passionate about building scalable solutions and continuously improving through hands-on
                experimentation with AI, cloud, and modern web technologies.
              </p>
              <div className="mt-6 pt-6 border-t border-slate-700/50 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-slate-500 block mb-1">Location</span>
                  <span className="text-slate-300">Miyapur, Hyderabad, India</span>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Email</span>
                  <a href="mailto:2320520030@gmail.com" className="text-cyan-400 hover:text-cyan-300 transition-colors break-all">
                    2320520030@gmail.com
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Phone</span>
                  <a href="tel:+919381526123" className="text-slate-300 hover:text-cyan-400 transition-colors">
                    +91 9381526123
                  </a>
                </div>
                <div>
                  <span className="text-slate-500 block mb-1">Status</span>
                  <span className="text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 bg-emerald-400 rounded-full inline-block animate-pulse" />
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {highlights.map((item, i) => (
              <div key={i} className="card group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4 group-hover:bg-cyan-500/20 transition-colors">
                  <item.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
