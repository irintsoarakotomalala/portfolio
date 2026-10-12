import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { GOLD, INK } from '@/lib/site';

const R = 22;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY, scrollYProgress } = useScroll();

  useMotionValueEvent(scrollY, 'change', (y) => setIsVisible(y > 600));

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          transition={{ type: 'spring', stiffness: 300, damping: 24 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 w-14 h-14 rounded-full flex items-center justify-center group"
          style={{ background: 'rgba(14,12,8,0.85)', backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)' }}
          aria-label="Retour en haut"
        >
          {/* Anneau de progression du scroll */}
          <svg className="absolute inset-0 -rotate-90" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r={R} fill="none" stroke={`${GOLD}25`} strokeWidth="2" />
            <motion.circle
              cx="28"
              cy="28"
              r={R}
              fill="none"
              stroke={GOLD}
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: scrollYProgress }}
            />
          </svg>
          <span
            className="relative w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: GOLD, color: INK }}
          >
            <ArrowUp size={17} className="transition-transform duration-300 group-hover:-translate-y-0.5" />
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
