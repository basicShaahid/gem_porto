import { getFeaturedGems } from "@/lib/gems";

export default function FeaturedGems() {
  const featured = getFeaturedGems();

  return (
    <section id="featured" className="border-t border-[#E7DED2] py-10">
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
          Quiet composition, measured spacing, and soft gold detailing to keep
          attention on the stones themselves.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {featured.map((gem) => (
          <article
            key={gem.slug}
            className="group border border-[#E7DED2] bg-[#FBF8F3] p-4 transition duration-300 hover:-translate-y-1 hover:border-[#C6A96B] hover:shadow-[0_18px_40px_rgba(30,27,24,0.06)]"
          >
            <div className="aspect-[4/3] overflow-hidden border border-[#E7DED2] bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.98),rgba(239,231,220,0.95)_24%,rgba(247,243,237,1)_72%)]">
              <div className="flex h-full items-center justify-center">
                <div className="h-40 w-40 rotate-6 bg-[conic-gradient(from_180deg,rgba(255,255,255,0.98),rgba(198,169,107,0.72),rgba(232,224,211,0.95),rgba(209,221,244,0.85),rgba(255,255,255,0.98))] [clip-path:polygon(50%_0%,82%_18%,100%_50%,82%_82%,50%_100%,18%_82%,0%_50%,18%_18%)] shadow-[0_12px_30px_rgba(198,169,107,0.14)] transition duration-500 group-hover:scale-105" />
              </div>
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

            <p className="mt-4 max-w-md text-sm leading-6 text-[#6E675F]">
              {gem.description}
            </p>

            <div className="mt-6 border-t border-[#E7DED2] pt-4 text-[11px] uppercase tracking-[0.24em] text-[#8D8174] group-hover:text-[#8C6E34]">
              {gem.carat}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}