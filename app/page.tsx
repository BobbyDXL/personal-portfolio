import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";
import { NavigationPill } from "@/components/navigation-pill";
import { Background } from "@/components/background";

export default function Home() {
  return (
    <div className="min-h-screen bg-background/50 backdrop-blur-[2px]">
      <Background />
      <NavigationPill />
      <main className="container mx-auto px-4">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
