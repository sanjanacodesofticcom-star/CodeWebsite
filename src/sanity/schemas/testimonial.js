/**
 * Sanity Schema for "OUR REVIEWS" (Testimonials) Section
 * 4 Core Parameters:
 * 1. logo (Image) - Company Logo / Brand mark
 * 2. testimonialText (Text) - The review quote statement
 * 3. userName (String) - Client / User's Name
 * 4. companyName (String) - Company Name
 */

export const testimonialSchema = {
  name: 'testimonial',
  title: 'Client Review / Testimonial',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      description: 'Logo or brand icon of the client company',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'testimonialText',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      description: 'The quote or feedback given by the client',
      validation: (Rule) => Rule.required().min(10).max(500),
    },
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
      description: 'Full name of the person giving the review',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Name of the client company or organization',
      validation: (Rule) => Rule.required(),
    },
    // Optional helper fields for enriched cards
    {
      name: 'userRole',
      title: 'User Role / Title',
      type: 'string',
      description: 'e.g. CTO, Product Manager, VP of Engineering',
    },
    {
      name: 'userLocation',
      title: 'User Location',
      type: 'string',
      description: 'e.g. New York City, NY or London, UK',
    },
    {
      name: 'userAvatar',
      title: 'User Profile Photo (Avatar)',
      type: 'image',
      description: 'Profile photo of the user',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order priority in the slider (e.g. 1, 2, 3...)',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'userName',
      subtitle: 'companyName',
      media: 'logo',
    },
  },
};

export default testimonialSchema;
