import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainHeading({ children }: Props) {
  return <h1 className="my-20 font-mono text-4xl lg:text-6xl">{children}</h1>;
}
