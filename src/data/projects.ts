/**
 * Portfolio case studies.
 *
 * HOW TO ADD A PROJECT
 * --------------------
 * 1. Copy one of the entries below and edit the fields.
 * 2. For evidence files, drop them into:  public/case-studies/<your-slug>/
 *    Then reference them as:  /case-studies/<your-slug>/filename.ext
 * 3. Supported evidence kinds:
 *      - { kind: "image",   src, caption? }            → opens in lightbox
 *      - { kind: "video",   src, poster?, caption? }   → responsive HTML5 player
 *      - { kind: "youtube", id, caption? }             → embedded YouTube
 *      - { kind: "pdf",     src, label, caption? }     → download / view PDF
 *      - { kind: "slides",  src, label, caption? }     → embed (Google Slides / SlideShare URL) or PDF export
 *      - { kind: "link",    href, label, caption? }    → external link (certificate, article)
 */

export type Evidence =
  | { kind: "image"; src: string; caption?: string }
  | { kind: "video"; src: string; poster?: string; caption?: string }
  | { kind: "youtube"; id: string; caption?: string }
  | { kind: "pdf"; src: string; label: string; caption?: string }
  | { kind: "slides"; src: string; label: string; caption?: string }
  | { kind: "link"; href: string; label: string; caption?: string };

export type Project = {
  slug: string;
  title: string;
  tag: string;
  year: string;
  overview: string;
  challenge: string;
  role: string;
  actions: string[];
  results: string[];
  skills: string[];
  learnings: string;
  evidence: Evidence[];
};

export const PROJECTS: Project[] = [
  {
    slug: "sustainable-bd",
    title: "Sustainable Business Development Initiative",
    tag: "Sustainability · Strategy",
    year: "2025",
    overview:
      "Worked with a growing organization to integrate sustainability principles into its commercial development without slowing day-to-day operations.",
    challenge:
      "The team wanted to act on sustainability commitments, but lacked a shared framework and worried that new processes would disrupt delivery.",
    role: "Business development contributor — research, analysis, and proposal drafting.",
    actions: [
      "Mapped existing commercial processes and identified decision points where sustainability could be embedded.",
      "Researched relevant frameworks and benchmarks across comparable organizations.",
      "Drafted a phased roadmap aligning environmental and social considerations with commercial goals.",
      "Presented findings and recommendations to stakeholders for feedback and prioritization.",
    ],
    results: [
      "A practical roadmap adopted as a working reference by the team.",
      "Shared internal language for sustainability across commercial and operational roles.",
      "Three concrete process changes prioritized for the next quarter.",
    ],
    skills: ["Sustainability research", "Stakeholder analysis", "Roadmapping", "Strategic writing"],
    learnings:
      "Sustainability sticks when it is translated into the daily decisions people already make — not added as a separate workstream.",
    evidence: [
      // Drop files into public/case-studies/sustainable-bd/ then uncomment:
      // { kind: "image", src: "/case-studies/sustainable-bd/roadmap.jpg", caption: "Phased roadmap overview" },
      // { kind: "pdf",   src: "/case-studies/sustainable-bd/summary.pdf", label: "Project summary (PDF)" },
    ],
  },
  {
    slug: "market-research",
    title: "Market Research & Opportunity Mapping",
    tag: "Research · Business Development",
    year: "2025",
    overview:
      "Built a structured view of an unfamiliar market segment to support a business development decision with limited internal data.",
    challenge:
      "Leadership needed to decide whether to pursue a new segment but had no baseline data on customer needs, competitors, or entry barriers.",
    role: "Researcher and analyst — sole contributor on the brief, working with the BD lead.",
    actions: [
      "Designed a research plan combining desk research, competitor scans, and structured interviews.",
      "Synthesized findings into a clear view of customer needs, white space, and risks.",
      "Built a simple sizing estimate using publicly available data.",
      "Recommended a first validation step proportional to the team's capacity.",
    ],
    results: [
      "A concise opportunity brief with three prioritized directions.",
      "A clear go/no-go recommendation accepted by stakeholders.",
      "Reusable research template for future segment evaluations.",
    ],
    skills: ["Market research", "Competitor analysis", "Interview design", "Synthesis & writing"],
    learnings:
      "Good research is less about volume of data and more about asking the question that reframes the decision.",
    evidence: [],
  },
  {
    slug: "digital-workflow",
    title: "Digital Workflow Improvement",
    tag: "Digital · Process",
    year: "2024",
    overview:
      "Replaced a fragmented internal workflow with a lightweight digital process the team could maintain on its own.",
    challenge:
      "Duplicated work and delayed reporting were creating friction across a small cross-functional team.",
    role: "Project contributor — process mapping, prototyping, and rollout support.",
    actions: [
      "Documented the existing end-to-end workflow with the people doing the work.",
      "Identified the highest-friction handoffs and grouped them into solvable units.",
      "Prototyped a lightweight digital workflow using accessible, low-cost tools.",
      "Wrote a short internal guide so the team could maintain and adapt it.",
    ],
    results: [
      "Fewer manual handoffs and faster reporting cycles.",
      "A workflow the team owns and can adjust without external help.",
      "A reusable approach for documenting and improving other processes.",
    ],
    skills: ["Process mapping", "Digital tools", "Prototyping", "Internal documentation"],
    learnings:
      "The right digital solution is often the smallest one — proportional to the team that has to live with it.",
    evidence: [],
  },
  {
    slug: "cross-functional",
    title: "Cross-Functional Project Coordination",
    tag: "Coordination · Operations",
    year: "2024",
    overview:
      "Coordinated a multi-stakeholder initiative with competing priorities and reporting needs to deliver on time.",
    challenge:
      "Stakeholders worked in different contexts and rhythms, which made shared progress hard to see.",
    role: "Project coordinator — communication design, cadence, and stakeholder alignment.",
    actions: [
      "Established a clear cadence and single source of truth for status.",
      "Designed a lightweight reporting format respecting each stakeholder's context.",
      "Surfaced risks early and proposed structured trade-offs.",
      "Documented decisions to reduce repeat conversations.",
    ],
    results: [
      "On-time delivery across contributors.",
      "Fewer status meetings and clearer accountability.",
      "Reusable cadence and reporting templates.",
    ],
    skills: ["Project coordination", "Stakeholder communication", "Risk surfacing", "Documentation"],
    learnings:
      "Coordination is mostly communication design — the structure you choose determines what people actually read.",
    evidence: [],
  },
];
