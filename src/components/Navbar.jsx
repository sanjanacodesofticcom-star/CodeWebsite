'use client';

import { useState, useEffect } from 'react';
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

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} id="main-header">
      <div className={styles.navContainer}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoWrapper} aria-label="Codesoftic Home">
          <Image
            src="/images/Logo.svg"
            alt="Codesoftic Logo"
            width={170}
            height={22}
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

          {/* Services Mega Dropdown */}
          <div 
            className={`${styles.navItem} ${styles.dropdownTrigger}`}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <Link 
              href="/services" 
              className={`${styles.navLink} ${pathname.startsWith('/services') ? styles.activeNavLink : ''}`}
              aria-expanded={servicesDropdownOpen}
            >
              Services
              <ChevronDown className={styles.chevronIcon} />
            </Link>

            <div className={styles.megaMenu}>
              <div className={styles.megaMenuHeader}>
                <span className={styles.megaMenuTitle}>Enterprise Capabilities & Services</span>
                <Link href="/services" className={styles.viewAllServices}>
                  Explore All Capabilities <ArrowRight size={14} />
                </Link>
              </div>

              <div className={styles.megaGrid}>
                {SERVICES_LIST.map((srv) => {
                  const Icon = srv.icon;
                  return (
                    <Link 
                      key={srv.href} 
                      href={srv.href}
                      className={styles.megaCard}
                    >
                      <div className={styles.megaIconBox}>
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className={styles.megaCardTitle}>
                          {srv.title}
                        </div>
                        <p className={styles.megaCardDesc}>{srv.desc}</p>
                      </div>
                    </Link>
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
              href="/resources" 
              className={`${styles.navLink} ${pathname === '/resources' ? styles.activeNavLink : ''}`}
            >
              Resources
            </Link>
          </div>

          <div className={styles.navItem}>
            <Link 
              href="/contact" 
              className={`${styles.navLink} ${pathname === '/contact' ? styles.activeNavLink : ''}`}
            >
              Contact Us
            </Link>
          </div>
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className={styles.navActions}>
          <a 
            href={CAL_LINK} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`btn btn-primary ${styles.contactBtn}`}
          >
            <Calendar size={15} />
            <span>Book Call</span>
          </a>

          <button 
            className={styles.mobileToggle}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
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
            style={{ cursor: 'pointer' }}
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
                <li key={srv.href}>
                  <Link href={srv.href} className={styles.mobileSubLink}>
                    {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link href="/incubation-centre" className={styles.mobileNavLink}>
          Incubation Centre
        </Link>
        <Link href="/resources" className={styles.mobileNavLink}>
          Resources
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
