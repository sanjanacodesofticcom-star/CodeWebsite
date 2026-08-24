'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getCaseStudies, urlForImage } from '@/sanity/client';
import styles from './SuccessStoriesSection.module.css';

export default function SuccessStoriesSection() {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadSanityCaseStudies() {
      try {
        const data = await getCaseStudies();
        if (data && data.length > 0) {
          setStories(data);
        } else {
          setStories([]);
        }
      } catch (err) {
        console.error('Failed to load Sanity case studies:', err);
        setStories([]);
      } finally {
        setLoading(false);
      }
    }
    loadSanityCaseStudies();
  }, []);

  if (loading) {
    return (
      <section className={styles.section} id="success-stories">
        <div className={styles.inner}>
          <div className={styles.header}>
            <p className={styles.eyebrow}>Verified Client Outcomes</p>
            <h2 className={styles.title}>
              Enterprise Transformations & Success Stories
            </h2>
          </div>
          <div style={{ padding: '3rem 0', textAlign: 'center', color: '#64748b' }}>
            Loading verified outcomes from Sanity...
          </div>
        </div>
      </section>
    );
  }

  // If no case studies published in Sanity Studio yet
  if (!stories || stories.length === 0) {
    return null;
  }

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
          {stories.map((story, idx) => {
            const imageUrl = story.image ? urlForImage(story.image)?.width(800).height(480).url() : null;
            const ctaHref = story.ctaUrl || '#';
            const isExternal = ctaHref.startsWith('http');

            return (
              <article key={story._id || idx} className={styles.storyCard}>
                {/* 1. Card Image */}
                {imageUrl && (
                  <div className={styles.imageWrapper}>
                    <Image
                      src={imageUrl}
                      alt={story.title || 'Case Study Card Image'}
                      width={600}
                      height={240}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                )}

                <div className={styles.cardBody}>
                  {/* 2. Eyebrow */}
                  <span className={styles.category}>{story.eyebrow}</span>

                  {/* 3. Main Title */}
                  <h3 className={styles.cardTitle}>{story.title}</h3>

                  {/* 8. Description */}
                  <p className={styles.cardDesc}>{story.description}</p>

                  {/* 4, 5, 6, 7. Stats Grid */}
                  <div className={styles.metricsRow}>
                    <div className={styles.metricBox}>
                      <span className={styles.metricValue}>{story.stat1Value}</span>
                      <span className={styles.metricLabel}>{story.stat1Label}</span>
                    </div>

                    <div className={styles.metricBox}>
                      <span className={styles.metricValue}>{story.stat2Value}</span>
                      <span className={styles.metricLabel}>{story.stat2Label}</span>
                    </div>
                  </div>

                  {/* 9, 10. CTA */}
                  {isExternal ? (
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.cardCta}
                    >
                      <span>{story.ctaText || 'View case study'}</span>
                      <ArrowRight size={15} />
                    </a>
                  ) : (
                    <Link href={ctaHref} className={styles.cardCta}>
                      <span>{story.ctaText || 'View case study'}</span>
                      <ArrowRight size={15} />
                    </Link>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
