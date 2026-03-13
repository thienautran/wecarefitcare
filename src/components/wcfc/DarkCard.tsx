import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

/* ─── Color variants using design-system tokens ─── */

const COLOR_MAP = {
  brand: {
    iconText: 'text-brand-400',
    glowBg: 'bg-brand-500/15',
    glowRing: 'border-brand-400/25',
    hoverBorder: 'group-hover:border-brand-400/40',
    hoverGlow: 'group-hover:shadow-[0_0_24px_rgb(var(--wcfc-brand-500)/0.15)]',
  },
  accent: {
    iconText: 'text-accent-400',
    glowBg: 'bg-accent-500/15',
    glowRing: 'border-accent-400/25',
    hoverBorder: 'group-hover:border-accent-400/40',
    hoverGlow: 'group-hover:shadow-[0_0_24px_rgb(var(--wcfc-accent-500)/0.15)]',
  },
  purple: {
    iconText: 'text-brand-300',
    glowBg: 'bg-brand-400/15',
    glowRing: 'border-brand-300/25',
    hoverBorder: 'group-hover:border-brand-300/40',
    hoverGlow: 'group-hover:shadow-[0_0_24px_rgb(var(--wcfc-brand-400)/0.15)]',
  },
  sky: {
    iconText: 'text-accent-300',
    glowBg: 'bg-accent-400/15',
    glowRing: 'border-accent-300/25',
    hoverBorder: 'group-hover:border-accent-300/40',
    hoverGlow: 'group-hover:shadow-[0_0_24px_rgb(var(--wcfc-accent-400)/0.15)]',
  },
} as const;

export type DarkCardColor = keyof typeof COLOR_MAP;

/* ─── Props ─── */

interface DarkCardBaseProps {
  title: string;
  description: string;
  color?: DarkCardColor;
}

interface DarkCardIconProps extends DarkCardBaseProps {
  icon: IconDefinition;
  emoji?: never;
}

interface DarkCardEmojiProps extends DarkCardBaseProps {
  emoji: string;
  icon?: never;
}

export type DarkCardProps = DarkCardIconProps | DarkCardEmojiProps;

/* ─── Component ─── */

export function DarkCard({ title, description, color = 'brand', icon, emoji }: DarkCardProps) {
  const c = COLOR_MAP[color];

  return (
    <div
      className={`group relative rounded-2xl bg-white/[0.04] border border-white/[0.08] overflow-hidden transition-all duration-300 h-full hover:bg-white/[0.07] ${c.hoverBorder} ${c.hoverGlow} hover:-translate-y-1`}
    >
      <div className="flex flex-col items-center text-center p-7 sm:p-8">
        {/* Icon / Emoji container */}
        <div className="relative mb-5">
          {/* Soft glow behind icon */}
          <div
            className={`absolute inset-0 ${c.glowBg} rounded-full blur-xl scale-150 opacity-60 group-hover:opacity-100 transition-opacity duration-500`}
          />
          <div
            className={`relative w-14 h-14 rounded-2xl ${c.glowBg} border ${c.glowRing} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
          >
            {icon ? (
              <FontAwesomeIcon icon={icon} className={`w-6 h-6 ${c.iconText}`} />
            ) : (
              <span className="text-2xl leading-none">{emoji}</span>
            )}
          </div>
        </div>

        {/* Text */}
        <h4 className="font-heading font-semibold text-white text-base sm:text-lg mb-2 leading-snug">
          {title}
        </h4>
        <p className="font-sans text-sm text-slate-400 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
