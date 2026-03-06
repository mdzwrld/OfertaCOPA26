"use client";

import { useEffect, useState } from 'react';
import { TimerIcon } from 'lucide-react';

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 14,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        }
        if (prevTime.minutes > 0) {
          return { minutes: prevTime.minutes - 1, seconds: 59 };
        }
        return prevTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center gap-4 bg-accent/20 border-2 border-dashed border-accent text-accent rounded-lg p-4 my-8">
      <TimerIcon className="w-8 h-8 animate-pulse" />
      <div className="text-center">
        <p className="font-semibold uppercase">Esta oferta termina em:</p>
        <p className="text-3xl md:text-4xl font-black tracking-widest">
          {formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </p>
      </div>
    </div>
  );
}
