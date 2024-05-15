import type { Metadata } from "next";
import HeroSection from "./HeroSection";

export const metadata: Metadata = {
  title: "CURATE City",
  description: "curate.city",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="curate w-full bg-black p-0 m-0">
        {children}
    </main>
  );
}
