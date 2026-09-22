import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://clawsteps.com';

  return [
    { url: baseUrl, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/aboutus`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/term-and-condition`, lastModified: new Date(), priority: 0.3 },
    { url: `${baseUrl}/privacypolicy`, lastModified: new Date(), priority: 0.3 },
  ];
}