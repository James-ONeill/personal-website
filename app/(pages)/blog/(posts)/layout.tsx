import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MdxLayout({ children }: Props) {
  return <div>{children}</div>;
}
