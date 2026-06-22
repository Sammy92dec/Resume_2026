import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Linkedin, Download, MapPin, Mail, ArrowRight, Sprout, BarChart3, Handshake } from "lucide-react";
import portrait from "@/assets/sam-portrait.jpg";
import projFuture from "@/assets/project-future.jpg";
import projCommunity from "@/assets/project-community.jpg";
import projBusiness from "@/assets/project-business.jpg";
import projBlockchain from "@/assets/project-blockchain.jpg";

const LINKEDIN_URL = "https://www.linkedin.com/in/samrawit-tekheste/";
const EMAIL = "samrawit.samuel.tk@gmail.com";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samrawit Tekheste — Junior Business Developer in Stockholm" },
      {
        name: "description",
        content:
          "Samrawit (Sam) Tekheste — Junior Business Developer in Stockholm. Market research, partnerships, community-driven growth, and data-informed strategy.",
      },
      { property: "og:title", content: "Samrawit Tekheste — Junior Business Developer" },
      {
        property: "og:description",
        content:
          "Turning research, relationships, and opportunities into meaningful growth.",
      },
    ],
  }),
  component: Portfolio,
});

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#journey", label: "Journey" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="container-x grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 min-w-0">
          <span className="font-display text-lg md:text-xl tracking-tight text-foreground truncate">
            Samrawit Tekheste<span className="text-accent">.</span>
          </span>
        </a>
        <div className="flex items-center gap-2 md:gap-6">
          <nav className="hidden md:flex items-center gap-7">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-foreground/75 hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn profile"
            className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground/70 hover:text-foreground hover:border-foreground/40 transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="/Samrawit-Tekheste-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-4 md:px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
          >
            <Download size={14} />
            <span className="hidden sm:inline">Resume</span>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const tags = [
    { icon: MapPin, label: "Stockholm" },
    { icon: Sprout, label: "Sustainability" },
    { icon: BarChart3, label: "Market Research" },
    { icon: Handshake, label: "Partnerships" },
  ];
  return (
    <section id="top" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-clay) 0%, transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-secondary -rotate-2"
              />
              <div className="relative overflow-hidden rounded-[1.75rem] aspect-[4/5] bg-muted">
                <img
                  src={portrait}
                  alt="Samrawit Tekheste, Junior Business Developer based in Stockholm"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-3 md:-right-5 bg-background border border-border rounded-2xl px-4 py-3 shadow-sm">
                <p className="text-xs text-muted-foreground">Based in</p>
                <p className="text-sm font-medium">Stockholm, Sweden</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 order-2">
            <p className="eyebrow mb-5">Stockholm · Business Development</p>
            <h1 className="text-[2.1rem] leading-[1.08] sm:text-4xl md:text-5xl lg:text-[3.5rem] text-foreground">
              Turning <em className="not-italic text-primary">research</em>,{" "}
              <em className="not-italic text-accent">relationships</em>, and opportunities into
              meaningful growth.
            </h1>
            <p className="mt-7 text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed">
              Hi, I'm Samrawit — most people call me Sam. I'm a Junior Business Developer
              passionate about market analysis, partnerships, and community-driven growth. I
              enjoy helping organizations uncover opportunities, strengthen relationships, and
              turn ideas into action.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                View Projects
                <ArrowRight size={16} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Let's Connect
              </a>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-foreground/70">
              {tags.map((t) => (
                <span key={t.label} className="inline-flex items-center gap-1.5">
                  <t.icon size={14} className="text-accent" />
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <span className="font-display text-accent text-lg">{num}</span>
      <span className="h-px flex-1 bg-border max-w-[3rem]" />
      <span className="eyebrow">{label}</span>
    </div>
  );
}

function About() {
  return (
    <section id="about" className="section-pad bg-secondary/40">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel num="01" label="About" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              A curious business developer building a career around growth, people, and impact.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-16 space-y-5 text-foreground/80 text-base md:text-lg leading-relaxed">
            <p>
              I'm Samrawit Tekheste — a Stockholm-based Junior Business Developer who combines
              market research, partnership development, community building, and data-informed
              decision making.
            </p>
            <p>
              I'm known for turning curiosity into action: spotting patterns in research,
              connecting the right people, and helping teams move from insight to opportunity.
              My approach is analytical, but always human.
            </p>
            <p className="font-display text-xl text-foreground/85 italic">
              I'm most useful where strategy meets people — where understanding a market also
              means understanding the humans inside it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Journey() {
  const steps = [
    {
      role: "Personal Trainer",
      note: "Learned how habits, motivation, and trust shape long-term outcomes.",
    },
    {
      role: "Customer Service",
      note: "Built empathy, communication, and the instinct to listen before solving.",
    },
    {
      role: "Data Analytics",
      note: "Upskilled in SQL, Excel, and research methods — turning data into decisions.",
    },
    {
      role: "Business Development",
      note: "Certified through Hyper Island. Market analysis, strategy, and stakeholder engagement.",
    },
    {
      role: "Partnerships & Growth",
      note: "Building communities and partnerships around sustainability and innovation.",
    },
  ];
  return (
    <section id="journey" className="section-pad">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel num="02" label="Journey" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              A non-linear path — by design.
            </h2>
            <p className="mt-6 text-foreground/75 leading-relaxed max-w-md">
              Each chapter has added a different lens: people, service, data, strategy, and
              partnerships. Continuous reinvention isn't a detour — it's how I learn.
            </p>
          </div>
          <ol className="md:col-span-7 relative border-l border-border/70 pl-8 space-y-9">
            {steps.map((s, i) => (
              <li key={s.role} className="relative">
                <span className="absolute -left-[2.55rem] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-background" />
                <div className="flex items-baseline gap-3">
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

function Projects() {
  const projects = [
    {
      img: projCommunity,
      tag: "Community",
      title: "Community Impact Initiative",
      challenge: "Bring organizations and women-focused networks around a shared impact agenda.",
      approach:
        "Partnered with PWN Copenhagen, Pool Collective, and others to design programming, outreach, and storytelling.",
      insight: "Meaningful partnerships are built on shared outcomes, not shared logos.",
      result: "An engaged, connected community aligned on purpose and follow-through.",
      skills: ["Partnerships", "Community", "Communication"],
    },
    {
      img: projFuture,
      tag: "Innovation",
      title: "Future-Proof Project",
      challenge:
        "Help a forward-looking team prepare for shifting market conditions and emerging trends.",
      approach:
        "Mapped competitive forces, ran trend analysis, and co-designed a strategic readiness framework.",
      insight: "Readiness is less about predicting the future and more about staying flexible.",
      result: "A shared roadmap for innovation priorities and stakeholder alignment.",
      skills: ["Strategy", "Trend research", "Stakeholder engagement"],
    },
    {
      img: projBlockchain,
      tag: "Sustainability",
      title: "Blockchain & Sustainability Research",
      challenge: "Explore how emerging technologies can accelerate sustainable innovation.",
      approach:
        "Researched sustainability trends, mapped use cases, and surfaced opportunities for future-focused business models.",
      insight: "The most interesting opportunities sit at the intersection of tech and impact.",
      result: "A foundation of insight for teams operating where innovation meets responsibility.",
      skills: ["Research", "Sustainability", "Innovation"],
    },
    {
      img: projBusiness,
      tag: "Business Development",
      title: "Market Analysis Projects",
      challenge: "Identify growth levers for organizations across sectors.",
      approach:
        "Conducted competitor research, SWOT and trend analysis, and built strategic recommendations.",
      insight: "Good recommendations start with the right question, not the prettiest dataset.",
      result: "Clear, actionable insights that supported confident decision-making.",
      skills: ["Market analysis", "Competitor research", "SWOT"],
    },
  ];
  return (
    <section id="projects" className="section-pad bg-secondary/40">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <SectionLabel num="03" label="Projects" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              Selected work across strategy, community, and research.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            A snapshot of collaborations across sustainability, innovation, community, and
            business development.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="grid md:grid-cols-12 gap-6 md:gap-10 bg-card border border-border rounded-3xl p-5 md:p-8 lg:p-10 hover:border-accent/40 hover:shadow-[0_20px_50px_-30px_oklch(0.4_0.05_60/0.4)] transition-all cursor-pointer"
            >
              <div
                className={`md:col-span-5 ${
                  i % 2 === 1 ? "md:order-2" : ""
                } relative overflow-hidden rounded-2xl aspect-[4/3] bg-muted`}
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
                />
              </div>
              <div className="md:col-span-7 flex flex-col justify-center min-w-0">
                <span className="eyebrow mb-3">{p.tag}</span>
                <h3 className="font-display text-2xl md:text-3xl lg:text-[2rem] text-foreground mb-5">
                  {p.title}
                </h3>
                <dl className="space-y-3 text-sm md:text-base">
                  {[
                    ["Challenge", p.challenge],
                    ["Approach", p.approach],
                    ["Insight", p.insight],
                    ["Result", p.result],
                  ].map(([k, v]) => (
                    <div key={k} className="grid grid-cols-[5.5rem_1fr] gap-4">
                      <dt className="text-muted-foreground">{k}</dt>
                      <dd className="text-foreground/85">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex flex-wrap gap-2">
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatIBring() {
  const cards = [
    {
      title: "Strategic Thinking",
      body: "I connect research and business goals to identify opportunities others miss.",
    },
    {
      title: "Relationship Building",
      body: "I enjoy creating partnerships and collaborative solutions that compound over time.",
    },
    {
      title: "Growth Mindset",
      body: "I actively seek new challenges, new tools, and new ways to think about problems.",
    },
    {
      title: "Data-Informed Decisions",
      body: "I combine analytical thinking with human understanding — numbers and nuance.",
    },
  ];
  return (
    <section
      className="section-pad text-cream relative overflow-hidden"
      style={{ backgroundColor: "var(--color-olive)" }}
    >
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-cream/80 text-lg">04</span>
            <span className="h-px flex-1 bg-cream/20 max-w-[3rem]" />
            <span className="text-xs tracking-[0.22em] uppercase font-medium text-cream/70">
              What I Bring
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-cream">
            Curious mind. Strategic thinker. Action-oriented contributor.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <div
              key={c.title}
              className="border border-cream/15 bg-cream/[0.04] rounded-3xl p-7 md:p-8 backdrop-blur-sm"
            >
              <span className="font-display text-cream/40 text-sm">
                /{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-2 font-display text-2xl text-cream mb-3">{c.title}</h3>
              <p className="text-cream/75 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const groups = [
    {
      title: "Business Development",
      items: [
        "Market Research",
        "SWOT Analysis",
        "Competitor Analysis",
        "Partnership Development",
        "Stakeholder Engagement",
        "Brand Strategy",
      ],
    },
    {
      title: "Data & Analytics",
      items: ["SQL", "Power BI", "Excel", "Data Analytics", "Research Methods", "Data Storytelling"],
    },
    {
      title: "People & Communication",
      items: [
        "Community Building",
        "Project Coordination",
        "Strategic Communication",
        "Collaboration",
        "Storytelling",
      ],
    },
  ];
  return (
    <section id="skills" className="section-pad">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionLabel num="05" label="Skills" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            The toolkit behind the work.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6 md:gap-8">
          {groups.map((g) => (
            <div
              key={g.title}
              className="bg-card border border-border rounded-3xl p-7 md:p-8"
            >
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

function BeyondResume() {
  const items = [
    { label: "Running", note: "Long runs, steady habits, learning by doing." },
    { label: "Learning", note: "Always one course, book, or rabbit hole deep." },
    { label: "Sustainability", note: "Curious about how business can do better." },
    { label: "Technology", note: "Blockchain, AI, and what's next." },
    { label: "Community Building", note: "Bringing people together around shared ideas." },
    { label: "Personal Growth", note: "Reinventing the chapter, not just the title." },
  ];
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-x">
        <div className="max-w-3xl mb-12">
          <SectionLabel num="06" label="Personal" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            Beyond the resume.
          </h2>
          <p className="mt-6 text-foreground/75 leading-relaxed">
            A few things that shape how I think, work, and show up.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it) => (
            <div
              key={it.label}
              className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-colors"
            >
              <h3 className="font-display text-xl text-foreground mb-2">{it.label}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed">{it.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.22em] uppercase text-cream/60 mb-6">
              07 — Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              Let's build something meaningful.
            </h2>
            <p className="mt-8 text-cream/70 text-base md:text-lg max-w-xl leading-relaxed">
              I'm open to roles, collaborations, and conversations in business development,
              partnerships, growth, and sustainability — especially with teams that care about
              the why behind the work.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-cream/5 border border-cream/15 rounded-3xl p-7 md:p-9 backdrop-blur-sm">
              <p className="text-cream/60 text-xs tracking-[0.18em] uppercase mb-6">
                Get in touch
              </p>

              <a href={`mailto:${EMAIL}`} className="block group">
                <p className="text-cream/50 text-xs mb-1 flex items-center gap-2">
                  <Mail size={12} /> Email
                </p>
                <p className="font-display text-lg md:text-xl text-cream group-hover:text-accent transition-colors break-all">
                  {EMAIL}
                </p>
              </a>

              <div className="my-6 h-px bg-cream/15" />

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="block group"
              >
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
          <p>Junior Business Developer · Partnerships · Market Research · Growth</p>
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <WhatIBring />
        <Skills />
        <BeyondResume />
        <Contact />
      </main>
    </div>
  );
}
