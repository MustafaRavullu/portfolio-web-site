import type { Metadata } from "next";
import "./globals.css";
import { public_sans } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Mustafa Ravullu",
  description: "Mustafa's Portfolio Web Site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${public_sans.className} antialiased px-4 md:px-20 py-4 md:py-14 relative`}
      >
        <div className="absolute inset-x-4 md:inset-x-20 inset-y-0 z-[-1] flex">
          <div className="border-l flex-1"></div>
          <div className="border-l flex-1 hidden md:flex"></div>
          <div className="border-l flex-1 hidden md:flex"></div>
          <div className="border flex-1"></div>
        </div>
        {children}
      </body>
    </html>
  );
}
