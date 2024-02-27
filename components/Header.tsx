"use client";
import {
  IconType,
  SiGithub,
  SiGithubHex,
  SiLinkedin,
  SiLinkedinHex,
} from "@icons-pack/react-simple-icons";
import clsx from "clsx";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import Link from "next/link";
import { CSSProperties, createElement, useState } from "react";

interface NavLink {
  href: string;
  text: string;
}

const links: NavLink[] = [
  {
    href: "/portfolio",
    text: "Portfolio",
  },
  {
    href: "/uses",
    text: "Uses",
  },
];

interface IconLink {
  altText: string;
  hoverColor?: string;
  href: string;
  icon: IconType;
}

const iconLinks: IconLink[] = [
  {
    href: "https://github.com/James-ONeill",
    altText: "Visit my GitHub page",
    hoverColor: SiGithubHex,
    icon: SiGithub,
  },
  {
    href: "https://github.com/James-ONeill",
    altText: "Visit my Linkedin page",
    hoverColor: SiLinkedinHex,
    icon: SiLinkedin,
  },
];

const brandColor = (hex: string) => ({ "--brand-color": hex }) as CSSProperties;
const textShadowClasses =
  "transition-[text-shadow] duration-300 [text-shadow:_0_0_0_rgb(219_39_119_/_40%)] hover:[text-shadow:_2px_2px_0_rgb(219_39_119_/_40%)] focus:[text-shadow:_2px_2px_2px_rgb(219_39_119_/_100%)]";

interface Props {
  type?: "fixed" | "static";
}

export default function Header({ type = "fixed" }: Props) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setIsScrolled(v > 15);
  });

  return (
    <motion.header
      className={clsx(
        "w-full border-t-4 border-blue-950 px-8 py-4",
        type === "fixed" && "lg:fixed lg:top-0",
        type === "fixed" &&
          isScrolled &&
          "lg:bg-white/[.7] lg:backdrop-blur-lg",
      )}
    >
      <div className="mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <Link
          href="/"
          className={clsx(
            "text-xl font-semibold uppercase tracking-wide",
            textShadowClasses,
          )}
        >
          James O&apos;Neill
        </Link>

        <nav className="flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((link, key) => (
              <li key={key}>
                <Link
                  href={link.href}
                  className={clsx(
                    "text-md rounded-md text-sm font-semibold uppercase tracking-wide text-blue-950",
                    textShadowClasses,
                  )}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block lg:h-4 lg:w-1 lg:rounded-full lg:bg-gray-300" />

          <ul className="hidden lg:flex lg:gap-4">
            {iconLinks.map((link, key) => (
              <li key={key}>
                <Link
                  href={link.href}
                  className="block text-gray-400 transition duration-300 ease-in-out hover:scale-110 hover:text-brand focus:scale-90 focus:text-brand"
                  style={link.hoverColor ? brandColor(link.hoverColor) : {}}
                >
                  <span className="sr-only">{link.altText}</span>

                  {createElement(link.icon, {
                    className: "h-6 w-6",
                  })}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.header>
  );
}
