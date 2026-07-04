import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alex Moreau — Full-Stack Web Developer" },
      {
        name: "description",
        content:
          "Portfolio of Alex Moreau, a full-stack web developer crafting elegant end-to-end web products with React, Node, and Postgres.",
      },
      { property: "og:title", content: "Alex Moreau — Full-Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Selected projects, stack, and contact for Alex Moreau — full-stack web developer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
