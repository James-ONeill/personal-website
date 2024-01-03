import type { Metadata } from "next";
import Container from "@/components/Container";
import Project, { Props as ProjectProps } from "./Project";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | James O'Neill",
  description: "Check out a selection of the projects I've worked on."
};

const projects: ProjectProps[] = [
  {
    title: "B/R Marketplace",
    href: "https://bleacherreportmarketplace.com/",
    image: {
      src: "/img/portfolio/br-marketplace.png",
      alt: "Screenshot of the B/R Marketplace homepage",
    },
    description: (
      <>
        <p>
          The B/R Marketplace was built to provide a tie-in experience for
          Warner Bros Discovery&apos;s Bleacher Report show. Depending on their
          location users can earn points to redeem on digital collectibles based
          on the NBA, NHL and AEW. They can also play the custom Blocklete golf
          game.
        </p>

        <p>
          I was one of three front end developers who has worked on the landing
          website for the project built the home page banner along with many of
          the UI elements used across the site.
        </p>

        <p>
          <span className="font-bold">Please note:</span> Most content is
          geolocked to the US so the website is best viewed with a VPN.
        </p>
      </>
    ),
  },
  {
    title: "Sneaks of Nature",
    image: {
      src: "/img/portfolio/sneaks-of-nature.png",
      alt: "Screenshot of the Sneaks of Nature homepage",
    },
    href: "https://sneaksofnature.xyz",
    description: (
      <>
        <p>
          Launched in 2021, Sneaks of Nature is an NFT project that marketed
          itself with an immersive storytelling experience. I was one of two
          developers involved in building the project website. Most of my work
          was focused on the purchase flow which simulated the look and feel of
          an old school computer terminal to to create a storytelling experience
          of &quot;hacking&quot; a fictitious government agency.
        </p>

        <p>
          While parts of the design language remain in the site the flow itself
          is no longer accessible. The link below goes to the most recent
          version of the site, in the future I plan on publishing a demo version
          of the original purchase flow.
        </p>
      </>
    ),
  },
  {
    title: "Nescafé Azera - Path to Purchase",
    href: "https://maze-lime.vercel.app/",
    image: {
      src: "/img/portfolio/path-to-purchase.png",
      alt: "Screenshot of the Path to Purchase game screen",
      backgroundClassName:
        "bg-gradient-to-b from-[#E4530C] via-[#E4530C]/[.5] to-[#E4530C]/[.1]",
    },
    description: (
      <>
        <p>
          In 2019 I was asked to build a maze game to serve as an ice breaker at
          a Nestlé internal conference. The premise was simple, the player must
          navigate a supermarket themed maze with an assortment of themed
          obstacles in order to reach a coffee machine and select their drink of
          choice. With drink in hand they head to the checkout, choose their
          payment method, then leave the store.
        </p>
        <p>
          In its original form players were prompted to enter their name before
          playing and their best times were added to a leaderboard along with
          all their colleagues&apos; times. That version of the project was only
          live for a single day but I&apos;ve preserved a demo version of the
          maze itself.
        </p>
      </>
    ),
  },
  {
    title: "Vivo Life",
    href: "https://www.vivolife.com/",
    image: {
      src: "/img/portfolio/vivo-life.png",
      alt: "Screenshot of the Vivo Life homepage",
    },
    description: (
      <>
        <p>
          While at Fluid Agency, I was involved in Vivo Life from its origins in
          2014 until 2019 when they grew to the point that they needed an
          in-house developer. The original website I built was a Woocommerce
          site selling products from a variety of suppliers and in the following
          years they transformed to create their own product range, with their
          own manufacturing facilities and a custom website powered by Shopify
          Plus.
        </p>
        <p>
          The visual design has changed over the years but the core structure of
          the Shopify website retains much of what I built.
        </p>
      </>
    ),
  },
  // {
  //   title: "Smile Windows",
  // },
  {
    title: "Notaro Homes",
    href: "https://www.notarohomes.co.uk/",
    image: {
      src: "/img/portfolio/notaro-homes.png",
      alt: "Screenshot of the Notaro Homes homepage",
    },
    description: (
      <p>
        I was one of two developers who worked on the Notaro Homes website. In
        particular, I was heavily involved in building the landing page for the{" "}
        <Link
          href="https://www.notarohomes.co.uk/care-home/casa-di-lusso-dementia-nursing-care-home-bridgwater"
          className="font-bold text-blue-600"
        >
          Casa di Lusso care home
        </Link>
        .
      </p>
    ),
  },
];

export default function Portfolio() {
  return (
    <main>
      <Container>
        <h1 className="text-6xl my-20 uppercase font-mono">Portfolio</h1>

        <div className="space-y-20">
          {projects.map((project, key) => (
            <Project key={key} {...project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
