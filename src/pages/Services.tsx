import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import Button from '@/components/Button';
import FAQ from '@/components/FAQ';
import SEO from '@/components/SEO';
import { ArrowRight, Check, Star, Clock, Calendar, Film, PenTool } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const Services = () => {
  return (
    <>
      <SEO 
        title="Screenwriting Services"
        description="Explore holistic screenwriting courses, script consultations, and private mentoring designed to help you build emotionally powerful stories."
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1519682337058-a94d519337bc?q=80&w=2670&auto=format&fit=crop" 
            alt="Library atmosphere" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-espresso-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-golden-ocher uppercase tracking-widest text-sm font-bold mb-4 block">
              Work With Me
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-textured-vellum">
              Depth & <br />
              <span className="italic text-golden-ocher">Craft.</span>
            </h1>
            <p className="text-xl md:text-2xl text-textured-vellum/90 mb-12 max-w-2xl font-light leading-relaxed">
              Going deeper into your characters, your story, and yourself to create writing that is emotionally alive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Section */}
      <Section id="courses" className="bg-textured-vellum">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-directors-crimson font-medium tracking-widest uppercase text-sm">The Foundation</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-8 text-espresso-black font-serif">
                Holistic Screenwriting <br />
                <span className="italic text-golden-ocher">Courses</span>
              </h2>
              <p className="text-espresso-black/70 text-lg leading-relaxed mb-8">
                For writers ready to build or rebuild their craft from the ground up. Whether you're starting from scratch or looking to deepen your understanding of character and storyverse.
              </p>
              
              <div className="space-y-4 mb-10">
                {[
                  "Weekly two-hour group sessions",
                  "The 10 Commandments framework",
                  "Deep dives into story arc",
                  "Personal feedback weekly"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-espresso-black/80">
                    <div className="w-1.5 h-1.5 rounded-full bg-golden-ocher" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1516979187457-637abb4f9353?q=80&w=2670&auto=format&fit=crop" 
                alt="Writing workshop" 
                className="w-full h-[600px] object-cover rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>

          {/* Course Options - Clean Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-3xl border border-espresso-black/5 hover:border-golden-ocher/30 transition-colors duration-300">
              <h3 className="text-2xl font-serif text-espresso-black mb-2">6-Month Course</h3>
              <p className="text-3xl font-light text-directors-crimson mb-6">€1,799</p>
              <p className="text-espresso-black/60 mb-8 leading-relaxed">
                Develops innate skills from the ground up. Perfect for writers who want a rigorous, supported introduction.
              </p>
              <Button to="/contact" variant="outline" className="w-full justify-center border-espresso-black/20 hover:bg-espresso-black hover:text-white">
                Inquire Now
              </Button>
            </div>

            <div className="bg-espresso-black p-10 rounded-3xl text-textured-vellum relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-golden-ocher text-espresso-black text-xs font-bold px-4 py-2 rounded-bl-xl uppercase tracking-widest">
                Most Popular
              </div>
              <h3 className="text-2xl font-serif text-white mb-2">12-Month Course</h3>
              <p className="text-3xl font-light text-golden-ocher mb-6">€3,199</p>
              <p className="text-white/60 mb-8 leading-relaxed">
                Everything in the 6-month course, taken deeper. Focus on writing a full-length feature screenplay.
              </p>
              <Button to="/contact" variant="primary" className="w-full justify-center bg-golden-ocher text-espresso-black hover:bg-white">
                Inquire Now
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Consultations - 3 Column Card Layout */}
      <Section id="consultations" className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-golden-ocher font-medium tracking-widest uppercase text-sm">The Deep Dive</span>
            <h2 className="text-4xl md:text-6xl mt-4 text-directors-crimson font-serif">
              Script Consultations
            </h2>
            <p className="text-espresso-black/60 text-xl italic mt-4 font-serif">
              For writers with a screenplay that needs expert analysis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Silver Package",
                price: "€399",
                duration: "4 Weeks",
                desc: "Four weekly 60-minute sessions exploring your story's characters and structure. Ideal for writers at an early stage.",
                icon: Star,
                highlight: true
              },
              {
                name: "Gold Package",
                price: "€1,199",
                duration: "3 Months",
                desc: "Twelve weekly 60-minute sessions for deeper exploration. Extended character and storyverse development with ongoing notes.",
                icon: Film,
                highlight: false
              },
              {
                name: "Platinum Package",
                price: "€2,399",
                duration: "6 Months",
                desc: "Twenty-four weekly sessions for comprehensive development. Includes full script read, detailed notes, and career pathway.",
                icon: PenTool,
                highlight: false
              }
            ].map((pkg, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-textured-vellum p-8 md:p-10 rounded-xl flex flex-col ${pkg.highlight ? 'border border-golden-ocher' : 'border border-espresso-black/5'}`}
              >
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                  <pkg.icon size={24} className={pkg.highlight ? "text-golden-ocher" : "text-directors-crimson"} />
                </div>
                
                <h3 className="text-2xl font-serif text-directors-crimson mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs uppercase tracking-widest text-espresso-black/40 font-bold mb-6">
                  {pkg.duration}
                </p>
                
                <p className="text-4xl font-light text-espresso-black mb-8">
                  {pkg.price}
                </p>
                
                <p className="text-espresso-black/70 leading-relaxed font-serif mb-10 flex-grow">
                  {pkg.desc}
                </p>
                
                <Button 
                  to="/contact" 
                  variant="secondary"
                  className="w-full mt-auto"
                >
                  Book Consultation
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mentoring & Hire - Split Sections */}
      <Section id="mentoring" className="bg-terracotta-sand/10">
        <div className="max-w-7xl mx-auto space-y-32">
          {/* Mentoring */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1470549638415-0a0755be0619?q=80&w=2670&auto=format&fit=crop" 
                alt="Mentoring" 
                className="w-full h-[500px] object-cover rounded-[3rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-directors-crimson font-medium tracking-widest uppercase text-sm">The Partnership</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-espresso-black font-serif">
                Private Mentoring
              </h2>
              <p className="text-espresso-black/70 text-lg leading-relaxed mb-8">
                For writers who know that real growth happens over time. A dedicated, personalised guidance system invested in your development as both a writer and a creative professional.
              </p>
              <Button to="/contact" variant="secondary">
                Discuss Mentorship
              </Button>
            </div>
          </div>

          {/* Hire */}
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-directors-crimson font-medium tracking-widest uppercase text-sm">The Collaboration</span>
              <h2 className="text-4xl md:text-5xl mt-4 mb-6 text-espresso-black font-serif">
                Screenwriter for Hire
              </h2>
              <p className="text-espresso-black/70 text-lg leading-relaxed mb-8">
                For production companies and independent producers seeking a screenwriter for feature films, TV pilots, or narrative projects. Bringing a decade of experience and cultural versatility to your story.
              </p>
              <Button to="/contact" variant="outline" className="border-espresso-black text-espresso-black hover:bg-espresso-black hover:text-white">
                View Portfolio
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2656&auto=format&fit=crop" 
                alt="Filmmaking" 
                className="w-full h-[500px] object-cover rounded-[3rem] shadow-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-white border-t border-espresso-black/5">
        <FAQ />
      </Section>

      {/* CTA Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1470549638415-0a0755be0619?q=80&w=2670&auto=format&fit=crop" 
            alt="Forest path" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-espresso-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-textured-vellum mb-8 leading-tight">
            Ready to Go Deeper?
          </h2>
          <p className="text-xl text-textured-vellum/80 mb-12 max-w-2xl mx-auto">
            The writers I work with come because they sense there is more in their stories than they’ve been able to access on their own.
          </p>
          <Button to="/contact" variant="primary" className="bg-textured-vellum text-espresso-black hover:bg-golden-ocher hover:text-white px-10 py-5 text-lg shadow-2xl">
            Book Your Discovery Call
          </Button>
        </div>
      </section>
    </>
  );
};

export default Services;
