'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import NeatGradientCanvas from './NeatGradientCanvas';
import { HERO_SLIDES } from '@/data/heroSlidesData';
import styles from './HeroSection.module.css';

const SLIDE_DURATION = 7500; // 7.5 seconds per slide

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide, currentSlide]);

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section className={styles.heroWrapper} id="hero">
      <div className={styles.container}>
        {/* Top Header: Shaping Tomorrow with AI Today */}
        <div className={styles.headerBlock}>
          <h1 className={styles.mainHeading}>
            <span className={styles.headingTop}>Shaping Tomorrow</span>
            <span className={styles.headingGradient}>
              with AI Today<sup className={styles.trademark}>™</sup>
            </span>
          </h1>
        </div>

        {/* 4-Slide Interactive WebGL Widthwise Slider */}
        <div
          className={styles.sliderCard}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Animated 3D WebGL Gradient Background Canvas */}
          <div className={styles.canvasLayer}>
            <NeatGradientCanvas
              key={`canvas-slide-${currentSlide}`}
              config={activeSlideData.config}
              id={`hero-gradient-${currentSlide}`}
            />
          </div>

          {/* Dark Overlay for Text Readability */}
          <div className={styles.darkOverlay} />

          {/* Slide Text Content with Slow Reveal Animation */}
          <div className={styles.contentWrap} key={`content-slide-${currentSlide}`}>
            <span className={styles.slideEyebrow}>{activeSlideData.eyebrow}</span>
            <h2 className={styles.slideTitle}>{activeSlideData.title}</h2>
            <p className={styles.slideDesc}>{activeSlideData.description}</p>

            <Link href={activeSlideData.ctaLink} className={styles.ctaButton}>
              <span>{activeSlideData.ctaText}</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Bottom 4-Segment Progress Bar */}
          <div className={styles.progressNav}>
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = currentSlide === idx;
              const isCompleted = currentSlide > idx;

              return (
                <div
                  key={slide.id}
                  className={`${styles.progressSegment} ${
                    isActive ? styles.active : ''
                  } ${isCompleted ? styles.completed : ''}`}
                  onClick={() => goToSlide(idx)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                  style={{
                    cursor: 'pointer',
                  }}
                >
                  <div
                    className={styles.progressBarFill}
                    style={
                      isActive
                        ? {
                            animationDuration: `${SLIDE_DURATION}ms`,
                            animationPlayState: isPaused ? 'paused' : 'running',
                          }
                        : undefined
                    }
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
