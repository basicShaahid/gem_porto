import Link from "next/link";
import Image from "next/image";
import type { Gem } from "@/types/gem";

type GemCardProps = {
  gem: Gem;
};

export default function GemCard({ gem }: GemCardProps) {
  return (
    <Link href={`/gems/${gem.slug}`} className="block">
      <article className="group border border-[#E7DED2] bg-[#FBF8F3] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#C6A96B] hover:bg-[#F1EBE2] hover:shadow-[0_18px_40px_rgba(30,27,24,0.06)]">
        <div className="relative aspect-[4/3] overflow-hidden border border-[#E7DED2] bg-[#F6F1EA]">
          <div className="absolute left-4 top-4 z-10 border border-[#DCCEBB] bg-[#FBF8F3]/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-[#7E7368]">
            {gem.origin}
          </div>

          {/* <div className="absolute right-4 top-4 z-10 border border-[#DCCEBB] bg-[#FBF8F3]/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-[#8C6E34]">
            {gem.price}
          </div> */}

          <Image
            src={gem.image}
            alt={gem.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-serif text-[#1E1B18]">{gem.name}</h3>
            <p className="mt-2 text-sm text-[#6E675F]">{gem.description}</p>
          </div>

          <div className="border border-[#E1D6C8] px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-[#4B443D] transition group-hover:border-[#C6A96B]">
            View
          </div>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 border-t border-[#E7DED2] pt-4 text-sm">
          {[
            ["Origin", gem.origin],
            ["Color", gem.color],
            ["Carat", gem.carat],
            ["Cut", gem.cut],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border border-[#E7DED2] bg-[#FCFAF6] p-3 group-hover:border-[#DCC18A]"
            >
              <div className="text-[10px] uppercase tracking-[0.24em] text-[#8D8174] group-hover:text-[#8C6E34]">
                {label}
              </div>
              <div className="mt-2 text-sm text-[#1E1B18]">{value}</div>
            </div>
          ))}
        </div>
      </article>
    </Link>
  );
}