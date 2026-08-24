'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Layers } from 'lucide-react';
import { getTestimonials, urlForImage } from '@/sanity/client';
import styles from './ClientTestimonialsSection.module.css';

export default function ClientTestimonialsSection() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch only real reviews from Sanity Studio
  useEffect(() => {
    async function loadSanityReviews() {
      try {
        const sanityData = await getTestimonials();
        if (sanityData && sanityData.length > 0) {
          setReviews(sanityData);
        } else {
          setReviews([]);
        }
      } catch (err) {
        console.error('Failed to load Sanity reviews:', err);
        setReviews([]);
      } finally {
        setLoading(false);
      }
    }
    loadSanityReviews();
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
  }, [reviews]);

  const handleScroll = (direction) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector(`.${styles.card}`)?.offsetWidth || 380;
      const scrollAmount = cardWidth + 28;
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  // If loading
  if (loading) {
    return (
      <section className={styles.section} id="testimonials">
        <div className={styles.inner}>
          <div className={styles.headerRow}>
            <div className={styles.headerLeft}>
              <span className={styles.eyebrow}>OUR REVIEWS</span>
              <h2 className={styles.title}>
                What Our <span className={styles.titleMuted}>Clients</span> Say
              </h2>
            </div>
          </div>
          <div style={{ padding: '3rem 0', textAlign: 'center', color: '#64748b' }}>
            Loading reviews...
          </div>
        </div>
      </section>
    );
  }

  // If no testimonials published in Sanity yet
  if (!reviews || reviews.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.inner}>
        {/* Header with Title and Slider Controls */}
        <div className={styles.headerRow}>
          <div className={styles.headerLeft}>
            <span className={styles.eyebrow}>OUR REVIEWS</span>
            <h2 className={styles.title}>
              What Our <span className={styles.titleMuted}>Clients</span> Say
            </h2>
          </div>

          {/* Slider Arrow Controls */}
          {reviews.length > 1 && (
            <div className={styles.controls}>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={() => handleScroll('left')}
                disabled={!canScrollLeft}
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                type="button"
                className={styles.arrowBtn}
                onClick={() => handleScroll('right')}
                disabled={!canScrollRight}
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          )}
        </div>

        {/* Carousel / Slider Track */}
        <div className={styles.sliderTrack} ref={trackRef}>
          {reviews.map((t, idx) => {
            const logoUrl = t.logo ? urlForImage(t.logo)?.url() : null;
            return (
              <div key={t._id || idx} className={styles.card}>
                <div>
                  {/* Card Top: 1. Logo & 4. Company Name */}
                  <div className={styles.cardTop}>
                    {/* Parameter 1: Logo & Parameter 4: Company Name */}
                    <div className={styles.companyPill}>
                      {logoUrl ? (
                        <div style={{ position: 'relative', width: '28px', height: '28px', borderRadius: '50%', overflow: 'hidden', flexShrink: 0 }}>
                          <Image
                            src={logoUrl}
                            alt={`${t.companyName} Logo`}
                            fill
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      ) : (
                        <Layers size={16} className={styles.companyIcon} />
                      )}
                      <span>{t.companyName}</span>
                    </div>
                  </div>

                  {/* Big Blue Quotation Mark */}
                  <div className={styles.quoteMark}>“</div>

                  {/* Parameter 2: Testimonial Text */}
                  <h3 className={styles.quoteHeadline}>
                    {t.testimonialText}
                  </h3>
                </div>

                {/* Parameter 3: User Name */}
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>{t.userName}</span>
                  <span className={styles.authorRole}>{t.companyName}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
