import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { SidebarNav } from "@/components/SidebarNav";

export default function Home() {
  return (
    <main className="w-full flex flex-col relative">
      <SidebarNav />
      <Hero />
      <About />
      <CaseStudies />
      <Skills />
      <Contact />
      <footer className="snap-start py-8 text-center text-sm text-muted-foreground bg-background border-t border-muted/20 mt-auto">
        <p>© {new Date().getFullYear()} Souleimane. Data Analyst & Business Analyst.</p>
      </footer>
    </main>
  );
}
