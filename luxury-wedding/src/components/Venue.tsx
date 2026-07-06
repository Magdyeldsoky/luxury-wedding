'use client';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Venue() {
  return (
    <section className="w-full py-12 md:py-24 px-4 flex justify-center items-center z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="glass-panel max-w-4xl w-full p-6 md:p-12 rounded-2xl md:rounded-3xl text-center gold-border-glow"
      >
        <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center mx-auto mb-4 md:mb-6 text-luxury-gold">
          <MapPin className="w-4 h-4 md:w-5 md:h-5" />
        </div>
        
        <h2 className="font-alexandria text-xl md:text-3xl font-bold text-luxury-cream mb-2 md:mb-4">
          الموقع الجغرافي
        </h2>
        
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 md:gap-8 items-center mt-6 md:mt-8">
          <div className="text-center lg:text-right space-y-3 md:space-y-4 order-2 lg:order-1">
            <h3 className="font-alexandria text-lg md:text-xl font-semibold text-luxury-gold">مكان الحفل سيتم الإعلان عنه قريباً</h3>
            <p className="font-cairo text-luxury-cream/60 leading-relaxed text-xs md:text-sm">
              يتم حالياً اختيار موقع استثنائي راقٍ ومميز يلائم هذا الحدث السعيد. سنوافيكم بخرائط الاتجاهات وبطاقات المرور الجغرافي فور تحديد القاعة.
            </p>
          </div>
          
          <div className="w-full h-36 md:h-48 rounded-xl md:rounded-2xl bg-luxury-dark/40 border border-white/5 flex flex-col items-center justify-center p-4 text-center order-1 lg:order-2">
            <div className="w-2 h-2 rounded-full bg-luxury-gold animate-ping mb-2" />
            <p className="font-cairo text-[10px] md:text-xs text-luxury-gold font-light tracking-widest uppercase">قريباً الخريطة التفاعلية</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}