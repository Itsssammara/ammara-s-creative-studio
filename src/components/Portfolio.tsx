/* eslint-disable prettier/prettier */
import { motion, type Variants } from "framer-motion";
import type { ReactNode, CSSProperties } from "react";
import { useState } from "react";
import canvaLogo from "@/assets/ammaras-tool-icon-canva.svg";
import capcutLogo from "@/assets/ammaras-tool-icon-capcut.svg";
import metaLogo from "@/assets/ammaras-tool-icon-meta-business-suite.svg";
import metricoolLogo from "@/assets/ammaras-tool-icon-metricool.svg";
import elementorLogo from "@/assets/ammaras-tool-icon-elementor.svg";
import wordpressLogo from "@/assets/ammaras-tool-icon-wordpress.svg";

 
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
    <svg
      className={className}
      viewBox="0 0 120 20"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path d="M2 10 Q 15 0, 30 10 T 60 10 T 90 10 T 118 10" />
    </svg>
  );
}

/* Chalky brush-style doodles inspired by the reference */
function ChalkStar({ className, size = 90 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden
    >
      <path
        d="M50 6 C 52 28, 58 40, 82 44 C 60 50, 54 58, 50 92 C 46 60, 40 52, 14 46 C 42 40, 48 30, 50 6 Z"
        fill="currentColor"
        opacity="0.92"
      />
    </svg>
  );
}

function ChalkSpiral({ className, size = 130 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 140 110"
      fill="none"
      stroke="currentColor"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {/* concentric arcs (rainbow-style, opening downward) */}
      <path d="M20 70 A50 50 0 0 1 120 70" opacity="0.95" />
      <path d="M32 70 A38 38 0 0 1 108 70" opacity="0.95" />
      <path d="M44 70 A26 26 0 0 1 96 70" opacity="0.95" />
      <path d="M56 70 A14 14 0 0 1 84 70" opacity="0.95" />
      {/* little tulip on top */}
      <path
        d="M70 22 C 64 30, 64 40, 70 44 C 76 40, 76 30, 70 22 Z"
        fill="currentColor"
        opacity="0.95"
      />
      <path d="M62 34 C 58 40, 58 46, 64 48" opacity="0.9" />
      <path d="M78 34 C 82 40, 82 46, 76 48" opacity="0.9" />
      {/* stem */}
      <path d="M70 44 L70 58" opacity="0.9" />
    </svg>
  );
}

function ChalkSwirl({ className, size = 150 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 160 80"
      fill="none"
      stroke="currentColor"
      strokeWidth={8}
      strokeLinecap="round"
      aria-hidden
    >
      <path
        d="M10 60 C 20 20, 50 20, 60 50 C 65 68, 45 72, 40 55 C 35 35, 70 20, 95 40 C 125 62, 145 30, 150 15"
        opacity="0.9"
      />
    </svg>
  );
}

function ChalkScribble({ className, size = 120 }: { className?: string; size?: number }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 140 80"
      fill="none"
      stroke="currentColor"
      strokeWidth={9}
      strokeLinecap="round"
      aria-hidden
    >
      <path d="M10 50 Q 30 10, 50 45 T 90 45 Q 110 20, 130 50" opacity="0.9" />
    </svg>
  );
}

function Tape({
  className,
  style,
  rotate = -4,
}: {
  className?: string;
  style?: CSSProperties;
  rotate?: number;
}) {
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
      className={`paper-card crumpled relative rounded-[6px] ${className ?? ""}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      {withTape && <Tape className="-top-3 left-1/2 -translate-x-1/2" rotate={-3} />}
      {children}
    </div>
  );
}

function BinderBoard({
  children,
  className,
  holes = 6,
}: {
  children: ReactNode;
  className?: string;
  holes?: number;
}) {
  return (
    <div className={`binder-board relative px-5 pb-10 pt-16 sm:px-10 sm:pt-20 ${className ?? ""}`}>
      {/* Binder rings row */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 flex -translate-y-1/2 justify-around px-6 sm:px-12"
        aria-hidden
      >
        {Array.from({ length: holes }).map((_, i) => (
          <div key={i} className="relative">
            {/* punched hole */}
            <div
              className="h-6 w-6 rounded-full sm:h-7 sm:w-7"
              style={{
                background:
                  "radial-gradient(circle at 40% 35%, oklch(0.14 0.05 22) 0%, oklch(0.22 0.07 22) 55%, oklch(0.32 0.13 20) 100%)",
                boxShadow: "inset 0 2px 3px oklch(0 0 0 / 0.55), 0 1px 0 oklch(1 0 0 / 0.4)",
              }}
            />
            {/* metal ring */}
            <div
              className="absolute -inset-1 rounded-full border-2 sm:-inset-1.5"
              style={{
                borderImage:
                  "linear-gradient(135deg, oklch(0.95 0.02 80), oklch(0.55 0.02 80) 45%, oklch(0.98 0.02 80) 55%, oklch(0.5 0.02 80)) 1",
                boxShadow:
                  "0 3px 6px -2px oklch(0.22 0.07 22 / 0.5), inset 0 1px 0 oklch(1 0 0 / 0.6)",
              }}
            />
          </div>
        ))}
      </div>
      {children}
    </div>
  );
}

/* ---------- Sections ---------- */

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

const links = [
  ["About", "#about"],
  ["Logos", "#logofolio"],
  ["Social", "#social"],
  ["Reviews", "#testimonials"],
  ["Packages", "#packages"],
  ["Contact", "#contact"],
];

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[color:var(--cream)]/10 bg-[color:var(--burgundy-deep)]/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <a
            href="#top"
            onClick={closeMenu}
            className="flex items-baseline gap-2"
          >
            <span className="font-display text-xl font-semibold tracking-tight text-[color:var(--cream)]">
              Ammara Hoosen
            </span>

            <span className="handwritten hidden text-lg text-[color:var(--star)] sm:inline">
              — studio
            </span>
          </a>

          {/* Desktop navigation */}
          <ul className="hidden gap-6 text-sm md:flex">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[color:var(--cream)]/70 transition hover:text-[color:var(--cream)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden rounded-full bg-[color:var(--cream)] px-4 py-2 text-xs font-medium text-[color:var(--burgundy)] transition hover:bg-[color:var(--star)] sm:inline-flex"
            >
              Work with me
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--cream)]/30 text-[color:var(--cream)] transition hover:bg-[color:var(--cream)]/10 md:hidden"
            >
              <span className="sr-only">
                {menuOpen ? "Close menu" : "Open menu"}
              </span>

              <div className="relative h-5 w-5">
                <span
                  className={`absolute left-0 top-1 block h-0.5 w-5 bg-current transition ${
                    menuOpen ? "translate-y-1.5 rotate-45" : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-2.5 block h-0.5 w-5 bg-current transition ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />

                <span
                  className={`absolute left-0 top-4 block h-0.5 w-5 bg-current transition ${
                    menuOpen ? "-translate-y-1.5 -rotate-45" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          id="mobile-navigation"
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            menuOpen
              ? "max-h-[500px] border-t border-[color:var(--cream)]/10 pb-5 pt-4 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1">
            {links.map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={closeMenu}
                  className="block rounded-xl px-4 py-3 text-sm text-[color:var(--cream)]/80 transition hover:bg-[color:var(--cream)]/10 hover:text-[color:var(--cream)]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-4 flex w-full items-center justify-center rounded-full bg-[color:var(--cream)] px-4 py-3 text-sm font-medium text-[color:var(--burgundy)] transition hover:bg-[color:var(--star)]"
          >
            Work with me
          </a>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-14 sm:pt-20">
      {/* Chalk doodles scattered across the burgundy corduroy */}
      <ChalkStar
        className="pointer-events-none absolute left-[4%] top-16 text-[color:var(--cream)]/90 rotate-[-15deg]"
        size={70}
      />
      <ChalkStar
        className="pointer-events-none absolute right-[6%] top-8 text-[color:var(--cream)]/85 rotate-[20deg]"
        size={95}
      />
      <ChalkSpiral
        className="pointer-events-none absolute right-[36%] top-6 hidden text-[color:var(--cream)]/80 sm:block"
        size={120}
      />
      <ChalkSwirl
        className="pointer-events-none absolute left-[2%] bottom-24 text-[color:var(--cream)]/85 rotate-[-8deg]"
        size={170}
      />
      <ChalkScribble
        className="pointer-events-none absolute right-[3%] bottom-20 text-[color:var(--cream)]/85 rotate-[12deg]"
        size={140}
      />
      <ChalkStar
        className="pointer-events-none absolute left-[46%] bottom-10 text-[color:var(--cream)]/90 rotate-[8deg]"
        size={58}
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-12">
        {/* Torn paper hero card */}
        <Reveal className="order-2 relative lg:order-1 lg:col-span-8" y={40}>
          <div className="relative">
            <div className="torn-paper relative px-8 py-14 sm:px-14 sm:py-20">
              <div className="relative">
                <span className="handwritten text-2xl text-[color:var(--accent)]">
                  hi, I'm Ammara —
                </span>
                <h1 className="mt-2 font-display text-6xl italic leading-[0.95] text-[color:var(--ink)] sm:text-7xl lg:text-[7.5rem]">
                  Portfolio
                </h1>
                <div className="mt-4 space-y-1">
                  <div className="heavy text-4xl uppercase text-[color:var(--burgundy)] sm:text-5xl lg:text-6xl">
                    Social Media Manager
                  </div>
                  <div className="heavy flex items-baseline gap-3 text-4xl uppercase text-[color:var(--burgundy-deep)] sm:text-5xl lg:text-6xl">
                    <span className="font-display text-2xl italic sm:text-3xl">&</span>
                    <span>Meta Ads Specialist</span>
                  </div>
                </div>
                <p className="mt-6 max-w-lg text-[color:var(--ink)]/80">
                  Cape Town–based creative helping small businesses turn content into{" "}
                  <em>clicks, conversations, and customers.</em>
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a
                    href="#work"
                    className="rounded-full bg-[color:var(--burgundy)] px-6 py-3 text-sm font-medium text-[color:var(--cream)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[color:var(--burgundy-deep)]"
                  >
                    View My Work →
                  </a>
                  <a
                    href="#contact"
                    className="rounded-full border-2 border-[color:var(--burgundy)] px-6 py-3 text-sm font-medium text-[color:var(--burgundy)] transition hover:-translate-y-0.5 hover:bg-[color:var(--burgundy)] hover:text-[color:var(--cream)]"
                  >
                    Work With Me
                  </a>
                </div>
              </div>
            </div>

            {/* Speech bubble callout */}
            <Reveal
              delay={0.25}
              className="absolute right-3 top-3 z-30 sm:right-0 sm:top-20 lg:-right-10"
            >
              <div className="w-44 rotate-[-2deg] border-2 border-[color:var(--cream)] bg-[color:var(--accent)] px-3 py-2 text-center shadow-lg sm:w-64 sm:px-5 sm:py-4">
                <div className="heavy text-sm uppercase text-[color:var(--cream)] sm:text-lg">
                  2+ Years of Experience
                </div>
              </div>
            </Reveal>
          </div>
        </Reveal>

        {/* hero graphic */}
        <Reveal className="order-1 relative z-20 lg:order-2 lg:col-span-4" delay={0.15}>
          <div className="relative mx-auto w-full max-w-[380px] sm:max-w-[460px] lg:-ml-40 lg:w-[160%] lg:max-w-none">
            <ChalkStar
              className="pointer-events-none absolute -left-6 top-10 z-10 text-[color:var(--cream)]"
              size={54}
            />

            <img
              src="/src/assets/ammara-profile.png"
              alt="Animated social media graphic featuring Ammara Hoosen"
              className="h-auto w-full object-contain"
            />

            <ChalkStar
              className="pointer-events-none absolute -bottom-4 -right-4 text-[color:var(--cream)] rotate-[18deg]"
              size={70}
            />
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.35}>
        <p className="relative mt-14 text-center text-xs uppercase tracking-[0.35em] text-[color:var(--cream)]/60">
          📍 Cape Town, South Africa · Available worldwide
        </p>
      </Reveal>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative overflow-hidden px-5 py-24">
      {/* Chalk doodles */}
      <ChalkStar
        className="pointer-events-none absolute left-[4%] top-14 text-[color:var(--cream)] rotate-[-12deg]"
        size={80}
      />
      <ChalkSpiral
        className="pointer-events-none absolute left-[24%] top-10 hidden text-[color:var(--cream)]/85 sm:block"
        size={150}
      />
      <ChalkStar
        className="pointer-events-none absolute right-[8%] top-24 text-[color:var(--cream)] rotate-[15deg]"
        size={54}
      />
      <ChalkSwirl
        className="pointer-events-none absolute right-[4%] bottom-32 text-[color:var(--cream)]/80 rotate-[8deg]"
        size={130}
      />

      <div className="relative mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-12">
        {/* Photo cutout with white outline */}
        <Reveal className="lg:col-span-6">
          <div className="relative mx-auto w-full max-w-[560px] lg:max-w-none">
            {/* Scrapbook tape accents */}
            <ChalkStar
              className="pointer-events-none absolute -left-6 top-1/3 z-10 text-[color:var(--cream)] rotate-[-15deg]"
              size={64}
            />
            <ChalkStar
              className="pointer-events-none absolute -right-4 bottom-10 z-10 text-[color:var(--star)] rotate-[18deg]"
              size={44}
            />
            {/* Cream torn-paper mat behind the image for editorial weight */}
            <img
              src="/src/assets/ammara-hero.gif"
              alt="Portrait of Ammara Hoosen"
              width={1200}
              height={1500}
              loading="lazy"
              className="relative z-10 w-full object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]"
            />
          </div>
        </Reveal>

        {/* Text block */}
        <div className="relative lg:col-span-6">
          <Reveal>
            <h2 className="heavy text-6xl uppercase text-[color:var(--cream)] sm:text-7xl lg:text-8xl">
              About Me.
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[color:var(--cream)]/90 sm:text-lg">
              Hi, call me Ammara. I'm a Cape Town–based creative with a background in web
              development, social media management, graphic design and paid ads. My path wasn't a
              straight line — it was a convergence.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[color:var(--cream)]/85 sm:text-lg">
              If you look at my resume, you see a marketer. If you look at my camera roll, you see a
              storyteller. I help brands show up online with content that looks good, makes sense
              and supports real business goals.
            </p>
          </Reveal>

          {/* Rotated script + paragraph like the reference */}
          <div className="mt-8 grid gap-5 sm:grid-cols-[48px_1fr] sm:items-start">
            <Reveal delay={0.28} className="hidden sm:block">
              <div className="handwritten flex h-40 items-center justify-center text-4xl leading-none text-[color:var(--star)] [writing-mode:vertical-rl] rotate-180">
                Why me?
              </div>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="max-w-xl text-base leading-relaxed text-[color:var(--cream)]/90 sm:text-lg">
                Because I care about clean visuals, clear strategy, and content that does more than
                just <em>"look cute."</em> I sit at the intersection of design, strategy, and code —
                which means your content, ads, and website all pull in the same direction.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

const services = [
  {
    t: "Social Media Management",
    d: "End-to-end management of your Instagram & Facebook — posted, planned, on-brand.",
    i: "◐",
  },
  {
    t: "Meta Ads Campaigns",
    d: "Campaigns built to actually convert — from creative to targeting to reporting.",
    i: "◈",
  },
  {
    t: "Content Strategy",
    d: "Monthly content pillars, hooks, and calendars mapped to real business goals.",
    i: "✦",
  },
  {
    t: "Instagram & Facebook Content",
    d: "Static posts, stories, and captions written to sound like you (not AI).",
    i: "✧",
  },
  {
    t: "Carousel Design",
    d: "Scroll-stopping carousels that educate, convert, or make people save the post.",
    i: "❋",
  },
  {
    t: "Reels & TikTok Editing",
    d: "Short-form video edits with hooks, captions, and platform-native pacing.",
    i: "▶",
  },
  {
    t: "Monthly Reporting",
    d: "Plain-English reports so you always know what's working and what to try next.",
    i: "◍",
  },
  {
    t: "Website & Landing Pages",
    d: "Landing page builds and updates in WordPress, Elementor, and WooCommerce.",
    i: "◒",
  },
];

// function Services() {
//   return (
//     <section id="services" className="relative px-5 py-24">
//       <div className="mx-auto max-w-6xl">
//         <Reveal>
//           <div className="max-w-2xl">
//             <span className="handwritten text-2xl text-[color:var(--star)]">what I help with</span>
//             <h2 className="heavy mt-2 text-5xl uppercase text-[color:var(--cream)] sm:text-6xl">
//               A studio-sized skillset —{" "}
//               <em className="font-display normal-case text-[color:var(--star)]">
//                 without the agency price tag.
//               </em>
//             </h2>
//           </div>
//         </Reveal>

//         <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {services.map((s, i) => (
//             <motion.div key={s.t} variants={fadeUp}>
//               <PaperCard rotate={i % 2 === 0 ? -1 : 1} className="h-full p-6">
//                 <div className="text-3xl text-[color:var(--accent)]">{s.i}</div>
//                 <h3 className="mt-4 font-display text-xl font-semibold text-[color:var(--burgundy)]">
//                   {s.t}
//                 </h3>
//                 <p className="mt-2 text-sm leading-relaxed text-[color:var(--ink)]/75">{s.d}</p>
//               </PaperCard>
//             </motion.div>
//           ))}
//         </StaggerGroup>
//       </div>
//     </section>
//   );
// }

// Why section removed per request.

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
            <span className="handwritten text-2xl text-[color:var(--star)]">featured projects</span>
            <h2 className="heavy mt-2 text-5xl uppercase text-[color:var(--cream)] sm:text-6xl">
              Selected work from the studio.
            </h2>
          </div>
        </Reveal>

        <BinderBoard className="mt-14" holes={7}>
          <StaggerGroup className="grid gap-8 md:grid-cols-2">
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
                      <span
                        key={t}
                        className="rounded-full border border-[color:var(--burgundy)]/20 px-3 py-1 text-[10px] uppercase tracking-widest text-[color:var(--burgundy)]/80"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </PaperCard>
              </motion.div>
            ))}
          </StaggerGroup>
        </BinderBoard>
      </div>
    </section>
  );
}

/* ---------- Logofolio ---------- */

type LogoMark = {
  name: string;
  image: string;
};

const logofolio: LogoMark[] = [
  {
    name: "African Flag Removal",
    image: "/logos/ammara-portfolio-logo-1.png",
  },
  {
    name: "Dr Imthiaz Hoosen",
    image: "/logos/ammara-portfolio-logo-3.png",
  },
    {
    name: "AH",
    image: "/logos/ammara-portfolio-logo-4.png",
  },
  {
    name: "Hydrotech Innovations",
    image: "/logos/ammara-portfolio-logo-5.png",
  },
  {
    name: "Shabana Ismail",
    image: "/logos/ammara-portfolio-logo-2.png",
  },
];

function Logofolio() {
  const logoColor = "#ffffff";

  return (
    <section id="logofolio" className="relative bg-[color:var(--burgundy-darker)] px-5 py-24">
      <ChalkStar
        className="pointer-events-none absolute left-[3%] top-14 rotate-[-10deg] text-[color:var(--cream)]/70"
        size={54}
      />

      <ChalkScribble
        className="pointer-events-none absolute right-[4%] top-10 rotate-[8deg] text-[color:var(--cream)]/70"
        size={110}
      />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <span className="handwritten text-2xl text-[color:var(--star)]">branding</span>

              <h2 className="heavy mt-2 text-5xl uppercase text-[color:var(--cream)] sm:text-6xl">
                Logo{" "}
                <em className="font-display normal-case italic text-[color:var(--star)]">
                  folio.
                </em>
              </h2>
              <p className="handwritten mt-5 max-w-xl text-2xl leading-relaxed text-[color:var(--cream)]/75">
                  A collection of logos created for businesses across different industries.              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="torn-paper-logo mt-6 px-6 pt-6 pb-12 sm:px-14 sm:pt-8 sm:pb-16">
            <StaggerGroup className="grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {logofolio.map((logo) => (
                <motion.div
                  key={logo.name}
                  variants={fadeUp}
                  className="flex flex-col items-center justify-end gap-4 text-center"
                >
                  <div className="flex h-36 w-full items-center justify-center">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="h-28 w-full object-contain brightness-0 invert sm:h-32"
                    />
                  </div>

                  <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                    {logo.name}
                  </div>
                </motion.div>
              ))}
            </StaggerGroup>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Social Media Projects ---------- */

type SocialTile = {
  bg: string;
  fg: string;
  label?: string;
  sub?: string;
  emoji?: string;
  variant?: "text" | "big" | "repeat";
};

type SocialProject = {
  category: string;
  name: string;
  description: string;
  swatches: string[];
  note: string;
  tiles: SocialTile[];
};

const socialProjects: SocialProject[] = [
  {
    category: "Social Media",
    name: "Gatesville Pet Centre",
    description:
      "A playful, product-first content system for a neighbourhood pet store — carousels, promo posts and Reels that turn browsing into buying.",
    swatches: ["oklch(0.55 0.19 40)", "oklch(0.72 0.16 65)", "oklch(0.92 0.05 80)"],
    note: "product posts that convert!",
    tiles: [
      {
        bg: "oklch(0.55 0.18 40)",
        fg: "oklch(0.97 0.02 80)",
        label: "2 DAYS",
        sub: "TO GO",
        variant: "big",
        emoji: "🐾",
      },
      {
        bg: "oklch(0.92 0.03 80)",
        fg: "oklch(0.35 0.13 40)",
        label: "New Arrivals",
        sub: "R120",
        emoji: "🦴",
      },
      {
        bg: "oklch(0.86 0.09 70)",
        fg: "oklch(0.30 0.12 40)",
        label: "Weekend Sale",
        sub: "up to 30% off",
        emoji: "🐶",
      },
      {
        bg: "oklch(0.35 0.13 40)",
        fg: "oklch(0.96 0.03 80)",
        label: "TREAT",
        sub: "of the week",
        variant: "big",
        emoji: "🐕",
      },
      {
        bg: "oklch(0.94 0.02 80)",
        fg: "oklch(0.35 0.13 40)",
        label: "Vet-Approved",
        sub: "food & care",
        emoji: "🐱",
      },
      {
        bg: "oklch(0.66 0.16 45)",
        fg: "oklch(0.97 0.02 80)",
        label: "3 DAYS",
        sub: "TO GO",
        variant: "repeat",
        emoji: "🐟",
      },
    ],
  },
  {
    category: "Social Media",
    name: "Nature's Secrets",
    description:
      "Short-form video and educational carousels for a wellness brand — soft, botanical, and confidently informative content that makes ingredients easy to trust.",
    swatches: ["oklch(0.55 0.14 145)", "oklch(0.78 0.09 130)", "oklch(0.95 0.03 100)"],
    note: "wellness that actually explains itself.",
    tiles: [
      {
        bg: "oklch(0.55 0.14 145)",
        fg: "oklch(0.97 0.02 100)",
        label: "GLOW",
        sub: "from within",
        variant: "big",
        emoji: "🌿",
      },
      {
        bg: "oklch(0.94 0.03 100)",
        fg: "oklch(0.35 0.12 145)",
        label: "Ingredient",
        sub: "spotlight",
        emoji: "🌱",
      },
      {
        bg: "oklch(0.78 0.09 130)",
        fg: "oklch(0.28 0.12 145)",
        label: "3 Reasons",
        sub: "to switch",
        emoji: "🍃",
      },
      {
        bg: "oklch(0.28 0.09 145)",
        fg: "oklch(0.95 0.03 100)",
        label: "NEW",
        sub: "drops Friday",
        variant: "big",
        emoji: "✨",
      },
      {
        bg: "oklch(0.9 0.05 90)",
        fg: "oklch(0.35 0.12 145)",
        label: "How to use",
        sub: "morning routine",
        emoji: "🧴",
      },
      {
        bg: "oklch(0.65 0.13 130)",
        fg: "oklch(0.97 0.02 100)",
        label: "SAVE",
        sub: "for later",
        variant: "repeat",
        emoji: "💚",
      },
    ],
  },
  {
    category: "Social Media",
    name: "WebXtreme",
    description:
      "Bold, editorial content for an agency — feed grids that look intentional, ad creatives that don't blend in, and stories that turn scrolls into sign-ups.",
    swatches: ["oklch(0.32 0.13 20)", "oklch(0.72 0.16 45)", "oklch(0.94 0.02 80)"],
    note: "content-led, results-first.",
    tiles: [
      {
        bg: "oklch(0.32 0.13 20)",
        fg: "oklch(0.96 0.03 80)",
        label: "BOOK A",
        sub: "STRATEGY CALL",
        variant: "big",
      },
      { bg: "oklch(0.94 0.02 80)", fg: "oklch(0.32 0.13 20)", label: "Case Study", sub: "01" },
      {
        bg: "oklch(0.72 0.16 45)",
        fg: "oklch(0.97 0.02 80)",
        label: "Client Win",
        sub: "+218% reach",
      },
      {
        bg: "oklch(0.22 0.09 22)",
        fg: "oklch(0.96 0.03 80)",
        label: "TIPS",
        sub: "for founders",
        variant: "big",
      },
      { bg: "oklch(0.86 0.05 60)", fg: "oklch(0.32 0.13 20)", label: "Behind", sub: "the scenes" },
      {
        bg: "oklch(0.55 0.15 25)",
        fg: "oklch(0.96 0.03 80)",
        label: "GROW",
        sub: "with us",
        variant: "repeat",
      },
    ],
  },
];

function SocialTileCard({ tile }: { tile: SocialTile }) {
  return (
    <div
      className="relative aspect-square overflow-hidden rounded-sm shadow-md"
      style={{ background: tile.bg, color: tile.fg }}
    >
      {tile.variant === "repeat" ? (
        <div className="absolute inset-0 flex flex-wrap content-start gap-x-2 gap-y-1 p-3 text-[10px] font-black uppercase leading-none opacity-90 sm:text-xs">
          {Array.from({ length: 18 }).map((_, i) => (
            <span key={i} className={i % 3 === 0 ? "italic" : ""}>
              {tile.label} {tile.sub}
            </span>
          ))}
          {tile.emoji && (
            <div className="absolute inset-0 grid place-items-center text-4xl sm:text-5xl">
              {tile.emoji}
            </div>
          )}
        </div>
      ) : (
        <div className="flex h-full flex-col justify-between p-3 sm:p-4">
          <div className="flex items-start justify-between">
            <span className="text-[9px] font-semibold uppercase tracking-[0.2em] opacity-80 sm:text-[10px]">
              post
            </span>
            {tile.emoji && <span className="text-xl sm:text-2xl">{tile.emoji}</span>}
          </div>
          <div>
            <div
              className={`font-black uppercase leading-none ${
                tile.variant === "big" ? "text-2xl sm:text-4xl" : "text-lg sm:text-xl"
              }`}
              style={{ fontFamily: "var(--font-heavy)" }}
            >
              {tile.label}
            </div>
            {tile.sub && (
              <div className="mt-1 text-[10px] font-medium uppercase tracking-wider opacity-90 sm:text-xs">
                {tile.sub}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function SocialProjectRow({ project, reverse }: { project: SocialProject; reverse?: boolean }) {
  return (
    <Reveal>
      <div
        className={`grid gap-8 lg:gap-14 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="grid grid-cols-3 gap-3 sm:gap-4">
          {project.tiles.map((t, i) => (
            <SocialTileCard key={i} tile={t} />
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[color:var(--burgundy)]/70">
            {project.category}
          </div>
          <h3 className="mt-3 heavy text-3xl uppercase text-[color:var(--burgundy)] sm:text-4xl">
            {project.name}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-[color:var(--ink)]/80 sm:text-base">
            {project.description}
          </p>
          <div className="mt-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              {project.swatches.map((c, i) => (
                <span
                  key={i}
                  className="h-7 w-7 rounded-full ring-2 ring-[color:var(--paper)]"
                  style={{ background: c }}
                  aria-hidden
                />
              ))}
            </div>
            <span className="handwritten text-xl text-[color:var(--ink)]/70 sm:text-2xl">
              {project.note}
            </span>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function SocialProjects() {
  return (
    <section id="social" className="relative px-5 py-24">
      <ChalkStar
        className="pointer-events-none absolute left-[6%] top-12 text-[color:var(--cream)]/70 rotate-[10deg]"
        size={54}
      />
      <ChalkSwirl
        className="pointer-events-none absolute right-[4%] top-16 hidden text-[color:var(--cream)]/70 lg:block"
        size={130}
      />

      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--star)]">
              social media
            </span>
            <h2 className="heavy mt-2 text-5xl uppercase text-[color:var(--cream)] sm:text-6xl">
              CONTENT THAT{" "}
              <em className="font-display normal-case italic text-[color:var(--star)]">
                earns attention.
              </em>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 torn-paper px-5 py-14 sm:px-12 sm:py-20">
          <div className="space-y-16 sm:space-y-24">
            {socialProjects.map((p, i) => (
              <SocialProjectRow key={p.name} project={p} reverse={i % 2 === 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// sample results section
const metrics = [
  { v: "10+", l: "brands across web, design & social media", note: "CLIENTS" },
  { v: "43K", l: "highest organic facebook reel", note: "TOP REEL" },
  { v: "R2000", l: "example ad budget managed", note: "META ADS" },
  { v: "3", l: "social media • Meta Ads • web ", note: "SERVICES" },
];

function Results() {
  return (
    <section className="relative px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--star)]">expertise</span>
            <h2 className="heavy mt-2 text-5xl uppercase text-[color:var(--cream)] sm:text-6xl">
              RESULTS FROM CLIENT WORK.
            </h2>
          </div>
        </Reveal>

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <motion.div key={m.l} variants={fadeUp}>
              <PaperCard rotate={[-2, 1.5, -1, 2][i]} className="p-6">
                <Tape className="-top-3 left-6" rotate={-8 + i * 4} />
                <div className="text-[10px] uppercase tracking-widest text-[color:var(--accent)]">
                  {m.note}
                </div>
                <div className="mt-2 font-display text-5xl font-semibold text-[color:var(--burgundy)]">
                  {m.v}
                </div>
                <div className="mt-2 text-sm text-[color:var(--ink)]/75">{m.l}</div>
              </PaperCard>
            </motion.div>
          ))}
        </StaggerGroup>

        <Reveal delay={0.2}>
          <p className="handwritten mx-auto mt-10 max-w-xl text-center text-xl text-[color:var(--cream)]/70">
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
    features: [
      "Campaign setup",
      "Targeting",
      "Ad copy",
      "Creative direction",
      "Basic performance review",
    ],
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
            <span className="handwritten text-2xl text-[color:var(--star)]">
              services & packages
            </span>
            <h2 className="heavy mt-2 text-5xl uppercase text-[color:var(--cream)] sm:text-6xl">
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
                <h3 className="font-display text-2xl font-semibold text-[color:var(--burgundy)]">
                  {p.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-semibold text-[color:var(--ink)]">
                    {p.price}
                  </span>
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

const experiences = [
    { y: "Present", t: "Freelancing " },
  { y: "Jun 2025 – May 2026", t: "WebXtreme ", p: "Web Developer & Social Media Manager" },
  { y: "Nov 2024 — May 2025", t: "The Three Stars ", p: "Web Designer and Developer" },
  { y: "Apr 2024 — Sept 2024", t: "Life Choices Studio", p: "Technical intern" },
];

const educationList = [
  { y: "Ongoing", t: "SMMA Academy", p: "Social Media Management" },
  { y: "2025", t: "She Can Do", p: "UI/UX Part-time Internship" },
  { y: "2023 — 2024", t: "Life Choices Coding Academy", p: "Certificate in Web Development" },
];

const skillTags = [
  { t: "Social Media", c: "oklch(0.65 0.22 340)" },
  { t: "Meta Ads", c: "oklch(0.62 0.18 145)" },
  { t: "Branding", c: "oklch(0.68 0.17 45)" },
  { t: "Marketing", c: "oklch(0.6 0.16 240)" },
  { t: "Content Strategy", c: "oklch(0.6 0.22 340)" },
  { t: "Reels Editing", c: "oklch(0.65 0.2 300)" },
  { t: "Visual Storytelling", c: "oklch(0.78 0.16 90)" },
];

function Keycap({
  label,
  color,
  textColor = "oklch(0.2 0.05 22)",
  bg = "oklch(0.98 0.01 80)",
  italic = false,
}: {
  label: ReactNode;
  color?: string;
  textColor?: string;
  bg?: string;
  italic?: boolean;
}) {
  return (
    <div
      className="relative flex aspect-square items-center justify-center rounded-lg sm:rounded-xl"
      style={{
        background: color ?? bg,
        boxShadow:
          "inset 0 -3px 0 oklch(0 0 0 / 0.25), inset 0 2px 0 oklch(1 0 0 / 0.35), 0 3px 6px -2px oklch(0 0 0 / 0.35)",
      }}
    >
      <span
        className={`select-none text-2xl font-black leading-none sm:text-3xl ${italic ? "italic" : ""}`}
        style={{
          color: color ? "oklch(0.98 0.01 80)" : textColor,
          fontFamily: "var(--font-display)",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Keyboard() {
const tools = [
  { name: "Canva", logo: canvaLogo },
  { name: "CapCut", logo: capcutLogo },
  { name: "Meta", logo: metaLogo },
  { name: "Metricool", logo: metricoolLogo },
  { name: "Elementor", logo: elementorLogo },
  { name: "WordPress", logo: wordpressLogo },
];

  return (
    <div
      className="relative rounded-[24px] border border-white/40 p-4 sm:p-5"
      style={{
        background:
          "linear-gradient(145deg, oklch(0.88 0.02 80), oklch(0.68 0.02 80))",
        boxShadow:
          "inset 0 3px 0 oklch(1 0 0 / 0.6), inset 0 -6px 0 oklch(0 0 0 / 0.25), 0 20px 35px -18px oklch(0 0 0 / 0.7)",
      }}
    >
      <div
        className="grid grid-cols-3 gap-3 rounded-2xl p-3 sm:gap-4 sm:p-4"
        style={{
          background: "oklch(0.55 0.015 80)",
          boxShadow:
            "inset 0 4px 8px oklch(0 0 0 / 0.3), inset 0 -1px 0 oklch(1 0 0 / 0.25)",
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool.label}
            className="group relative flex min-h-[92px] cursor-default flex-col items-center justify-center rounded-xl border border-white/60 px-2 text-center transition-transform duration-150 hover:translate-y-[3px] sm:min-h-[108px]"
            style={{
              background:
                "linear-gradient(145deg, oklch(0.99 0.01 80), oklch(0.9 0.015 80))",
              color: "oklch(0.25 0.06 25)",
              boxShadow:
                "inset 0 2px 0 oklch(1 0 0 / 0.9), 0 7px 0 oklch(0.65 0.02 80), 0 10px 12px oklch(0 0 0 / 0.35)",
            }}
          >
            <span className="absolute left-2.5 top-2 text-[9px] font-bold uppercase tracking-[0.12em] opacity-50">
              {tool.shortcut}
            </span>

            <img
              src={tool.logo}
              alt={tool.name}
                className="h-24 w-24 object-contain transition-transform duration-200 group-hover:scale-105"
            />

            <span className="pointer-events-none absolute inset-x-2 top-1.5 h-px bg-white/80" />
          </div>
        ))}
      </div>

      <div className="mt-4 flex items-center justify-between px-2">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[oklch(0.48_0.18_25)]" />
          <span className="h-2 w-2 rounded-full bg-[oklch(0.75_0.14_80)]" />
          <span className="h-2 w-2 rounded-full bg-[oklch(0.5_0.12_150)]" />
        </div>

        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-black/45">
          Creative toolkit
        </span>
      </div>
    </div>
  );
}

function TimelineList({
  title,
  items,
}: {
  title: string;
  items: { y: string; t: string; p: string }[];
}) {
  return (
    <div>
      <h3 className="font-display text-3xl italic text-[color:var(--cream)] sm:text-4xl">
        {title}
      </h3>
      <ul className="mt-5 space-y-4">
        {items.map((it, i) => (
          <li
            key={i}
            className="grid grid-cols-[84px_14px_1fr] items-start gap-3 sm:grid-cols-[110px_14px_1fr] sm:gap-4"
          >
            <span className="pt-1.5 text-right text-[10px] uppercase tracking-wider text-[color:var(--cream)]/60 sm:text-xs">
              {it.y}
            </span>
            <span className="relative mt-2 block h-2.5 w-2.5 justify-self-center rounded-full bg-[color:var(--star)] shadow-[0_0_0_3px_oklch(0.28_0.12_22)]">
              {i < items.length - 1 && (
                <span className="absolute left-1/2 top-[calc(100%+2px)] h-[calc(100%+1.25rem)] w-px -translate-x-1/2 bg-[color:var(--cream)]/25" />
              )}
            </span>
            <div className="min-w-0">
              <div className="font-display text-lg font-semibold text-[color:var(--cream)] sm:text-xl">
                {it.t}
              </div>
              <div className="text-xs text-[color:var(--cream)]/70 sm:text-sm">{it.p}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Background() {
  return (
    <section id="background" className="relative overflow-hidden px-5 py-24">
      <ChalkStar
        className="pointer-events-none absolute left-[4%] top-10 text-[color:var(--cream)]/80 rotate-[-12deg]"
        size={70}
      />
      <ChalkSpiral
        className="pointer-events-none absolute right-[6%] top-14 hidden text-[color:var(--cream)]/70 sm:block"
        size={120}
      />
      <ChalkScribble
        className="pointer-events-none absolute left-[45%] bottom-8 text-[color:var(--cream)]/70 rotate-[6deg]"
        size={120}
      />

      <div className="relative mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--star)]">background</span>
            <h2 className="heavy mt-2 text-5xl uppercase text-[color:var(--cream)] sm:text-6xl">
              Experience & education.
            </h2>
          </div>
        </Reveal>

        {/* Upper row: Career (left) | Education (right) */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal>
            <TimelineList title="Career Experiences" items={experiences} />
          </Reveal>
          <Reveal delay={0.1}>
            <TimelineList title="Education" items={educationList} />
          </Reveal>
        </div>

        {/* Lower row: Skills (left) | Tools I Use (right) */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2">
          <Reveal delay={0.15}>
            <div>
              <h3 className="font-display text-3xl italic text-[color:var(--cream)] sm:text-4xl">
                Skills
              </h3>
              <StaggerGroup className="mt-5 flex flex-wrap gap-2 sm:gap-3">
                {skillTags.map((s) => (
                  <motion.span
                    key={s.t}
                    variants={fadeUp}
                    className="rounded-full px-4 py-2 text-xs font-semibold text-[color:var(--cream)] shadow-md sm:text-sm"
                    style={{ background: s.c }}
                  >
                    {s.t}
                  </motion.span>
                ))}
              </StaggerGroup>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div>
              <h3 className="font-display text-3xl italic text-[color:var(--cream)] sm:text-4xl">
                Tools I use
              </h3>
              <div className="mt-5 max-w-sm">
                <Keyboard />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// client reviews section
const testimonials = [
  {
    q: "Ammara is a young, talented and creative professional who brought fresh ideas to the table while remaining attentive to our firm's specific needs and branding. Her support was consistent, her communication was clear and she was always willing to go the extra mile to ensure we were satisfied with the final product.",
    n: "— Muzzamil",
    r: "Founder & Principal Attorney",
  },
  {
    q: "I have to say that I am quite chuffed by the work completed thus far and look forward to strengthening the relationship in moving forward.",
    n: "— Rameez",
    r: "Founder & Managing Director",
  },
  {
    q: "The reports finally made sense. We knew what was working and what to double down on every month.",
    n: "— Irfaan",
    r: "Business Owner",
  },
];

function Testimonials() {
  return (
    <section
          id="testimonials"
          className="relative bg-[color:var(--burgundy-darker)] px-5 py-24 text-[color:var(--cream)]"
        >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="max-w-2xl">
            <span className="handwritten text-2xl text-[color:var(--star)]">reviews</span>
            <h2 className="heavy mt-2 text-5xl uppercase sm:text-6xl">What clients say.</h2>
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
                <div className="font-display text-5xl leading-none text-[color:var(--accent)]">
                  "
                </div>
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
          <span className="handwritten text-2xl text-[color:var(--star)]">let's talk</span>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="heavy mt-3 text-5xl uppercase leading-[0.95] text-[color:var(--cream)] sm:text-7xl">
            Ready to make your socials{" "}
            <em className="font-display normal-case text-[color:var(--star)]">work harder?</em>
          </h2>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a
              href="mailto:hoosenammara@gmail.com"
              className="rounded-full bg-[color:var(--cream)] px-8 py-4 text-base font-medium text-[color:var(--burgundy)] shadow-lg transition hover:-translate-y-0.5 hover:bg-[color:var(--star)]"
            >
              Let's work together →
            </a>
            <a
              href="mailto:hoosenammara@gmail.com"
              className="text-sm text-[color:var(--cream)]/60 underline-offset-4 hover:underline"
            >
              hoosenammara@gmail.com
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[color:var(--cream)]/15 px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-[color:var(--cream)]/60 sm:flex-row">
        <div>© {new Date().getFullYear()} Ammara Hoosen · South Africa</div>
        <div className="handwritten text-lg text-[color:var(--star)]">all rights reserved ✿</div>
      </div>
    </footer>
  );
}

export default function Portfolio() {
  return (
    <main className="min-h-screen text-[color:var(--cream)]">
      <Nav />
      <Hero />
      <About />
      <Background />
      <Logofolio />
      <SocialProjects />
      <Results />
      <Packages />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
