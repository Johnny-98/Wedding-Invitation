import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { WeddingLayout } from '@/components/WeddingLayout';
import { WeddingEnvelope } from '@/components/WeddingEnvelope';

export function EnvelopePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [animateEnvelopeIn, setAnimateEnvelopeIn] = useState(false);

  useEffect(() => {
    if (location.state?.animateEnvelopeIn) {
      setAnimateEnvelopeIn(true);
      window.setTimeout(() => setAnimateEnvelopeIn(false), 600);
      navigate('/', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  return (
    <WeddingLayout>
      <WeddingEnvelope
        animateIn={animateEnvelopeIn}
        onOpen={() => navigate('/invitation')}
      />
    </WeddingLayout>
  );
}
