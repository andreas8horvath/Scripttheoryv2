import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

const Section = ({ children, className, id, dark = false }: SectionProps) => {
  return (
    <section 
      id={id}
      className={cn(
        "py-24 px-6 lg:px-12 overflow-hidden",
        dark ? "bg-directors-crimson text-textured-vellum" : "bg-textured-vellum text-espresso-black",
        className
      )}
    >
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export default Section;
