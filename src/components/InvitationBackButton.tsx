import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface InvitationBackButtonProps {
  onBack: () => void;
}

export function InvitationBackButton({ onBack }: InvitationBackButtonProps) {
  const { t } = useTranslation();

  return (
    <Box className="invitation-back">
      <Button
        className="invitation-back-button"
        onClick={onBack}
        aria-label={t('invitation.backLabel')}
      >
        {t('invitation.back')}
      </Button>
    </Box>
  );
}
