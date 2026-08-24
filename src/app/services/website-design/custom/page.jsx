import ServiceTemplate from '@/components/ServiceTemplate';
import WebsiteDesignPackageSection from '@/components/WebsiteDesignPackageSection';

export const metadata = {
  title: 'Customized Website Designs & Bespoke Web Apps | Codesoftic',
  description:
    'Tailored web design systems, interactive 3D WebGL animations, bespoke UI/UX architecture, and enterprise digital experiences by Codesoftic.',
};

export default function CustomWebsiteDesignPage() {
  return (
    <ServiceTemplate
      serviceName="Customized Website Designs & Bespoke Web Apps"
      badgeText="Bespoke Digital Craft"
      tagline="We create tailored digital experiences with bespoke UI/UX systems, interactive 3D WebGL animations, and custom full-stack architectures engineered to make your brand unforgettable."
      overview="When your brand demands an identity that sets industry standards, off-the-shelf templates cannot suffice. Codesoftic crafts bespoke web experiences tailored to your exact business logic, customer journey, and aesthetic vision—blending award-winning design craft with enterprise-grade engineering."
      keyBenefits={[
        '100% Unique UI/UX Architecture designed from the ground up for your specific brand.',
        'Interactive 3D WebGL animations, glassmorphism, and micro-interactions.',
        'Custom workflow integrations, user portals, calculator tools, and dashboards.',
        'Bespoke design systems with complete design tokens, reusable components, and documentation.',
      ]}
      impactStat={{
        value: '100%',
        label: 'Bespoke Code Ownership with Zero Vendor Lock-in',
      }}
      deliverables={[
        {
          title: 'Signature UI/UX Design System',
          description:
            'Bespoke visual identity crafted in Figma with custom color harmony, typography hierarchies, micro-animations, and complete interactive component states.',
        },
        {
          title: 'Interactive 3D & WebGL Visuals',
          description:
            'Subtle, GPU-accelerated 3D WebGL canvases, smooth parallax effects, and fluid scroll interactions that wow visitors without sacrificing performance.',
        },
        {
          title: 'Custom Business Logic & Web Applications',
          description:
            'Custom quoting calculators, onboarding flows, client portals, interactive product configurators, and complex multi-step forms.',
        },
        {
          title: 'Full API & Enterprise Middleware Integrations',
          description:
            'Direct synchronization with proprietary legacy databases, custom microservices, third-party CRMs, and payment orchestrators.',
        },
        {
          title: 'Accessible & Universal Design (WCAG 2.1 AA)',
          description:
            'Built to high accessibility standards with keyboard navigation, screen reader support, semantic HTML5, and color contrast compliance.',
        },
        {
          title: 'Scalable Microservices Architecture',
          description:
            'Decoupled frontend and backend services containerized for effortless horizontal scaling across cloud providers.',
        },
      ]}
      methodology={[
        { stage: 'Brand Immersion & UX Audit', details: 'Deep-dive into your brand DNA, target persona psychology, competitive differentiation, and functional goals.' },
        { stage: 'Bespoke UI Design & Motion', details: 'Figma interactive prototypes, design token definition, motion choreography, and stakeholder sign-off.' },
        { stage: 'Tailored Engineering', details: 'Component-driven frontend build, custom backend integrations, state management, and edge optimizations.' },
        { stage: 'Rigorous QA & Deployment', details: 'Cross-browser stress testing, accessibility validation, performance benchmarks, and launch celebration.' },
      ]}
      techStack={[
        'React / Next.js', 'WebGL / Three.js / Neat', 'CSS Modules & Custom Tokens', 'Node.js', 'PostgreSQL / MongoDB', 'Figma', 'Vercel / AWS'
      ]}
      faqs={[
        {
          question: 'What makes a customized website design different from a theme customization?',
          answer:
            'Theme customization merely tweaks existing templates with fixed limitations. A customized website is architected from scratch: every line of code, typography rule, interactive animation, and database schema is tailored exclusively for your business goals.',
        },
        {
          question: 'Will interactive 3D WebGL animations slow down our website?',
          answer:
            'No. We optimize all WebGL canvases with hardware acceleration, lazy-loading, and responsive framerate throttling so your site maintains a smooth 60fps and 95+ Core Web Vitals score across desktop and mobile.',
        },
        {
          question: 'How do we collaborate during the custom design process?',
          answer:
            'We work via a dedicated shared Slack/Teams channel and interactive Figma prototypes, giving you real-time visibility and feedback loops at every stage from wireframes to final code deployment.',
        },
      ]}
    >
      <WebsiteDesignPackageSection />
    </ServiceTemplate>
  );
}
