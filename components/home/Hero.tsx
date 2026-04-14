import Image from "next/image";

export default function Hero() {
  return (
    <section className="grid min-h-[74vh] items-center gap-14 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-24">
      <div className="max-w-2xl">
        <div className="mb-6 inline-flex items-center gap-3 border border-[#E7DED2] bg-[#FBF8F3] px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-[#7E7368]">
          Curated Stones
          <span className="h-1.5 w-1.5 rounded-full bg-[#C6A96B]" />
          Archive Edition
        </div>

        <h1 className="max-w-3xl font-serif text-5xl leading-[0.96] text-[#1E1B18] md:text-7xl">
          A quieter setting for rare stones.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#6E675F] md:text-lg">
          A minimal catalogue built around light, form, and material detail,
          allowing each gemstone to hold the page without distraction.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#archive"
            className="border border-[#C6A96B] bg-[#C6A96B] px-6 py-3 text-sm uppercase tracking-[0.24em] text-[#1E1B18] transition hover:bg-transparent"
          >
            View Collection
          </a>

          <a
            href="#featured"
            className="border border-[#E1D6C8] bg-[#FBF8F3] px-6 py-3 text-sm uppercase tracking-[0.24em] text-[#3A342E] transition hover:border-[#C6A96B] hover:text-[#1E1B18]"
          >
            Featured Stones
          </a>
        </div>

        <div className="mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-[#E7DED2] pt-6">
          {[
            ["06", "Stones"],
            ["04", "Origins"],
            ["01", "Private Archive"],
          ].map(([value, label]) => (
            <div key={label}>
              <div className="text-2xl font-semibold text-[#1E1B18]">
                {value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.25em] text-[#8D8174]">
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <div className="relative overflow-hidden border border-[#DCCEBB] bg-[#FBF8F3] p-5 shadow-[0_18px_50px_rgba(30,27,24,0.06)]">
          <div className="relative aspect-[4/5] w-full overflow-hidden border border-[#E7DED2] bg-[#F6F1EA]">
            <Image
              src="/gems/sapphire.jpg"
              alt="Blue Sapphire"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-4 flex items-center justify-between border-t border-[#E7DED2] pt-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.26em] text-[#8D8174]">
                Featured Stone
              </div>
              <div className="mt-2 text-2xl font-serif text-[#1E1B18]">
                Blue Sapphire
              </div>
            </div>

            <div className="text-right">
              <div className="text-[11px] uppercase tracking-[0.26em] text-[#8D8174]">
                Sri Lanka · 2.1 ct
              </div>
              <div className="mt-2 text-lg text-[#8C6E34]">$1,800</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}