import { Box, Button, TextField, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

import { WeddingLayout } from '@/components/WeddingLayout';

export function RsvpPage() {
  const { t } = useTranslation();

  return (
    <WeddingLayout open backTo="/invitation">
      <Box className="rsvp-page">
        <Typography className="rsvp-page-deadline" component="h1">
          {t('rsvp.deadline')}
        </Typography>

        <Box
          className="rsvp-form"
          component="form"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            className="rsvp-field"
            label={t('rsvp.form.name')}
            fullWidth
            margin="normal"
          />
          <TextField
            className="rsvp-field"
            label={t('rsvp.form.email')}
            type="email"
            fullWidth
            margin="normal"
          />
          <TextField
            className="rsvp-field"
            label={t('rsvp.form.attending')}
            fullWidth
            margin="normal"
            select
            SelectProps={{ native: true }}
            InputLabelProps={{ shrink: true }}
            defaultValue=""
          >
            <option value="" disabled />
            <option value="yes">{t('rsvp.form.attendingYes')}</option>
            <option value="no">{t('rsvp.form.attendingNo')}</option>
          </TextField>
          <TextField
            className="rsvp-field"
            label={t('rsvp.form.guests')}
            type="number"
            fullWidth
            margin="normal"
            inputProps={{ min: 0 }}
          />
          <TextField
            className="rsvp-field"
            label={t('rsvp.form.message')}
            fullWidth
            margin="normal"
            multiline
            minRows={3}
          />

          <Button className="rsvp-submit" type="submit">
            {t('rsvp.form.submit')}
          </Button>
        </Box>
      </Box>
    </WeddingLayout>
  );
}
