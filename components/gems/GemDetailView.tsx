import Image from "next/image";
import type { Gem } from "@/types/gem";

type GemDetailViewProps = {
  gem: Gem;
};

export default function GemDetailView({ gem }: GemDetailViewProps) {
  return (
    <section className="grid gap-10 py-16 lg:grid-cols-[1.05fr_0.95fr]">
      <div className="border border-[#E7DED2] bg-[#FBF8F3] p-5 shadow-[0_18px_50px_rgba(30,27,24,0.06)]">
        <div className="relative aspect-[4/5] overflow-hidden border border-[#E7DED2] bg-[#F6F1EA]">
          <Image
            src={gem.image}
            alt={gem.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center">
        <div className="text-[11px] uppercase tracking-[0.3em] text-[#8D8174]">
          {gem.origin}
        </div>

        <h1 className="mt-3 font-serif text-4xl text-[#1E1B18] md:text-6xl">
          {gem.name}
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-[#6E675F]">
          {gem.description}
        </p>

        {/* <div className="mt-8 inline-flex w-fit border border-[#DCCEBB] bg-[#FBF8F3] px-4 py-2 text-sm uppercase tracking-[0.24em] text-[#8C6E34]">
          {gem.price}
        </div> */}

        <div className="mt-10 grid grid-cols-2 gap-4 border-t border-[#E7DED2] pt-6">
          {[
            ["Origin", gem.origin],
            ["Color", gem.color],
            ["Carat", gem.carat],
            ["Cut", gem.cut],
          ].map(([label, value]) => (
            <div
              key={label}
              className="border border-[#E7DED2] bg-[#FCFAF6] p-4"
            >
              <div className="text-[10px] uppercase tracking-[0.24em] text-[#8D8174]">
                {label}
              </div>
              <div className="mt-2 text-base text-[#1E1B18]">{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}