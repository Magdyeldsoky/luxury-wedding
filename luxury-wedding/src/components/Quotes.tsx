'use client';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const quotes = [
  "الحب ليس أن تنظر إلى أحدهم، بل أن تنظروا في نفس الاتجاه.",
  "وفي عينيكِ أرى عمراً يفيضُ طمأنينة وسلاماً.",
  "بداية لقصة أبدية كُتبت بقلبين نبضا معاً كجسد واحد.",
  "أنتِ الميثاق والعهد الجميل، وأنتِ المسكن والمأمن الدافئ."
];

export default function Quotes() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full py-16 px-4 text-center z-10 relative bg-luxury-black/30">
      <div className="max-w-2xl mx-auto h-24 flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.8 }}
            className="font-cairo text-base md:text-xl text-luxury-champagne/80 font-light italic leading-relaxed"
          >
            &ldquo;{quotes[index]}&rdquo;
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}