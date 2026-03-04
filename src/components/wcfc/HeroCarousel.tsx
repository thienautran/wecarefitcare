import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'motion/react';

const CAROUSEL_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80&auto=format&fit=crop',
    alt: 'Support worker helping client with fitness exercises outdoors',
  },
  {
    src: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1600&q=80&auto=format&fit=crop',
    alt: 'Person exercising with professional support in a gym setting',
  },
  {
    src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80&auto=format&fit=crop',
    alt: 'Active lifestyle and outdoor fitness activity',
  },
  {
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1600&q=80&auto=format&fit=crop',
    alt: 'Yoga and stretching for wellbeing and flexibility',
  },
];

const AUTOPLAY_INTERVAL = 5000;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const goTo = useCallback((index: number, dir: 1 | -1) => {
    setDirection(dir);
    setCurrent((index + CAROUSEL_IMAGES.length) % CAROUSEL_IMAGES.length);
  }, []);

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Autoplay
  useEffect(() => {
    if (isPaused || shouldReduceMotion) return;
    timerRef.current = setTimeout(() => {
      setDirection(1);
      setCurrent((c) => (c + 1) % CAROUSEL_IMAGES.length);
    }, AUTOPLAY_INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPaused, shouldReduceMotion]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.getElementById('contact');
    if (target) {
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const variants = shouldReduceMotion
    ? {
        enter: () => ({ opacity: 0 }),
        center: { opacity: 1 },
        exit: () => ({ opacity: 0 }),
      }
    : {
        enter: (dir: number) => ({ x: dir > 0 ? '100%' : '-100%', opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (dir: number) => ({ x: dir > 0 ? '-100%' : '100%', opacity: 0 }),
      };

  const transition = shouldReduceMotion ? { duration: 0.2 } : { duration: 0.7, ease: [0.32, 0.72, 0, 1] as const };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '560px', maxHeight: '900px' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero image carousel"
    >
      {/* Images */}
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={transition}
          className="absolute inset-0"
          aria-hidden="true"
        >
          <img
            src={CAROUSEL_IMAGES[current].src}
            alt=""
            className="w-full h-full object-cover object-center"
            loading={current === 0 ? 'eager' : 'lazy'}
            decoding="async"
            width={1600}
            height={900}
          />
          {/* Dark gradient overlay for text legibility */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65"
            aria-hidden="true"
          />
        </motion.div>
      </AnimatePresence>

      {/* Screen-reader only image description */}
      <p className="sr-only" aria-live="polite">
        {CAROUSEL_IMAGES[current].alt}
      </p>

      {/* Hero Copy Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 text-center">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <span className="inline-block font-sans text-xs sm:text-sm font-semibold tracking-widest uppercase text-purple-200 mb-4 sm:mb-5">
            NDIS Fitness &amp; Support
          </span>

          {/* Headline */}
          <h1 className="font-heading font-bold text-3xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4 sm:mb-6">
            Real Results.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-blue-300">
              Hands-On Support.
            </span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-base sm:text-lg text-white/85 leading-relaxed max-w-xl mx-auto mb-6 sm:mb-8">
            We don't hand you a program and wish you luck. We show up, we move alongside you, and we only ever ask you
            to try something <em className="not-italic font-medium text-white">we've already done ourselves.</em>
          </p>

          {/* CTA */}
          <a
            href="#contact"
            onClick={handleNavClick}
            className="inline-flex items-center gap-2 font-sans font-semibold text-base sm:text-lg px-7 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent min-h-[52px]"
          >
            Get in Touch
            <svg
              className="w-5 h-5"
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

      {/* Prev / Next Buttons */}
      <button
        onClick={prev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={next}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Carousel slides"
      >
        {CAROUSEL_IMAGES.map((img, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}: ${img.alt}`}
            onClick={() => goTo(i, i > current ? 1 : -1)}
            className={[
              'transition-all duration-300 rounded-full',
              i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80',
            ].join(' ')}
          />
        ))}
      </div>
    </section>
  );
}
