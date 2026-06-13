import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { formatTimelineDate } from '@/constants/weddingDate';

const TIMELINE_ITEMS = [
  {
    key: 'date',
    image: '/images/timeline-date.jpg',
  },
  {
    key: 'christianCeremony',
    image: '/images/timeline-christian-ceremony.jpg',
  },
  {
    key: 'ceremony',
    image: '/images/timeline-ceremony.jpg',
  },
  {
    key: 'reception',
    image: '/images/timeline-reception.jpg',
  },
] as const;

export function Timeline() {
  const { t } = useTranslation();

  return (
    <Box
      className="timeline"
      component="section"
      aria-labelledby="timeline-heading"
    >
      <Box className="timeline__inner">
        <Typography
          className="timeline__heading"
          component="h2"
          id="timeline-heading"
        >
          {t('timeline.heading')}
        </Typography>

        <Box className="timeline__grid">
          {TIMELINE_ITEMS.map((item) => (
            <Box className="timeline__item" key={item.key}>
              <Box className="timeline__image-wrap">
                <img
                  className={`timeline__image${
                    item.key === 'christianCeremony'
                      ? ' timeline__image--christian-ceremony'
                      : ''
                  }`}
                  src={item.image}
                  alt={t(`timeline.${item.key}.imageAlt`)}
                />
              </Box>

              <Typography className="timeline__label" component="p">
                {t(`timeline.${item.key}.label`)}
              </Typography>

              <Typography className="timeline__detail" component="p">
                {item.key === 'date'
                  ? formatTimelineDate()
                  : t(`timeline.${item.key}.detail`)}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
