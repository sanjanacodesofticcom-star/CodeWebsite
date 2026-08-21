import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Clock,
  Building,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Calendar,
} from 'lucide-react';
import { CASE_STUDIES } from '@/data/caseStudies';

export async function generateStaticParams() {
  return CASE_STUDIES.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({ params }) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) return { title: 'Case Study Not Found' };

  return {
    title: `${study.title} | Codesoftic Client Case Study`,
    description: study.description,
  };
}

export default function CaseStudyDetailPage({ params }) {
  const study = CASE_STUDIES.find((s) => s.slug === params.slug);
  if (!study) notFound();

  const otherStudies = CASE_STUDIES.filter((s) => s.slug !== study.slug);

  return (
    <div style={{ background: '#ffffff', minHeight: '100vh' }}>
      {/* Top Breadcrumb Header */}
      <div
        style={{
          borderBottom: '1px solid #e5e7eb',
          background: '#f8fafc',
          padding: '2rem 0',
        }}
      >
        <div className="container">
          <Link
            href="/#success-stories"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: '#0284c7',
              fontSize: '14px',
              fontWeight: '700',
              textDecoration: 'none',
              marginBottom: '1.25rem',
            }}
          >
            <ArrowLeft size={16} />
            <span>Back to All Success Stories</span>
          </Link>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span
              style={{
                fontSize: '12px',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: '#0284c7',
                background: '#f0f9ff',
                border: '1px solid #e0f2fe',
                padding: '0.35rem 0.85rem',
                borderRadius: '999px',
              }}
            >
              {study.category}
            </span>
            <span style={{ color: '#94a3b8', fontSize: '13px' }}>•</span>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Building size={14} /> {study.client}
            </span>
            <span style={{ color: '#94a3b8', fontSize: '13px' }}>•</span>
            <span style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <Clock size={14} /> {study.duration}
            </span>
          </div>

          <h1
            style={{
              fontSize: 'clamp(32px, 3.8vw, 52px)',
              fontWeight: '850',
              color: '#0f172a',
              letterSpacing: '-0.03em',
              lineHeight: '1.15',
              maxWidth: '1000px',
              marginBottom: '1.5rem',
            }}
          >
            {study.title}
          </h1>

          <p
            style={{
              fontSize: 'clamp(16px, 1.2vw, 19px)',
              color: '#475569',
              lineHeight: '1.65',
              maxWidth: '880px',
            }}
          >
            {study.description}
          </p>
        </div>
      </div>

      {/* Main Body */}
      <div className="container" style={{ padding: '4.5rem 1.5rem' }}>
        {/* Top Highlight Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem',
          }}
        >
          {study.metrics.map((m, idx) => (
            <div
              key={idx}
              style={{
                background: '#f8fafc',
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '2rem 1.75rem',
                borderLeft: '4px solid #0284c7',
              }}
            >
              <div
                style={{
                  fontSize: '36px',
                  fontWeight: '900',
                  color: '#0f172a',
                  lineHeight: '1',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.03em',
                }}
              >
                {m.value}
              </div>
              <div style={{ fontSize: '14px', fontWeight: '600', color: '#64748b' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Featured Image */}
        <div
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            border: '1px solid #e2e8f0',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.08)',
            marginBottom: '4.5rem',
            background: '#0f172a',
          }}
        >
          <Image
            src={study.image}
            alt={study.title}
            width={1200}
            height={680}
            style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '580px', objectFit: 'cover' }}
            priority
          />
        </div>

        {/* 2-Column Content Grid: Challenge & Solution */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          {/* The Challenge */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.03)',
            }}
          >
            <h3
              style={{
                fontSize: '22px',
                fontWeight: '800',
                color: '#0f172a',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: '#f0f9ff',
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontWeight: '700',
                }}
              >
                01
              </span>
              The Business Challenge
            </h3>
            <p style={{ fontSize: '15.5px', lineHeight: '1.75', color: '#475569' }}>
              {study.challenge}
            </p>
          </div>

          {/* The Solution */}
          <div
            style={{
              background: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '20px',
              padding: '2.5rem',
              boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.03)',
            }}
          >
            <h3
              style={{
                fontSize: '22px',
                fontWeight: '800',
                color: '#0f172a',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <span
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '8px',
                  background: '#e0f2fe',
                  color: '#0284c7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                }}
              >
                02
              </span>
              The Codesoftic Solution
            </h3>
            <p style={{ fontSize: '15.5px', lineHeight: '1.75', color: '#475569' }}>
              {study.solution}
            </p>
          </div>
        </div>

        {/* Technical Architecture */}
        <div
          style={{
            background: '#f8fafc',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '2.75rem',
            marginBottom: '4rem',
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <Cpu size={22} style={{ color: '#0284c7' }} />
            <span>Technical Architecture & Infrastructure</span>
          </h3>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {study.architecture.map((item, idx) => (
              <div
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '12px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <CheckCircle2 size={18} style={{ color: '#0284c7', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#334155', lineHeight: '1.5' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Business Impact / Verified Results */}
        <div
          style={{
            background: '#ffffff',
            border: '1px solid #e2e8f0',
            borderRadius: '20px',
            padding: '2.75rem',
            marginBottom: '5rem',
          }}
        >
          <h3
            style={{
              fontSize: '22px',
              fontWeight: '800',
              color: '#0f172a',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <TrendingUp size={22} style={{ color: '#10b981' }} />
            <span>Key Business Results & ROI</span>
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {study.results.map((res, idx) => (
              <li
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontSize: '15px',
                  fontWeight: '500',
                  color: '#334155',
                  lineHeight: '1.6',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: '#dcfce7',
                    color: '#16a34a',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  ✓
                </div>
                <span>{res}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Consultation Call CTA */}
        <div
          style={{
            background: '#111827',
            borderRadius: '24px',
            padding: '3.5rem',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '1.5rem',
            marginBottom: '5rem',
          }}
        >
          <span
            style={{
              fontSize: '12px',
              fontWeight: '700',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#38bdf8',
              background: 'rgba(56, 189, 248, 0.1)',
              padding: '0.35rem 0.85rem',
              borderRadius: '999px',
            }}
          >
            Ready for Similar Transformation?
          </span>
          <h2 style={{ fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: '850', color: '#ffffff', maxWidth: '700px' }}>
            Engineer Your Enterprise AI & Digital Architecture
          </h2>
          <p style={{ color: '#94a3b8', maxWidth: '600px', fontSize: '16px', lineHeight: '1.6' }}>
            Schedule a 30-minute architectural consultation with Codesoftic’s senior engineering leads.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            <a
              href="https://cal.com/codesoftic/collaboration-circle?user=codesoftic"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: '#0284c7',
                color: '#ffffff',
                padding: '0.85rem 1.75rem',
                borderRadius: '12px',
                fontWeight: '700',
                textDecoration: 'none',
              }}
            >
              <Calendar size={18} />
              <span>Book Strategy Call on Cal.com</span>
            </a>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                color: '#ffffff',
                padding: '0.85rem 1.75rem',
                borderRadius: '12px',
                fontWeight: '700',
                textDecoration: 'none',
              }}
            >
              <span>Contact Our Team</span>
            </Link>
          </div>
        </div>

        {/* Explore More Case Studies */}
        <div>
          <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#0f172a', marginBottom: '2rem' }}>
            Explore More Success Stories
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {otherStudies.slice(0, 3).map((other) => (
              <div
                key={other.slug}
                style={{
                  background: '#ffffff',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <div style={{ width: '100%', aspectRatio: '16/9', background: '#0f172a' }}>
                  <Image
                    src={other.image}
                    alt={other.title}
                    width={500}
                    height={280}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#0284c7', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {other.category}
                  </span>
                  <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#0f172a', marginBottom: '0.75rem', lineHeight: '1.3' }}>
                    {other.title}
                  </h4>
                  <p style={{ fontSize: '14px', color: '#475569', lineHeight: '1.6', flex: 1, marginBottom: '1.25rem' }}>
                    {other.description}
                  </p>
                  <Link
                    href={`/case-studies/${other.slug}`}
                    style={{ fontSize: '14px', fontWeight: '700', color: '#0284c7', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    <span>Read case study</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
