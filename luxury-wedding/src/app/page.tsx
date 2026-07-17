'use client';

import { useState } from 'react';
import CustomCursor from '@/components/CustomCursor';
import Preloader from '@/components/Preloader';
import Hero3D from '@/components/Hero3D';
import Hero from '@/components/Hero';
import Announcement from '@/components/Announcement';
import Venue from '@/components/Venue';
import InvitationCard from '@/components/InvitationCard';
import Quotes from '@/components/Quotes';
import MusicPlayer from '@/components/MusicPlayer';

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {loading ? (
        <Preloader onComplete={() => setLoading(false)} />
      ) : (
        <main className="relative min-h-screen w-full overflow-hidden select-none">
          <Hero3D />
          <Hero />
          <Quotes />
          <Announcement />
          <InvitationCard />
          <Venue />
          <MusicPlayer />
          
          <footer className="w-full py-12 border-t border-white/5 text-center font-cairo text-sm text-luxury-cream/40 flex flex-col items-center gap-2 bg-luxury-dark/20 relative z-10">
            <p className="text-base text-luxury-champagne font-bold tracking-widest">مجدي ❤️ هاجر</p>
            <p className="font-alexandria font-light text-xs tracking-wider">Made with ❤️ • {new Date().getFullYear()}</p>
          </footer>
        </main>
      )}
    </>
  );
}
