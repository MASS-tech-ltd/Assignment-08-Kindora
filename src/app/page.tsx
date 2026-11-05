import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import PlatformFeatures from "@/components/PlatformFeatures";
import VisualStories from "@/components/VisualStories";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip font-poppins">
      <Navbar />
      <Banner />
      <PlatformFeatures></PlatformFeatures>
      <VisualStories></VisualStories>
    </main>
  );
}
