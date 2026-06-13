import { Navigate, Route, Routes } from 'react-router-dom';

import { InvitationPage } from '@/pages/InvitationPage';
import { RsvpPage } from '@/pages/RsvpPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<InvitationPage />} />
      <Route path="/invitation" element={<Navigate to="/" replace />} />
      <Route path="/rsvp" element={<RsvpPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
