import type { ButtonHTMLAttributes } from "react";

export default function Button(props: ButtonProps) {
  const { className, children } = props;
  return (
    <button
      {...props}
      className={`px-3 py-2 border rounded border-black dark:border-white${
        className ? ` ${className}` : ""
      }`}
    >
      {children}
    </button>
  );
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
