import type { MetadataRoute } from 'next';

// Keep in sync with SITE_URL in layout.tsx once the real domain is purchased.
const SITE_URL = 'https://avinmath.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
