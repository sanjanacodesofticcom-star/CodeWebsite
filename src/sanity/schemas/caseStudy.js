/**
 * Sanity Schema for "Verified Client Outcomes" (Case Studies / Success Stories)
 * Parameters:
 * 1. image (Image) - Card Image
 * 2. eyebrow (String) - Eyebrow Category/Tag
 * 3. title (String) - Main Title
 * 4. stat1Value (String) - Stat 1 Number (e.g. 10x, +310%)
 * 5. stat1Label (String) - Stat 1 Label (e.g. Calls per day)
 * 6. stat2Value (String) - Stat 2 Number (e.g. 40-60%)
 * 7. stat2Label (String) - Stat 2 Label (e.g. Lower labour cost)
 * 8. description (Text) - Description paragraph
 * 9. ctaText (String) - CTA Text (e.g. View case study)
 * 10. ctaUrl (Url) - CTA URL
 */

export const caseStudySchema = {
  name: 'caseStudy',
  title: 'Verified Client Outcomes',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Card Image',
      type: 'image',
      description: 'Upload card visual / healthcare / product mockup image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Card image is required'),
    },
    {
      name: 'eyebrow',
      title: 'Eyebrow',
      type: 'string',
      description: 'e.g. 4 VOICE CALLS SHIFT or E-COMMERCE & DTC',
      validation: (Rule) => Rule.required().error('Eyebrow is required'),
    },
    {
      name: 'title',
      title: 'Main Title',
      type: 'string',
      description: 'e.g. Outbound RCM Status Follow-Up',
      validation: (Rule) => Rule.required().error('Main title is required'),
    },
    {
      name: 'stat1Value',
      title: 'Stat 1 Number',
      type: 'string',
      description: 'e.g. 10x or +310%',
      validation: (Rule) => Rule.required().error('Stat 1 value is required'),
    },
    {
      name: 'stat1Label',
      title: 'Stat 1 Label',
      type: 'string',
      description: 'e.g. Calls per day or Conversion Rate Uplift',
      validation: (Rule) => Rule.required().error('Stat 1 label is required'),
    },
    {
      name: 'stat2Value',
      title: 'Stat 2 Number',
      type: 'string',
      description: 'e.g. 40-60% or -50%',
      validation: (Rule) => Rule.required().error('Stat 2 value is required'),
    },
    {
      name: 'stat2Label',
      title: 'Stat 2 Label',
      type: 'string',
      description: 'e.g. Lower labour cost or CAC Reduction',
      validation: (Rule) => Rule.required().error('Stat 2 label is required'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      description: 'Your paragraph describing the transformation and outcome',
      validation: (Rule) => Rule.required().error('Description is required'),
    },
    {
      name: 'ctaText',
      title: 'CTA Text',
      type: 'string',
      description: 'e.g. View case study or Read full breakdown',
      initialValue: 'View case study',
    },
    {
      name: 'ctaUrl',
      title: 'CTA URL',
      type: 'url',
      description: 'URL link to the case study page or service page',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: true,
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    },
    {
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order priority in the section (1, 2, 3...)',
      initialValue: 0,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'eyebrow',
      media: 'image',
    },
  },
};

export default caseStudySchema;
