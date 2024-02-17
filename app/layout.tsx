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
  authors: { name: "James O'Neill" },
  title: {
    absolute: "James O'Neill",
    template: "%s | James O'Neill",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-indigo-50 bg-gradient-to-b from-indigo-50 to-indigo-100"
    >
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
