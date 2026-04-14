import FeaturedGems from "@/components/home/FeaturedGems";
import GemGrid from "@/components/home/GemGrid";
import Hero from "@/components/home/Hero";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F7F3ED] text-[#1E1B18] selection:bg-[#C6A96B] selection:text-[#1E1B18]">
      <div className="pointer-events-none fixed inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(198,169,107,0.12),transparent_24%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.6),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.35),transparent_24%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(198,169,107,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(198,169,107,0.08)_1px,transparent_1px)] bg-[size:120px_120px] opacity-[0.08]" />
      </div>

      <main className="relative mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <Navbar />
        <Hero />
        <FeaturedGems />
        <GemGrid />
      </main>
    </div>
  );
}