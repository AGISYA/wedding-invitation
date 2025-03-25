import { WelcomeGate } from "@/components/welcome-gate";
import { EventDetails } from "@/components/event-details";
import { Timeline } from "@/components/timeline";
import { Countdown } from "@/components/countdown";
import { Wishes } from "@/components/wishes";
import { Rsvp } from "@/components/rsvp";
import { GiftRegistry } from "@/components/gift-registry";
import { Location } from "@/components/location";
import { Footer } from "@/components/footer";
import { FloatingMusic } from "@/components/floating-music";
import { Navigation } from "@/components/navigation";
import { AutoScroll } from "@/components/auto-scroll";
import { CoupleStory } from "@/components/couple-story";

export default function Home() {
  return (
    <main className="relative">
      <WelcomeGate />
      <Navigation />
      <CoupleStory />
      <Timeline />
      <EventDetails />
      <Countdown />
      <Wishes />
      <Rsvp />
      <GiftRegistry />
      <Location />
      <Footer />
      <FloatingMusic />
      <AutoScroll />
    </main>
  );
}
