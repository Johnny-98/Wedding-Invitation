import { useState } from 'react';
import { Box } from '@mui/material';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { InvitationBackButton } from '@/components/InvitationBackButton';
import { WeddingEnvelope } from '@/components/WeddingEnvelope';
import { WeddingInvitation } from '@/components/WeddingInvitation';

export function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box className={`wedding-page${isOpen ? ' wedding-page--open' : ''}`}>
      <Box className="wedding-bg" aria-hidden />
      <LanguageSwitcher />

      {isOpen && <InvitationBackButton onBack={() => setIsOpen(false)} />}

      {isOpen ? (
        <WeddingInvitation />
      ) : (
        <WeddingEnvelope onOpen={() => setIsOpen(true)} />
      )}
    </Box>
  );
}
