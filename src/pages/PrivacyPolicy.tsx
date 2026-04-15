import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import SEO from '@/components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy"
        description="Read the Script Theory privacy policy to understand how we collect, use, and protect your personal data in accordance with EU regulations."
      />
      <section className="relative pt-40 pb-20 bg-espresso-black text-textured-vellum overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="text-golden-ocher font-medium tracking-widest uppercase text-sm mb-4 block">Legal</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Privacy Policy</h1>
            <p className="text-xl text-textured-vellum/80 font-light max-w-2xl mx-auto">
              How we collect, use, and protect your personal data in accordance with EU regulations.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-textured-vellum">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-directors-crimson prose-p:text-espresso-black/80 prose-a:text-golden-ocher hover:prose-a:text-directors-crimson">
          <p><em>Last updated: March 24, 2026</em></p>

          <h2>1. Introduction</h2>
          <p>
            Welcome to Script Theory. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
          </p>
          <p>
            This policy complies with the General Data Protection Regulation (GDPR) and other relevant European Union data protection laws.
          </p>

          <h2>2. Data Controller</h2>
          <p>
            Script Theory is the controller and responsible for your personal data (collectively referred to as "we", "us" or "our" in this privacy policy). If you have any questions about this privacy policy, please contact us using the details set out below.
          </p>

          <h2>3. The Data We Collect About You</h2>
          <p>
            Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            <li><strong>Marketing and Communications Data</strong> includes your preferences in receiving marketing from us and our third parties and your communication preferences.</li>
          </ul>

          <h2>4. How We Use Your Personal Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you (e.g., providing coaching services).</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
            <li>Where you have provided explicit consent.</li>
          </ul>

          <h2>5. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>

          <h2>6. Data Retention</h2>
          <p>
            We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or reporting requirements.
          </p>

          <h2>7. Your Legal Rights</h2>
          <p>
            Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
          </p>
          <ul>
            <li>Request access to your personal data.</li>
            <li>Request correction of your personal data.</li>
            <li>Request erasure of your personal data.</li>
            <li>Object to processing of your personal data.</li>
            <li>Request restriction of processing your personal data.</li>
            <li>Request transfer of your personal data.</li>
            <li>Right to withdraw consent.</li>
          </ul>
          <p>
            If you wish to exercise any of the rights set out above, please contact us.
          </p>

          <h2>8. Contact Details</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </p>
          <p>
            Email: privacy@scripttheory.com<br />
            Address: [Your EU Business Address]
          </p>
        </div>
      </Section>
    </>
  );
};

export default PrivacyPolicy;
