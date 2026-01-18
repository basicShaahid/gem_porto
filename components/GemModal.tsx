"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Gem } from "../data/gems";

function formatAUD(n: number) {
  return n.toLocaleString("en-AU", { style: "currency", currency: "AUD" });
}

export function GemModal({
  gem,
  onClose,
}: {
  gem: Gem | null;
  onClose: () => void;
}) {
  const [imgOk, setImgOk] = useState(true);

  useEffect(() => {
    if (!gem) return;
    setImgOk(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gem, onClose]);

  if (!gem) return null;

  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <button
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close modal"
      />

      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl">
        <div className="grid gap-0 md:grid-cols-2">
          <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px]">
            {imgOk ? (
              <Image
                src={gem.image}
                alt={gem.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,.25),transparent_55%),radial-gradient(circle_at_70%_60%,rgba(56,189,248,.18),transparent_55%),radial-gradient(circle_at_40%_80%,rgba(217,70,239,.12),transparent_55%)]" />
            )}
            <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 to-transparent" />
          </div>

          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-slate-50">
                  {gem.name}
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  {gem.description ?? "—"}
                </p>
              </div>

              <button
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:bg-white/10"
              >
                Close
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {gem.origin && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {gem.origin}
                </span>
              )}
              {gem.color && (
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">
                  {gem.color}
                </span>
              )}
              {typeof gem.carat === "number" && (
                <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs text-amber-200">
                  {gem.carat} ct
                </span>
              )}
              {typeof gem.priceAUD === "number" && (
                <span className="rounded-full border border-amber-400/25 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
                  {formatAUD(gem.priceAUD)}
                </span>
              )}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {gem.cut && (
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-[11px] text-slate-400">Cut</div>
                  <div className="text-sm font-medium text-slate-100">{gem.cut}</div>
                </div>
              )}
              {gem.clarity && (
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <div className="text-[11px] text-slate-400">Clarity</div>
                  <div className="text-sm font-medium text-slate-100">{gem.clarity}</div>
                </div>
              )}
            </div>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs text-slate-400">
                Tip: Replace the placeholder images in <span className="font-semibold text-slate-200">public/gems</span> to make this look premium instantly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
