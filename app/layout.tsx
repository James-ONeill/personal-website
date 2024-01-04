import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { PT_Sans } from "next/font/google";
import "./globals.css";

const pt_sans = PT_Sans({
  weight: ["400", "700"],
  variable: "--font-pt-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "James O'Neill",
  authors: { name: "James O'Neill" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gradient-to-b from-indigo-100 to-indigo-50">
      <body className={pt_sans.className}>
        <div className="flex min-h-screen flex-col">
          <Header />

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
