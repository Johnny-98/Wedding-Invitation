import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { TwoLineText } from '@/components/TwoLineText';

const LOVE_STORY_PARAGRAPHS = [
  'paragraph1',
  'invite',
  'bestMen',
  'signOff',
] as const;

function LoveStoryParagraph({
  paragraphKey,
}: {
  paragraphKey: (typeof LOVE_STORY_PARAGRAPHS)[number];
}) {
  const { t } = useTranslation();

  if (paragraphKey === 'invite') {
    return (
      <TwoLineText
        line1Key="common.inviteLine1"
        line2Key="common.inviteLine2"
        line2Suffix="."
      />
    );
  }

  if (paragraphKey === 'signOff') {
    return (
      <TwoLineText
        line1Key="loveStory.signOff"
        line2Key="loveStory.signature"
      />
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
