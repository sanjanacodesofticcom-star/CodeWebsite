'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Layers } from 'lucide-react';
import { STICKY_SERVICES } from '@/data/stickyServicesData';
import styles from './StickyServicesSection.module.css';

export default function StickyServicesSection() {
  const getThemeClass = (theme) => {
    switch (theme) {
      case 'light':
        return styles.themeLight;
      case 'navy':
        return styles.themeNavy;
      case 'royal':
        return styles.themeRoyal;
      case 'obsidian':
        return styles.themeObsidian;
      default:
        return styles.themeLight;
    }
  };

  return (
    <section className={styles.sectionWrapper} id="services-stack">
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.headerBlock}>
          <div className={styles.badge}>
            <Layers size={14} />
            <span>End-to-End Capabilities</span>
          </div>
          <h2 className={styles.sectionTitle}>
            Engineering Scalable Growth &{' '}
            <span className={styles.titleGradient}>Enterprise AI Systems</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            From self-orchestrating autonomous agent pipelines to sub-second headless web
            infrastructure and venture co-building, explore how Codesoftic accelerates modern
            enterprises.
          </p>
        </div>

        {/* Sticky Stacking Cards */}
        <div className={styles.cardsStack}>
          {STICKY_SERVICES.map((service, index) => {
            // Calculate progressive top offset for natural layered stacking
            const topOffset = `calc(clamp(85px, 11vh, 120px) + ${index * 20}px)`;

            return (
              <div
                key={service.id}
                className={`${styles.serviceCard} ${getThemeClass(service.theme)}`}
                style={{
                  top: topOffset,
                  zIndex: index + 1,
                }}
              >
                <div
                  className={`${styles.cardGrid} ${
                    service.reverse ? styles.reversed : ''
                  }`}
                >
                  {/* Side A: Visual Image / Abstract 3D Card */}
                  <div
                    className={styles.visualBox}
                    style={{ order: service.reverse ? 2 : 1 }}
                  >
                    <div
                      className={styles.visualGradientBg}
                      style={{ background: service.visualGradient }}
                    />
                    <Image
                      src={service.visualImage}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className={styles.visualImage}
                    />
                    <div className={styles.visualOverlay}>
                      <span className={styles.visualTag}>{service.badgeTag}</span>
                      <div className={styles.visualTitleWrap}>
                        <h4 className={styles.visualBadgeTitle}>{service.badgeTitle}</h4>
                        <ArrowRight size={18} className={styles.visualArrow} />
                      </div>
                    </div>
                  </div>

                  {/* Side B: Structured Content & Links */}
                  <div
                    className={styles.contentBox}
                    style={{ order: service.reverse ? 1 : 2 }}
                  >
                    <span className={styles.cardEyebrow}>{service.eyebrow}</span>
                    <h3 className={styles.cardTitle}>{service.title}</h3>
                    <p className={styles.cardParagraph}>{service.description1}</p>
                    <p className={styles.cardParagraph}>{service.description2}</p>

                    <div className={styles.exploreSection}>
                      <h4 className={styles.exploreHeading}>Explore More</h4>
                      <div className={styles.linksList}>
                        {service.links.map((link, lIdx) => (
                          <Link
                            key={lIdx}
                            href={link.href}
                            className={styles.serviceLink}
                          >
                            <span>{link.label}</span>
                            <ArrowRight size={15} className={styles.linkArrow} />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
