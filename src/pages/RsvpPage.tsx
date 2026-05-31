import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { WeddingLayout } from '@/components/WeddingLayout';
import { RSVP_GOOGLE_FORM_EMBED_URL } from '@/constants/rsvpForm';

export function RsvpPage() {
  const { t } = useTranslation();

  return (
    <WeddingLayout open backTo="/invitation">
      <Box className="rsvp-page">
        <iframe
          className="rsvp-form-embed"
          src={RSVP_GOOGLE_FORM_EMBED_URL}
          title={t('rsvp.openForm')}
          loading="lazy"
        />
      </Box>
    </WeddingLayout>
  );
}
