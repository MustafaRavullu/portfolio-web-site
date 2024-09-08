import Image from "next/image";
import WordWithShadow from "./word-with-shadow";

export default function Hero() {
  return (
    <section className="flex justify-center items-center py-16 px-4 md:p-12 text-center border border-black flex-col gap-6 bg-white/50">
      <div className="flex gap-8 justify-center w-full items-center uppercase text-xl">
        <span className="hidden lg:flex flex-1 justify-end">
          Crafting Functionality
        </span>
        <Image
          src={"/icons/sun.svg"}
          alt="coffee mug"
          width={40}
          height={40}
          className="animate-spin-infinite"
        />{" "}
        <span className="hidden lg:flex flex-1 justify-start">
          with Creative Precision
        </span>
      </div>
      <h1 className="font-black text-5xl sm:text-7xl md:text-8xl uppercase tracking-tighter">
        Mustafa Ravullu
        <br />
        <WordWithShadow word="frontend" />
        Developer
      </h1>
      <div className="max-w-[500px] font-semibold text-3xl">
        I create interactive, user-centric web apps
      </div>
    </section>
  );
}
