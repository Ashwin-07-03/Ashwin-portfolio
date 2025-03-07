'use client'

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.3], [50, 0]);
  
  const skills = [ 
    "Product Strategy", "Startup Development", 
    "Business Planning", "Team Building", "Learning about Universe"
  ];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={ref}
      className={`min-h-screen section-transition ${isVisible ? 'visible' : ''}`}
    >
      <div className="container-custom">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title text-center"
        >
          About
        </motion.h2>

        <div className="content-container">
          <motion.div 
            style={{ opacity, y }}
            className="max-w-4xl mx-auto"
          >
            <div className="rounded-xl overflow-hidden backdrop-blur-md border border-white/10 shadow-lg">
              <div className="p-8 md:p-10 bg-gradient-to-b from-black/40 to-black/20">
                <h3 className="text-2xl font-light mb-8 gradient-text">My Journey</h3>
                
                <div className="space-y-6 text-zinc-300">
                  <p className="leading-relaxed">
                  Driven by a vision that transcends conventional boundaries, I transform abstract ideas into ventures that subtly elevate everyday experiences. I navigate the intersection of innovation and practicality, crafting solutions that address real-world challenges while redefining how people interact with their surroundings. Every project is a journey toward creating impactful experiences that resonate on a deeper, personal level. 
                  </p>
                </div>
                
                <div className="mt-12">
                  <h4 className="text-xl font-light mb-6 text-zinc-200">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-3 mt-4">
                    {skills.map((skill, index) => (
                      <motion.span 
                        key={skill}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.05 }}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl pointer-events-none"></div>
    </section>
  );
};

export default About; 