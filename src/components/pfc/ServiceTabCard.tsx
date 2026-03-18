import { motion, useReducedMotion } from 'motion/react';
import type { IconType } from 'react-icons';
import { ClaimSessionDialog } from './ClaimSessionDialog';

/* ─── Types ─── */

export interface ServiceTabData {
  icon: IconType;
  title: string;
  description: string;
  services: string[];
  image: string;
  imageAlt: string;
}

interface ServiceTabCardProps {
  service: ServiceTabData;
  tabKey: string;
}

/* ─── Spring presets ─── */

const SPRING_SOFT = { type: 'spring' as const, stiffness: 80, damping: 20, mass: 1 };
const SPRING_SNAPPY = { type: 'spring' as const, stiffness: 120, damping: 18, mass: 0.8 };
const SPRING_LAZY = { type: 'spring' as const, stiffness: 50, damping: 16, mass: 1.2 };

/* ─── Component ─── */

export function ServiceTabCard({ service, tabKey }: ServiceTabCardProps) {
  const skip = useReducedMotion();

  /* Stagger helper — each step waits a bit longer */
  const delay = (step: number) => 0.08 + step * 0.1;

  return (
    <div
      key={tabKey}
      className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-stretch"
    >
      {/* ── Image panel — clip-path wipe reveal ── */}
      <motion.div
        initial={skip ? false : { clipPath: 'inset(0 100% 0 0)', opacity: 0 }}
        animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
        transition={skip ? { duration: 0 } : { duration: 1, ease: [0.65, 0, 0.35, 1], delay: delay(0) }}
        className="relative overflow-hidden rounded-2xl aspect-[4/3] lg:aspect-[4/3]"
      >
        {/* Image scale-in — starts zoomed, settles */}
        <motion.img
          src={service.image}
          alt={service.imageAlt}
          loading="lazy"
          initial={skip ? false : { scale: 1.15 }}
          animate={{ scale: 1 }}
          transition={skip ? { duration: 0 } : { ...SPRING_LAZY, delay: delay(0) + 0.2 }}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

        {/* Floating badge — pops up from below with spring bounce */}
        <motion.div
          initial={skip ? false : { opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={skip ? { duration: 0 } : { ...SPRING_SNAPPY, delay: delay(4) }}
          className="absolute bottom-4 left-4 flex items-center gap-2.5 bg-white/90 backdrop-blur-md rounded-xl px-4 py-2.5 shadow-lg"
        >
          <motion.div
            initial={skip ? false : { rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={skip ? { duration: 0 } : { ...SPRING_SNAPPY, delay: delay(5) }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center"
          >
            <service.icon className="w-3.5 h-3.5 text-white" />
          </motion.div>
          <span className="font-heading font-semibold text-sm text-slate-800">
            {service.title}
          </span>
        </motion.div>
      </motion.div>

      {/* ── Content panel — staggered blur-to-sharp reveal ── */}
      <div className="flex flex-col justify-center py-2 lg:py-4">
        {/* Icon + title */}
        <motion.div
          initial={skip ? false : { opacity: 0, x: 40, filter: 'blur(6px)' }}
          animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
          transition={skip ? { duration: 0 } : { ...SPRING_SOFT, delay: delay(1) }}
          className="flex items-center gap-3 mb-4"
        >
          <motion.div
            initial={skip ? false : { scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={skip ? { duration: 0 } : { ...SPRING_SNAPPY, delay: delay(2) }}
            className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 border border-brand-100 flex items-center justify-center flex-shrink-0"
          >
            <service.icon className="w-5 h-5 text-brand-600" />
          </motion.div>
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-slate-800">
            {service.title}
          </h3>
        </motion.div>

        {/* Accent line — draws from left via scaleX + width spring */}
        <motion.div
          initial={skip ? false : { scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={skip ? { duration: 0 } : { ...SPRING_SOFT, delay: delay(3) }}
          className="h-0.5 w-16 bg-gradient-to-r from-brand-500 to-accent-500 rounded-full mb-5 origin-left"
        />

        {/* Description — fades up with gentle blur dissolve */}
        <motion.p
          initial={skip ? false : { opacity: 0, y: 16, filter: 'blur(4px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={skip ? { duration: 0 } : { ...SPRING_SOFT, delay: delay(4) }}
          className="font-sans text-base text-slate-600 leading-relaxed mb-6"
        >
          {service.description}
        </motion.p>

        {/* Service list — each item slides in from left with increasing delay */}
        {service.services.length > 0 && (
          <ul className="space-y-3 mb-8">
            {service.services.map((item, i) => (
              <motion.li
                key={item}
                initial={skip ? false : { opacity: 0, x: -20, filter: 'blur(3px)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                transition={
                  skip
                    ? { duration: 0 }
                    : { ...SPRING_SOFT, delay: delay(5) + i * 0.07 }
                }
                className="flex items-start gap-3"
              >
                {/* Bullet dot — pops in with spring */}
                <motion.span
                  initial={skip ? false : { scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={
                    skip
                      ? { duration: 0 }
                      : { ...SPRING_SNAPPY, delay: delay(5) + i * 0.07 + 0.05 }
                  }
                  className="mt-2 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gradient-to-br from-brand-400 to-accent-400"
                />
                <span className="font-sans text-sm text-slate-600 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        )}

        {/* CTA — scales up from below with a soft spring settle */}
        <motion.div
          initial={skip ? false : { opacity: 0, y: 20, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={
            skip
              ? { duration: 0 }
              : { ...SPRING_SOFT, delay: delay(6) + (service.services.length * 0.07) }
          }
        >
          <ClaimSessionDialog serviceTitle={service.title}>
            <button className="group inline-flex items-center gap-2 font-heading font-semibold text-sm px-7 py-3.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 cursor-pointer">
              Claim Your Session
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </ClaimSessionDialog>
        </motion.div>
      </div>
    </div>
  );
}
