import { MetadataRoute } from 'next';
import { contentfulClient } from '@/app/lib/contentfulClient';
import type { ContentfulServiceFields } from '@/app/types/contentful';

export const revalidate = 3600;

type ServiceEntrySkeleton = {
  fields: ContentfulServiceFields;
  contentTypeId: 'service';
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.nistor-gartenbau.de';
  
  let services: string[] = [];
  try {
    const res = await contentfulClient.getEntries<ServiceEntrySkeleton>({
      content_type: 'service',
      limit: 100,
      select: ['fields.slug'],
    });
    services = res.items.map(item => item.fields.slug).filter(Boolean);
  } catch (error) {
    console.error('Error fetching services for sitemap:', error);
  }

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/Impressum`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/Datenschutz`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.3,
    },
  ];

  const servicePages = services.map(slug => ({
    url: `${baseUrl}/leistungen/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}