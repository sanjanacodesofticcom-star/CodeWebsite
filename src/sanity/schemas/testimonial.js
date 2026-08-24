/**
 * Sanity Schema for "OUR REVIEWS" (Testimonials) Section
 * 4 Parameters:
 * 1. Logo (logo)
 * 2. Testimonial Text (testimonialText)
 * 3. User Name (userName)
 * 4. Company Name (companyName)
 */

export const testimonialSchema = {
  name: 'testimonial',
  title: 'OUR REVIEWS',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      description: 'Upload the company or client logo',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Logo is required'),
    },
    {
      name: 'testimonialText',
      title: 'Testimonial Text',
      type: 'text',
      rows: 4,
      description: 'Enter the testimonial / client quote text',
      validation: (Rule) => Rule.required().min(5).error('Testimonial text is required'),
    },
    {
      name: 'userName',
      title: 'User Name',
      type: 'string',
      description: 'Enter the reviewer / client name',
      validation: (Rule) => Rule.required().error('User name is required'),
    },
    {
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Enter the company name',
      validation: (Rule) => Rule.required().error('Company name is required'),
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
