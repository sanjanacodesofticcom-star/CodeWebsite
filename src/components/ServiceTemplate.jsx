import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles, Layers } from 'lucide-react';
import FAQAccordion from '@/components/FAQAccordion';

export default function ServiceTemplate({
  serviceName,
  tagline,
  badgeText = "Enterprise Capability",
  overview,
  keyBenefits = [],
  deliverables = [],
  methodology = [],
  techStack = [],
  impactStat = { value: '4.8x', label: 'Average Client ROI' },
  faqs = [],
}) {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* Service Hero Banner */}
      <section className="section" style={{ paddingTop: '3.5rem', paddingBottom: '4rem', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container">
          {/* Breadcrumb */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>
            <Link href="/" style={{ color: '#4b5563', fontWeight: 500 }}>Home</Link>
            <ChevronRight size={14} />
            <Link href="/services" style={{ color: '#4b5563', fontWeight: 500 }}>Services</Link>
            <ChevronRight size={14} />
            <span style={{ color: 'var(--brand-blue)', fontWeight: 600 }}>{serviceName}</span>
          </nav>

          <div style={{ maxWidth: '850px' }}>
            <div className="badge" style={{ marginBottom: '1rem' }}>
              <span className="badge-dot" />
              <span>{badgeText}</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 4vw + 1rem, 3.75rem)', marginBottom: '1.25rem', lineHeight: 1.15, color: '#111827' }}>
              {serviceName}
            </h1>

            <p style={{ fontSize: '1.2rem', color: '#4b5563', lineHeight: '1.7', marginBottom: '2rem' }}>
              {tagline}
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-blue btn-lg">
                <span>Book a {serviceName} Consultation</span>
                <ArrowRight size={18} />
              </Link>
              <Link href="#deliverables" className="btn btn-secondary btn-lg">
                <span>View Deliverables</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Overview & Impact Highlights */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
            <div>
              <span className="badge" style={{ marginBottom: '1rem' }}>Architectural Impact</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '1.25rem', color: '#111827' }}>
                Engineering precision for exponential business growth
              </h2>
              <p style={{ color: '#4b5563', marginBottom: '1.5rem', lineHeight: '1.75' }}>
                {overview}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                {keyBenefits.map((benefit, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <CheckCircle2 size={20} style={{ color: 'var(--brand-blue)', flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: '#1f2937', fontSize: '0.975rem', fontWeight: 500 }}>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Impact Metric Card */}
            <div style={{ padding: '3rem 2.5rem', textAlign: 'center', background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '16px', boxShadow: '0 10px 30px -5px rgba(0,0,0,0.05)' }}>
              <Sparkles size={36} style={{ color: 'var(--brand-blue)', margin: '0 auto 1rem auto' }} />
              <div style={{ fontSize: '3.5rem', fontWeight: 800, color: 'var(--brand-blue)', letterSpacing: '-0.03em' }}>
                {impactStat.value}
              </div>
              <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#111827', marginTop: '0.5rem' }}>
                {impactStat.label}
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', marginTop: '0.75rem' }}>
                Benchmarked across global enterprise deployments and customer portfolio benchmarks.
              </p>

              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-around' }}>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827' }}>100%</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Code Ownership</div>
                </div>
                <div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: '#111827' }}>24/7</div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Monitoring & SLA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Deliverables Grid */}
      <section className="section" id="deliverables" style={{ background: '#f5f5f5' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Full-Spectrum Execution</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', color: '#111827' }}>
              What You Receive with <span style={{ color: 'var(--brand-blue)' }}>{serviceName}</span>
            </h2>
            <p style={{ color: '#4b5563' }}>
              Engineered for absolute scalability, military-grade reliability, and rapid time-to-market.
            </p>
          </div>

          <div className="grid-3">
            {deliverables.map((item, idx) => (
              <div key={idx} style={{ background: '#ffffff', borderRadius: '14px', padding: '2rem', border: '1px solid #e2e8f0', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(24, 140, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue)', marginBottom: '1.25rem' }}>
                  <Layers size={22} />
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: '#111827' }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: '0.925rem', color: '#4b5563', lineHeight: '1.6' }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Stage Methodology */}
      {methodology.length > 0 && (
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
              <span className="badge" style={{ marginBottom: '0.75rem' }}>Our Proven Framework</span>
              <h2 style={{ fontSize: '2.4rem', marginBottom: '1rem', color: '#111827' }}>
                The 4-Stage Delivery Blueprint
              </h2>
              <p style={{ color: '#4b5563' }}>
                Systematic engineering lifecycle ensuring zero blindspots from day zero to global scale.
              </p>
            </div>

            <div className="grid-4">
              {methodology.map((step, idx) => (
                <div key={idx} style={{ background: '#f8fafc', borderRadius: '14px', padding: '1.75rem', border: '1px solid #e2e8f0' }}>
                  <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--brand-blue)', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                    0{idx + 1}
                  </div>
                  <h4 style={{ fontSize: '1.15rem', marginBottom: '0.5rem', color: '#111827' }}>
                    {step.stage}
                  </h4>
                  <p style={{ fontSize: '0.875rem', color: '#4b5563', lineHeight: '1.6' }}>
                    {step.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack & Ecosystem */}
      {techStack.length > 0 && (
        <section className="section" style={{ background: '#f8fafc', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Technology Ecosystem</span>
            <h3 style={{ fontSize: '1.85rem', marginBottom: '2rem', color: '#111827' }}>
              Powered by Industry-Standard Tooling & Frameworks
            </h3>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
              {techStack.map((tech, idx) => (
                <span 
                  key={idx}
                  style={{
                    padding: '0.55rem 1.25rem',
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '999px',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    color: '#334155',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Service FAQs */}
      {faqs.length > 0 && (
        <section className="section" style={{ background: '#ffffff' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
              <span className="badge" style={{ marginBottom: '0.75rem' }}>Frequently Asked Questions</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '0.75rem', color: '#111827' }}>
                Questions About {serviceName}
              </h2>
            </div>

            <FAQAccordion items={faqs} />
          </div>
        </section>
      )}

      {/* Service CTA Bottom Banner */}
      <section className="section" style={{ paddingBottom: '6rem', background: '#f5f5f5' }}>
        <div className="container">
          <div 
            style={{ 
              padding: '4rem 2rem', 
              textAlign: 'center', 
              background: '#111827',
              borderRadius: '20px',
              color: '#ffffff',
            }}
          >
            <span className="badge" style={{ marginBottom: '1rem', background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}>Initiate Deployment</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#ffffff' }}>
              Ready to accelerate your {serviceName}?
            </h2>
            <p style={{ color: '#94a3b8', maxWidth: '600px', margin: '0 auto 2rem auto', fontSize: '1.05rem' }}>
              Schedule a dedicated technical briefing with our architects and get an execution roadmap within 48 hours.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="btn btn-blue btn-lg">
                <Sparkles size={18} />
                <span>Schedule Consultation</span>
              </Link>
              <Link href="/services" className="btn btn-secondary btn-lg" style={{ background: 'transparent', color: '#ffffff', borderColor: 'rgba(255,255,255,0.4)' }}>
                <span>Explore Other Services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
