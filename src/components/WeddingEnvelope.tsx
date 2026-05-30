import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { EnvelopePostmark } from '@/components/EnvelopePostmark';

interface WeddingEnvelopeProps {
  onOpen: () => void;
  animateIn?: boolean;
}

export function WeddingEnvelope({
  onOpen,
  animateIn = false,
}: WeddingEnvelopeProps) {
  const { t } = useTranslation();

  return (
    <Box
      className={`envelope-stage${animateIn ? ' envelope-stage--enter' : ''}`}
    >
      <Typography className="envelope-hint" component="p">
        {t('envelope.clickToOpen')}
      </Typography>

      <Box
        className="envelope-card-wrap"
        onClick={onOpen}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            onOpen();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={t('envelope.openLabel')}
      >
        <Box className="envelope-card">
          <img
            className="envelope-card-texture"
            src="/images/envelope-card.png"
            alt=""
            aria-hidden
          />

          <Box className="envelope-card-content">
            <Box className="envelope-stamp-area" aria-hidden>
              <EnvelopePostmark label={t('envelope.saveTheDate')} />
              <Box className="envelope-stamp">
                <Box className="envelope-stamp-photo">
                  <img src="/images/lovebirds.jpg" alt="" />
                </Box>
              </Box>
            </Box>

            <Typography className="envelope-names" component="h1" variant="h1">
              {t('bride')} {t('and')} {t('groom')}
            </Typography>

            <Typography className="envelope-subtitle" component="p">
              {t('envelope.gettingMarried')}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
