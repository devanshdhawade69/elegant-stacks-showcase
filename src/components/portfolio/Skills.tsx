import { Layout, Server, Wrench } from "lucide-react";

const groups = [
  {
    icon: Layout,
    title: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Remix", "Tailwind", "Framer Motion"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Fastify", "tRPC", "Postgres", "Redis", "GraphQL"],
  },
  {
    icon: Wrench,
    title: "DevOps",
    skills: ["Git", "Docker", "GitHub Actions", "Fly.io", "Cloudflare", "Terraform"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-4 sm:px-6 py-20 md:py-32">
      <div className="mb-10 md:mb-14">
        <p className="text-sm uppercase tracking-[0.25em] text-foreground/60 mb-3">
          Tools & Skills
        </p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold max-w-xl">
          The stack I reach for.
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">

        {groups.map(({ icon: Icon, title, skills }) => (
          <div
            key={title}
            className="rounded-3xl border border-border p-7 bg-foreground/[0.02]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground/10">
                <Icon className="h-4 w-4" />
              </span>
              <h3 className="font-display text-xl font-semibold">{title}</h3>
            </div>
            <ul className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="text-sm px-3 py-1.5 rounded-full border border-border text-foreground/85 hover:text-foreground hover:border-foreground/40 transition-colors"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
