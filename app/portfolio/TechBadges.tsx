import {
  SiLaravel,
  SiLaravelHex,
  SiNextdotjs,
  SiNextdotjsHex,
  SiReact,
  SiReactHex,
  SiShopify,
  SiShopifyHex,
  SiTailwindcss,
  SiTailwindcssHex,
  SiTypescript,
  SiTypescriptHex,
  SiWordpress,
  SiWordpressHex,
  SiVuedotjs,
  SiVuedotjsHex,
} from "@icons-pack/react-simple-icons";
import { createElement, useMemo } from "react";

export type Technology =
  | "react"
  | "vue"
  | "typescript"
  | "next"
  | "laravel"
  | "wordpress"
  | "shopify"
  | "tailwind";

interface Props {
  technologies: Technology[];
}

export default function TechBadges({ technologies }: Props) {
  const badges = useMemo(() => {
    const badgeData = {
      react: { icon: SiReact, color: SiReactHex, alt: "React" },
      vue: { icon: SiVuedotjs, color: SiVuedotjsHex, alt: "Vue" },
      typescript: {
        icon: SiTypescript,
        color: SiTypescriptHex,
        alt: "Typescript",
      },
      next: { icon: SiNextdotjs, color: SiNextdotjsHex, alt: "Next.js" },
      laravel: { icon: SiLaravel, color: SiLaravelHex, alt: "Laravel" },
      wordpress: { icon: SiWordpress, color: SiWordpressHex, alt: "WordPress" },
      shopify: { icon: SiShopify, color: SiShopifyHex, alt: "Shopify" },
      tailwind: {
        icon: SiTailwindcss,
        color: SiTailwindcssHex,
        alt: "Tailwind CSS",
      },
    };

    return technologies.map((technology) => badgeData[technology]);
  }, [technologies]);

  return (
    <ul className="flex w-max gap-4 rounded-full bg-white px-4 py-2 shadow-lg shadow-neutral-700/[.2]">
      {badges.map(({ icon, color, alt }, key) => (
        <li key={key}>
          <span className="sr-only">Built using {alt}</span>
          {createElement(icon, {
            className: "w-6 h-6",
            color,
          })}
        </li>
      ))}
    </ul>
  );
}
