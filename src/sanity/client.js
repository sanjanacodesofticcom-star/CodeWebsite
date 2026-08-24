import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { apiVersion, dataset, projectId, useCdn } from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const builder = imageUrlBuilder(client);

export function urlForImage(source) {
  if (!source || !source.asset) return null;
  return builder.image(source).auto('format').fit('max');
}

/**
 * Fetch all testimonials from Sanity CMS
 * 4 Parameters: logo, testimonialText, userName, companyName
 */
export async function getTestimonials() {
  if (!projectId || projectId === 'codesoftic_demo') {
    return null;
  }

  try {
    const query = `*[_type == "testimonial"] | order(order asc, _createdAt desc) {
      _id,
      logo,
      testimonialText,
      userName,
      companyName,
      userRole,
      userLocation,
      userAvatar
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : null;
  } catch (error) {
    console.warn('[Sanity CMS] Fetch notice:', error.message);
    return null;
  }
}
