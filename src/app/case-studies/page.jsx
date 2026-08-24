import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, TrendingUp, Award } from 'lucide-react';
import { getCaseStudies, urlForImage } from '@/sanity/client';
import CalBookingSection from '@/components/CalBookingSection';
import styles from './CaseStudiesIndex.module.css';

export const metadata = {
  title: 'Verified Client Outcomes & Case Studies | Codesoftic',
  description:
    'Explore verified enterprise transformation case studies, performance metrics, and autonomous AI implementations engineered by Codesoftic.',
};

export default async function CaseStudiesIndexPage() {
  const sanityStories = await getCaseStudies();

  // If no stories published in Sanity yet, provide curated default case studies
  const displayStories =
    sanityStories && sanityStories.length > 0
      ? sanityStories
      : [
          {
            _id: '1',
            slug: { current: 'outbound-rcm-status-follow-up' },
            eyebrow: '4 VOICE CALLS SHIFT • HEALTHCARE',
            title: 'Outbound RCM Status Follow-Up Automation',
            stat1Value: '10x',
            stat1Label: 'Calls Per Day',
            stat2Value: '40-60%',
            stat2Label: 'Lower Labour Cost',
            description:
              'Automated healthcare payer status follow-ups across multiple portals and live IVR systems, accelerating claim adjudication by 18 days.',
            image: null,
            ctaText: 'View case study',
          },
        ];

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Header Block */}
        <header className={styles.headerBlock}>
          <span className={styles.eyebrow}>VERIFIED CLIENT OUTCOMES</span>
          <h1 className={styles.pageTitle}>
            Enterprise Case Studies &{' '}
            <span className={styles.gradientTitle}>Transformations</span>
          </h1>
          <p className={styles.pageSubtitle}>
            Discover how Codesoftic engineers high-converting web applications, autonomous AI
            agent workflows, and performance engines that deliver compounding enterprise ROI.
          </p>
        </header>

        {/* Case Studies Grid */}
        <div className={styles.grid}>
          {displayStories.map((story, idx) => {
            const imageUrl = story.image ? urlForImage(story.image)?.width(800).url() : '/images/service-media-1.png';
            const slugPath = story.slug?.current || story.ctaUrl || `/case-studies/${story._id || 'rcm-status-follow-up'}`;

            return (
              <article key={story._id || idx} className={styles.card}>
                {/* Visual Image */}
                <div className={styles.imageWrap}>
                  <Image
                    src={imageUrl}
                    alt={story.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 450px"
                    className={styles.cardImg}
                  />
                </div>

                {/* Metrics Split Bar */}
                <div className={styles.metricsBar}>
                  <div className={styles.metricBox}>
                    <span className={styles.metricVal}>{story.stat1Value}</span>
                    <span className={styles.metricLbl}>{story.stat1Label}</span>
                  </div>
                  <div className={styles.metricBox}>
                    <span className={styles.metricVal}>{story.stat2Value}</span>
                    <span className={styles.metricLbl}>{story.stat2Label}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={styles.cardBody}>
                  <span className={styles.categoryBadge}>{story.eyebrow}</span>
                  <h2 className={styles.cardTitle}>{story.title}</h2>
                  <p className={styles.cardDesc}>{story.description}</p>

                  <Link href={slugPath.startsWith('http') ? slugPath : `/case-studies/${story.slug?.current || 'outbound-rcm-status-follow-up'}`} className={styles.ctaLink}>
                    <span>{story.ctaText || 'Read full case study'}</span>
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* Direct Booking Section */}
        <div style={{ marginTop: '5rem' }}>
          <CalBookingSection />
        </div>
      </div>
    </main>
  );
}
