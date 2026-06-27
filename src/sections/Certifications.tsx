import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Award, ExternalLink, Calendar } from 'lucide-react';

const certifications = [
  {
    title: 'Microsoft Azure AI Fundamentals (AI-900)',
    issuer: 'Microsoft',
    expiry: 'Valid until 24 August 2026',
    description:
      'Demonstrates knowledge of AI workloads and Azure AI services, including machine learning, computer vision, natural language processing, and conversational AI.',
    credentialUrl:
      'https://drive.google.com/drive/folders/19YQLhbfD96qo1r8mjZkcTDTF-jLYW_4o',
    badge: 'Azure',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    expiry: 'Valid until 9 February 2026',
    description:
      'Validates foundational understanding of AWS Cloud concepts, core services, security, architecture, pricing, and support — demonstrating cloud fluency.',
    credentialUrl:
      'https://drive.google.com/drive/folders/19YQLhbfD96qo1r8mjZkcTDTF-jLYW_4o',
    badge: 'AWS',
  },
];

export default function Certifications() {
  const { ref, isVisible } = useIntersectionObserver<HTMLElement>();

  return (
    <section id="certifications" ref={ref} className="relative py-24 md:py-32 bg-navy-800">
      <div className="relative max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="section-divider mx-auto" />
          <h2 className="section-heading">Certifications</h2>
          <p className="section-subheading">
            Industry-recognized credentials in cloud and artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <div
              key={i}
              className={`card group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <Award className="w-7 h-7 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white mb-1 leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-medium text-cyan-400">{cert.issuer}</p>
                  <p className="text-xs text-slate-500 flex items-center gap-1 mt-1">
                    <Calendar size={12} />
                    {cert.expiry}
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed mb-5">
                {cert.description}
              </p>

              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ExternalLink size={14} />
                View Credential
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
