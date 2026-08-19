import ServiceTemplate from '@/components/ServiceTemplate';

export const metadata = {
  title: 'SEO & Search Dominance Engineering | Codesoftic',
  description: 'Algorithmic technical SEO, automated schema architecture, and AI-powered organic search expansion by Codesoftic.',
};

export default function SEOPage() {
  return (
    <ServiceTemplate
      serviceName="Technical SEO & Search Dominance"
      badgeText="Organic Growth Engine"
      tagline="Dominate high-intent search queries with algorithmic technical SEO, programmatic content architectures, and AI-enhanced Answer Engine Optimization (AEO)."
      overview="Search has evolved beyond basic keywords. Today's search ecosystem requires flawless technical crawlability, structured JSON-LD entity graphs, programmatic topical authority, and Answer Engine Optimization (AEO) tailored for Google SGE, Perplexity, and AI search engines."
      keyBenefits={[
        'Technical crawlability and indexation optimization guaranteeing 100% crawl budget efficiency.',
        'Semantic entity modeling and automated schema markup for rich snippet dominance.',
        'Programmatic content engines that scale thousands of high-converting landing pages.',
        'Answer Engine Optimization (AEO) to capture citations across ChatGPT, Perplexity, and Google AI Overviews.',
      ]}
      impactStat={{
        value: '+280%',
        label: 'Average Organic Search Traffic Growth',
      }}
      deliverables={[
        {
          title: 'Full Technical SEO Architecture Audit',
          description: 'In-depth log file analysis, render budget verification, canonical tag hierarchy, and duplicate content mitigation.',
        },
        {
          title: 'Programmatic SEO Hubs',
          description: 'Automated, template-driven architectures that programmatically generate thousands of high-intent search landing pages with unique data assets.',
        },
        {
          title: 'Structured JSON-LD Entity Graph',
          description: 'Enterprise-grade semantic schema markup linking your brand, products, authors, and knowledge entities directly to Google Knowledge Graph.',
        },
        {
          title: 'Answer Engine Optimization (AEO)',
          description: 'Structuring content and citations to maximize probability of being featured in AI answer boxes (Perplexity, ChatGPT, Google Gemini).',
        },
        {
          title: 'Real-Time Rank & Revenue Tracking',
          description: 'Custom BigQuery + Looker dashboards tracking keyword velocity, organic revenue attribution, and competitor search movements.',
        },
      ]}
      methodology={[
        { stage: 'Technical Crawl Diagnostics', details: 'Identifying render bottlenecks, JS indexing barriers, index bloat, and core crawl errors.' },
        { stage: 'Semantic Keyword Graphing', details: 'Mapping high-intent commercial keywords into comprehensive topical clusters.' },
        { stage: 'Programmatic Build & Schema', details: 'Deploying structured data, automated internal linking, and programmatic hubs.' },
        { stage: 'Authority & Iterative Scaling', details: 'Continuous algorithm monitoring, backlink velocity, and organic conversion rate optimization.' },
      ]}
      techStack={[
        'Next.js Dynamic Routing', 'Schema.org JSON-LD', 'Google Search Console API', 'Ahrefs / Semrush APIs', 'Screaming Frog', 'BigQuery / Looker Studio'
      ]}
      faqs={[
        {
          question: 'How quickly can we expect to see organic ranking improvements?',
          answer: 'Technical fixes (such as resolving indexing blockers, fixing schema, and improving Core Web Vitals) often yield measurable ranking and indexation gains within 14 to 30 days. Programmatic and topical authority growth compounds significantly over 60 to 90 days.',
        },
        {
          question: 'What is Answer Engine Optimization (AEO)?',
          answer: 'AEO is the practice of optimizing content so that generative AI engines (like Google AI Overviews, Perplexity, and ChatGPT) select your brand as the primary cited source when answering complex user questions.',
        },
        {
          question: 'Do you handle the actual code implementation or just deliver recommendations?',
          answer: 'Codesoftic implements all technical SEO changes directly into your codebase, ensuring zero backlog delays.',
        },
      ]}
    />
  );
}
