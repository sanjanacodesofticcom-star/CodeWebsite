'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="cse-section" id="cse-explore">
      <div className="cse-inner">
        <h2 className="cse-heading">Explore all Codesoftic solutions.</h2>
        <p className="cse-subheading">
          Everything you need to turn AI and automation into a real competitive edge — in one connected platform.
        </p>

        <div className="cse-cta-wrap">
          <Link href="/services" className="cse-btn">
            Explore all features
          </Link>
        </div>

        {/* Tabs */}
        <div className="cse-tabs" role="tablist" ref={tabsWrapRef}>
          <button
            type="button"
            className={`cse-tab ${activeTab === 0 ? 'is-active' : ''}`}
            onClick={(e) => handleTabClick(0, e)}
            role="tab"
            aria-selected={activeTab === 0}
          >
            AI & Agents
          </button>
          <button
            type="button"
            className={`cse-tab ${activeTab === 1 ? 'is-active' : ''}`}
            onClick={(e) => handleTabClick(1, e)}
            role="tab"
            aria-selected={activeTab === 1}
          >
            Automation & Workflows
          </button>
          <button
            type="button"
            className={`cse-tab ${activeTab === 2 ? 'is-active' : ''}`}
            onClick={(e) => handleTabClick(2, e)}
            role="tab"
            aria-selected={activeTab === 2}
          >
            Engagement & Support
          </button>
          <button
            type="button"
            className={`cse-tab ${activeTab === 3 ? 'is-active' : ''}`}
            onClick={(e) => handleTabClick(3, e)}
            role="tab"
            aria-selected={activeTab === 3}
          >
            Data & Analytics
          </button>
          <button
            type="button"
            className={`cse-tab ${activeTab === 4 ? 'is-active' : ''}`}
            onClick={(e) => handleTabClick(4, e)}
            role="tab"
            aria-selected={activeTab === 4}
          >
            Campaigns
          </button>
          <button
            type="button"
            className={`cse-tab ${activeTab === 5 ? 'is-active' : ''}`}
            onClick={(e) => handleTabClick(5, e)}
            role="tab"
            aria-selected={activeTab === 5}
          >
            Integrations & Docs
          </button>
        </div>

        {/* Panels */}
        <div className="cse-panels">
          {/* Panel 0: AI & Agents */}
          <div className={`cse-panel ${activeTab === 0 ? 'is-active' : ''}`}>
            <div className="cse-main-card">
              <div className="cse-text-half">
                <span className="cse-eyebrow">AI & Agents</span>
                <h3 className="cse-title">AI-powered conversations.</h3>
                <p className="cse-desc">
                  Give your business AI agents that understand intent, respond instantly, and hand off to a human the moment a conversation needs a personal touch.
                </p>
              </div>
              <div className="cse-media-half">
                <Image
                  className="cse-media-img"
                  src="/images/explore-ai-agents.png"
                  alt="AI-powered customer conversation"
                  width={600}
                  height={340}
                  priority={activeTab === 0}
                />
                <div className="cse-bubble cse-bubble--center">Auto-reply enabled</div>
                <div className="cse-badge">3K messages handled</div>
              </div>
            </div>
            <aside className="cse-side-card">
              <h4 className="cse-side-heading">Explore products.</h4>
              <ul className="cse-side-list">
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Chatbot Flow Builder <em>(NEW)</em></Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">AI Auto-Reply <em>(NEW)</em></Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Smart Intent Detection <em>(NEW)</em></Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-audits">Conversation Analyzer</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">AI Chat Assistant</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 1: Automation & Workflows */}
          <div className={`cse-panel ${activeTab === 1 ? 'is-active' : ''}`}>
            <div className="cse-main-card">
              <div className="cse-text-half">
                <span className="cse-eyebrow">Automation & Workflows</span>
                <h3 className="cse-title">Automate your business workflows.</h3>
                <p className="cse-desc">
                  Move leads and customers through the journey automatically, from first touch to repeat business, without your team lifting a finger to make it happen.
                </p>
              </div>
              <div className="cse-media-half">
                <Image
                  className="cse-media-img"
                  src="/images/explore-workflows.png"
                  alt="Automated business workflow"
                  width={600}
                  height={340}
                />
                <div className="cse-bubble cse-bubble--center">Broadcast scheduled</div>
                <div className="cse-badge">42 workflows live</div>
              </div>
            </div>
            <aside className="cse-side-card">
              <h4 className="cse-side-heading">Explore products.</h4>
              <ul className="cse-side-list">
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Subscriber Manager</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Drip Sequences</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/performance-marketing">Broadcast Automation</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Workflow Builder</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Team Inbox Routing</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 2: Engagement & Support */}
          <div className={`cse-panel ${activeTab === 2 ? 'is-active' : ''}`}>
            <div className="cse-main-card">
              <div className="cse-text-half">
                <span className="cse-eyebrow">Engagement & Support</span>
                <h3 className="cse-title">Support customers at scale.</h3>
                <p className="cse-desc">
                  Let your whole team chat from one shared inbox, with smart routing so every customer reaches the right person, fast, every single time they reach out.
                </p>
              </div>
              <div className="cse-media-half">
                <Image
                  className="cse-media-img"
                  src="/images/explore-support.png"
                  alt="Multi-human live chat support"
                  width={600}
                  height={340}
                />
                <div className="cse-bubble cse-bubble--center">Live chat active</div>
                <div className="cse-badge">98% response rate</div>
              </div>
            </div>
            <aside className="cse-side-card">
              <h4 className="cse-side-heading">Explore products.</h4>
              <ul className="cse-side-list">
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Multi-Human Live Chat</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Shared Team Inbox</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Quick Replies</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">Agent Assignment</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-audits">Support Analytics</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 3: Data & Analytics */}
          <div className={`cse-panel ${activeTab === 3 ? 'is-active' : ''}`}>
            <div className="cse-main-card">
              <div className="cse-text-half">
                <span className="cse-eyebrow">Data & Analytics</span>
                <h3 className="cse-title">Insights that drive growth.</h3>
                <p className="cse-desc">
                  See exactly what's working, subscriber growth, campaign performance and conversions, all tracked live in a single, easy to read dashboard view.
                </p>
              </div>
              <div className="cse-media-half">
                <Image
                  className="cse-media-img"
                  src="/images/explore-analytics.png"
                  alt="Campaign analytics dashboard"
                  width={600}
                  height={340}
                />
                <div className="cse-bubble cse-bubble--center">Top performing segment</div>
                <div className="cse-badge">1.2K conversions</div>
              </div>
            </div>
            <aside className="cse-side-card">
              <h4 className="cse-side-heading">Explore products.</h4>
              <ul className="cse-side-list">
                <li><span className="cse-dot"></span><Link href="/services/performance-marketing">Campaign Analytics</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/performance-marketing">Subscriber Insights</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/performance-marketing">Conversion Tracking</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/seo">Engagement Reports</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/website-design">Custom Dashboards</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 4: Campaigns */}
          <div className={`cse-panel ${activeTab === 4 ? 'is-active' : ''}`}>
            <div className="cse-main-card">
              <div className="cse-text-half">
                <span className="cse-eyebrow">Campaigns</span>
                <h3 className="cse-title">Broadcast campaigns that convert.</h3>
                <p className="cse-desc">
                  Send targeted, personalised broadcasts to the right segment at exactly the right time, and watch replies, clicks and conversions roll in fast.
                </p>
              </div>
              <div className="cse-media-half">
                <Image
                  className="cse-media-img"
                  src="/images/explore-campaigns.png"
                  alt="Automated marketing campaign"
                  width={600}
                  height={340}
                />
                <div className="cse-bubble cse-bubble--center">Campaign sent</div>
                <div className="cse-badge">64% open rate</div>
              </div>
            </div>
            <aside className="cse-side-card">
              <h4 className="cse-side-heading">Explore products.</h4>
              <ul className="cse-side-list">
                <li><span className="cse-dot"></span><Link href="/services/performance-marketing">Broadcast Campaigns</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/performance-marketing">Segmented Lists</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/performance-marketing">A/B Testing</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/performance-marketing">Campaign Scheduler</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/performance-marketing">Reply Tracking</Link></li>
              </ul>
            </aside>
          </div>

          {/* Panel 5: Integrations & Docs */}
          <div className={`cse-panel ${activeTab === 5 ? 'is-active' : ''}`}>
            <div className="cse-main-card">
              <div className="cse-text-half">
                <span className="cse-eyebrow">Integrations & Docs</span>
                <h3 className="cse-title">Connect and manage with ease.</h3>
                <p className="cse-desc">
                  Sync Codesoftic with the tools you already use, and keep your data organised, exportable and easy to govern across your entire team.
                </p>
              </div>
              <div className="cse-media-half">
                <Image
                  className="cse-media-img"
                  src="/images/explore-integrations.png"
                  alt="Codesoftic integrations and data export"
                  width={600}
                  height={340}
                />
                <div className="cse-bubble cse-bubble--center">Synced with CRM</div>
                <div className="cse-badge">12 integrations</div>
              </div>
            </div>
            <aside className="cse-side-card">
              <h4 className="cse-side-heading">Explore products.</h4>
              <ul className="cse-side-list">
                <li><span className="cse-dot"></span><Link href="/services/website-design">API & Webhooks</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-automation">CRM Integrations</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-audits">Data Export</Link></li>
                <li><span className="cse-dot"></span><Link href="/about">Team Permissions</Link></li>
                <li><span className="cse-dot"></span><Link href="/services/ai-audits">Audit Logs</Link></li>
              </ul>
            </aside>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* ============ CSE — scoped to this section only ============ */
        .cse-section {
          background: #f5f5f5 !important;
          padding: 56px 24px !important;
          width: 100% !important;
          border-top: 1px solid #e5e7eb;
          border-bottom: 1px solid #e5e7eb;
        }

        .cse-inner {
          max-width: 1280px !important;
          margin: 0 auto !important;
        }

        /* Heading / subheading */
        .cse-heading {
          font-size: clamp(24px, 2.4vw, 36px) !important;
          font-weight: 700 !important;
          line-height: 1.3 !important;
          letter-spacing: -0.01em !important;
          color: #2c2c2c !important;
          text-align: center !important;
          margin: 0 0 14px 0 !important;
        }

        .cse-subheading {
          font-size: 17px !important;
          font-weight: 400 !important;
          line-height: 1.55 !important;
          color: #2c2c2c !important;
          text-align: center !important;
          max-width: 640px !important;
          margin: 0 auto 24px auto !important;
        }

        .cse-cta-wrap {
          display: flex !important;
          justify-content: center !important;
          margin-bottom: 32px !important;
        }

        /* Pill button */
        .cse-btn {
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          padding: 6px 22px !important;
          border-radius: 999px !important;
          background: transparent !important;
          color: #2c2c2c !important;
          font-size: 15px !important;
          font-weight: 600 !important;
          border: 2.5px solid #2c2c2c !important;
          text-decoration: none !important;
          transition: background .25s ease, color .25s ease, border-color .25s ease !important;
          white-space: nowrap !important;
          cursor: pointer !important;
        }
        .cse-btn:hover {
          background: #000000 !important;
          border-color: #000000 !important;
          color: #ffffff !important;
        }

        /* Tabs */
        .cse-tabs {
          display: flex !important;
          flex-wrap: wrap !important;
          justify-content: center !important;
          gap: 6px !important;
          background: #ffffff !important;
          border-radius: 999px !important;
          padding: 6px !important;
          max-width: 100% !important;
          width: fit-content !important;
          margin: 0 auto 32px auto !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.04);
        }

        .cse-tab {
          appearance: none !important;
          background: transparent !important;
          border: 2px solid transparent !important;
          color: #2c2c2c !important;
          font-size: 14px !important;
          font-weight: 600 !important;
          padding: 8px 16px !important;
          border-radius: 999px !important;
          cursor: pointer !important;
          white-space: nowrap !important;
          scroll-snap-align: center !important;
          transition: background .2s ease, color .2s ease, border-color .2s ease !important;
        }

        .cse-tab.is-active {
          background: #2c2c2c !important;
          color: #ffffff !important;
        }

        .cse-tab:not(.is-active):hover {
          background: #f0f0f0 !important;
        }

        /* Panels */
        .cse-panel { display: none !important; }
        .cse-panel.is-active {
          display: grid !important;
          grid-template-columns: 1fr 320px !important;
          gap: 24px !important;
          align-items: stretch !important;
        }

        .cse-main-card {
          background: #ffffff !important;
          border-radius: 14px !important;
          overflow: hidden !important;
          display: flex !important;
          height: 340px !important;
          border: 1px solid #e6e6e6 !important;
        }

        .cse-text-half {
          flex: 0 0 40% !important;
          padding: 30px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: flex-start !important;
        }

        .cse-eyebrow {
          font-size: 11px !important;
          font-weight: 600 !important;
          letter-spacing: 0.07em !important;
          text-transform: uppercase !important;
          color: #2c2c2c !important;
          margin-bottom: 12px !important;
          display: block !important;
        }

        .cse-title {
          font-size: 24px !important;
          font-weight: 700 !important;
          line-height: 1.3 !important;
          color: #2c2c2c !important;
          margin: 0 0 12px 0 !important;
        }

        .cse-desc {
          font-size: 15px !important;
          font-weight: 400 !important;
          line-height: 1.55 !important;
          color: #2c2c2c !important;
          margin: 0 !important;
        }

        .cse-media-half {
          flex: 1 1 60% !important;
          position: relative !important;
          background: #eeeeee !important;
          height: 340px !important;
          overflow: hidden !important;
        }

        :global(.cse-media-img) {
          width: 100% !important;
          height: 100% !important;
          object-fit: cover !important;
          display: block !important;
        }

        .cse-bubble {
          position: absolute !important;
          left: 50% !important;
          top: 50% !important;
          transform: translate(-50%, -50%) !important;
          background: rgba(44,44,44,0.7) !important;
          backdrop-filter: blur(6px) !important;
          -webkit-backdrop-filter: blur(6px) !important;
          color: #ffffff !important;
          font-size: 16px !important;
          font-weight: 700 !important;
          padding: 14px 26px !important;
          border-radius: 999px !important;
          white-space: nowrap !important;
          pointer-events: none !important;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2) !important;
        }

        .cse-badge {
          position: absolute !important;
          right: 20px !important;
          bottom: 20px !important;
          background: #ffffff !important;
          color: #2c2c2c !important;
          font-size: 13px !important;
          font-weight: 700 !important;
          padding: 8px 16px !important;
          border-radius: 999px !important;
          box-shadow: 0 2px 8px rgba(0,0,0,0.12) !important;
        }

        /* Side card */
        .cse-side-card {
          background: #ffffff !important;
          border-radius: 14px !important;
          padding: 30px !important;
          height: 340px !important;
          display: flex !important;
          flex-direction: column !important;
          justify-content: center !important;
          border: 1px solid #e6e6e6 !important;
        }

        .cse-side-heading {
          font-size: 20px !important;
          font-weight: 700 !important;
          color: #2c2c2c !important;
          margin: 0 0 16px 0 !important;
        }

        .cse-side-list {
          list-style: none !important;
          margin: 0 !important;
          padding: 0 !important;
        }

        .cse-side-list li {
          display: flex !important;
          align-items: center !important;
          gap: 10px !important;
          padding: 10px 0 !important;
          border-bottom: 1px solid #eeeeee !important;
        }
        .cse-side-list li:last-child { border-bottom: none !important; }

        .cse-dot {
          flex: 0 0 8px !important;
          width: 8px !important;
          height: 8px !important;
          border-radius: 50% !important;
          background: #2c2c2c !important;
        }

        .cse-side-list a {
          font-size: 15px !important;
          font-weight: 600 !important;
          color: #2c2c2c !important;
          text-decoration: none !important;
        }
        .cse-side-list a:hover { text-decoration: underline !important; }
        .cse-side-list em { font-style: normal !important; font-weight: 400 !important; opacity: 0.6 !important; }

        /* ===================== MOBILE ===================== */
        @media (max-width: 780px) {
          .cse-section { padding: 44px 16px !important; }

          .cse-tabs {
            width: 100% !important;
            justify-content: flex-start !important;
            overflow-x: auto !important;
            -webkit-overflow-scrolling: touch !important;
            scroll-behavior: smooth !important;
            scroll-snap-type: x proximity !important;
            border-radius: 999px !important;
            flex-wrap: nowrap !important;
          }
          .cse-tabs::-webkit-scrollbar { display: none !important; }
          .cse-tab { flex: 0 0 auto !important; }

          .cse-tab.is-active {
            border-color: #2c2c2c !important;
          }

          .cse-panel.is-active {
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
          }

          .cse-media-half { display: none !important; }

          .cse-main-card {
            flex-direction: column !important;
            height: auto !important;
            border: 1px solid #e6e6e6 !important;
          }

          .cse-text-half {
            flex: 1 1 auto !important;
            padding: 24px !important;
          }

          .cse-side-card {
            padding: 24px !important;
            height: auto !important;
            border: 1px solid #e6e6e6 !important;
          }
        }
      `}</style>
    </section>
  );
}
