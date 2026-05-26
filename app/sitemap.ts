import type { MetadataRoute } from "next";

const BASE = "https://jrhomecreation.be";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${BASE}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE}/over-ons`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE}/diensten`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.8 },
    { url: `${BASE}/privacy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/voorwaarden`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/impressum`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
