
import Banner from "@/components/Banner";
import PlatformFeatures from "@/components/PlatformFeatures";
import RecentUpcomingEvents from "@/components/RecentUpcomingEvents";
import VisualStories from "@/components/VisualStories";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip font-poppins">
      <Banner />
      <PlatformFeatures></PlatformFeatures>
      <RecentUpcomingEvents></RecentUpcomingEvents>
      <WhatWeDo></WhatWeDo>
      <VisualStories></VisualStories>
    </main>
  );
}
