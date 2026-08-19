'use client';

import Image from 'next/image';
import styles from './HeroSection.module.css';

export default function HeroSection({
  videoSrc = "/videos/hero-bg.mp4",
  posterSrc = "/images/hero-enchanted-garden.png",
}) {
  return (
    <section className={styles.heroContainer} id="hero-section">
      <div className={styles.videoFrameWrapper}>
        <div className={styles.videoCard}>
          <video
            className={styles.heroVideo}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            poster={posterSrc}
          >
            <source src={videoSrc} type="video/mp4" />
            <Image
              src={posterSrc}
              alt="Codesoftic Hero Cinematic Video Presentation"
              fill
              priority
              style={{ objectFit: 'cover' }}
            />
          </video>
          <div className={styles.ambientOverlay} />
        </div>
      </div>
    </section>
  );
}
