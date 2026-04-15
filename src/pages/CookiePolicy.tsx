import React from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/Section';
import SEO from '@/components/SEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const CookiePolicy = () => {
  return (
    <>
      <SEO 
        title="Cookie Policy"
        description="Learn about how Script Theory uses cookies and similar technologies to improve your experience on our website."
      />
      <section className="relative pt-40 pb-20 bg-espresso-black text-textured-vellum overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <span className="text-golden-ocher font-medium tracking-widest uppercase text-sm mb-4 block">Legal</span>
            <h1 className="text-5xl md:text-6xl font-serif mb-6">Cookie Policy</h1>
            <p className="text-xl text-textured-vellum/80 font-light max-w-2xl mx-auto">
              Information about how we use cookies and similar technologies on our website.
            </p>
          </motion.div>
        </div>
      </section>

      <Section className="bg-textured-vellum">
        <div className="max-w-4xl mx-auto prose prose-lg prose-headings:font-serif prose-headings:text-directors-crimson prose-p:text-espresso-black/80 prose-a:text-golden-ocher hover:prose-a:text-directors-crimson">
          <p><em>Last updated: March 24, 2026</em></p>

          <h2>1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site.
          </p>
          <p>
            This policy explains how we use cookies and the choices you have. Except for strictly necessary cookies, we will only use cookies on your device if you consent to them.
          </p>

          <h2>2. How We Use Cookies</h2>
          <p>
            We use cookies for a variety of reasons detailed below. Unfortunately, in most cases, there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use.
          </p>

          <h2>3. Types of Cookies We Use</h2>
          
          <h3>Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for you to browse the website and use its features, such as accessing secure areas of the site. Without these cookies, services like shopping baskets or e-billing cannot be provided. They do not require your consent.
          </p>

          <h3>Performance & Analytics Cookies</h3>
          <p>
            These cookies collect information about how you use our website, like which pages you visited and which links you clicked on. None of this information can be used to identify you. It is all aggregated and, therefore, anonymized. Their sole purpose is to improve website functions.
          </p>

          <h3>Functionality Cookies</h3>
          <p>
            These cookies allow our website to remember choices you make (such as your user name, language or the region you are in) and provide enhanced, more personal features. These cookies can also be used to remember changes you have made to text size, fonts and other parts of web pages that you can customize.
          </p>

          <h3>Targeting & Advertising Cookies</h3>
          <p>
            These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of the advertising campaign. They are usually placed by advertising networks with the website operator’s permission.
          </p>

          <h2>4. Managing Cookies</h2>
          <p>
            You can manage your cookie preferences at any time by clicking the "Manage Preferences" or "Cookie Settings" link at the bottom of our website. Alternatively, most web browsers allow some control of most cookies through the browser settings.
          </p>
          <p>
            To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">allaboutcookies.org</a>.
          </p>
          <p>
            Please note that if you choose to disable cookies, it may affect how our website functions and you may not be able to access certain areas or features.
          </p>

          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time in order to reflect, for example, changes to the cookies we use or for other operational, legal or regulatory reasons. Please therefore re-visit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions about our use of cookies or other technologies, please email us at privacy@scripttheory.com.
          </p>
        </div>
      </Section>
    </>
  );
};

export default CookiePolicy;
