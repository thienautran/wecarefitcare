import { useState } from 'react';
import { LuHeartPulse, LuHandshake, LuStethoscope } from 'react-icons/lu';
import { MdDirectionsRun } from 'react-icons/md';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../ui/Tabs';
import { SectionHeading } from './SectionHeading';
import { ServiceTabCard } from './ServiceTabCard';
import type { ServiceTabData } from './ServiceTabCard';

/* ─── Copy ─── */

const HEADING = {
  label: 'Our Services',
  title: 'The Four Pillars of',
  gradientText: 'Support We Deliver',
  subtitle:
    'Supporting active, connected & independent lives — aligned with NDIS billables and designed to deliver real outcomes across every area of your wellbeing.',
};

const SERVICES: ServiceTabData[] = [
  {
    icon: LuHeartPulse,
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
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Person doing strength training in a well-lit gym',
  },
  {
    icon: MdDirectionsRun,
    title: 'Sports & Fitness',
    description:
      "Martial arts? Surfing? Hiking? Learning footy? Fishing? Or maybe you're the next big Paralympian looking to build strength and conditioning for your sport. Whatever your goal, we're here to help you take the first step. With supportive coaching, tailored training, and a community that has your back, you'll gain the skills, confidence, and motivation to chase what excites you.",
    services: [
      'Skill-Based Sports Programs',
      'Outdoor Recreation Programs',
      'Adaptive & Inclusive Sports Sessions',
    ],
    image: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Person surfing a wave at sunset',
  },
  {
    icon: LuHandshake,
    title: 'Social & Community',
    description:
      "Everyone deserves the opportunity to feel connected, included, and confident in their community. Our Social & Lifestyle supports are designed to help you stay active, build meaningful relationships, and take part in the activities that matter most to you. Whether it's exploring new hobbies, joining local clubs, or developing social confidence, we provide flexible support tailored to your interests, goals, and lifestyle.",
    services: [
      'Community Participation Programs',
      'Social Skills & Confidence Building',
      'Recreational & Leisure Activities',
      'Support to Access Local Clubs & Groups',
      'Custom & Tailored Support — flexible programs designed around your interests and goals',
    ],
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Group of diverse friends laughing and socializing outdoors',
  },
  {
    icon: LuStethoscope,
    title: 'Allied Health',
    description:
      'We can connect you with the right allied health and professional services to support your goals. Whether you need physiotherapy, occupational therapy, speech therapy, or other specialist support, we help link you to trusted providers and ensure your fitness and lifestyle plan complements the broader care you receive.',
    services: [],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
    imageAlt: 'Healthcare professional consulting with a patient',
  },
];

/* ─── Main Section ─── */

export default function ServicesTabbedSection() {
  const [activeTab, setActiveTab] = useState('physical-health');
  const shouldReduceMotion = useReducedMotion();

  const tabKeys = ['physical-health', 'sports-fitness', 'social-community', 'allied-health'];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          label={HEADING.label}
          title={HEADING.title}
          gradientText={HEADING.gradientText}
          subtitle={HEADING.subtitle}
        />

        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* ── Tab bar ── */}
          <TabsList className="flex flex-wrap sm:flex-nowrap gap-1 mb-2">
            {SERVICES.map((service, i) => (
              <TabsTrigger
                key={tabKeys[i]}
                value={tabKeys[i]}
                className="flex items-center gap-2 text-xs sm:text-sm"
              >
                <service.icon className="w-3.5 h-3.5 hidden sm:inline-block" />
                <span className="truncate">{service.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* ── Tab panels ── */}
          <AnimatePresence mode="wait">
            {SERVICES.map((service, i) =>
              activeTab === tabKeys[i] ? (
                <TabsContent key={tabKeys[i]} value={tabKeys[i]} forceMount>
                  <motion.div
                    initial={shouldReduceMotion ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={shouldReduceMotion ? undefined : { opacity: 0, filter: 'blur(4px)', scale: 0.98 }}
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { duration: 0.3, ease: 'easeOut' }
                    }
                  >
                    <ServiceTabCard service={service} tabKey={tabKeys[i]} />
                  </motion.div>
                </TabsContent>
              ) : null
            )}
          </AnimatePresence>
        </Tabs>
      </div>
    </section>
  );
}
