import { Route, Routes } from 'react-router-dom';

import { RsvpPage } from '@/pages/RsvpPage';
import { WeddingPage } from '@/pages/WeddingPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WeddingPage />} />
      <Route path="/rsvp" element={<RsvpPage />} />
    </Routes>
  );
}
