import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import {
  WEDDING_MAP_EMBED_URL,
  WEDDING_MAP_URL,
} from '@/constants/weddingLocation';

export function Location() {
  const { t } = useTranslation();

  return (
    <Box className="wedding-location" component="section">
      <Typography className="location-heading" variant="overline">
        {t('location.heading')}
      </Typography>

      <a
        className="location-map-link"
        href={WEDDING_MAP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('location.openInMaps')}
      >
        <iframe
          className="location-map"
          src={WEDDING_MAP_EMBED_URL}
          title={t('location.mapTitle')}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          tabIndex={-1}
        />
      </a>
    </Box>
  );
}
