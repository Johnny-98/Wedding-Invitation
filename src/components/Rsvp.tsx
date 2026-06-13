import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const FAQ_KEYS = ['children', 'dietary', 'phones'] as const;

export function Rsvp() {
  const { t } = useTranslation();

  return (
    <Box className="rsvp" component="section" aria-labelledby="faqs-heading">
      <Box className="rsvp__overlay">
        <Box className="rsvp__faqs-heading" component="h2" id="faqs-heading">
          {t('faqs.heading')}
        </Box>

        <Box className="rsvp__faqs-list">
          {FAQ_KEYS.map((key) => (
            <Box className="rsvp__faq" component="article" key={key}>
              <Box className="rsvp__faq-question" component="h3">
                {t(`faqs.items.${key}.question`)}
              </Box>
              <Box className="rsvp__faq-answer" component="p">
                {t(`faqs.items.${key}.answer`)}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
