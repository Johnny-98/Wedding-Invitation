import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function LoveStory() {
  const { t, i18n } = useTranslation();
  const isBulgarian = i18n.language.startsWith('bg');

  return (
    <Box
      className="love-story"
      component="section"
      aria-labelledby="love-story-heading"
    >
      <Box className="love-story__inner">
        <Box className="love-story__frame-col">
          <Box className="love-story__frame">
            <Box className="love-story__frame-inner">
              <img
                className="love-story__frame-photo"
                src="/images/love-story-couple.png"
                alt={t('loveStory.photoAlt')}
              />
            </Box>
          </Box>
        </Box>

        <Box className="love-story__content">
          <Box className="love-story__heading" id="love-story-heading">
            <span
              className={`love-story__heading-script${
                isBulgarian ? ' love-story__heading-script--bg' : ''
              }`}
            >
              {t('loveStory.headingScript')}
            </span>
            <span className="love-story__heading-serif">
              {t('loveStory.headingSerif')}
            </span>
          </Box>

          <Box className="love-story__body">
            <Typography component="p">{t('loveStory.paragraph1')}</Typography>
            <Typography component="p">{t('loveStory.paragraph2')}</Typography>
            <Typography component="p">{t('loveStory.signOff')}</Typography>
            <Typography component="p">{t('loveStory.signature')}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
