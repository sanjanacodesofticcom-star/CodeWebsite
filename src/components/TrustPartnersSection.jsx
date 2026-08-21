import Image from 'next/image';
import styles from './TrustPartnersSection.module.css';

const PARTNERS = [
  {
    name: 'Meta Business Partner',
    logo: '/images/partners/meta-partner.svg',
    width: 190,
    height: 48,
  },
  {
    name: 'Shopify Partner',
    logo: '/images/partners/shopify-partner.svg',
    width: 180,
    height: 48,
  },
  {
    name: 'WhatsApp Business API Partner',
    logo: '/images/partners/whatsapp-partner.svg',
    width: 210,
    height: 48,
  },
  {
    name: 'Google Premier Partner',
    logo: '/images/partners/google-partner.svg',
    width: 195,
    height: 48,
  },
  {
    name: 'AWS Partner Network',
    logo: '/images/partners/aws-partner.svg',
    width: 190,
    height: 48,
  },
  {
    name: 'Stripe Verified Partner',
    logo: '/images/partners/stripe-partner.svg',
    width: 190,
    height: 48,
  },
  {
    name: 'Microsoft Solutions Partner',
    logo: '/images/partners/microsoft-partner.svg',
    width: 200,
    height: 48,
  },
  {
    name: 'HubSpot Certified Partner',
    logo: '/images/partners/hubspot-partner.svg',
    width: 195,
    height: 48,
  },
];

export default function TrustPartnersSection() {
  return (
    <section className={styles.partnerSection} id="trust-partners" aria-label="Partner Ecosystem">
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
      </div>

      {/* Seamless Infinite Brand Logo Slider (Full Partner Lockups with Icons & Official Partner Typography) */}
      <div className={styles.sliderWrapper}>
        <div className={styles.sliderTrack}>
          {/* First Group */}
          <div className={styles.trackGroup}>
            {PARTNERS.map((partner, idx) => (
              <div key={`partner-1-${idx}`} className={styles.logoItem} title={partner.name}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={styles.partnerLogo}
                  priority
                />
              </div>
            ))}
          </div>

          {/* Duplicate Group for Seamless Infinite Loop */}
          <div className={styles.trackGroup} aria-hidden="true">
            {PARTNERS.map((partner, idx) => (
              <div key={`partner-2-${idx}`} className={styles.logoItem} title={partner.name}>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={partner.width}
                  height={partner.height}
                  className={styles.partnerLogo}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
