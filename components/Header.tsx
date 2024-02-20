import {
  IconType,
  SiGithub,
  SiGithubHex,
  SiLinkedin,
  SiLinkedinHex,
} from "@icons-pack/react-simple-icons";
import Link from "next/link";
import { CSSProperties, createElement } from "react";

interface NavLink {
  href: string;
  text: string;
}

const links: NavLink[] = [
  {
    href: "/about",
    text: "About",
  },
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

export default function Header() {
  return (
    <header className="border-t-8 border-blue-950 px-8 py-10">
      <div className="mx-auto flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
        <Link
          href="/"
          className="text-xl font-semibold uppercase tracking-wide"
        >
          James O&apos;Neill
        </Link>

        <nav className="flex items-center gap-8">
          <ul className="flex gap-8">
            {links.map((link, key) => (
              <li key={key}>
                <Link
                  href={link.href}
                  className="text-md rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wide text-blue-950 transition-colors duration-300 hover:bg-gray-200"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="hidden gap-4 lg:flex">
            {iconLinks.map((link, key) => (
              <li key={key}>
                <Link
                  href={link.href}
                  className="block text-gray-400 transition duration-300 ease-in-out hover:scale-110 hover:text-brand"
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
    </header>
  );
}
