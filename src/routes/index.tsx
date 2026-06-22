import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "@/assets/sam-portrait.jpg";
import projFuture from "@/assets/project-future.jpg";
import projCommunity from "@/assets/project-community.jpg";
import projBusiness from "@/assets/project-business.jpg";
import projBlockchain from "@/assets/project-blockchain.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Samrawit Tekheste — Junior Business Developer in Stockholm" },
      {
        name: "description",
        content:
          "Portfolio of Samrawit (Sam) Tekheste — Junior Business Developer focused on market analysis, partnerships, growth strategy, and strategic storytelling.",
      },
      { property: "og:title", content: "Samrawit Tekheste — Junior Business Developer" },
      {
        property: "og:description",
        content:
          "Helping organizations grow through market insights, partnerships, and strategic storytelling.",
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
    { href: "#services", label: "Services" },
    { href: "#why", label: "Why me" },
    { href: "#work", label: "Work" },
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
      <div className="container-x flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="font-display text-xl md:text-2xl tracking-tight text-foreground">
            Samrawit<span className="text-accent">.</span>
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-9">
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
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-5 py-2.5 text-sm font-medium hover:bg-foreground/90 transition-colors"
        >
          Let's talk
          <span aria-hidden>→</span>
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-clay) 0%, transparent 70%)" }}
      />
      <div className="container-x relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
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

          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="eyebrow mb-6">Portfolio · 2026</p>
            <h1 className="text-[2.6rem] leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.4rem] text-foreground">
              Helping organizations grow through{" "}
              <em className="not-italic text-primary">market insights</em>,{" "}
              <em className="not-italic text-accent">partnerships</em>, and strategic
              storytelling.
            </h1>
            <p className="mt-7 text-base md:text-lg text-muted-foreground max-w-xl">
              Hi, I'm Samrawit — most people call me Sam. I help organizations uncover
              opportunities, strengthen partnerships, and turn insights into action through
              research, strategy, and communication.
            </p>
            <div className="mt-6 flex flex-wrap gap-x-3 gap-y-2 text-sm">
              {[
                "Junior Business Developer",
                "Market Analysis",
                "Partnerships",
                "Growth Strategy",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-full border border-border bg-card/50 px-3.5 py-1.5 text-foreground/80"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                View my work
                <span aria-hidden>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 text-foreground px-7 py-3.5 text-sm font-medium hover:bg-foreground hover:text-background transition-colors"
              >
                Let's connect
              </a>
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
  const skills = [
    "Market & competitor analysis",
    "Trend research",
    "SWOT analysis",
    "Partnership development",
    "Brand positioning",
    "Community-driven initiatives",
  ];
  return (
    <section id="about" className="section-pad bg-secondary/40">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-5">
            <SectionLabel num="01" label="Who I am" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              Business developer with a passion for growth, strategy, and meaningful impact.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-16">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed">
              My journey combines business development, market research, community building,
              and strategic communication. Through internships, client projects, and real-world
              collaborations, I've worked on:
            </p>
            <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {skills.map((s) => (
                <li key={s} className="flex items-start gap-3 text-foreground/80">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base md:text-lg text-foreground/70 italic font-display">
              I enjoy understanding how businesses grow and helping teams make smarter
              decisions through research and strategic thinking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const cards = [
    {
      n: "01",
      title: "Market clarity",
      body:
        "Understand your market landscape through competitor analysis, trend research, and strategic insights.",
    },
    {
      n: "02",
      title: "Partnership growth",
      body:
        "Identify and develop partnership opportunities that create mutual value and long-term relationships.",
    },
    {
      n: "03",
      title: "Strategic positioning",
      body:
        "Communicate your value clearly through branding, storytelling, and audience-focused messaging.",
    },
    {
      n: "04",
      title: "Community & impact",
      body:
        "Support initiatives that bring people together around shared goals, creating stronger engagement and meaningful outcomes.",
    },
  ];
  return (
    <section id="services" className="section-pad">
      <div className="container-x">
        <div className="max-w-3xl">
          <SectionLabel num="02" label="What I solve" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            Turning uncertainty into clear opportunities.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 gap-5 md:gap-6">
          {cards.map((c) => (
            <article
              key={c.n}
              className="group relative bg-card border border-border rounded-3xl p-7 md:p-9 transition-all duration-300 hover:border-accent/40 hover:shadow-[0_20px_50px_-30px_oklch(0.4_0.05_60/0.4)]"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-display text-3xl text-accent">{c.n}</span>
                <span className="h-9 w-9 rounded-full border border-border flex items-center justify-center text-foreground/60 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all">
                  →
                </span>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{c.title}</h3>
              <p className="text-foreground/70 leading-relaxed">{c.body}</p>
            </article>
          ))}
        </div>
        <div className="mt-14 max-w-2xl">
          <p className="font-display text-2xl md:text-3xl text-foreground/85 leading-snug">
            My goal is simple: help organizations make better decisions, build stronger
            relationships, and create sustainable growth.
          </p>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const cols = [
    {
      title: "Research-driven",
      body:
        "Certified Business Developer with training in strategy, market analysis, branding, stakeholder engagement, and innovation.",
    },
    {
      title: "Real-world experience",
      body:
        "Sustainability, business development, community initiatives, client projects, brand strategy, and partnership outreach.",
    },
    {
      title: "Growth mindset",
      body:
        "I thrive where learning, experimentation, and collaboration drive progress — and I always ask why it matters.",
    },
  ];
  const achievements = [
    {
      title: "Business Developer Certification",
      body:
        "Completed Hyper Island's Business Development program focused on strategy, innovation, stakeholder engagement, and sustainable growth.",
    },
    {
      title: "Data Analytics Upskill",
      body: "SQL · Excel · Data validation · Research methods · Tableau · Data storytelling.",
    },
    {
      title: "Community Leadership",
      body:
        "Co-created initiatives bringing together organizations, women-focused networks, and community partners around shared impact goals.",
    },
    {
      title: "Blockchain & Sustainability",
      body:
        "Contributed to projects exploring how emerging technologies can support sustainable innovation and future-focused business models.",
    },
  ];
  return (
    <section
      id="why"
      className="section-pad text-cream relative overflow-hidden"
      style={{ backgroundColor: "var(--color-olive)" }}
    >
      <div className="container-x relative">
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6">
            <span className="font-display text-cream/80 text-lg">03</span>
            <span className="h-px flex-1 bg-cream/20 max-w-[3rem]" />
            <span className="text-xs tracking-[0.22em] uppercase font-medium text-cream/70">
              Why work with me
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-cream">
            Curious mind. Strategic thinker. Action-oriented contributor.
          </h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-8 md:gap-12">
          {cols.map((c) => (
            <div key={c.title} className="border-t border-cream/20 pt-6">
              <h3 className="font-display text-2xl text-cream mb-3">{c.title}</h3>
              <p className="text-cream/75 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 md:mt-28">
          <p className="text-xs tracking-[0.22em] uppercase font-medium text-cream/70 mb-8">
            Featured achievements
          </p>
          <div className="grid sm:grid-cols-2 gap-x-10 gap-y-10">
            {achievements.map((a, i) => (
              <div key={a.title} className="flex gap-5">
                <span className="font-display text-cream/40 text-xl shrink-0 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="font-display text-xl text-cream mb-2">{a.title}</h4>
                  <p className="text-cream/70 text-sm leading-relaxed">{a.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  const projects = [
    {
      img: projFuture,
      tag: "Innovation",
      title: "Future-Proof Project",
      challenge:
        "Help a forward-looking team prepare for shifting market conditions and emerging trends.",
      approach:
        "Mapped competitive forces, ran trend analysis, and co-designed a strategic readiness framework.",
      outcome:
        "A shared roadmap for innovation priorities and stakeholder alignment.",
      skills: ["Strategy", "Trend research", "Stakeholder engagement"],
    },
    {
      img: projCommunity,
      tag: "Community",
      title: "Community Impact Initiative",
      challenge:
        "Bring together organizations and networks around a shared impact agenda.",
      approach:
        "Partnered with PWN Copenhagen, Pool Collective, and others to design programming, outreach, and storytelling.",
      outcome:
        "A connected community of partners and an engaged audience aligned on outcomes.",
      skills: ["Partnerships", "Community", "Communication"],
    },
    {
      img: projBusiness,
      tag: "Business Development",
      title: "Business Development Projects",
      challenge: "Identify growth levers for organizations across sectors.",
      approach:
        "Conducted market and competitor analysis, mapped partnership opportunities, and built strategic recommendations.",
      outcome:
        "Clear, actionable insights that supported confident decision-making.",
      skills: ["Market analysis", "Competitor research", "Recommendations"],
    },
    {
      img: projBlockchain,
      tag: "Sustainability",
      title: "Blockchain & Sustainability Research",
      challenge:
        "Explore how emerging technologies can accelerate sustainable innovation.",
      approach:
        "Researched sustainability trends, mapped use cases, and surfaced opportunities for future-focused business models.",
      outcome:
        "A foundation of insight for teams operating at the intersection of tech and impact.",
      skills: ["Research", "Sustainability", "Innovation"],
    },
  ];
  return (
    <section id="work" className="section-pad">
      <div className="container-x">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <SectionLabel num="04" label="Selected work" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
              A few projects close to my craft.
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            From sustainability and innovation to community and strategy — selected
            collaborations across the past few years.
          </p>
        </div>

        <div className="space-y-6 md:space-y-8">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="grid md:grid-cols-12 gap-6 md:gap-10 bg-card border border-border rounded-3xl p-5 md:p-8 lg:p-10 hover:border-accent/40 transition-colors"
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
              <div className="md:col-span-7 flex flex-col justify-center">
                <span className="eyebrow mb-3">{p.tag}</span>
                <h3 className="font-display text-2xl md:text-3xl lg:text-4xl text-foreground mb-5">
                  {p.title}
                </h3>
                <dl className="space-y-3 text-sm md:text-base">
                  <div className="grid grid-cols-[6.5rem_1fr] gap-4">
                    <dt className="text-muted-foreground">Challenge</dt>
                    <dd className="text-foreground/85">{p.challenge}</dd>
                  </div>
                  <div className="grid grid-cols-[6.5rem_1fr] gap-4">
                    <dt className="text-muted-foreground">Approach</dt>
                    <dd className="text-foreground/85">{p.approach}</dd>
                  </div>
                  <div className="grid grid-cols-[6.5rem_1fr] gap-4">
                    <dt className="text-muted-foreground">Outcome</dt>
                    <dd className="text-foreground/85">{p.outcome}</dd>
                  </div>
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

function Beyond() {
  const items = [
    "Learning new analytical tools",
    "Exploring sustainability trends",
    "Running and building healthy habits",
    "Connecting with inspiring people",
    "Reading about innovation and growth",
  ];
  return (
    <section className="section-pad bg-secondary/40">
      <div className="container-x grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-5">
          <SectionLabel num="05" label="Beyond work" />
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-foreground">
            Curiosity, courage, and continuous learning.
          </h2>
        </div>
        <div className="md:col-span-7 md:pt-16">
          <p className="text-foreground/80 text-base md:text-lg">
            When I'm not exploring business opportunities, you'll usually find me:
          </p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {items.map((it, i) => (
              <li
                key={it}
                className="py-4 flex items-baseline gap-5 text-foreground/85 font-display text-lg md:text-xl"
              >
                <span className="text-accent text-sm font-sans">
                  /{String(i + 1).padStart(2, "0")}
                </span>
                {it}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Testimonial() {
  return (
    <section className="section-pad">
      <div className="container-x">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Kind words</span>
          <p className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl text-foreground/85 leading-snug">
            "Recommendations and endorsements coming soon — space reserved for the people I've
            had the privilege to collaborate with."
          </p>
          <div className="mt-8 inline-flex items-center gap-3 text-sm text-muted-foreground">
            <span className="h-px w-8 bg-border" />
            For future collaborators
            <span className="h-px w-8 bg-border" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const exploring = [
    "Business Development",
    "Strategy",
    "Partnerships",
    "Growth",
    "Communications",
  ];
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
              06 — Contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-[1.05]">
              Let's build something meaningful.
            </h2>
            <p className="mt-8 text-cream/70 text-base md:text-lg max-w-xl">
              I'm currently exploring opportunities in:
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {exploring.map((e) => (
                <span
                  key={e}
                  className="rounded-full border border-cream/20 text-cream/85 px-4 py-2 text-sm"
                >
                  {e}
                </span>
              ))}
            </div>
            <p className="mt-8 text-cream/65 max-w-xl">
              Whether you're hiring, collaborating, or simply want to connect — I'd love to
              hear from you.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-cream/5 border border-cream/15 rounded-3xl p-7 md:p-9 backdrop-blur-sm">
              <p className="text-cream/60 text-xs tracking-[0.18em] uppercase mb-6">
                Get in touch
              </p>
              <a
                href="mailto:samrawit.samuel.tk@gmail.com"
                className="block group"
              >
                <p className="text-cream/50 text-xs mb-1">Email</p>
                <p className="font-display text-xl md:text-2xl text-cream group-hover:text-accent transition-colors break-all">
                  samrawit.samuel.tk@gmail.com
                </p>
              </a>
              <div className="my-7 h-px bg-cream/15" />
              <p className="text-cream/50 text-xs mb-1">Location</p>
              <p className="font-display text-xl text-cream">Stockholm, Sweden</p>

              <a
                href="mailto:samrawit.samuel.tk@gmail.com"
                className="mt-9 inline-flex items-center gap-2 rounded-full bg-cream text-ink px-7 py-3.5 text-sm font-medium hover:bg-accent hover:text-cream transition-colors"
              >
                Let's connect
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-cream/10 flex flex-wrap items-center justify-between gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Samrawit Tekheste. Built with care in Stockholm.</p>
          <p>Junior Business Developer · Market Analysis · Partnerships · Growth Strategy</p>
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
        <Services />
        <Why />
        <Work />
        <Beyond />
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
}
