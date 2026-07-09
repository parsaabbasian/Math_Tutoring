import type { MetadataRoute } from 'next';

// Keep in sync with SITE_URL in layout.tsx once the real domain is purchased.
const SITE_URL = 'https://avinmath.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
