import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "James O'Neill - Full Stack Web Developer"
}

export default function Home() {
  return (
    <main className="flex flex-grow flex-col justify-center px-8">
      <div className="mx-auto w-full max-w-[60rem]">
        <div className="space-y-20">
          <div className="flex flex-col items-center gap-10 text-center lg:flex-row lg:justify-center lg:text-left">
            <Image
              src="/img/profile-pic.jpeg"
              className="rounded-full shadow-2xl shadow-neutral-700 saturate-50"
              alt="Photo of me"
              width={150}
              height={150}
            />
            <div className="space-y-2">
              <h1 className="text-6xl font-bold">Hey, I&apos;m James</h1>
              <p className="font-mono text-2xl">I&apos;m a web developer</p>
            </div>
          </div>

          <div className="space-y-10">
            <p className="text-center font-mono text-2xl">
              I have experience with:
            </p>

            <ul className="mx-auto grid max-w-[30rem] grid-cols-2 lg:grid-cols-3 text-xl gap-x-8 gap-y-2">
              <li>React</li>
              <li>Typescript</li>
              <li>Tailwind CSS</li>
              <li>Next JS</li>
              <li>Laravel</li>
              <li>Shopify</li>
              <li>WordPress</li>
              <li>Git</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
