import { Box, Container, Typography } from '@mui/material';

import { WeddingCountdown } from '@/components/WeddingCountdown';

export function WeddingPage() {
  return (
    <Box className="wedding-page">
      <Box className="wedding-hero">
        <Container maxWidth="md">
          <Typography className="wedding-eyebrow" variant="overline">
            Together with their families
          </Typography>

          <Typography className="wedding-names" variant="h1" component="h1">
            Peter Dzhonov
            <span className="wedding-ampersand">&</span>
            Iren Meshineva
          </Typography>

          <Typography className="wedding-tagline" variant="h5" component="p">
            Request the pleasure of your company at the celebration of their marriage
          </Typography>

          <Box className="wedding-details">
            <Typography className="wedding-detail-line" variant="h6">
              Thursday, 18 September 2026
            </Typography>
            <Typography className="wedding-detail-line wedding-detail-time" variant="body1">
              Ceremony begins at 17:00
            </Typography>
          </Box>
        </Container>
      </Box>

      <WeddingCountdown />
    </Box>
  );
}
