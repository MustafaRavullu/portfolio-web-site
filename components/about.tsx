import { DATA } from "@/data/resume";

export default function About() {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold">About</h2>
      <p className="max-w-full text-pretty text-sm text-muted-foreground">
        {DATA.about}
      </p>
    </section>
  );
}
