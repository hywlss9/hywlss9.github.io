import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ children }: ContainerProps) {
  return <main className="p-6">{children}</main>;
}
