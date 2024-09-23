import { DATA } from "@/data/resume";
import { Badge } from "./ui/badge";

export default function Skills() {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-bold">Skills</h2>
      <ul className="flex flex-wrap gap-1">
        {DATA.skills.map((skill, index) => (
          <li key={index}>
            <Badge>{skill}</Badge>
          </li>
        ))}
      </ul>
    </section>
  );
}
