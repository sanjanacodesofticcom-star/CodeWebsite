import Image from 'next/image';
import styles from './TrustPartnersSection.module.css';

const PARTNERS = [
  {
    title: 'Meta Business Partner',
    badge: 'Official Ecosystem',
    logo: '/images/meta_PNG5.png',
    company: 'Meta',
    logoWidth: 120,
    logoHeight: 48,
  },
  {
    title: 'Shopify Partner',
    badge: 'Certified Commerce',
    logo: '/images/shopify.png',
    company: 'Shopify',
    logoWidth: 50,
    logoHeight: 50,
  },
  {
    title: 'Official WhatsApp Business API',
    badge: 'Enterprise Communications',
    logo: '/images/logo-whatsapp-png-pic-0.png',
    company: 'WhatsApp',
    logoWidth: 50,
    logoHeight: 50,
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
            Codesoftic is officially certified across leading technology and commerce platforms.
          </p>
        </div>

        {/* 3 Core Partner Cards - Clean without subpoints */}
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
