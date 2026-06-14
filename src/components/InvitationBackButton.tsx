import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface InvitationBackButtonProps {
  to: string;
}

export function InvitationBackButton({ to }: InvitationBackButtonProps) {
  const { t } = useTranslation();

  return (
    <Box className="invitation-back">
      <Button
        className="invitation-back-button"
        component={Link}
        to={to}
        aria-label={t('common.backLabel')}
      >
        {t('invitation.back')}
      </Button>
    </Box>
  );
}
