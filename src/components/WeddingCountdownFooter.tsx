import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  formatCountdownDate,
  WEDDING_COUNTDOWN_TARGET_MS,
} from '@/constants/weddingDate';
import { useCountdown } from '@/hooks/useCountdown';

const COUNTDOWN_UNITS = ['days', 'hours', 'minutes', 'seconds'] as const;

function padUnit(value: number) {
  return String(value).padStart(2, '0');
}

export function WeddingCountdownFooter() {
  const { t, i18n } = useTranslation();
  const countdown = useCountdown(WEDDING_COUNTDOWN_TARGET_MS);

  return (
    <Box
      className="countdown-footer"
      component="footer"
      aria-label={t('countdown.ariaLabel')}
    >
      <Box className="countdown-footer__inner">
        <Box className="countdown-footer__date-wrap">
          <Typography className="countdown-footer__label" component="p">
            {t('countdown.dateLabel')}
          </Typography>
          <Typography className="countdown-footer__date" component="p">
            {formatCountdownDate(i18n.language)}
          </Typography>
        </Box>

        <Box
          className="countdown-footer__timer"
          role="timer"
          aria-live="polite"
          aria-atomic="true"
        >
          {countdown.isComplete ? (
            <Typography className="countdown-footer__complete" component="p">
              {t('countdown.complete')}
            </Typography>
          ) : (
            COUNTDOWN_UNITS.map((unit) => (
              <Box className="countdown-footer__unit" key={unit}>
                <Typography
                  className="countdown-footer__value"
                  component="span"
                >
                  {unit === 'days'
                    ? String(countdown[unit])
                    : padUnit(countdown[unit])}
                </Typography>
                <Typography
                  className="countdown-footer__unit-label"
                  component="span"
                >
                  {t(`countdown.${unit}`)}
                </Typography>
              </Box>
            ))
          )}
        </Box>
      </Box>
    </Box>
  );
}
