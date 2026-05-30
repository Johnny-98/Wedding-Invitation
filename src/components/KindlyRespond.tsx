import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function KindlyRespond() {
  const { t } = useTranslation();

  return (
    <Box className="wedding-rsvp" component="section">
      <Typography className="rsvp-celebration" component="p">
        {t('rsvp.celebrationLine1')}
        <br />
        {t('rsvp.celebrationLine2')}
      </Typography>

      <Link className="rsvp-card" to="/rsvp" aria-label={t('rsvp.openForm')}>
        <Typography className="rsvp-message" component="p">
          {t('rsvp.clickToRespond')}
        </Typography>
      </Link>
    </Box>
  );
}
