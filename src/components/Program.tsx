import { Box, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export function Program() {
  const { t } = useTranslation();

  return (
    <Box className="wedding-program" component="section">
      <Typography className="program-heading" variant="overline">
        {t('program.heading')}
      </Typography>

      <Box className="program-placeholder">
        <Typography className="program-coming-soon" component="p">
          {t('program.comingSoon')}
        </Typography>
      </Box>
    </Box>
  );
}
