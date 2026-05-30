import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  WEDDING_DAY,
  WEDDING_TIME,
  WEDDING_YEAR,
} from '@/constants/weddingDate';

export function InvitePaper() {
  const { t } = useTranslation();

  return (
    <Box className="invite-paper-wrap">
      <Box className="invite-paper-content">
        <img
          className="invite-paper-image"
          src="/images/invitePaper.png"
          alt=""
        />

        <Box className="invite-paper-overlay">
          <Box className="invite-paper-copy">
            <Typography
              className="invite-paper-names"
              component="h1"
              variant="h1"
            >
              {t('coupleNames')}
            </Typography>

            <Typography className="invite-paper-tagline" component="p">
              <span className="invite-paper-tagline-line">
                {t('taglineLine1')}
              </span>{' '}
              <span className="invite-paper-tagline-line">
                {t('taglineLine2')}
              </span>
            </Typography>
          </Box>

          <Box className="invite-paper-date">
            <Typography className="invite-paper-weekday" component="span">
              {t('invitePaper.weekday')}
            </Typography>

            <Box className="invite-paper-center">
              <Typography className="invite-paper-month" component="span">
                {t('invitePaper.month')}
              </Typography>
              <Typography className="invite-paper-day" component="span">
                {WEDDING_DAY}
              </Typography>
              <Typography className="invite-paper-year" component="span">
                {WEDDING_YEAR}
              </Typography>
            </Box>

            <Box className="invite-paper-time">
              <Typography className="invite-paper-time-prefix" component="span">
                {t('invitePaper.timePrefix')}
              </Typography>
              <Typography className="invite-paper-time-value" component="span">
                {WEDDING_TIME}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
