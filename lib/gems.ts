import { gems } from "@/data/gems";

export function getAllGems() {
  return gems;
}

export function getFeaturedGems() {
  return gems.filter((gem) => gem.featured);
}

export function getGemBySlug(slug: string) {
  return gems.find((gem) => gem.slug === slug);
}