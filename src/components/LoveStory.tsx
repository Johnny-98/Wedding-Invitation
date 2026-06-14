import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

const LOVE_STORY_PARAGRAPHS = [
  'paragraph1',
  'paragraph2',
  'bestMen',
  'signOff',
] as const;

function LoveStoryParagraph({
  paragraphKey,
}: {
  paragraphKey: (typeof LOVE_STORY_PARAGRAPHS)[number];
}) {
  const { t } = useTranslation();

  if (paragraphKey === 'paragraph2' || paragraphKey === 'signOff') {
    const line1Key =
      paragraphKey === 'paragraph2'
        ? 'loveStory.paragraph2Line1'
        : 'loveStory.signOff';
    const line2Key =
      paragraphKey === 'paragraph2'
        ? 'loveStory.paragraph2Line2'
        : 'loveStory.signature';

    return (
      <Typography
        className={
          paragraphKey === 'paragraph2' ? 'love-story__invite' : undefined
        }
        component="p"
      >
        {t(line1Key)}
        <br />
        {t(line2Key)}
      </Typography>
    );
  }

  return (
    <Typography component="p">{t(`loveStory.${paragraphKey}`)}</Typography>
  );
}

export function LoveStory() {
  const { t } = useTranslation();

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
            <span className="love-story__heading-script">
              {t('loveStory.headingScript')}
            </span>
            <span className="love-story__heading-serif">
              {t('loveStory.headingSerif')}
            </span>
          </Box>

          <Box className="love-story__body">
            {LOVE_STORY_PARAGRAPHS.map((key) => (
              <LoveStoryParagraph key={key} paragraphKey={key} />
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
