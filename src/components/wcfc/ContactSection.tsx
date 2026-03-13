import { motion, useReducedMotion } from 'motion/react';
import { useInView } from './useInView';
import { GOOGLE_FORM_URL } from '../../config/site';
import { SectionHeading } from './SectionHeading';

export default function ContactSection() {
  const { ref, inView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Get in Touch"
          title="Let's Start a"
          gradientText="Conversation"
          subtitle="Whether you're exploring options for yourself or a loved one, or you just want to learn more about how we work — we'd love to hear from you. Fill in the form below and we'll get back to you soon."
          className="mb-8 sm:mb-10"
        />

        {/* Google Form iframe */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="rounded-2xl overflow-hidden border border-brand-100 shadow-sm bg-white"
        >
          {/*
           * PLACEHOLDER: Replace GOOGLE_FORM_URL in src/config/site.ts with the actual Google Form embed URL.
           * Format: https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform?embedded=true
           */}
          <iframe
            src={GOOGLE_FORM_URL}
            title="We Care Fit Care Contact Form"
            width="100%"
            height="900"
            className="w-full border-0"
            loading="lazy"
            sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
            aria-label="Contact form — We Care Fit Care"
          >
            <p className="p-6 font-sans text-slate-600">
              Loading form...{' '}
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer" className="text-brand-700 underline">
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
            className="text-brand-600 hover:text-brand-800 underline transition-colors"
          >
            Email us directly
          </a>
        </p>
      </div>
    </section>
  );
}
