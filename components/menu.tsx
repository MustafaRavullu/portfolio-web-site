"use client";

import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <MenuTrigger isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black z-[100] overflow-hidden h-screen"></div>
      )}
    </div>
  );
}

function MenuTrigger({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <button
      onClick={() => setIsMenuOpen((prev) => !prev)}
      className={`fixed top-4 left-4 md:top-8 md:left-20 ${
        isMenuOpen ? "bg-neutral-700" : "bg-black"
      } group z-[101]`}
    >
      <span
        className={`block border ${
          isMenuOpen ? "bg-black border-neutral-700" : "border-black bg-white"
        }  p-6 group-hover:translate-x-3 group-hover:-translate-y-3 group-active:translate-x-0 group-active:translate-y-0 transition-all`}
      >
        {isMenuOpen ? (
          <AiOutlineClose
            className={`size-6 ${isMenuOpen ? "text-white" : "text-black"}`}
          />
        ) : (
          <AiOutlineMenu className="size-6" />
        )}
      </span>
    </button>
  );
}
