import { Box, Typography } from '@mui/material';
import dayjs from 'dayjs';
import { useCountdown } from '@/hooks/useCountdown';

const WEDDING_DATE = dayjs('2026-09-18T17:00:00');

interface TimeUnitProps {
  value: number;
  label: string;
  showSign?: boolean;
  isNegative?: boolean;
}

function TimeUnit({ value, label, showSign, isNegative }: TimeUnitProps) {
  const padded = String(value).padStart(2, '0');
  const display = showSign && isNegative ? `-${padded}` : padded;

  return (
    <Box className="countdown-unit">
      <Typography className="countdown-value" component="span" aria-hidden>
        {display}
      </Typography>
      <Typography className="countdown-label" component="span">
        {label}
      </Typography>
    </Box>
  );
}

export function WeddingCountdown() {
  const { days, hours, minutes, seconds, isPast } = useCountdown(WEDDING_DATE);

  return (
    <Box className="wedding-countdown" component="section" aria-live="polite">
      <Typography className="countdown-heading" variant="overline">
        {isPast ? 'Time since our wedding' : 'Counting down to our wedding'}
      </Typography>

      <Box className="countdown-grid" role="timer">
        <TimeUnit
          value={days}
          label={days === 1 ? 'Day' : 'Days'}
          showSign
          isNegative={isPast}
        />
        <Typography className="countdown-separator" aria-hidden>
          :
        </Typography>
        <TimeUnit value={hours} label="Hours" />
        <Typography className="countdown-separator" aria-hidden>
          :
        </Typography>
        <TimeUnit value={minutes} label="Minutes" />
        <Typography className="countdown-separator" aria-hidden>
          :
        </Typography>
        <TimeUnit value={seconds} label="Seconds" />
      </Box>

      <Typography className="countdown-date" variant="body2">
        18 September 2026 · 17:00
      </Typography>
    </Box>
  );
}
