import type { Metadata } from "next";
import Container from "@/components/Container";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What I Use",
};

export default function Uses() {
  return (
    <Container>
      <div className="space-y-20">
        <h1 className="my-20 font-mono text-6xl uppercase">What I Use</h1>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Hardware</h2>

          <ul className="list-square space-y-4 text-gray-500">
            <li>MacBook Pro, 16-inch, 2019. (2.3 GHz 8-Core Intel Core i9)</li>
            <li>Apple Magic Keyboard 2</li>
            <li>Apple Magic Mouse 2</li>
            <li>2 HANNspree HQ 272 PPB monitors</li>
            <li>iPhone 15 Pro Max</li>
            <li>AirPods Pro</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Languages</h2>

          <ul className="list-square space-y-4 text-gray-500">
            <li>
              In the last few years I&apos;ve primarily worked with React and
              NextJS using Typescript.
            </li>
            <li>
              In the PHP world I&apos;ve worked extensively with Laravel and try
              to keep up to date with it now I&apos;m not using it for my day
              job anymore.
            </li>
            <li>
              My go-to for styling is Tailwind CSS. While I can work with any
              approach I find best for my own productivity.
            </li>
            <li>
              Lately I&apos;ve been dabbling with trying to learn webGL.{" "}
              <Link href="https://threejs-journey.com/">THREE JS Journey</Link>{" "}
              has been a fantastic resource for that.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-bold">Other</h2>

          <ul className="list-square space-y-4 text-gray-500">
            <li>
              Visual Studio Code has been my code editor of choice for many
              years. Right now I use the Night Owl theme.
            </li>
            <li>For all my sitting needs I use a Hermann Miller Aeron.</li>
          </ul>
        </section>
      </div>
    </Container>
  );
}
