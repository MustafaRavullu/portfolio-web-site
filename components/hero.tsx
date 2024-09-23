import { DATA } from "@/data/resume";

export default function Hero() {
  return (
    <section>
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        {DATA.name}
      </h1>
      <p className="mt-4 text-xl text-muted-foreground">{DATA.jobTitle}</p>
    </section>
  );
}
