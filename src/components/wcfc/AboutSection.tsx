import { faCircleCheck, faBolt, faSmile, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { motion, useReducedMotion } from 'motion/react';
import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';
import { DarkCard, type DarkCardColor } from './DarkCard';
import { useInView } from './useInView';

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
  icon: IconDefinition;
  title: string;
  body: string;
  color: DarkCardColor;
}

const HIGHLIGHTS: Highlight[] = [
  {
    icon: faCircleCheck,
    title: 'NDIS Registered Support',
    body: 'We work within the NDIS framework to deliver supports that align with your goals — helping you get the most out of your plan.',
    color: 'brand',
  },
  {
    icon: faBolt,
    title: 'Active & Practical',
    body: 'No generic plans gathering dust. We get active with you — outdoors, in the gym, or at home — focusing on practical, real-world fitness.',
    color: 'accent',
  },
  {
    icon: faSmile,
    title: 'Human-Centred Care',
    body: 'We take the time to genuinely understand what matters to each client. Your goals become our goals.',
    color: 'purple',
  },
  {
    icon: faPeopleGroup,
    title: 'Small Team, Big Commitment',
    body: "We're a small team. That means consistent faces, genuine relationships, and support workers who actually care.",
    color: 'sky',
  },
];

/* ─── Sub-components ─── */

interface ContentBlockProps {
  number: string;
  title: string;
  paragraphs: string[];
}

function ContentBlock({ number, title, paragraphs }: ContentBlockProps) {
  return (
    <div className="relative">
      <div className="flex items-center gap-3 mb-5">
        <span className="flex-shrink-0 w-9 h-9 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center font-heading font-bold text-sm text-white shadow-md shadow-brand-600/15">
          {number}
        </span>
        <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-800">{title}</h3>
      </div>
      <div className="space-y-4 pl-12">
        {paragraphs.map((text, i) => (
          <p key={i} className="font-sans text-slate-600 leading-relaxed">
            {text}
          </p>
        ))}
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
          initial={shouldReduceMotion ? false : { opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={
            shouldReduceMotion
              ? { duration: 0 }
              : { duration: 0.9, delay: 0.2 + i * 0.25, ease: 'easeOut' }
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
      {/* Upper: heading + content blocks on white */}
      <div className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <SectionHeading
            label={ABOUT_HEADING.label}
            title={ABOUT_HEADING.title}
            gradientText={ABOUT_HEADING.gradientText}
            subtitle={ABOUT_HEADING.subtitle}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0">
            <FadeIn delay={0.1}>
              <div className="lg:pr-10 lg:border-r lg:border-slate-200">
                <ContentBlock number="01" title={WHAT_WE_DO.title} paragraphs={WHAT_WE_DO.paragraphs} />
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="lg:pl-10">
                <ContentBlock number="02" title={HOW_WE_DO_IT.title} paragraphs={HOW_WE_DO_IT.paragraphs} />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Lower: highlight cards on dark band */}
      <div className="relative py-16 sm:py-20 px-4 sm:px-6 bg-slate-950 overflow-hidden">
        {/* Radial glow */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgb(var(--wcfc-brand-700) / 0.1) 0%, transparent 70%)',
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
