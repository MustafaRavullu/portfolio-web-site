import ThreeDLink from "./three-d-link";

export default function Header() {
  return (
    <header className="grid grid-cols-2 md:grid-cols-4 h-[73.6px]">
      <ThreeDLink
        className="hidden md:block md:col-start-4"
        type="legacy"
        href="mailto:muhammedravullu@gmail.com"
        title="Contact me!"
      />
    </header>
  );
}
