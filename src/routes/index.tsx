import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  Linkedin,
  Download,
  Mail,
  ArrowRight,
  ArrowUpRight,
  Plus,
  Minus,
  MapPin,
  FileText,
  Play,
  ExternalLink,
  Presentation,
  Image as ImageIcon,
} from "lucide-react";
import { PROJECTS, type Project, type Evidence } from "@/data/projects";
import { Lightbox, type LightboxImage } from "@/components/Lightbox";

const LINKEDIN_URL = "https://www.linkedin.com/in/samrawit-tekheste/";
const EMAIL = "samrawit.samuel.tk@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samrawit Tekheste · Business Development Portfolio" },
      {
        name: "description",
        content:
          "Samrawit Tekheste, an early-career Business Development professional based in Stockholm, Sweden, with interests in digital innovation, market research, business strategy, and sustainable business development.",
      },
      { property: "og:title", content: "Samrawit Tekheste · Business Development Portfolio" },
      {
        property: "og:description",
        content:
          "Early-career Business Development professional based in Stockholm, Sweden.",
      },
    ],
  }),
  component: Portfolio,
});

/* ---------------- Nav ---------------- */

const NAV = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Skills", href: "#skills" },
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
          ? "bg-background/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="font-display text-base md:text-lg tracking-[0.18em] uppercase text-foreground">
          Samrawit <span className="text-muted-foreground font-light">Tekheste</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-[13px] tracking-wide text-muted-foreground hover:text-accent transition-colors"
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
            className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground hover:text-accent hover:border-accent/50 transition"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/cv.pdf"
            className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-accent text-accent-foreground text-[11px] tracking-[0.18em] uppercase hover:opacity-90 transition"
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
        <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
          <div className="container-x py-6 flex flex-col gap-5">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-sm tracking-wide text-muted-foreground hover:text-accent"
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
                className="inline-flex items-center gap-2 h-9 px-4 rounded-full bg-accent text-accent-foreground text-[11px] tracking-[0.18em] uppercase"
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
    <section id="top" className="relative pt-32 md:pt-40 pb-20 md:pb-28">
      <div className="container-x relative">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-accent/60" />
          <span className="eyebrow text-accent">Portfolio · 2026</span>
        </div>

        <h1 className="font-display text-[2.5rem] leading-[1.05] sm:text-6xl md:text-[5rem] md:leading-[1.0] tracking-[-0.02em] text-foreground max-w-4xl">
          Samrawit Tekheste
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl leading-relaxed text-muted-foreground font-light">
          Business Development professional based in{" "}
          <span className="text-foreground">Stockholm, Sweden</span>, with interests in{" "}
          <span className="text-foreground">digital innovation, market research, business strategy, and sustainable business development</span>.
          Passionate about solving business problems through research, analysis, and practical solutions.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="#portfolio"
            className="group inline-flex items-center gap-3 h-12 px-7 rounded-full bg-accent text-accent-foreground text-[12px] tracking-[0.2em] uppercase hover:opacity-90 transition"
          >
            View Portfolio
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#about"
            className="group inline-flex items-center gap-3 h-12 px-7 rounded-full border border-border text-foreground text-[12px] tracking-[0.2em] uppercase hover:border-accent/50 hover:text-accent transition"
          >
            About Me
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 h-12 px-7 rounded-full border border-border text-foreground text-[12px] tracking-[0.2em] uppercase hover:border-accent/50 hover:text-accent transition"
          >
            View CV
            <ExternalLink className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href="/cv.pdf"
            download="Samrawit-Tekheste-CV.pdf"
            className="group inline-flex items-center gap-3 h-12 px-7 rounded-full border border-border text-foreground text-[12px] tracking-[0.2em] uppercase hover:border-accent/50 hover:text-accent transition"
          >
            Download CV
            <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 h-12 px-7 rounded-full border border-border text-foreground text-[12px] tracking-[0.2em] uppercase hover:border-accent/50 hover:text-accent transition"
          >
            LinkedIn
            <Linkedin className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-16 flex flex-wrap items-center gap-x-6 gap-y-3 text-[12px] tracking-[0.2em] uppercase text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5 text-accent" /> Based in Stockholm, Sweden
          </span>
          <span className="h-px w-6 bg-border" />
          <span>Open to opportunities</span>
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
    <div className="grid md:grid-cols-12 gap-8 md:gap-12 mb-14 md:mb-20">
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

function About() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="container-x">
        <SectionHeader
          index="01"
          eyebrow="About"
          title={
            <>
              Curious about how businesses, people, and{" "}
              <span className="italic text-accent">practical ideas</span>{" "}
              come together.
            </>
          }
        />

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-muted-foreground font-light">
            <p>
              I enjoy understanding how organizations work and identifying
              practical opportunities for improvement through research,
              collaboration, and structured problem-solving.
            </p>
            <p>
              My interests include business development, digital innovation,
              market research, process improvement, and sustainable business
              practices. Sustainability is an area of personal interest that I
              continue to explore rather than a primary specialization.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="card-paper p-6">
              <div className="eyebrow mb-4">Quick facts</div>
              <dl className="space-y-3 text-sm">
                <Fact k="Location" v="Stockholm, Sweden" />
                <Fact k="Focus" v="Business Development" />
                <Fact k="Interests" v="Digital Innovation · Market Research · Sustainable Business" />
                <Fact k="Open to" v="Full-time Opportunities" />
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-border pb-2 last:border-0 last:pb-0">
      <dt className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{k}</dt>
      <dd className="text-foreground text-right">{v}</dd>
    </div>
  );
}

/* ---------------- Experience ---------------- */

const EXPERIENCE = [
  {
    role: "Business Development Intern",
    org: "Stockholm, Sweden",
    period: "2025",
    detail:
      "Supported market research, opportunity analysis, competitor research, and partner outreach while contributing to business development activities.",
  },
  {
    role: "Sustainability Project Contributor",
    org: "Independent and Academic Projects",
    period: "2024 · 2025",
    detail:
      "Researched sustainable business practices and explored how sustainability can support business development and long-term organizational value through project and academic work.",
  },
  {
    role: "Research Assistant",
    org: "Academic & Applied Research",
    period: "2024",
    detail:
      "Conducted desk and field research, synthesized findings, and produced clear, decision-ready summaries as part of academic and applied research projects.",
  },
  {
    role: "Digital Solutions Contributor",
    org: "Cross-Functional Academic Projects",
    period: "2023 · 2024",
    detail:
      "Collaborated on academic team projects to document workflows, prototype lightweight digital improvements, and support coordination and reporting.",
  },
];

function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-border">
      <div className="container-x">
        <SectionHeader
          index="02"
          eyebrow="Experience"
          title={
            <>
              A foundation built across business development, research, and{" "}
              <span className="italic text-accent">digital initiatives.</span>
            </>
          }
        />

        <ol className="relative">
          {EXPERIENCE.map((e) => (
            <li
              key={e.role}
              className="grid md:grid-cols-12 gap-6 md:gap-10 border-t border-border py-8 md:py-10 last:border-b"
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
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------- Portfolio ---------------- */

function PortfolioSection({
  onOpenLightbox,
}: {
  onOpenLightbox: (imgs: LightboxImage[], start: number) => void;
}) {
  return (
    <section id="portfolio" className="section-pad border-t border-border bg-muted/40">
      <div className="container-x">
        <SectionHeader
          index="03"
          eyebrow="Portfolio"
          title={
            <>
              Case studies in <span className="italic text-accent">research,
              strategy,</span> and digital problem-solving.
            </>
          }
        />
        <div className="grid gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.slug} p={p} i={i} onOpenLightbox={onOpenLightbox} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  p,
  i,
  onOpenLightbox,
}: {
  p: Project;
  i: number;
  onOpenLightbox: (imgs: LightboxImage[], start: number) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <article className="card-paper overflow-hidden transition hover:shadow-[0_8px_30px_-12px_oklch(0.24_0.012_60/0.12)]">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full grid md:grid-cols-12 gap-6 text-left p-6 md:p-8 group"
      >
        <div className="md:col-span-1 font-mono text-[11px] tracking-widest text-muted-foreground pt-2">
          {String(i + 1).padStart(2, "0")}
        </div>
        <div className="md:col-span-7">
          <h3 className="font-display text-2xl md:text-[1.75rem] leading-tight text-foreground group-hover:text-accent transition">
            {p.title}
          </h3>
          <div className="mt-3 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
            {p.tag}
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground font-light max-w-2xl">
            {p.overview}
          </p>
        </div>
        <div className="md:col-span-3 font-mono text-[11px] tracking-widest text-muted-foreground md:text-right pt-2">
          {p.year}
        </div>
        <div className="md:col-span-1 md:justify-self-end pt-1">
          <span className="h-9 w-9 grid place-items-center rounded-full border border-border text-muted-foreground group-hover:border-accent/50 group-hover:text-accent transition">
            {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          </span>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border p-6 md:p-10 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-7 space-y-8">
              <CaseBlock label="Challenge" body={p.challenge} />
              <CaseBlock label="My Role" body={p.role} />
              <CaseListBlock label="Actions Taken" items={p.actions} />
              <CaseListBlock label="Results" items={p.results} />
              <CaseBlock label="Key Learnings" body={p.learnings} />
            </div>

            <div className="md:col-span-5 space-y-8">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
                  Skills Used
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.skills.map((s) => (
                    <span
                      key={s}
                      className="text-[12px] px-3 py-1.5 rounded-full bg-muted text-foreground border border-border"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <EvidenceGallery
                slug={p.slug}
                evidence={p.evidence}
                onOpenLightbox={onOpenLightbox}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function CaseBlock({ label, body }: { label: string; body: string }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">{label}</div>
      <p className="text-[15px] leading-relaxed text-muted-foreground font-light">{body}</p>
    </div>
  );
}

function CaseListBlock({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">{label}</div>
      <ul className="space-y-2">
        {items.map((it) => (
          <li
            key={it}
            className="text-[15px] leading-relaxed text-muted-foreground font-light pl-5 relative"
          >
            <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-accent/70" />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ---------------- Evidence Gallery ---------------- */

function EvidenceGallery({
  slug,
  evidence,
  onOpenLightbox,
}: {
  slug: string;
  evidence: Evidence[];
  onOpenLightbox: (imgs: LightboxImage[], start: number) => void;
}) {
  const images = useMemo<LightboxImage[]>(
    () =>
      evidence
        .filter((e): e is Extract<Evidence, { kind: "image" }> => e.kind === "image")
        .map((e) => ({ src: e.src, caption: e.caption })),
    [evidence],
  );

  return (
    <div>
      <div className="text-[10px] tracking-[0.3em] uppercase text-accent mb-3">
        Evidence Gallery
      </div>

      {evidence.length === 0 ? (
        <EvidencePlaceholder slug={slug} />
      ) : (
        <div className="grid grid-cols-2 gap-3">
          {evidence.map((ev, idx) => (
            <EvidenceItem
              key={idx}
              ev={ev}
              onImageClick={() => {
                const imgIndex = images.findIndex(
                  (im) => ev.kind === "image" && im.src === ev.src,
                );
                if (imgIndex >= 0) onOpenLightbox(images, imgIndex);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function EvidencePlaceholder({ slug }: { slug: string }) {
  return (
    <div className="border border-dashed border-border rounded-lg p-5 text-[13px] leading-relaxed text-muted-foreground font-light bg-muted/40">
      <div className="flex items-start gap-3">
        <ImageIcon className="h-4 w-4 mt-0.5 text-accent shrink-0" />
        <div>
          <div className="text-foreground mb-1">Project files will appear here.</div>
          <p>
            Photos, videos, PDFs, slides, and certificates from this project
            go in{" "}
            <code className="font-mono text-[12px] text-foreground bg-background px-1.5 py-0.5 rounded border border-border">
              public/case-studies/{slug}/
            </code>{" "}
            and are listed in{" "}
            <code className="font-mono text-[12px] text-foreground bg-background px-1.5 py-0.5 rounded border border-border">
              src/data/projects.ts
            </code>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function EvidenceItem({
  ev,
  onImageClick,
}: {
  ev: Evidence;
  onImageClick: () => void;
}) {
  if (ev.kind === "image") {
    return (
      <button
        onClick={onImageClick}
        className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-muted"
      >
        <img
          src={ev.src}
          alt={ev.caption || ""}
          className="h-full w-full object-cover transition group-hover:scale-[1.03]"
          loading="lazy"
        />
        {ev.caption && (
          <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent text-paper text-[11px] p-2 opacity-0 group-hover:opacity-100 transition">
            {ev.caption}
          </span>
        )}
      </button>
    );
  }
  if (ev.kind === "video") {
    return (
      <div className="col-span-2 aspect-video overflow-hidden rounded-lg border border-border bg-ink">
        <video
          src={ev.src}
          poster={ev.poster}
          controls
          className="h-full w-full"
          preload="metadata"
        />
      </div>
    );
  }
  if (ev.kind === "youtube") {
    return (
      <div className="col-span-2 aspect-video overflow-hidden rounded-lg border border-border bg-ink">
        <iframe
          src={`https://www.youtube.com/embed/${ev.id}`}
          title={ev.caption || "Video"}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }
  if (ev.kind === "pdf") {
    return (
      <a
        href={ev.src}
        target="_blank"
        rel="noreferrer"
        className="col-span-2 group flex items-center gap-3 rounded-lg border border-border p-4 bg-muted hover:border-accent/50 hover:bg-paper transition"
      >
        <FileText className="h-5 w-5 text-accent shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="text-[13px] text-foreground truncate">{ev.label}</div>
          {ev.caption && (
            <div className="text-[11px] text-muted-foreground truncate">{ev.caption}</div>
          )}
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
      </a>
    );
  }
  if (ev.kind === "slides") {
    const isEmbed = /\/embed|presentation\/d\/.+\/embed|slideshare/.test(ev.src);
    if (isEmbed) {
      return (
        <div className="col-span-2 aspect-video overflow-hidden rounded-lg border border-border bg-ink">
          <iframe
            src={ev.src}
            title={ev.label}
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      );
    }
    return (
      <a
        href={ev.src}
        target="_blank"
        rel="noreferrer"
        className="col-span-2 group flex items-center gap-3 rounded-lg border border-border p-4 bg-muted hover:border-accent/50 hover:bg-paper transition"
      >
        <Presentation className="h-5 w-5 text-accent shrink-0" />
        <div className="flex-1 min-w-0">
          <div className="text-[13px] text-foreground truncate">{ev.label}</div>
          {ev.caption && (
            <div className="text-[11px] text-muted-foreground truncate">{ev.caption}</div>
          )}
        </div>
        <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
      </a>
    );
  }
  // link
  return (
    <a
      href={ev.href}
      target="_blank"
      rel="noreferrer"
      className="col-span-2 group flex items-center gap-3 rounded-lg border border-border p-4 bg-muted hover:border-accent/50 hover:bg-paper transition"
    >
      <Play className="h-5 w-5 text-accent shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="text-[13px] text-foreground truncate">{ev.label}</div>
        {ev.caption && (
          <div className="text-[11px] text-muted-foreground truncate">{ev.caption}</div>
        )}
      </div>
      <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent" />
    </a>
  );
}

/* ---------------- Skills ---------------- */

const SKILL_GROUPS = [
  {
    title: "Business & Strategy",
    items: [
      "Business Development",
      "Market Research",
      "Competitor Analysis",
      "Opportunity Mapping",
      "Strategic Writing",
    ],
  },
  {
    title: "Sustainability & Innovation",
    items: [
      "Sustainability Frameworks",
      "Process Improvement",
      "Stakeholder Analysis",
      "Roadmapping",
    ],
  },
  {
    title: "Digital & Analytical",
    items: [
      "Data-Informed Thinking",
      "Digital Workflows",
      "Prototyping",
      "Reporting & Documentation",
    ],
  },
  {
    title: "Ways of Working",
    items: [
      "Project Coordination",
      "Stakeholder Communication",
      "Cross-Functional Collaboration",
      "Structured Problem Solving",
    ],
  },
];

function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-border">
      <div className="container-x">
        <SectionHeader
          index="04"
          eyebrow="Skills"
          title={
            <>
              Skills built through{" "}
              <span className="italic text-accent">research, projects,</span>{" "}
              and continuous learning.
            </>
          }
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_GROUPS.map((g) => (
            <div key={g.title} className="card-paper p-6">
              <h3 className="font-display text-lg text-foreground mb-4">{g.title}</h3>
              <ul className="space-y-2.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="text-[14px] text-muted-foreground font-light pl-4 relative"
                  >
                    <span className="absolute left-0 top-2 h-1 w-1 rounded-full bg-accent/70" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */

function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-border bg-muted/40">
      <div className="container-x">
        <SectionHeader
          index="05"
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
              className="group mt-10 inline-flex items-baseline gap-4 font-display text-2xl md:text-4xl text-foreground hover:text-accent transition break-all"
            >
              {EMAIL}
              <ArrowUpRight className="h-6 w-6 md:h-8 md:w-8 text-accent transition group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0" />
            </a>
          </div>

          <div className="md:col-span-5 md:border-l md:border-border md:pl-12 space-y-2">
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
              value="Stockholm, Sweden"
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
    <div className="flex items-center justify-between py-4 border-b border-border group">
      <div className="flex items-center gap-4 min-w-0">
        <span className="h-9 w-9 grid place-items-center rounded-full border border-border text-accent shrink-0">
          {icon}
        </span>
        <div className="min-w-0">
          <div className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">
            {label}
          </div>
          <div className="text-foreground group-hover:text-accent transition truncate">
            {value}
          </div>
        </div>
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition shrink-0" />
      )}
    </div>
  );
  if (!href) return inner;
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block"
    >
      {inner}
    </a>
  );
}

/* ---------------- Footer ---------------- */

function Footer() {
  return (
    <footer className="border-t border-border">
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
  const [lightbox, setLightbox] = useState<{
    images: LightboxImage[];
    index: number;
  } | null>(null);

  const openLightbox = (images: LightboxImage[], index: number) =>
    setLightbox({ images, index });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased selection:bg-accent/20 selection:text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <PortfolioSection onOpenLightbox={openLightbox} />
        <Skills />
        <Contact />
      </main>
      <Footer />

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          onClose={() => setLightbox(null)}
          onPrev={() =>
            setLightbox((l) =>
              l ? { ...l, index: (l.index - 1 + l.images.length) % l.images.length } : l,
            )
          }
          onNext={() =>
            setLightbox((l) =>
              l ? { ...l, index: (l.index + 1) % l.images.length } : l,
            )
          }
        />
      )}
    </div>
  );
}
