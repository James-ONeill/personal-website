import { Fira_Mono, Fira_Sans } from "next/font/google";

export const fira_sans = Fira_Sans({
  weight: ["400", "700"],
  variable: "--font-fira-sans",
  subsets: ["latin"],
});

export const fira_mono = Fira_Mono({
  weight: ["400", "700"],
  variable: "--font-fira-mono",
  subsets: ["latin"],
});