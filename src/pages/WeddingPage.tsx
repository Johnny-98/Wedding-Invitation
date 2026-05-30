import { useState } from 'react';
import { Box } from '@mui/material';

import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { InvitationBackButton } from '@/components/InvitationBackButton';
import { WeddingEnvelope } from '@/components/WeddingEnvelope';
import { WeddingInvitation } from '@/components/WeddingInvitation';

export function WeddingPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [animateEnvelopeIn, setAnimateEnvelopeIn] = useState(false);

  const handleOpen = () => {
    setAnimateEnvelopeIn(false);
    setIsOpen(true);
  };

  const handleBack = () => {
    setIsOpen(false);
    setAnimateEnvelopeIn(true);
    window.setTimeout(() => setAnimateEnvelopeIn(false), 600);
  };

  return (
    <Box className={`wedding-page${isOpen ? ' wedding-page--open' : ''}`}>
      <Box className="wedding-bg" aria-hidden />
      <LanguageSwitcher />

      {isOpen && <InvitationBackButton onBack={handleBack} />}

      {isOpen ? (
        <WeddingInvitation />
      ) : (
        <WeddingEnvelope animateIn={animateEnvelopeIn} onOpen={handleOpen} />
      )}
    </Box>
  );
}
