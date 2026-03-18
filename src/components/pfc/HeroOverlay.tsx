import { motion, useReducedMotion } from 'motion/react';

const HERO_COPY = {
  eyebrowBrand: 'Project Fitcare',
  eyebrow: 'NDIS Health, Fitness & Lifestyle Support',
  headlineTop: 'Real Results.',
  headlineGradient: 'Hands-On Support.',
  description:
    "We don't hand you a program and wish you luck. We show up, move alongside you, and support you every step of the way. Everything we ask you to try is something we've already done ourselves — helping you build",
  descriptionEmphasis: 'strength, confidence, and independence.',
  cta: 'Get in Touch',
};

export default function HeroOverlay() {
  const skip = useReducedMotion();

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
        {/* Main heading — brand name */}
        <motion.h1
          initial={skip ? false : { opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={skip ? { duration: 0 } : { duration: 1, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-8xl leading-tight sm:leading-[1.05] mb-2 sm:mb-4 text-shadow-hero"
        >
          <span className="bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-r from-brand-300 via-accent-300 to-brand-300 animate-[shimmer_4s_ease-in-out_infinite] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {HERO_COPY.eyebrowBrand}
          </span>
        </motion.h1>

        {/* NDIS eyebrow — slides in with accent line */}
        <motion.div
          initial={skip ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={skip ? { duration: 0 } : { duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6"
        >
          <motion.span
            initial={skip ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={skip ? { duration: 0 } : { duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="hidden sm:block h-px w-10 lg:w-14 bg-gradient-to-r from-transparent to-white/50 origin-right"
          />
          <span className="font-sans font-medium text-xs sm:text-sm lg:text-base uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/90 text-shadow-hero">
            {HERO_COPY.eyebrow}
          </span>
          <motion.span
            initial={skip ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={skip ? { duration: 0 } : { duration: 0.6, delay: 0.6, ease: 'easeOut' }}
            className="hidden sm:block h-px w-10 lg:w-14 bg-gradient-to-l from-transparent to-white/50 origin-left"
          />
        </motion.div>

        {/* Subheadline — staggered word reveal */}
        <motion.p
          initial={skip ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={skip ? { duration: 0 } : { duration: 0.5, delay: 0.5 }}
          className="font-heading font-bold text-xl sm:text-3xl lg:text-4xl leading-snug mb-5 sm:mb-8 text-shadow-hero"
        >
          <motion.span
            initial={skip ? false : { opacity: 0, x: -20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={skip ? { duration: 0 } : { duration: 0.7, delay: 0.55, ease: 'easeOut' }}
            className="text-white"
          >
            {HERO_COPY.headlineTop}
          </motion.span>{' '}
          <motion.span
            initial={skip ? false : { opacity: 0, x: 20, filter: 'blur(6px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={skip ? { duration: 0 } : { duration: 0.7, delay: 0.75, ease: 'easeOut' }}
            className="bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-r from-brand-300 via-accent-300 to-brand-400 animate-[shimmer_4s_ease-in-out_infinite_0.5s] drop-shadow-[0_3px_16px_rgba(0,0,0,0.45)]"
          >
            {HERO_COPY.headlineGradient}
          </motion.span>
        </motion.p>

        {/* Description — frosted glass card for readability */}
        <motion.div
          initial={skip ? false : { opacity: 0, y: 16, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={skip ? { duration: 0 } : { duration: 0.8, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="relative max-w-xl mx-auto mb-7 sm:mb-11 px-5 py-4 sm:px-7 sm:py-5 rounded-2xl bg-black/25 backdrop-blur-md border border-white/[0.1] shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        >
          <p className="font-sans text-sm sm:text-base lg:text-[1.05rem] text-white/90 leading-relaxed text-shadow-hero-sm">
            {HERO_COPY.description}{' '}
            <em className="not-italic font-semibold text-white bg-clip-text text-transparent bg-[length:200%_200%] bg-gradient-to-r from-white via-brand-200 to-white animate-[shimmer_5s_ease-in-out_infinite]">
              {HERO_COPY.descriptionEmphasis}
            </em>
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 120, damping: 14, delay: 0.95 }}
        >
          <a
            href="#contact"
            onClick={handleNavClick}
            className="group relative isolate inline-flex items-center gap-3 font-heading font-bold text-base sm:text-lg lg:text-xl px-8 py-4 sm:px-12 sm:py-5 rounded-full text-white overflow-hidden transition-transform duration-300 hover:scale-105 active:scale-[0.97] focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent cursor-pointer"
          >
            {/* Animated gradient background */}
            <span
              className="absolute inset-0 -z-10 bg-[length:200%_200%] bg-gradient-to-r from-brand-600 via-accent-500 to-brand-600 animate-[shimmer_3s_ease-in-out_infinite]"
            />

            {/* Hover brightening layer */}
            <span className="absolute inset-0 -z-10 bg-white/0 group-hover:bg-white/[0.12] transition-colors duration-300" />

            {/* Outer glow ring that pulses */}
            <span className="absolute -inset-[3px] -z-20 rounded-full bg-gradient-to-r from-brand-400 via-accent-400 to-brand-400 opacity-50 blur-md group-hover:opacity-80 transition-opacity duration-500 animate-[pulse_2.5s_ease-in-out_infinite]" />

            {/* Text */}
            <span className="relative tracking-wide">{HERO_COPY.cta}</span>

            {/* Arrow with bounce on hover */}
            <span className="relative flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 group-hover:bg-white/30 transition-all duration-300">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </span>
          </a>
        </motion.div>
      </div>
    </div>
  );
}
