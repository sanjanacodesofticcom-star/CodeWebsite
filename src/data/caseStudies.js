export const CASE_STUDIES = [
  {
    slug: 'healthcare-claims-voice-agents',
    category: 'Healthcare & AI Voice Automation',
    title: 'AI Voice Agents for Healthcare Claims Follow-Up',
    description:
      'An agentic AI voice platform for a US healthcare RCM company, automating outbound claim status calls to insurance payers, HIPAA-compliant, and built to scale with call volume.',
    image: '/images/case-studies/cs-healthcare-voice.png',
    metrics: [
      { value: '10x', label: 'Calls per day' },
      { value: '40-60%', label: 'Lower labour cost' },
    ],
    client: 'ApexHealth RCM Solutions (US)',
    duration: '4 Weeks to Production',
    challenge:
      'Healthcare revenue cycle management teams spend hundreds of hours navigating complex payer IVR systems, waiting on hold, and verifying basic claim status codes. Escalating staffing costs and high turnover created a backlog exceeding 15,000 unverified claims per month.',
    solution:
      'Codesoftic engineered an autonomous, HIPAA-compliant AI voice agent infrastructure. Utilizing real-time speech-to-speech models, automated DTMF IVR navigation, and secure EHR/EMR bidirectional connectors, the platform conducts human-like verification conversations and writes structured claim updates directly into client billing databases.',
    results: [
      'Scaled outbound claim inquiries from 200 to 2,000+ daily calls without expanding headcount.',
      'Reduced cost per claim inquiry by 52%, driving annual operating savings exceeding $420,000.',
      'Decreased average accounts receivable (A/R) lifecycle from 45 days down to 14 days.',
      'Achieved 99.4% accuracy in structured denial code categorization and follow-up routing.',
    ],
    architecture: [
      'HIPAA-compliant WebRTC & SIP voice streaming pipeline with sub-400ms latency',
      'Proprietary IVR navigation agent with real-time audio DTMF detection',
      'Fine-tuned LLM medical terminology extractors with zero data retention',
      'Automated bi-directional HL7 & FHIR EHR integration endpoints',
    ],
  },
  {
    slug: 'ai-workflow-intelligence-governance',
    category: 'Enterprise AI & Security Governance',
    title: 'AI Workflow Intelligence and Governance Platform',
    description:
      'A centralized platform that tracks agent decisions, monitors performance, and governs outputs in real time, giving enterprises full visibility into multi-agent systems running in production.',
    image: '/images/case-studies/cs-workflow-intelligence.png',
    metrics: [
      { value: '70%', label: 'Faster root cause' },
      { value: '3.2x', label: 'More visibility' },
    ],
    client: 'Global FinTech Infrastructure Corp',
    duration: '6 Weeks to Deployment',
    challenge:
      'As the enterprise deployed dozens of autonomous AI agents across risk scoring, loan verification, and fraud detection, engineering teams lacked real-time visibility into non-deterministic decision pathways, hallucination rates, and compliance guardrail adherence.',
    solution:
      'Codesoftic designed a high-throughput AI governance and telemetry control plane. The platform captures token-level traces, validates real-time output schemas against regulatory compliance policies, and provides instant root-cause analysis dashboards for production agent workflows.',
    results: [
      'Accelerated incident debugging and root-cause resolution time by 70%.',
      'Provided 3.2x deeper visibility across 140+ concurrent autonomous production workflows.',
      'Enforced 100% automated regulatory compliance checks across all model inferences.',
      'Reduced token consumption overhead by 34% through automated query optimization caching.',
    ],
    architecture: [
      'Distributed telemetry collector processing 50M+ daily agent events with sub-5ms overhead',
      'Real-time automated guardrails engine intercepting PII leaks and compliance deviations',
      'Interactive visual decision graph visualizing multi-agent task handoffs in real time',
      'Role-based access control (RBAC) audit logs with cryptographic tamper-proofing',
    ],
  },
  {
    slug: 'enterprise-ai-workforce-operating-system',
    category: 'Autonomous Workforce Orchestration',
    title: 'Enterprise AI Workforce Operating System',
    description:
      'An operating system for AI agents that runs, coordinates, and governs them the way a business runs its people — handling deployment, task handoffs, and escalating to a person when it matters.',
    image: '/images/case-studies/cs-ai-workforce.png',
    metrics: [
      { value: '60%', label: 'Less manual oversight' },
      { value: '70%', label: 'Faster issue resolution' },
    ],
    client: 'OmniGlobal Logistics & Enterprise Services',
    duration: '5 Weeks to Full Rollout',
    challenge:
      'Siloed enterprise departments (customer support, vendor dispatch, invoicing) were overwhelmed by manual data entry, ticket triage, and repetitive cross-system handoffs that slowed down customer fulfillment and created operational bottlenecks.',
    solution:
      'Codesoftic architected an Enterprise AI Workforce Operating System. The platform features an agent registry, priority task queues, dynamic skill routing, and intelligent human-in-the-loop escalation switches, empowering autonomous agent pods to manage operations seamlessly alongside human teams.',
    results: [
      'Eliminated 60% of manual triage overhead across customer support and dispatch teams.',
      'Shortened end-to-end customer issue resolution cycle times by 70%.',
      'Processed over 180,000 multi-step enterprise workflows per month autonomously.',
      'Achieved a 94% customer satisfaction (CSAT) rating on AI-resolved support interactions.',
    ],
    architecture: [
      'Multi-agent coordinator managing distributed task queues with priority scheduling',
      'Seamless human-in-the-loop web interface for 1-click approvals and interventions',
      'Unified enterprise tool connectors across Zendesk, Salesforce, SAP, and Slack',
      'Comprehensive performance analytics dashboard tracking agent throughput and accuracy',
    ],
  },
  {
    slug: 'autonomous-performance-marketing-engine',
    category: 'Performance Marketing & Headless Commerce',
    title: 'Autonomous Revenue & Performance Growth Engine',
    description:
      'An AI-driven performance marketing and server-side tracking architecture engineered for a high-growth global brand, optimizing multi-channel ad spend and scaling revenue.',
    image: '/images/case-studies/cs-revenue-engine.png',
    metrics: [
      { value: '+310%', label: 'Conversion rate lift' },
      { value: '-50%', label: 'Acquisition CAC' },
    ],
    client: 'DataDrive Commerce & Global Retail',
    duration: '3 Weeks Deployment',
    challenge:
      'Declining ad attribution accuracy due to browser cookie restrictions and slow legacy storefront page loads were driving customer acquisition costs higher while capping organic and paid conversion rates.',
    solution:
      'Codesoftic deployed a headless Next.js architecture with sub-second page loads, server-side Meta Conversions API (CAPI) tracking, Google Enhanced Conversions, and algorithmic multi-channel ad budget re-allocation models.',
    results: [
      'Surged online conversion rates by +310% within 60 days of headless rollout.',
      'Decreased blended customer acquisition cost (CAC) by 50% across Meta and Google campaigns.',
      'Achieved a 99.8% server-side attribution event match quality score.',
      'Expanded monthly organic search revenue by 185% through programmatic SEO.',
    ],
    architecture: [
      'Edge-rendered headless Next.js 14 frontend achieving perfect 100 Core Web Vitals',
      'Server-side Meta Conversions API (CAPI) and Google Tag Manager server gateway',
      'Algorithmic budget pacing and predictive audience cohort targeting engine',
      'Automated dynamic landing page personalization pipeline based on ad intent',
    ],
  },
];
