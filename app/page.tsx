"use client";

import { useMemo, useState } from "react";
import { gems as allGems, type Gem } from "../data/gems";
import { GemCard } from "@/components/GemCard";
import { GemModal } from "@/components/GemModal";

type SortKey = "name" | "priceHigh" | "priceLow" | "caratHigh" | "caratLow";

export default function Home() {
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("name");
  const [active, setActive] = useState<Gem | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    let list = allGems.filter((g) => {
      if (!q) return true;
      const hay = [
        g.name,
        g.origin ?? "",
        g.color ?? "",
        g.cut ?? "",
        g.clarity ?? "",
        g.description ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return hay.includes(q);
    });

    const n = (v: unknown) => (typeof v === "number" ? v : -Infinity);

    list = list.sort((a, b) => {
      if (sort === "name") return a.name.localeCompare(b.name);
      if (sort === "priceHigh") return n(b.priceAUD) - n(a.priceAUD);
      if (sort === "priceLow") return n(a.priceAUD) - n(b.priceAUD);
      if (sort === "caratHigh") return n(b.carat) - n(a.carat);
      if (sort === "caratLow") return n(a.carat) - n(b.carat);
      return 0;
    });

    return list;
  }, [query, sort]);

  return (
    <main className="noise min-h-screen bg-[radial-gradient(circle_at_20%_10%,rgba(245,158,11,.18),transparent_40%),radial-gradient(circle_at_70%_20%,rgba(56,189,248,.14),transparent_45%),radial-gradient(circle_at_50%_80%,rgba(217,70,239,.10),transparent_50%),linear-gradient(to_bottom,rgba(2,6,23,1),rgba(2,6,23,.98),rgba(0,0,0,1))] text-slate-100">
      {/* Top bar */}
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl border border-white/10 bg-white/5">
              <span className="text-sm font-bold text-amber-300">GP</span>
            </div>
            <div className="leading-tight">
              <div className="text-sm text-slate-300">Collection</div>
              <div className="text-lg font-semibold tracking-tight text-amber-300">
                GEM PORTO
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
              Total: <span className="font-semibold">{filtered.length}</span>
            </span>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-6 pt-10">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_70px_-30px_rgba(0,0,0,.9)] backdrop-blur-xl md:p-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(245,158,11,.20),transparent_40%),radial-gradient(circle_at_80%_35%,rgba(56,189,248,.14),transparent_45%)]" />
          <div className="relative">
            <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Showcase your gems with a premium look
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-300 md:text-base">
              Search, sort, and open each gem for a detailed view. Replace placeholder images to instantly elevate the realism.
            </p>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <div className="md:col-span-2">
                <label className="text-xs text-slate-400">Search</label>
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Try: sapphire, Sri Lanka, oval..."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 outline-none ring-0 placeholder:text-slate-500 focus:border-amber-400/40"
                />
              </div>

              <div>
                <label className="text-xs text-slate-400">Sort</label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-slate-100 outline-none focus:border-amber-400/40"
                >
                  <option value="name">Name (A → Z)</option>
                  <option value="priceHigh">Price (High → Low)</option>
                  <option value="priceLow">Price (Low → High)</option>
                  <option value="caratHigh">Carat (High → Low)</option>
                  <option value="caratLow">Carat (Low → High)</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-300">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Glass UI
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Gradient borders
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Hover motion
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                Modal details
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-16 pt-4">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((g) => (
            <GemCard key={g.id} gem={g} onOpen={setActive} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 text-center text-slate-300">
            No gems found. Try a different search.
          </div>
        )}
      </section>

      <GemModal gem={active} onClose={() => setActive(null)} />
    </main>
  );
}
