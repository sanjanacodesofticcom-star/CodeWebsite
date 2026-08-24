import HeroSection from '@/components/HeroSection';
import TrustPartnersSection from '@/components/TrustPartnersSection';
import AdobeChallengesSection from '@/components/AdobeChallengesSection';
import StickyServicesSection from '@/components/StickyServicesSection';
import PartnershipTiersSection from '@/components/PartnershipTiersSection';
import SuccessStoriesSection from '@/components/SuccessStoriesSection';
import ClientTestimonialsSection from '@/components/ClientTestimonialsSection';
import CalBookingSection from '@/components/CalBookingSection';
import FAQAccordion from '@/components/FAQAccordion';

const HOMEPAGE_FAQS = [
  {
    question: "What makes Codesoftic different from conventional digital agencies?",
    answer: "Codesoftic operates as an elite technical engineering partner rather than a generic design agency. We combine cutting-edge Next.js web development, proprietary AI agent pipelines, and algorithmic performance marketing to build digital infrastructure that delivers measurable revenue expansion.",
  },
  {
    question: "How fast can Codesoftic deploy an enterprise website or AI automation system?",
    answer: "Our standard full-stack web builds launch in 3 to 6 weeks, while AI workflow automations and audits deliver initial actionable outputs within 10 to 14 days thanks to our pre-architected Antigravity acceleration modules.",
  },
  {
    question: "Can Codesoftic integrate with our existing backend or tech stack?",
    answer: "Yes. We engineer flexible APIs and microservices that integrate seamlessly with your existing CRM (HubSpot, Salesforce), cloud infrastructure (AWS, GCP, Azure), database architecture, and analytics suites.",
  },
  {
    question: "How does the Incubation Centre support early-stage ventures?",
    answer: "Our Incubation Centre provides end-to-end technical execution, AI architecture, UI/UX prototyping, dedicated engineering talent, and direct access to top-tier VC funding networks.",
  },
  {
    question: "How do I schedule an architectural consultation?",
    answer: "You can book directly on our live Cal.com calendar (https://cal.com/codesoftic/collaboration-circle?user=codesoftic) or submit a project briefing on our Contact page. Our senior architects reply within 4 business hours.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* 1. HERO SECTION (Shaping Tomorrow with AI Today + 4-Slide WebGL Gradient Slider) */}
      <HeroSection />

      {/* 2. INDUSTRIES / TRUST & PARTNERS SECTION (Meta Partner, Shopify Partner, WhatsApp API) */}
      <TrustPartnersSection />

      {/* 3. DIGITAL CHALLENGES SECTION (Address your biggest digital & growth challenges with Codesoftic) */}
      <AdobeChallengesSection />

      {/* 4. STICKY STACKING SERVICES SECTION (6 Tiered Cards in Codesoftic Brand Palette) */}
      <StickyServicesSection />

      {/* 5. STRATEGIC PARTNERSHIP ENGAGEMENT TIERS (Startups, Enterprises, B2B) */}
      <PartnershipTiersSection />

      {/* 6. SUCCESS STORIES / CASE STUDIES SECTION (Verified Client Outcomes) */}
      <SuccessStoriesSection />

      {/* 7. WHAT OUR CLIENTS SAY (TESTIMONIALS SECTION) */}
      <ClientTestimonialsSection />

      {/* 8. FAQ SECTION */}
      <section className="section" style={{ background: '#ffffff', borderTop: 'none' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
            <span className="badge" style={{ marginBottom: '0.75rem' }}>Answers on Demand</span>
            <h2 style={{ fontSize: '2.4rem', marginBottom: '0.75rem', color: '#111827' }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#4b5563' }}>
              Everything you need to know about working with Codesoftic.
            </p>
          </div>

          <FAQAccordion items={HOMEPAGE_FAQS} />
        </div>
      </section>

      {/* 9. CAL.COM DIRECT BOOKING SECTION */}
      <CalBookingSection />
    </div>
  );
}
