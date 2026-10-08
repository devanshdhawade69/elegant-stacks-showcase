import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/about";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "dev.d" },
      {
        name: "description",
        content:
          "Portfolio of DEVANSH DHAWADE, a full-stack web developer crafting elegant end-to-end web products with React, Node, and Postgres.",
      },
      { property: "og:title", content: "DEVANSH DHAWADE — Full-Stack Web Developer" },
      {
        property: "og:description",
        content:
          "Selected projects, stack, and contact for DEVANSH DHAWADE — full-stack web developer.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen text-foreground bg-background">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster />
      
    </div>
  );
}
