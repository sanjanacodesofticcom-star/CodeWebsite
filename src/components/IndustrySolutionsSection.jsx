'use client';

import Link from 'next/link';
import {
  Heart,
  DollarSign,
  Utensils,
  ShoppingBag,
  Layers,
  GraduationCap,
  Truck,
  Building2,
  Share2,
  Plane,
  Sprout,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import styles from './IndustrySolutionsSection.module.css';

const INDUSTRIES = [
  {
    name: 'Healthcare',
    icon: Heart,
    link: '/services/ai-automation',
    tag: 'Clinical AI & Workflows',
  },
  {
    name: 'Finance',
    icon: DollarSign,
    link: '/services/ai-audits',
    tag: 'FinTech & Security',
  },
  {
    name: 'Restaurant',
    icon: Utensils,
    link: '/services/performance-marketing',
    tag: 'Hospitality & Orders',
  },
  {
    name: 'eCommerce',
    icon: ShoppingBag,
    link: '/services/website-design',
    tag: 'Headless Commerce',
  },
  {
    name: 'SaaS',
    icon: Layers,
    link: '/services/website-design',
    tag: 'Cloud & Web Apps',
  },
  {
    name: 'Education',
    icon: GraduationCap,
    link: '/services/ai-automation',
    tag: 'EdTech & Learning',
  },
  {
    name: 'Logistics',
    icon: Truck,
    link: '/services/ai-automation',
    tag: 'Supply & Fleet Tracking',
  },
  {
    name: 'Real Estate',
    icon: Building2,
    link: '/services/performance-marketing',
    tag: 'Property & Lead Funnels',
  },
  {
    name: 'Social Media',
    icon: Share2,
    link: '/services/performance-marketing',
    tag: 'Audience & Viral Reach',
  },
  {
    name: 'Aviation',
    icon: Plane,
    link: '/services/ai-automation',
    tag: 'Operations & Booking',
  },
  {
    name: 'Agriculture',
    icon: Sprout,
    link: '/services/ai-automation',
    tag: 'AgriTech Intelligence',
  },
  {
    name: 'Insurance',
    icon: ShieldCheck,
    link: '/services/ai-audits',
    tag: 'Claims & Risk Analysis',
  },
];

export default function IndustrySolutionsSection() {
  return (
    <section className={styles.section} id="industry-solutions">
      <div className={styles.inner}>
        {/* Header Row */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.eyebrow}>
              <Sparkles size={14} />
              <span>Industry-Specific Expertise</span>
            </div>
            <h2 className={styles.title}>
              Accelerate Growth with Tailored{' '}
              <span className={styles.highlight}>IT Solutions</span>
            </h2>
          </div>
          <div className={styles.headerRight}>
            <p className={styles.subtitle}>
              Delivering scalable web, mobile, AI, and cloud solutions designed around your business goals.
            </p>
          </div>
        </div>

        {/* 12 Industry Grid with animated icons */}
        <div className={styles.grid}>
          {INDUSTRIES.map((ind) => {
            const Icon = ind.icon;
            return (
              <Link
                key={ind.name}
                href={ind.link}
                className={styles.card}
                title={`Explore Codesoftic solutions for ${ind.name}`}
              >
                <div className={styles.iconBadge}>
                  <Icon className={styles.icon} strokeWidth={1.8} />
                </div>
                <h3 className={styles.name}>{ind.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
