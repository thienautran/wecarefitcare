import { motion, useReducedMotion } from 'motion/react';
import { useInView } from './useInView';
import { FadeIn } from './FadeIn';

const TEAM_MEMBERS = [
  {
    name: 'Eamon Hibbins',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=600&q=80&auto=format&fit=crop&crop=face',
    alt: 'Eamon Hibbins, CEO of We Care Fit Care',
    bio: "Eamon founded WCFC with one goal in mind: to deliver NDIS fitness support that's practical, honest, and actually makes a difference. With a background in exercise science and years of experience working alongside people with disability, Eamon leads by example — every approach WCFC uses is something he's tried and tested firsthand.",
  },
  {
    name: 'Tommy Hibbins',
    role: 'Support Worker',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80&auto=format&fit=crop&crop=face',
    alt: 'Tommy Hibbins, Support Worker at We Care Fit Care',
    bio: "Tommy brings energy, warmth, and a genuine love of movement to every session. Whether he's supporting a client through their first gym visit or joining them for an outdoor walk, Tommy brings consistency and care to everything he does. He believes fitness should be fun — and accessible to everyone.",
  },
];

export default function TeamSection() {
  const { ref: headingRef, inView: headingInView } = useInView();
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="meet-the-team" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          ref={headingRef}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={shouldReduceMotion ? { duration: 0 } : { duration: 0.6, ease: 'easeOut' }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="inline-block font-sans text-xs font-semibold tracking-widest uppercase text-brand-600 mb-3">
            The Team
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4 leading-tight">
            Meet the People{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 to-accent-600">
              Behind WCFC
            </span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            A small team with big hearts. We're real people who love what we do — and it shows in every session.
          </p>
        </motion.div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
          {TEAM_MEMBERS.map((member, i) => (
            <FadeIn key={member.name} delay={i * 0.15} className="h-full">
              <article className="flex flex-col rounded-3xl overflow-hidden bg-white border border-brand-100 shadow-sm hover:shadow-md hover:border-brand-200 transition-all duration-300 h-full">
                {/* Photo */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-brand-100 to-accent-100">
                  <img
                    src={member.image}
                    alt={member.alt}
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={450}
                  />
                  {/* Gradient overlay at bottom */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-5 sm:p-6">
                  <div className="mb-3">
                    <h3 className="font-heading font-bold text-xl text-slate-900">{member.name}</h3>
                    <span className="inline-block mt-1 font-sans text-xs font-semibold tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-accent-600">
                      {member.role}
                    </span>
                  </div>
                  <p className="font-sans text-sm text-slate-600 leading-relaxed flex-1">{member.bio}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
