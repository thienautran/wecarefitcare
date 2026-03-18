import { motion, useReducedMotion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { DarkCard, type DarkCardColor } from './DarkCard';
import { useInView } from './useInView';

/* ─── Copy ─── */

const SECTION_HEADING = {
  label: 'What You Get',
  title: 'When You Join',
  gradientText: 'Project FitCare',
  subtitle: 'Hands-On Fitness & Lifestyle Support Designed Around You',
};

interface Benefit {
  emoji: string;
  title: string;
  description: string;
  color: DarkCardColor;
}

const BENEFITS: Benefit[] = [
  {
    emoji: '💬',
    title: 'Lifetime Friendships & Support',
    description:
      'Join a community that moves with you. Build real connections with our team and fellow participants who encourage and celebrate every step of your journey.',
    color: 'brand',
  },
  {
    emoji: '🏋️‍♂️',
    title: 'Tailored Expert Guidance',
    description:
      "Receive personalised coaching designed for your goals. Every exercise, skill, or activity is tested and delivered by experts who've done it themselves.",
    color: 'accent',
  },
  {
    emoji: '📈',
    title: 'Consistent Motivation & Progress Tracking',
    description:
      'Stay on track and see your growth. We celebrate milestones, track your progress, and keep you inspired to reach your full potential.',
    color: 'purple',
  },
  {
    emoji: '✅',
    title: 'NDIS-Registered Peace of Mind',
    description:
      'Enjoy the confidence of working with qualified, NDIS-registered providers. Your support is safe, professional, and tailored to your needs.',
    color: 'sky',
  },
  {
    emoji: '🚀',
    title: 'Unparalleled Service Delivery & Proven Results',
    description:
      'Experience hands-on support with an excellent track record of delivering real outcomes for our clients — your goals are our mission.',
    color: 'brand',
  },
];

/* ─── Desktop grid: top 3 + bottom 2 centred, fade in ─── */

function DesktopBenefits() {
  const { ref, inView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="hidden lg:block">
      {/* Top row — 3 cards */}
      <div className="grid grid-cols-3 gap-5">
        {BENEFITS.slice(0, 3).map((b, i) => (
          <motion.div
            key={b.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.9, delay: 0.2 + i * 0.25, ease: 'easeOut' }
            }
          >
            <DarkCard emoji={b.emoji} title={b.title} description={b.description} color={b.color} />
          </motion.div>
        ))}
      </div>

      {/* Bottom row — 2 cards centred */}
      <div className="grid grid-cols-2 gap-5 mt-5 max-w-[66%] mx-auto">
        {BENEFITS.slice(3).map((b, i) => (
          <motion.div
            key={b.title}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={
              shouldReduceMotion
                ? { duration: 0 }
                : { duration: 0.9, delay: 0.8 + i * 0.25, ease: 'easeOut' }
            }
          >
            <DarkCard emoji={b.emoji} title={b.title} description={b.description} color={b.color} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── Mobile: vertically stacked ─── */

function MobileBenefits() {
  return (
    <div className="lg:hidden flex flex-col gap-4">
      {BENEFITS.map((b, i) => (
        <FadeIn key={b.title} delay={0.2 + i * 0.2}>
          <DarkCard emoji={b.emoji} title={b.title} description={b.description} color={b.color} />
        </FadeIn>
      ))}
    </div>
  );
}

/* ─── Main Section ─── */

export default function WhatYouGetSection() {
  return (
    <section id="what-you-get" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-slate-950 overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgb(var(--pfc-brand-700) / 0.1) 0%, transparent 70%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        {/* Section heading — dark variant */}
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-block font-sans text-xs font-semibold tracking-widest uppercase text-brand-400 mb-3">
              {SECTION_HEADING.label}
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
              {SECTION_HEADING.title}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                {SECTION_HEADING.gradientText}
              </span>
            </h2>
            <p className="font-sans text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {SECTION_HEADING.subtitle}
            </p>
          </div>
        </FadeIn>

        <DesktopBenefits />
        <MobileBenefits />
      </div>
    </section>
  );
}
