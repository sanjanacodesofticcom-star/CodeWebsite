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
  if (!projectId) {
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
    console.warn('[Sanity CMS] Testimonials fetch notice:', error.message);
    return null;
  }
}

/**
 * Fetch all Verified Client Outcomes (Case Studies) from Sanity CMS
 * Parameters: image, eyebrow, title, slug, stat1Value, stat1Label, stat2Value, stat2Label, description, ctaText, ctaUrl, full story fields
 */
export async function getCaseStudies() {
  if (!projectId) {
    return null;
  }

  try {
    const query = `*[_type == "caseStudy"] | order(order asc, _createdAt desc) {
      _id,
      image,
      eyebrow,
      title,
      slug,
      stat1Value,
      stat1Label,
      stat2Value,
      stat2Label,
      description,
      clientName,
      industry,
      challenge,
      solution,
      resultsSummary,
      testimonialQuote,
      testimonialAuthor,
      ctaText,
      ctaUrl,
      order
    }`;
    const data = await client.fetch(query);
    return data && data.length > 0 ? data : null;
  } catch (error) {
    console.warn('[Sanity CMS] Case Studies fetch notice:', error.message);
    return null;
  }
}

/**
 * Fetch a single case study by slug or ID
 */
export async function getCaseStudyBySlug(slug) {
  if (!projectId || !slug) {
    return null;
  }

  try {
    const query = `*[_type == "caseStudy" && (slug.current == $slug || _id == $slug)][0] {
      _id,
      image,
      eyebrow,
      title,
      slug,
      stat1Value,
      stat1Label,
      stat2Value,
      stat2Label,
      description,
      clientName,
      industry,
      challenge,
      solution,
      resultsSummary,
      testimonialQuote,
      testimonialAuthor,
      ctaText,
      ctaUrl,
      _createdAt
    }`;
    const data = await client.fetch(query, { slug });
    return data || null;
  } catch (error) {
    console.warn('[Sanity CMS] Case Study by slug fetch notice:', error.message);
    return null;
  }
}
