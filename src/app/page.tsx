import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-brand-dark font-poppins">
      <Navbar />
      <Banner />
    </main>
  );
}
