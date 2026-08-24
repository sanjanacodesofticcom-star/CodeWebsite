'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getCaseStudies, urlForImage } from '@/sanity/client';
import styles from './SuccessStoriesSection.module.css';

export default function SuccessStoriesSection() {
  const trackRef = useRef(null);
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

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

  const checkScroll = () => {
    if (trackRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const el = trackRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, [stories]);

  const handleScroll = (direction) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector(`.${styles.card}`)?.offsetWidth || 380;
      const scrollAmount = cardWidth + 32;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (loading) {
    return (
      <section className={styles.section} id="success-stories">
        <div className={styles.inner}>
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <span className={styles.eyebrow}>VERIFIED CLIENT OUTCOMES</span>
              <h2 className={styles.title}>Enterprise Transformations & Success Stories</h2>
            </div>
          </div>
          <div style={{ padding: '3rem 0', textAlign: 'center', color: '#64748b' }}>
            Loading verified outcomes...
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
        {/* Header Row with Eyebrow, Title and Navigation Arrows */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>VERIFIED CLIENT OUTCOMES</span>
            <h2 className={styles.title}>Enterprise Transformations & Success Stories</h2>
            <p className={styles.subtitle}>
              Explore how Codesoftic engineers bespoke digital platforms and autonomous AI pipelines that drive measurable revenue growth and market leadership.
            </p>
          </div>

          {/* Navigation Controls (when multiple items exist) */}
          {stories.length > 1 && (
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous outcome"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Next outcome"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Carousel / Slider Track */}
        <div className={styles.sliderTrack} ref={trackRef}>
          {stories.map((story, idx) => {
            const imageUrl = story.image ? urlForImage(story.image)?.width(800).height(450).url() : null;
            const targetSlug = story.slug?.current || (story.title ? story.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : 'outbound-rcm-status-follow-up');
            const ctaHref = story.ctaUrl || `/case-studies/${targetSlug}`;
            const isExternal = typeof ctaHref === 'string' && ctaHref.startsWith('http');

            return (
              <article key={story._id || idx} className={styles.card}>
                {/* 1. Card Image */}
                {imageUrl && (
                  <div className={styles.imageWrap}>
                    <Image
                      src={imageUrl}
                      alt={story.title || 'Case Study Visual'}
                      width={600}
                      height={338}
                      className={styles.cardImg}
                    />
                  </div>
                )}

                {/* 4, 5, 6, 7. 2-Metric Split Bar */}
                <div className={styles.metricsBar}>
                  <div className={styles.metricBox}>
                    <span className={styles.metricValue}>{story.stat1Value}</span>
                    <span className={styles.metricLabel}>{story.stat1Label}</span>
                  </div>

                  <div className={styles.metricBox}>
                    <span className={styles.metricValue}>{story.stat2Value}</span>
                    <span className={styles.metricLabel}>{story.stat2Label}</span>
                  </div>
                </div>

                {/* Card Content: 2. Eyebrow, 3. Main Title, 8. Description, 9 & 10. CTA */}
                <div className={styles.cardContent}>
                  {/* 2. Eyebrow */}
                  <span className={styles.categoryTag}>{story.eyebrow}</span>

                  {/* 3. Main Title */}
                  <h3 className={styles.cardTitle}>{story.title}</h3>

                  {/* 8. Description */}
                  <p className={styles.cardDesc}>{story.description}</p>

                  {/* 9 & 10. CTA Button / Link */}
                  {isExternal ? (
                    <a
                      href={ctaHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.caseLink}
                    >
                      <span>{story.ctaText || 'View case study'}</span>
                      <ArrowRight size={16} />
                    </a>
                  ) : (
                    <Link href={ctaHref} className={styles.caseLink}>
                      <span>{story.ctaText || 'View case study'}</span>
                      <ArrowRight size={16} />
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
