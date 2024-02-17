import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

export interface Props {
  description?: ReactNode | ReactNode[];
  href?: string;
  image?: {
    backgroundClassName?: string;
    src: string;
    alt: string;
  };
  title: string;
}

export default function Project({ description, href, image, title }: Props) {
  return (
    <article className="flex flex-col gap-10 lg:flex-row">
      <div className="no-shrink lg:w-1/3">
        {image && (
          <Image
            src={image.src}
            alt={image.alt}
            width={1280}
            height={800}
            className={`rounded-2xl bg-white shadow-2xl shadow-neutral-700 ${image.backgroundClassName}`}
          />
        )}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">{title}</h2>
        
        {description && (
          <div className="space-y-2 text-gray-500 lg:max-w-[50rem]">
            {description}
          </div>
        )}

        {href && (
          <Link
            href={href}
            className="text-md inline-block rounded-md bg-blue-950 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors duration-300 hover:bg-gray-200 hover:text-blue-950"
          >
            View Project
          </Link>
        )}
      </div>
    </article>
  );
}
