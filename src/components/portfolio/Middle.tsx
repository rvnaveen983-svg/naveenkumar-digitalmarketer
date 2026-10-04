import { useState } from "react";
import { ArrowUpRight, Briefcase, Building2, ChevronDown, Search, Share2, Target, Bot, Factory } from "lucide-react";
import { cn } from "@/lib/utils";
import { Pill, Section } from "./ui";

const STACK = [
  { t: "Performance Marketing", icon: Target, items: ["Meta Ads", "Facebook Ads", "Instagram Ads", "Lead Generation", "Audience Targeting", "Retargeting", "Campaign Optimization", "Lead Forms", "CPL Analysis", "Meta Pixel"] },
  { t: "SEO", icon: Search, items: ["On-Page SEO", "Off-Page SEO", "Technical SEO Basics", "Local SEO", "Keyword Research", "Competitor Analysis", "Google Search Console", "GA4", "Sitemap & Indexing", "SEO Audit", "Meta Titles & Descriptions", "Content Optimization"] },
  { t: "Content & Social Media", icon: Share2, items: ["Social Media Marketing", "Social Media Management", "Content Writing", "Content Strategy", "Instagram Reels", "Short-form Video", "Video Editing", "Canva", "Poster Design", "Thumbnail Design", "Social Media Calendars"] },
  { t: "AI & Digital Tools", icon: Bot, items: ["AI Content Tools", "AI Video Generation", "AI Marketing Tools", "Google Ads", "Meta Business Suite", "Google Search Console", "Google Analytics 4", "Keyword Research Tools", "Basic Next.js Website Understanding"] },
];

export function Skills() {
  const [active, setActive] = useState(0);
  const cur = STACK[active];
  return (
    <Section id="skills" eyebrow="My Stack" title={<>My Digital Marketing <span className="text-gradient">Stack</span></>}>
      <div className="reveal grid gap-6 lg:grid-cols-[300px_1fr]">
        <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible" role="tablist">
          {STACK.map(({ t, icon: Icon }, i) => (
            <button
              key={t}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={cn(
                "flex shrink-0 items-center gap-3 rounded-2xl border px-4 py-4 text-left text-sm font-semibold transition-all",
                i === active ? "border-primary/50 bg-secondary shadow-glow" : "border-border text-muted-foreground hover:bg-secondary/50",
              )}
            >
              <Icon className={cn("h-5 w-5", i === active && "text-primary")} />
              {t}
            </button>
          ))}
        </div>
        <div key={active} className="glass animate-in fade-in slide-in-from-bottom-2 rounded-3xl p-6 duration-500 md:p-10">
          <h3 className="mb-6 text-2xl font-semibold">{cur.t}</h3>
          <div className="flex flex-wrap gap-3">
            {cur.items.map((s) => (
              <span
                key={s}
                className="rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium transition-all hover:-translate-y-1 hover:border-primary/60 hover:text-primary"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

const EXP = [
  {
    co: "Zia EdTech",
    role: "Digital Marketer / Digital Marketing Trainer",
    date: "2025 – Present",
    loc: "Chennai, Tamil Nadu",
    icon: Briefcase,
    points: [
      "Manage Meta Ads campaigns for education and training programs",
      "Build lead-generation campaigns with audience targeting and optimization",
      "Monitor CPL, CTR, reach and lead quality; create and optimize lead forms",
      "Keyword research, Google Search Console, on-page and technical SEO support",
      "Create social media calendars, reels, posters, thumbnails and promotional creatives",
      "Use AI tools for content and marketing workflows",
      "Content for Data Science, Data Analytics, Full Stack, Digital Marketing, AI/ML, Cybersecurity and Cloud/DevOps programs",
      "Conduct online Digital Marketing training sessions",
    ],
    skills: ["Meta Ads", "SEO", "GSC", "Content", "Social Media", "AI Tools", "Training"],
  },
  {
    co: "IndusInd Bank",
    role: "Loan / Customer Service Operations",
    date: "2020 – 2025",
    loc: "Tamil Nadu",
    icon: Building2,
    points: [
      "Managed 40–50 customer interactions per day",
      "Handled loan-related customer queries and follow-ups",
      "Maintained customer relationships and managed objections",
      "Followed internal processes and compliance requirements",
      "Developed communication, negotiation and relationship-management skills",
    ],
    skills: ["Customer Communication", "Negotiation", "Follow-up", "CRM", "Problem Solving"],
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title={<>Where I've <span className="text-gradient">Worked</span></>}>
      <ol className="relative space-y-10 border-l border-border pl-8 md:pl-12">
        {EXP.map(({ co, role, date, loc, icon: Icon, points, skills }) => (
          <li key={co} className="reveal relative">
            <span className="absolute -left-[3.05rem] top-1 grid h-10 w-10 place-items-center rounded-full bg-brand text-primary-foreground shadow-glow md:-left-[4.3rem]">
              <Icon className="h-4 w-4" />
            </span>
            <div className="glass card-hover grid gap-6 rounded-3xl p-6 md:grid-cols-[1fr_220px] md:p-8">
              <div>
                <p className="text-sm font-semibold text-primary">{date}</p>
                <h3 className="mt-1 text-2xl font-bold">{co}</h3>
                <p className="text-muted-foreground">
                  {role} · {loc}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  {points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap content-start gap-2">
                {skills.map((s) => (
                  <Pill key={s}>{s}</Pill>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

type Project = {
  n: string;
  title: string;
  cat: string;
  desc: string;
  tags: string[];
  objective?: string;
  listLabel: string;
  list: string[];
  extra?: { label: string; items: string[] };
  industrial?: boolean;
};

const PROJECTS: Project[] = [
  { n: "01", title: "Education Lead Generation – Meta Ads", cat: "Performance Marketing", desc: "Designed and managed Meta lead-generation campaigns for education and career-oriented programs.", tags: ["Meta Ads", "Lead Generation", "Audience Targeting", "Lead Forms", "Campaign Optimization", "CPL Analysis"], objective: "Generate qualified leads for professional IT and career-oriented courses.", listLabel: "Activities", list: ["Audience targeting", "Campaign structure", "Creative testing", "Ad copy", "Lead form optimization", "Budget monitoring", "CPL analysis", "Lead quality analysis"] },
  { n: "02", title: "SEO & Google Search Console Optimization", cat: "SEO", desc: "Worked on improving organic visibility, indexing and content optimization for an educational website.", tags: ["SEO", "Keyword Research", "GSC", "Indexing", "Sitemap", "Technical SEO"], listLabel: "Activities", list: ["Keyword research", "Search intent analysis", "Meta title optimization", "Meta description optimization", "Heading optimization", "Search Console monitoring", "Sitemap activities", "Indexing troubleshooting", "Technical SEO auditing"] },
  { n: "03", title: "Zia EdTech – Social Media Marketing", cat: "Social Media Marketing", desc: "Planned and created educational, promotional and engagement-focused social media content for an EdTech brand.", tags: ["Instagram", "LinkedIn", "YouTube", "Facebook"], listLabel: "Activities", list: ["Content calendars", "Reels", "Posters", "Carousels", "Thumbnails", "Promotional campaigns", "Student-focused content", "Hiring creatives"] },
  { n: "04", title: "Website SEO & Content Optimization", cat: "SEO / Website", desc: "Worked on website SEO, content planning, indexing and basic technical SEO auditing.", tags: ["Keyword Mapping", "Homepage SEO", "GSC", "Schema"], listLabel: "Activities", list: ["Keyword mapping", "Homepage SEO", "Content optimization", "Meta titles", "Meta descriptions", "GSC monitoring", "Sitemap", "Indexing", "Technical SEO", "Schema issue identification"] },
  { n: "05", title: "Gieegaa Automation – B2B Industrial Marketing", cat: "B2B Marketing", desc: "Developed digital marketing and content strategy for an industrial automation company targeting B2B decision-makers.", tags: ["B2B", "Content Strategy", "Industrial"], listLabel: "Target audience", list: ["Factory Owners", "Plant Heads", "Production Managers", "Maintenance Engineers", "OEMs", "Panel Buyers", "Project Consultants"], extra: { label: "Content themes", items: ["PLC Automation", "Control Panels", "VFD / Servo", "Custom SPMs", "Industrial Automation", "Case Studies", "Project Showcases"] }, industrial: true },
  { n: "06", title: "BrandKural – Digital Marketing Service Project", cat: "Digital Marketing / Freelance", desc: "Developed a digital marketing service brand focused on helping businesses improve their online presence and generate leads.", tags: ["Freelance", "Brand", "Services"], listLabel: "Services", list: ["Social Media Management", "SEO", "Meta Ads", "Google Ads", "Lead Generation", "Content Writing", "Poster Design", "Reels", "Website Support"] },
  { n: "07", title: "Blues Musicals – Social Media & Lead Generation", cat: "Social Media Marketing", desc: "Worked on social media marketing, content creation, lead generation and short-form video content for Blues Musicals.", tags: ["Instagram Marketing", "Content Creation", "Lead Generation", "Video Editing", "Copywriting", "Social Media Management"], listLabel: "Activities", list: ["Social media management", "Instagram marketing", "Lead generation", "Reel creation", "Video editing", "Content strategy", "Product-focused content", "Educational content", "Brand storytelling", "Audience engagement"] },
];

function ProjectCard({ p, featured }: { p: Project; featured?: boolean }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={cn(
        "reveal glass card-hover group relative flex flex-col overflow-hidden rounded-3xl p-6 md:p-8",
        featured && "md:col-span-2",
        p.industrial && "industrial",
      )}
    >
      {p.industrial && (
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:repeating-linear-gradient(135deg,transparent_0_18px,var(--border)_18px_20px)]" />
      )}
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />
      <div className="relative flex items-start justify-between gap-4">
        <span className="font-display text-5xl font-bold text-foreground/10 transition-colors group-hover:text-primary/40">{p.n}</span>
        <span className="flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs font-semibold text-primary">
          {p.industrial && <Factory className="h-3.5 w-3.5" />}
          {p.cat}
        </span>
      </div>
      <h3 className="relative mt-4 text-xl font-bold md:text-2xl">{p.title}</h3>
      <p className="relative mt-3 text-muted-foreground">{p.desc}</p>
      {p.objective && (
        <p className="relative mt-3 text-sm">
          <span className="font-semibold text-foreground">Objective: </span>
          <span className="text-muted-foreground">{p.objective}</span>
        </p>
      )}
      <div className="relative mt-5 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <Pill key={t}>{t}</Pill>
        ))}
      </div>
      {open && (
        <div className="relative mt-6 grid animate-in fade-in gap-5 border-t border-border pt-5 sm:grid-cols-2">
          {[{ label: p.listLabel, items: p.list }, ...(p.extra ? [p.extra] : [])].map((g) => (
            <div key={g.label}>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">{g.label}</p>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {g.items.map((i) => (
                  <li key={i}>— {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="relative mt-auto inline-flex items-center gap-2 self-start pt-6 text-sm font-semibold text-foreground transition-colors hover:text-primary"
      >
        {open ? "Hide Details" : "View Project"}
        {open ? <ChevronDown className="h-4 w-4 rotate-180" /> : <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
      </button>
    </article>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Featured Projects" title={<>Real Work. <span className="text-gradient">Real Campaigns.</span></>} subtitle="Selected projects across performance marketing, SEO, social media and B2B strategy.">
      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.n} p={p} featured={i === 0 || i === 4} />
        ))}
      </div>
    </Section>
  );
}
