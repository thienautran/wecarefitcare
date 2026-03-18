import { LuCircleCheck, LuZap, LuSmile, LuUsers } from 'react-icons/lu';
import type { IconType } from 'react-icons';
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';
import { DarkCard, type DarkCardColor } from './DarkCard';
import { useInView } from './useInView';

import gymStretching from '~/assets/images/gym-stretching.jpg';
import bungeeFitness from '~/assets/images/bungee-fitness.jpg';
import surfing from '~/assets/images/surfing.jpg';
import legPress from '~/assets/images/leg-press.jpg';

/* ─── Copy ─── */

const ABOUT_HEADING = {
  label: 'Who We Are',
  title: 'Supporting Health, Confidence,',
  gradientText: 'and Independence',
  subtitle:
    'Our mission is to help you achieve your independence goals through practical, hands-on support that delivers real results. We focus on three core areas — Physical Health, Sports & Fitness, and Social & Lifestyle — to help you stay active, confident, and engaged in everyday life.',
};

const WHAT_WE_DO = {
  title: 'What We Do',
  paragraphs: [
    'We provide hands-on fitness and activity support to NDIS participants — people who want to stay active, build strength, improve their wellbeing, and ultimately live a more independent life.',
    "Whether it's getting to the gym for the first time, building a consistent walking routine, or working on mobility and balance at home — we meet you where you are and work forward from there.",
  ],
};

const HOW_WE_DO_IT = {
  title: 'How We Do It',
  paragraphs: [
    "We believe the best support is honest, practical, and built on real trust. We never hand a client a routine we haven't tested ourselves. We show up. We move alongside you. We celebrate the small wins because they're the ones that matter.",
    'Our approach is low-fuss and high-quality: clear communication, consistent support workers, and a genuine commitment to your goals.',
  ],
};

interface Highlight {
  icon: IconType;
  title: string;
  body: string;
  color: DarkCardColor;
}

const HIGHLIGHTS: Highlight[] = [
  {
    icon: LuCircleCheck,
    title: 'NDIS Registered Support',
    body: 'We work within the NDIS framework to deliver supports that align with your goals — helping you get the most out of your plan.',
    color: 'brand',
  },
  {
    icon: LuZap,
    title: 'Active & Practical',
    body: 'No generic plans gathering dust. We get active with you — outdoors, in the gym, or at home — focusing on practical, real-world fitness.',
    color: 'accent',
  },
  {
    icon: LuSmile,
    title: 'Human-Centred Care',
    body: 'We take the time to genuinely understand what matters to each client. Your goals become our goals.',
    color: 'purple',
  },
  {
    icon: LuUsers,
    title: 'Small Team, Big Commitment',
    body: "We're a small team. That means consistent faces, genuine relationships, and support workers who actually care.",
    color: 'sky',
  },
];

/* ─── Sub-components ─── */

/** A single image with parallax scroll and reveal animation */
function ParallaxImage({
  src,
  alt,
  className = '',
}: {
  src: ImageMetadata;
  alt: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [40, -40]);
  const { ref: viewRef, inView } = useInView();

  return (
    <div
      ref={(node) => {
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        (viewRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
      }}
      className={`relative overflow-hidden rounded-3xl ${className}`}
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-800/20 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.img
        src={src.src}
        alt={alt}
        width={src.width}
        height={src.height}
        style={{ y }}
        initial={shouldReduceMotion ? false : { scale: 1.15, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={shouldReduceMotion ? { duration: 0 } : { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}

/** Decorative accent dot cluster */
function AccentDots({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute pointer-events-none ${className}`} aria-hidden>
      <div className="grid grid-cols-3 gap-2.5">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full bg-brand-300/30"
          />
        ))}
      </div>
    </div>
  );
}

/** Animated number badge for content blocks */
function NumberBadge({ number }: { number: string }) {
  const { ref, inView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { scale: 0, rotate: -180 }}
      animate={inView ? { scale: 1, rotate: 0 } : {}}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }
      }
      className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center font-heading font-bold text-lg text-white shadow-lg shadow-brand-600/20"
    >
      {number}
    </motion.div>
  );
}

/** Content block with staggered paragraph reveals */
function ContentBlock({
  number,
  title,
  paragraphs,
}: {
  number: string;
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="relative">
      <div className="flex items-center gap-4 mb-6">
        <NumberBadge number={number} />
        <FadeIn delay={0.15}>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-800">{title}</h3>
        </FadeIn>
      </div>
      <div className="space-y-5 pl-0 sm:pl-16">
        {paragraphs.map((text, i) => (
          <FadeIn key={i} delay={0.25 + i * 0.15}>
            <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed">{text}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  );
}

/** "What We Do" — text left, images right */
function WhatWeDoBlock() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Text */}
      <div className="order-2 lg:order-1">
        <ContentBlock number="01" title={WHAT_WE_DO.title} paragraphs={WHAT_WE_DO.paragraphs} />
      </div>

      {/* Images — stacked mosaic */}
      <div className="order-1 lg:order-2 relative group">
        <AccentDots className="-top-6 -right-4 hidden lg:block" />
        <div className="grid grid-cols-5 grid-rows-2 gap-3 sm:gap-4 h-[280px] sm:h-[340px] lg:h-[400px]">
          {/* Large main image */}
          <div className="col-span-3 row-span-2">
            <ParallaxImage
              src={gymStretching}
              alt="Participant stretching with support worker at the gym"
              className="h-full shadow-xl shadow-brand-600/10"
            />
          </div>
          {/* Two smaller stacked images */}
          <div className="col-span-2 row-span-1">
            <ParallaxImage
              src={bungeeFitness}
              alt="Bungee fitness activity session"
              className="h-full shadow-lg shadow-accent-600/10"
            />
          </div>
          <div className="col-span-2 row-span-1">
            <ParallaxImage
              src={surfing}
              alt="Supported surfing activity at the beach"
              className="h-full shadow-lg shadow-accent-600/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/** "How We Do It" — images left, text right */
function HowWeDoItBlock() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
      {/* Image — single large with floating accent */}
      <div className="relative group">
        <AccentDots className="-bottom-6 -left-4 hidden lg:block" />
        {/* Decorative brand ring */}
        <div className="absolute -top-3 -left-3 w-24 h-24 rounded-3xl border-2 border-brand-300/30 hidden lg:block" />
        <div className="h-[280px] sm:h-[340px] lg:h-[400px]">
          <ParallaxImage
            src={legPress}
            alt="Participant working out with support at the gym"
            className="h-full shadow-xl shadow-brand-600/10"
          />
        </div>
        {/* Floating stat badge */}
        <FadeIn delay={0.5} y={0}>
          <div className="absolute -bottom-5 -right-2 sm:right-6 bg-white rounded-2xl shadow-xl shadow-slate-900/10 px-5 py-3.5 border border-slate-100 z-20">
            <p className="font-heading font-bold text-2xl text-brand-600">100%</p>
            <p className="font-sans text-xs text-slate-500 tracking-wide">Hands-on approach</p>
          </div>
        </FadeIn>
      </div>

      {/* Text */}
      <div>
        <ContentBlock number="02" title={HOW_WE_DO_IT.title} paragraphs={HOW_WE_DO_IT.paragraphs} />
      </div>
    </div>
  );
}

/** Desktop: cards slide in from left, staggered. */
function DesktopHighlights() {
  const { ref, inView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="hidden lg:grid grid-cols-4 gap-5">
      {HIGHLIGHTS.map((item, i) => (
        <motion.div
          key={item.title}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }
          }
        >
          <DarkCard icon={item.icon} title={item.title} description={item.body} color={item.color} />
        </motion.div>
      ))}
    </div>
  );
}

/** Mobile: vertically stacked cards with fade-in. */
function MobileHighlights() {
  return (
    <div className="lg:hidden flex flex-col gap-4">
      {HIGHLIGHTS.map((item, i) => (
        <FadeIn key={item.title} delay={0.2 + i * 0.2}>
          <DarkCard icon={item.icon} title={item.title} description={item.body} color={item.color} />
        </FadeIn>
      ))}
    </div>
  );
}

/* ─── Main Section ─── */

export default function AboutSection() {
  return (
    <section id="who-we-are">
      {/* Upper: heading + content blocks with images on white */}
      <div className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <SectionHeading
            label={ABOUT_HEADING.label}
            title={ABOUT_HEADING.title}
            gradientText={ABOUT_HEADING.gradientText}
            subtitle={ABOUT_HEADING.subtitle}
            className="mb-16 sm:mb-20"
          />

          {/* Content blocks with images — alternating layout */}
          <div className="space-y-20 lg:space-y-28">
            <WhatWeDoBlock />
            <HowWeDoItBlock />
          </div>
        </div>
      </div>

      {/* Lower: highlight cards on dark band */}
      <div className="relative py-16 sm:py-20 px-4 sm:px-6 bg-slate-950 overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, rgb(var(--pfc-brand-700) / 0.1) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <p className="font-heading font-semibold text-xs uppercase tracking-[0.2em] text-brand-400 text-center mb-3">
              Why Choose Us
            </p>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-white text-center mb-10 sm:mb-14">
              What sets us{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-accent-400">
                apart
              </span>
            </h3>
          </FadeIn>

          <DesktopHighlights />
          <MobileHighlights />
        </div>
      </div>
    </section>
  );
}
