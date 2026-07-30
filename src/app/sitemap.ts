import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date("2026-07-30"),
      changeFrequency: "monthly",
      priority: 1,
      images: [`${siteUrl}/images/manav-neema.jpg`],
    },
  ];
}
