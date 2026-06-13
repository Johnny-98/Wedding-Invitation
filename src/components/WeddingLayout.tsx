import { Box } from '@mui/material';
import type { ReactNode } from 'react';

interface WeddingLayoutProps {
  children: ReactNode;
}

export function WeddingLayout({ children }: WeddingLayoutProps) {
  return (
    <Box>
      <Box className="wedding-bg" aria-hidden />
      {children}
    </Box>
  );
}
