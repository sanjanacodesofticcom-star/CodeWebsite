'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Layout, 
  Cpu, 
  Bot, 
  Search, 
  TrendingUp, 
  ArrowRight, 
  Calendar,
  Sparkles 
} from 'lucide-react';
import styles from './Navbar.module.css';

const CAL_LINK = "https://cal.com/codesoftic/collaboration-circle?user=codesoftic";

const SERVICES_LIST = [
  {
    title: 'Website Design',
    desc: 'High-conversion, bespoke UI/UX and web apps built on Next.js & modern stacks.',
    href: '/services/website-design',
    icon: Layout,
    badge: 'Popular',
    subCategories: [
      { name: 'Shopify', href: '/services/website-design/shopify' },
      { name: 'WordPress', href: '/services/website-design/wordpress' },
      { name: 'Next.js', href: '/services/website-design/nextjs' },
      { name: 'Customized', href: '/services/website-design/custom' },
    ],
  },
  {
    title: 'AI Audits',
    desc: 'Deep architecture assessments, data readiness, security & LLM roadmap strategy.',
    href: '/services/ai-audits',
    icon: Cpu,
    badge: 'Enterprise',
  },
  {
    title: 'AI Automation',
    desc: 'Autonomous agentic workflows, custom LLM pipelines, and enterprise RPA solutions.',
    href: '/services/ai-automation',
    icon: Bot,
    badge: 'Trending',
  },
  {
    title: 'SEO & Search Dominance',
    desc: 'Technical SEO, AI-powered content engines, and organic authority acceleration.',
    href: '/services/seo',
    icon: Search,
    badge: 'Growth',
  },
  {
    title: 'Performance Marketing',
    desc: 'Data-driven paid media, hyper-targeted campaigns, and algorithmic ROAS scaling.',
    href: '/services/performance-marketing',
    icon: TrendingUp,
    badge: 'Scale',
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Click outside to close Services dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (pathname && pathname.startsWith('/studio')) {
    return null;
  }

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} id="main-header">
      <div className={styles.navContainer}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoWrapper} aria-label="Codesoftic Home">
          <Image
            src="/images/Logo.svg"
            alt="Codesoftic Logo"
            width={140}
            height={18}
            className={styles.logoImg}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.navMenu} aria-label="Main Navigation">
          <div className={styles.navItem}>
            <Link 
              href="/" 
              className={`${styles.navLink} ${pathname === '/' ? styles.activeNavLink : ''}`}
            >
              Home
            </Link>
          </div>

          <div className={styles.navItem}>
            <Link 
              href="/about" 
              className={`${styles.navLink} ${pathname === '/about' ? styles.activeNavLink : ''}`}
            >
              About Us
            </Link>
          </div>

          {/* Services Click-to-Hold Mega Dropdown */}
          <div 
            ref={servicesDropdownRef}
            className={`${styles.navItem} ${styles.dropdownTrigger} ${servicesDropdownOpen ? styles.dropdownOpen : ''}`}
          >
            <button 
              type="button"
              className={`${styles.navLink} ${styles.dropdownButton} ${pathname.startsWith('/services') ? styles.activeNavLink : ''}`}
              onClick={() => setServicesDropdownOpen(prev => !prev)}
              aria-expanded={servicesDropdownOpen}
              aria-haspopup="true"
            >
              <span>Services</span>
              <ChevronDown className={styles.chevronIcon} />
            </button>

            <div className={styles.megaMenu}>
              <div className={styles.megaMenuHeader}>
                <span className={styles.megaMenuTitle}>Enterprise Capabilities & Services</span>
                <Link 
                  href="/services" 
                  className={styles.viewAllServices}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Explore All Capabilities <ArrowRight size={14} />
                </Link>
              </div>

              <div className={styles.megaGrid}>
                {SERVICES_LIST.map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <div key={srv.href} className={styles.megaCard}>
                      <div className={styles.megaIconBox}>
                        <Icon size={18} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <Link 
                          href={srv.href}
                          className={styles.megaCardTitle}
                          style={{ display: 'inline-block', textDecoration: 'none' }}
                          onClick={() => setServicesDropdownOpen(false)}
                        >
                          {srv.title}
                        </Link>
                        <p className={styles.megaCardDesc}>{srv.desc}</p>

                        {/* Sub-categories (Shopify, WordPress, Next.js, Custom) */}
                        {srv.subCategories && (
                          <div className={styles.subCatRow}>
                            {srv.subCategories.map((sub) => (
                              <Link
                                key={sub.href}
                                href={sub.href}
                                className={styles.subCatPill}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setServicesDropdownOpen(false);
                                }}
                              >
                                <span>{sub.name}</span>
                                <ArrowRight size={10} />
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.navItem}>
            <Link 
              href="/incubation-centre" 
              className={`${styles.navLink} ${pathname === '/incubation-centre' ? styles.activeNavLink : ''}`}
            >
              Incubation Centre
            </Link>
          </div>

          <div className={styles.navItem}>
            <Link 
              href="/case-studies" 
              className={`${styles.navLink} ${pathname.startsWith('/case-studies') ? styles.activeNavLink : ''}`}
            >
              Case Studies
            </Link>
          </div>

          <div className={styles.navItem}>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${pathname === '/contact' ? styles.activeNavLink : ''}`}
            >
              Contact
            </Link>
          </div>
        </nav>

        {/* CTA Buttons */}
        <div className={styles.navActions}>
          <Link href="/contact" className={`btn btn-secondary ${styles.contactBtn}`}>
            <span>Brief Project</span>
          </Link>

          <a 
            href={CAL_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ fontSize: '0.9rem', padding: '0.6rem 1.25rem' }}
          >
            <Calendar size={15} />
            <span>Book Consultation</span>
          </a>

          {/* Mobile Hamburger Toggle */}
          <button 
            type="button" 
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`${styles.mobileDrawer} ${mobileMenuOpen ? styles.mobileDrawerOpen : ''}`}>
        <Link href="/" className={styles.mobileNavLink}>
          Home
        </Link>
        <Link href="/about" className={styles.mobileNavLink}>
          About Us
        </Link>

        <div>
          <div 
            className={styles.mobileNavLink}
            onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
            style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <span>Services</span>
            <ChevronDown 
              size={18} 
              style={{ transform: servicesDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} 
            />
          </div>

          {servicesDropdownOpen && (
            <ul className={styles.mobileSubList}>
              <li>
                <Link href="/services" className={styles.mobileSubLink} style={{ color: 'var(--brand-blue)', fontWeight: 700 }}>
                  → Overview Hub
                </Link>
              </li>
              {SERVICES_LIST.map((srv) => (
                <li key={srv.href} style={{ marginBottom: '0.75rem' }}>
                  <Link href={srv.href} className={styles.mobileSubLink} style={{ fontWeight: 650 }}>
                    {srv.title}
                  </Link>

                  {/* Mobile Sub-categories */}
                  {srv.subCategories && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', paddingLeft: '1rem', marginTop: '0.35rem' }}>
                      {srv.subCategories.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          style={{
                            fontSize: '0.75rem',
                            fontWeight: 650,
                            padding: '0.2rem 0.5rem',
                            borderRadius: '999px',
                            background: 'rgba(0, 102, 255, 0.08)',
                            color: '#0066ff',
                            textDecoration: 'none',
                          }}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link href="/incubation-centre" className={styles.mobileNavLink}>
          Incubation Centre
        </Link>
        <Link href="/case-studies" className={styles.mobileNavLink}>
          Case Studies
        </Link>
        <Link href="/contact" className={styles.mobileNavLink}>
          Contact Us
        </Link>

        <div style={{ marginTop: '1.5rem' }}>
          <a 
            href={CAL_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary" 
            style={{ width: '100%' }}
          >
            <Calendar size={16} />
            <span>Schedule on Cal.com</span>
          </a>
        </div>
      </div>
    </header>
  );
}
