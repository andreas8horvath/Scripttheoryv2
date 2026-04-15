import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: "Mark is the writer/ proofreader that will not sugar coat anything if your projects need work.. However this isn't necessarily a bad thing , he has a way of making you find your best self at writing. And it is difficult for us writers to critique our own projects as we are so caught up with our own work.. But with the help of Mark you will really start seeing your work improve.. whether that is in dialogue, character development, or the plot..\n\nIf you are just starting out he will work profusely with you to bring your full potential out of you.. I laugh and we both laugh today at this.. But he comes across as Gordon Ramsey of the writing world but seriously he's phenomenal at mentoring and guiding yourself on the right path to bring your full potential out of you..\n\nSo if you are looking for a great writer/mentor he's your man.. He's like Yoda with all the knowledge and Gordon Ramsey with the constructive criticism that will drive you and motivate you.. To give you a shot at getting you where you need to be in the writing world..\n\nThanks for everything Mark, you have been a great teacher and I'm glad we met..",
    author: "Rhys B.",
    isLong: true
  },
  {
    id: 2,
    text: "Mark was exactly what I needed to get my script unstuck. His feedback is incredibly sharp and precise, but it never felt like a lecture. Instead, he opened up this great dialogue that helped me actually step away from the page and see the story through the audience's eyes. He caught all the things I was totally blind to and helped me find the heart of the story again. I can’t recommend him enough.",
    author: "NI",
    isLong: false
  },
  {
    id: 3,
    text: "Mark is a truly gifted writer. He has an instinctive grasp of classical Hollywood storytelling — he knows exactly when to develop a character, when to build tension, and how to pace a narrative to keep audiences hooked. What surprises people is how naturally funny he is, even though his main focus is serious political drama. His original scripts are creative, sharp, and feel perfectly at home in today’s modern TV landscape. He’s underrated, and that won’t last long.",
    author: "MR",
    isLong: false
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function TestimonialsGrid() {
  const longTestimonial = testimonials.find(t => t.isLong);
  const shortTestimonials = testimonials.filter(t => !t.isLong);

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-stretch">
      {/* Long Testimonial Column */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-espresso-black/5 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-shadow duration-500"
      >
        <Quote className="absolute -top-4 -right-4 w-32 h-32 text-golden-ocher/5 group-hover:text-golden-ocher/10 transition-colors duration-500" />
        <div>
          <Quote className="text-golden-ocher mb-6 w-10 h-10" />
          <div className="space-y-4">
            {longTestimonial?.text.split('\n\n').map((para, i) => (
              <p key={i} className="text-lg md:text-xl font-serif leading-relaxed text-espresso-black/80 italic">
                {para}
              </p>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-espresso-black/5">
          <span className="block text-sm font-medium tracking-widest uppercase text-directors-crimson">
            {longTestimonial?.author}
          </span>
        </div>
      </motion.div>

      {/* Short Testimonials Column */}
      <div className="flex flex-col gap-8">
        {shortTestimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-espresso-black/5 flex flex-col justify-between relative overflow-hidden group hover:shadow-xl transition-shadow duration-500 flex-1"
          >
            <Quote className="absolute -top-4 -right-4 w-24 h-24 text-golden-ocher/5 group-hover:text-golden-ocher/10 transition-colors duration-500" />
            <div>
              <Quote className="text-golden-ocher mb-4 w-8 h-8" />
              <p className="text-lg font-serif leading-relaxed text-espresso-black/80 italic">
                "{testimonial.text}"
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-espresso-black/5">
              <span className="block text-sm font-medium tracking-widest uppercase text-directors-crimson">
                {testimonial.author}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
