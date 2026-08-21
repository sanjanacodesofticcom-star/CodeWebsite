import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '@/data/caseStudies';

export const metadata = {
  title: 'Client Success Stories & Enterprise Transformations | Codesoftic',
  description:
    'Explore verified case studies and digital transformation outcomes achieved by Codesoftic across AI automation, headless web development, and performance scaling.',
};

export default function CaseStudiesIndexPage() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', padding: '6rem 0' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4.5rem auto' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '13px',
              fontWeight: '700',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#0284c7',
              background: '#f0f9ff',
              border: '1px solid #e0f2fe',
              padding: '0.4rem 0.9rem',
              borderRadius: '999px',
              marginBottom: '1.25rem',
            }}
          >
            <Sparkles size={14} />
            <span>Verified Client Outcomes</span>
          </div>
          <h1
            style={{
              fontSize: 'clamp(32px, 3.8vw, 52px)',
              fontWeight: '850',
              color: '#0f172a',
              letterSpacing: '-0.03em',
              lineHeight: '1.15',
              marginBottom: '1.25rem',
            }}
          >
            Client Success Stories & Case Studies
          </h1>
          <p style={{ fontSize: 'clamp(16px, 1.15vw, 18px)', color: '#475569', lineHeight: '1.65' }}>
            Discover how leading global enterprises, scaling startups, and high-growth brands accelerate with Codesoftic's web and AI architectures.
          </p>
        </div>

        {/* 2x2 Grid of Case Studies */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '2.5rem',
            marginBottom: '5rem',
          }}
        >
          {CASE_STUDIES.map((study) => (
            <div
              key={study.slug}
              style={{
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px -2px rgba(15, 23, 42, 0.04)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div style={{ width: '100%', aspectRatio: '16/9', background: '#0f172a' }}>
                <Image
                  src={study.image}
                  alt={study.title}
                  width={600}
                  height={340}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Metrics Split Bar */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  background: '#f8fafc',
                  borderBottom: '1px solid #e2e8f0',
                }}
              >
                {study.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '0.85rem 1.25rem',
                      borderRight: idx === 0 ? '1px solid #e2e8f0' : 'none',
                    }}
                  >
                    <div style={{ fontSize: '20px', fontWeight: '850', color: '#0f172a', lineHeight: '1.2' }}>
                      {m.value}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: '600', color: '#64748b' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Content */}
              <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a', lineHeight: '1.3', marginBottom: '0.85rem' }}>
                  {study.title}
                </h3>
                <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.65', flex: 1, marginBottom: '1.5rem' }}>
                  {study.description}
                </p>
                <Link
                  href={`/case-studies/${study.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '14.5px',
                    fontWeight: '700',
                    color: '#0284c7',
                    textDecoration: 'none',
                  }}
                >
                  <span>View case study</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
