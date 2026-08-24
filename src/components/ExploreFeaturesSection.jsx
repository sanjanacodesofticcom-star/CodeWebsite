'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './ExploreFeaturesSection.module.css';

export default function ExploreFeaturesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const tabsWrapRef = useRef(null);

  const handleTabClick = (index, e) => {
    setActiveTab(index);
    if (tabsWrapRef.current) {
      const tabEl = e.currentTarget;
      const target = tabEl.offsetLeft - (tabsWrapRef.current.clientWidth / 2) + (tabEl.clientWidth / 2);
      const maxScroll = tabsWrapRef.current.scrollWidth - tabsWrapRef.current.clientWidth;
      tabsWrapRef.current.scrollTo({
        left: Math.max(0, Math.min(target, maxScroll)),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className={styles.section} id="cse-explore">
      <div className={styles.inner}>
        <h2 className={styles.heading}>Explore all Codesoftic solutions.</h2>
        <p className={styles.subheading}>
          Everything you need to turn AI and automation into a real competitive edge — in one connected platform.
        </p>

        <div className={styles.ctaWrap}>
          <Link href="/services" className={styles.btn}>
            Explore all features
          </Link>
        </div>

        {/* Tabs */}
        <div className={styles.tabs} role="tablist" ref={tabsWrapRef}>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 0 ? styles.isActive : ''}`}
            onClick={(e) => handleTabClick(0, e)}
            role="tab"
            aria-selected={activeTab === 0}
          >
            AI & Agents
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 1 ? styles.isActive : ''}`}
            onClick={(e) => handleTabClick(1, e)}
            role="tab"
            aria-selected={activeTab === 1}
          >
            Automation & Workflows
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 2 ? styles.isActive : ''}`}
            onClick={(e) => handleTabClick(2, e)}
            role="tab"
            aria-selected={activeTab === 2}
          >
            Engagement & Support
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 3 ? styles.isActive : ''}`}
            onClick={(e) => handleTabClick(3, e)}
            role="tab"
            aria-selected={activeTab === 3}
          >
            Data & Analytics
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 4 ? styles.isActive : ''}`}
            onClick={(e) => handleTabClick(4, e)}
            role="tab"
            aria-selected={activeTab === 4}
          >
            Campaigns
          </button>
          <button
            type="button"
            className={`${styles.tab} ${activeTab === 5 ? styles.isActive : ''}`}
            onClick={(e) => handleTabClick(5, e)}
            role="tab"
            aria-selected={activeTab === 5}
          >
            Integrations & Docs
          </button>
        </div>

        {/* Panels */}
        <div className={styles.panels}>
          {/* Panel 0: AI & Agents */}
          <div className={`${styles.panel} ${activeTab === 0 ? styles.isActive : ''}`}>
            <div className={styles.mainCard}>
              <div className={styles.textHalf}>
                <span className={styles.eyebrow}>AI & Agents</span>
                <h3 className={styles.cardTitle}>Build custom autonomous agents.</h3>
                <p className={styles.cardDesc}>
                  Deploy autonomous agents across support, sales, and operations with custom tool-calling, multi-step reasoning, and human-in-the-loop controls.
                </p>
                <Link href="/services/ai-automation" className={styles.learnLink}>
                  <span>Learn more</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className={styles.mediaHalf}>
                <Image
                  src="/images/explore-ai-agents.png"
                  alt="AI and Agents Interface"
                  width={600}
                  height={340}
                  className={styles.mediaImg}
                />
              </div>
            </div>
            <aside className={styles.sideCard}>
              <h4 className={styles.sideHeading}>Explore products.</h4>
              <ul className={styles.sideList}>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Agent Studio</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Voice AI</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Multi-Agent Swarms</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-audits">Guardrails & Safety</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-audits">Fine-Tuned LLMs</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 1: Automation & Workflows */}
          <div className={`${styles.panel} ${activeTab === 1 ? styles.isActive : ''}`}>
            <div className={styles.mainCard}>
              <div className={styles.textHalf}>
                <span className={styles.eyebrow}>Automation & Workflows</span>
                <h3 className={styles.cardTitle}>Automate complex cross-app pipelines.</h3>
                <p className={styles.cardDesc}>
                  Connect your CRM, ERP, and database to intelligent event triggers that run 24/7 with zero human intervention required.
                </p>
                <Link href="/services/ai-automation" className={styles.learnLink}>
                  <span>Learn more</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className={styles.mediaHalf}>
                <Image
                  src="/images/explore-workflows.png"
                  alt="Automation & Workflows Canvas"
                  width={600}
                  height={340}
                  className={styles.mediaImg}
                />
              </div>
            </div>
            <aside className={styles.sideCard}>
              <h4 className={styles.sideHeading}>Explore products.</h4>
              <ul className={styles.sideList}>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Workflow Builder</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Event Triggers</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Auto-Retry Engine</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Webhooks & Queues</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-audits">Audit Logging</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 2: Engagement & Support */}
          <div className={`${styles.panel} ${activeTab === 2 ? styles.isActive : ''}`}>
            <div className={styles.mainCard}>
              <div className={styles.textHalf}>
                <span className={styles.eyebrow}>Engagement & Support</span>
                <h3 className={styles.cardTitle}>Deliver instant AI-powered customer care.</h3>
                <p className={styles.cardDesc}>
                  Handle inquiries instantly with empathetic, multi-lingual AI support that resolves tickets, processes returns, and escalates complex requests.
                </p>
                <Link href="/services/ai-automation" className={styles.learnLink}>
                  <span>Learn more</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className={styles.mediaHalf}>
                <Image
                  src="/images/explore-support.png"
                  alt="Engagement & Support Interface"
                  width={600}
                  height={340}
                  className={styles.mediaImg}
                />
              </div>
            </div>
            <aside className={styles.sideCard}>
              <h4 className={styles.sideHeading}>Explore products.</h4>
              <ul className={styles.sideList}>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Omnichannel Inbox</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Live Agent Handoff</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">Knowledge Base Sync</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-audits">CSAT Analytics</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">WhatsApp API</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 3: Data & Analytics */}
          <div className={`${styles.panel} ${activeTab === 3 ? styles.isActive : ''}`}>
            <div className={styles.mainCard}>
              <div className={styles.textHalf}>
                <span className={styles.eyebrow}>Data & Analytics</span>
                <h3 className={styles.cardTitle}>Transform raw data into real-time insights.</h3>
                <p className={styles.cardDesc}>
                  Visualize performance metrics, forecast revenue, and query your entire business database in natural language without writing SQL.
                </p>
                <Link href="/services/ai-audits" className={styles.learnLink}>
                  <span>Learn more</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className={styles.mediaHalf}>
                <Image
                  src="/images/explore-analytics.png"
                  alt="Data and Analytics Dashboard"
                  width={600}
                  height={340}
                  className={styles.mediaImg}
                />
              </div>
            </div>
            <aside className={styles.sideCard}>
              <h4 className={styles.sideHeading}>Explore products.</h4>
              <ul className={styles.sideList}>
                <li><span className={styles.dot}></span><Link href="/services/ai-audits">Natural Language BI</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/performance-marketing">Funnel Attribution</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-audits">Predictive Churn</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/performance-marketing">Real-Time Dashboards</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-audits">Data Warehouse Connect</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 4: Campaigns */}
          <div className={`${styles.panel} ${activeTab === 4 ? styles.isActive : ''}`}>
            <div className={styles.mainCard}>
              <div className={styles.textHalf}>
                <span className={styles.eyebrow}>Campaigns</span>
                <h3 className={styles.cardTitle}>Run hyper-targeted multichannel campaigns.</h3>
                <p className={styles.cardDesc}>
                  Automate audience segmentation, dynamic creative generation, and autonomous ROAS optimization across Meta, Google, and email.
                </p>
                <Link href="/services/performance-marketing" className={styles.learnLink}>
                  <span>Learn more</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className={styles.mediaHalf}>
                <Image
                  src="/images/explore-campaigns.png"
                  alt="Campaigns Interface"
                  width={600}
                  height={340}
                  className={styles.mediaImg}
                />
              </div>
            </div>
            <aside className={styles.sideCard}>
              <h4 className={styles.sideHeading}>Explore products.</h4>
              <ul className={styles.sideList}>
                <li><span className={styles.dot}></span><Link href="/services/performance-marketing">Ad Creative Studio</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/performance-marketing">Audience Builder</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/performance-marketing">A/B Testing Engine</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/performance-marketing">Meta Ads Manager</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/performance-marketing">Dynamic Retargeting</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 5: Integrations & Docs */}
          <div className={`${styles.panel} ${activeTab === 5 ? styles.isActive : ''}`}>
            <div className={styles.mainCard}>
              <div className={styles.textHalf}>
                <span className={styles.eyebrow}>Integrations & Docs</span>
                <h3 className={styles.cardTitle}>Connect with 200+ enterprise platforms.</h3>
                <p className={styles.cardDesc}>
                  Integrate with your existing stack via turnkey connectors for Shopify, Salesforce, HubSpot, Stripe, PostgreSQL, and custom REST APIs.
                </p>
                <Link href="/services/website-design" className={styles.learnLink}>
                  <span>Learn more</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className={styles.mediaHalf}>
                <Image
                  src="/images/explore-integrations.png"
                  alt="Integrations Ecosystem Diagram"
                  width={600}
                  height={340}
                  className={styles.mediaImg}
                />
              </div>
            </div>
            <aside className={styles.sideCard}>
              <h4 className={styles.sideHeading}>Explore products.</h4>
              <ul className={styles.sideList}>
                <li><span className={styles.dot}></span><Link href="/services/website-design">API & Webhooks</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-automation">CRM Integrations</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-audits">Data Export</Link></li>
                <li><span className={styles.dot}></span><Link href="/about">Team Permissions</Link></li>
                <li><span className={styles.dot}></span><Link href="/services/ai-audits">Audit Logs</Link></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
