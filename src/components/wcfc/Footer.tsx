import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { SOCIAL_LINKS, SITE_NAME, COPYRIGHT_YEAR } from '../../config/site';

const FOOTER_SOCIALS = [
  { label: 'Facebook', href: SOCIAL_LINKS.facebook, icon: faFacebookF },
  { label: 'Instagram', href: SOCIAL_LINKS.instagram, icon: faInstagram },
  { label: 'YouTube', href: SOCIAL_LINKS.youtube, icon: faYoutube },
];

const FOOTER_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Who We Are', href: '#who-we-are' },
  { label: 'Our Services', href: '#services' },
  { label: 'What You Get', href: '#what-you-get' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 text-white overflow-hidden">
      {/* Top accent gradient bar */}
      <div className="h-1 bg-gradient-to-r from-brand-600 via-accent-500 to-brand-600" />

      {/* Subtle radial glow behind content */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(147,51,234,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        {/* Main grid: logo | links | social */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-start">
          {/* Logo & tagline */}
          <div className="md:col-span-4 flex flex-col items-center md:items-start">
            <span className="font-heading font-extrabold text-3xl tracking-tight bg-gradient-to-r from-brand-400 to-accent-400 bg-clip-text text-transparent">
              WCFC
            </span>
            <p className="mt-2 font-sans text-sm text-slate-400 leading-relaxed max-w-xs text-center md:text-left">
              We Care Fit Care — empowering your wellness journey with expert guidance and genuine support.
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-4 flex flex-col items-center">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation">
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2.5">
                {FOOTER_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="font-sans text-sm text-slate-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social + CTA */}
          <div className="md:col-span-4 flex flex-col items-center md:items-end gap-4">
            <h3 className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-slate-500">
              Follow Us
            </h3>
            <div className="flex items-center gap-3">
              {FOOTER_SOCIALS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`We Care Fit Care on ${label}`}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-full border border-slate-700/60 text-slate-400 hover:border-brand-500 hover:text-brand-400 hover:bg-brand-500/10 transition-all duration-300"
                >
                  <FontAwesomeIcon icon={icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center gap-2 font-sans text-sm font-medium text-brand-400 hover:text-brand-300 transition-colors duration-200 group"
            >
              Get in Touch
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 mb-6 border-t border-slate-800/80" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-sans text-xs text-slate-500">
            &copy; {COPYRIGHT_YEAR} {SITE_NAME}. All rights reserved.
          </p>
          <p className="font-sans text-xs text-slate-600">
            Made with care for those who care.
          </p>
        </div>
      </div>
    </footer>
  );
}
