import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const DETAIL_KEYS = ['travel', 'accommodation', 'dressCode'] as const;

const DETAIL_ICONS = {
  travel: TravelExploreIcon,
  accommodation: LocalHotelIcon,
  dressCode: QuestionMarkIcon,
} as const;

export function OtherDetails() {
  const { t } = useTranslation();

  return (
    <Box
      className="other-details"
      component="section"
      aria-labelledby="other-details-heading"
    >
      <Box className="other-details__frame">
        <Box className="other-details__inner">
          <Box
            className="other-details__heading"
            component="h2"
            id="other-details-heading"
          >
            {t('otherDetails.heading')}
          </Box>

          <Box className="other-details__grid">
            {DETAIL_KEYS.map((key) => {
              const Icon = DETAIL_ICONS[key];

              return (
                <Box
                  className="other-details__item"
                  component="article"
                  key={key}
                >
                  <Icon
                    className="other-details__icon"
                    aria-hidden="true"
                    focusable="false"
                  />
                  <Box className="other-details__item-heading" component="h3">
                    {t(`otherDetails.${key}.label`)}
                  </Box>
                  <Box className="other-details__item-body" component="p">
                    {t(`otherDetails.${key}.body`)}
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
