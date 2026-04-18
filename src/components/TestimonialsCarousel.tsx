import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    id: 1,
    text: "Mark is the writer/ proofreader that will not sugar coat anything if your projects need work.. However this isn't necessarily a bad thing , he has a way of making you find your best self at writing. And it is difficult for us writers to critique our own projects as we are so caught up with our own work.. But with the help of Mark you will really start seeing your work improve.. whether that is in dialogue, character development, or the plot..\n\nIf you are just starting out he will work profusely with you to bring your full potential out of you.. I laugh and we both laugh today at this.. But he comes across as Gordon Ramsey of the writing world but seriously he's phenomenal at mentoring and guiding yourself on the right path to bring your full potential out of you..\n\nSo if you are looking for a great writer/mentor he's your man.. He's like Yoda with all the knowledge and Gordon Ramsey with the constructive criticism that will drive you and motivate you.. To give you a shot at getting you where you need to be in the writing world..",
    author: "Rhys B.",
  },
  {
    id: 4,
    text: "I’ve had the opportunity to work closely with Mark as a scriptwriter, and I can confidently say he’s been a key part of bringing my projects to life. He has written multiple scripts for me, consistently delivering work that is emotionally engaging, sharp, and tailored to the vision we’re building.\n\nWhat really sets Mark apart is his creativity. He doesn’t just write scenes, he finds layers in characters, builds tension naturally, and understands how to make dialogue feel real and impactful on screen. Every script he’s delivered has elevated the project.\n\nOn top of that, he’s extremely reliable. He meets deadlines, communicates clearly, and stays consistent, which is rare and incredibly valuable in a collaborative process like this.\n\nIf you’re looking for a writer who is talented, professional, and genuinely invested in the work, Mark is someone you want on your team.",
    author: "GC",
  },
  {
    id: 2,
    text: "Mark was exactly what I needed to get my script unstuck. His feedback is incredibly sharp and precise, but it never felt like a lecture. Instead, he opened up this great dialogue that helped me actually step away from the page and see the story through the audience's eyes. He caught all the things I was totally blind to and helped me find the heart of the story again. I can’t recommend him enough.",
    author: "NI",
  },
  {
    id: 3,
    text: "Mark is a truly gifted writer. He has an instinctive grasp of classical Hollywood storytelling — he knows exactly when to develop a character, when to build tension, and how to pace a narrative to keep audiences hooked. What surprises people is how naturally funny he is, even though his main focus is serious political drama. His original scripts are creative, sharp, and feel perfectly at home in today’s modern TV landscape. He’s underrated, and that won’t last long.",
    author: "MR",
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const paginate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prevIndex) => (prevIndex + newDirection + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      paginate(1);
    }, 12000);
    return () => clearInterval(timer);
  }, [paginate]);

  const current = testimonials[currentIndex];

  return (
    <div className="relative w-full overflow-hidden py-4">
      {/* Background Decorative Element */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
        <Quote size={600} className="text-espresso-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <div className="min-h-[400px] md:min-h-[350px] flex flex-col justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.4 }
              }}
              className="w-full"
            >
              <div className="flex flex-col items-center text-center">
                <Quote size={40} className="text-golden-ocher mb-8 shrink-0" />
                
                <div className="space-y-6">
                  {current.text.split('\n\n').map((para, i) => (
                    <p 
                      key={i} 
                      className="font-serif leading-relaxed text-espresso-black/80 italic text-balance text-lg md:text-xl"
                    >
                      {currentIndex === 0 || currentIndex === 1 ? para : `"${para}"`}
                    </p>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12 group"
                >
                  <div className="h-px w-12 bg-golden-ocher/30 mx-auto mb-6 group-hover:w-24 transition-all duration-500" />
                  <span className="block text-sm font-semibold tracking-[0.2em] uppercase text-directors-crimson">
                    {current.author}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-8 mt-8">
          <button
            onClick={() => paginate(-1)}
            className="p-3 rounded-full border border-espresso-black/10 hover:border-golden-ocher hover:text-golden-ocher transition-all duration-300 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </button>

          {/* Indicators */}
          <div className="flex gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={cn(
                  "h-1.5 transition-all duration-500 rounded-full",
                  currentIndex === index 
                    ? "w-8 bg-golden-ocher" 
                    : "w-2 bg-espresso-black/10 hover:bg-espresso-black/30"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => paginate(1)}
            className="p-3 rounded-full border border-espresso-black/10 hover:border-golden-ocher hover:text-golden-ocher transition-all duration-300 group"
            aria-label="Next testimonial"
          >
            <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Mobile Swipe Text - Subtle Hint */}
      <div className="md:hidden text-center mt-6 text-[10px] uppercase tracking-[0.2em] text-espresso-black/30">
        Swipe to read more
      </div>
    </div>
  );
}
