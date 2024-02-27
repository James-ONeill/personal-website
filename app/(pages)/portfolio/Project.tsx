import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import TechBadges, { Technology } from "./TechBadges";

export interface Props {
  description?: ReactNode | ReactNode[];
  href?: string;
  image?: {
    backgroundClassName?: string;
    src: string;
    alt: string;
  };
  title: string;
  technologies?: Technology[];
}

export default function Project({
  description,
  href,
  image,
  title,
  technologies = [],
}: Props) {
  return (
    <article className="flex flex-col gap-10 lg:flex-row">
      <div className="no-shrink lg:w-2/5">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={1280}
            height={800}
            className={clsx(
              "rounded-2xl bg-white shadow-2xl shadow-neutral-700",
              image.backgroundClassName,
            )}
          />
        )}
      </div>

      <div className="space-y-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
          <h2 className="text-xl font-bold tracking-wider">{title}</h2>

          {technologies.length > 0 && (
            <TechBadges technologies={technologies} />
          )}
        </div>

        {description && (
          <div className="space-y-2 text-gray-500 lg:max-w-[50rem]">
            {description}
          </div>
        )}

        {href && (
          <Link
            href={href}
            className="text-md inline-block rounded-md bg-blue-950 px-4 py-2 text-sm font-semibold tracking-widest text-white transition-colors duration-300 hover:bg-blue-950/[.7]"
          >
            View Project
          </Link>
        )}
      </div>
    </article>
  );
}
