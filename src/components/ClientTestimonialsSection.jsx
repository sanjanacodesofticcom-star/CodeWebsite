'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Layers, Building2, Hexagon, Sparkles, Cpu } from 'lucide-react';
import { getTestimonials, urlForImage } from '@/sanity/client';
import styles from './ClientTestimonialsSection.module.css';

// Default static fallback reviews if Sanity is empty or not yet connected
const DEFAULT_TESTIMONIALS = [
  {
    logoUrl: null,
    companyIcon: Layers,
    companyName: 'Ailitic',
    testimonialText: 'They tailor their solutions to our specific needs and goals.',
    userName: 'Denis Slavska',
    userRole: 'CTO, Ailitic',
    userLocation: 'New York City, New York',
    userAvatar: '/images/avatars/avatar-1.jpg',
  },
  {
    logoUrl: null,
    companyIcon: Building2,
    companyName: 'BUILDWAVE',
    testimonialText: 'They organized their work and internal management was outstanding.',
    userName: 'Jahan Melad',
    userRole: 'Project Manager, Buildwave',
    userLocation: 'San Francisco, California',
    userAvatar: '/images/avatars/avatar-2.jpg',
  },
  {
    logoUrl: null,
    companyIcon: Hexagon,
    companyName: 'InHive Space',
    testimonialText: 'Working with them was a great experience.',
    userName: 'Jim Halpert',
    userRole: 'Lead Engineering, InHive Space',
    userLocation: 'London, United Kingdom',
    userAvatar: '/images/avatars/avatar-3.jpg',
  },
  {
    logoUrl: null,
    companyIcon: Cpu,
    companyName: 'NeuralEdge',
    testimonialText: 'Codesoftic delivered our AI automation pipelines ahead of schedule with flawless precision.',
    userName: 'Elena Rostova',
    userRole: 'VP of Digital, NeuralEdge Labs',
    userLocation: 'Singapore',
    userAvatar: '/images/avatars/avatar-4.jpg',
  },
  {
    logoUrl: null,
    companyIcon: Sparkles,
    companyName: 'Apex Dynamics',
    testimonialText: 'Their technical team felt like a true extension of our executive leadership.',
    userName: 'Marcus Sterling',
    userRole: 'Founder & CEO, Apex Dynamics',
    userLocation: 'Boston, Massachusetts',
    userAvatar: '/images/avatars/avatar-5.jpg',
  },
];

export default function ClientTestimonialsSection() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [reviews, setReviews] = useState(DEFAULT_TESTIMONIALS);

  // Fetch dynamic reviews from Sanity on mount
  useEffect(() => {
    async function loadSanityReviews() {
      try {
        const sanityData = await getTestimonials();
        if (sanityData && sanityData.length > 0) {
          const formatted = sanityData.map((item, idx) => ({
            logoUrl: urlForImage(item.logo)?.width(80).height(80).url() || null,
            companyName: item.companyName || 'Partner',
            testimonialText: item.testimonialText || '',
            userName: item.userName || 'Client',
            userRole: item.userRole || '',
            userLocation: item.userLocation || '',
            userAvatar: urlForImage(item.userAvatar)?.width(120).height(120).url() || `/images/avatars/avatar-${(idx % 5) + 1}.jpg`,
            companyIcon: Layers,
          }));
          setReviews(formatted);
        }
      } catch (err) {
        console.warn('Failed to load Sanity reviews:', err);
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
        </div>

        {/* Carousel / Slider Track */}
        <div className={styles.sliderTrack} ref={trackRef}>
          {reviews.map((t, idx) => {
            const Icon = t.companyIcon || Layers;
            return (
              <div key={idx} className={styles.card}>
                <div>
                  {/* Card Top: 1. Logo / Avatar & 4. Company Name */}
                  <div className={styles.cardTop}>
                    <div className={styles.avatarWrapper}>
                      <Image
                        src={t.userAvatar || `/images/avatars/avatar-${(idx % 5) + 1}.jpg`}
                        alt={t.userName}
                        width={52}
                        height={52}
                        className={styles.avatarImg}
                      />
                    </div>

                    {/* Parameter 1: Logo & Parameter 4: Company Name */}
                    <div className={styles.companyPill}>
                      {t.logoUrl ? (
                        <Image
                          src={t.logoUrl}
                          alt={`${t.companyName} Logo`}
                          width={20}
                          height={20}
                          style={{ objectFit: 'contain' }}
                        />
                      ) : (
                        <Icon size={16} className={styles.companyIcon} />
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

                {/* Parameter 3: User Name (& Role / Location) */}
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>{t.userName}</span>
                  {t.userRole && <span className={styles.authorRole}>{t.userRole}</span>}
                  {t.userLocation && <span className={styles.authorLocation}>{t.userLocation}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
