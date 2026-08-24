import ServiceTemplate from '@/components/ServiceTemplate';
import WebsiteDesignPackageSection from '@/components/WebsiteDesignPackageSection';

export const metadata = {
  title: 'Shopify Website Design & Headless E-Commerce | Codesoftic',
  description:
    'Custom Shopify Plus development, bespoke Liquid themes, Hydrogen headless e-commerce, checkout optimization, and high-converting store architecture by Codesoftic.',
};

export default function ShopifyWebsitePage() {
  return (
    <ServiceTemplate
      serviceName="Shopify & Headless E-Commerce Development"
      badgeText="Official Shopify Partner"
      tagline="We engineer high-converting Shopify Plus stores, bespoke Liquid themes, and headless Hydrogen storefronts that scale multi-million dollar direct-to-consumer and B2B brands."
      overview="Generic off-the-shelf Shopify templates suffer from bloated apps, slow mobile load times, and cookie-cutter checkout funnels that limit brand value. Codesoftic architects bespoke Shopify solutions engineered for lightning-fast speeds, frictionless checkouts, dynamic merchandising, and high average order values (AOV)."
      keyBenefits={[
        'Custom Shopify 2.0 Liquid Themes & Hydrogen headless React architectures.',
        'Sub-second mobile loading with zero unnecessary app script bloat.',
        'Optimized one-page checkouts, upselling modules, and custom cart drawers.',
        'Seamless ERP, CRM, inventory, 3PL logistics, and payment gateway integrations.',
      ]}
      impactStat={{
        value: '+285%',
        label: 'Average E-Commerce Revenue Growth',
      }}
      deliverables={[
        {
          title: 'Custom Shopify 2.0 Theme Engineering',
          description:
            'Pixel-perfect bespoke themes built from scratch with reusable modular sections, custom typography, and dynamic product filtering.',
        },
        {
          title: 'Headless Shopify (Hydrogen & Next.js)',
          description:
            'For high-growth brands seeking limitless frontend control: decoupled Next.js storefronts connected via Storefront API for sub-second speeds.',
        },
        {
          title: 'Conversion-Rate-Optimized Checkout & Cart',
          description:
            'Custom slide-out carts with dynamic free shipping progress bars, tiered volume discounts, and 1-click upsells.',
        },
        {
          title: 'App Ecosystem Streamlining & Speed Tuning',
          description:
            'Replacing 15+ slow third-party apps with native custom Liquid scripts to maximize Core Web Vitals and Google rankings.',
        },
        {
          title: 'ERP, CRM & Omnichannel Synchronization',
          description:
            'Automated inventory, order, and customer syncing with NetSuite, SAP, Klaviyo, HubSpot, and regional fulfillment hubs.',
        },
        {
          title: 'Shopify Plus B2B & Wholesale Portals',
          description:
            'Tiered wholesale pricing, custom company accounts, net-payment terms, and volume order sheets for enterprise B2B merchants.',
        },
      ]}
      methodology={[
        { stage: 'E-Commerce Blueprint', details: 'Brand positioning, SKU matrix analysis, UX checkout audit, and tech stack architecture.' },
        { stage: 'Bespoke UI/UX Prototyping', details: 'High-converting product pages, collection layouts, cart drawers, and mobile design systems.' },
        { stage: 'Shopify Engineering', details: 'Custom Liquid/Hydrogen build, metafields architecture, app integration, and payment setup.' },
        { stage: 'QA & High-Volume Launch', details: 'Load testing, cross-browser checkout validation, 301 redirect mapping, and launch telemetry.' },
      ]}
      techStack={[
        'Shopify Plus', 'Liquid / Theme Kit', 'Shopify Hydrogen', 'Next.js', 'Storefront API', 'Klaviyo', 'Recharge Subscriptions', 'Tailwind / Vanilla CSS'
      ]}
      faqs={[
        {
          question: 'Can Codesoftic migrate our existing store from WooCommerce, Magento, or BigCommerce to Shopify?',
          answer:
            'Yes. We execute zero-downtime migrations including customers, historical orders, product variants, reviews, and 301 SEO redirects to preserve your Google rankings.',
        },
        {
          question: 'What is the difference between custom Shopify Liquid and Headless Hydrogen?',
          answer:
            'Custom Liquid builds live directly within Shopify’s theme ecosystem with lower maintenance, while Headless Hydrogen/Next.js completely decouples the frontend for ultimate speed, bespoke animations, and complex custom logic.',
        },
        {
          question: 'How do you optimize store speed on Shopify?',
          answer:
            'We eliminate app bloat by writing native features into your theme code, optimize image assets with WebP, lazy-load non-critical assets, and implement modular CSS architecture.',
        },
      ]}
    >
      <WebsiteDesignPackageSection />
    </ServiceTemplate>
  );
}
