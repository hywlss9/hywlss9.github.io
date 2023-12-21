import Link from 'next/link'
import Image from 'next/image';
import type { ImageProps } from 'next/image'
import type { MDXComponents } from "mdx/types";
import { Code } from "bright";

export const mdxComponents: MDXComponents = {
  pre: Code,
  a: ({ children, ...props }) => {
    return (
      <Link {...props as React.RefAttributes<HTMLAnchorElement>} href={props.href || ''} target='_blank'>{children}</Link>
    )
  },
  img: ({ ...props }) => {
    return (
      <Image {...props as ImageProps} />
    )
  },
}
