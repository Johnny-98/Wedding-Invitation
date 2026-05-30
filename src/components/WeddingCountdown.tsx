import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { formatCountdownDate, WEDDING_DATE } from '@/constants/weddingDate';
import { useCountdown } from '@/hooks/useCountdown';

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
  const { t } = useTranslation();
  const { days, hours, minutes, seconds, isPast } = useCountdown(WEDDING_DATE);

  return (
    <Box className="wedding-countdown" component="section" aria-live="polite">
      <Typography className="countdown-heading" variant="overline">
        {isPast ? t('countdown.headingAfter') : t('countdown.headingBefore')}
      </Typography>

      <Box className="countdown-grid" role="timer">
        <TimeUnit
          value={days}
          label={t('countdown.day', { count: Math.abs(days) })}
          showSign
          isNegative={isPast}
        />
        <Typography className="countdown-separator" aria-hidden>
          :
        </Typography>
        <TimeUnit value={hours} label={t('countdown.hours')} />
        <Typography className="countdown-separator" aria-hidden>
          :
        </Typography>
        <TimeUnit value={minutes} label={t('countdown.minutes')} />
        <Typography className="countdown-separator" aria-hidden>
          :
        </Typography>
        <TimeUnit value={seconds} label={t('countdown.seconds')} />
      </Box>

      <Typography className="countdown-date" variant="body2">
        {formatCountdownDate(t)}
      </Typography>
    </Box>
  );
}
