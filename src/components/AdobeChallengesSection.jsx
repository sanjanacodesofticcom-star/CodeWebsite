import Link from 'next/link';
import Image from 'next/image';
import styles from './AdobeChallengesSection.module.css';

export default function AdobeChallengesSection() {
  return (
    <section className={styles.accSection} id="acc-section">
      <div className={styles.accInner}>
        <h2 className={styles.accHeading}>
          Address your biggest digital & growth challenges with<br />
          Codesoftic.
        </h2>
        <p className={styles.accSubheading}>
          Explore engineered solutions that help you create high-performance web platforms, automate operations with AI, dominate search visibility, and scale revenue.
        </p>

        {/* ROW 1: 3-column cards */}
        <div className={styles.accGrid}>
          <article className={styles.accCard}>
            <p className={styles.accCardEyebrow}>Content & Web Architecture</p>
            <h3 className={styles.accCardTitle}>Scale your digital foundation.</h3>
            <p className={styles.accCardDesc}>
              Launch bespoke Next.js web applications with sub-second performance, modern design systems, and seamless API integrations.
            </p>
            <Link href="/services/website-design" className={styles.accCardCta}>
              Explore solutions
            </Link>
          </article>

          <article className={styles.accCard}>
            <p className={styles.accCardEyebrow}>Autonomous AI Systems</p>
            <h3 className={styles.accCardTitle}>Automate enterprise operations.</h3>
            <p className={styles.accCardDesc}>
              Deploy intelligent multi-agent LLM workflows and custom RAG knowledge pipelines that eliminate manual bottlenecks 24/7.
            </p>
            <Link href="/services/ai-automation" className={styles.accCardCta}>
              Explore solutions
            </Link>
          </article>

          <article className={styles.accCard}>
            <p className={styles.accCardEyebrow}>Search & Brand Visibility</p>
            <h3 className={styles.accCardTitle}>Stay visible in AI-driven search.</h3>
            <p className={styles.accCardDesc}>
              Dominate organic Google rankings and generative AI search citations (ChatGPT, Perplexity, Google SGE) with technical SEO engineering.
            </p>
            <Link href="/services/seo" className={styles.accCardCta}>
              Explore solutions
            </Link>
          </article>
        </div>

        {/* ROW 2: 2-column cards with bottom-right bleed image */}
        <div className={styles.accGrid2col}>
          <article className={styles.accCardMedia}>
            <div className={styles.accCardBody}>
              <p className={styles.accCardEyebrow}>Revenue & Performance Scaling</p>
              <h3 className={styles.accCardTitle}>Scale performance marketing.</h3>
              <p className={styles.accCardDesc}>
                Maximize paid acquisition with algorithmic Meta & Google bidding, server-side CAPI tracking, and dynamic creative optimization.
              </p>
              <Link href="/services/performance-marketing" className={styles.accCardCta}>
                Explore solutions
              </Link>
            </div>
            <div className={styles.accCardImgWrap}>
              <Image
                src="/images/performance-marketing-scaled.png"
                alt="Scale performance marketing"
                width={400}
                height={260}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </article>

          <article className={styles.accCardMedia}>
            <div className={styles.accCardBody}>
              <p className={styles.accCardEyebrow}>Diagnostic Intelligence</p>
              <h3 className={styles.accCardTitle}>Modernize with AI audits.</h3>
              <p className={styles.accCardDesc}>
                Evaluate your architecture, uncover cloud and operational waste, and get an actionable 12-month AI integration blueprint.
              </p>
              <Link href="/services/ai-audits" className={styles.accCardCta}>
                Explore solutions
              </Link>
            </div>
            <div className={styles.accCardImgWrap}>
              <Image
                src="/images/ai-audits-modernized.png"
                alt="Modernize with AI audits"
                width={400}
                height={260}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
