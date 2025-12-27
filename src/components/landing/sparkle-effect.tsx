
'use client';

import { motion } from 'framer-motion';
import { useMemo, useState, useEffect } from 'react';

const Sparkle = ({ left, duration, delay, size }: { left: string; duration: number; delay: number; size: number; }) => {
  return (
    <motion.div
      className="absolute bg-white rounded-full opacity-0 pointer-events-none"
      style={{
        left,
        top: '-5%', // Start from above the screen
        width: size,
        height: size,
        boxShadow: '0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 180, 0.6)',
      }}
      animate={{
        top: '105%', // Fall to below the screen
        opacity: [0, 1, 0.8, 0],
      }}
      transition={{
        duration,
        delay,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      }}
    />
  );
};

export function SparkleEffect({ count = 40 }: { count?: number }) {
  const [sparkles, setSparkles] = useState<Array<{id: number; left: string; duration: number; delay: number; size: number;}>>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const generatedSparkles = Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        duration: Math.random() * 5 + 5, // 5 to 10 seconds
        delay: Math.random() * 10,
        size: Math.random() * 2.5 + 1, // 1 to 3.5px
      }));
      setSparkles(generatedSparkles);
    }
  }, [count, isMounted]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      {sparkles.map(sparkle => (
        <Sparkle key={sparkle.id} {...sparkle} />
      ))}
    </div>
  );
}
