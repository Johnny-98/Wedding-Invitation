import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { EnvelopeBirds } from '@/components/EnvelopeBirds';

interface WeddingEnvelopeProps {
  onOpen: () => void;
}

export function WeddingEnvelope({ onOpen }: WeddingEnvelopeProps) {
  const { t } = useTranslation();

  return (
    <Box className="envelope-stage">
      <Typography className="envelope-hint" component="p">
        {t('envelope.clickToOpen')}
      </Typography>

      <Box
        className="envelope-card-wrap"
        component="button"
        type="button"
        onClick={onOpen}
        aria-label={t('envelope.openLabel')}
      >
        <Box className="envelope-card">
          <Box className="envelope-stamp-area" aria-hidden>
            <Box className="envelope-postmark">{t('envelope.saveTheDate')}</Box>
            <Box className="envelope-stamp">
              <img src="/images/beach-bg.png" alt="" />
            </Box>
          </Box>

          <Typography className="envelope-names" component="h1" variant="h1">
            {t('bride')}
            <span className="envelope-plus">+</span>
            {t('groom')}
          </Typography>

          <Typography className="envelope-subtitle" component="p">
            {t('envelope.gettingMarried')}
          </Typography>

          <EnvelopeBirds />
        </Box>
      </Box>
    </Box>
  );
}
