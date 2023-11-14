import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={`min-h-[calc(100vh-3rem)] p-6 dark:bg-dark-bg dark:text-white${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </main>
  );
}
