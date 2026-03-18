import { SiGoogle } from 'react-icons/si';
import { FadeIn } from './FadeIn';
import { TestimonialCard } from './TestimonialCard';
import { SectionHeading } from './SectionHeading';

const TESTIMONIALS = [
  {
    name: 'Thahn',
    text: "I am blind from birth, now I can surf, feeling the ocean's power beneath the earth. Also I'm entering wrestling comps now and can lift my bodyweight. Who knew.",
  },
  {
    name: 'Tien',
    text: "I just want to do handstand push ups. Sometimes he says my name is Jeff. My trainer is really good at phrasing and we always have a good laugh. I think im attracted to him.",
  },
  {
    name: 'Soma',
    text: "I used to just sit at home playing video games and mining sulphur nodes in Rust or losing 10 rounds in a row of Valorant. I now get out and about, have lost 15kgs and am working towards my independence goals of getting a drivers licence. Ive also began attending school again after many many years.",
  },
  {
    name: 'Taylor',
    text: "I was lonely, barely left my house and sunk a lifetime away in video games. Getting in contact with this company was the best thing I ever did. We still play video games, but I've lost 17kg. I enjoy going to the gym and for outdoor activities and have a balance in my life i didnt think was possible, as well as an extensive amount of social support.",
  },
  {
    name: 'Cameron',
    text: "My loss of sight has been a blessing for me. Before I was an unfit office worker but now, unable to work, Project Fitcare has transformed me into a confident, healthy and stronger individual. The support I've been given is amazing and I highly recommend the services of this carer. Thank you Tommy.",
  },
  {
    name: 'Steph',
    text: "I've been with this company for 1 month and I'm already seeing progress in my weight loss journey all because they will push you. 100% recommend.",
  },
  {
    name: 'Megan',
    text: "I'm a pretty quiet person and was just looking for a different way to get fit. I had no idea what I was getting myself into when I started training with Project Fit Care. They really know how to inspire and motivate people. Somehow, after just a year, I went from being the shy girl in the corner to stepping into the ring for my first fight! I can't recommend Project Fit Care highly enough. They combine incredible knowledge and technique with a fun, easygoing atmosphere, which means training is always the highlight of your day.",
  },
  {
    name: 'David',
    text: "I used to be very lanky \u2014 at 6'3\" and 74kg with extremely low body fat. Thanks to the coaching at Project Fit Care, I'm now 84kg. The weight gain hasn't been body fat; instead, it's been lean muscle development, particularly in the areas we focused on during training. Not only do I enjoy coming to the gym three times a week, but I've also gained a level of confidence I've never had before. Training with Project Fit Care has made a huge difference for me.",
  },
  {
    name: 'Megan',
    text: "I decided to enlist a trainer to work their magic \u2014 I wanted to tone up and, of course, see results quickly! Training with Project Fit Care has been absolutely awesome. When you book a session, you get complete focus and attention. They're incredibly committed to proper form in every exercise, which makes it really reassuring to know you're training with someone who truly knows their stuff. They take the time to understand your goals and will push you hard to help you achieve them. And once you reach those goals, the bar gets set a little higher so you can keep progressing. On top of that, the atmosphere is supportive and fun \u2014 even during a 7am session there's always a laugh! If you're willing to put in the time, Project Fit Care will definitely help you achieve results and more.",
  },
];



const GOOGLE_REVIEWS_URL = 'https://share.google/doHUgtSWqOnzZID4r';

const COLUMNS = 3;
const getCardKey = (name: string, index: number) => `${name}-${index}`;
const getCardDelay = (index: number) => 0.05 + (index % COLUMNS) * 0.1;

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          label="Testimonials"
          title="Real Stories, Real"
          gradientText="Results"
        />

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {TESTIMONIALS.map((testimonial, i) => (
            <FadeIn key={getCardKey(testimonial.name, i)} delay={getCardDelay(i)}>
              <TestimonialCard name={testimonial.name} text={testimonial.text} />
            </FadeIn>
          ))}
        </div>

        {/* Google Reviews link */}
        <FadeIn delay={0.6}>
          <div className="flex justify-center mt-10 sm:mt-14">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 bg-white text-sm font-sans font-medium text-slate-700 hover:border-brand-200 hover:text-brand-700 hover:shadow-sm transition-all duration-200"
            >
              <SiGoogle className="w-4 h-4" style={{ color: '#4285F4' }} />
              See more reviews on Google
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
