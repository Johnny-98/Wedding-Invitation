import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface InvitationBackButtonProps {
  onBack?: () => void;
  to?: string;
}

export function InvitationBackButton({
  onBack,
  to,
}: InvitationBackButtonProps) {
  const { t } = useTranslation();

  return (
    <Box className="invitation-back">
      <Button
        className="invitation-back-button"
        {...(to
          ? { component: Link, to, 'aria-label': t('rsvp.backLabel') }
          : { onClick: onBack, 'aria-label': t('invitation.backLabel') })}
      >
        {t('invitation.back')}
      </Button>
    </Box>
  );
}
