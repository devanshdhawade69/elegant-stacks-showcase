import { Layout, Server, Wrench } from "lucide-react";
import AnimatedText from "../animatedText";
import { TiltEffect } from "../tiltEffect";

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
    <section id="skills" className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-32 2xl:py-48">
      <div className="mb-10 md:mb-14 2xl:mb-20">
        <AnimatedText
          text="TECH STACK I reach for"
          className="font-display text-3xl sm:text-4xl md:text-5xl 2xl:text-7xl font-semibold whitespace-nowrap"
          animationType="letters"
          staggerDelay={0.08}
          duration={0.8}
        />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 2xl:gap-12">
        {groups.map(({ icon: Icon, title, skills }) => (
          <TiltEffect key={title}>
            <div className="rounded-3xl border border-border p-7 bg-foreground/[0.02] h-full">
              <div className="flex items-center gap-3 2xl:gap-5 mb-6 2xl:mb-10">
                <span className="inline-flex h-9 w-9 2xl:h-14 2xl:w-14 items-center justify-center rounded-full bg-foreground/10">
                  <Icon className="h-4 w-4 2xl:h-6 2xl:w-6" />
                </span>
                <h3 className="font-display text-xl 2xl:text-3xl font-semibold">{title}</h3>
              </div>
              <ul className="flex flex-wrap gap-2 2xl:gap-3">
                {skills.map((s) => (
                  <li
                    key={s}
                    className="text-sm 2xl:text-lg px-3 2xl:px-5 py-1.5 2xl:py-2.5 rounded-full border border-border text-foreground/85 hover:text-foreground hover:border-foreground/40 transition-colors"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </TiltEffect>
        ))}
      </div>
    </section>
  );
}
