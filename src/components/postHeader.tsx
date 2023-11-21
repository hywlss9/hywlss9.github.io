import type { HTMLAttributes } from "react";

interface PostHeaderProps extends HTMLAttributes<HTMLDivElement> {
  date?: string;
  border?: boolean;
}

export default function PostHeader({
  border,
  date,
  children,
}: PostHeaderProps) {
  return (
    <div
      className={`pb-8${border ? " mb-8 border-b dark:border-dark-bo" : ""}`}
    >
      {children}
      {typeof date === "string" && (
        <span className="inline-block pt-4 text-slate-300">{date}</span>
      )}
    </div>
  );
}
