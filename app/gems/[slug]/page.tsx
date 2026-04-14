import GemDetailView from "@/components/gems/GemDetailView";
import Navbar from "@/components/layout/Navbar";
import { getGemBySlug } from "@/lib/gems";
import { notFound } from "next/navigation";

type GemPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function GemPage({ params }: GemPageProps) {
  const { slug } = await params;
  const gem = getGemBySlug(slug);

  if (!gem) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#F7F3ED] text-[#1E1B18]">
      <main className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <Navbar />
        <GemDetailView gem={gem} />
      </main>
    </div>
  );
}