import { Route, Routes } from 'react-router-dom';

import { WeddingPage } from '@/pages/WeddingPage';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WeddingPage />} />
    </Routes>
  );
}
