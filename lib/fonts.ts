import { Anton, Public_Sans } from "next/font/google";

export const anton = Anton({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400"],
});

export const public_sans = Public_Sans({
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
