import analytics from "@/assets/project-analytics.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import chat from "@/assets/project-chat.jpg";
import devtool from "@/assets/project-devtool.jpg";
import AnimatedText from "../animatedText";

import {
  OrganicCard,
  OrganicCardBand,
  OrganicCardBody,
  OrganicCardDescription,
  OrganicCardEyebrow,
  OrganicCardFooter,
  OrganicCardFooterIcon,
  OrganicCardFooterLabel,
  OrganicCardImage,
  OrganicCardTitle,
} from "@/components/ui/organic-card";

type Project = {
  name: string;
  image: string;
  problem: string;
  stack: string[];
  impact: string;
  color: string;
  category: string;
};

const projects: Project[] = [
  {
    name: "Lumen Analytics",
    category: "SaaS Dashboard",
    image: analytics,
    problem: "SaaS teams drowning in disconnected dashboards with no single source of truth.",
    stack: ["Next.js", "tRPC", "Postgres", "ClickHouse"],
    impact: "Cut reporting time by 74% across 40+ customer accounts in the first quarter.",
    color: "#f0eee9",
  },
  {
    name: "Marée Storefront",
    category: "E-commerce",
    image: ecommerce,
    problem: "Boutique merchants needed a fast, themable storefront without Shopify lock-in.",
    stack: ["Remix", "Stripe", "Sanity"],
    impact: "Lifted conversion 3.2× and shipped 12 brand sites on the same engine.",
    color: "#e8f2ec",
  },
  {
    name: "Salon Realtime",
    category: "Realtime Infrastructure",
    image: chat,
    problem: "Distributed agencies needed durable group chat with searchable history.",
    stack: ["Node", "Fastify", "Redis", "Postgres"],
    impact: "Sustains 12k concurrent sockets per region with p99 < 80ms.",
    color: "#ece8f2",
  },
  {
    name: "Forge CLI",
    category: "Developer Tooling",
    image: devtool,
    problem: "Internal teams kept rewriting the same scaffolding scripts every quarter.",
    stack: ["TypeScript", "Bun", "Turbo"],
    impact: "Adopted by 9 squads — onboarding a new repo dropped from 2 days to 20 minutes.",
    color: "#f2e8e8",
  },
  {
    name: "Echo Forms",
    category: "Edge Computing",
    image: analytics,
    problem: "Marketing teams struggled to embed dynamic, high-converting forms on edge networks.",
    stack: ["React", "Tailwind", "Cloudflare Workers"],
    impact: "Increased form completion rates by 42% across 2.5M monthly visits.",
    color: "#e8ecf2",
  },
  {
    name: "Nexus Flow",
    category: "Workflow Automation",
    image: chat,
    problem: "Support ops lacked a visual builder for triaging complex multi-stage tickets.",
    stack: ["Vue", "Node.js", "MongoDB", "RabbitMQ"],
    impact: "Reduced manual ticket routing by 85% and saved ops team 40 hours weekly.",
    color: "#f2efe8",
  },
];

function Card({ project }: { project: Project }) {
  return (
    <OrganicCard backgroundColor={project.color} href="#">
      <OrganicCardBody>
        <div>
          <OrganicCardImage
            alt={`${project.name} screenshot`}
            className="mb-5 h-[240px] animate-none opacity-100 sm:h-[300px]"
            src={project.image}
          />
          <OrganicCardEyebrow className="animate-none opacity-100">
            {project.category}
          </OrganicCardEyebrow>
          <OrganicCardTitle className="animate-none opacity-100 text-black">
            {project.name}
          </OrganicCardTitle>
          <OrganicCardDescription className="w-11/12 animate-none opacity-100">
            <div className="space-y-4 mt-2">
              <div>
                <span className="font-semibold text-black block mb-1">Problem: </span>
                {project.problem}
              </div>
              <div>
                <span className="font-semibold text-black block mb-1">Impact: </span>
                {project.impact}
              </div>
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.stack.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full bg-black/10 text-black font-medium tracking-wide"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </OrganicCardDescription>
        </div>
      </OrganicCardBody>

      <OrganicCardBand />

      <OrganicCardFooter>
        <OrganicCardFooterLabel className="animate-none opacity-100">
          View Case Study
        </OrganicCardFooterLabel>
        <OrganicCardFooterIcon className="animate-none opacity-100" />
      </OrganicCardFooter>
    </OrganicCard>
  );
}

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-32 2xl:py-48">
      <div className="flex items-end justify-between flex-wrap gap-6 mb-10 md:mb-12 2xl:mb-20">
        <div className="min-w-0">
          <p className="text-sm 2xl:text-base uppercase tracking-[0.25em] text-foreground/60 mb-3 2xl:mb-5">
            Selected work
          </p>
          <AnimatedText text="Projects shipped end-to-end." className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-semibold max-w-xl 2xl:max-w-3xl" animationType="letters" staggerDelay={0.08} duration={0.6}/>
        </div>
        <p className="text-foreground/70 max-w-sm 2xl:max-w-xl 2xl:text-lg">
          A few recent products — the brief, the stack, and the measurable outcome.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {projects.map((p) => (
          <Card key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
