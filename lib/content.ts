import {
  FileSearch, BrainCircuit, Workflow, ScrollText, TrendingUp, Boxes,
  Landmark, Briefcase, Compass, HeartPulse, Rocket, Scale,
  Target, Wrench, Zap, CheckCircle,
  type LucideIcon,
} from 'lucide-react';

export interface Chapter { id: string; label: string; }

export const CHAPTERS: Chapter[] = [
  { id: 'top',          label: 'The data room' },
  { id: 'signal',       label: 'The signal' },
  { id: 'capabilities', label: 'Capabilities' },
  { id: 'process',      label: 'Process' },
  { id: 'industries',   label: 'Industries' },
  { id: 'why-us',       label: 'Why us' },
  { id: 'contact',      label: 'Begin' },
];

export const DOC_TITLES = [
  'Credit Agreement', '10-K FY2025', 'Confidential Info Memo', 'Supplier MSA',
  'Board Minutes Q3', 'Quality of Earnings', 'Cap Table', 'Lease Abstracts',
  'Clinical Study Report', 'SEC Comment Letter', 'Customer Contracts', 'IP Schedule',
  'Management Accounts', 'Employment Agreements', 'Insurance Policies', 'Tax Returns FY24',
  'Litigation Summary', 'Vendor Diligence', 'Market Study', 'Revenue Schedule',
];

export const STATS = [
  { value: 10, prefix: '', suffix: '×', label: 'Faster due diligence' },
  { value: 98, prefix: '', suffix: '%', label: 'Document accuracy rate' },
  { value: 2,  prefix: '< ', suffix: ' wks', label: 'Time to first deployment' },
];

export const STATS_NOTE =
  'Based on internal benchmarks across pilot engagements. Results vary by workflow and data complexity.';

export interface Capability { n: string; title: string; description: string; icon: LucideIcon; }

export const CAPABILITIES: Capability[] = [
  { n: '01', icon: FileSearch,   title: 'AI-Powered Due Diligence',        description: 'Process thousands of documents in hours. Surface material risks and opportunities that human reviewers miss under time pressure.' },
  { n: '02', icon: BrainCircuit, title: 'Decision Intelligence Systems',   description: 'Structured AI reasoning across complex, multi-variable decisions: investment theses, market entries, and risk frameworks.' },
  { n: '03', icon: Workflow,     title: 'Workflow Automation',             description: 'Eliminate analyst hours spent on data gathering, synthesis, and formatting. Redeploy your best people to work that requires judgment.' },
  { n: '04', icon: ScrollText,   title: 'Document & Compliance Analysis',  description: 'Precision extraction, classification, and flagging across contracts, regulatory filings, and compliance documentation at scale.' },
  { n: '05', icon: TrendingUp,   title: 'Portfolio & Investment Insights', description: 'Continuous monitoring and structured reporting across portfolio companies, market signals, and competitive dynamics.' },
  { n: '06', icon: Boxes,        title: 'Custom Intelligence Platforms',   description: "Proprietary models and tooling built around your firm's data, domain language, and specific decision workflows." },
];

export interface Step { n: string; title: string; description: string; }

export const STEPS: Step[] = [
  { n: '1', title: 'Diagnose', description: "We map your existing workflows, data sources, and decision bottlenecks. We identify where AI creates real leverage, and where it doesn't." },
  { n: '2', title: 'Design',   description: "Custom architecture built around your infrastructure, your data, and your team's way of working. No rip-and-replace." },
  { n: '3', title: 'Deploy',   description: 'Iterative rollout with embedded support until the system earns the trust of the people using it and proves it in production.' },
];

export interface Industry { title: string; description: string; outcomes: string[]; icon: LucideIcon; }

export const INDUSTRIES: Industry[] = [
  { icon: Landmark,   title: 'Financial Services',            outcomes: ['Risk model acceleration', 'Regulatory reporting', 'Market intelligence'],                  description: 'AI systems that match the speed and rigor financial institutions require, built for live data environments and compliance-first workflows.' },
  { icon: Briefcase,  title: 'Private Equity & Investment',   outcomes: ['Due diligence compression', 'Deal sourcing signals', 'Portfolio monitoring'],            description: 'Compress weeks of diligence into days. Surface deal-critical insights across complex data rooms without adding headcount.' },
  { icon: Compass,    title: 'Consulting & Advisory',         outcomes: ['Research synthesis', 'Deliverable acceleration', 'Competitive analysis'],                description: 'Deliver deeper analysis in less time. AI that augments your senior talent rather than replacing the judgment clients pay for.' },
  { icon: HeartPulse, title: 'Healthcare & Life Sciences',    outcomes: ['Clinical evidence review', 'Regulatory submissions', 'Safety signal detection'],         description: 'High-precision document analysis and decision support where accuracy is measured against patient and business risk.' },
  { icon: Rocket,     title: 'Growing Businesses & Advisors', outcomes: ['Vendor diligence', 'Market research automation', 'Report generation'],                  description: 'Enterprise-grade analysis without the enterprise overhead, for boutique firms, independent advisors, and fast-growing teams.' },
  { icon: Scale,      title: 'Legal & Compliance Teams',      outcomes: ['Contract review', 'Compliance monitoring', 'Risk reporting'],                            description: 'Accelerate document review and compliance workflows. Flag contract risks and regulatory changes, with audit trails built in.' },
];

export const SECTORS = [
  'Private Equity', 'Investment Banking', 'Asset Management',
  'Management Consulting', 'Life Sciences', 'Legal & Compliance',
];

export const TESTIMONIALS = [
  { quote: 'SoundMind cut our diligence timeline in half. We found risks we would have missed under time pressure.', name: 'Sarah Chen', role: 'Director of Due Diligence, Apex Partners' },
  { quote: 'As a boutique advisory firm, we finally have analytical horsepower that matches much larger competitors.', name: 'Michael Rodriguez', role: 'Founder, Northstar Advisors' },
];

export interface Differentiator { title: string; description: string; icon: LucideIcon; }

export const DIFFERENTIATORS: Differentiator[] = [
  { icon: Target,      title: 'Precision over hype',            description: 'Every model choice is driven by accuracy requirements, not novelty. We test against your real data before anything touches production.' },
  { icon: Wrench,      title: 'Built for real-world conditions', description: 'Our systems run under pressure, with messy data, shifting requirements, and teams that have seen too many demos that never shipped.' },
  { icon: Zap,         title: 'High-stakes focus',              description: 'We only work on decisions where being wrong has real consequences. That constraint shapes everything: architecture, testing, deployment.' },
  { icon: CheckCircle, title: 'Strategy through to execution',  description: "We don't hand off a prototype. We stay through deployment, adoption, and the first time the system faces something it wasn't built for." },
];
