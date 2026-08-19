import { 
  Mail, 
  Clock, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata = {
  title: 'Contact Us | Codesoftic — Schedule a Strategy Session',
  description: 'Connect with Codesoftic systems architects and AI researchers. Submit a project briefing or schedule a discovery audit with guaranteed 4-hour response.',
};

const CONTACT_FAQS = [
  {
    question: 'How quickly will I receive a response after submitting a briefing?',
    answer: 'Our senior architectural team reviews all inquiries and responds within 4 business hours with an initial evaluation or direct calendar link for a deep-dive call.',
  },
  {
    question: 'Are project consultations confidential?',
    answer: 'Absolutely. We treat all project specifications, proprietary concepts, and architectural details with strict confidentiality under bilateral Non-Disclosure Agreements (NDAs).',
  },
  {
    question: 'Can we schedule an in-person meeting?',
    answer: 'Yes! We host partners and clients across our offices in San Francisco, London, Singapore, and Bangalore. Select your preferred office location when scheduling.',
  },
];

export default function ContactPage() {
  return (
    <div style={{ background: '#ffffff' }}>
      {/* 1. Contact Hero Banner */}
      <section className="section" style={{ paddingTop: '4rem', paddingBottom: '3.5rem', background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
          <div className="badge" style={{ marginBottom: '1rem' }}>
            <span className="badge-dot" />
            <span>Direct Architectural Access</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.5rem, 4vw + 1.25rem, 4.25rem)', marginBottom: '1.25rem', color: '#111827' }}>
            Let's Architect Your <br />
            <span style={{ color: 'var(--brand-blue)' }}>Next Breakthrough</span>
          </h1>

          <p style={{ fontSize: '1.15rem', color: '#4b5563', lineHeight: 1.7 }}>
            Whether you are launching a flagship Next.js web application, deploying autonomous AI pipelines, or scaling performance marketing — our senior engineers are ready to build.
          </p>
        </div>
      </section>

      {/* 2. Interactive Form & Direct Channels Grid */}
      <section className="section-lg" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'flex-start', gap: '3.5rem' }}>
            {/* Left Column: Direct Info & Guarantees */}
            <div>
              <span className="badge" style={{ marginBottom: '1rem' }}>Executive Inquiries</span>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '1.25rem', color: '#111827' }}>
                Direct channels to our engineering leadership
              </h2>
              <p style={{ color: '#4b5563', marginBottom: '2.5rem', lineHeight: 1.7 }}>
                Skip the generic sales reps. You will collaborate directly with seasoned technical architects who understand code, infrastructure, and business scalability.
              </p>

              {/* Direct Channels Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(24, 140, 255, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-blue)', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                      General & Executive Inquiries
                    </div>
                    <a href="mailto:contact@codesoftic.com" style={{ fontSize: '1.05rem', color: '#111827', fontWeight: 700 }}>
                      contact@codesoftic.com
                    </a>
                  </div>
                </div>

                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-cyan)', flexShrink: 0 }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                      Response Guarantee
                    </div>
                    <div style={{ fontSize: '1.05rem', color: '#111827', fontWeight: 700 }}>
                      Guaranteed within 4 Business Hours
                    </div>
                  </div>
                </div>

                <div style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem', background: '#f8fafc', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(79, 70, 229, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-indigo)', flexShrink: 0 }}>
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b', textTransform: 'uppercase', fontWeight: 600 }}>
                      IP & Privacy Protection
                    </div>
                    <div style={{ fontSize: '1.05rem', color: '#111827', fontWeight: 700 }}>
                      Mutual NDA & 100% Code Ownership
                    </div>
                  </div>
                </div>
              </div>

              {/* Global Offices */}
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#111827', marginBottom: '1rem' }}>Global Presence</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem' }}>San Francisco</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Market St, Suite 1400</div>
                  </div>
                  <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem' }}>London</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Canary Wharf, Financial District</div>
                  </div>
                  <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem' }}>Singapore</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Marina Bay Financial Centre</div>
                  </div>
                  <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '10px', border: '1px solid #e2e8f0' }}>
                    <div style={{ fontWeight: 700, color: '#111827', fontSize: '0.95rem' }}>Bangalore</div>
                    <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Outer Ring Rd, Tech Corridor</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Contact FAQs */}
      <section className="section" style={{ background: '#f5f5f5', borderTop: '1px solid #e5e7eb', paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Consultation Info</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '0.75rem', color: '#111827' }}>
              Frequently Asked Questions
            </h2>
          </div>

          <FAQAccordion items={CONTACT_FAQS} />
        </div>
      </section>
    </div>
  );
}
