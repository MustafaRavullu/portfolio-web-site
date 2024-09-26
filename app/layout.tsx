import type { Metadata } from "next";
import "./globals.css";
import { inter } from "@/lib/fonts";
import Dock from "@/components/dock";

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
    <html lang="en" className="">
      <body className={`${inter.className} antialiased`}>
        {children}
        <Dock />
      </body>
    </html>
  );
}
