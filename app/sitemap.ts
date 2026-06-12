import type { MetadataRoute } from "next";

const BASE = "https://gymvision-site.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/features`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/why-gymvision`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/case-study/gas-house`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/founder`, changeFrequency: "yearly", priority: 0.5 },
    { url: `${BASE}/changelog`, changeFrequency: "weekly", priority: 0.6 },
    { url: `${BASE}/vs/pushpress`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/privacy`, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terms`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
