import { motion, useReducedMotion } from 'motion/react';
import { useInView } from './useInView';
import { GOOGLE_FORM_URL } from '../../config/site';

export default function ContactSection() {
  const { ref, inView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-8 sm:mb-10"
        >
          <span className="inline-block font-sans text-xs font-semibold tracking-widest uppercase text-purple-600 mb-3">
            Get in Touch
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 leading-tight">
            Let's Start a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-blue-600">
              Conversation
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto">
            Whether you're exploring options for yourself or a loved one, or you just want to learn more about how we
            work — we'd love to hear from you. Fill in the form below and we'll get back to you soon.
          </p>
        </motion.div>

        {/* Google Form iframe */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="rounded-2xl overflow-hidden border border-purple-100 shadow-sm bg-white"
        >
          {/*
           * PLACEHOLDER: Replace GOOGLE_FORM_URL in src/config/site.ts with the actual Google Form embed URL.
           * Format: https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
           */}
          <iframe
            src={GOOGLE_FORM_URL}
            title="We Care Fit Care Contact Form"
            width="100%"
            height="600"
            className="w-full border-0"
            loading="lazy"
            sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
            aria-label="Contact form — We Care Fit Care"
          >
            <p className="p-6 font-sans text-slate-600">
              Loading form...{' '}
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-purple-700 underline">
                Click here to open the form in a new tab.
              </a>
            </p>
          </iframe>
        </motion.div>

        {/* Fallback note */}
        <p className="mt-4 text-center font-sans text-xs text-slate-400">
          Having trouble with the form?{' '}
          <a
            href="mailto:hello@wecarefitcare.com.au"
            className="text-purple-600 hover:text-purple-800 underline transition-colors"
          >
            Email us directly
          </a>
        </p>
      </div>
    </section>
  );
}
