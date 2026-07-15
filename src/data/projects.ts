/**
 * Portfolio case studies.
 *
 * HOW TO ADD A PROJECT
 * --------------------
 * 1. Copy one of the entries below and edit the fields.
 * 2. For evidence files, drop them into:  public/case-studies/<your-slug>/
 *    Then reference them as:  /case-studies/<your-slug>/filename.ext
 * 3. Supported evidence kinds:
 *      - { kind: "image",   src, caption? }
 *      - { kind: "video",   src, poster?, caption? }
 *      - { kind: "youtube", id, caption? }
 *      - { kind: "pdf",     src, label, caption? }
 *      - { kind: "slides",  src, label, caption? }
 *      - { kind: "link",    href, label, caption? }
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
    tag: "Academic Project · Sustainable Business",
    year: "2025",
    overview:
      "An academic project exploring how a growing organization could integrate sustainable business practices into its commercial development without disrupting day-to-day operations.",
    challenge:
      "The case study organization wanted to act on sustainability commitments but lacked a shared framework, and there was concern that new processes could disrupt delivery.",
    role: "Business development contributor responsible for research, analysis, and proposal drafting within a student team.",
    actions: [
      "Mapped existing commercial processes and identified decision points where sustainability considerations could be introduced.",
      "Researched relevant frameworks and benchmarks from comparable organizations.",
      "Drafted a phased proposal aligning environmental and social considerations with commercial goals.",
      "Presented findings and recommendations to peers and instructors for feedback.",
    ],
    results: [
      "Produced a structured, research-based proposal used as a course deliverable.",
      "Developed a shared vocabulary for sustainability across commercial and operational activities.",
      "Built a practical framework showing how sustainability can support long-term organizational value.",
    ],
    skills: ["Sustainability research", "Stakeholder analysis", "Framework development", "Strategic writing"],
    learnings:
      "Sustainability is most useful when translated into the everyday decisions people already make, rather than treated as a separate workstream.",
    evidence: [],
  },
  {
    slug: "market-research",
    title: "Market Research & Opportunity Mapping",
    tag: "Internship & Academic Project · Research",
    year: "2025",
    overview:
      "Built a structured view of an unfamiliar market segment to support a business development discussion, drawing on internship and academic project work.",
    challenge:
      "There was no baseline view of customer needs, competitors, or entry barriers for the segment being considered.",
    role: "Researcher and analyst working alongside a business development lead as part of an internship project.",
    actions: [
      "Designed a lightweight research plan combining desk research, competitor scans, and structured interview questions.",
      "Synthesized findings into a clear view of customer needs, potential white space, and risks.",
      "Built a simple sizing estimate using publicly available data.",
      "Recommended a first validation step proportional to the team's capacity.",
    ],
    results: [
      "Produced a concise opportunity brief with prioritized directions.",
      "Presented findings and a suggested next step to the internship team.",
      "Created a reusable research template for future segment evaluations.",
    ],
    skills: ["Market research", "Competitor analysis", "Interview design", "Synthesis and writing"],
    learnings:
      "Good research is less about the volume of data and more about asking the question that reframes the decision.",
    evidence: [],
  },
  {
    slug: "digital-workflow",
    title: "Digital Workflow Improvement",
    tag: "Academic Project · Digital & Process",
    year: "2024",
    overview:
      "Cross-functional academic project focused on replacing a fragmented workflow with a lightweight digital process that a small team could maintain.",
    challenge:
      "Duplicated work and delayed reporting were creating friction across a small cross-functional team scenario.",
    role: "Project contributor responsible for process mapping, prototyping, and documentation within the student team.",
    actions: [
      "Documented the existing end-to-end workflow through interviews with team members.",
      "Identified the highest-friction handoffs and grouped them into solvable units.",
      "Prototyped a lightweight digital workflow using accessible, low-cost tools.",
      "Wrote a short internal guide describing how the workflow could be maintained.",
    ],
    results: [
      "Produced a documented before-and-after workflow.",
      "Built a practical framework the team could adapt on its own.",
      "Improved understanding of how small digital changes can reduce coordination overhead.",
    ],
    skills: ["Process mapping", "Digital tools", "Prototyping", "Internal documentation"],
    learnings:
      "The right digital solution is often the smallest one, proportional to the team that has to live with it.",
    evidence: [],
  },
  {
    slug: "cross-functional",
    title: "Cross-Functional Project Coordination",
    tag: "Academic Project · Coordination",
    year: "2024",
    overview:
      "Coordinated a multi-stakeholder academic initiative with competing priorities and reporting needs, focused on delivering the work on time.",
    challenge:
      "Contributors worked in different contexts and rhythms, which made shared progress difficult to see.",
    role: "Project coordinator responsible for communication design, cadence, and stakeholder alignment.",
    actions: [
      "Established a clear cadence and single source of truth for status.",
      "Designed a lightweight reporting format that respected each contributor's context.",
      "Surfaced risks early and proposed structured trade-offs.",
      "Documented decisions to reduce repeat conversations.",
    ],
    results: [
      "Delivered the project on time across contributors.",
      "Produced reusable cadence and reporting templates.",
      "Improved understanding of how communication design supports coordination.",
    ],
    skills: ["Project coordination", "Stakeholder communication", "Risk surfacing", "Documentation"],
    learnings:
      "Coordination is largely communication design; the structure you choose determines what people actually read.",
    evidence: [],
  },
];
