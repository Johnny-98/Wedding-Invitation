import { Box } from '@mui/material';
import type { ReactNode } from 'react';

interface WeddingLayoutProps {
  children: ReactNode;
}

export function WeddingLayout({ children }: WeddingLayoutProps) {
  return (
    <Box>
      <Box className="wedding-bg" aria-hidden>
        <video
          className="wedding-bg__video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source src="/images/waves.mp4" type="video/mp4" />
        </video>
      </Box>
      {children}
    </Box>
  );
}
