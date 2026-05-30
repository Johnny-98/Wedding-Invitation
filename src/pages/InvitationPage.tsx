import { useNavigate } from 'react-router-dom';

import { WeddingLayout } from '@/components/WeddingLayout';
import { WeddingInvitation } from '@/components/WeddingInvitation';

export function InvitationPage() {
  const navigate = useNavigate();

  return (
    <WeddingLayout
      open
      onBack={() => navigate('/', { state: { animateEnvelopeIn: true } })}
    >
      <WeddingInvitation />
    </WeddingLayout>
  );
}
