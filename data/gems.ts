export type Gem = {
  id: string;
  name: string;
  origin?: string;
  color?: string;
  carat?: number;
  cut?: string;
  clarity?: string;
  priceAUD?: number;
  description?: string;
  image: string; // path in /public
};

export const gems: Gem[] = [
  {
    id: "sapphire-01",
    name: "Blue Sapphire",
    origin: "Sri Lanka",
    color: "Royal Blue",
    carat: 2.1,
    cut: "Oval",
    clarity: "VVS",
    priceAUD: 1800,
    description: "Deep blue with strong brilliance.",
    image: "/gems/sapphire.jpg",
  },

  {
    id: "ruby-01",
    name: "Ruby",
    origin: "Myanmar",
    color: "Pigeon Blood Red",
    carat: 1.6,
    cut: "Cushion",
    clarity: "VS",
    priceAUD: 2400,
    description: "Rich red tone with strong saturation.",
    image: "/gems/ruby.jpg",
  },
  {
    id: "emerald-01",
    name: "Emerald",
    origin: "Colombia",
    color: "Vivid Green",
    carat: 1.9,
    cut: "Emerald Cut",
    clarity: "SI",
    priceAUD: 2100,
    description: "Classic emerald cut with a bright green hue.",
    image: "/gems/emerald.jpg",
  },
  {
    id: "amethyst-01",
    name: "Amethyst",
    origin: "Brazil",
    color: "Deep Purple",
    carat: 3.4,
    cut: "Pear",
    clarity: "Eye Clean",
    priceAUD: 320,
    description: "Bold purple with clean transparency.",
    image: "/gems/amethyst.jpg",
  },
  {
    id: "topaz-01",
    name: "London Blue Topaz",
    origin: "Nigeria",
    color: "Inky Blue",
    carat: 4.2,
    cut: "Round",
    clarity: "Eye Clean",
    priceAUD: 260,
    description: "Dark blue topaz with bright sparkle.",
    image: "/gems/topaz.jpg",
  },
  {
    id: "opal-01",
    name: "Black Opal",
    origin: "Australia",
    color: "Multi-Color Fire",
    carat: 2.7,
    cut: "Freeform",
    clarity: "N/A",
    priceAUD: 1500,
    description: "Strong play-of-color on a dark base.",
    image: "/gems/opal.jpg",
  },
];

