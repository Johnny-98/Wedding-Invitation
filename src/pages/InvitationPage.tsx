import { WeddingLayout } from '@/components/WeddingLayout';
import { WeddingInvitation } from '@/components/WeddingInvitation';

export function InvitationPage() {
  return (
    <WeddingLayout open>
      <WeddingInvitation />
    </WeddingLayout>
  );
}
