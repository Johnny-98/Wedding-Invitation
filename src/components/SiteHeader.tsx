import { Box } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { BackgroundMusic } from '@/components/BackgroundMusic';
import { InvitationBackButton } from '@/components/InvitationBackButton';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

export function SiteHeader() {
  const location = useLocation();
  const showBack = location.pathname === '/rsvp';

  const headerVariant =
    location.pathname === '/rsvp'
      ? 'site-header--rsvp'
      : 'site-header--invitation';

  return (
    <Box component="header" className={`site-header ${headerVariant}`}>
      {showBack && <InvitationBackButton to="/" />}
      <Box className="site-header-end">
        <LanguageSwitcher />
        <BackgroundMusic />
      </Box>
    </Box>
  );
}
