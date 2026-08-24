import ServiceTemplate from '@/components/ServiceTemplate';
import WebsiteDesignPackageSection from '@/components/WebsiteDesignPackageSection';

export const metadata = {
  title: 'Next.js Web Development & Edge Architecture | Codesoftic',
  description:
    'Full-stack Next.js 14/15 development, React Server Components, App Router, Sanity CMS integration, sub-second edge rendering, and enterprise scale by Codesoftic.',
};

export default function NextjsWebsitePage() {
  return (
    <ServiceTemplate
      serviceName="Next.js Full-Stack & Edge Architecture"
      badgeText="Flagship React Framework"
      tagline="We engineer cutting-edge web applications on Next.js with React Server Components, App Router, sub-second SSG/ISR rendering, and headless CMS integrations."
      overview="Next.js is the gold standard for high-performance web applications and enterprise websites. Codesoftic leverages the full power of Next.js App Router, streaming SSR, Edge middleware, and headless content layers to deliver web platforms that load instantaneously, rank dominance on search engines, and scale effortlessly."
      keyBenefits={[
        'Next.js App Router with React Server Components for near-zero client bundle sizes.',
        '100/100 Core Web Vitals guarantees for mobile performance and Google SEO dominance.',
        'Decoupled Headless CMS integration with Sanity.io, Strapi, or Contentful.',
        'Edge API routes, Server Actions, and real-time database state synchronization.',
      ]}
      impactStat={{
        value: '< 0.3s',
        label: 'Edge Global Response Time (TTFB)',
      }}
      deliverables={[
        {
          title: 'Next.js App Router & Server Components Architecture',
          description:
            'Engineered for extreme performance with server-rendered UI components, incremental static regeneration (ISR), and streaming data loaders.',
        },
        {
          title: 'Sanity Studio CMS Integration',
          description:
            'Structured, real-time headless content editing embedded directly into your Next.js application with instant live visual previews.',
        },
        {
          title: 'TypeScript & Strict Type Safety',
          description:
            'Enterprise-grade TypeScript codebase with strict schema validation (Zod), ensuring zero runtime crashes and maintainable code.',
        },
        {
          title: 'Edge Middleware & Authentication',
          description:
            'Ultra-fast edge routing, geo-targeting, A/B testing, and role-based authentication with Auth.js, Clerk, or Supabase.',
        },
        {
          title: 'Full-Stack Database & API Architecture',
          description:
            'Custom REST/GraphQL APIs, PostgreSQL / Supabase integrations, Prisma/Drizzle ORM, and webhook handling.',
        },
        {
          title: 'CI/CD, Vercel & AWS Edge Deployment',
          description:
            'Automated testing workflows, preview deployment environments, global CDN caching, and automated SSL/DDoS protection.',
        },
      ]}
      methodology={[
        { stage: 'Architecture Design', details: 'Component hierarchy, data fetching strategy (SSR/SSG/ISR), and API contract specifications.' },
        { stage: 'Design System & UI', details: 'Figma prototypes, CSS Modules / Tailwind tokens, and interactive motion choreography.' },
        { stage: 'Next.js Full-Stack Build', details: 'Server components, Server Actions, Sanity CMS schema modeling, and backend integrations.' },
        { stage: 'Edge Benchmarking & Launch', details: 'Lighthouse audits, bundle size optimization, Vercel edge deployment, and telemetry.' },
      ]}
      techStack={[
        'Next.js 14/15', 'React 18/19', 'TypeScript', 'Sanity.io', 'Node.js', 'PostgreSQL / Supabase', 'Vercel / AWS', 'Tailwind / CSS Modules'
      ]}
      faqs={[
        {
          question: 'Why choose Next.js over traditional Single Page Applications (SPA) like Create React App?',
          answer:
            'Standard React SPAs render purely on the client side, leading to slow initial page loads and poor search engine crawlability. Next.js renders on the server or pre-renders static HTML at the edge, guaranteeing instant page loads and perfect SEO indexation.',
        },
        {
          question: 'Can non-technical team members update copy and blog posts on a Next.js website?',
          answer:
            'Yes. We integrate Sanity Studio into your Next.js app, providing a clean, modern CMS dashboard where your marketing team can publish blog posts, update copy, and upload media with real-time visual previews.',
        },
        {
          question: 'How does Next.js handle high traffic spikes?',
          answer:
            'With Incremental Static Regeneration (ISR) and Vercel/AWS Edge CDN caching, pages are served directly from global edge caches with sub-second response times, effortlessly scaling to millions of concurrent requests.',
        },
      ]}
    >
      <WebsiteDesignPackageSection />
    </ServiceTemplate>
  );
}
