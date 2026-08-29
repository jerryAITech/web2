'use client';

import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function ScrollProgressBar() {
  const pathname = usePathname();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (pathname?.startsWith('/studio')) {
    return null;
  }

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500 origin-left z-[100] shadow-[0_0_12px_rgba(6,182,212,0.8)]"
    />
  );
}
