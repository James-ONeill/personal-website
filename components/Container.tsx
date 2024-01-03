import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

export default function Container({ children }: Props) {
  return (
    <div className="px-8">
      <div className="mx-auto max-w-[80rem]">{children}</div>
    </div>
  );
}
