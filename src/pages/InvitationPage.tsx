import { LoveStory } from '@/components/LoveStory';
import { OtherDetails } from '@/components/OtherDetails';
import { Rsvp } from '@/components/Rsvp';
import { RsvpBanner } from '@/components/RsvpBanner';
import { Timeline } from '@/components/Timeline';
import { WeddingLayout } from '@/components/WeddingLayout';
import { WeddingInvitation } from '@/components/WeddingInvitation';

export function InvitationPage() {
  return (
    <WeddingLayout>
      <WeddingInvitation />
      <LoveStory />
      <Timeline />
      <OtherDetails />
      <Rsvp />
      <RsvpBanner />
    </WeddingLayout>
  );
}
