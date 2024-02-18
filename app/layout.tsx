import Footer from "@/components/Footer";
import Header from "@/components/Header";
import clsx from "clsx";
import type { Metadata } from "next";
import { Fira_Mono, Fira_Sans } from "next/font/google";
import { ReactNode } from "react";
import "./globals.css";

const fira_sans = Fira_Sans({
  weight: ["400", "700"],
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

const fira_mono = Fira_Mono({
  weight: ["400"],
  variable: "--font-fira-mono",
  subsets: ["latin"],
});

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
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
