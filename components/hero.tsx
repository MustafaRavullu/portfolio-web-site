import { DATA } from "@/data/resume";

export default function Hero() {
  return (
    <section className="space-y-2">
      <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
        {DATA.name}
      </h1>
      <p className="text-xl">{DATA.jobTitle}</p>
    </section>
  );
}
