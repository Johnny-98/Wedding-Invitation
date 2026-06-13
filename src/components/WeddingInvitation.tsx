import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { formatHeroDate } from '@/constants/weddingDate';

export function WeddingInvitation() {
  const { t } = useTranslation();

  return (
    <Box className="invitation-hero">
      <Box className="invitation-hero-content">
        <Typography className="" component="h1">
          <span className="invitation-hero-name invitation-hero-name--first">
            {t('hero.partner1Name')}
          </span>
          <span className="invitation-hero-name invitation-hero-and">&</span>
          <br />
          <span className="invitation-hero-name invitation-hero-name--second">
            {t('hero.partner2Name')}
          </span>
        </Typography>

        <Typography className="invitation-hero-invite" component="p">
          {t('hero.inviteLine')}
        </Typography>

        <Box className="invitation-hero-details">
          <Typography className="invitation-hero-date" component="span">
            {formatHeroDate(t)}
          </Typography>
          <Box className="invitation-hero-divider" aria-hidden="true" />
          <Box className="invitation-hero-location">
            <Typography component="span">{t('hero.locationLine1')}</Typography>
            <Typography component="span">{t('hero.locationLine2')}</Typography>
          </Box>
        </Box>
      </Box>

      <Link
        className="invitation-hero-rsvp"
        to="/rsvp"
        aria-label={t('rsvp.openForm')}
      >
        {t('hero.rsvp')}
      </Link>

      <Box className="invitation-hero-sand-bar" aria-hidden="true" />
    </Box>
  );
}
