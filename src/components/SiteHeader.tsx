import { Box } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { BackgroundMusic } from '@/components/BackgroundMusic';
import { InvitationBackButton } from '@/components/InvitationBackButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function SiteHeader() {
  const location = useLocation();
  const navigate = useNavigate();
  const showBack =
    location.pathname === '/invitation' || location.pathname === '/rsvp';

  const headerVariant =
    location.pathname === '/rsvp'
      ? 'site-header--rsvp'
      : location.pathname === '/invitation'
      ? 'site-header--invitation'
      : 'site-header--envelope';

  return (
    <Box component="header" className={`site-header ${headerVariant}`}>
      {showBack &&
        (location.pathname === '/rsvp' ? (
          <InvitationBackButton to="/invitation" />
        ) : (
          <InvitationBackButton
            onBack={() => navigate('/', { state: { animateEnvelopeIn: true } })}
          />
        ))}
      <Box className="site-header-end">
        <LanguageSwitcher />
        <BackgroundMusic />
      </Box>
    </Box>
  );
}
