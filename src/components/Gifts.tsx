import { Box } from '@mui/material';
import { Trans, useTranslation } from 'react-i18next';

export function Gifts() {
  const { t } = useTranslation();

  return (
    <Box className="gifts" component="section" aria-labelledby="gifts-heading">
      <Box className="gifts__inner">
        <Box className="gifts__heading" component="h2" id="gifts-heading">
          {t('gifts.heading')}
        </Box>

        <Box className="gifts__tagline" component="p">
          {t('gifts.tagline')}
        </Box>

        <Box className="gifts__body" component="p">
          <Trans i18nKey="gifts.body" components={{ strong: <strong /> }} />
        </Box>
      </Box>
    </Box>
  );
}
