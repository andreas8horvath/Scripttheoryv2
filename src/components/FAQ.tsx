import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

const faqs = [
  {
    question: "What makes this different from other screenwriting courses?",
    answer: "Most courses teach formula. I teach relationship — with your characters, your storyverse, and yourself. The holistic approach goes deeper than structure to address the emotional and psychological dimensions of writing that are usually ignored."
  },
  {
    question: "Do I need any experience?",
    answer: "For the courses, no. We start from scratch. For consultations and mentoring, you should have at least a project in development. The screenwriter-for-hire service is for producers with a project ready for professional writing."
  },
  {
    question: "How are sessions conducted?",
    answer: "Via Microsoft Teams. I’ll send you an invite in advance."
  },
  {
    question: "Can I work with you in a language other than English?",
    answer: "I can read screenplays in French, Spanish, and Greek, and conduct consultations in French. Note that feedback may have a slight English bias due to the nuances of language."
  },
  {
    question: "What if I’m writing a story that has no resemblance to my own life?",
    answer: "We all have traits or correlations between our characters and our own experiences. Through the Question Method™, we will discover those connections and use them to deepen your work."
  },
  {
    question: "How many people are in each course?",
    answer: "Six per class. This ensures personalised attention while benefiting from group dynamics and peer feedback."
  },
  {
    question: "What should I prepare before our first meeting?",
    answer: "Compile a list of questions you want answered. For consultations, send your script once payment is confirmed. For the Platinum package, we have an initial conversation before the script read."
  },
  {
    question: "Is there a payment plan?",
    answer: "Courses are paid monthly at €200/month. Consultations are paid in advance via the online booking system."
  }
];

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-espresso-black/10 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-6 text-left group"
      >
        <span className={cn(
          "text-lg font-medium transition-colors duration-300 pr-8",
          isOpen ? "text-directors-crimson" : "text-espresso-black group-hover:text-directors-crimson"
        )}>
          {question}
        </span>
        <span className={cn(
          "flex-shrink-0 transition-colors duration-300",
          isOpen ? "text-golden-ocher" : "text-espresso-black/40 group-hover:text-directors-crimson"
        )}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-espresso-black/80 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center mb-12 text-directors-crimson">Common Questions</h2>
      <div className="bg-white rounded-sm border border-espresso-black/5 p-6 md:p-8 shadow-sm">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}
