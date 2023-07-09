import Link from "next/link";

import { siteConfig } from "@/config/site";

interface ListItem {
  id: number;
  name: string;
  link: string;
}

const LIST_ITEMS: ListItem[] = [
  { id: 0, name: "소개", link: "/about" },
  { id: 1, name: "글 목록", link: "/posts" },
];

export default function Header() {
  return (
    <header className="flex items-center justify-between w-screen h-12 px-6 border-b">
      <h1>
        <Link href={{ pathname: siteConfig.url }}>BLOG</Link>
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
