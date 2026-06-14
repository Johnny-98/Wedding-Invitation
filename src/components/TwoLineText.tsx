import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface TwoLineTextProps {
  line1Key: string;
  line2Key: string;
  line2Suffix?: string;
  className?: string;
}

export function TwoLineText({
  line1Key,
  line2Key,
  line2Suffix = '',
  className,
}: TwoLineTextProps) {
  const { t } = useTranslation();

  return (
    <Typography className={className} component="p">
      {t(line1Key)}
      <br />
      {t(line2Key)}
      {line2Suffix}
    </Typography>
  );
}
