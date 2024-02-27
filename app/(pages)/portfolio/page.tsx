import Container from "@/components/Container";
import MainHeading from "@/components/typography/MainHeading";
import type { Metadata } from "next";
import Link from "next/link";
import Project, { Props as ProjectProps } from "./Project";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Check out a selection of the projects I've worked on.",
};

const projects: ProjectProps[] = [
  {
    title: "B/R Marketplace",
    href: "https://bleacherreportmarketplace.com/",
    technologies: ["react", "next", "tailwind"],
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
    technologies: ["react", "next", "tailwind"],
    description: (
      <>
        <p>
          Launched in 2022, Sneaks of Nature is an NFT project that marketed
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
    technologies: ["react", "laravel", "tailwind"],
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
    title: "Smile Windows",
    image: {
      src: "/img/portfolio/smile-windows.png",
      alt: "Screenshot of the Smile Windows builder page",
    },
    technologies: ["laravel", "vue", "tailwind"],
    description: (
      <>
        <p>
          Smile Windows was an online tool for building and visualising a
          variety of windows and doors. The end user could select from a variety
          of options including frame styles, glass styles and colours and see a
          running quote as well as a visualisation of their chosen product. They
          could then save their design for future reference or request a call
          from the sales team.
        </p>
        <p>
          Ultimately the project didn&apos;t end up launching for business
          reasons but the builder itself was feature complete.
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
    technologies: ["shopify", "vue", "tailwind"],
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
  {
    title: "Weight Watchers Coach Academy",
    image: {
      src: "/img/portfolio/ww-coach-academy.png",
      alt: "Screenshot of the Vivo Life homepage",
    },
    technologies: ["laravel", "vue", "tailwind"],
    description: (
      <>
        <p>
          From 2014 to 2020, new employees at Weight Watchers UK used the coach
          academy site as part of their onboarding. It started out as a booking
          system for in-person training courses, allowing them to select
          sessions based on their location and sending them email reminders
          before each course. The site evolved over that time, based on changes
          to Weight Watchers&apos; training needs and their corporate branding.
        </p>
      </>
    ),
  },
  {
    title: "Notaro Homes",
    href: "https://www.notarohomes.co.uk/",
    image: {
      src: "/img/portfolio/notaro-homes.png",
      alt: "Screenshot of the Notaro Homes homepage",
    },
    technologies: ["wordpress"],
    description: (
      <p>
        I was one of two developers who worked on the Notaro Homes website. In
        particular, I was heavily involved in building the landing page for the{" "}
        <Link
          href="https://www.notarohomes.co.uk/care-home/casa-di-lusso-dementia-nursing-care-home-bridgwater"
          className="font-bold text-blue-950 transition-[text-shadow] duration-300 [text-shadow:_0_0_0_rgb(219_39_119_/_40%)] hover:[text-shadow:_2px_2px_0_rgb(219_39_119_/_40%)] focus:[text-shadow:_2px_2px_2px_rgb(219_39_119_/_100%)]"
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
      <MainHeading>Portfolio</MainHeading>
      <Container>
        <div className="space-y-20">
          {projects.map((project, key) => (
            <Project key={key} {...project} />
          ))}
        </div>
      </Container>
    </main>
  );
}
