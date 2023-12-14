import Link from 'next/link'
import type { MDXComponents } from "mdx/types";
import { Code } from "bright";

export const mdxComponents: MDXComponents = {
  pre: Code,
  a: ({ children, ...props }) => {
    return (
      <Link {...props as React.RefAttributes<HTMLAnchorElement>} href={props.href || ''} target='_blank'>{children}</Link>
    )
  }
}
