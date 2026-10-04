import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/components/portfolio/ui";
import { Navbar, Hero, Stats, About } from "@/components/portfolio/Top";
import { Skills, Experience, Projects } from "@/components/portfolio/Middle";
import { Process, Achievements, Training, EducationJourney, Insights, Contact, Footer } from "@/components/portfolio/Bottom";

const TITLE = "Naveen Kumar | Digital Marketing Specialist | Meta Ads & SEO";
const DESC =
  "Portfolio of Naveen Kumar, a Digital Marketing Specialist from Chennai specializing in Meta Ads, SEO, Social Media Marketing, Lead Generation, Content Creation and AI Marketing.";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Naveen Kumar",
      jobTitle: "Digital Marketing Specialist",
      email: "mailto:rvnaveen983@gmail.com",
      telephone: "+91-6382700550",
      address: { "@type": "PostalAddress", addressLocality: "Chennai", addressRegion: "Tamil Nadu", addressCountry: "IN" },
      sameAs: ["https://www.linkedin.com/in/naveen-r-581179354/"],
      knowsAbout: ["Meta Ads", "SEO", "Social Media Marketing", "Lead Generation", "Content Creation", "AI Marketing"],
    },
    { "@type": "WebSite", name: "Naveen Kumar Portfolio", description: DESC },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(schema) }],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Process />
        <Achievements />
        <Training />
        <EducationJourney />
        <Insights />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
