import { DATA } from "@/data/resume";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold">Projects</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {DATA.projects.map((project, index) => (
          <li key={index}>
            <ProjectCard {...project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
