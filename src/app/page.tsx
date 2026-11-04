import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import PlatformFeatures from "@/components/PlatformFeatures";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip font-poppins">
      <Navbar />
      <Banner />
      <PlatformFeatures></PlatformFeatures>
    </main>
  );
}
