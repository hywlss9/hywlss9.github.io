import type { HTMLAttributes } from "react";
import classnames from "classnames";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Container({ children, className }: ContainerProps) {
  return (
    <main className={classnames('min-h-[calc(100vh)]', 'px-6', 'py-16', 'dark:bg-dark-bg', 'dark:text-white', 'xl:w-[800px]', 'xl:mx-auto', className)}>
      {children}
    </main>
  );
}
