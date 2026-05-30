import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { WeddingCountdown } from '@/components/WeddingCountdown';

export function WeddingInvitation() {
  const { t } = useTranslation();
  const venue = t('venue');
  const address = t('address');
  const footer = t('footer');

  return (
    <Box className="invitation-panel">
      <Box className="invitation-content">
        <Typography className="invitation-eyebrow" component="p">
          {t('eyebrow')}
        </Typography>

        <Typography className="invitation-names" component="h1" variant="h1">
          {t('bride')}
          <span className="invitation-plus">+</span>
          {t('groom')}
        </Typography>

        <Typography className="invitation-subtitle" component="p">
          {t('envelope.gettingMarried')}
        </Typography>

        <Typography className="invitation-tagline" component="p">
          {t('tagline')}
        </Typography>

        <Typography className="invitation-datetime" component="p">
          {t('dateTime')}
        </Typography>

        {venue && (
          <Typography className="invitation-venue" component="p">
            {venue}
          </Typography>
        )}

        {address && (
          <Typography className="invitation-address" component="p">
            {address}
          </Typography>
        )}

        {footer && (
          <Typography className="invitation-footer" component="p">
            {footer}
          </Typography>
        )}

        <WeddingCountdown />
      </Box>
    </Box>
  );
}
