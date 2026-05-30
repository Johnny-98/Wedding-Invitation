import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { WeddingCountdown } from '@/components/WeddingCountdown';
import { EnvelopeMonogram } from '@/components/EnvelopeMonogram';
import { InvitePaper } from '@/components/InvitePaper';
import { Location } from '@/components/Location';

export function WeddingInvitation() {
  const { t } = useTranslation();
  const venue = t('venue');
  const address = t('address');
  const footer = t('footer');
  const hasDetails = Boolean(venue || address || footer);

  return (
    <Box className="invitation-panel">
      <Box className="invitation-envelope">
        <Box className="invitation-envelope-stack">
          <img
            className="invitation-envelope-back"
            src="/images/open-envelope.png"
            alt=""
          />
          <EnvelopeMonogram className="envelope-monogram--open" />
          <InvitePaper />
          <img
            className="invitation-envelope-front"
            src="/images/open-envelope-front.png"
            alt=""
          />
        </Box>
      </Box>

      {hasDetails && (
        <Box className="invitation-body">
          <Box className="invitation-content">
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
      )}

      <Box className="invitation-white-space">
        <Location />
        <WeddingCountdown />
      </Box>
    </Box>
  );
}
