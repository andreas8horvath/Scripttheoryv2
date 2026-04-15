import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import Button from '@/components/Button';
import SEO from '@/components/SEO';
import { MapPin, BookOpen, Film, Coffee, Globe, Heart, Mail, Feather, Compass, Anchor } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const About = () => {
  return (
    <>
      <SEO 
        title="About Mark Fyvers"
        description="Learn about Mark Fyvers, a working screenwriter and holistic coach with over a decade of experience in the global film and TV industry."
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop" 
            alt="Journey landscape" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-espresso-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="max-w-3xl"
          >
            <span className="text-golden-ocher uppercase tracking-widest text-sm font-bold mb-4 block">
              The Backstory
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-textured-vellum">
              The Story Behind <br />
              <span className="italic text-golden-ocher">The Story.</span>
            </h1>
            <p className="text-xl md:text-2xl text-textured-vellum/90 mb-12 max-w-2xl font-light leading-relaxed italic font-serif">
              "There is a moment in every screenplay where the character stops performing and starts being real."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Opening Hook & Pivotal Moment */}
      <Section className="bg-textured-vellum">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-2 md:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop" 
                alt="Writing desk" 
                className="w-full h-[700px] object-cover rounded-[3rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-1 md:order-2 space-y-8"
            >
              <motion.span variants={fadeInUp} className="text-directors-crimson font-medium tracking-widest uppercase text-sm">
                The Catalyst
              </motion.span>
              
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl text-espresso-black font-serif leading-tight">
                When the audience listens, the answer <span className="italic text-golden-ocher">becomes clearer...</span>
              </motion.h2>

              <motion.p variants={fadeInUp} className="text-espresso-black/70 text-lg leading-relaxed">
                I've spent over a decade trying to break down the subtleties, interwoven moments of magic that command a characters will to discover their true calling and rise against conflict.
              </motion.p>
              
              <motion.div variants={fadeInUp} className="bg-white p-10 rounded-3xl border border-espresso-black/5 mt-8">
                <h3 className="text-2xl text-directors-crimson font-serif mb-4">
                  The Pivotal Moment
                </h3>
                <p className="text-espresso-black/70 leading-relaxed">
                  What started as a fascination with storytelling and dreaming up wildly imaginative storylines, it became something else entirely when I was on the cusp of 30 and questioning my place in this world. At that point, screenwriting became more than just an interest - it became a catalyst for everything I stood for.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* The Journey */}
      <Section className="bg-directors-crimson text-textured-vellum">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.span variants={fadeInUp} className="text-golden-ocher font-medium tracking-widest uppercase text-sm">
                The Immersion
              </motion.span>
              
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-6xl text-white font-serif leading-tight">
                A Decade of <br />
                <span className="italic text-golden-ocher">Discovery.</span>
              </motion.h2>
              
              <motion.p variants={fadeInUp} className="text-white/70 text-lg leading-relaxed">
                Beginning with mentoring, workshops and consulting, I shifted towards writer-for-hire contracts with clients from as far afield as Australia and India whilst also honing my craft as a consultant and sharpening my skills as a freelance script analyst for production companies in London and Chicago.
              </motion.p>
              
              <motion.blockquote variants={fadeInUp} className="border-l-2 border-directors-crimson pl-6 py-2 my-8">
                <p className="text-2xl font-serif italic text-white/90 leading-relaxed">
                  "During this period, I travelled to thus far more than sixty countries, learning about people, cultures and embracing the power of storytelling through living real life moments."
                </p>
              </motion.blockquote>

              <motion.p variants={fadeInUp} className="text-white/70 text-lg leading-relaxed">
                The breakthrough came once I began working with actors who were preparing monologues for roles. Not only did it showcase how they prepared but it also brought me deeper into the story through their eyes, and moreover through the eyes of the characters they inhabited. That's when I began to comprehend the beauty of method writing as a style - a style that brought the stories to life and encouraged imagination.
              </motion.p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
               <img 
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=2574&auto=format&fit=crop" 
                alt="Travel 1" 
                className="w-full h-[400px] object-cover rounded-[2rem] mt-12 shadow-2xl"
                referrerPolicy="no-referrer"
              />
               <img 
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2673&auto=format&fit=crop" 
                alt="Travel 2" 
                className="w-full h-[400px] object-cover rounded-[2rem] shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* The Methodology */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-golden-ocher font-medium tracking-widest uppercase text-sm">The Approach</span>
            <h2 className="text-4xl md:text-6xl mt-4 text-directors-crimson font-serif">
              The Methodology
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-textured-vellum p-10 md:p-16 rounded-[3rem] border border-espresso-black/5"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                <Feather size={28} className="text-directors-crimson" />
              </div>
              <h3 className="text-3xl font-serif text-directors-crimson mb-6">Method Writing</h3>
              <p className="text-espresso-black/70 text-lg leading-relaxed mb-6">
                Method writing petitions the idea of a story being more than words on a page. With this style of writing, a screenwriter focuses on realism by investing in the heart of a story.
              </p>
              <p className="text-espresso-black/70 text-lg leading-relaxed mb-6">
                With method writing, you become the character and the story through one singular entity, while profoundly linking themes and audiences through connection.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-textured-vellum p-10 md:p-16 rounded-[3rem] border border-espresso-black/5"
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm">
                <Anchor size={28} className="text-golden-ocher" />
              </div>
              <h3 className="text-3xl font-serif text-directors-crimson mb-6">Analytical Intuition</h3>
              <p className="text-espresso-black/70 text-lg leading-relaxed mb-6">
                As a film/TV screenwriter, a holistic writing coach, and a deeply analytical person by nature, I've learnt to trust my intuition accordingly. My strength revolves around understanding both the structural mechanics and the emotional interface of storylines and characters.
              </p>
              <p className="text-espresso-black/70 text-lg leading-relaxed">
                Having lived and worked abroad over the course of a decade, I understand the challenges of portraying culturally specific stories in a global market environment.
              </p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Off The Page */}
      <Section className="bg-terracotta-sand/10">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-directors-crimson font-medium tracking-widest uppercase text-sm">Personal Touches</span>
            <h2 className="text-4xl md:text-5xl mt-4 mb-4 text-espresso-black font-serif">Off The Page</h2>
            <p className="text-espresso-black/60 text-xl italic font-serif">Because a writer needs a life to write about.</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: "Explorer", text: "Exploring new cities" },
              { icon: Film, title: "Cinephile", text: "Watching films for the mood" },
              { icon: Globe, title: "Linguist", text: "Butchering new languages" },
              { icon: Coffee, title: "Debater", text: "Arguing about TV endings" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl text-center border border-espresso-black/5 hover:border-golden-ocher/30 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto bg-textured-vellum rounded-full flex items-center justify-center mb-6 text-directors-crimson group-hover:text-golden-ocher transition-colors">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-serif text-espresso-black mb-3">{item.title}</h4>
                <p className="text-espresso-black/60">{item.text}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-16 text-2xl text-espresso-black/80 italic font-serif max-w-3xl mx-auto leading-relaxed"
          >
            "I am a dedicated outdoor and sports enthusiast, and someone who genuinely believes that every conversation with a stranger is potential material."
          </motion.p>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=2573&auto=format&fit=crop" 
            alt="Writing desk" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-espresso-black/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl md:text-7xl font-serif text-textured-vellum mb-8 leading-tight">
            Let's See What Your <br />
            <span className="italic text-golden-ocher">Story Needs.</span>
          </h2>
          <p className="text-xl text-textured-vellum/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            If my approach resonates, I’d love to hear about your project. Book a free discovery call and let’s talk about where you are and where your writing could go.
          </p>
          <Button to="/contact" variant="secondary" className="px-10 py-5 text-lg">
            Book a Discovery Call
          </Button>
        </div>
      </section>
    </>
  );
};

export default About;
