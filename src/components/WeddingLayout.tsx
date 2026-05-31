import { Box } from '@mui/material';
import type { ReactNode } from 'react';

interface WeddingLayoutProps {
  children: ReactNode;
  open?: boolean;
}

export function WeddingLayout({ children, open = false }: WeddingLayoutProps) {
  return (
    <Box className={`wedding-page${open ? ' wedding-page--open' : ''}`}>
      <Box className="wedding-bg" aria-hidden />
      {children}
    </Box>
  );
}
