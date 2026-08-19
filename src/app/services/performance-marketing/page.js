import ServiceTemplate from '@/components/ServiceTemplate';

export const metadata = {
  title: 'Performance Marketing & ROAS Scaling | Codesoftic',
  description: 'Algorithmic paid media acquisition, automated ROAS scaling, dynamic creative optimization, and conversion engineering by Codesoftic.',
};

export default function PerformanceMarketingPage() {
  return (
    <ServiceTemplate
      serviceName="Performance Marketing & ROAS Scaling"
      badgeText="Revenue Accelerator"
      tagline="Scale customer acquisition profitably with algorithmic media buying, dynamic creative testing, and multi-touch server-side conversion tracking."
      overview="Paid advertising is no longer about guessing ad copy — it is an algorithmic bidding and data engineering challenge. Codesoftic pairs growth engineers with performance marketers to deploy automated CAPI tracking, predictive customer lifetime value (LTV) models, and high-velocity creative testing engines that scale spend efficiently."
      keyBenefits={[
        'Full server-side Conversions API (CAPI) setup restoring 100% signal post-iOS 14.',
        'Algorithmic budget allocation shifting ad spend in real-time to highest ROAS creatives.',
        'High-velocity creative testing framework producing 20+ bespoke video & static variations weekly.',
        'Custom multi-touch attribution dashboards mapping accurate payback periods and customer LTV.',
      ]}
      impactStat={{
        value: '4.8x',
        label: 'Average Blended Return on Ad Spend (ROAS)',
      }}
      deliverables={[
        {
          title: 'Full-Funnel Paid Acquisition Strategy',
          description: 'Custom account architectures across Meta Ads, Google Ads (Search/PMax/YouTube), LinkedIn Ads, and TikTok Ads.',
        },
        {
          title: 'Server-Side CAPI & Offline Conversion Tracking',
          description: 'Direct server-to-server tracking integration via Meta CAPI and Google Enhanced Conversions for accurate attribution.',
        },
        {
          title: 'Dynamic Creative Optimization (DCO)',
          description: 'High-converting ad creatives, motion graphics, and landing page variants designed and tested continuously.',
        },
        {
          title: 'Conversion Rate Optimization (CRO) Sprints',
          description: 'Rapid A/B testing of value propositions, checkout flows, and interactive lead magnets to maximize page-level conversion.',
        },
        {
          title: 'Executive Real-Time Dashboard',
          description: 'Custom Looker / TripleWhale style reporting providing real-time visibility into CAC, ROAS, MER, and net profit contribution.',
        },
      ]}
      methodology={[
        { stage: 'Tracking & Signal Audit', details: 'Configuring server-side tracking, pixel hygiene, and baseline CAC benchmarks.' },
        { stage: 'Creative & Funnel Sprint', details: 'Producing initial batch of high-converting visual assets and optimized landing pages.' },
        { stage: 'Algorithmic Scaling', details: 'Scaling winning audiences and ad sets while maintaining strict target CPA thresholds.' },
        { stage: 'LTV & Retention Tuning', details: 'Implementing automated email/SMS flows and retargeting loops to maximize customer lifetime value.' },
      ]}
      techStack={[
        'Meta Conversions API (CAPI)', 'Google Ads Enhanced Conversions', 'Klaviyo / Postscript', 'TripleWhale / Northbeam', 'Figma / After Effects', 'Looker Studio'
      ]}
      faqs={[
        {
          question: 'What ad spend thresholds does Codesoftic manage?',
          answer: 'We manage monthly ad budgets ranging from $15,000/mo for high-growth startups up to $500,000+/mo for scaled enterprise brands.',
        },
        {
          question: 'How do you handle privacy changes like iOS 14+ and cookie deprecation?',
          answer: 'We deploy custom server-side CAPI integrations and first-party data capture mechanisms that bypass browser ad blockers and preserve conversion signals.',
        },
        {
          question: 'Do you create the ad creatives and copy in-house?',
          answer: 'Yes. Our in-house creative team designs all video hooks, static carousels, and landing pages tailored specifically to your target demographic.',
        },
      ]}
    />
  );
}
