'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Linkedin, 
  Twitter, 
  Github, 
  Mail, 
  CheckCircle2, 
  Calendar 
} from 'lucide-react';
import styles from './Footer.module.css';

const CAL_LINK = "https://cal.com/codesoftic/collaboration-circle?user=codesoftic";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setSubscribed(true);
        setEmail('');
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className={styles.footer} id="main-footer">
      <div className={styles.innerContainer}>
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <Link href="/" aria-label="Codesoftic Home">
              <Image
                src="/images/Logo.svg"
                alt="Codesoftic Logo"
                width={160}
                height={20}
                className={styles.footerLogo}
              />
            </Link>
            <p className={styles.brandBio}>
              Architecting intelligent web platforms, next-gen AI automations, and hyper-scale digital infrastructure for the world's most ambitious brands.
            </p>
            <div className={styles.socialRow}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="GitHub">
                <Github size={18} />
              </a>
              <a href="mailto:contact@codesoftic.com" className={styles.socialBtn} aria-label="Email">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/services/website-design" className={styles.footerLink}>
                  Website Design
                </Link>
              </li>
              <li>
                <Link href="/services/ai-audits" className={styles.footerLink}>
                  AI Audits
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className={styles.footerLink}>
                  AI Automation
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className={styles.footerLink}>
                  SEO & Dominance
                </Link>
              </li>
              <li>
                <Link href="/services/performance-marketing" className={styles.footerLink}>
                  Performance Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Ecosystem */}
          <div>
            <h4 className={styles.colTitle}>Ecosystem</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about" className={styles.footerLink}>
                  About Codesoftic
                </Link>
              </li>
              <li>
                <Link href="/incubation-centre" className={styles.footerLink}>
                  Incubation Centre
                </Link>
              </li>
              <li>
                <Link href="/resources" className={styles.footerLink}>
                  Insights & Case Studies
                </Link>
              </li>
              <li>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Book via Cal.com
                </a>
              </li>
              <li>
                <Link href="/contact" className={styles.footerLink}>
                  Global Offices
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Resources</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/resources" className={styles.footerLink}>
                  AI Whitepapers
                </Link>
              </li>
              <li>
                <Link href="/resources" className={styles.footerLink}>
                  Tech Benchmarks
                </Link>
              </li>
              <li>
                <a href={CAL_LINK} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Schedule Audit Call
                </a>
              </li>
              <li>
                <Link href="/services" className={styles.footerLink}>
                  Client Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h4 className={styles.colTitle}>Stay Ahead with AI</h4>
            <p className={styles.newsletterDesc}>
              Receive our bi-weekly executive intelligence digest on AI automation, web performance, and growth engineering.
            </p>
            {subscribed ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#16a34a', fontSize: '0.9rem', fontWeight: 600 }}>
                <CheckCircle2 size={18} />
                <span>You're subscribed! Check your inbox.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Enter business email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={styles.newsletterInput}
                />
                <button type="submit" className="btn btn-primary btn-sm" disabled={loading} style={{ background: '#111827', color: '#ffffff' }}>
                  {loading ? 'Subscribing...' : 'Subscribe'} <ArrowRight size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} Codesoftic Technologies Inc. All rights reserved.
          </div>
          <div className={styles.bottomLinks}>
            <Link href="/contact" className={styles.footerLink}>Privacy Policy</Link>
            <Link href="/contact" className={styles.footerLink}>Terms of Service</Link>
            <Link href="/contact" className={styles.footerLink}>Security & Trust</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
