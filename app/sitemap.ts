import { MetadataRoute } from "next";
import { destinations } from "@/data/destinations";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    ...destinations.map((destination) => ({
      url: `${siteConfig.url}/destinations/${destination.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8
    }))
  ];
}
