import type { HTMLAttributes } from 'react';

interface TitleProps extends HTMLAttributes<HTMLDivElement> {}

export default function Title({ children }: TitleProps) {
  return <h1 className='text-3xl font-bold'>{children}</h1>;
}
