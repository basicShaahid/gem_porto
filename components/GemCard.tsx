"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Gem } from "../data/gems";

function formatAUD(n: number) {
  return n.toLocaleString("en-AU", { style: "currency", currency: "AUD" });
}

export function GemCard({
  gem,
  onOpen,
}: {
  gem: Gem;
  onOpen: (gem: Gem) => void;
}) {
  const [imgOk, setImgOk] = useState(true);

  const chips = useMemo(() => {
    const out: { label: string; value: string }[] = [];
    if (gem.origin) out.push({ label: "Origin", value: gem.origin });
    if (gem.color) out.push({ label: "Color", value: gem.color });
    if (typeof gem.carat === "number") out.push({ label: "Carat", value: `${gem.carat}` });
    if (gem.cut) out.push({ label: "Cut", value: gem.cut });
    if (gem.clarity) out.push({ label: "Clarity", value: gem.clarity });
    return out.slice(0, 4);
  }, [gem]);

  return (
    <button
      type="button"
      onClick={() => onOpen(gem)}
      className="group relative w-full text-left"
      aria-label={`Open details for ${gem.name}`}
    >
      {/* gradient border */}
      <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-br from-amber-400/40 via-sky-500/25 to-fuchsia-500/25 opacity-70 blur-sm transition-opacity group-hover:opacity-100" />

      <article className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_10px_40px_-18px_rgba(0,0,0,.9)] backdrop-blur-xl transition-transform duration-300 group-hover:-translate-y-1">
        {/* image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
          {imgOk ? (
            <Image
              src={gem.image}
              alt={gem.name}
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover opacity-95 transition-transform duration-500 group-hover:scale-[1.04]"
              onError={() => setImgOk(false)}
              priority={false}
            />
          ) : (
            <div className="absolute inset-0">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,.25),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(56,189,248,.18),transparent_55%),radial-gradient(circle_at_40%_80%,rgba(217,70,239,.12),transparent_55%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200">
                  Add image: <span className="font-semibold">{gem.image}</span>
                </div>
              </div>
            </div>
          )}

          {/* top badges */}
          <div className="absolute left-4 top-4 flex gap-2">
            {gem.origin && (
              <span className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-slate-200">
                {gem.origin}
              </span>
            )}
            {typeof gem.carat === "number" && (
              <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
                {gem.carat} ct
              </span>
            )}
          </div>

          {/* price */}
          {typeof gem.priceAUD === "number" && (
            <div className="absolute right-4 top-4 rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
              {formatAUD(gem.priceAUD)}
            </div>
          )}

          {/* bottom glow */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        </div>

        {/* content */}
        <div className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-slate-50">
                {gem.name}
              </h3>
              <p className="mt-1 line-clamp-2 text-sm text-slate-300">
                {gem.description ?? "Click to view full details."}
              </p>
            </div>
            <span className="mt-1 rounded-full bg-white/5 px-2 py-1 text-xs text-slate-300 ring-1 ring-white/10">
              View
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3">
            {chips.map((c) => (
              <div key={c.label} className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2">
                <div className="text-[11px] text-slate-400">{c.label}</div>
                <div className="text-sm font-medium text-slate-100">{c.value}</div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </button>
  );
}
