import dayjs, { Dayjs } from 'dayjs';
import duration from 'dayjs/plugin/duration';
import { useEffect, useState } from 'react';

dayjs.extend(duration);

export interface CountdownValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isPast: boolean;
  totalMs: number;
}

function getCountdownValues(target: Dayjs, now: Dayjs): CountdownValues {
  const totalMs = target.diff(now);
  const isPast = totalMs < 0;
  const absDuration = dayjs.duration(Math.abs(totalMs));

  return {
    days: Math.floor(absDuration.asDays()),
    hours: absDuration.hours(),
    minutes: absDuration.minutes(),
    seconds: absDuration.seconds(),
    isPast,
    totalMs,
  };
}

export function useCountdown(targetDate: Dayjs): CountdownValues {
  const [values, setValues] = useState(() => getCountdownValues(targetDate, dayjs()));

  useEffect(() => {
    const tick = () => setValues(getCountdownValues(targetDate, dayjs()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [targetDate]);

  return values;
}
