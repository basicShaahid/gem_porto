import Link from "next/link";

const navItems = [
  { label: "Collection", href: "#collection" },
  { label: "Featured", href: "#featured" },
  { label: "Archive", href: "#archive" },
  { label: "Contact", href: "#" },
];

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between border-b border-[#E7DED2] pb-5">
      <Link href="/" className="block">
        <div>
          <div className="text-[11px] uppercase tracking-[0.35em] text-[#8D8174]">
            Private Collection
          </div>
          <div className="mt-2 text-2xl font-serif tracking-[0.14em] text-[#1E1B18]">
            GEM PORTO
          </div>
        </div>
      </Link>

      <div className="hidden gap-8 text-sm text-[#6E675F] md:flex">
        {navItems.map((item) => (
          <a key={item.label} href={item.href} className="transition hover:text-[#1E1B18]">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}