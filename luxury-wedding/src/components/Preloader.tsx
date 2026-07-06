'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((old) => {
        if (old >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 600);
          return 100;
        }
        return old + Math.floor(Math.random() * 15) + 5;
      });
    }, 150);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 bg-luxury-black z-[10000] flex flex-col items-center justify-center font-cairo"
    >
      <div className="text-center relative">
        <motion.p
          initial={{ opacity: 0, letterSpacing: "2px" }}
          animate={{ opacity: 1, letterSpacing: "6px" }}
          className="text-luxury-gold font-light text-xs tracking-widest mb-6 uppercase"
        >
          البوابة الرقمية الملكية
        </motion.p>
        <h1 className="text-4xl md:text-5xl font-alexandria font-bold gold-gradient-text mb-12">
          مجدي &amp; رحمه
        </h1>
        <div className="w-48 h-[1px] bg-white/10 relative mx-auto overflow-hidden">
          <motion.div
            className="absolute top-0 right-0 h-full bg-luxury-gold"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeInOut" }}
          />
        </div>
        <p className="text-luxury-cream/40 font-alexandria text-sm mt-4 font-light">
          {Math.min(progress, 100)}%
        </p>
      </div>
    </motion.div>
  );
}