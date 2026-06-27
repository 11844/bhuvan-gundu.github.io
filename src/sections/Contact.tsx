import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: '2320520030@gmail.com',
    href: 'mailto:2320520030@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9381526123',
    href: 'tel:+919381526123',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Miyapur, Hyderabad, India',
    href: null,
  },
];

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/GunduBhuvan',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/bhuvan-gundu-65bbb1376/',
  },
];

export default function Contact() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${formState.name}`);
    const body = encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`);
    window.location.href = `mailto:2320520030@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" ref={ref} className="relative py-24 md:py-32 bg-navy-900">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-divider mx-auto" />
          <h2 className="section-heading">Contact Me</h2>
          <p className="section-subheading">
            Have a project or opportunity? Let's connect and build something together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div
            className={`lg:col-span-2 space-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">{info.label}</span>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-slate-300 hover:text-cyan-400 transition-colors text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-slate-300 text-sm">{info.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card">
              <h3 className="text-lg font-semibold text-white mb-4">Social Links</h3>
              <div className="space-y-2">
                {socialLinks.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/5"
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="text-sm">{link.label}</span>
                    <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-3 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="card">
              <h3 className="text-lg font-semibold text-white mb-6">Send a Message</h3>

              <div className="space-y-5">
                <div>
                  <label className="text-sm text-slate-400 block mb-2">Name</label>
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-400 block mb-2">Email</label>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-400 block mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-navy-900 border border-slate-700 rounded-lg px-4 py-3 text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/20 transition-all resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  <Send size={16} />
                  {submitted ? 'Message Sent!' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
