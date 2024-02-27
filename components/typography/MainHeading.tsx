import { ReactNode } from "react";
import Container from "../Container";

interface Props {
  children: ReactNode;
}

export default function MainHeading({ children }: Props) {
  return (
    <div className="mb-20 bg-indigo-50 bg-gradient-to-b from-indigo-50 to-indigo-100">
      <div className="bg-dots-slate-900/[.1] py-16 lg:py-24">
        <Container>
          <h1 className="font-mono font-bold text-4xl lg:text-6xl">{children}</h1>
        </Container>
      </div>
    </div>
  );
}
