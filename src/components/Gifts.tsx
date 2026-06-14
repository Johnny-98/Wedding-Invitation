import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function Gifts() {
  const { t } = useTranslation();

  return (
    <Box className="rsvp" component="section" aria-labelledby="gifts-heading">
      <Box className="rsvp__inner">
        <Box className="rsvp__heading" component="h2" id="gifts-heading">
          {t('gifts.heading')}
        </Box>

        <Box className="rsvp__tagline" component="p">
          {t('gifts.tagline')}
        </Box>

        <Box className="rsvp__body" component="p">
          {t('gifts.body')}
        </Box>
      </Box>
    </Box>
  );
}
