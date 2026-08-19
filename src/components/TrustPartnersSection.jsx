import Image from 'next/image';
import styles from './TrustPartnersSection.module.css';

const PARTNERS = [
  {
    title: 'Meta Business Partner',
    badge: 'Official Ecosystem',
    desc: 'Certified technical integration for Server-Side Conversions API (CAPI), algorithmic paid media acquisition, and automated dynamic catalog scaling across Instagram & Facebook.',
    logo: '/images/meta_PNG5.png',
    company: 'Meta',
    logoWidth: 110,
    logoHeight: 46,
  },
  {
    title: 'Shopify Partner',
    badge: 'Certified Commerce',
    desc: 'Bespoke Next.js headless storefronts, custom checkout extensions, high-volume inventory sync, and enterprise e-commerce acceleration.',
    logo: '/images/shopify.png',
    company: 'Shopify',
    logoWidth: 46,
    logoHeight: 46,
  },
  {
    title: 'Official WhatsApp Business API',
    badge: 'Enterprise Communications',
    desc: 'Direct BSP integration for autonomous conversational AI agents, interactive broadcast funnels, and automated CRM triage.',
    logo: '/images/logo-whatsapp-png-pic-0.png',
    company: 'WhatsApp',
    logoWidth: 46,
    logoHeight: 46,
  },
];

export default function TrustPartnersSection() {
  return (
    <section className={styles.partnerSection} id="trust-partners">
      <div className={styles.inner}>
        {/* Section Header */}
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>Accredited Global Partner Ecosystem</p>
          <h2 className={styles.title}>
            Trusted Partner Status with Global Industry Giants
          </h2>
          <p className={styles.subtitle}>
            Codesoftic is officially certified across leading technology and commerce platforms, providing our clients with priority API access, direct partner tier benefits, and enterprise-grade reliability.
          </p>
        </div>

        {/* 3 Core Partner Cards with Project Images */}
        <div className={styles.partnerGrid}>
          {PARTNERS.map((partner, idx) => (
            <div key={idx} className={styles.partnerCard}>
              <div className={styles.cardTop}>
                <div className={styles.logoContainer}>
                  <Image
                    src={partner.logo}
                    alt={`${partner.company} Official Partner Logo`}
                    width={partner.logoWidth}
                    height={partner.logoHeight}
                    className={styles.partnerLogoImg}
                    priority
                  />
                </div>
                <span className={styles.partnerBadge}>{partner.badge}</span>
              </div>

              <div className={styles.partnerCardContent}>
                <h3 className={styles.partnerTitle}>{partner.title}</h3>
                <p className={styles.partnerDesc}>{partner.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
