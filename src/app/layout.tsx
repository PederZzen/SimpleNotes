import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <nav className="bg-slate-800 p-2 flex gap-4 font-bold text-slate-100">
          <Link href="/">Home</Link>
          <Link href="/notes">Notes</Link>
        </nav>
        <section className="m-2">{children}</section>
      </body>
    </html>
  );
}
