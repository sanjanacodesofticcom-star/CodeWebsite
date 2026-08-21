import ServiceTemplate from '@/components/ServiceTemplate';
import WebsiteDesignPackageSection from '@/components/WebsiteDesignPackageSection';

export const metadata = {
  title: 'Website Design & Web Apps | Codesoftic',
  description: 'Next.js App Router development, high-conversion UI/UX design, sub-second performance, and enterprise web architecture by Codesoftic.',
};

export default function WebsiteDesignPage() {
  return (
    <ServiceTemplate
      serviceName="Website Design & Web Applications"
      badgeText="Flagship Engineering"
      tagline="We architect bespoke, ultra-fast web platforms on Next.js that merge breathtaking glassmorphic aesthetics with sub-second performance and conversion-driven engineering."
      overview="In an era of sub-second attention spans, your digital platform is your primary revenue engine. Codesoftic engineers bespoke web applications that not only captivate visitors with modern visuals, but load instantaneously, rank dominance on Google, and convert visitors into high-value clients."
      keyBenefits={[
        'Next.js 14+ Server Components for near-zero client bundle sizes and instantaneous page renders.',
        'Custom Design Systems built with bespoke CSS tokens, typography, and responsive micro-animations.',
        '100/100 Core Web Vitals guarantees for optimal mobile performance and SEO indexing.',
        'Integrated headless CMS, authentication, payment gateways, and custom API backends.',
      ]}
      impactStat={{
        value: '+310%',
        label: 'Average Client Conversion Uplift',
      }}
      deliverables={[
        {
          title: 'Bespoke UI/UX Design System',
          description: 'High-fidelity interactive prototypes in Figma with full component libraries, dark/light modes, micro-interactions, and accessible typography.',
        },
        {
          title: 'Next.js App Router Architecture',
          description: 'Production-ready code utilizing React Server Components, Streaming SSR, Edge API routes, and optimized image/font pipelines.',
        },
        {
          title: 'Full-Stack Node.js Backends',
          description: 'Custom API endpoints, database integrations (PostgreSQL, MongoDB, Supabase), secure authentication (Auth.js), and automated webhook handlers.',
        },
        {
          title: 'Mobile-First Fluid Responsiveness',
          description: 'Seamless cross-device experiences rigorously tested across iOS, Android, macOS, and Windows display viewports.',
        },
        {
          title: 'Technical SEO & Structured Schema',
          description: 'Built-in OpenGraph metadata, dynamic sitemaps, JSON-LD schema markup, and canonical hierarchy for instant search dominance.',
        },
        {
          title: 'CI/CD & Zero-Downtime Deployment',
          description: 'Automated GitHub Actions workflows, staging previews, edge caching on Vercel/AWS, and 24/7 uptime monitoring.',
        },
      ]}
      methodology={[
        { stage: 'Strategic Discovery', details: 'User journey mapping, competitive benchmarking, tech stack selection, and design architecture alignment.' },
        { stage: 'Design Prototyping', details: 'Iterative wireframing, high-fidelity UI design, component systems, and stakeholder approval.' },
        { stage: 'Full-Stack Build', details: 'Next.js engineering, API route development, dynamic state handling, and rigorous unit/E2E testing.' },
        { stage: 'Hyper-Scale Launch', details: 'Core Web Vitals benchmarking, security hardening, CDN edge routing, and continuous post-launch telemetry.' },
      ]}
      techStack={[
        'Next.js 14/15', 'React 18/19', 'TypeScript / JavaScript', 'Node.js', 'Vanilla CSS & CSS Modules', 'PostgreSQL', 'Supabase', 'TailwindCSS (Optional)', 'Vercel / AWS'
      ]}
      faqs={[
        {
          question: 'Why does Codesoftic prioritize Next.js over legacy CMS platforms like WordPress?',
          answer: 'Next.js provides server-side rendering, instant page transitions, superior security, and unmatched Google Core Web Vitals performance. Unlike bloated monolithic CMS platforms, Next.js gives you full code ownership, infinite scalability, and zero vulnerability to third-party plugin exploits.',
        },
        {
          question: 'How long does a custom enterprise website build take?',
          answer: 'A comprehensive custom Next.js web application typically takes 3 to 6 weeks from initial architecture discovery to production deployment, depending on custom integrations and scope.',
        },
        {
          question: 'Do we own the full source code after launch?',
          answer: 'Yes, 100%. You receive complete ownership of all repository code, assets, database schemas, and documentation with zero recurring proprietary vendor fees.',
        },
      ]}
    >
      {/* Scope, Package Checklist & Build Architecture (Image 1 & Image 2) */}
      <WebsiteDesignPackageSection />
    </ServiceTemplate>
  );
}
