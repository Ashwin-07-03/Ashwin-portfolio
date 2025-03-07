'use client'

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);
  
  const fullText = "Hi, I'm Ashwin...";
  const roles = ["Software Developer", "Entrepreneur"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [isRoleChanging, setIsRoleChanging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePosition({ x, y });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const roleTimer = setInterval(() => {
      setRoleIndex(prev => (prev + 1) % roles.length);
    }, 4000);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(roleTimer);
    };
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (isTyping) {
      if (displayText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayText(fullText.substring(0, displayText.length + 1));
        }, 150); // Speed of typing
        return () => clearTimeout(timeout);
      } else {
        // Start deleting after a pause
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1));
        }, 100); // Speed of deleting
        return () => clearTimeout(timeout);
      } else {
        // Start typing again after a pause
        const timeout = setTimeout(() => {
          setIsTyping(true);
        }, 1000);
        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isTyping]);

  // Blinking cursor
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  // Role switching effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsRoleChanging(true);
      setTimeout(() => {
        setCurrentRole(prev => prev === roles[0] ? roles[1] : roles[0]);
        setIsRoleChanging(false);
      }, 500); // Wait for fade out before changing text
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden" ref={containerRef}>
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-[#080810]">
        {/* Geometric shapes */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="smallGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="0.5" />
              </pattern>
              <pattern id="grid" width="180" height="180" patternUnits="userSpaceOnUse">
                <rect width="180" height="180" fill="url(#smallGrid)" />
                <path d="M 180 0 L 0 0 0 180" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
        
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={`circle-${i}`}
            className="absolute rounded-full bg-gradient-to-b from-white/5 to-transparent blur-xl"
            style={{
              width: `${300 + i * 200}px`,
              height: `${300 + i * 200}px`,
              left: `${30 + i * 10}%`,
              top: `${40 - i * 10}%`,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.1, 0.15, 0.1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
        
        {/* Animated gradient lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`line-${i}`}
            className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
            style={{ top: `${20 * (i + 1)}%` }}
            animate={{
              x: [-1000, 1000],
              opacity: [0, 0.3, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Geometric elements */}
        <div className="absolute left-[15%] top-[20%] w-24 h-24 border border-white/10 rounded-full"></div>
        <div className="absolute right-[15%] bottom-[20%] w-40 h-40 border border-white/5 rounded-full"></div>
        <div className="absolute left-[75%] top-[60%] w-16 h-16 border border-white/5 rotate-45"></div>
        <div className="absolute left-[10%] bottom-[30%] w-20 h-20 border border-white/5 rotate-12"></div>
      </div>

      {/* Enhanced mouse follow effect */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.07) 0%, transparent 50%)`,
          opacity: 0.7,
        }}
      />

      {/* Content */}
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <motion.h1 
              className="text-7xl md:text-8xl lg:text-9xl font-light tracking-tight gradient-text flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span>{displayText}</span>
              <span className={`inline-block h-[0.9em] w-[2px] ml-2 bg-white ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </motion.h1>

            {/* Updated role animation */}
            <div className="relative h-8 mt-8">
              <div className="h-[1px] w-20 bg-white/20 mx-auto mb-6"></div>
              <motion.p
                key={currentRole}
                initial={{ opacity: 0, y: 10 }}
                animate={{ 
                  opacity: isRoleChanging ? 0 : 1,
                  y: isRoleChanging ? 10 : 0
                }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="text-xl text-white/80 tracking-wider uppercase"
              >
                {currentRole}
              </motion.p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center gap-6"
          >
            <Link 
              href="/#contact" 
              className="accent-button group"
            >
              <span className="relative z-10 flex items-center text-lg">
                Let's Connect
                <motion.svg 
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-20, 20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </section>
  );
};

export default Hero; 