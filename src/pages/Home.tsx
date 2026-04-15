import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Section from '@/components/Section';
import Button from '@/components/Button';
import TestimonialsGrid from '@/components/TestimonialsGrid';
import { Layout, Users, HelpCircle, ArrowRight, MapPin, BookOpen, CheckCircle, Leaf } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.2 } }
};

const Home = () => {
  return (
    <>
      {/* Hero Section - Reference: Full width bg, left aligned text */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dt806m3nm/image/upload/v1774157513/hero-bg_vybmaz.jpg" 
            alt="Writer's desk" 
            className="w-full h-full object-cover -scale-x-100"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-espresso-black/80 via-espresso-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-3xl"
          >
            <motion.h1 
              variants={fadeInUp}
              className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-textured-vellum mt-[15mm] md:mt-0"
            >
              Your Characters <br />
              <span className="text-golden-ocher italic">Are Waiting.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl text-textured-vellum/90 mb-12 max-w-2xl font-light leading-relaxed"
            >
              Holistic screenwriting coaching for writers ready to go beyond formula and build living, emotionally powerful stories.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-6">
              <Button to="/contact" variant="primary" className="bg-golden-ocher text-espresso-black hover:bg-textured-vellum">
                Start Your Journey
              </Button>
              <Button to="/about" variant="outline" className="border-textured-vellum text-textured-vellum hover:bg-textured-vellum hover:text-espresso-black">
                Learn More
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section - Reference: "Our Services" Grid Style */}
      <Section className="bg-textured-vellum">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
            <span className="text-directors-crimson font-medium tracking-widest uppercase text-sm">The Symptoms</span>
            <h2 className="text-4xl md:text-5xl mt-4 text-espresso-black font-serif">
              Something Isn’t Working. <span className="italic text-golden-ocher">Can You Feel It?</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Layout,
                title: "The Structure Trap",
                text: "If you've completed the initial homework and read screenplays, then you would be familiar with screenplay structure. The three-act format, the conflict and the quest to find a resolution. You may have written your first draft, but something is missing. It feels dead on the page; it's not breathing like an organic being."
              },
              {
                icon: Users,
                title: "The Hollow Character",
                text: "Dialogue is specific to a character's personality; it forms the architecture of their very being. Without conformity and contextuality, how can we feel your character if they feel like wood on a page? But how do you build such a character that we find them believable?"
              },
              {
                icon: HelpCircle,
                title: "The Silent Gap",
                text: "You know that what you want to say isn't coming out on the page. The idea is there, the execution is not. You've read the books, attended the class and have awareness of what's wrong, but you can't connect the jigsaw pieces to link your ideas to the page. How do you fill the silent gap?"
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  delay: index * 0.2, 
                  duration: 0.8, 
                  ease: [0.22, 1, 0.36, 1] 
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group"
              >
                <div className="w-14 h-14 bg-textured-vellum rounded-full flex items-center justify-center mb-8 text-directors-crimson group-hover:bg-directors-crimson group-hover:text-white transition-colors duration-500">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-serif text-directors-crimson mb-4">{item.title}</h3>
                <p className="text-espresso-black/70 leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-2xl md:text-3xl font-serif text-directors-crimson italic">
              That gap is real. And it’s not a problem of technique.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* The Shift Section - New Addition */}
      <section className="bg-directors-crimson py-24 text-textured-vellum overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/dt806m3nm/image/upload/v1774150794/theshift_zd7yyc.jpg"
                  alt="The Shift - Connection" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeInUp} className="flex items-center gap-3 text-golden-ocher mb-6">
                <Leaf size={20} />
                <span className="tracking-widest uppercase text-sm font-medium">The Shift</span>
              </motion.div>
              
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                The Missing Piece Isn’t <br />
                in the Structure
              </motion.h2>

              <motion.div variants={fadeInUp} className="bg-white/5 p-8 rounded-2xl border border-white/10 mb-8 backdrop-blur-sm">
                <h3 className="text-xl font-serif text-golden-ocher italic mb-4">It’s in the Relationship</h3>
                <p className="text-textured-vellum/90 leading-relaxed font-serif">
                  The screenplays that move audiences are the ones where the writer had a living, breathing relationship with their characters and their storyverse.
                </p>
              </motion.div>

              <motion.p variants={fadeInUp} className="text-lg text-textured-vellum/80 leading-relaxed mb-10">
                When a writer steps inside the mind of their characters, lives and breathes their world, feels the sensory touch on a deeper level, and becomes one with their stories - that's when we step out of the page and become the story. This is the relationship between a writer and their story.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex gap-4 items-start">
                <div className="mt-1 flex-shrink-0 text-golden-ocher">
                  <Leaf size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2 font-serif">Holistic Screenwriting</h4>
                  <p className="text-textured-vellum/70 text-sm leading-relaxed">
                    Brings the art of realism to the page by capturing all the emotion and life experience of the writer through therapeutic means. Think of it as having a counselling session but your character is the patient and you are their guide. Screenwriting isn't just about the word, its truth lies within a spiritual context.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Method/Services Section - Reference: "How it Works" Glass Overlay */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dt806m3nm/image/upload/v1774155827/approach-bg_niw1nk.jpg" 
            alt="Nature background" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-espresso-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-20 text-center md:text-left"
          >
            <span className="text-golden-ocher font-medium tracking-widest uppercase text-sm">Our Approach</span>
            <h2 className="text-4xl md:text-6xl mt-4 text-textured-vellum font-serif">
              We Guide You Through <br />
              <span className="text-golden-ocher">Your Creative Recovery</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Holistic Courses",
                desc: "A structured journey from screenplay fundamentals to deep character and storyverse development.",
                link: "/services#courses"
              },
              {
                title: "Consultations",
                desc: "Bring your screenplay — complete or in progress — and let’s work on the deeper questions together.",
                link: "/services#consultations"
              },
              {
                title: "Mentoring",
                desc: "Ongoing creative partnership focused on your projects, your career, and your growth as an artist.",
                link: "/services#mentoring"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-black/40 backdrop-blur-md border border-white/10 p-10 rounded-3xl hover:bg-black/60 transition-colors duration-300 flex flex-col"
              >
                <h3 className="text-2xl font-serif text-golden-ocher mb-4">{item.title}</h3>
                <p className="text-textured-vellum/80 leading-relaxed mb-8 flex-grow">
                  {item.desc}
                </p>
                <div className="mt-auto">
                  <Button 
                    to={item.link} 
                    variant="secondary"
                    className="py-3 px-6 text-sm"
                  >
                    Explore
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Reference: "Why Choose Us" Split Layout */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-directors-crimson font-medium tracking-widest uppercase text-sm">The Guide</span>
            <h2 className="text-4xl md:text-6xl mt-4 mb-8 text-espresso-black font-serif leading-tight">
              A Coach Who Writes. <br />
              <span className="text-golden-ocher italic">A Writer Who Coaches.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-espresso-black/70 leading-relaxed mb-10">
              <p>
                As a working screenwriter who brings over a decade of professional experience to the table, I bring to coaching what I bring to my own work - analytics and dedication.
              </p>
              <p>
                I won't beat around the bush when it comes to feedback, I'll bring to you a raw and honest approach because that's what will help you flourish.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="text-golden-ocher" size={24} />
                  <h4 className="font-bold text-espresso-black">Global View</h4>
                </div>
                <p className="text-sm text-espresso-black/60">Travelled to 60+ countries, bringing cultural depth.</p>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="text-golden-ocher" size={24} />
                  <h4 className="font-bold text-espresso-black">Deep Experience</h4>
                </div>
                <p className="text-sm text-espresso-black/60">Mentoring talent for over a decade.</p>
              </div>
            </div>

            <Button to="/about" variant="secondary">
              Read My Full Story
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://res.cloudinary.com/dt806m3nm/image/upload/v1774155825/portrait_iqhsrs.jpg" 
              alt="Mark Fyers" 
              className="w-full h-[700px] object-cover rounded-[3rem] shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl max-w-xs hidden md:block">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-golden-ocher/10 p-3 rounded-full text-golden-ocher">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <p className="font-bold text-espresso-black text-lg">Proven Method</p>
                  <p className="text-xs text-espresso-black/50">Years of refinement</p>
                </div>
              </div>
              <p className="text-espresso-black/70 text-sm italic">
                "The shift happens when you stop writing words and start writing experience."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="bg-textured-vellum">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-16"
          >
             <span className="text-directors-crimson font-medium tracking-widest uppercase text-sm">Testimonials</span>
             <h2 className="text-4xl md:text-5xl mt-4 text-espresso-black font-serif">Stories of Transformation</h2>
          </motion.div>
          <TestimonialsGrid />
        </div>
      </Section>

      {/* CTA Section - Reference: Large Background Image */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://res.cloudinary.com/dt806m3nm/image/upload/v1774158735/home-cta-bg_gvwac1.jpg" 
            alt="Forest path" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-espresso-black/60" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-serif text-textured-vellum mb-8 leading-tight"
          >
            Take the First Step to <br />
            <span className="text-golden-ocher italic">Better Storytelling</span>
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-textured-vellum/80 mb-12 max-w-2xl mx-auto space-y-4"
          >
            <p>With my carefully curated feedback and encouragement, you will have the tools to build a career that lives beyond the page and matters.</p>
            <p>Your readers are waiting for a story that lifts them. Let's build it together.</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button to="/contact" variant="primary" className="bg-golden-ocher text-espresso-black hover:bg-white hover:text-espresso-black px-10 py-5 text-lg shadow-2xl">
              Book Your Discovery Call
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
