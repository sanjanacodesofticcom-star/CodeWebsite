'use client';

import Link from 'next/link';
import {
  Rocket,
  Building2,
  Users,
  Sparkles,
  Zap,
  Activity,
  Globe,
  Layers,
  Shield,
  TrendingUp,
  Radio,
  Compass,
  ArrowRight,
} from 'lucide-react';
import styles from './PartnershipTiersSection.module.css';

const PARTNERSHIP_PLANS = [
  {
    id: 'startups',
    title: 'Startups',
    tierBadge: 'Seed to Scale',
    icon: Rocket,
    description:
      'Codesoftic empowers startups to make a strong digital impact by offering custom web design, mobile app development, and strategic digital marketing services. Early-stage businesses can benefit from user-centric solutions, technology consulting, and intensive support, transforming ideas into impactful digital products with continuous learning and tailored mentorship.',
    capabilities: ['Rapid MVP Launch', 'Custom Web & Mobile', 'Product Consulting', 'Founder Mentorship'],
    brandsLabel: 'Startup Plan Active Holders',
    brandsCount: '14+ Active',
    brands: [
      { name: 'AuraScale', logo: '/images/partnership-logos/logo-quad.png' },
      { name: 'HyperFlow', logo: '/images/partnership-logos/logo-slashes.png' },
      { name: 'VoltAI', logo: '/images/partnership-logos/logo-bolt.png' },
      { name: 'Prism Labs', logo: '/images/partnership-logos/logo-cube-glow.png' },
    ],
    ctaText: 'Explore Startup Acceleration',
    ctaLink: '/contact',
  },
  {
    id: 'enterprises',
    title: 'Enterprises',
    tierBadge: 'Enterprise SLA',
    icon: Building2,
    description:
      'For enterprises, Codesoftic delivers scalable website and mobile app development, CRM solutions, and IT consultation that streamline operations and drive innovation. Enterprise clients receive customized process optimization, advanced infrastructure services, and reliable project delivery, supported by rigorous quality assurance and an ecosystem.',
    capabilities: ['High-Availability Apps', 'CRM & ERP Ecosystems', 'Process Automation', '24/7 SLA Support'],
    brandsLabel: 'Enterprise Plan Active Holders',
    brandsCount: '28+ Active',
    brands: [
      { name: 'OmniMatrix', logo: '/images/partnership-logos/logo-plaid.png' },
      { name: 'Synapse Cloud', logo: '/images/partnership-logos/logo-interlock.png' },
      { name: 'SphereCore', logo: '/images/partnership-logos/logo-orbit.png' },
      { name: 'Aegis Tech', logo: '/images/partnership-logos/logo-shield.png' },
    ],
    ctaText: 'Explore Enterprise Delivery',
    ctaLink: '/contact',
  },
  {
    id: 'b2b',
    title: 'B2B Partnerships',
    tierBadge: 'Dedicated Pods',
    icon: Users,
    description:
      'As a digital partner, Codesoftic provides flexible engagement models including monthly, hourly, and fixed-price plans that align with B2B agency needs. Partner businesses receive seamless onboarding of skilled talent, ongoing tech support, and results-driven digital campaigns—from social media to SEO—to expand their global reach and growth.',
    capabilities: ['White-Label Pods', 'Flexible Retainers', 'Senior Engineering', 'Global Growth Marketing'],
    brandsLabel: 'B2B Partner Active Holders',
    brandsCount: '20+ Active',
    brands: [
      { name: 'EchoGlobal', logo: '/images/partnership-logos/logo-curved.png' },
      { name: 'Centrix', logo: '/images/partnership-logos/logo-circle-c.png' },
      { name: 'Veritas Pods', logo: '/images/partnership-logos/logo-teal-c.png' },
      { name: 'Wavefront', logo: '/images/partnership-logos/logo-striped-w.png' },
    ],
    ctaText: 'Explore Agency Partnerships',
    ctaLink: '/contact',
  },
];

export default function PartnershipTiersSection() {
  return (
    <section className={styles.section} id="partnership-models">
      <div className={styles.inner}>
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrow}>
            <Sparkles size={14} />
            <span>Strategic Engagement Models</span>
          </div>
          <h2 className={styles.title}>
            A <span className={styles.highlight}>Partnership</span> With Codesoftic.
          </h2>
          <p className={styles.subtitle}>
            We can help you build stunning website & mobile app development, custom software development, highly optimized digital solutions, and connected infrastructure for businesses of all sizes and verticals.
          </p>
        </div>

        {/* 3 Enhanced Cards */}
        <div className={styles.grid}>
          {PARTNERSHIP_PLANS.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div key={plan.id} className={styles.card}>
                {/* Top Row: Icon + Tier Badge */}
                <div className={styles.cardTopRow}>
                  <div className={styles.iconBox}>
                    <IconComponent size={26} strokeWidth={1.8} />
                  </div>
                  <span className={styles.tierBadge}>{plan.tierBadge}</span>
                </div>

                {/* Card Title & Description */}
                <h3 className={styles.cardTitle}>{plan.title}</h3>
                <p className={styles.cardDesc}>{plan.description}</p>

                {/* Core Capabilities Pills */}
                <div className={styles.capsRow}>
                  {plan.capabilities.map((cap, idx) => (
                    <span key={idx} className={styles.capPill}>
                      {cap}
                    </span>
                  ))}
                </div>

                {/* Plan Holder Brand Logos Container with Cropped Logos + Names */}
                <div className={styles.brandsWrapper}>
                  <div className={styles.brandsHeader}>
                    <span className={styles.brandsLabel}>{plan.brandsLabel}</span>
                    <span className={styles.brandsCount}>{plan.brandsCount}</span>
                  </div>
                  <div className={styles.brandsGrid}>
                    {plan.brands.map((brand, i) => (
                      <div key={i} className={styles.brandPill} title={brand.name}>
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className={styles.brandLogoImg}
                        />
                        <span className={styles.brandName}>{brand.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <Link href={plan.ctaLink} className={styles.cardAction}>
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
