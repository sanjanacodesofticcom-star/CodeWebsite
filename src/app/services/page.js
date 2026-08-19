import Link from 'next/link';
import { 
  Layout, 
  Cpu, 
  Bot, 
  Search, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Layers 
} from 'lucide-react';
import ServiceCard from '@/components/ServiceCard';
import AdobeChallengesSection from '@/components/AdobeChallengesSection';

export const metadata = {
  title: 'Enterprise Services & AI Capabilities | Codesoftic',
  description: 'Explore Codesoftic comprehensive engineering suite: Website Design, AI Systems Audits, Autonomous AI Automation, SEO Dominance, and Performance Marketing.',
};

const SERVICES = [
  {
    title: 'Website Design & Web Apps',
    desc: 'High-conversion Next.js web applications, responsive user interfaces, design systems, and hyper-optimized edge performance.',
    href: '/services/website-design',
    icon: Layout,
    badge: 'Flagship Core',
    features: [
      'Next.js 14+ Server Components',
      'Sub-second Core Web Vitals (LCP < 1.0s)',
      'Custom Design Systems & Micro-animations',
      'Headless CMS & API Microservices Integration',
    ],
  },
  {
    title: 'AI Audits & Readiness',
    desc: 'Comprehensive systems diagnostic evaluating data architecture, security compliance, LLM feasibility, and cloud cost efficiency.',
    href: '/services/ai-audits',
    icon: Cpu,
    badge: 'Enterprise Advisory',
    features: [
      'AI Feasibility & ROI Modeling',
      'Data Pipeline & Vector DB Readiness',
      'LLM Security, Privacy & Compliance Review',
      'Cloud Architecture Cost Reduction Blueprint',
    ],
  },
  {
    title: 'AI Automation & Agents',
    desc: 'Deploy custom multi-agent LLM pipelines, autonomous robotic process automations, and intelligent enterprise operational workflows.',
    href: '/services/ai-automation',
    icon: Bot,
    badge: 'Hyper-Growth',
    features: [
      'Autonomous Multi-Agent Orchestration',
      'Custom RAG & Enterprise Knowledge Graphs',
      'Automated Support & Lead Triage Engines',
      'Continuous Fine-Tuning & Evaluation Loops',
    ],
  },
  {
    title: 'SEO & Search Dominance',
    desc: 'Algorithmic technical SEO, automated schema architecture, and AI-powered organic entity authority expansion.',
    href: '/services/seo',
    icon: Search,
    badge: 'Organic Scale',
    features: [
      'Technical Crawl & Indexation Engineering',
      'Semantic Topic Cluster Authority Engines',
      'Automated Schema & Structured Data Markup',
      'AI-Enhanced Search Visibility & AEO',
    ],
  },
  {
    title: 'Performance Marketing',
    desc: 'Algorithmic paid media acquisition, automated ROAS scaling, dynamic creative optimization, and multi-touch attribution.',
    href: '/services/performance-marketing',
    icon: TrendingUp,
    badge: 'Revenue Scaling',
    features: [
      'Full-Funnel Paid Acquisition (Meta/Google/LinkedIn)',
      'Algorithmic Bidding & ROAS Optimization',
      'Dynamic Creative Asset Optimization',
      'Real-Time Attribution & BI Dashboards',
    ],
  },
];

const ENGAGEMENT_MODELS = [
  {
    title: 'Dedicated Squad',
    desc: 'An integrated cross-functional team of senior architects, frontend engineers, AI researchers, and growth marketers assigned exclusively to your roadmap.',
    badge: 'Most Popular',
    idealFor: 'Mid-market & enterprise companies seeking rapid full-stack execution.',
  },
  {
    title: 'Project Sprints',
    desc: 'Time-boxed, high-velocity engineering sprints with fixed scopes, clear SLA deliverables, and guaranteed on-time deployments.',
    badge: 'Fixed Scope',
    idealFor: 'Product redesigns, bespoke AI agent builds, or technical audits.',
  },
  {
    title: 'Venture Co-Build',
    desc: 'Technical co-founding and incubation partnership combining sweat equity, seed capital, and shared upside for selected high-potential startups.',
    badge: 'Incubation Lab',
    idealFor: 'Early-stage founders building disruptive tech ventures.',
  },
];

export default function ServicesPage() {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* 1. Services Hero Banner */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4.5rem', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <span className="badge-dot" />
            <span>Enterprise Digital Capabilities</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw + 1.25rem, 4.25rem)', marginBottom: '1.25rem', color: '#111827' }}>
            Engineered for Impact. <br />
            <span style={{ color: 'var(--brand-blue)' }}>Powered by Intelligence.</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#4b5563', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Codesoftic delivers integrated digital solutions across five core disciplines — enabling ambitious brands to dominate organic search, automate operations, and scale revenue.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" className="btn btn-blue btn-lg">
              <span>Request Capabilities Deck</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Adobe Style Challenges Section */}
      <AdobeChallengesSection />

      {/* 3. Engagement Models */}
      <section className="section" style={{ background: '#ffffff', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Flexible Collaboration</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>
              How We Partner With You
            </h2>
            <p style={{ color: '#4b5563' }}>
              Flexible engagement frameworks structured to match your organizational velocity and capital requirements.
            </p>
          </div>

          <div className="grid-3">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div key={idx} style={{ background: '#f8fafc', padding: '2.25rem', borderRadius: '16px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                  <span className="badge" style={{ fontSize: '0.75rem' }}>{model.badge}</span>
                </div>
                <h3 style={{ fontSize: '1.4rem', color: '#111827', marginBottom: '0.75rem' }}>
                  {model.title}
                </h3>
                <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem', flexGrow: 1 }}>
                  {model.desc}
                </p>
                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1rem', marginTop: 'auto' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--brand-blue)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.25rem' }}>
                    Ideal For
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#64748b' }}>
                    {model.idealFor}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Global CTA */}
      <section className="section" style={{ paddingBottom: '6rem', background: '#f5f5f5' }}>
        <div className="container">
          <div style={{ padding: '4rem 2rem', textAlign: 'center', background: '#111827', borderRadius: '20px', color: '#ffffff' }}>
            <span className="badge" style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}>Get Started</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>
              Have a complex technical project in mind?
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
              Our senior architects provide direct technical evaluations and actionable roadmaps within 48 hours.
            </p>
            <Link href="/contact" className="btn btn-blue btn-lg">
              <span>Schedule Architecture Review</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
