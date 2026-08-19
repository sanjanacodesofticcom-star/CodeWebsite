import Link from 'next/link';
import { Calendar, Clock, CheckCircle2, ArrowUpRight, Sparkles, ShieldCheck } from 'lucide-react';
import styles from './CalBookingSection.module.css';

const CAL_LINK = "https://cal.com/codesoftic/collaboration-circle?user=codesoftic";

export default function CalBookingSection() {
  return (
    <section className={styles.section} id="schedule-call">
      <div className={styles.inner}>
        <div className={styles.bookingBox}>
          {/* Left Column: Information & CTAs */}
          <div className={styles.leftCol}>
            <div className={styles.badge}>
              <Sparkles size={13} />
              <span>Priority Architectural Session</span>
            </div>

            <h2 className={styles.title}>
              Schedule Your 1-on-1 Strategy Session on Cal.com
            </h2>

            <p className={styles.desc}>
              Skip the sales pitch. Book a direct 45-minute architectural consultation with our senior engineering team to evaluate your technical roadmap, AI automation feasibility, and growth strategy.
            </p>

            <ul className={styles.perksList}>
              <li className={styles.perkItem}>
                <CheckCircle2 size={18} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                <span>45-minute deep-dive with a Senior Solutions Architect</span>
              </li>
              <li className={styles.perkItem}>
                <CheckCircle2 size={18} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                <span>Immediate technical feasibility & scope analysis</span>
              </li>
              <li className={styles.perkItem}>
                <CheckCircle2 size={18} style={{ color: 'var(--brand-blue)', flexShrink: 0 }} />
                <span>100% confidential under mutual NDA</span>
              </li>
            </ul>

            <div className={styles.ctaGroup}>
              <a 
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.calBtn}
              >
                <Calendar size={18} />
                <span>Open Instant Booking Calendar</span>
                <ArrowUpRight size={18} />
              </a>

              <Link href="/contact" className={styles.emailLink}>
                Prefer submitting a written brief? Click here →
              </Link>
            </div>
          </div>

          {/* Right Column: Live Calendar Preview Box */}
          <div className={styles.previewCard}>
            <div className={styles.previewHeader}>
              <div>
                <div className={styles.calHost}>Codesoftic Collaboration Circle</div>
                <div style={{ fontSize: '13px', color: '#94a3b8' }}>Live Availability via Cal.com</div>
              </div>
              <span className={styles.sessionDuration}>45 Min Call</span>
            </div>

            <div className={styles.previewBody}>
              <div className={styles.slotItem}>
                <span>Strategy Discovery</span>
                <span className={styles.slotTime}>Monday – Friday</span>
              </div>
              <div className={styles.slotItem}>
                <span>Timezone Support</span>
                <span className={styles.slotTime}>Auto-Detected (Global)</span>
              </div>
              <div className={styles.slotItem}>
                <span>Meeting Format</span>
                <span className={styles.slotTime}>Google Meet / Zoom</span>
              </div>
            </div>

            <a 
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                width: '100%',
                padding: '0.85rem',
                textAlign: 'center',
                background: 'rgba(255, 255, 255, 0.08)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '10px',
                color: '#ffffff',
                fontSize: '14px',
                fontWeight: 650,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                transition: 'background 0.2s',
              }}
            >
              <span>Select Date & Time</span>
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
