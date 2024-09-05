export default function WordWithShadow({ word }: { word: string }) {
  return (
    <span className="flex justify-center">
      {word.split("").map((letter: string, index: number) => (
        <span
          key={index}
          className="relative text-black group"
          style={{ zIndex: word.length - index }}
        >
          {letter}
          <span className="text-black absolute top-0 left-0 translate-x-[0.01em] -translate-y-[0.01em] group-hover:translate-x-[0.02em] group-hover:-translate-y-[0.02em] transition-all">
            {letter}
          </span>
          <span className="text-black absolute top-0 left-0 translate-x-[0.02em] -translate-y-[0.02em] group-hover:translate-x-[0.04em] group-hover:-translate-y-[0.04em] transition-all">
            {letter}
          </span>
          <span className="text-black absolute top-0 left-0 translate-x-[0.03em] -translate-y-[0.03em] group-hover:translate-x-[0.06em] group-hover:-translate-y-[0.06em] transition-all">
            {letter}
          </span>
          <span className="text-black absolute top-0 left-0 translate-x-[0.04em] -translate-y-[0.04em] group-hover:translate-x-[0.08em] group-hover:-translate-y-[0.08em] transition-all">
            {letter}
          </span>
          <span className="text-black absolute top-0 left-0 translate-x-[0.05em] -translate-y-[0.05em] group-hover:translate-x-[0.1em] group-hover:-translate-y-[0.1em] transition-all">
            {letter}
          </span>
          <span className="text-black absolute top-0 left-0 translate-x-[0.06em] -translate-y-[0.06em] group-hover:translate-x-[0.12em] group-hover:-translate-y-[0.12em] transition-all">
            {letter}
          </span>
          <span className="text-black absolute top-0 left-0 translate-x-[0.07em] -translate-y-[0.07em] group-hover:translate-x-[0.14em] group-hover:-translate-y-[0.14em] transition-all">
            {letter}
          </span>
          <span className="text-white absolute top-0 left-0 translate-x-[0.08em] -translate-y-[0.08em] group-hover:translate-x-[0.16em] group-hover:-translate-y-[0.16em] transition-all text-outline">
            {letter}
          </span>
        </span>
      ))}
    </span>
  );
}
