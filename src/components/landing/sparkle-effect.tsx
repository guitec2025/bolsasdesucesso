
'use client';

import { useMemo, useState, useEffect } from 'react';

/**
 * Optimized Sparkle Effect using CSS Animations.
 * Reduces CPU overhead to 0% by offloading to the compositor thread.
 * This also prevents external scripts from being triggered by JavaScript-driven DOM updates.
 */
export function SparkleEffect({ count = 15 }: { count?: number }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const sparkles = useMemo(() => {
    if (!isMounted) return [];
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 4 + 4}s`,
      delay: `${Math.random() * 5}s`,
      size: `${Math.random() * 2 + 1}px`,
    }));
  }, [count, isMounted]);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-10">
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-10px);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }
        .sparkle {
          position: absolute;
          background: white;
          border-radius: 50%;
          pointer-events: none;
          box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
          animation: fall linear infinite;
        }
      `}</style>
      {sparkles.map((sparkle) => (
        <div
          key={sparkle.id}
          className="sparkle"
          style={{
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            animationDuration: sparkle.duration,
            animationDelay: sparkle.delay,
            top: '-20px',
          }}
        />
      ))}
    </div>
  );
}
