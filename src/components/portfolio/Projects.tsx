import analytics from "@/assets/project-analytics.jpg";
import ecommerce from "@/assets/project-ecommerce.jpg";
import chat from "@/assets/project-chat.jpg";
import devtool from "@/assets/project-devtool.jpg";
import AnimatedText from "../animatedText";

type Project = {
  name: string;
  image: string;
  problem: string;
  stack: string[];
  impact: string;
  span?: string;
};

const projects: Project[] = [
  {
    name: "Lumen Analytics",
    image: analytics,
    problem: "SaaS teams drowning in disconnected dashboards with no single source of truth.",
    stack: ["Next.js", "tRPC", "Postgres", "ClickHouse"],
    impact: "Cut reporting time by 74% across 40+ customer accounts in the first quarter.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    name: "Marée Storefront",
    image: ecommerce,
    problem: "Boutique merchants needed a fast, themable storefront without Shopify lock-in.",
    stack: ["Remix", "Stripe", "Sanity"],
    impact: "Lifted conversion 3.2× and shipped 12 brand sites on the same engine.",
    span: "md:col-span-2",
  },
  {
    name: "Salon Realtime",
    image: chat,
    problem: "Distributed agencies needed durable group chat with searchable history.",
    stack: ["Node", "Fastify", "Redis", "Postgres"],
    impact: "Sustains 12k concurrent sockets per region with p99 < 80ms.",
  },
  {
    name: "Forge CLI",
    image: devtool,
    problem: "Internal teams kept rewriting the same scaffolding scripts every quarter.",
    stack: ["TypeScript", "Bun", "Turbo"],
    impact: "Adopted by 9 squads — onboarding a new repo dropped from 2 days to 20 minutes.",
  },
];

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-card-foreground/65 mb-1">{label}</p>
      <p className="text-card-foreground/95">{value}</p>
    </div>
  );
}

function Card({ project }: { project: Project }) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl bg-card text-card-foreground p-5 transition-transform duration-300 hover:-translate-y-1 ${project.span ?? ""}`}
    >
      <div className="overflow-hidden rounded-2xl bg-background/30">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          width={1280}
          height={800}
          loading="lazy"
          className="w-full h-48 md:h-56 2xl:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-5 flex flex-col gap-4 flex-1">
        <h3 className="font-display text-2xl font-semibold">{project.name}</h3>
        <div className="space-y-3 text-sm leading-relaxed">
          <Row label="Problem" value={project.problem} />
          <div>
            <p className="text-xs uppercase tracking-wider text-card-foreground/65 mb-2">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-background/25 text-card-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <Row label="My Impact" value={project.impact} />
        </div>
      </div>
    </article>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:auto-rows-fr gap-4 sm:gap-5 2xl:gap-10">
        {projects.map((p) => (
          <Card key={p.name} project={p} />
        ))}
      </div>

    </section>
  );
}
