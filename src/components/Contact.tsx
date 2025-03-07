'use client'

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-white/5 to-transparent opacity-30" />
      </div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">Contact</h2>
          <h3 className="text-4xl font-light mb-6 gradient-text">Get in Touch</h3>
          <p className="text-secondary">
            Have a question or want to work together? Feel free to reach out.
          </p>
        </motion.div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl w-full"
          >
            <div className="contact-card h-full flex flex-col">
              <div>
                <h3 className="text-xl font-light mb-6 gradient-text">Contact Information</h3>
                
                <div className="space-y-6">
                  <a href="mailto:vkashwin3@gmail.com" className="social-link">
                    <div className="p-2 rounded-lg bg-white/5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    vkashwin3@gmail.com
                  </a>

                  <a
                    href="https://x.com/Ashwin_VKk?t=Q98vebfydnXZznve-c5VuA&s=09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <div className="p-2 rounded-lg bg-white/5">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5.315 3.401a1 1 0 011.317-.366l3.707 1.834a1 1 0 01.497.958M8.901 20.131a1 1 0 01-1.317.366l-3.707-1.834a1 1 0 01-.497-.958M16.315 3.401a1 1 0 011.317.366l3.707 1.834a1 1 0 01.497.958M19.901 20.131a1 1 0 01-1.317-.366l-3.707-1.834a1 1 0 01-.497-.958M22 7L17 12h-3l-2-2h-4l-2 2H3" />
                      </svg>
                    </div>
                    @Ashwin_VKk
                  </a>
                </div>
              </div>

              <div className="mt-auto pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-sm text-secondary">Available for new projects</p>
                </div>
                <p className="text-xs text-tertiary">
                  Expected response time: <span className="text-secondary">24-48 hours</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
