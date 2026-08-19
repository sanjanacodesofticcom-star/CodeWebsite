import Link from 'next/link';
import { 
  BookOpen, 
  Download, 
  ArrowRight, 
  Cpu, 
  Search, 
  Layout, 
  TrendingUp 
} from 'lucide-react';

export const metadata = {
  title: 'Resources, AI Whitepapers & Engineering Insights | Codesoftic',
  description: 'Access proprietary AI architecture benchmarks, technical SEO frameworks, Next.js performance blueprints, and enterprise case studies from Codesoftic.',
};

const FEATURED_RESOURCES = [
  {
    title: 'The 2026 Enterprise AI Agent Architecture Playbook',
    category: 'AI Engineering',
    type: 'Whitepaper (38 Pages)',
    desc: 'An exhaustive technical guide to orchestrating multi-agent LLM systems, reducing hallucination via contextual RAG, and minimizing vector search latency.',
    badge: 'Trending Research',
    icon: Cpu,
  },
  {
    title: 'Next.js 15 & React Server Components Optimization Guide',
    category: 'Web Architecture',
    type: 'Technical Manual',
    desc: 'How to achieve sub-second Core Web Vitals, eliminate client JavaScript bundle bloat, and architect zero-downtime edge caching.',
    badge: 'Popular Guide',
    icon: Layout,
  },
  {
    title: 'Answer Engine Optimization (AEO) & Semantic SEO Blueprint',
    category: 'SEO & Growth',
    type: 'Playbook',
    desc: 'How to dominate generative AI search engines including Google AI Overviews, Perplexity, and ChatGPT search citations.',
    badge: 'Growth Engine',
    icon: Search,
  },
  {
    title: 'From Seed to Series A: The Technical Co-Founder Blueprint',
    category: 'Venture Incubation',
    type: 'Executive Report',
    desc: 'A strategic framework for non-technical founders on vetting tech architectures, shipping MVPs in 30 days, and pitching tier-1 VCs.',
    badge: 'Venture Lab',
    icon: TrendingUp,
  },
];

const ARTICLES = [
  {
    title: 'Why Monolithic WordPress Sites Fail Modern Core Web Vitals (And How Next.js Solves It)',
    category: 'Web Performance',
    readTime: '6 min read',
    date: 'Aug 14, 2026',
  },
  {
    title: 'Benchmarking Vector Databases: Pinecone vs. Qdrant vs. pgvector at 10M Scale',
    category: 'AI & Data Infrastructure',
    readTime: '11 min read',
    date: 'Aug 08, 2026',
  },
  {
    title: 'Server-Side Meta CAPI Implementation: Restoring 99% Conversion Signal Post-iOS 14',
    category: 'Performance Marketing',
    readTime: '8 min read',
    date: 'Jul 29, 2026',
  },
  {
    title: 'Building Resilient Multi-Agent State Machines with LangGraph and Fastify',
    category: 'AI Engineering',
    readTime: '14 min read',
    date: 'Jul 19, 2026',
  },
  {
    title: 'How Structured JSON-LD Entity Graphs Drive 4x Faster Google Indexation',
    category: 'Technical SEO',
    readTime: '7 min read',
    date: 'Jul 10, 2026',
  },
  {
    title: 'The Antigravity Stack: How We Build & Launch Enterprise MVPs in 30 Days',
    category: 'Incubation & Strategy',
    readTime: '9 min read',
    date: 'Jun 28, 2026',
  },
];

export default function ResourcesPage() {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* 1. Resources Hero Banner */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '4.5rem', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '850px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <BookOpen size={14} />
            <span>Codesoftic Knowledge Base</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw + 1.25rem, 4.25rem)', marginBottom: '1.25rem', color: '#111827' }}>
            Engineering Insights & <br />
            <span style={{ color: 'var(--brand-blue)' }}>AI Research Playbooks</span>
          </h1>

          <p style={{ fontSize: '1.2rem', color: '#4b5563', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Curated blueprints, benchmarks, whitepapers, and technical playbooks compiled by our senior systems architects and AI researchers.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="#whitepapers" className="btn btn-blue btn-lg">
              <span>Explore Whitepapers</span>
              <ArrowRight size={18} />
            </Link>
            <Link href="#articles" className="btn btn-secondary btn-lg">
              <span>Read Technical Articles</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Featured Whitepapers Grid */}
      <section className="section-lg" id="whitepapers" style={{ background: '#ffffff' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Proprietary Research</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>
              Featured Whitepapers & Frameworks
            </h2>
            <p style={{ color: '#4b5563' }}>
              Comprehensive, actionable technical guides written for engineering leaders and founders.
            </p>
          </div>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {FEATURED_RESOURCES.map((res, idx) => {
              const Icon = res.icon;
              return (
                <div key={idx} style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '16px', border: '1.5px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(24, 140, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue)' }}>
                      <Icon size={24} />
                    </div>
                    <span className="badge" style={{ fontSize: '0.75rem' }}>{res.badge}</span>
                  </div>

                  <div style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                    {res.category} • {res.type}
                  </div>

                  <h3 style={{ fontSize: '1.45rem', color: '#111827', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {res.title}
                  </h3>

                  <p style={{ color: '#4b5563', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '2rem', flexGrow: 1 }}>
                    {res.desc}
                  </p>

                  <Link href="/contact" className="btn btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                    <Download size={16} />
                    <span>Download Whitepaper Access</span>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Engineering Articles & Insights */}
      <section className="section" id="articles" style={{ background: '#f5f5f5', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Engineering Log</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#111827' }}>
              Latest Architecture & Growth Articles
            </h2>
            <p style={{ color: '#4b5563' }}>
              Deep technical breakdowns and tactical execution notes from our daily builds.
            </p>
          </div>

          <div className="grid-3">
            {ARTICLES.map((art, idx) => (
              <div key={idx} style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '14px', border: '1px solid #e2e8f0', display: 'flex', flexDirection: 'column', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--brand-blue)', fontWeight: 700, marginBottom: '0.75rem' }}>
                  <span>{art.category}</span>
                  <span style={{ color: '#94a3b8' }}>{art.readTime}</span>
                </div>

                <h4 style={{ fontSize: '1.15rem', color: '#111827', marginBottom: '1rem', lineHeight: 1.4, flexGrow: 1 }}>
                  {art.title}
                </h4>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '0.85rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{art.date}</span>
                  <Link href="/contact" style={{ fontSize: '0.85rem', color: 'var(--brand-blue)', display: 'flex', alignItems: 'center', gap: '0.25rem', fontWeight: 600 }}>
                    <span>Read Note</span> <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
