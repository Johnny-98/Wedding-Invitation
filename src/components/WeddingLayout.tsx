import { Box } from '@mui/material';
import type { ReactNode } from 'react';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { InvitationBackButton } from '@/components/InvitationBackButton';

interface WeddingLayoutProps {
  children: ReactNode;
  open?: boolean;
  onBack?: () => void;
  backTo?: string;
}

export function WeddingLayout({
  children,
  open = false,
  onBack,
  backTo,
}: WeddingLayoutProps) {
  const showBack = open && (onBack || backTo);

  return (
    <Box className={`wedding-page${open ? ' wedding-page--open' : ''}`}>
      <Box className="wedding-bg" aria-hidden />
      <LanguageSwitcher />
      {showBack && <InvitationBackButton onBack={onBack} to={backTo} />}
      {children}
    </Box>
  );
}
