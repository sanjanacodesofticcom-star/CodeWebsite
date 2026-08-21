'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '@/data/caseStudies';
import styles from './SuccessStoriesSection.module.css';

export default function SuccessStoriesSection() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = trackRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      window.addEventListener('resize', checkScroll);
      return () => {
        el.removeEventListener('scroll', checkScroll);
        window.removeEventListener('resize', checkScroll);
      };
    }
  }, []);

  const handleScroll = (direction) => {
    if (!trackRef.current) return;
    const { clientWidth } = trackRef.current;
    const scrollAmount = direction === 'left' ? -clientWidth * 0.75 : clientWidth * 0.75;
    trackRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <section className={styles.section} id="success-stories">
      <div className={styles.inner}>
        {/* Header Row with Title Left and Slider Buttons Right */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <p className={styles.eyebrow}>Verified Client Outcomes</p>
            <h2 className={styles.title}>
              Enterprise Transformations & Success Stories
            </h2>
            <p className={styles.subtitle}>
              Measurable digital and AI outcomes engineered for modern industry leaders.
            </p>
          </div>

          {/* Slider Forward & Backward Buttons */}
          <div className={styles.navArrows}>
            <button
              onClick={() => handleScroll('left')}
              disabled={!canScrollLeft}
              className={styles.arrowBtn}
              aria-label="Previous case study"
            >
              <ChevronLeft size={22} />
            </button>
            <button
              onClick={() => handleScroll('right')}
              disabled={!canScrollRight}
              className={styles.arrowBtn}
              aria-label="Next case study"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

        {/* Carousel Slider */}
        <div className={styles.carouselOuter}>
          <div ref={trackRef} className={styles.carouselTrack}>
            {CASE_STUDIES.map((story) => (
              <div key={story.slug} className={styles.card}>
                {/* Top Image */}
                <div className={styles.imageWrap}>
                  <Image
                    src={story.image}
                    alt={story.title}
                    width={600}
                    height={340}
                    className={styles.cardImg}
                  />
                </div>

                {/* 2-Metric Split Bar */}
                <div className={styles.metricsBar}>
                  {story.metrics.map((metric, idx) => (
                    <div key={idx} className={styles.metricBox}>
                      <span className={styles.metricValue}>{metric.value}</span>
                      <span className={styles.metricLabel}>{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* Card Content */}
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle}>{story.title}</h3>
                  <p className={styles.cardDesc}>{story.description}</p>
                  <Link
                    href={`/case-studies/${story.slug}`}
                    className={styles.caseLink}
                  >
                    <span>View case study</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
