import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { SafeEmail } from '@/components/SafeEmail';
import { Mail, Calendar, Linkedin, MessageSquare, Clock, Globe } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const Contact = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2671&auto=format&fit=crop" 
            alt="Contact atmosphere" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-espresso-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-golden-ocher uppercase tracking-widest text-sm font-bold mb-4 block">
              Get In Touch
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-textured-vellum">
              Start the <br />
              <span className="italic text-golden-ocher">Conversation.</span>
            </h1>
            <p className="text-xl md:text-2xl text-textured-vellum/90 mb-12 max-w-2xl font-light leading-relaxed italic font-serif">
              If you’re here, something about the way I work has resonated. Good. That’s how the best creative partnerships start.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-textured-vellum">
        <div className="grid md:grid-cols-2 gap-20 max-w-7xl mx-auto px-6 lg:px-12">
          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="space-y-12"
          >
            <motion.div variants={fadeInUp} className="bg-white p-10 rounded-[3rem] border border-espresso-black/5 shadow-sm">
              <div className="w-16 h-16 bg-textured-vellum rounded-full flex items-center justify-center mb-8 shadow-sm">
                <Calendar size={28} className="text-directors-crimson" />
              </div>
              <h3 className="text-3xl font-serif text-directors-crimson mb-4">Discovery Call</h3>
              <p className="text-espresso-black/70 text-lg leading-relaxed mb-8">
                A free 30-minute video conversation. We’ll talk about where you are with your writing, what you’re looking for, and whether we’re a good match. No pitch, no obligation — just an honest exchange.
              </p>
              <Button variant="secondary" className="px-8 py-4">
                Book Your Call
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-white p-10 rounded-[3rem] border border-espresso-black/5 shadow-sm">
              <div className="w-16 h-16 bg-textured-vellum rounded-full flex items-center justify-center mb-8 shadow-sm">
                <Mail size={28} className="text-golden-ocher" />
              </div>
              <h3 className="text-3xl font-serif text-directors-crimson mb-4">Email</h3>
              <p className="text-espresso-black/70 text-lg leading-relaxed mb-8">
                I typically respond within 48 hours. When you write, it’s helpful to share a brief description of your project and where you are in the writing process.
              </p>
              <SafeEmail user="contact" domain="scriptheory.com" className="inline-flex items-center text-xl text-directors-crimson hover:text-golden-ocher transition-colors font-serif italic border-b border-directors-crimson/20 pb-1 hover:border-golden-ocher" />
            </motion.div>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 pt-8 px-4">
              <div>
                <div className="flex items-center gap-2 mb-3 text-directors-crimson text-sm uppercase tracking-widest font-bold">
                  <Globe size={18} /> Languages
                </div>
                <p className="text-espresso-black/70 text-lg">
                  English, French, Spanish, Greek
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3 text-directors-crimson text-sm uppercase tracking-widest font-bold">
                  <Clock size={18} /> Response Time
                </div>
                <p className="text-espresso-black/70 text-lg">
                  Within 48 hours
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white p-10 md:p-16 border border-espresso-black/5 shadow-sm rounded-[3rem] h-fit"
          >
            <h3 className="text-4xl font-serif text-directors-crimson mb-10 flex items-center gap-4">
              <MessageSquare className="text-golden-ocher" size={32} /> Send a Message
            </h3>
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-widest text-espresso-black/60 mb-3 font-bold">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-textured-vellum/50 border border-espresso-black/10 p-5 rounded-xl focus:outline-none focus:border-golden-ocher focus:bg-white transition-all text-lg"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-widest text-espresso-black/60 mb-3 font-bold">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-textured-vellum/50 border border-espresso-black/10 p-5 rounded-xl focus:outline-none focus:border-golden-ocher focus:bg-white transition-all text-lg"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-widest text-espresso-black/60 mb-3 font-bold">Subject</label>
                <div className="relative">
                  <select 
                    id="subject" 
                    className="w-full bg-textured-vellum/50 border border-espresso-black/10 p-5 rounded-xl focus:outline-none focus:border-golden-ocher focus:bg-white transition-all appearance-none text-lg"
                  >
                    <option>Course Inquiry</option>
                    <option>Consultation Inquiry</option>
                    <option>Mentoring</option>
                    <option>Writer for Hire</option>
                    <option>Other</option>
                  </select>
                  <div className="absolute right-5 top-1/2 transform -translate-y-1/2 pointer-events-none text-espresso-black/40">
                    <svg width="14" height="10" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-widest text-espresso-black/60 mb-3 font-bold">Message</label>
                <textarea 
                  id="message" 
                  rows={6}
                  className="w-full bg-textured-vellum/50 border border-espresso-black/10 p-5 rounded-xl focus:outline-none focus:border-golden-ocher focus:bg-white transition-all resize-none text-lg"
                  placeholder="Tell me about your project..."
                />
              </div>
              <Button variant="secondary" className="w-full justify-center py-5 text-lg">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Newsletter Section */}
      <Section className="bg-espresso-black text-textured-vellum relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 bg-golden-ocher/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="w-20 h-20 mx-auto bg-white/5 rounded-full flex items-center justify-center mb-8">
              <Mail className="w-10 h-10 text-golden-ocher" />
            </div>
            <h2 className="text-4xl md:text-5xl mb-6 font-serif">Join the Inner Circle</h2>
            <p className="text-xl opacity-80 max-w-2xl mx-auto font-light leading-relaxed">
              Get weekly insights on holistic screenwriting, character psychology, and the creative life. No fluff, just deep dives.
            </p>
          </motion.div>

          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 max-w-xl mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-8 py-5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-golden-ocher transition-colors text-lg"
            />
            <Button variant="primary" className="whitespace-nowrap bg-golden-ocher text-espresso-black hover:bg-white px-8 py-5 text-lg">
              Subscribe
            </Button>
          </motion.form>
          <p className="mt-6 text-sm opacity-50 uppercase tracking-widest font-bold">Join 2,000+ writers. Unsubscribe anytime.</p>
        </div>
      </Section>
    </>
  );
};

export default Contact;
