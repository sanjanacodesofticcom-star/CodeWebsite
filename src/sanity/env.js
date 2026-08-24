export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01';

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

// Sanity project IDs must only contain a-z, 0-9, and dashes
export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'codesoftic-demo';

export const useCdn = false;
