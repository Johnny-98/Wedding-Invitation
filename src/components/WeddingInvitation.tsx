import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { WeddingCountdown } from '@/components/WeddingCountdown';
import { EnvelopeMonogram } from '@/components/EnvelopeMonogram';

export function WeddingInvitation() {
  const { t } = useTranslation();
  const venue = t('venue');
  const address = t('address');
  const footer = t('footer');

  return (
    <Box className="invitation-panel">
      <Box className="invitation-envelope" aria-hidden>
        <Box className="invitation-envelope-stack">
          <img
            className="invitation-envelope-back"
            src="/images/open-envelope.png"
            alt=""
          />
          <EnvelopeMonogram className="envelope-monogram--open" />
          <img
            className="invitation-invite-paper"
            src="/images/invitePaper.png"
            alt=""
          />
          <img
            className="invitation-envelope-front"
            src="/images/open-envelope-front.png"
            alt=""
          />
        </Box>
      </Box>

      <Box className="invitation-body">
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
        </Box>
      </Box>

      <Box className="invitation-white-space">
        <WeddingCountdown />
      </Box>
    </Box>
  );
}
