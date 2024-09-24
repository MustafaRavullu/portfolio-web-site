import About from "@/components/about";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main className="min-h-[100dvh] max-w-screen-sm px-6 py-8 sm:py-24 sm:px-0 mx-auto flex flex-col space-y-10">
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
  );
}
