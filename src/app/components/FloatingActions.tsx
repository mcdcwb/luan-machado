import { ScrollToTop } from './ScrollToTop';
import { WhatsAppButton } from './WhatsAppButton';

export function FloatingActions() {
  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col gap-3 items-center">
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
