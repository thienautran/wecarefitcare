import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import HeroOverlay from './HeroOverlay';

import imgSurfing from '../../assets/images/surfing.jpg';
import imgGrappling from '../../assets/images/grappling.jpg';
import imgBJJ from '../../assets/images/bjj-training.jpg';
import imgGym from '../../assets/images/gym-stretching.jpg';
import imgGym2 from '../../assets/images/gym-stretching-2.jpg';
import imgLegPress from '../../assets/images/leg-press.jpg';
import imgFlying from '../../assets/images/bungee-flying.jpg';
import imgBungee from '../../assets/images/bungee-fitness.jpg';
import imgBBQ from '../../assets/images/bbq-cooking.jpg';

// Astro image imports return ImageMetadata objects with a .src property
const toSrc = (img: unknown): string =>
  typeof img === 'string' ? img : (img as { src: string }).src;

const CAROUSEL_IMAGES = [
  { src: toSrc(imgSurfing), alt: 'Participant surfing at a wave pool activity' },
  { src: toSrc(imgGrappling), alt: 'Grappling training session on the mats' },
  { src: toSrc(imgBJJ), alt: 'Brazilian jiu-jitsu training with the team' },
  { src: toSrc(imgGym), alt: 'Gym session with hands-on support' },
  { src: toSrc(imgGym2), alt: 'Gym stretching and recovery session' },
  { src: toSrc(imgLegPress), alt: 'Client using leg press machine at the gym' },
  { src: toSrc(imgFlying), alt: 'Bungee fitness fun with a participant' },
  { src: toSrc(imgBungee), alt: 'Bungee fitness session in the studio' },
  { src: toSrc(imgBBQ), alt: 'Community BBQ and cooking activity' },
];

export default function HeroCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 50 }, [
    Fade(),
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on('select', onSelect);
    onSelect();
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi]);

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: '100svh', minHeight: '560px', maxHeight: '900px' }}
      aria-label="Hero image carousel"
    >
      {/* Embla carousel viewport */}
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {CAROUSEL_IMAGES.map((img, i) => (
            <div className="relative flex-[0_0_100%] min-w-0 h-full" key={i}>
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover object-center"
                loading={i === 0 ? 'eager' : 'lazy'}
                decoding="async"
              />
              {/* Dark gradient overlay for text legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/65"
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hero text overlay */}
      <HeroOverlay />

      {/* Prev / Next Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-white hover:bg-white/30 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2"
        role="tablist"
        aria-label="Carousel slides"
      >
        {CAROUSEL_IMAGES.map((img, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === selectedIndex}
            aria-label={`Slide ${i + 1}: ${img.alt}`}
            onClick={() => scrollTo(i)}
            className={[
              'transition-all duration-300 rounded-full',
              i === selectedIndex ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50 hover:bg-white/80',
            ].join(' ')}
          />
        ))}
      </div>
    </section>
  );
}
