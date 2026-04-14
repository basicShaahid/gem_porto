import Image from "next/image";
import Link from "next/link";
import { getAllGems } from "@/lib/gems";

export default function FeaturedGems() {
  const gems = getAllGems();
  const scrollingGems = [...gems, ...gems];

  return (
    <section id="featured" className="border-t border-[#E7DED2] py-10 overflow-hidden">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <div className="text-[11px] uppercase tracking-[0.28em] text-[#8D8174]">
            Featured Selection
          </div>
          <h2 className="mt-3 font-serif text-3xl text-[#1E1B18] md:text-5xl">
            Selected stones
          </h2>
        </div>

        <p className="max-w-xl text-sm leading-6 text-[#6E675F]">
          A slow moving selection of the full archive, allowing each stone to be
          seen in sequence.
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="featured-marquee flex w-max gap-6">
          {scrollingGems.map((gem, index) => (
            <Link
              key={`${gem.slug}-${index}`}
              href={`/gems/${gem.slug}`}
              className="block"
            >
              <article className="group w-[320px] shrink-0 border border-[#E7DED2] bg-[#FBF8F3] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#C6A96B] hover:bg-[#F1EBE2] hover:shadow-[0_18px_40px_rgba(30,27,24,0.06)]">
                <div className="relative aspect-[4/3] overflow-hidden border border-[#E7DED2] bg-[#F6F1EA]">
                  <div className="absolute left-4 top-4 z-10 border border-[#DCCEBB] bg-[#FBF8F3]/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-[#7E7368]">
                    {gem.origin}
                  </div>

                  <div className="absolute right-4 top-4 z-10 border border-[#DCCEBB] bg-[#FBF8F3]/90 px-2.5 py-1 text-[10px] uppercase tracking-[0.24em] text-[#8C6E34]">
                    {gem.price}
                  </div>

                  <Image
                    src={gem.image}
                    alt={gem.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.28em] text-[#8D8174] group-hover:text-[#8C6E34]">
                      {gem.origin}
                    </div>
                    <h3 className="mt-2 text-2xl font-serif text-[#1E1B18]">
                      {gem.name}
                    </h3>
                  </div>

                  <div className="border border-[#E7DED2] px-3 py-2 text-xs uppercase tracking-[0.24em] text-[#4B443D] group-hover:border-[#C6A96B]">
                    {gem.price}
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-[#6E675F]">
                  {gem.description}
                </p>

                <div className="mt-6 border-t border-[#E7DED2] pt-4 text-[11px] uppercase tracking-[0.24em] text-[#8D8174] group-hover:text-[#8C6E34]">
                  {gem.carat}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}