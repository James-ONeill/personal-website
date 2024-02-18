import {
  SiGit,
  SiGitHex,
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
} from "@icons-pack/react-simple-icons";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "James O'Neill - Full Stack Web Developer",
};

export default function Home() {
  return (
    <main className="flex flex-grow flex-col justify-center px-8 py-20">
      <div className="mx-auto w-full max-w-[60rem]">
        <div className="space-y-10">
          <div className="flex items-center gap-6 lg:gap-10">
            <Image
              src="/img/profile-pic.jpeg"
              className="h-auto w-20 rounded-full shadow-2xl shadow-neutral-700 saturate-50 md:w-40"
              alt="Photo of me"
              width={150}
              height={150}
            />
            <div className="space-y-2">
              <h1 className="text-3xl font-bold lg:text-6xl">
                Hey, I&apos;m James
              </h1>
              <p className="font-mono text-lg lg:text-xl">I&apos;m a web developer</p>
            </div>
          </div>

          <div className="mx-auto space-y-10">
            <ul className="text-md mx-auto grid grid-cols-2 gap-x-8 gap-y-4 lg:grid-cols-3 xl:grid-cols-4">
              <li className="flex items-center gap-4">
                <SiReact className="h-8 w-8" color={SiReactHex} />
                React
              </li>
              <li className="flex items-center gap-4">
                <SiTypescript className="h-8 w-8" color={SiTypescriptHex} />
                Typescript
              </li>
              <li className="flex items-center gap-4">
                <SiTailwindcss className="h-8 w-8" color={SiTailwindcssHex} />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-4">
                <SiNextdotjs className="h-8 w-8" color={SiNextdotjsHex} />
                Next JS
              </li>
              <li className="flex items-center gap-4">
                <SiLaravel className="h-8 w-8" color={SiLaravelHex} />
                Laravel
              </li>
              <li className="flex items-center gap-4">
                <SiShopify className="h-8 w-8" color={SiShopifyHex} />
                Shopify
              </li>
              <li className="flex items-center gap-4">
                <SiWordpress className="h-8 w-8" color={SiWordpressHex} />
                WordPress
              </li>
              <li className="flex items-center gap-4">
                <SiGit className="h-8 w-8" color={SiGitHex} />
                Git
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
