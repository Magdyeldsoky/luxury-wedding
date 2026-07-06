'use client';
import { useState, useRef } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
      audioRef.current.loop = true;
      audioRef.current.volume = 0.4;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(e => console.log("Audio play blocked by browser setup"));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-4 left-4 md:bottom-6 md:left-6 z-[999]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={togglePlay}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full glass-panel flex items-center justify-center border border-luxury-gold/30 text-luxury-gold shadow-lg cursor-pointer hover:bg-luxury-gold/10 transition-all duration-300"
      >
        {isPlaying ? (
          <div className="flex items-center gap-[2px] md:gap-[3px]">
            {[1, 2, 3, 4].map((i) => (
              <motion.span
                key={i}
                animate={{ height: [8, 18, 8] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                className="w-[2px] bg-luxury-gold rounded-full"
              />
            ))}
          </div>
        ) : (
          <VolumeX className="w-4 h-4 md:w-5 md:h-5 opacity-70" />
        )}
      </motion.button>
    </div>
  );
}