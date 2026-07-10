import { motion, type Variants } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";
import ammaraImg from "@/assets/ammara.jpg";

/* ---------- Animation helpers ---------- */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

function StaggerGroup({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Decorative bits ---------- */

function Star({ className, size = 28 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
    >
      <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" fill="currentColor" />
    </svg>
  );
}

function Squiggle({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 20" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <path d="M2 10 Q 15 0, 30 10 T 60 10 T 90 10 T 118 10" />
    </svg>
  );
}

function Tape({ className, style, rotate = -4 }: { className?: string; style?: CSSProperties; rotate?: number }) {
  return (
    <div
      className={`tape absolute h-6 w-24 ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)`, ...style }}
      aria-hidden
    />
  );
}

function PaperCard({
  children,
  className,
  rotate = 0,
  withTape = false,
}: {
  children: ReactNode;
  className?: string;
  rotate?: number;
  withTape?: boolean;
}) {
  return (
    <div
      className={`paper-card relative rounded-[6px] ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {withTape && (
        <Tape className="-top-3 left-1/2 -translate-x-1/2" rotate={-3} />
      )}
      {children}
    </div>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  const links = [
    ["About", "#about"],
    ["Services", "#services"],
    ["Work", "#work"],
    ["Process", "#process"],
    ["Packages", "#packages"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--burgundy)]/10 bg-[color:var(--cream)]/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-baseline gap-2">
          <span className="font-display text-xl font-semibold tracking-tight text-[color:var(--burgundy)]">
            Ammara Hoosen
          </span>
          <span className="handwritten hidden text-lg text-[color:var(--accent)] sm:inline">
            — studio
          </span>
        </a>
        <ul className="hidden gap-6 text-sm md:flex">
          {links.map(([label, href]) => (
            <li key={href}>
              <a
                href={href}
                className="text-[color:var(--ink)]/70 transition hover:text-[color:var(--burgundy)]"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="rounded-full bg-[color:var(--burgundy)] px-4 py-2 text-xs font-medium text-[color:var(--cream)] transition hover:bg-[color:var(--burgundy-deep)]"
        >
          Work with me
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-16 sm:pt-24">
      {/* Decorative stars */}
      <Star className="absolute left-[8%] top-24 text-[color:var(--star)]" size={22} />
      <Star className="absolute right-[10%] top-40 text-[color:var(--accent)]" size={16} />
      <Star className="absolute bottom-24 left-[15%] text-[color:var(--burgundy)]/60" size={18} />

      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <span className="handwritten inline-flex items-center gap-2 text-2xl text-[color:var(--accent)]">
              <Squiggle className="h-4 w-16 text-[color:var(--accent)]" />
              Hi, I'm Ammara —
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="mt-3 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-[color:var(--burgundy)] sm:text-6xl lg:text-7xl">
              Social media that
              <span className="italic text-[color:var(--accent)]"> actually </span>
              works for small business.
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-xl text-lg text-[color:var(--ink)]/80">
              Cape Town-based social media manager & Meta ads specialist helping
              brands turn content into <em>clicks, conversations, and customers.</em>
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[color:var(--burgundy)] px-6 py-3 text-sm font-medium text-[color:var(--cream)] shadow-lg shadow-[color:var(--burgundy)]/20 transition hover:-translate-y-0.5 hover:bg-[color:var(--burgundy-deep)]"
              >
                View My Work →
              </a>
              <a
                href="#contact"
                className="rounded-full border border-[color:var(--burgundy)]/30 bg-[color:var(--paper)] px-6 py-3 text-sm font-medium text-[color:var(--burgundy)] transition hover:-translate-y-0.5 hover:border-[color:var(--burgundy)]"
              >
                Work With Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-8 text-xs uppercase tracking-[0.25em] text-[color:var(--ink)]/50">
              📍 Cape Town, South Africa · Available worldwide
            </p>
          </Reveal>
        </div>

        {/* Floating scrapbook collage */}
        <div className="relative h-[520px] lg:col-span-5">
          <Reveal delay={0.2} y={30}>
            <PaperCard
              rotate={-5}
              className="absolute left-0 top-4 w-56 p-4"
              withTape
            >
              <div className="flex items-center gap-2 text-xs">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-tr from-[color:var(--accent)] to-[color:var(--burgundy)] text-[color:var(--cream)] font-bold">A</span>
                <div className="leading-tight">
                  <div className="font-semibold text-[color:var(--ink)]">@ammara.studio</div>
                  <div className="text-[color:var(--ink)]/50">2h · Sponsored</div>
                </div>
              </div>
              <div className="mt-3 h-24 rounded bg-gradient-to-br from-[color:var(--accent)]/40 to-[color:var(--burgundy)]/30" />
              <div className="mt-2 text-[11px] text-[color:var(--ink)]/70">
                Shop the new drop → link in bio
              </div>
              <div className="mt-2 flex gap-3 text-[10px] text-[color:var(--ink)]/60">
                <span>♥ 1.2k</span><span>💬 84</span><span>↗ 213</span>
              </div>
            </PaperCard>
          </Reveal>

          <Reveal delay={0.3} y={40}>
            <PaperCard
              rotate={4}
              className="absolute right-0 top-24 w-52 p-4"
            >
              <Tape className="-top-3 right-6" rotate={8} />
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)]">Meta Ads</div>
              <div className="mt-1 font-display text-3xl font-semibold text-[color:var(--burgundy)]">4.2x</div>
              <div className="text-xs text-[color:var(--ink)]/70">Return on ad spend</div>
              <div className="mt-3 flex items-end gap-1">
                {[30, 55, 40, 78, 62, 90].map((h, i) => (
                  <div key={i} className="w-3 rounded-t bg-[color:var(--burgundy)]/70" style={{ height: `${h}%`, maxHeight: 40 }} />
                ))}
              </div>
            </PaperCard>
          </Reveal>

          <Reveal delay={0.4} y={30}>
            <PaperCard
              rotate={-3}
              className="absolute bottom-6 left-6 w-52 p-4"
            >
              <Tape className="-top-3 left-4" rotate={-10} />
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)]">Reel · 7 days</div>
              <div className="mt-1 font-display text-3xl font-semibold text-[color:var(--burgundy)]">43K</div>
              <div className="text-xs text-[color:var(--ink)]/70">views on short-form</div>
              <div className="handwritten mt-2 text-lg text-[color:var(--accent)]">↑ went viral!</div>
            </PaperCard>
          </Reveal>

          <Reveal delay={0.5} y={30}>
            <PaperCard
              rotate={6}
              className="absolute bottom-24 right-2 w-44 p-3"
            >
              <div className="text-[10px] font-semibold uppercase tracking-widest text-[color:var(--accent)]">Engagement</div>
              <div className="mt-2 flex items-baseline gap-2">
                <span className="font-display text-2xl font-semibold text-[color:var(--burgundy)]">+312%</span>
                <span className="text-[10px] text-[color:var(--ink)]/60">vs last month</span>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded bg-[color:var(--muted)]">
                <div className="h-full w-4/5 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--burgundy)]" />
              </div>
            </PaperCard>
          </Reveal>

          <Star className="absolute right-24 top-6 text-[color:var(--star)]" size={20} />
          <Squiggle className="absolute bottom-2 left-10 h-4 w-24 text-[color:var(--burgundy)]/40" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative px-5 py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <Tape className="-top-3 left-8" rotate={-6} />
            <Tape className="-top-3 right-8" rotate={7} />
            <div className="paper-card overflow-hidden rounded-sm p-3">
              <img
                src={ammaraImg}
                alt="Portrait of Ammara Hoosen"
                width={800}
                height={1000}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-sm object-cover"
              />
              <p className="handwritten mt-3 text-center text-2xl text-[color:var(--burgundy)]">
                — Ammara, Cape Town ✿
              </p>
            </div>
            <Star className="absolute -right-6 top-10 text-[color:var(--accent)]" size={26} />
          </div>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <span className="handwritten text-2xl text-[color:var(--accent)]">about me</span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-2 font-display text-4xl font-semibold text-[color:var(--burgundy)] sm:text-5xl">
              Strategy-first content <em className="text-[color:var(--accent)]">with a design eye.</em>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--ink)]/80">
              I'm a Cape Town-based creative with a background in web development,
              social media management, graphic design, and paid ads. I help brands
              show up online with content that looks good, makes sense, and
              supports real business goals.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--ink)]/80">
              I care about clean visuals, clear strategy, and content that does
              more than just <span className="italic">"look cute"</span>.
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Strategy", "Design", "Meta Ads", "Web", "Copy"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[color:var(--burgundy)]/20 bg-[color:var(--paper)] px-4 py-1.5 text-xs uppercase tracking-widest text-[color:var(--burgundy)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const services = [
  { t: "Social Media Management", d: "End-to-end management of your Instagram & Facebook — posted, planned, on-brand.", i: "◐" },
  { t: "Meta Ads Campaigns", d: "Campaigns built to actually convert — from creative to targeting to reporting.", i: "◈" },
  { t: "Content Strategy", d: "Monthly content pillars, hooks, and calendars mapped to real business goals.", i: "✦" },
  { t: "Instagram & Facebook Content", d: "Static posts, stories, and captions written to sound like you (not AI).", i: "✧" },
  { t: "Carousel Design", d: "Scroll-stopping carousels that educate, convert, or make people save the post.", i: "❋" },
  { t: "Reels & TikTok Editing", d: "Short-form video edits with hooks, captions, and platform-native pacing.", i: "▶" },
  { t: "Monthly Reporting", d: "Plain-English reports so you always know what's working and what to try next.", i: "◍" },
  { t: "Website & Landing Pages", d: "Landing page builds and updates in WordPress, Elementor, and WooCommerce.", i: "◒" },
];

function Services() {
  return (
    <section id="services" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--accent)]">what I help with</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-[color:var(--burgundy)] sm:text-5xl">
              A studio-sized skillset — <em className="text-[color:var(--accent)]">without the agency price tag.</em>
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <motion.div key={s.t} variants={fadeUp}>
              <PaperCard rotate={i % 2 === 0 ? -1 : 1} className="h-full p-6">
                <div className="text-3xl text-[color:var(--accent)]">{s.i}</div>
                <h3 className="mt-4 font-display text-xl font-semibold text-[color:var(--burgundy)]">{s.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]/75">{s.d}</p>
              </PaperCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

const whyItems = [
  { t: "Web development background", d: "I actually understand websites and landing pages — not just posts." },
  { t: "A real design eye", d: "Content that looks polished, on-brand, and worth stopping the scroll for." },
  { t: "Strategy-first approach", d: "Every post has a purpose. No content-just-to-post-something." },
  { t: "Paid ads support", d: "Great content reaches the right audience — not just your existing followers." },
  { t: "Clear reporting", d: "You'll always know what worked, what didn't, and what we're trying next." },
];

function Why() {
  return (
    <section className="relative bg-[color:var(--burgundy)] px-5 py-24 text-[color:var(--cream)]">
      <Star className="absolute left-[8%] top-16 text-[color:var(--cream)]/40" size={20} />
      <Star className="absolute right-[10%] bottom-20 text-[color:var(--accent)]" size={26} />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <span className="handwritten text-2xl text-[color:var(--accent)]">why work with me</span>
          <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
            Not just pretty <em className="text-[color:var(--accent)]">posts.</em>
          </h2>
          <p className="mt-6 max-w-md text-lg text-[color:var(--cream)]/80">
            I sit at the intersection of design, strategy, and code — which
            means your content, ads, and website all pull in the same direction.
          </p>
        </Reveal>

        <StaggerGroup className="grid gap-4 lg:col-span-7">
          {whyItems.map((w, i) => (
            <motion.div key={w.t} variants={fadeUp}>
              <div className="flex gap-4 rounded-lg border border-[color:var(--cream)]/15 bg-[color:var(--burgundy-deep)]/50 p-5">
                <div className="handwritten text-3xl text-[color:var(--accent)]">0{i + 1}</div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-[color:var(--cream)]">{w.t}</h3>
                  <p className="mt-1 text-sm text-[color:var(--cream)]/75">{w.d}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

const projects = [
  {
    name: "Gatesville Pet Centre",
    tag: "Retail · Meta Ads",
    work: "Product posts, carousel ads, Meta campaign setup, captions, content planning.",
    goal: "Increase product visibility and drive online store visits.",
    accent: "🐾",
  },
  {
    name: "Nature's Secrets",
    tag: "Wellness · Short-form",
    work: "TikTok/Reel content strategy, product education videos, audience research.",
    goal: "Make products easier to understand and more engaging online.",
    accent: "🌿",
  },
  {
    name: "WebXtreme",
    tag: "Agency support",
    work: "Social media content, WordPress updates, WooCommerce support, client design work.",
    goal: "Support client brands across web and social.",
    accent: "◆",
  },
  {
    name: "Freelance Clients",
    tag: "Small business",
    work: "Branding, website support, ad creatives, business cards, social posts.",
    goal: "Help small businesses look more credible online.",
    accent: "✿",
  },
];

function Projects() {
  return (
    <section id="work" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--accent)]">featured projects</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-[color:var(--burgundy)] sm:text-5xl">
              Selected work from the studio.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div key={p.name} variants={fadeUp}>
              <PaperCard rotate={i % 2 === 0 ? -0.6 : 0.8} className="h-full p-8">
                <Tape className="-top-3 left-8" rotate={i % 2 === 0 ? -6 : 5} />
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.2em] text-[color:var(--accent)]">
                      {p.tag}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-semibold text-[color:var(--burgundy)]">
                      {p.name}
                    </h3>
                  </div>
                  <div className="text-4xl">{p.accent}</div>
                </div>
                <div className="mt-5 space-y-3 text-sm text-[color:var(--ink)]/80">
                  <p>
                    <span className="font-semibold text-[color:var(--burgundy)]">Work: </span>
                    {p.work}
                  </p>
                  <p>
                    <span className="font-semibold text-[color:var(--burgundy)]">Goal: </span>
                    {p.goal}
                  </p>
                </div>
                <div className="mt-6 flex gap-2">
                  {["Strategy", "Design", "Ads"].map((t) => (
                    <span key={t} className="rounded-full border border-[color:var(--burgundy)]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[color:var(--burgundy)]/80">
                      {t}
                    </span>
                  ))}
                </div>
              </PaperCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

const metrics = [
  { v: "43K", l: "views on product-style short-form content", note: "single reel" },
  { v: "31K", l: "views on educational TikTok-style content", note: "series avg." },
  { v: "R800", l: "ad budget planning example", note: "Meta ads setup" },
  { v: "1:1", l: "carousel campaigns with individual product links", note: "shoppable" },
];

function Results() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--accent)]">sample results</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-[color:var(--burgundy)] sm:text-5xl">
              Numbers from real campaigns.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div key={m.l} variants={fadeUp}>
              <PaperCard rotate={[-2, 1.5, -1, 2][i]} className="p-6">
                <Tape className="-top-3 left-6" rotate={-8 + i * 4} />
                <div className="text-[10px] uppercase tracking-widest text-[color:var(--accent)]">{m.note}</div>
                <div className="mt-2 font-display text-5xl font-semibold text-[color:var(--burgundy)]">{m.v}</div>
                <div className="mt-2 text-sm text-[color:var(--ink)]/75">{m.l}</div>
              </PaperCard>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <p className="handwritten mx-auto mt-10 max-w-xl text-center text-xl text-[color:var(--ink)]/60">
            * Results vary by client, budget, offer, and consistency.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Brand & goal audit", "We map where you are and where you want to go."],
  ["02", "Content direction", "Pillars, tone, visual system — the strategy layer."],
  ["03", "Design + copywriting", "Posts, reels, carousels, and captions built to convert."],
  ["04", "Posting or campaign setup", "Scheduled content, or Meta ads launched and QA'd."],
  ["05", "Performance check", "We watch the numbers — not just the likes."],
  ["06", "Monthly improvements", "Iterate on what works, cut what doesn't."],
];

function Process() {
  return (
    <section id="process" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--accent)]">how we work</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-[color:var(--burgundy)] sm:text-5xl">
              A simple, repeatable process.
            </h2>
          </div>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-6 top-2 bottom-2 hidden w-px border-l-2 border-dashed border-[color:var(--burgundy)]/25 md:block" />
          <StaggerGroup className="grid gap-5">
            {steps.map(([n, t, d]) => (
              <motion.div key={n} variants={fadeUp} className="relative md:pl-16">
                <div className="absolute left-0 top-0 hidden grid h-12 w-12 place-items-center rounded-full bg-[color:var(--burgundy)] font-display text-sm text-[color:var(--cream)] md:grid">
                  {n}
                </div>
                <PaperCard rotate={-0.3} className="p-5">
                  <div className="flex items-center gap-4">
                    <span className="handwritten text-2xl text-[color:var(--accent)] md:hidden">{n}</span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-[color:var(--burgundy)]">{t}</h3>
                      <p className="mt-1 text-sm text-[color:var(--ink)]/75">{d}</p>
                    </div>
                  </div>
                </PaperCard>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  );
}

const packages = [
  {
    name: "Starter Social",
    price: "R4,500",
    per: "/month",
    tag: "For small businesses that need consistent content.",
    features: ["8 static posts", "Captions", "Content plan", "Basic reporting"],
    highlight: false,
  },
  {
    name: "Growth Social",
    price: "R7,500",
    per: "/month",
    tag: "For brands ready for stronger content and short-form video.",
    features: ["8 posts", "4–8 reels / TikToks", "Captions", "Strategy", "Reporting"],
    highlight: true,
  },
  {
    name: "Meta Ads Setup",
    price: "Custom",
    per: "quote",
    tag: "For businesses that want paid campaigns.",
    features: ["Campaign setup", "Targeting", "Ad copy", "Creative direction", "Basic performance review"],
    note: "Ad spend excluded.",
    highlight: false,
  },
];

function Packages() {
  return (
    <section id="packages" className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--accent)]">services & packages</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-[color:var(--burgundy)] sm:text-5xl">
              Pick a starting point.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 lg:grid-cols-3">
          {packages.map((p, i) => (
            <motion.div key={p.name} variants={fadeUp}>
              <PaperCard
                rotate={i === 1 ? 0 : i === 0 ? -1.2 : 1.2}
                className={`h-full p-8 ${p.highlight ? "ring-2 ring-[color:var(--burgundy)]" : ""}`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 right-6 rounded-full bg-[color:var(--accent)] px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[color:var(--cream)]">
                    Most popular
                  </div>
                )}
                <h3 className="font-display text-2xl font-semibold text-[color:var(--burgundy)]">{p.name}</h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold text-[color:var(--ink)]">{p.price}</span>
                  <span className="text-sm text-[color:var(--ink)]/60">{p.per}</span>
                </div>
                <p className="mt-3 text-sm text-[color:var(--ink)]/75">{p.tag}</p>
                <ul className="mt-6 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-[color:var(--ink)]/85">
                      <span className="mt-1 text-[color:var(--accent)]">✦</span>
                      {f}
                    </li>
                  ))}
                </ul>
                {p.note && (
                  <p className="handwritten mt-4 text-lg text-[color:var(--ink)]/55">{p.note}</p>
                )}
                <a
                  href="#contact"
                  className={`mt-8 block rounded-full px-5 py-3 text-center text-sm font-medium transition ${
                    p.highlight
                      ? "bg-[color:var(--burgundy)] text-[color:var(--cream)] hover:bg-[color:var(--burgundy-deep)]"
                      : "border border-[color:var(--burgundy)]/30 text-[color:var(--burgundy)] hover:border-[color:var(--burgundy)]"
                  }`}
                >
                  Start here →
                </a>
              </PaperCard>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

const tools = [
  "Meta Ads Manager", "Canva", "CapCut", "WordPress", "Elementor", "WooCommerce",
  "Figma", "GA4 basics", "Copywriting", "Content Planning", "Reporting",
  "Carousel Design", "Reels Editing",
];

function Skills() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--accent)]">skills & tools</span>
            <h2 className="mt-2 font-display text-4xl font-semibold text-[color:var(--burgundy)] sm:text-5xl">
              The toolkit.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-10 flex flex-wrap gap-3">
          {tools.map((t, i) => (
            <motion.span
              key={t}
              variants={fadeUp}
              className="rounded-full border border-[color:var(--burgundy)]/25 bg-[color:var(--paper)] px-5 py-2 text-sm text-[color:var(--burgundy)] shadow-sm"
              style={{ transform: `rotate(${(i % 5) - 2}deg)` }}
            >
              {t}
            </motion.span>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

const testimonials = [
  {
    q: "Ammara took our socials from an afterthought to something we actually get customers from. Her carousels are gold.",
    n: "— Client name",
    r: "Small business owner",
  },
  {
    q: "She gets strategy, design, and ads — which meant we didn't have to hire three different people. Rare find.",
    n: "— Client name",
    r: "Agency partner",
  },
  {
    q: "The reports finally made sense. We knew what was working and what to double down on every month.",
    n: "— Client name",
    r: "E-commerce brand",
  },
];

function Testimonials() {
  return (
    <section className="relative bg-[color:var(--burgundy)] px-5 py-24 text-[color:var(--cream)]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--accent)]">kind words</span>
            <h2 className="mt-2 font-display text-4xl font-semibold sm:text-5xl">
              What clients say.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div key={i} variants={fadeUp}>
              <div
                className="relative rounded-sm bg-[color:var(--paper)] p-7 text-[color:var(--ink)] shadow-xl"
                style={{ transform: `rotate(${[-1.5, 0.8, -0.6][i]}deg)` }}
              >
                <Tape className="-top-3 left-8" rotate={-6 + i * 5} />
                <div className="font-display text-5xl leading-none text-[color:var(--accent)]">"</div>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]/85">{t.q}</p>
                <div className="mt-5 border-t border-[color:var(--burgundy)]/15 pt-4">
                  <div className="font-semibold text-[color:var(--burgundy)]">{t.n}</div>
                  <div className="text-xs text-[color:var(--ink)]/60">{t.r}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28">
      <Star className="absolute left-[10%] top-16 text-[color:var(--accent)]" size={26} />
      <Star className="absolute right-[12%] bottom-20 text-[color:var(--burgundy)]/60" size={22} />
      <Squiggle className="absolute right-[20%] top-24 h-4 w-32 text-[color:var(--accent)]/60" />

      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="handwritten text-2xl text-[color:var(--accent)]">let's talk</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-3 font-display text-5xl font-semibold leading-[1.05] text-[color:var(--burgundy)] sm:text-6xl">
            Ready to make your socials
            <em className="text-[color:var(--accent)]"> work harder?</em>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-6 text-lg text-[color:var(--ink)]/75">
            Tell me about your business, your goals, and where you're stuck.
            I'll come back with a plan.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="mailto:yourname@gmail.com"
              className="rounded-full bg-[color:var(--burgundy)] px-8 py-4 text-base font-medium text-[color:var(--cream)] shadow-lg shadow-[color:var(--burgundy)]/25 transition hover:-translate-y-0.5 hover:bg-[color:var(--burgundy-deep)]"
            >
              Let's work together →
            </a>
            <a
              href="mailto:yourname@gmail.com"
              className="text-sm text-[color:var(--ink)]/60 underline-offset-4 hover:underline"
            >
              yourname@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--burgundy)]/15 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[color:var(--ink)]/60 sm:flex-row">
        <div>© {new Date().getFullYear()} Ammara Hoosen · Cape Town</div>
        <div className="handwritten text-lg text-[color:var(--accent)]">
          made with care ✿
        </div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-[color:var(--cream)] text-[color:var(--ink)]">
      <Nav />
      <Hero />
      <About />
      <Services />
      <Why />
      <Projects />
      <Results />
      <Process />
      <Packages />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}