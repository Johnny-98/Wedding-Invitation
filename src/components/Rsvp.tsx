import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export function Rsvp() {
  const { t } = useTranslation();

  return (
    <Box
      className="rsvp-banner"
      component="section"
      aria-labelledby="rsvp-banner-heading"
    >
      <Box className="rsvp-banner__content">
        <Box className="rsvp-banner__inner">
          <Box
            className="rsvp-banner__heading"
            component="h2"
            id="rsvp-banner-heading"
          >
            {t('rsvpBanner.heading')}
          </Box>

          <Box className="rsvp-banner__deadline" component="p">
            {t('rsvpBanner.deadlineScript')}
          </Box>

          <Box className="rsvp-banner__body" component="p">
            {t('rsvpBanner.body')}
          </Box>

          <Link
            className="rsvp-banner__button"
            to="/rsvp"
            aria-label={t('rsvp.openForm')}
          >
            {t('hero.rsvp')}
          </Link>
        </Box>
      </Box>

      <Box className="rsvp-banner__stripes" aria-hidden="true" />
    </Box>
  );
}
