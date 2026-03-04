import { useReducedMotion } from 'motion/react';
import { useInView } from './useInView';
import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

/**
 * Wrapper component that fades in on scroll.
 * Automatically disables animation when prefers-reduced-motion is set.
 */
export function FadeIn({ children, delay = 0, className = '', y = 24 }: FadeInProps) {
  const { ref, inView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
