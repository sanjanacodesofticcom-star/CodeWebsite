'use client';

import Link from 'next/link';
import { Check, ArrowRight, ShieldCheck, Sparkles, MessageSquare, Zap } from 'lucide-react';
import styles from './WebsiteDesignPackageSection.module.css';

const CAL_LINK = "https://cal.com/codesoftic/collaboration-circle?user=codesoftic";

const PACKAGE_ITEMS = [
  {
    title: 'Custom store design',
    desc: 'Built around your brand — not a copy-paste template.',
  },
  {
    title: 'Product & inventory setup',
    desc: 'Products, categories, and inventory set up correctly from day one.',
  },
  {
    title: 'Full SEO',
    desc: 'Built so people can actually find you on Google.',
  },
  {
    title: 'Analytics, set up',
    desc: 'Google Analytics, Meta Pixel, Amplitude, or Mixpanel — so you always know what\'s actually selling.',
  },
  {
    title: 'Studio product photography',
    desc: 'AI-produced photos made to look real, not stock — the kind that make people trust a brand enough to buy.',
  },
  {
    title: 'Free consultation',
    desc: 'On your store\'s content and layout, before we start building.',
  },
  {
    title: '1 month of free support',
    desc: 'After you go live, at no extra cost.',
  },
];

export default function WebsiteDesignPackageSection() {
  return (
    <section className={styles.section} id="package-scope">
      <div className={styles.container}>
        {/* ================= TOP SECTION (IMAGE 1: PACKAGE CHECKLIST) ================= */}
        <div className={styles.header}>
          <p className={styles.eyebrow}>ONE FLAT PRICE. NOTHING LEFT OUT.</p>
          <h2 className={styles.title}>
            Everything it takes to launch and start selling.
          </h2>
          <p className={styles.subtitle}>
            No hidden costs, no surprise invoices later, no five more add-ons before you can actually go live. Here's exactly what's in it — and what it comes to.
          </p>
        </div>

        {/* Big White Included Package Card */}
        <div className={styles.packageCard}>
          <div className={styles.itemsList}>
            {PACKAGE_ITEMS.map((item, idx) => (
              <div key={idx} className={styles.itemRow}>
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <p className={styles.itemDesc}>{item.desc}</p>
                </div>
                <div className={styles.includedBadge}>
                  <Check size={14} className={styles.checkIcon} />
                  <span>Included</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Under Card Summary Note */}
        <div className={styles.bottomNoteWrapper}>
          <p className={styles.bottomNote}>
            We've built stores for fashion, skincare, supplements, kids' wear, and accessories — whatever you sell, we can build it.
          </p>
          <p className={styles.bottomNoteSub}>
            Elsewhere this means a designer, a developer, an SEO consultant, and a photographer — four separate people. Here it's one team, one price.
          </p>
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.consultationBtn}
          >
            <span>Get My Free Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>

        {/* ================= BOTTOM SECTION (IMAGE 2: SCOPE, BILLING & BUILD STACK) ================= */}
        <div className={styles.bottomScopeWrapper}>
          {/* Two-Column Grid: What we need / Billed separately */}
          <div className={styles.twoColGrid}>
            {/* Left Box: What we need from you */}
            <div className={styles.scopeBox}>
              <div className={styles.blackBadge}>
                <span>What we need from you</span>
              </div>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <span className={styles.yellowDot} />
                  <span>Admin/owner access to the tools being connected (CRM, ad platforms, email, etc.)</span>
                </li>
                <li className={styles.bulletItem}>
                  <span className={styles.yellowDot} />
                  <span>A named point of contact who can approve workflow logic decisions</span>
                </li>
              </ul>
            </div>

            {/* Right Box: Billed separately */}
            <div className={styles.scopeBox}>
              <div className={styles.yellowBadge}>
                <span>Billed separately</span>
              </div>
              <ul className={styles.bulletList}>
                <li className={styles.bulletItem}>
                  <span className={styles.yellowDot} />
                  <span>Ongoing monitoring or maintenance of the automation after handover</span>
                </li>
                <li className={styles.bulletItem}>
                  <span className={styles.yellowDot} />
                  <span>Third-party tool subscription costs (Zapier/Make/etc.), billed to you directly</span>
                </li>
              </ul>
            </div>
          </div>

          {/* How We Build It Callout Box */}
          <div className={styles.howWeBuildBox}>
            <p className={styles.howWeBuildText}>
              <strong>How we build it →</strong> A senior team scopes and reviews the work, with AI accelerating the parts that should be fast, so you get studio-quality output on a shorter timeline, for less. We build sites in <strong>Framer</strong> and <strong>Shopify</strong>, ship code with <strong>Claude Code</strong>, and use top AI models for visuals, video and copy, with real people accountable for the output.
            </p>
          </div>

          {/* Action Buttons */}
          <div className={styles.actionButtons}>
            <Link href="/contact" className={styles.addPackageBtn}>
              Add Whole Package
            </Link>
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.consultFirstBtn}
            >
              Consult first
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
