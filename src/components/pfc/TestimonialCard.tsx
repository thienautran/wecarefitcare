import { useState } from 'react';
import { LuCircleUserRound } from 'react-icons/lu';

interface TestimonialCardProps {
  name: string;
  text: string;
}

const CHAR_LIMIT = 200;

export function TestimonialCard({ name, text }: TestimonialCardProps) {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > CHAR_LIMIT;

  return (
    <div className="rounded-xl border border-brand-100 bg-white p-5 hover:border-brand-200 hover:shadow-sm transition-all duration-200 h-full">
      <div className="flex items-center gap-2 mb-3">
        <LuCircleUserRound className="w-5 h-5 flex-shrink-0 text-brand-500" />
        <h3 className="font-heading font-semibold text-slate-800">{name}</h3>
      </div>
      <p className={`font-sans text-sm text-slate-600 leading-relaxed ${isLong && !expanded ? 'line-clamp-3' : ''}`}>
        {text}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-2 font-sans text-xs font-medium text-brand-600 hover:text-brand-800 transition-colors duration-200"
        >
          {expanded ? 'Show less' : 'Read more'}
        </button>
      )}
    </div>
  );
}
