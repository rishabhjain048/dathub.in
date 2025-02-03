import type { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.dathub.in/',
      lastModified: new Date('2024-11-24T07:52:48+00:00'),
      changeFrequency: 'monthly',
      priority: 1.00,
    },
    {
      url: 'https://www.dathub.in/ourservices',
      lastModified: new Date('2024-11-24T07:52:48+00:00'),
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: 'https://www.dathub.in/ourprojects',
      lastModified: new Date('2024-11-24T07:52:48+00:00'),
      changeFrequency: 'monthly',
      priority: 0.94,
    },
    {
      url: 'https://www.dathub.in/about',
      lastModified: new Date('2024-11-24T07:52:48+00:00'),
      changeFrequency: 'monthly',
      priority: 0.99,
    },
    
    
  ];
}