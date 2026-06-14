import { useEffect, useState } from 'react';

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

export function getCountdownParts(
  targetMs: number,
  nowMs = Date.now(),
): CountdownParts {
  const diff = Math.max(0, targetMs - nowMs);

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff % 86_400_000) / 3_600_000),
    minutes: Math.floor((diff % 3_600_000) / 60_000),
    seconds: Math.floor((diff % 60_000) / 1_000),
    isComplete: diff === 0,
  };
}

export function useCountdown(targetMs: number): CountdownParts {
  const [nowMs, setNowMs] = useState(() => Date.now());

  useEffect(() => {
    const tick = () => setNowMs(Date.now());
    const intervalId = window.setInterval(tick, 1_000);

    return () => window.clearInterval(intervalId);
  }, []);

  return getCountdownParts(targetMs, nowMs);
}
