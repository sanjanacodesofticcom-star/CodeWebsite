'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Layers, Building2, Hexagon, Sparkles, Cpu } from 'lucide-react';
import styles from './ClientTestimonialsSection.module.css';

const TESTIMONIALS = [
  {
    avatar: '/images/avatars/avatar-1.jpg',
    companyName: 'Ailitic',
    companyIcon: Layers,
    quote: 'They tailor their solutions to our specific needs and goals.',
    author: 'Denis Slavska',
    role: 'CTO, Ailitic',
    location: 'New York City, New York',
  },
  {
    avatar: '/images/avatars/avatar-2.jpg',
    companyName: 'BUILDWAVE',
    companyIcon: Building2,
    quote: 'They organized their work and internal management was outstanding.',
    author: 'Jahan Melad',
    role: 'Project Manager, Buildwave',
    location: 'San Francisco, California',
  },
  {
    avatar: '/images/avatars/avatar-3.jpg',
    companyName: 'InHive Space',
    companyIcon: Hexagon,
    quote: 'Working with them was a great experience.',
    author: 'Jim Halpert',
    role: 'Lead Engineering, InHive Space',
    location: 'London, United Kingdom',
  },
  {
    avatar: '/images/avatars/avatar-4.jpg',
    companyName: 'NeuralEdge',
    companyIcon: Cpu,
    quote: 'Codesoftic delivered our AI automation pipelines ahead of schedule with flawless precision.',
    author: 'Elena Rostova',
    role: 'VP of Digital, NeuralEdge Labs',
    location: 'Singapore',
  },
  {
    avatar: '/images/avatars/avatar-5.jpg',
    companyName: 'Apex Dynamics',
    companyIcon: Sparkles,
    quote: 'Their technical team felt like a true extension of our executive leadership.',
    author: 'Marcus Sterling',
    role: 'Founder & CEO, Apex Dynamics',
    location: 'Boston, Massachusetts',
  },
];

export default function ClientTestimonialsSection() {
  const trackRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
  }, []);

  const handleScroll = (direction) => {
    if (trackRef.current) {
      const cardWidth = trackRef.current.querySelector(`.${styles.card}`)?.offsetWidth || 380;
      const scrollAmount = cardWidth + 28; // card width + gap
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
          {TESTIMONIALS.map((t, idx) => {
            const Icon = t.companyIcon;
            return (
              <div key={idx} className={styles.card}>
                <div>
                  {/* Card Top: Real Profile Avatar & Company Badge */}
                  <div className={styles.cardTop}>
                    <div className={styles.avatarWrapper}>
                      <Image
                        src={t.avatar}
                        alt={t.author}
                        width={52}
                        height={52}
                        className={styles.avatarImg}
                      />
                    </div>

                    <div className={styles.companyPill}>
                      <Icon size={16} className={styles.companyIcon} />
                      <span>{t.companyName}</span>
                    </div>
                  </div>

                  {/* Big Blue Quotation Mark */}
                  <div className={styles.quoteMark}>“</div>

                  {/* Bold Headline Quote */}
                  <h3 className={styles.quoteHeadline}>
                    {t.quote}
                  </h3>
                </div>

                {/* Author Metadata at Bottom */}
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>{t.author}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                  <span className={styles.authorLocation}>{t.location}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
