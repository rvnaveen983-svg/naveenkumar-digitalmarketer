import { ArrowRight, Award, BadgeCheck, GraduationCap, Linkedin, Mail, MapPin, Mic, Phone, Presentation, BookOpen } from "lucide-react";
import { LINKS, MagneticButton, Pill, Section } from "./ui";
import { Socials } from "./Top";

const STEPS = [
  ["Understand", "Understand the business, audience and objective."],
  ["Research", "Research competitors, keywords, audience behaviour and market opportunities."],
  ["Create", "Create campaigns, content, creatives and marketing strategies."],
  ["Optimize", "Analyse performance and improve campaigns based on data."],
  ["Grow", "Focus on sustainable visibility, engagement, leads and business growth."],
];

export function Process() {
  return (
    <Section eyebrow="Case Study" title={<>How I <span className="text-gradient">Work</span></>}>
      <div className="relative grid gap-6 md:grid-cols-5">
        <div className="animate-dash absolute left-0 right-0 top-7 hidden h-px md:block [background:repeating-linear-gradient(90deg,var(--primary)_0_10px,transparent_10px_20px)] [background-size:40px_1px]" />
        {STEPS.map(([t, d], i) => (
          <div key={t} className="reveal relative" style={{ transitionDelay: `${i * 100}ms` }}>
            <span className="relative grid h-14 w-14 place-items-center rounded-2xl bg-brand font-display font-bold text-primary-foreground shadow-glow">
              0{i + 1}
            </span>
            <h3 className="mt-5 text-lg font-semibold">{t}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

const ACH = [
  "LinkedIn Profile Verification Badge",
  "Digital Marketing Trainer",
  "Practical Meta Ads Experience",
  "Practical SEO & Google Search Console Experience",
  "Created digital marketing content for education brands",
  "Worked on B2B industrial automation marketing",
  "Worked on social media marketing and lead generation projects",
  "Trained students in practical Digital Marketing concepts",
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Achievements" title={<>Milestones & <span className="text-gradient">Recognition</span></>}>
      <div className="reveal relative mb-6 overflow-hidden rounded-3xl border border-primary/40 bg-card p-8 shadow-glow md:p-10">
        <div className="absolute -right-10 -top-10 h-56 w-56 rounded-full bg-brand opacity-30 blur-3xl" />
        <div className="relative flex flex-col gap-6 md:flex-row md:items-center">
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-brand text-primary-foreground">
            <Mic className="h-7 w-7" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Featured</p>
            <h3 className="mt-1 text-2xl font-bold md:text-3xl">Guest Speaker / Digital Marketing Interaction</h3>
            <p className="mt-1 font-semibold">St. Joseph's College of Engineering</p>
            <p className="mt-2 text-muted-foreground">Shared practical insights and real-world experience in Digital Marketing with students.</p>
          </div>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ACH.map((a, i) => {
          const Icon = i === 0 ? BadgeCheck : Award;
          return (
            <div key={a} className="reveal glass card-hover rounded-2xl p-5">
              <Icon className="mb-3 h-5 w-5 text-primary" />
              <p className="text-sm font-medium">{a}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

const TOPICS = ["SEO", "Meta Ads", "Google Ads", "Social Media Marketing", "Content Creation", "Keyword Research", "Google Search Console", "Digital Marketing Fundamentals", "AI Marketing Tools"];

export function Training() {
  return (
    <Section id="training">
      <div className="reveal glass relative overflow-hidden rounded-[2rem] p-8 md:p-14">
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <Presentation className="mb-4 h-8 w-8 text-primary" />
            <h2 className="text-3xl font-bold md:text-5xl">
              Learn Digital Marketing <span className="text-gradient">With Me</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">Practical Digital Marketing training focused on real-world skills.</p>
            <p className="mt-8 font-display font-semibold">Interested in Learning?</p>
            <MagneticButton href="#contact" className="mt-4">
              Contact Me <ArrowRight className="h-4 w-4" />
            </MagneticButton>
          </div>
          <div className="flex flex-wrap gap-3">
            {TOPICS.map((t) => (
              <span key={t} className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium transition-all hover:-translate-y-1 hover:border-primary/60">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const EDU = [
  { t: "Bachelor of Business Administration", s: "Bharathiyar University, Coimbatore", d: "Currently Pursuing" },
  { t: "Digital Marketing Course", s: "Zia EdTech, Chennai", d: "Completed – 2025", topics: ["SEO", "Social Media Marketing", "Meta Ads", "Google Ads", "Keyword Research", "Website Audit", "Content Marketing", "AI Tools"] },
  { t: "GKNM Higher Secondary School", s: "Coimbatore", d: "Completed – 2018" },
];

const JOURNEY = [
  ["2020", "Started professional career in banking and customer operations"],
  ["2025", "Transitioned into Digital Marketing"],
  ["2025", "Completed Digital Marketing training"],
  ["2025–Present", "Digital Marketer at Zia EdTech"],
  ["Present", "Digital Marketing Trainer + Performance Marketing + SEO + Social Media"],
  ["Future", "Performance Marketing / Digital Strategy / Growth Marketing"],
];

export function EducationJourney() {
  return (
    <Section eyebrow="Education & Journey" title={<>The Path <span className="text-gradient">So Far</span></>}>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <GraduationCap className="h-5 w-5 text-primary" /> Education
          </h3>
          <div className="space-y-4">
            {EDU.map((e) => (
              <div key={e.t} className="reveal glass card-hover rounded-2xl p-6">
                <p className="text-xs font-semibold text-primary">{e.d}</p>
                <h4 className="mt-1 text-lg font-semibold">{e.t}</h4>
                <p className="text-sm text-muted-foreground">{e.s}</p>
                {e.topics && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {e.topics.map((t) => (
                      <Pill key={t}>{t}</Pill>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-6 flex items-center gap-2 text-xl font-semibold">
            <ArrowRight className="h-5 w-5 text-primary" /> Professional Journey
          </h3>
          <ol className="relative space-y-6 border-l border-dashed border-primary/40 pl-8">
            {JOURNEY.map(([y, t], i) => (
              <li key={i} className="reveal relative" style={{ transitionDelay: `${i * 80}ms` }}>
                <span
                  className={
                    "absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full border-2 border-primary " +
                    (i === JOURNEY.length - 1 ? "bg-transparent" : "bg-brand")
                  }
                />
                <p className="font-display text-sm font-bold text-gradient">{y}</p>
                <p className="mt-1 text-muted-foreground">{t}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}

const INSIGHTS = [
  ["SEO", "Why indexing issues quietly kill your traffic", "A practical checklist for using Search Console to find and fix pages Google ignores."],
  ["Meta Ads", "Lowering CPL without losing lead quality", "What I look at in lead forms, audiences and creatives before touching budget."],
  ["Digital Marketing", "Building a content calendar that actually ships", "A simple weekly system for planning reels, posters and carousels."],
  ["AI Marketing", "AI tools in my daily marketing workflow", "Where AI saves real time — and where human judgement still matters."],
  ["Social Media", "Reels that educate, not just entertain", "Turning course topics into short-form videos students want to watch."],
  ["Career Tips", "From banking to digital marketing", "Lessons from switching careers and the skills that transferred."],
];

export function Insights() {
  return (
    <Section eyebrow="Content" title={<>Marketing <span className="text-gradient">Insights</span></>} subtitle="Upcoming posts and ideas — follow along on LinkedIn.">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {INSIGHTS.map(([c, t, d]) => (
          <a key={t} href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="reveal glass card-hover group flex flex-col rounded-2xl p-6">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary">{c}</span>
            <h3 className="mt-3 text-lg font-semibold">{t}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{d}</p>
            <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold group-hover:text-primary">
              Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
      <div className="mt-10 text-center">
        <MagneticButton href={LINKS.linkedin} variant="ghost" external>
          <Linkedin className="h-4 w-4" /> View More on LinkedIn
        </MagneticButton>
      </div>
    </Section>
  );
}

export function Contact() {
  const details = [
    { icon: Mail, label: "rvnaveen983@gmail.com", href: LINKS.email },
    { icon: Phone, label: "+91 63827 00550", href: LINKS.phone },
    { icon: MapPin, label: "Chennai, Tamil Nadu, India" },
    { icon: Linkedin, label: "linkedin.com/in/naveen-r", href: LINKS.linkedin },
  ];
  return (
    <Section id="contact">
      <div className="reveal relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 text-center md:p-16">
        <div className="animate-blob absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="animate-blob absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl [animation-delay:-8s]" />
        <div className="relative">
          <h2 className="mx-auto max-w-3xl text-4xl font-bold md:text-6xl">
            Have a Project or <span className="text-gradient">Opportunity?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-muted-foreground md:text-lg">
            Whether you're looking for a Digital Marketing professional, need help with Meta Ads and SEO, or want
            practical Digital Marketing training, let's connect.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <MagneticButton href={LINKS.email}>
              Let's Talk <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton href={LINKS.linkedin} variant="ghost" external>
              View LinkedIn
            </MagneticButton>
          </div>
          <div className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {details.map(({ icon: Icon, label, href }) => {
              const inner = (
                <>
                  <Icon className="h-4 w-4 shrink-0 text-primary" />
                  <span className="truncate">{label}</span>
                </>
              );
              const cls = "glass flex items-center gap-2 rounded-xl px-4 py-3 text-sm transition-colors hover:text-primary";
              return href ? (
                <a key={label} href={href} className={cls} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={label} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold">Naveen Kumar</p>
          <p className="mt-1 text-sm text-muted-foreground">Digital Marketing Specialist | Meta Ads | SEO | Social Media Marketing</p>
          <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
            <BookOpen className="h-3.5 w-3.5 text-primary" /> Building brands. Creating content. Driving digital growth.
          </p>
        </div>
        <Socials />
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted-foreground">© 2026 Naveen Kumar. All Rights Reserved.</p>
    </footer>
  );
}
