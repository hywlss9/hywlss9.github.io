import Link from "next/link";

import { siteConfig } from "@config/site";

import { LIST_ITEMS } from "@constants/links";

export default function Header() {
  return (
    <header className="flex items-center justify-between fixed w-full h-12 px-6 border-b dark:bg-dark-bg dark:border-dark-bo dark:text-white">
      <h1>
        <Link href={siteConfig.url} className="font-bold">BLOG</Link>
      </h1>
      <ul className="flex items-conter justify-between">
        {LIST_ITEMS.map(({ id, name, link }) => (
          <li key={id} className="ml-4 hover:underline">
            <Link href={{ pathname: link }}>{name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
