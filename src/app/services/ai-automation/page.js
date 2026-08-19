import ServiceTemplate from '@/components/ServiceTemplate';

export const metadata = {
  title: 'AI Automation & Autonomous Agents | Codesoftic',
  description: 'Deploy intelligent autonomous multi-agent workflows, custom LLM pipelines, and automated business operations with Codesoftic.',
};

export default function AIAutomationPage() {
  return (
    <ServiceTemplate
      serviceName="AI Automation & Autonomous Agents"
      badgeText="Next-Gen Intelligence"
      tagline="Transform manual enterprise operations into autonomous, self-healing agentic workflows that operate 24/7 with human-level comprehension and superhuman speed."
      overview="Manual workflows choke scalability. Codesoftic engineers bespoke multi-agent AI ecosystems that seamlessly interface with your databases, customer channels, CRMs, and internal tooling. Our systems autonomously resolve customer inquiries, orchestrate complex data ETL pipelines, and execute multi-step business logic."
      keyBenefits={[
        'Autonomous multi-agent orchestration coordinating complex decision trees.',
        'Custom Retrieval-Augmented Generation (RAG) referencing your private knowledge base.',
        '80%+ reduction in manual operational and triage overhead across departments.',
        'Continuous evaluation harnesses ensuring high accuracy and zero hallucinations.',
      ]}
      impactStat={{
        value: '88.4%',
        label: 'Autonomous Workflow Execution Rate',
      }}
      deliverables={[
        {
          title: 'Autonomous Multi-Agent Workflows',
          description: 'Deploy specialized AI agents designed for customer support, lead qualification, financial reconciliation, and document parsing.',
        },
        {
          title: 'Enterprise RAG & Knowledge Graphs',
          description: 'Vector-embedded document ingestion pipelines that allow LLMs to query millions of internal PDFs, databases, and Notion/Confluence wikis with pinpoint accuracy.',
        },
        {
          title: 'Custom API Tooling & Function Calling',
          description: 'Connect agents directly to Stripe, HubSpot, Slack, Jira, Postgres, and custom webhooks to perform real-world actions.',
        },
        {
          title: 'Human-in-the-Loop Safeguards',
          description: 'Configurable approval thresholds and escalation queues ensuring mission-critical actions receive staff authorization when necessary.',
        },
        {
          title: 'Telemetry & Observability Dashboard',
          description: 'Real-time monitoring of token consumption, agent latency, user sentiment, and automated error recovery logs.',
        },
      ]}
      methodology={[
        { stage: 'Workflow Dissection', details: 'Mapping existing manual business logic, edge cases, data structures, and tool endpoints.' },
        { stage: 'Agentic Architecture', details: 'Designing state machines, prompt chains, memory stores, and vector indexing strategies.' },
        { stage: 'Integration & Testing', details: 'Rigorous synthetic stress-testing, automated evals, and sandbox integration.' },
        { stage: 'Live Deployment & Scaling', details: 'Gradual rollout, human-in-the-loop tuning, and full autonomous handover.' },
      ]}
      techStack={[
        'LangGraph / AutoGen', 'FastAPI / Python', 'Node.js', 'Pinecone / Qdrant', 'OpenAI GPT-4o / Claude 3.5 Sonnet', 'Redis Caching', 'Docker / Kubernetes'
      ]}
      faqs={[
        {
          question: 'How do you prevent hallucinations in automated agent workflows?',
          answer: 'We utilize strict Retrieval-Augmented Generation (RAG) with contextual embeddings, schema-enforced JSON outputs (Pydantic / Zod), and automated cross-validation agents that verify factual consistency before executing actions.',
        },
        {
          question: 'Can these agents interface with legacy internal software?',
          answer: 'Yes. We build custom API wrappers, database adaptors, and headless browser workers to connect agents to legacy systems without requiring legacy rewrites.',
        },
        {
          question: 'Who maintains and monitors the agents post-deployment?',
          answer: 'We provide ongoing managed SLA monitoring, automated model updates, prompt tuning, and telemetry oversight, or we can train your in-house team.',
        },
      ]}
    />
  );
}
