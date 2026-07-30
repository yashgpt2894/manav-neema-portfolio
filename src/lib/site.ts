const configuredSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "http://localhost:3000";

export const siteUrl = configuredSiteUrl.replace(/\/+$/, "");
