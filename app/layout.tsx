import type { Metadata } from "next";
import "./globals.css";
import { public_sans } from "@/lib/fonts";
import Header from "@/components/header";
import Menu from "@/components/menu";

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
        className={`${public_sans.className} antialiased px-4 md:px-20 py-4 md:py-8 relative flex flex-col`}
      >
        <div
          className={`absolute inset-x-4 md:inset-x-20 inset-y-0 grid grid-cols-2 md:grid-cols-4 z-[-1] border-l border-r`}
        >
          <div className="border-r"></div>
          <div className="border-r hidden md:flex"></div>
          <div className="border-r hidden md:flex"></div>
          <div></div>
        </div>
        <Header />
        <Menu />
        {children}
      </body>
    </html>
  );
}
