import Link from 'next/link';
import { 
  Rocket, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Incubation Centre & Venture Acceleration | Codesoftic',
  description: 'The Codesoftic Incubation Centre provides elite technical co-founding, AI architecture, seed funding networks, and rapid 30-day MVP launches for visionary founders.',
};

const COHORT_TRACKS = [
  {
    title: 'Venture Builder Track',
    badge: '0 to 1 Stage',
    desc: 'For early-stage founders with domain expertise looking for a dedicated technical co-founding team to architect and ship their MVP.',
    perks: [
      'Full-Stack Next.js MVP delivered in 30 Days',
      'AI & Database Architecture Blueprint',
      'Direct Introduction to 50+ Top-Tier Angel Investors & VCs',
      '$150k in Cloud Credits (AWS, GCP, OpenAI, Supabase)',
    ],
  },
  {
    title: 'AI Product Acceleration',
    badge: 'Seed to Series A',
    desc: 'For existing SaaS products seeking to embed autonomous multi-agent capabilities, RAG pipelines, or proprietary fine-tuned models.',
    perks: [
      'Dedicated AI Research & Engineering Squad',
      'Multi-Agent System Orchestration & Evals',
      'Data Pipeline & Vector Database Scale',
      'Enterprise Security & Compliance Hardening',
    ],
  },
  {
    title: 'Hyper-Scale Growth Sprint',
    badge: 'Growth Stage',
    desc: 'For validated products ready to scale customer acquisition, technical SEO, and conversion engineering to achieve 10x ARR multiples.',
    perks: [
      'Algorithmic Paid Acquisition & CAPI Integration',
      'Programmatic SEO & Content Graph Scaling',
      'Conversion Rate Optimization (CRO) Engineering',
      'Executive Financial Modeling & Cap Table Advisory',
    ],
  },
];

const PORTFOLIO_SPOTLIGHTS = [
  {
    name: 'Apex Scale',
    category: 'FinTech / AI Risk Management',
    metrics: '$4.2M Seed Raised • 8.4x ARR Growth',
    desc: 'Automated credit underwriting and real-time fraud detection engine built with autonomous multi-agent pipelines.',
  },
  {
    name: 'NeuralCore Labs',
    category: 'Enterprise Healthcare / AI Diagnostics',
    metrics: '$6.5M Series A • 45 Enterprise Health Systems',
    desc: 'HIPAA-compliant medical imaging analysis and clinical note ingestion platform powered by custom fine-tuned vision-language models.',
  },
  {
    name: 'QuantumPulse',
    category: 'Supply Chain / Logistics Optimization',
    metrics: '$2.8M Seed • 120k Monthly Shipments',
    desc: 'Predictive freight routing and real-time fleet telemetry web platform built on Next.js edge streaming.',
  },
];

const INCUBATION_FAQS = [
  {
    question: 'What equity or fee structure does the Incubation Centre require?',
    answer: 'We tailor each incubation partnership. Typically, we combine a reduced cash engineering rate with a 3% to 7% advisory or equity stake, aligning our technical execution directly with your long-term venture success.',
  },
  {
    question: 'How fast is the MVP development timeline?',
    answer: 'Our Venture Builder cohorts launch battle-tested, production-ready MVPs within 30 to 45 calendar days, allowing founders to immediately start onboarding paid beta users and pitch investors with real product metrics.',
  },
  {
    question: 'What criteria does Codesoftic look for in incubation applicants?',
    answer: 'We look for passionate founders with deep domain knowledge, a clear problem-market fit hypothesis, a large addressable market ($1B+ TAM), and high technical ambition.',
  },
];

export default function IncubationCentrePage() {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* 1. Incubation Hero Section */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4.5rem', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <Rocket size={14} />
            <span>Codesoftic Incubation Centre</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw + 1.25rem, 4.25rem)', marginBottom: '1.25rem', color: '#111827' }}>
            We Build, Fund, and Scale <br />
            <span style={{ color: 'var(--brand-blue)' }}>Disruptive Tech Startups</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#4b5563', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Stop searching for hard-to-find technical co-founders. Partner with the Codesoftic Incubation Centre to get an elite engineering powerhouse, venture architecture, and direct investor backing from Day Zero.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-blue btn-lg">
              <span>Apply for Next Cohort</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="#tracks" className="btn btn-secondary btn-lg">
              <span>View Incubation Tracks</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Key Metrics */}
      <section style={{ padding: '3.5rem 0', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--brand-blue)' }}>$18.5M+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem', fontWeight: 600 }}>Cohort Follow-on Capital</div>
            </div>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 800, color: '#111827' }}>30 Days</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem', fontWeight: 600 }}>Average MVP Launch Velocity</div>
            </div>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--brand-blue)' }}>100%</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem', fontWeight: 600 }}>Full IP & Code Ownership</div>
            </div>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 800, color: '#111827' }}>15+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem', fontWeight: 600 }}>Active Portfolio Startups</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Incubation Tracks */}
      <section className="section-lg" id="tracks" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Tailored Programs</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>
              Incubation & Acceleration Tracks
            </h2>
            <p style={{ color: '#4b5563' }}>
              Choose the program that matches your startup's stage and strategic requirements.
            </p>
          </div>

          <div className="grid-3">
            {COHORT_TRACKS.map((track, idx) => (
              <div key={idx} style={{ background: '#ffffff', borderRadius: '16px', padding: '2.25rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge" style={{ fontSize: '0.75rem' }}>{track.badge}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#111827', marginBottom: '0.75rem' }}>
                  {track.title}
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {track.desc}
                </p>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', marginTop: 'auto', marginBottom: '1.75rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#111827', marginBottom: '0.75rem' }}>
                    What You Get:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {track.perks.map((perk, pIdx) => (
                      <li key={pIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: '#4b5563' }}>
                        <CheckCircle2 size={16} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/contact" className="btn btn-secondary" style={{ width: '100%' }}>
                  <span>Apply for {track.title.split(' ')[0]}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Portfolio Spotlight */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Alumni Success</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>
              Incubation Portfolio Highlights
            </h2>
            <p style={{ color: '#4b5563' }}>
              See how our alumni transformed from concept to venture-funded market leaders.
            </p>
          </div>

          <div className="grid-3">
            {PORTFOLIO_SPOTLIGHTS.map((port, idx) => (
              <div key={idx} style={{ background: '#f8fafc', padding: '2rem', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--brand-blue)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                  {port.category}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#111827', marginBottom: '0.5rem' }}>
                  {port.name}
                </h3>
                <div style={{ background: 'rgba(24, 140, 255, 0.08)', border: '1px solid rgba(24, 140, 255, 0.2)', padding: '0.45rem 0.85rem', borderRadius: '8px', fontSize: '0.85rem', color: 'var(--brand-blue)', fontWeight: 600, marginBottom: '1rem', display: 'inline-block' }}>
                  {port.metrics}
                </div>
                <p style={{ color: '#4b5563', fontSize: '0.925rem', lineHeight: 1.6 }}>
                  {port.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Incubation FAQs */}
      <section className="section" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Common Queries</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '0.75rem', color: '#111827' }}>
              Incubation FAQs
            </h2>
          </div>

          <FAQAccordion items={INCUBATION_FAQS} />
        </div>
      </section>
    </div>
  );
}
