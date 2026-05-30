import { Box } from '@mui/material';
import type { ReactNode } from 'react';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { InvitationBackButton } from '@/components/InvitationBackButton';

interface WeddingLayoutProps {
  children: ReactNode;
  open?: boolean;
  onBack?: () => void;
}

export function WeddingLayout({
  children,
  open = false,
  onBack,
}: WeddingLayoutProps) {
  return (
    <Box className={`wedding-page${open ? ' wedding-page--open' : ''}`}>
      <Box className="wedding-bg" aria-hidden />
      <LanguageSwitcher />
      {open && onBack && <InvitationBackButton onBack={onBack} />}
      {children}
    </Box>
  );
}
