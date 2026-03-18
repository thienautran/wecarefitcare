import { motion, useReducedMotion } from 'motion/react';
import { useInView } from './useInView';

interface SectionHeadingProps {
  label: string;
  title: string;
  gradientText: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({ label, title, gradientText, subtitle, className = 'mb-12 sm:mb-16' }: SectionHeadingProps) {
  const { ref, inView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
      className={`text-center ${className}`}
    >
      <span className="inline-block font-sans text-xs font-semibold tracking-widest uppercase text-brand-600 mb-3">
        {label}
      </span>
      <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-[2.75rem] text-slate-900 mb-4 leading-tight tracking-tight">
        {title}{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-accent-600">
          {gradientText}
        </span>
      </h2>
      {subtitle && (
        <p className="font-sans text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
