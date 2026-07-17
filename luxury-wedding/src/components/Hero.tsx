'use client';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen w-full flex flex-col items-center justify-center px-4 md:px-8 z-10 text-center select-none">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
        className="max-w-4xl w-full"
      >
        <p className="text-luxury-gold font-cairo font-light tracking-[0.15em] md:tracking-[0.25em] text-xs md:text-base mb-4 md:mb-6 uppercase">
          أهلاً بكم في ليلتنا المنتظرة
        </p>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 mb-6 md:mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-alexandria font-extrabold gold-gradient-text tracking-wide drop-shadow-2xl">
            مجدي
          </h1>
          <span className="text-xl md:text-4xl text-luxury-gold-light font-cairo font-light opacity-60 my-1 md:my-2 animate-pulse-slow">
            ❤️
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-alexandria font-extrabold gold-gradient-text tracking-wide drop-shadow-2xl">
هاجر          </h1>
        </div>

        <div className="w-16 md:w-24 h-[1px] bg-gradient-to-r from-transparent via-luxury-gold to-transparent mx-auto mb-6 md:mb-8" />
        
        <p className="font-cairo text-luxury-cream/70 text-base md:text-xl max-w-xl mx-auto leading-relaxed font-light px-2">
          ننسج من خيوط الحب فصلاً جديداً، ويشرفنا أن تكونوا شهوداً على ميثاقنا الغالي.
        </p>
      </motion.div>
    </section>
  );
}
