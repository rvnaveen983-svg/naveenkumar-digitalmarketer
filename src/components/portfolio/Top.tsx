import { useEffect, useState } from "react";
import { ArrowRight, Linkedin, Instagram, Mail, Menu, X, Megaphone, Palette, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Counter, LINKS, MagneticButton, Pill, Section } from "./ui";

const NAV = ["About", "Skills", "Experience", "Projects", "Achievements", "Training", "Contact"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 20);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open ? "glass border-x-0 border-t-0" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5" aria-label="Main">
        <a href="#top" className="font-display text-sm font-bold tracking-[0.2em]">
          NAVEEN<span className="text-gradient"> KUMAR</span>
        </a>
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV.map((n) => (
            <li key={n}>
              <a href={`#${n.toLowerCase()}`} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                {n}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="hidden rounded-full bg-brand px-5 py-2 text-sm font-semibold text-primary-foreground lg:inline-flex">
          Let's Connect
        </a>
        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 px-5 pb-6 lg:hidden">
          {NAV.map((n) => (
            <li key={n}>
              <a onClick={() => setOpen(false)} href={`#${n.toLowerCase()}`} className="block rounded-lg px-3 py-3 text-base hover:bg-secondary">
                {n}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a onClick={() => setOpen(false)} href="#contact" className="block rounded-full bg-brand py-3 text-center font-semibold text-primary-foreground">
              Let's Connect
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}

export function Socials({ className }: { className?: string }) {
  const items = [
    { href: LINKS.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: LINKS.instagram, icon: Instagram, label: "Instagram" },
    { href: LINKS.email, icon: Mail, label: "Email" },
  ];
  return (
    <div className={cn("flex gap-3", className)}>
      {items.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="glass grid h-11 w-11 place-items-center rounded-full transition-all hover:-translate-y-1 hover:text-primary"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-20 pt-32 md:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0" />
      <div className="animate-blob pointer-events-none absolute -left-32 top-20 h-96 w-96 rounded-full bg-primary/25 blur-3xl" />
      <div className="animate-blob pointer-events-none absolute -right-20 top-60 h-96 w-96 rounded-full bg-accent/25 blur-3xl [animation-delay:-6s]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div className="reveal">
          <div className="glass mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
            </span>
            Open to Digital Marketing Opportunities
          </div>
          <p className="mb-4 text-lg text-muted-foreground">Hi, I'm Naveen Kumar</p>
          <h1 className="text-4xl font-bold leading-[1.05] sm:text-5xl md:text-7xl">
            Digital Marketing Specialist
            <span className="mt-2 block text-gradient">Turning Ideas Into Digital Growth.</span>
          </h1>
          <p className="mt-6 font-display text-sm font-semibold tracking-wide text-foreground/80 md:text-base">
            Meta Ads • SEO • Social Media • Content • AI Marketing
          </p>
          <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">
            Digital Marketing professional with 1+ year of hands-on experience in Meta Ads, SEO, Social Media
            Marketing, Lead Generation, Content Creation and AI-powered marketing workflows.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <MagneticButton href="#projects">
              View My Work <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Let's Work Together
            </MagneticButton>
          </div>
          <Socials className="mt-8" />
        </div>

        <div className="reveal relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-brand opacity-40 blur-2xl" />
          {/* Replace this block with <img src="..." alt="Naveen Kumar" /> */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-card">
            <div className="absolute inset-0 grid place-items-center bg-gradient-to-br from-secondary to-card">
              <span className="font-display text-8xl font-bold text-gradient" role="img" aria-label="Naveen Kumar profile photo placeholder">
                NK
              </span>
            </div>
          </div>
          <div className="glass animate-float absolute -left-6 top-10 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold">
            <Megaphone className="h-4 w-4 text-primary" /> Meta Ads
          </div>
          <div className="glass animate-float absolute -right-4 top-1/2 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold [animation-delay:-2s]">
            <Sparkles className="h-4 w-4 text-accent" /> AI Marketing
          </div>
          <div className="glass animate-float absolute -bottom-5 left-8 flex items-center gap-2 rounded-2xl px-4 py-3 text-sm font-semibold [animation-delay:-4s]">
            <Palette className="h-4 w-4 text-primary" /> SEO & Content
          </div>
        </div>
      </div>
    </section>
  );
}

const STATS = [
  { v: 1, s: "+", l: "Years Digital Marketing Experience" },
  { v: 5, s: "", l: "Years Banking & Customer Operations Experience" },
  { v: 3, s: "+", l: "Industries / Business Domains Worked With" },
  { v: 6, s: " mo+", l: "Students Trained in Digital Marketing" },
];

export function Stats() {
  return (
    <section className="px-5" aria-label="Quick stats">
      <div className="glass mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-3xl md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.l} className="reveal p-6 md:p-8">
            <p className="font-display text-4xl font-bold text-gradient md:text-5xl">
              <Counter value={s.v} suffix={s.s} />
            </p>
            <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function About() {
  const cards = [
    { t: "Marketing", icon: Megaphone, items: ["Meta Ads", "SEO", "Social Media", "Lead Generation", "Content Strategy"] },
    { t: "Creative", icon: Palette, items: ["Video Editing", "Canva", "Reels", "Poster Design", "AI Video Generation", "Content Creation"] },
  ];
  return (
    <Section id="about" eyebrow="About Me" title={<>More Than Just a <span className="text-gradient">Marketer.</span></>}>
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
        <div className="reveal space-y-5 text-muted-foreground md:text-lg">
          <p>
            Digital Marketing professional with hands-on experience in Social Media Marketing, SEO, Meta Ads, Lead
            Generation, Content Creation and digital campaign management.
          </p>
          <p>
            I enjoy combining marketing strategy, creativity, analytics and AI tools to build content and campaigns
            that solve real business problems.
          </p>
          <p>
            Before moving into Digital Marketing, I spent <span className="text-foreground">5 years in banking and loan operations</span>, where I developed strong
            communication, customer relationship management, negotiation, follow-up and problem-solving skills.
          </p>
          <p>
            Currently pursuing BBA while continuously developing my expertise in performance marketing, SEO,
            analytics, AI marketing and digital strategy.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
          {cards.map(({ t, icon: Icon, items }) => (
            <div key={t} className="reveal glass card-hover rounded-3xl p-6">
              <div className="mb-4 flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand text-primary-foreground">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-xl font-semibold">{t}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {items.map((i) => (
                  <Pill key={i}>{i}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
