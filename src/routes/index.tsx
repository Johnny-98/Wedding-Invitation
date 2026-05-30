import { Navigate, Route, Routes } from 'react-router-dom';

import { EnvelopePage } from '@/pages/EnvelopePage';
import { InvitationPage } from '@/pages/InvitationPage';
import { RsvpPage } from '@/pages/RsvpPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EnvelopePage />} />
      <Route path="/invitation" element={<InvitationPage />} />
      <Route path="/rsvp" element={<RsvpPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
