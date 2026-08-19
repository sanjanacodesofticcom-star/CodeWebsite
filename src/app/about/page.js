import Link from 'next/link';
import { 
  ShieldCheck, 
  Zap, 
  Target, 
  ArrowRight, 
  Cpu, 
  Globe2 
} from 'lucide-react';

export const metadata = {
  title: 'About Us | Codesoftic — Enterprise Digital & AI Engineering',
  description: 'Learn about Codesoftic, our leadership team, engineering philosophy, and how Project Antigravity is redefining web development and enterprise AI.',
};

const VALUES = [
  {
    title: 'Architectural Rigor',
    desc: 'We reject brittle hacks and generic templates. Every line of code, database schema, and LLM orchestration is engineered for enterprise-grade scalability and sub-second performance.',
    icon: ShieldCheck,
  },
  {
    title: 'Autonomous AI First',
    desc: 'We believe modern software must be intelligent. We integrate autonomous agent workflows and vector pipelines directly into core application architectures.',
    icon: Cpu,
  },
  {
    title: 'Speed with Precision',
    desc: 'Through our Antigravity accelerator framework, we compress multi-month product roadmaps into weeks without sacrificing security, accessibility, or code quality.',
    icon: Zap,
  },
  {
    title: 'Radical Transparency',
    desc: 'Complete client code ownership, open communication channels, real-time telemetry, and zero vendor lock-in. Your IP remains 100% yours.',
    icon: Target,
  },
];

const LEADERSHIP = [
  {
    name: 'Alexandre Vance',
    role: 'Chief Executive Officer & Founder',
    bio: 'Former principal architect at Fortune 100 tech giants; 14+ years scaling high-throughput distributed systems and enterprise venture studios.',
  },
  {
    name: 'Dr. Seraphina Thorne',
    role: 'Head of AI Research & Automation',
    bio: 'Ph.D. in Machine Learning & Multi-Agent Systems; previously led neural pipeline optimization at premier AI research laboratories.',
  },
  {
    name: 'Devon K. Mercer',
    role: 'VP of Web Architecture & UX',
    bio: 'Pioneer in Next.js edge rendering, design systems, and micro-frontend architectures with over 50+ enterprise product launches.',
  },
  {
    name: 'Rohan Deshmukh',
    role: 'Director of Growth & Performance',
    bio: 'Architected algorithmic acquisition funnels generating over $120M+ in verified pipeline across SaaS and direct-to-consumer sectors.',
  },
];

const GLOBAL_OFFICES = [
  { city: 'San Francisco', region: 'North America HQ', address: 'Market St, Suite 1400' },
  { city: 'London', region: 'Europe & UK HQ', address: 'Canary Wharf, Financial District' },
  { city: 'Singapore', region: 'Asia-Pacific Hub', address: 'Marina Bay Financial Centre' },
  { city: 'Bangalore', region: 'Engineering Excellence Centre', address: 'Outer Ring Rd, Tech Corridor' },
];

export default function AboutPage() {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* 1. About Hero Section */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4.5rem', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <span className="badge-dot" />
            <span>The Codesoftic Story</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw + 1.25rem, 4rem)', marginBottom: '1.25rem', color: '#111827' }}>
            Engineering the Next Era of <br />
            <span style={{ color: 'var(--brand-blue)' }}>Intelligent Software</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#4b5563', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Codesoftic was founded with a single mission: eliminate the friction between visionary product strategy and technical execution. We combine world-class web engineering with state-of-the-art AI automation.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-blue btn-lg">
              <span>Partner With Us</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="/services" className="btn btn-secondary btn-lg">
              <span>Explore Capabilities</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Core Stats */}
      <section style={{ padding: '3.5rem 0', background: '#ffffff', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div className="grid-4" style={{ textAlign: 'center' }}>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--brand-blue)' }}>120+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem', fontWeight: 600 }}>Enterprise Deployments</div>
            </div>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 800, color: '#111827' }}>4.8x</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem', fontWeight: 600 }}>Average Client Revenue Multiple</div>
            </div>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 800, color: 'var(--brand-blue)' }}>99.8%</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem', fontWeight: 600 }}>On-Time SLA Delivery</div>
            </div>
            <div>
              <div style={{ fontSize: '2.75rem', fontWeight: 800, color: '#111827' }}>15+</div>
              <div style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.25rem', fontWeight: 600 }}>Venture Cohorts Incubated</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values */}
      <section className="section-lg" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Our Operating Principles</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>
              Built On First-Principles Thinking
            </h2>
            <p style={{ color: '#4b5563' }}>
              How we approach engineering, product development, and client partnerships.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={idx} style={{ background: '#ffffff', borderRadius: '14px', padding: '2.25rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(24, 140, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue)', marginBottom: '1.25rem' }}>
                    <Icon size={24} />
                  </div>
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#111827' }}>
                    {val.title}
                  </h3>
                  <p style={{ color: '#4b5563', lineHeight: 1.7, fontSize: '0.95rem' }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Leadership Team */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Executive Leadership</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>
              Guided by Veteran Systems Architects
            </h2>
            <p style={{ color: '#4b5563' }}>
              Our leadership brings decades of collective experience from top-tier technology enterprises, research institutions, and venture studios.
            </p>
          </div>

          <div className="grid-4">
            {LEADERSHIP.map((leader, idx) => (
              <div key={idx} style={{ background: '#f8fafc', borderRadius: '14px', padding: '2rem 1.5rem', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#111827', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff', fontWeight: 800, fontSize: '1.2rem', marginBottom: '1.25rem' }}>
                  {leader.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h4 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '0.25rem' }}>
                  {leader.name}
                </h4>
                <div style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', fontWeight: 600, marginBottom: '0.75rem' }}>
                  {leader.role}
                </div>
                <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: 1.6, marginTop: 'auto' }}>
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Global Presence */}
      <section className="section-lg" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Worldwide Reach</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>
              Global Innovation Hubs
            </h2>
            <p style={{ color: '#4b5563' }}>
              Operating across key international technology centers to deliver 24/7 engineering excellence.
            </p>
          </div>

          <div className="grid-4">
            {GLOBAL_OFFICES.map((office, idx) => (
              <div key={idx} style={{ textAlign: 'center', padding: '2rem 1.5rem', background: '#ffffff', borderRadius: '14px', border: '1px solid #e2e8f0' }}>
                <Globe2 size={32} style={{ color: 'var(--brand-blue)', margin: '0 auto 1rem auto' }} />
                <h3 style={{ fontSize: '1.3rem', color: '#111827', marginBottom: '0.35rem' }}>
                  {office.city}
                </h3>
                <div style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', fontWeight: 600, marginBottom: '0.5rem' }}>
                  {office.region}
                </div>
                <p style={{ fontSize: '0.825rem', color: '#64748b' }}>
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
