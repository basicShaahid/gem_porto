import GemCard from "@/components/gems/GemCard";
import { getAllGems } from "@/lib/gems";

export default function GemGrid() {
  const gems = getAllGems();

  return (
    <section id="archive" className="border-t border-[#E7DED2] bg-[#F6F1EA]/55 py-10">
      <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#8D8174]">
            Collection
          </div>
          <h2 className="mt-3 font-serif text-3xl uppercase tracking-[0.06em] text-[#1E1B18] md:text-5xl">
            THE ARCHIVE
          </h2>
        </div>

        <div className="flex w-full justify-start md:w-auto md:justify-end">
          <select className="border border-[#E1D6C8] bg-[#FBF8F3] px-4 py-3 text-sm text-[#1E1B18] outline-none focus:border-[#C6A96B]">
            <option>Name A–Z</option>
            <option>Highest Carat</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {gems.map((gem) => (
          <GemCard key={gem.slug} gem={gem} />
        ))}
      </div>
    </section>
  );
}