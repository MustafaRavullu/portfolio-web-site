import Link from "next/link";

export default function ThreeDLink({
  type,
  href,
  title,
  className,
}: {
  type: "legacy" | "nextLink";
  href: string;
  title: string;
  className?: string;
}) {
  if (type === "legacy") {
    return (
      <a href={href} className={`${className} bg-black group block`}>
        <span className="p-6 bg-white border block border-black transition-all group-hover:translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0 text-center text-nowrap">
          <span className="font-semibold uppercase">{title}</span>
        </span>
      </a>
    );
  }
  if (type === "nextLink") {
    return (
      <Link href={href} className={`${className} bg-black group block`}>
        <span className="p-4 bg-white border block border-black transition-all group-hover:translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0 text-center text-nowrap">
          <span className="font-semibold uppercase">{title}</span>
        </span>
      </Link>
    );
  }

  throw new Error(
    "Wrong type value for ThreeDLink. Please use one of them:  legacy | nextLink "
  );
}
