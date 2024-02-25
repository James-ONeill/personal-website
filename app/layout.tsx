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
        "bg-indigo-50 bg-gradient-to-b from-indigo-50 to-indigo-100",
        fira_mono.variable,
        fira_sans.variable,
      )}
    >
      <body className="bg-[radial-gradient(rgba(204,_204,_204,_.7)_1px,_rgba(255,_255,_255,_0)_1px)] bg-[length:1.7rem_1.7rem] antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
