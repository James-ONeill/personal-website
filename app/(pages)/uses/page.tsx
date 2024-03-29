import Container from "@/components/Container";
import MainHeading from "@/components/typography/MainHeading";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What I Use",
};

export default function Uses() {
  return (
    <main>
      <MainHeading>What I Use</MainHeading>
      <Container>
        <div className="space-y-20 [&_a:focus]:[text-shadow:_2px_2px_2px_rgb(219_39_119_/_100%)] [&_a:hover]:[text-shadow:_2px_2px_0_rgb(219_39_119_/_40%)] [&_a]:font-bold [&_a]:text-blue-950 [&_a]:transition-[text-shadow] [&_a]:duration-300 [&_a]:[text-shadow:_0_0_0_rgb(219_39_119_/_40%)]">
          <section className="space-y-4">
            <h2 className="font-mono text-xl font-bold">Hardware</h2>

            <ul className="list-square space-y-4 pl-8 text-gray-500 marker:text-pink-600">
              <li>
                MacBook Pro, 16-inch, 2019. (2.3 GHz 8-Core Intel Core i9)
              </li>
              <li>Apple Magic Keyboard 2</li>
              <li>Apple Magic Mouse 2</li>
              <li>2 HANNspree HQ 272 PPB monitors</li>
              <li>iPhone 15 Pro Max</li>
              <li>AirPods Pro</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xl font-bold">Languages</h2>

            <ul className="list-square space-y-4 pl-8 text-gray-500 marker:text-pink-600">
              <li>
                In the last few years I&apos;ve primarily worked with React and
                NextJS using Typescript.
              </li>
              <li>
                In the PHP world I&apos;ve worked extensively with Laravel and
                try to keep up to date with it now I&apos;m not using it for my
                day job anymore.
              </li>
              <li>
                My go-to for styling is Tailwind CSS. While I can work with any
                approach I find it best for my own productivity.
              </li>
              <li>
                Lately I&apos;ve been dabbling with trying to learn webGL. Bruno
                Simon&apos;s course,{" "}
                <Link href="https://threejs-journey.com/">
                  THREE JS Journey
                </Link>{" "}
                has been a fantastic resource for that.
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="font-mono text-xl font-bold">Other</h2>

            <ul className="list-square space-y-4 pl-8 text-gray-500 marker:text-pink-600">
              <li>
                Visual Studio Code has been my code editor of choice for many
                years. Right now I use the Night Owl theme.
              </li>
              <li>For all my sitting needs I use a Hermann Miller Aeron.</li>
            </ul>
          </section>
        </div>
      </Container>
    </main>
  );
}
