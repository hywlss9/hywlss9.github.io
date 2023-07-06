import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ children }: ContainerProps) {
  return <main className="min-h-[calc(100vh-3rem)] p-6">{children}</main>;
}
