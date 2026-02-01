
'use client';

import { useState, useEffect } from 'react';

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-accent rounded-lg w-16 h-16 flex items-center justify-center">
      <span className="text-3xl font-bold text-[#AE5A32] font-headline">{String(value).padStart(2, '0')}</span>
    </div>
    <span className="text-xs text-foreground/80 mt-1 uppercase font-body">{label}</span>
  </div>
);

export function CountdownHeader() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Set target date to February 6th of the current or next year
    const now = new Date();
    let targetYear = now.getFullYear();
    const targetDateForCurrentYear = new Date(targetYear, 1, 6); // Month is 0-indexed (1 = February)

    if (now > targetDateForCurrentYear) {
      targetYear += 1;
    }
    const targetDate = new Date(targetYear, 1, 6);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / 1000 / 60) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background py-3 border-b border-border/10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4">
        <p className="text-foreground/90 font-body text-lg">
          Inscrições abertas até dia 06 de fevereiro
        </p>
        <div className="flex items-center gap-3">
          <CountdownUnit value={timeLeft.days} label="Dias" />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <CountdownUnit value={timeLeft.minutes} label="Minutos" />
          <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </div>
  );
}
