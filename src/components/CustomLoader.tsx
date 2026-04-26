"use client";
import { useProgress } from '@react-three/drei';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CustomLoader() {
  const { active, progress } = useProgress();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!active && progress === 100) {
      setTimeout(() => setLoading(false), 800);
    }
  }, [active, progress]);

  // Fallback in case 3D content fails or is too fast
  useEffect(() => {
    const t = setTimeout(() => {
      if (progress === 0) setLoading(false);
    }, 3000);
    return () => clearTimeout(t);
  }, [progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[1000] flex flex-col items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="text-white text-4xl font-bold mb-4 tracking-widest uppercase">
            Loading...
          </div>
          <div className="w-64 h-1 bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-white"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.2 }}
            />
          </div>
          <div className="mt-4 text-neutral-400 text-sm">
            {Math.round(progress)}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
