import { motion, useReducedMotion } from 'motion/react';
import { useInView } from './useInView';
import { FadeIn } from './FadeIn';

const HIGHLIGHTS = [
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: 'NDIS Registered Support',
    body: 'We work within the NDIS framework to deliver supports that align with your goals — helping you get the most out of your plan.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
    title: 'Active & Practical',
    body: 'No generic plans gathering dust. We get active with you — outdoors, in the gym, or at home — focusing on practical, real-world fitness.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
        />
      </svg>
    ),
    title: 'Human-Centred Care',
    body: 'We take the time to genuinely understand what matters to each client. Your goals become our goals.',
  },
  {
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
        />
      </svg>
    ),
    title: 'Small Team, Big Commitment',
    body: "We're a small, family-run team. That means consistent faces, genuine relationships, and support workers who actually care.",
  },
];

export default function AboutSection() {
  const { ref: headingRef, inView: headingInView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block font-sans text-xs font-semibold tracking-widest uppercase text-purple-600 mb-3">
            Who We Are
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 leading-tight">
            Fitness Support That{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
              Actually Works
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            We Care Fit Care (WCFC) is a small NDIS support business based in Australia, specialising in fitness,
            movement, and keeping our clients active, healthy, and independent.
          </p>
        </motion.div>

        {/* Main body text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 sm:mb-16">
          <FadeIn delay={0.1}>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-slate-800">What We Do</h3>
              <p className="font-sans text-slate-600 leading-relaxed">
                We provide hands-on fitness and activity support to NDIS participants — people who want to stay active,
                build strength, improve their wellbeing, and ultimately live a more independent life.
              </p>
              <p className="font-sans text-slate-600 leading-relaxed">
                Whether it's getting to the gym for the first time, building a consistent walking routine, or working on
                mobility and balance at home — we meet you where you are and work forward from there.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-4">
              <h3 className="font-heading font-semibold text-xl sm:text-2xl text-slate-800">How We Do It</h3>
              <p className="font-sans text-slate-600 leading-relaxed">
                We believe the best support is honest, practical, and built on real trust. We never hand a client a
                routine we haven't tested ourselves. We show up. We move alongside you. We celebrate the small wins
                because they're the ones that matter.
              </p>
              <p className="font-sans text-slate-600 leading-relaxed">
                Our approach is low-fuss and high-quality: clear communication, consistent support workers, and a
                genuine commitment to your goals.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {HIGHLIGHTS.map((item, i) => (
            <FadeIn key={item.title} delay={0.1 + i * 0.1}>
              <div className="flex gap-4 p-5 sm:p-6 rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50/60 to-blue-50/40 hover:border-purple-200 transition-colors duration-200">
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 text-white flex items-center justify-center">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-slate-800 mb-1">{item.title}</h4>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
