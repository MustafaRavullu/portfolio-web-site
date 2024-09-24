import Link from "next/link";
import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

type Props = {
  title: string;
  description: string;
  technologies: string[];
  links: {
    type: string;
    href: string;
    icon: React.ReactNode;
  }[];
  image: string;
  video: string;
};

export default function ProjectCard({
  title,
  description,
  technologies,
  links,
  image,
  video,
}: Props) {
  return (
    <Card className="overflow-hidden shadow-none hover:shadow-lg transition-all ease-out duration-300">
      <div className="text-white w-full h-40 bg-red-500 flex justify-center items-center">
        Placeholder
      </div>
      <CardHeader className="p-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1 p-2">
        {technologies.map((tech: string, index: number) => (
          <Badge key={index} variant={"secondary"} className="text-[10px]">
            {tech}
          </Badge>
        ))}
      </CardContent>
      <CardFooter className="flex flex-wrap gap-1 p-2">
        {links.map((link, index) => (
          <Link href={link.href} key={index} target="_blank">
            <Badge className="flex gap-2">
              <div className="size-3">{link.icon}</div>
              <span className="text-[10px]">{link.type}</span>
            </Badge>
          </Link>
        ))}
      </CardFooter>
    </Card>
  );
}
