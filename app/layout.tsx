import Footer from "@/components/Footer";
import Header from "@/components/Header";
import clsx from "clsx";
import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { fira_mono, fira_sans } from "./webfonts";

export const metadata: Metadata = {
  authors: { name: "James O'Neill" },
  title: {
    absolute: "James O'Neill",
    template: "%s | James O'Neill",
  },
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className={clsx(
        fira_mono.variable,
        fira_sans.variable,
      )}
    >
      <body className="antialiased bg-neutral-50">
        <div className="flex min-h-screen flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
