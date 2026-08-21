'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Twitter,
  Github,
  Linkedin,
  Instagram,
  Disc as Discord,
} from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} id="main-footer">
      {/* Full Background Image Layer (Image 1: Celestial Stairway & Azure Sky) */}
      <div className={styles.bgImageLayer} />

      {/* Top Fog Gradient Layer for Crystal-Clear Readability of Links */}
      <div className={styles.topOverlay} />

      <div className={styles.inner}>
        {/* Top Grid (Image 2 Structure) */}
        <div className={styles.topGrid}>
          {/* Brand Column (Left) */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brandLogo} aria-label="Codesoftic Home">
              <Image
                src="/images/Logo.svg"
                alt="Codesoftic Logo"
                width={150}
                height={26}
                priority
              />
            </Link>

            <p className={styles.brandTagline}>
              Built for businesses that refuse to settle for ordinary digital products.
            </p>

            {/* Social Icons Row matching reference */}
            <div className={styles.socialRow}>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="X (Twitter)"
              >
                <Twitter size={16} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Discord"
              >
                <Discord size={16} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialIcon}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* 4 Navigation Columns (Right) */}
          <div className={styles.navCols}>
            {/* Product / Services */}
            <div>
              <h4 className={styles.colHeader}>Product</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/services/website-design" className={styles.footerLink}>
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-automation" className={styles.footerLink}>
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="/services/ai-audits" className={styles.footerLink}>
                    AI Audits
                  </Link>
                </li>
                <li>
                  <Link href="/services/performance-marketing" className={styles.footerLink}>
                    Performance
                  </Link>
                </li>
                <li>
                  <Link href="/services/seo" className={styles.footerLink}>
                    Roadmap
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className={styles.colHeader}>Resources</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/case-studies" className={styles.footerLink}>
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className={styles.footerLink}>
                    Blog & Insights
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className={styles.footerLink}>
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.footerLink}>
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/incubation-centre" className={styles.footerLink}>
                    Community
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className={styles.colHeader}>Company</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/about" className={styles.footerLink}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={styles.footerLink}>
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.footerLink}>
                    Contact
                  </Link>
                </li>
                <li>
                  <a
                    href="https://cal.com/codesoftic/collaboration-circle?user=codesoftic"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.footerLink}
                  >
                    Press
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className={styles.colHeader}>Legal</h4>
              <ul className={styles.linkList}>
                <li>
                  <Link href="/contact" className={styles.footerLink}>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.footerLink}>
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className={styles.footerLink}>
                    Security
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Centered Copyright Line (Image 2 style) */}
        <div className={styles.copyrightRow}>
          <p className={styles.copyrightText}>
            © {currentYear} Codesoftic.
          </p>
        </div>

        {/* Bottom Logo Name: Bigger Form Logo SVG */}
        <div className={styles.bigLogoWrapper}>
          <Image
            src="/images/Logo-white.svg"
            alt="Codesoftic"
            width={1200}
            height={116}
            className={styles.bigLogoSvg}
            priority
          />
        </div>
      </div>
    </footer>
  );
}
