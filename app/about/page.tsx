import Container from "@/components/Container";
import MainHeading from "@/components/typography/MainHeading";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <main>
      <Container>
        <MainHeading>About Me</MainHeading>

        <div className="space-y-8">
          <p>
            Hi, I&apos;m James, a full stack web developer based in Bristol.
          </p>
        </div>
      </Container>
    </main>
  );
}
