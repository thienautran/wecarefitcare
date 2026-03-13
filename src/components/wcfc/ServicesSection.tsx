import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse, faPersonRunning, faPeopleArrows, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FadeIn } from './FadeIn';
import { SectionHeading } from './SectionHeading';
import { ClaimSessionDialog } from './ClaimSessionDialog';

/* ─── Copy ─── */

const SERVICES_HEADING = {
  label: 'Our Services',
  title: 'The Four Pillars of',
  gradientText: 'Support We Deliver',
  subtitle:
    'Supporting active, connected & independent lives — aligned with NDIS billables and designed to deliver real outcomes across every area of your wellbeing.',
};

interface ServiceData {
  icon: IconDefinition;
  title: string;
  description: string;
  services: string[];
}

const SERVICES: ServiceData[] = [
  {
    icon: faHeartPulse,
    title: 'Physical Health',
    description:
      'Custom-designed and professionally guided programs built around your specific needs and goals. Each plan is tailored to deliver results in the most efficient way possible, while still allowing you to progress at a pace that feels right for you. Your journey, your goals, your pace.',
    services: [
      'Strength & Conditioning, Personal Training',
      'Online Personal Training',
      'Functional Movement & Core Programs',
      'Supporting Physical Rehabilitation (in collaboration with health professionals)',
      'Nutrition Support — healthy meal planning and preparation guidance',
    ],
  },
  {
    icon: faPersonRunning,
    title: 'Sports & Fitness',
    description:
      "Martial arts? Surfing? Hiking? Learning footy? Fishing? Or maybe you're the next big Paralympian looking to build strength and conditioning for your sport. Whatever your goal, we're here to help you take the first step. With supportive coaching, tailored training, and a community that has your back, you'll gain the skills, confidence, and motivation to chase what excites you.",
    services: [
      'Skill-Based Sports Programs',
      'Outdoor Recreation Programs',
      'Adaptive & Inclusive Sports Sessions',
    ],
  },
  {
    icon: faPeopleArrows,
    title: 'Social & Community Participation',
    description:
      "Everyone deserves the opportunity to feel connected, included, and confident in their community. Our Social & Lifestyle supports are designed to help you stay active, build meaningful relationships, and take part in the activities that matter most to you. Whether it's exploring new hobbies, joining local clubs, or developing social confidence, we provide flexible support tailored to your interests, goals, and lifestyle.",
    services: [
      'Community Participation Programs',
      'Social Skills & Confidence Building',
      'Recreational & Leisure Activities',
      'Support to Access Local Clubs & Groups',
      'Custom & Tailored Support — flexible programs designed around your interests and goals',
    ],
  },
  {
    icon: faStethoscope,
    title: 'Allied & Health Professional Support',
    description:
      'We can connect you with the right allied health and professional services to support your goals. Whether you need physiotherapy, occupational therapy, speech therapy, or other specialist support, we help link you to trusted providers and ensure your fitness and lifestyle plan complements the broader care you receive.',
    services: [],
  },
];

/* ─── Components ─── */

interface ServiceCardProps {
  service: ServiceData;
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-brand-200 h-full flex flex-col">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-brand-500 to-accent-500" />

      <div className="p-6 sm:p-8 flex flex-col flex-1">
        {/* Icon inline with title */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5">
          <div className="flex-shrink-0 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 border border-brand-100 flex items-center justify-center">
            <FontAwesomeIcon icon={service.icon} className="w-4 h-4 sm:w-6 sm:h-6 text-brand-600" />
          </div>
          <h3 className="font-heading font-bold text-base sm:text-2xl text-slate-800 min-w-0">
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p className="font-sans text-sm text-slate-600 leading-relaxed mb-5">
          {service.description}
        </p>

        {/* Service list */}
        {service.services.length > 0 && (
          <ul className="space-y-2.5 mb-6">
            {service.services.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-400" />
                <span className="font-sans text-sm text-slate-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* CTA */}
        <ClaimSessionDialog serviceTitle={service.title}>
          <button className="w-full font-heading font-semibold text-sm px-6 py-3.5 rounded-xl bg-brand-600 text-white hover:bg-brand-700 transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
            Claim Your Session
          </button>
        </ClaimSessionDialog>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={SERVICES_HEADING.label}
          title={SERVICES_HEADING.title}
          gradientText={SERVICES_HEADING.gradientText}
          subtitle={SERVICES_HEADING.subtitle}
        />

        {/* Services grid — 4 pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {SERVICES.map((service, i) => (
            <FadeIn key={service.title} delay={0.1 + i * 0.1}>
              <ServiceCard service={service} index={i} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
