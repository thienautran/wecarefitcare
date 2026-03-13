import { motion } from 'motion/react';

const HERO_COPY = {
  eyebrowBrand: 'We Care Fit Care',
  eyebrow: 'NDIS Health, Fitness & Lifestyle Support',
  headlineTop: 'Real Results.',
  headlineGradient: 'Hands-On Support.',
  description:
    "We don't hand you a program and wish you luck. We show up, move alongside you, and support you every step of the way. Everything we ask you to try is something we've already done ourselves — helping you build",
  descriptionEmphasis: 'strength, confidence, and independence.',
  cta: 'Get in Touch',
};

export default function HeroOverlay() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 sm:px-6 text-center">
      <div className="max-w-3xl w-full">
        {/* Main heading — brand name + NDIS line */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-7xl leading-tight sm:leading-[1.1] mb-3 sm:mb-5 text-shadow-hero"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-300 to-accent-300">
            {HERO_COPY.eyebrowBrand}
          </span>
          <br />
          <span className="text-white text-lg sm:text-3xl lg:text-4xl font-bold leading-snug">
            {HERO_COPY.eyebrow}
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="font-heading font-semibold text-lg sm:text-2xl lg:text-3xl text-white/90 leading-snug mb-4 sm:mb-7 text-shadow-hero-md"
        >
          {HERO_COPY.headlineTop}{' '}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-300 via-accent-300 to-brand-400">
            {HERO_COPY.headlineGradient}
          </span>
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          className="font-sans text-xs sm:text-sm lg:text-base text-white/75 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-10 text-shadow-hero-sm"
        >
          {HERO_COPY.description}{' '}
          <em className="not-italic font-medium text-white">{HERO_COPY.descriptionEmphasis}</em>
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.95, ease: 'easeOut' }}
        >
          <a
            href="#contact"
            onClick={handleNavClick}
            className="group relative inline-flex items-center gap-2 sm:gap-2.5 font-heading font-semibold text-sm sm:text-base lg:text-lg px-6 py-3.5 sm:px-10 sm:py-5 rounded-full text-white bg-gradient-to-r from-brand-600 to-accent-600 shadow-cta-glow transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-white/40 focus:ring-offset-2 focus:ring-offset-transparent"
          >
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-700 to-accent-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">{HERO_COPY.cta}</span>
            <svg
              className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
