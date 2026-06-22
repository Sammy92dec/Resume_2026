import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Linkedin,
  Download,
  MapPin,
  Mail,
  ArrowRight,
  Sprout,
  BarChart3,
  Handshake,
  Search,
  Lightbulb,
  CheckCircle2,
  Sparkles,
  Send,
  Telescope,
  Brain,
  Plus,
  Minus,
  Database,
  PieChart,
  FileSpreadsheet,
  PencilRuler,
  Workflow,
  Users,
  Leaf,
  GraduationCap,
  Compass,
  Rocket,
} from "lucide-react";
import samCasual from "@/assets/sam-casual.jpg";
import samPro from "@/assets/sam-professional.jpg";
import projFuture from "@/assets/project-future.jpg";
import projCommunity from "@/assets/project-community.jpg";
import projBusiness from "@/assets/project-business.jpg";
import projBlockchain from "@/assets/project-blockchain.jpg";

const LINKEDIN_URL = "https://www.linkedin.com/in/samrawit-tekheste/";
const EMAIL = "samrawit.samuel.tk@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samrawit Tekheste — Business Developer in Stockholm" },
      {
        name: "description",
        content:
          "Samrawit (Sam) Tekheste — Stockholm-based Business Developer working at the intersection of market research, partnerships, sustainability, and community-driven growth.",
      },
      { property: "og:title", content: "Samrawit Tekheste — Business Developer" },
      {
        property: "og:description",
        content:
          "Turning research, relationships, and opportunities into meaningful growth.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Portfolio,
});

/* ---------------- NAV ---------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#thinking", label: "How I Think" },
    { href: "#journey", label: "Journey" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-[0_2px_20px_-10px_rgba(0,0,0,0.08)]"
          : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4 h-16 md:h-[4.5rem]">
        <a href="#top" className="flex items-center min-w-0 group">
          <span className="font-display text-lg md:text-xl tracking-[0.18em] uppercase text-foreground truncate">
            Samrawit
          </span>
        </a>
        <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[15px] text-foreground/80 hover:text-foreground transition-colors relative group"
            >
              {l.label}
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 hover:text-foreground transition-colors"
          >
            <Linkedin size={17} />
          </a>
          <a
            href="/Samrawit-Tekheste-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 md:px-6 py-2.5 text-sm font-medium hover:bg-accent/90 hover:scale-[1.02] transition-all shadow-[0_4px_14px_-4px_oklch(0.62_0.09_55/0.4)]"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Resume</span>
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/70"
            aria-label="Menu"
          >
            {open ? <Minus size={18} /> : <Plus size={18} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="lg:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <nav className="container-x py-5 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-xl text-foreground/85 py-1"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  const badges = [
    { icon: BarChart3, label: "Market Research" },
    { icon: Handshake, label: "Partnerships" },
    { icon: Sprout, label: "Sustainability" },
    { icon: Rocket, label: "Growth Strategy" },
  ];
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-clay) 0%, transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-olive) 0%, transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-5 order-1">
            <div className="relative max-w-sm mx-auto lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-secondary -rotate-2"
              />
              <div
                aria-hidden
                className="absolute -inset-1 rounded-[1.85rem] border border-accent/30 rotate-1"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] aspect-[4/5] bg-muted">
                <img
                  src={samCasual}
                  alt="Samrawit Tekheste, Business Developer based in Stockholm"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 md:-right-5 bg-background border border-border rounded-2xl px-4 py-3 shadow-sm">
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="text-sm font-medium">Stockholm, Sweden</p>
              </div>
              <div className="absolute -top-4 -left-3 md:-left-5 bg-primary text-primary-foreground rounded-2xl px-4 py-3 shadow-sm rotate-[-3deg]">
                <p className="text-[10px] uppercase tracking-[0.18em] opacity-80">Open to</p>
                <p className="text-sm font-medium">New opportunities</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-2">
            <p className="eyebrow mb-5">Stockholm · Business Development · Strategy</p>
            <h1 className="text-[2rem] leading-[1.08] sm:text-4xl md:text-[2.75rem] lg:text-[3.25rem] text-foreground">
              Turning <em className="not-italic text-primary">research</em>,{" "}
              <em className="not-italic text-accent">relationships</em>, and opportunities into
              meaningful growth.
            </h1>
            <p className="mt-6 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
              Hi, I'm Samrawit — most people call me <strong className="text-foreground">Sam</strong>.
              I'm a Business Developer passionate about market analysis, partnerships, community
              building, and turning insights into action. I help organizations uncover
              opportunities, strengthen relationships, and make better decisions through
              research, collaboration, and strategic thinking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                View My Work
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Let's Connect
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-2 rounded-full bg-card border border-border px-3.5 py-1.5 text-xs md:text-sm text-foreground/80"
                >
                  <b.icon size={14} className="text-accent" />
                  {b.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SHARED ---------------- */
function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-display text-accent text-lg">{num}</span>
      <span className="h-px flex-1 bg-border max-w-[3rem]" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="section-pad bg-secondary/40">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-5">
            <SectionLabel num="01" label="About" />
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.1]">
              A curious mind building a career around growth, people, and impact.
            </h2>
            <div className="mt-10 relative max-w-xs">
              <div aria-hidden className="absolute -inset-3 rounded-3xl bg-primary/10 rotate-2" />
              <div className="relative overflow-hidden rounded-2xl aspect-[4/5] bg-muted">
                <img
                  src={samPro}
                  alt="Samrawit Tekheste portrait"
                  className="w-full h-full object-cover grayscale-[0.15]"
                />
              </div>
            </div>
          </div>
          <div className="md:col-span-7 md:pt-16 space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed">
            <p>
              I'm Samrawit Tekheste — a Stockholm-based Business Developer who combines market
              research, partnership development, community building, and data-informed decision
              making.
            </p>
            <p>
              My foundation comes from a Business Development education at{" "}
              <strong className="text-foreground">Hyper Island</strong>, complemented by ongoing
              studies in <strong className="text-foreground">Data Analytics</strong> (SQL,
              Power BI, Excel). Before that, years in customer-facing and coaching roles taught
              me how to listen, build trust, and turn conversations into outcomes.
            </p>
            <p>
              I'm drawn to the intersection of <strong className="text-foreground">sustainability</strong>,{" "}
              <strong className="text-foreground">innovation</strong>, and{" "}
              <strong className="text-foreground">community</strong>. I'm at my best where strategy
              meets humans — where understanding a market also means understanding the people
              inside it.
            </p>
            <p className="font-display text-xl text-foreground/85 italic border-l-2 border-accent pl-5">
              I don't just want to do work — I want to do work that matters, with people who care
              about the why behind it.
            </p>

            <div className="pt-4 grid sm:grid-cols-3 gap-4">
              {[
                { icon: GraduationCap, label: "Hyper Island", note: "Business Development" },
                { icon: Database, label: "Data Analytics", note: "SQL · Power BI · Excel" },
                { icon: Compass, label: "Curiosity-led", note: "Always learning" },
              ].map((c) => (
                <div key={c.label} className="bg-background border border-border rounded-2xl p-4">
                  <c.icon size={18} className="text-primary mb-2" />
                  <p className="font-medium text-sm">{c.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{c.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- HOW I THINK ---------------- */
function HowIThink() {
  const steps = [
    { icon: Telescope, title: "Understand", body: "Sit with the problem before reaching for a solution. Ask what's really being asked." },
    { icon: Search, title: "Research", body: "Gather context — market signals, competitor moves, user voices, internal data." },
    { icon: Brain, title: "Analyze", body: "Look for patterns, gaps, and the questions hiding behind the obvious ones." },
    { icon: Lightbulb, title: "Ideate", body: "Generate options widely before narrowing. Diverge, then converge." },
    { icon: CheckCircle2, title: "Validate", body: "Test ideas against people, data, and reality. Confirm before committing." },
    { icon: Sparkles, title: "Refine", body: "Iterate on what works. Strip away what doesn't. Sharpen the story." },
    { icon: Send, title: "Deliver", body: "Ship clear, useful outcomes — and capture what we learned for next time." },
  ];

  const principles = [
    {
      title: "Validate Before Assuming",
      body: "I prefer confirming ideas through user feedback, interviews, research, and data before making recommendations.",
    },
    {
      title: "Keep Solutions Human",
      body: "I simplify complexity and focus on solutions that people can actually understand and use.",
    },
    {
      title: "Balance Research and Action",
      body: "I enjoy analysis — but only when it leads to practical outcomes and measurable value.",
    },
  ];

  return (
    <section id="thinking" className="section-pad">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionLabel num="02" label="How I Think" />
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.1]">
            A structured way of moving from question to outcome.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            I approach challenges with structured thinking, curiosity, and evidence — not
            opinion. Here's the loop I tend to follow.
          </p>
        </div>

        <ol className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((s, i) => (
            <li
              key={s.title}
              className="group relative bg-card border border-border rounded-2xl p-6 hover:border-accent/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="h-10 w-10 rounded-xl bg-primary/10 text-primary grid place-items-center">
                  <s.icon size={18} />
                </span>
                <span className="font-display text-accent text-sm">
                  /{String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-display text-xl text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">{s.body}</p>
            </li>
          ))}
          <li className="relative rounded-2xl p-6 bg-primary text-primary-foreground flex flex-col justify-center">
            <p className="text-xs uppercase tracking-[0.2em] opacity-70 mb-2">My approach</p>
            <p className="font-display text-xl leading-snug">
              A loop, not a line. Real work circles back through these stages.
            </p>
          </li>
        </ol>

        <div className="mt-16 md:mt-20">
          <p className="eyebrow mb-6">My approach to problem solving</p>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {principles.map((p, i) => (
              <div
                key={p.title}
                className="bg-card border border-border rounded-3xl p-7 hover:border-primary/40 transition-colors"
              >
                <span className="font-display text-accent text-sm">
                  0{i + 1}
                </span>
                <h3 className="mt-2 font-display text-2xl text-foreground mb-3">{p.title}</h3>
                <p className="text-foreground/70 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- JOURNEY ---------------- */
function Journey() {
  const steps = [
    { role: "Personal Trainer", note: "Learned how habits, motivation, and trust shape long-term outcomes." },
    { role: "Customer Service", note: "Built empathy, communication, and the instinct to listen before solving." },
    { role: "Data Analytics", note: "Upskilled in SQL, Excel, and research methods — turning data into decisions." },
    { role: "Business Development", note: "Certified through Hyper Island. Market analysis, strategy, and stakeholder engagement." },
    { role: "Partnerships & Growth", note: "Building communities and partnerships around sustainability and innovation." },
  ];
  return (
    <section id="journey" className="section-pad bg-secondary/40">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel num="03" label="Journey" />
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.1]">
              A non-linear path — by design.
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
              Each chapter added a different lens: people, service, data, strategy, and
              partnerships. Continuously reinventing myself isn't a detour — it's how I learn.
            </p>
          </div>
          <ol className="md:col-span-7 relative border-l border-border/70 pl-8 space-y-9">
            {steps.map((s, i) => (
              <li key={s.role} className="relative">
                <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-secondary/40" />
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="font-display text-accent text-sm">
                    /{String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-2xl text-foreground">{s.role}</h3>
                </div>
                <p className="mt-2 text-foreground/70 leading-relaxed">{s.note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PROJECTS (expandable case studies) ---------------- */
type Project = {
  img: string;
  tag: string;
  title: string;
  summary: string;
  challenge: string;
  approach: string;
  research: string;
  insight: string;
  recommendation: string;
  outcome: string;
  learned: string;
  skills: string[];
};

function Projects() {
  const projects: Project[] = [
    {
      img: projCommunity,
      tag: "Community",
      title: "Community Impact Initiative",
      summary: "Bringing organizations and women-focused networks around a shared agenda.",
      challenge: "Align partners (PWN Copenhagen, Pool Collective, and others) around a shared impact agenda without diluting any single brand.",
      approach: "Co-designed programming, outreach, and storytelling. Built a shared narrative and clear roles for each partner.",
      research: "Stakeholder interviews, audience mapping, and review of existing community programs.",
      insight: "Meaningful partnerships are built on shared outcomes, not shared logos.",
      recommendation: "Lead with one concrete shared outcome per partnership cycle; let branding follow.",
      outcome: "An engaged, connected community aligned on purpose and follow-through.",
      learned: "Trust is the real infrastructure of partnerships. Everything else is logistics.",
      skills: ["Partnerships", "Community", "Strategic Communication"],
    },
    {
      img: projFuture,
      tag: "Innovation",
      title: "Future-Proof Project",
      summary: "Helping a forward-looking team prepare for shifting market conditions.",
      challenge: "Prepare a team for emerging trends without forcing premature commitments.",
      approach: "Mapped competitive forces, ran trend analysis, and co-designed a strategic readiness framework.",
      research: "Trend scanning, competitor benchmarking, internal capability mapping.",
      insight: "Readiness is less about predicting the future and more about staying flexible.",
      recommendation: "Build optionality: a small portfolio of low-cost experiments instead of one big bet.",
      outcome: "A shared roadmap for innovation priorities and stakeholder alignment.",
      learned: "Frameworks are most valuable when they create shared language, not certainty.",
      skills: ["Strategy", "Trend Research", "Stakeholder Engagement"],
    },
    {
      img: projBlockchain,
      tag: "Sustainability",
      title: "Blockchain & Sustainability Research",
      summary: "Exploring where emerging tech can accelerate sustainable innovation.",
      challenge: "Cut through the hype and identify genuinely useful intersections of blockchain and sustainability.",
      approach: "Researched sustainability trends, mapped use cases, and surfaced opportunities for future-focused business models.",
      research: "Industry reports, case study analysis, and conversations with people working in the space.",
      insight: "The most interesting opportunities sit at the intersection of tech and impact — not in either one alone.",
      recommendation: "Prioritize use cases with measurable environmental or social KPIs, not just technical novelty.",
      outcome: "A foundation of insight for teams operating where innovation meets responsibility.",
      learned: "Curiosity scales: the more honest the question, the more useful the research.",
      skills: ["Research", "Sustainability", "Innovation"],
    },
    {
      img: projBusiness,
      tag: "Business Development",
      title: "Market Analysis Projects",
      summary: "Identifying growth levers for organizations across sectors.",
      challenge: "Help teams move past gut-feel decisions and toward evidence-based growth choices.",
      approach: "Conducted competitor research, SWOT and trend analysis, and built strategic recommendations.",
      research: "Desk research, competitor mapping, survey design, and qualitative interviews.",
      insight: "Good recommendations start with the right question, not the prettiest dataset.",
      recommendation: "Frame insights around decisions, not data points — what should we do differently on Monday?",
      outcome: "Clear, actionable insights that supported confident decision making.",
      learned: "The job isn't to be right — it's to make the right call easier to see.",
      skills: ["Market Analysis", "Competitor Research", "SWOT"],
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="projects" className="section-pad">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <SectionLabel num="04" label="Projects" />
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.1]">
              Case studies across strategy, community, and research.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Tap a card to expand the full case study — challenge, approach, insight, and outcome.
          </p>
        </div>

        <div className="space-y-5">
          {projects.map((p, i) => {
            const open = openIdx === i;
            return (
              <article
                key={p.title}
                className={`group bg-card border rounded-3xl overflow-hidden transition-all duration-500 ${
                  open ? "border-accent/50 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.25)]" : "border-border hover:border-accent/30"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(open ? null : i)}
                  className="w-full text-left grid md:grid-cols-12 gap-5 md:gap-8 p-5 md:p-7"
                >
                  <div className="md:col-span-4 relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted">
                    <img
                      src={p.img}
                      alt={p.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                    />
                  </div>
                  <div className="md:col-span-8 flex flex-col justify-center min-w-0">
                    <div className="flex items-center justify-between gap-3 mb-3">
                      <span className="eyebrow">{p.tag}</span>
                      <span
                        className={`inline-flex h-8 w-8 items-center justify-center rounded-full border border-border text-foreground/60 transition-transform ${
                          open ? "rotate-45 bg-accent text-accent-foreground border-accent" : ""
                        }`}
                      >
                        <Plus size={14} />
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-[1.75rem] text-foreground mb-2">
                      {p.title}
                    </h3>
                    <p className="text-foreground/70">{p.summary}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.skills.map((s) => (
                        <span
                          key={s}
                          className="text-xs rounded-full bg-secondary text-secondary-foreground px-3 py-1.5"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 md:px-7 pb-7 md:pb-9 grid md:grid-cols-2 gap-x-10 gap-y-5 md:pl-[calc(33.33%+2rem)]">
                      {[
                        ["Challenge", p.challenge],
                        ["Approach", p.approach],
                        ["Research Process", p.research],
                        ["Key Insight", p.insight],
                        ["Recommendation", p.recommendation],
                        ["Outcome", p.outcome],
                        ["What I Learned", p.learned],
                      ].map(([k, v]) => (
                        <div key={k}>
                          <p className="eyebrow mb-1.5">{k}</p>
                          <p className="text-foreground/85 leading-relaxed text-sm md:text-base">{v}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- RESEARCH MEETS ACTION ---------------- */
function ResearchMeetsAction() {
  const methods = [
    "Market Analysis",
    "Competitor Analysis",
    "SWOT Analysis",
    "Trend Research",
    "Surveys",
    "User Interviews",
    "Stakeholder Insights",
    "Data Analysis",
  ];
  const tools = [
    { icon: Database, name: "SQL", note: "Querying and joining datasets" },
    { icon: PieChart, name: "Power BI", note: "Dashboards and reporting" },
    { icon: FileSpreadsheet, name: "Excel", note: "Modeling and analysis" },
    { icon: BarChart3, name: "Tableau", note: "Visualizing patterns" },
    { icon: PencilRuler, name: "Figma", note: "Concepting & prototyping" },
    { icon: Workflow, name: "Miro", note: "Mapping & collaboration" },
    { icon: Sparkles, name: "Canva", note: "Storytelling visuals" },
  ];

  return (
    <section
      className="section-pad text-cream relative overflow-hidden"
      style={{ backgroundColor: "var(--color-olive)" }}
    >
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-clay) 0%, transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-cream/80 text-lg">05</span>
            <span className="h-px flex-1 bg-cream/20 max-w-[3rem]" />
            <span className="text-xs tracking-[0.22em] uppercase font-medium text-cream/70">
              Research Meets Action
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-cream leading-[1.1]">
            Research is only useful when it leads to a decision.
          </h2>
          <p className="mt-6 text-cream/75 leading-relaxed">
            I use research methods and tools as instruments — not as deliverables. The point is
            always sharper thinking and better decisions.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-cream/60 mb-4">Methods I use</p>
            <div className="flex flex-wrap gap-2.5">
              {methods.map((m) => (
                <span
                  key={m}
                  className="rounded-full border border-cream/20 bg-cream/[0.06] px-4 py-2 text-sm text-cream/90"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6">
            <p className="text-xs tracking-[0.2em] uppercase text-cream/60 mb-4">Tools that support the work</p>
            <div className="grid sm:grid-cols-2 gap-3">
              {tools.map((t) => (
                <div
                  key={t.name}
                  className="rounded-2xl border border-cream/15 bg-cream/[0.04] p-4 flex items-start gap-3"
                >
                  <span className="h-9 w-9 rounded-lg bg-cream/10 grid place-items-center text-cream">
                    <t.icon size={16} />
                  </span>
                  <div>
                    <p className="text-cream font-medium text-sm">{t.name}</p>
                    <p className="text-cream/65 text-xs mt-0.5">{t.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHAT DRIVES ME ---------------- */
function WhatDrivesMe() {
  const themes = [
    {
      icon: Sprout,
      title: "Growth",
      story: "I'm energized by progress — in myself, in the people around me, and in the work. I look for environments where learning is part of the job description.",
    },
    {
      icon: Users,
      title: "Community",
      story: "Some of my proudest work has been about bringing people together around something they care about. Communities outlive campaigns.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      story: "I want to spend my career around businesses that take the long view — on people, on the planet, on the systems they touch.",
    },
    {
      icon: GraduationCap,
      title: "Learning",
      story: "Curiosity is my default mode. I'd rather sit with a hard question than skip to a comfortable answer.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      story: "I'm drawn to the edges — where industries meet, where assumptions get tested, and where the next thing is being figured out.",
    },
    {
      icon: Rocket,
      title: "Opportunity Creation",
      story: "I love finding the door no one noticed — for a partnership, a market, or a person. That instinct shows up in everything I do.",
    },
  ];

  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionLabel num="06" label="What Drives Me" />
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.1]">
            The themes that keep showing up.
          </h2>
        </div>
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {themes.map((t) => (
            <div
              key={t.title}
              className="bg-card border border-border rounded-3xl p-7 hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="h-11 w-11 rounded-2xl bg-accent/10 text-accent grid place-items-center mb-5">
                <t.icon size={20} />
              </span>
              <h3 className="font-display text-2xl text-foreground mb-3">{t.title}</h3>
              <p className="text-foreground/75 leading-relaxed">{t.story}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- SKILLS ---------------- */
function Skills() {
  const groups = [
    {
      title: "Business Development",
      items: ["Market Research", "Partnership Development", "Stakeholder Engagement", "Brand Strategy", "Strategic Communication"],
    },
    {
      title: "Data & Analytics",
      items: ["SQL", "Power BI", "Excel", "Tableau", "Data Storytelling", "Research Methods"],
    },
    {
      title: "People & Coordination",
      items: ["Community Building", "Project Coordination", "Collaboration", "Storytelling", "Facilitation"],
    },
  ];
  return (
    <section id="skills" className="section-pad bg-secondary/40">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionLabel num="07" label="Skills" />
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] text-foreground leading-[1.1]">
            The toolkit behind the work.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {groups.map((g) => (
            <div key={g.title} className="bg-background border border-border rounded-3xl p-7 md:p-8">
              <h3 className="font-display text-xl text-foreground mb-5">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="text-sm rounded-full bg-secondary text-secondary-foreground px-3.5 py-1.5"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section
      id="contact"
      className="section-pad relative overflow-hidden"
      style={{ backgroundColor: "var(--color-ink)" }}
    >
      <div
        aria-hidden
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-clay) 0%, transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.22em] uppercase text-cream/60 mb-6">
              08 — Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.5rem] text-cream leading-[1.05]">
              Let's build something meaningful.
            </h2>
            <p className="mt-8 text-cream/70 text-base md:text-lg max-w-xl leading-relaxed">
              I'm open to roles, collaborations, and conversations in business development,
              partnerships, growth, and sustainability — especially with teams that care about
              the why behind the work.
            </p>

            <div className="mt-10 flex items-center gap-5">
              <div className="relative h-20 w-20 rounded-2xl overflow-hidden border border-cream/20">
                <img src={samCasual} alt="Samrawit Tekheste" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="text-cream font-display text-lg">Samrawit Tekheste</p>
                <p className="text-cream/60 text-sm">Business Developer · Stockholm</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-cream/5 border border-cream/15 rounded-3xl p-7 md:p-9 backdrop-blur-sm">
              <p className="text-cream/60 text-xs tracking-[0.18em] uppercase mb-6">Get in touch</p>

              <a href={`mailto:${EMAIL}`} className="block group">
                <p className="text-cream/50 text-xs mb-1 flex items-center gap-2">
                  <Mail size={12} /> Email
                </p>
                <p className="font-display text-lg md:text-xl text-cream group-hover:text-accent transition-colors break-all">
                  {EMAIL}
                </p>
              </a>

              <div className="my-6 h-px bg-cream/15" />

              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="block group">
                <p className="text-cream/50 text-xs mb-1 flex items-center gap-2">
                  <Linkedin size={12} /> LinkedIn
                </p>
                <p className="font-display text-lg md:text-xl text-cream group-hover:text-accent transition-colors">
                  /in/samrawit-tekheste
                </p>
              </a>

              <div className="my-6 h-px bg-cream/15" />

              <p className="text-cream/50 text-xs mb-1 flex items-center gap-2">
                <MapPin size={12} /> Location
              </p>
              <p className="font-display text-lg md:text-xl text-cream">Stockholm, Sweden</p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${EMAIL}`}
                  className="inline-flex items-center gap-2 rounded-full bg-cream text-ink px-6 py-3 text-sm font-medium hover:bg-accent hover:text-cream transition-colors"
                >
                  Say hello
                  <ArrowRight size={14} />
                </a>
                <a
                  href="/Samrawit-Tekheste-Resume.pdf"
                  className="inline-flex items-center gap-2 rounded-full border border-cream/30 text-cream px-6 py-3 text-sm font-medium hover:bg-cream/10 transition-colors"
                >
                  <Download size={14} />
                  Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Samrawit Tekheste. Built with care in Stockholm.</p>
          <p>Business Developer · Partnerships · Market Research · Growth</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- PAGE ---------------- */
function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <HowIThink />
        <Journey />
        <Projects />
        <ResearchMeetsAction />
        <WhatDrivesMe />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}
