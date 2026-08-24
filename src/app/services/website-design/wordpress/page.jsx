import ServiceTemplate from '@/components/ServiceTemplate';
import WebsiteDesignPackageSection from '@/components/WebsiteDesignPackageSection';

export const metadata = {
  title: 'WordPress Website Design & Headless CMS | Codesoftic',
  description:
    'Custom WordPress theme development, Gutenberg block systems, Headless WordPress with Next.js frontend, enterprise security, and speed optimization by Codesoftic.',
};

export default function WordPressWebsitePage() {
  return (
    <ServiceTemplate
      serviceName="WordPress & Headless CMS Engineering"
      badgeText="Enterprise WordPress"
      tagline="We build custom, bloat-free WordPress platforms, bespoke Gutenberg block suites, and headless CMS architectures that empower marketing teams with complete editorial agility."
      overview="Many WordPress sites become weighed down by visual builders, dozens of conflicting plugins, and severe security vulnerabilities. Codesoftic architects custom WordPress solutions built with pure lightweight code, bespoke block editors, zero plugin bloat, and enterprise security standards."
      keyBenefits={[
        '100% Custom Gutenberg Block Architecture with zero slow visual builder plugins.',
        'Sub-second page speeds with 95+ Google PageSpeed Insights ratings.',
        'Hardened enterprise security with automated firewall and backup pipelines.',
        'Optional Headless WordPress decoupled with a Next.js / React frontend.',
      ]}
      impactStat={{
        value: '0.6s',
        label: 'Average Page Load Time Across Devices',
      }}
      deliverables={[
        {
          title: 'Custom Gutenberg Block Development',
          description:
            'Tailored React-based native WordPress blocks enabling marketing teams to assemble rich, responsive landing pages without breaking design rules.',
        },
        {
          title: 'Bloat-Free PHP & Modern Theme Build',
          description:
            'Handcrafted theme code without bloated page builders (Elementor, Divi, WPBakery), ensuring lean HTML output and rapid rendering.',
        },
        {
          title: 'Headless WordPress + Next.js Frontend',
          description:
            'Use WordPress as an easy-to-use content management backend while serving your public website through a high-performance Next.js edge frontend.',
        },
        {
          title: 'Advanced Custom Fields (ACF Pro) Architecture',
          description:
            'Structured data schemas, flexible content modules, and intuitive backend interfaces customized for non-technical editors.',
        },
        {
          title: 'Enterprise Security & Hardening',
          description:
            'SSL configuration, two-factor authentication, database prefix protection, XML-RPC disablement, and Cloudflare WAF integration.',
        },
        {
          title: 'Database Tuning & Edge Caching',
          description:
            'Redis object caching, MySQL index optimization, CDN asset routing, and automated daily off-site cloud backups.',
        },
      ]}
      methodology={[
        { stage: 'Information Architecture', details: 'Content modeling, taxonomy design, custom post types, and editorial workflow mapping.' },
        { stage: 'Design & Component System', details: 'Figma UI design, responsive typography, and custom Gutenberg block specifications.' },
        { stage: 'Custom Theme Engineering', details: 'Lean theme coding, ACF Pro integration, REST/GraphQL API setup, and security hardening.' },
        { stage: 'Migration & Launch', details: 'Database migration, 301 SEO redirects, speed benchmarking, and client training workshops.' },
      ]}
      techStack={[
        'WordPress (Bedrock)', 'PHP 8.2+', 'React / Gutenberg Blocks', 'ACF Pro', 'Next.js (Headless)', 'WPGraphQL', 'MySQL / MariaDB', 'Cloudflare CDN'
      ]}
      faqs={[
        {
          question: 'Why avoid page builders like Elementor or Divi for enterprise sites?',
          answer:
            'Page builders inject hundreds of unneeded CSS/JS files and deeply nested DOM elements, slowing page load and hurting SEO rankings. Our bespoke Gutenberg blocks provide the same visual flexibility with 90% lighter code.',
        },
        {
          question: 'How easy is it for our team to update text, images, and pages?',
          answer:
            'Extremely easy. We build intuitive, visual block editors where your team can effortlessly edit copy, swap images, and create new landing pages with predefined brand styles.',
        },
        {
          question: 'Can WordPress handle high-traffic spikes without crashing?',
          answer:
            'Yes. With our Redis object caching, Cloudflare CDN integration, and optimized database queries, our WordPress builds comfortably handle millions of monthly pageviews.',
        },
      ]}
    >
      <WebsiteDesignPackageSection />
    </ServiceTemplate>
  );
}
