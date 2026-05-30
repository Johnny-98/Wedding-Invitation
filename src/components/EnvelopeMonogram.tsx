import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface EnvelopeMonogramProps {
  className?: string;
}

export function EnvelopeMonogram({ className }: EnvelopeMonogramProps) {
  const { t } = useTranslation();

  return (
    <Typography
      className={
        className ? `envelope-monogram ${className}` : 'envelope-monogram'
      }
      component="span"
      aria-hidden
    >
      {t('envelope.monogram')}
    </Typography>
  );
}
