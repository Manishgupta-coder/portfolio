"use client";
import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomLoader() {
  const { active, progress } = useProgress();
  const [displayProgress, setDisplayProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  // Fake progress animation
  useEffect(() => {
    const duration = 2000;
    const intervalTime = 20;
    const step = 100 / (duration / intervalTime);

    const timer = setInterval(() => {
      setDisplayProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Only close if fake progress is done AND (3D is done or it's been a while)
    if (displayProgress >= 100 && (!active || progress === 100 || progress === 0)) {
      setTimeout(() => setLoading(false), 500);
    }
  }, [displayProgress, active, progress]);

  // Absolute fallback
  useEffect(() => {
    const t = setTimeout(() => {
      setLoading(false);
    }, 5000);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="flex flex-col items-center gap-6 w-full max-w-sm px-6">
            <div className="text-5xl md:text-7xl font-black tracking-tighter text-white">
              {Math.floor(displayProgress)}%
            </div>
            
            <div className="w-full h-[2px] bg-neutral-800 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-white"
                style={{ width: `${displayProgress}%` }}
              />
            </div>
            <div className="text-neutral-500 text-sm font-medium tracking-widest uppercase mt-4 animate-pulse">
              Loading...
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
