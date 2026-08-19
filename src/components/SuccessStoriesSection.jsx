import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, TrendingUp, Sparkles, CheckCircle2 } from 'lucide-react';
import styles from './SuccessStoriesSection.module.css';

const STORIES = [
  {
    category: 'E-Commerce & Performance Scaling',
    title: 'Transforming DataDrive into a +310% Conversion Powerhouse',
    description: 'How Codesoftic engineered a headless Next.js commerce architecture with server-side Meta CAPI tracking, reducing CAC by 50% while scaling organic traffic.',
    image: '/images/case-study-1.png',
    metrics: [
      { value: '+310%', label: 'Conversion Rate Uplift' },
      { value: '-50%', label: 'CAC Reduction' },
    ],
    link: '/services/website-design',
  },
  {
    category: 'Autonomous AI Enterprise Workflows',
    title: 'Streamlining Global Enterprise Operations with NeuraFlow Agents',
    description: 'Deploying custom autonomous multi-agent systems and enterprise RAG pipelines that automated 88% of customer triage workflows with 95% error reduction.',
    image: '/images/case-study-2.png',
    metrics: [
      { value: '88%', label: 'OpEx Cost Reduction' },
      { value: '95%', label: 'Fewer Manual Errors' },
    ],
    link: '/services/ai-automation',
  },
];

export default function SuccessStoriesSection() {
  return (
    <section className={styles.section} id="success-stories">
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Verified Client Outcomes</p>
          <h2 className={styles.title}>
            Enterprise Transformations & Success Stories
          </h2>
          <p className={styles.subtitle}>
            Explore how Codesoftic engineers bespoke digital systems and autonomous AI pipelines that drive measurable revenue growth and market leadership.
          </p>
        </div>

        <div className={styles.storiesGrid}>
          {STORIES.map((story, idx) => (
            <article key={idx} className={story.cardClass || styles.storyCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={story.image}
                  alt={story.title}
                  width={600}
                  height={240}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className={styles.cardBody}>
                <span className={styles.category}>{story.category}</span>
                <h3 className={styles.cardTitle}>{story.title}</h3>
                <p className={styles.cardDesc}>{story.description}</p>

                <div className={styles.metricsRow}>
                  {story.metrics.map((m, mIdx) => (
                    <div key={mIdx} className={styles.metricBox}>
                      <span className={styles.metricValue}>{m.value}</span>
                      <span className={styles.metricLabel}>{m.label}</span>
                    </div>
                  ))}
                </div>

                <Link href={story.link} className={styles.cardCta}>
                  <span>Read full case study breakdown</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
