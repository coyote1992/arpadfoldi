import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const BASE = "https://arpadfolditc.hu";
const PAGES = ["/", "/palyafoglalas/", "/edzesek/", "/klub/", "/tortenet/", "/kapcsolat/", "/webkamera/"];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.map((p) => ({ url: BASE + p, changeFrequency: p === "/" ? "weekly" : "monthly", priority: p === "/" ? 1 : 0.7 }));
}
