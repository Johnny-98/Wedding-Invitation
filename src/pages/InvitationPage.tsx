import { Gifts } from '@/components/Gifts';
import { IrenAndPeter } from '@/components/IrenAndPeter';
import { LoveStory } from '@/components/LoveStory';
import { OtherDetails } from '@/components/OtherDetails';
import { Rsvp } from '@/components/Rsvp';
import { WeddingLayout } from '@/components/WeddingLayout';
import { WeddingProgram } from '@/components/WeddingProgram';

export function InvitationPage() {
  return (
    <WeddingLayout>
      <IrenAndPeter />
      <LoveStory />
      <WeddingProgram />
      <OtherDetails />
      <Gifts />
      <Rsvp />
    </WeddingLayout>
  );
}
