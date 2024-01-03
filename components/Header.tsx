import Link from "next/link";

interface NavLink {
  href: string;
  text: string;
}

const links: NavLink[] = [
  {
    href: "/portfolio",
    text: "Portfolio",
  }, 
  {
    href: "/contact",
    text: "Contact Me",
  },  
];

export default function Header() {
  return (
    <header className="px-8 py-10">
      <div className="mx-auto flex max-w-[80rem] items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-extrabold uppercase tracking-wide"
        >
          James O&apos;Neill
        </Link>

        <nav>
          <ul className="flex gap-8">
            {links.map((link, key) => (
              <li key={key}>
                <Link
                  href={link.href}
                  className="text-md rounded-md px-4 py-2 text-sm font-semibold uppercase tracking-wide text-blue-950 transition-colors duration-300 hover:bg-gray-200"
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
