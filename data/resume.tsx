import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { GlobeIcon } from "lucide-react";

export const DATA = {
  name: "Mustafa Ravullu",
  jobTitle: "Frontend Developer",
  about:
    "I’m a frontend developer with a passion for building modern, responsive applications. My focus is on crafting clean, efficient, and scalable code. I am continually improving my skills and am always eager to learn new tools and methodologies.",
  skills: [
    "Typescript",
    "React.js",
    "Next.js",
    "React Context API",
    "Firebase",
  ],
  projects: [
    {
      title: "PantriPal",
      description:
        "It is a recipe app that is built on top of spoonacular api. It helps you to find recipes based on available ingredients.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Spoonacular Rest API",
      ],
      links: [
        {
          type: "Website",
          href: "https://pantripal.vercel.app/",
          icon: <GlobeIcon className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/MustafaRavullu/pantri-pal",
          icon: <GitHubLogoIcon className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
};
