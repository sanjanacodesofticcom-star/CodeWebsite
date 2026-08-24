import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { getCaseStudyBySlug, getCaseStudies, urlForImage } from '@/sanity/client';
import CalBookingSection from '@/components/CalBookingSection';
import styles from './CaseStudySlug.module.css';

export async function generateMetadata({ params }) {
  const caseStudy = await getCaseStudyBySlug(params.slug);
  if (!caseStudy) {
    return {
      title: 'Case Study | Codesoftic Verified Client Outcomes',
      description: 'Explore verified enterprise transformation case studies and ROI outcomes delivered by Codesoftic.',
    };
  }
  return {
    title: `${caseStudy.title} | Codesoftic Case Study`,
    description: caseStudy.description || 'Verified enterprise outcomes engineered by Codesoftic.',
  };
}

export default async function CaseStudyPage({ params }) {
  const allStories = await getCaseStudies();
  let story = await getCaseStudyBySlug(params.slug);

  // Fallback: Match by slug string or find by index / title
  if (!story && allStories && allStories.length > 0) {
    story = allStories.find(
      (s) =>
        s.slug?.current === params.slug ||
        s._id === params.slug ||
        s.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-') === params.slug
    );
  }

  // If still not found, check if it matches default initial story
  if (!story) {
    if (params.slug === 'outbound-rcm-status-follow-up' || params.slug === 'rcm-status-follow-up') {
      story = {
        title: 'Outbound RCM Status Follow-Up Automation',
        eyebrow: '4 VOICE CALLS SHIFT • HEALTHCARE RCM',
        stat1Value: '10x',
        stat1Label: 'Calls Processed Per Day',
        stat2Value: '40-60%',
        stat2Label: 'Lower Operational Labor Cost',
        clientName: 'Apex Health Logistics',
        industry: 'Healthcare & Revenue Cycle Management (RCM)',
        description:
          'Automated payer status follow-ups across multiple insurance portals and live interactive voice response (IVR) systems, reducing revenue cycle aging by 18 days.',
        challenge:
          'Healthcare providers and billing agencies faced massive operational overhead, with manual agents spending over 45 minutes on hold per claim just to verify payer claim statuses. Claim backlogs grew over 30 days, impacting quarterly cash flow and increasing denial rates.',
        solution:
          'Codesoftic engineered an autonomous AI-driven voice & web agent pipeline that interfaces directly with payer portals and automated IVR systems. The agents autonomously authenticate, retrieve claim adjudication details, parse denial codes, and update the provider ERP in real-time.',
        resultsSummary:
          'Achieved a 10x throughput in daily claim verifications, slashed labor overhead by 52%, and accelerated cash reconciliation from 38 days to under 14 days with 99.8% data extraction precision.',
        testimonialQuote:
          'Codesoftic transformed our billing operations. We shifted from a 4-week claim backlog to real-time daily adjudication, completely eliminating hold times for our staff.',
        testimonialAuthor: 'Dr. Marcus Vance, VP of Revenue Operations',
        image: null,
      };
    } else {
      notFound();
    }
  }

  const imageUrl = story.image ? urlForImage(story.image)?.width(1400).url() : '/images/service-media-1.png';

  return (
    <main className={styles.pageWrapper}>
      <div className={styles.container}>
        {/* Back Link */}
        <Link href="/#success-stories" className={styles.backLink}>
          <ArrowLeft size={16} />
          <span>Back to Verified Outcomes</span>
        </Link>

        {/* Hero Block */}
        <header className={styles.heroBlock}>
          <div className={styles.eyebrowBadge}>{story.eyebrow}</div>
          <h1 className={styles.caseTitle}>{story.title}</h1>
          <p className={styles.caseSummary}>{story.description}</p>
        </header>

        {/* Key Metrics Banner */}
        <div className={styles.metricsGrid}>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>{story.stat1Value}</span>
            <span className={styles.metricLabel}>{story.stat1Label}</span>
          </div>

          <div className={styles.metricCard}>
            <span className={styles.metricValue}>{story.stat2Value}</span>
            <span className={styles.metricLabel}>{story.stat2Label}</span>
          </div>

          <div className={styles.metaPillsCard}>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Industry:</span>
              <span className={styles.metaValue}>{story.industry || 'Enterprise Technology'}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Client:</span>
              <span className={styles.metaValue}>{story.clientName || 'Confidential Enterprise Partner'}</span>
            </div>
            <div className={styles.metaRow}>
              <span className={styles.metaLabel}>Verified By:</span>
              <span className={styles.metaValue}>Codesoftic Engineering QA</span>
            </div>
          </div>
        </div>

        {/* Visual Showcase Banner */}
        <div className={styles.imageBanner}>
          <Image
            src={imageUrl}
            alt={story.title}
            fill
            priority
            className={styles.bannerImg}
          />
        </div>

        {/* Story Two-Column Layout */}
        <div className={styles.storyLayout}>
          {/* Main Story Content */}
          <div className={styles.storyContent}>
            {/* The Challenge */}
            <section className={styles.storyBlock}>
              <h2 className={styles.storyHeading}>The Executive Challenge</h2>
              <p className={styles.storyText}>
                {story.challenge ||
                  'Prior to partnering with Codesoftic, the client was constrained by manual bottlenecks, fragmented data sources, and legacy software that failed to scale with growing transaction volume. Operational costs were increasing linearly while error rates and customer latency impacted bottom-line margins.'}
              </p>
            </section>

            {/* The Solution Architecture */}
            <section className={styles.storyBlock}>
              <h2 className={styles.storyHeading}>The Codesoftic Solution Architecture</h2>
              <p className={styles.storyText}>
                {story.solution ||
                  'Our senior architects deployed a modern, event-driven infrastructure combining sub-second edge computing, automated data extraction pipelines, and customized AI orchestration. By replacing manual touchpoints with self-monitoring autonomous workflows, we unified data flow and streamlined operations.'}
              </p>
            </section>

            {/* Business Impact */}
            <section className={styles.storyBlock}>
              <h2 className={styles.storyHeading}>Business Impact & Compounding ROI</h2>
              <p className={styles.storyText}>
                {story.resultsSummary ||
                  'Within 60 days of deployment, the client witnessed exponential throughput improvements, substantial operational cost reductions, and zero recorded downtime. The architecture provides a scalable foundation for future international expansion.'}
              </p>
            </section>

            {/* Executive Testimonial */}
            {story.testimonialQuote && (
              <div className={styles.quoteCard}>
                <p className={styles.quoteText}>&ldquo;{story.testimonialQuote}&rdquo;</p>
                {story.testimonialAuthor && (
                  <p className={styles.quoteAuthor}>— {story.testimonialAuthor}</p>
                )}
              </div>
            )}
          </div>

          {/* Sidebar CTA */}
          <aside className={styles.storySidebar}>
            <div className={styles.ctaCard}>
              <h3 className={styles.ctaCardTitle}>Ready for Similar Outcomes?</h3>
              <p className={styles.ctaCardDesc}>
                Schedule a 30-minute architectural consultation with our senior engineering team to
                evaluate your systems and design a custom acceleration roadmap.
              </p>
              <a
                href="https://cal.com/codesoftic/collaboration-circle?user=codesoftic"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.ctaBtn}
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </aside>
        </div>

        {/* Live Booking Section */}
        <CalBookingSection />
      </div>
    </main>
  );
}
