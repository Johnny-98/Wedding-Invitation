import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { formatHeroDate } from '@/constants/weddingDate';

export function IrenAndPeter() {
  const { t } = useTranslation();

  return (
    <Box className="invitation-hero">
      <Box className="invitation-hero-content">
        <Typography className="invitation-hero-names" component="h1">
          <span className="invitation-hero-name invitation-hero-name--first">
            {t('hero.partner1Name')}
          </span>
          <span className="invitation-hero-name invitation-hero-and">&</span>
          <br className="invitation-hero-names-break" />
          <span className="invitation-hero-name invitation-hero-name--second">
            {t('hero.partner2Name')}
          </span>
        </Typography>

        <Box className="invitation-hero-message">
          <Typography className="invitation-hero-invite" component="p">
            {t('hero.inviteLine1')}
            <br />
            {t('hero.inviteLine2')}
          </Typography>

          <Typography className="invitation-hero-date" component="p">
            {formatHeroDate(t)}
          </Typography>

          <Typography className="invitation-hero-location" component="p">
            {t('hero.location')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
