'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { ArrowUp, Rocket } from 'lucide-react';
import { usePathname } from 'next/navigation';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(Math.max(currentProgress, 0), 100));
      }

      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  // Calculate SVG circle strokeDashoffset for 360-degree progress ring
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 select-none"
        >
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="relative flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0c1424]/90 hover:bg-[#121e38] text-white border border-cyan-500/40 shadow-2xl backdrop-blur-xl group cursor-pointer"
            title="Scroll back to top"
            aria-label="Scroll to top"
          >
            {/* Circular Progress Ring */}
            <div className="relative w-6 h-6 flex items-center justify-center">
              <svg className="w-6 h-6 -rotate-90" viewBox="0 0 44 44">
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-gray-800"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="22"
                  cy="22"
                  r={radius}
                  className="stroke-teal-400 transition-all duration-150"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                />
              </svg>
              <ArrowUp className="w-3 h-3 text-teal-400 absolute group-hover:-translate-y-0.5 transition-transform" />
            </div>

            <span className="text-xs font-bold font-mono text-gray-200 group-hover:text-teal-300">
              {Math.round(scrollProgress)}%
            </span>

            <span className="hidden sm:inline-block text-xs font-semibold text-gray-400 group-hover:text-white">
              Back to Top
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
