import { LoveStory } from '@/components/LoveStory';
import { Rsvp } from '@/components/Rsvp';
import { Timeline } from '@/components/Timeline';
import { WeddingLayout } from '@/components/WeddingLayout';
import { WeddingInvitation } from '@/components/WeddingInvitation';

export function InvitationPage() {
  return (
    <WeddingLayout>
      <WeddingInvitation />
      <LoveStory />
      <Timeline />
      <Rsvp />
    </WeddingLayout>
  );
}
