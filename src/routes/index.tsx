import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Linkedin,
  Download,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  MapPin,
} from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/samrawit-tekheste/";
const EMAIL = "samrawit.samuel.tk@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samrawit Tekheste — Business Development, Sustainability & Digital Innovation" },
      {
        name: "description",
        content:
          "Samrawit Tekheste — Sweden-based business development professional focused on sustainability, digital innovation, and practical solutions to complex challenges.",
      },
      { property: "og:title", content: "Samrawit Tekheste — Business Development & Sustainability" },
      {
        property: "og:description",
        content:
          "Business development professional working at the intersection of sustainability and digital innovation.",
      },
    ],
  }),
  component: Portfolio,
});

/* ---------------- Nav ---------------- */

const NAV = [
  { label: "About", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="group flex items-baseline gap-2 min-w-0">
          <span className="font-display text-base md:text-lg tracking-[0.22em] uppercase text-foreground">
            Samrawit
          </span>
          <span className="hidden md:inline text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            Tekheste
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] tracking-wide text-muted-foreground hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent/60 transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-accent/40 text-accent text-[12px] tracking-[0.18em] uppercase hover:bg-accent hover:text-accent-foreground transition"
          >
            <Download className="h-3.5 w-3.5" /> CV
          </a>
        </div>

        <button
          aria-label="Menu"
          className="md:hidden h-9 w-9 grid place-items-center text-foreground"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Minus className="h-5 w-5" /> : <Plus className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border">
          <div className="container-x py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide text-muted-foreground hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="/cv.pdf"
                className="inline-flex items-center gap-2 h-9 px-4 rounded-full border border-accent/40 text-accent text-[12px] tracking-[0.18em] uppercase"
              >
                <Download className="h-3.5 w-3.5" /> CV
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section id="top" className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden">
      {/* subtle gold glow */}
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[820px] rounded-full opacity-[0.10] blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--gold), transparent)" }}
      />
      <div className="container-x relative">
        <div className="flex items-center gap-3 mb-10">
          <span className="h-px w-10 bg-accent/60" />
          <span className="eyebrow text-accent">Portfolio · 2026</span>
        </div>

        <h1 className="font-display text-[2.6rem] leading-[1.05] sm:text-6xl md:text-[5.25rem] md:leading-[0.98] tracking-[-0.02em] text-foreground">
          Samrawit
          <br />
          <span className="text-accent italic font-light">Tekheste</span>
        </h1>

        <div className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] md:text-[13px] tracking-[0.22em] uppercase text-muted-foreground">
          <span>Business Development</span>
          <span className="text-accent/60">·</span>
          <span>Sustainability</span>
          <span className="text-accent/60">·</span>
          <span>Digital Innovation</span>
        </div>

        <p className="mt-12 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
          I enjoy exploring how businesses, technology, and sustainability
          intersect to create meaningful impact. My work focuses on
          understanding challenges, identifying opportunities, and contributing
          to solutions that create value for both organizations and people.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 h-12 px-7 rounded-full bg-accent text-accent-foreground text-[12px] tracking-[0.22em] uppercase hover:bg-gold-soft transition"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="group inline-flex items-center gap-3 h-12 px-7 rounded-full border border-border text-foreground text-[12px] tracking-[0.22em] uppercase hover:border-accent/60 hover:text-accent transition"
          >
            About Me
          </a>
        </div>

        <div className="mt-20 flex items-center gap-2 text-[12px] tracking-[0.22em] uppercase text-muted-foreground">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          Based in Sweden · Available 2026
        </div>
      </div>
    </section>
  );
}

/* ---------------- Section header ---------------- */

function SectionHeader({
  index,
  eyebrow,
  title,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
}) {
  return (
    <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
      <div className="md:col-span-4 flex items-start gap-4">
        <span className="font-display text-accent text-sm tracking-widest">{index}</span>
        <span className="eyebrow text-accent">{eyebrow}</span>
      </div>
      <h2 className="md:col-span-8 font-display text-3xl md:text-5xl leading-[1.1] tracking-[-0.02em] text-foreground max-w-3xl">
        {title}
      </h2>
    </div>
  );
}

/* ---------------- About ---------------- */

const STRENGTHS = [
  "Business Development",
  "Market Research",
  "Sustainability",
  "Project Coordination",
  "Process Improvement",
  "Digital Solutions",
  "Strategic Thinking",
];

function About() {
  return (
    <section id="about" className="section-pad border-t border-border/60">
      <div className="container-x">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={
            <>
              A business development professional based in Sweden, drawn to{" "}
              <span className="italic text-accent">sustainability,
              innovation,</span> and continuous learning.
            </>
          }
        />

        <div className="grid md:grid-cols-12 gap-12 md:gap-16">
          <div className="md:col-span-7 space-y-6 text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            <p>
              My experience has allowed me to work across business development,
              research, project support, and digital initiatives. I enjoy
              turning information into insights — and helping transform ideas
              into actionable solutions.
            </p>
            <p>
              I'm most engaged when a project sits at the intersection of
              commercial thinking and long-term responsibility: where research
              informs strategy, and small operational improvements compound
              into real impact.
            </p>
          </div>

          <div className="md:col-span-5">
            <div className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground mb-6">
              Core Strengths
            </div>
            <ul className="divide-y divide-border/70 border-y border-border/70">
              {STRENGTHS.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline justify-between py-4 group"
                >
                  <span className="font-display text-lg md:text-xl text-foreground">
                    {s}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground tracking-widest">
                    0{i + 1}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */

type Project = {
  title: string;
  tag: string;
  year: string;
  challenge: string;
  approach: string;
  outcome: string;
  learnings: string;
};

const PROJECTS: Project[] = [
  {
    title: "Sustainable Business Development Initiative",
    tag: "Sustainability · Strategy",
    year: "2025",
    challenge:
      "A growing organization needed to integrate sustainability principles into its commercial development without slowing operational delivery.",
    approach:
      "Mapped current processes, researched relevant frameworks, and proposed a structured set of incremental changes that aligned commercial goals with environmental and social considerations.",
    outcome:
      "A practical roadmap that gave the team a shared language for sustainability and a phased plan that fit existing capacity and budgets.",
    learnings:
      "Sustainability sticks when it's translated into the daily decisions people already make — not added as a separate workstream.",
  },
  {
    title: "Market Research & Opportunity Mapping",
    tag: "Research · Business Development",
    year: "2025",
    challenge:
      "Identify viable growth opportunities in an unfamiliar market segment with limited internal data.",
    approach:
      "Combined desk research, competitor analysis, and structured interviews to build a clear view of customer needs, white space, and entry barriers.",
    outcome:
      "A concise opportunity brief with three prioritized directions, a sizing estimate, and a recommended first step for validation.",
    learnings:
      "Good research is less about volume of data and more about asking the question that reframes the decision.",
  },
  {
    title: "Digital Workflow Improvement",
    tag: "Digital · Process",
    year: "2024",
    challenge:
      "A fragmented workflow was creating duplicated work and delaying internal reporting.",
    approach:
      "Documented the existing process end-to-end, identified the friction points, and prototyped a lightweight digital workflow using accessible tools.",
    outcome:
      "Reduced manual handoffs, faster reporting cycles, and a workflow the team could maintain themselves.",
    learnings:
      "The right digital solution is often the smallest one — proportional to the team that has to live with it.",
  },
  {
    title: "Project Coordination — Cross-Functional Initiative",
    tag: "Coordination · Operations",
    year: "2024",
    challenge:
      "Coordinate a project spanning multiple stakeholders with different priorities and reporting needs.",
    approach:
      "Established a clear cadence, single source of truth, and lightweight status format that respected each stakeholder's context.",
    outcome:
      "On-time delivery, fewer status meetings, and clearer accountability across contributors.",
    learnings:
      "Coordination is mostly communication design — the structure you choose determines what people will actually read.",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  const [open, setOpen] = useState(false);
  return (
    <article className="border-t border-border/70 py-10 md:py-14 group">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full grid md:grid-cols-12 gap-6 text-left"
      >
        <div className="md:col-span-1 font-mono text-[11px] tracking-widest text-muted-foreground pt-2">
          {String(i + 1).padStart(2, "0")}
        </div>
        <div className="md:col-span-7">
          <h3 className="font-display text-2xl md:text-3xl leading-tight text-foreground group-hover:text-accent transition">
            {p.title}
          </h3>
          <div className="mt-3 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            {p.tag}
          </div>
        </div>
        <div className="md:col-span-3 font-mono text-[11px] tracking-widest text-muted-foreground md:text-right pt-2">
          {p.year}
        </div>
        <div className="md:col-span-1 md:justify-self-end pt-1">
          <span className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground group-hover:border-accent/60 group-hover:text-accent transition">
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100 mt-10" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12">
            <div className="md:col-start-3 md:col-span-9 grid sm:grid-cols-2 gap-x-12 gap-y-8">
              {[
                ["Challenge", p.challenge],
                ["Approach", p.approach],
                ["Outcome", p.outcome],
                ["Key Learnings", p.learnings],
              ].map(([label, body]) => (
                <div key={label}>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
                    {label}
                  </div>
                  <p className="text-[15px] leading-relaxed text-muted-foreground font-light">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function Portfolio_() {
  return (
    <section id="portfolio" className="section-pad border-t border-border/60">
      <div className="container-x">
        <SectionHeader
          index="02"
          eyebrow="Portfolio"
          title={
            <>
              Case studies in <span className="italic text-accent">research,
              strategy,</span> and digital problem-solving.
            </>
          }
        />
        <div>
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
          <div className="border-t border-border/70" />
        </div>
      </div>
    </section>
  );
}

/* ---------------- Experience ---------------- */

const EXPERIENCE = [
  {
    role: "Business Development Intern",
    org: "Confidential · Sweden",
    period: "2025",
    detail:
      "Supported market research, opportunity mapping, and partner outreach for growth initiatives — translating findings into briefs that informed commercial decisions.",
  },
  {
    role: "Sustainability Project Contributor",
    org: "Independent & Academic Projects",
    period: "2024 — 2025",
    detail:
      "Researched sustainability frameworks and contributed structured proposals on how organizations can integrate them into commercial workflows.",
  },
  {
    role: "Research Assistant",
    org: "Academic & Applied Research",
    period: "2024",
    detail:
      "Conducted desk and field research, synthesized findings, and produced clear, decision-ready summaries for stakeholders.",
  },
  {
    role: "Digital Solutions Contributor",
    org: "Cross-Functional Projects",
    period: "2023 — 2024",
    detail:
      "Helped prototype and document lightweight digital workflows that improved coordination and reporting across small teams.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-border/60">
      <div className="container-x">
        <SectionHeader
          index="03"
          eyebrow="Experience"
          title={
            <>
              A foundation built across business development, research, and{" "}
              <span className="italic text-accent">digital initiatives.</span>
            </>
          }
        />

        <ol className="relative">
          {EXPERIENCE.map((e, i) => (
            <li
              key={e.role}
              className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-border/70 py-10 md:py-12"
            >
              <div className="md:col-span-2 font-mono text-[11px] tracking-widest text-accent">
                {e.period}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-xl md:text-2xl text-foreground leading-tight">
                  {e.role}
                </h3>
                <div className="mt-2 text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
                  {e.org}
                </div>
              </div>
              <p className="md:col-span-6 text-[15px] leading-relaxed text-muted-foreground font-light">
                {e.detail}
              </p>
              <span className="hidden">{i}</span>
            </li>
          ))}
          <div className="border-t border-border/70" />
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border/60">
      <div className="container-x">
        <SectionHeader
          index="04"
          eyebrow="Contact"
          title={
            <>
              Open to roles, collaborations, and{" "}
              <span className="italic text-accent">thoughtful conversations.</span>
            </>
          }
        />

        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground font-light max-w-xl">
              If you're working on something at the intersection of business
              development, sustainability, or digital innovation, I'd be glad
              to hear about it.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="group mt-12 inline-flex items-baseline gap-4 font-display text-3xl md:text-5xl text-foreground hover:text-accent transition"
            >
              {EMAIL}
              <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 text-accent transition group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="md:col-span-5 md:border-l md:border-border/70 md:pl-12 space-y-8">
            <ContactRow
              label="Email"
              value={EMAIL}
              href={`mailto:${EMAIL}`}
              icon={<Mail className="h-4 w-4" />}
            />
            <ContactRow
              label="LinkedIn"
              value="in/samrawit-tekheste"
              href={LINKEDIN_URL}
              icon={<Linkedin className="h-4 w-4" />}
              external
            />
            <ContactRow
              label="CV"
              value="Download PDF"
              href="/cv.pdf"
              icon={<Download className="h-4 w-4" />}
            />
            <ContactRow
              label="Location"
              value="Sweden"
              icon={<MapPin className="h-4 w-4" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  label,
  value,
  href,
  icon,
  external,
}: {
  label: string;
  value: string;
  href?: string;
  icon: React.ReactNode;
  external?: boolean;
}) {
  const inner = (
    <div className="flex items-center justify-between py-4 border-b border-border/70 group">
      <div className="flex items-center gap-4">
        <span className="h-9 w-9 grid place-items-center rounded-full border border-border text-accent">
          {icon}
        </span>
        <div>
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {label}
          </div>
          <div className="text-foreground group-hover:text-accent transition">
            {value}
          </div>
        </div>
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition" />
      )}
    </div>
  );
  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="container-x py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-sm tracking-[0.22em] uppercase text-foreground">
            Samrawit Tekheste
          </span>
          <span className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div className="text-[11px] tracking-[0.25em] uppercase text-muted-foreground">
          Business Development · Sustainability · Digital Innovation
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Page ---------------- */

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/30 selection:text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Portfolio_ />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
