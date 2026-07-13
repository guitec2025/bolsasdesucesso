'use client';

import { useState, useEffect } from 'react';

const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="bg-accent rounded-lg w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center">
      <span className="text-2xl sm:text-3xl font-bold text-[#AE5A32] font-headline">
        {String(Math.max(0, value)).padStart(2, '0')}
      </span>
    </div>
    <span className="text-[10px] sm:text-xs text-foreground/80 mt-1 uppercase font-body">{label}</span>
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
    const calculateTimeLeft = () => {
      const now = new Date();
      // Mês 6 no JavaScript é Julho (0-indexed: 0=Jan, 6=Jul)
      // Definido para 18 de Julho de 2026
      const targetDate = new Date(2026, 6, 18, 23, 59, 59);
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-background py-3 border-b border-border/10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 px-4">
        <p className="text-foreground/90 font-body text-base sm:text-lg text-center md:text-left">
          Inscrições abertas até dia <b>18 de julho</b>
        </p>
        <div className="flex items-center gap-2 sm:gap-3">
          <CountdownUnit value={timeLeft.days} label="Dias" />
          <CountdownUnit value={timeLeft.hours} label="Horas" />
          <CountdownUnit value={timeLeft.minutes} label="Minutos" />
          <CountdownUnit value={timeLeft.seconds} label="Segundos" />
        </div>
      </div>
    </div>
  );
}
