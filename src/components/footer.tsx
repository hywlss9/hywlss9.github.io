import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-col w-full px-6 py-4 border-t dark:bg-dark-bg dark:border-dark-bo dark:text-white">
      <p>COPYRIGHT © 2023 ALL RIGHT 박형진</p>
      <div>
        <Link
          href={{ pathname: "https://github.com/hywlss9" }}
          target="_blank"
          className="mr-2 underline"
        >
          Github
        </Link>
        <Link
          href={{ pathname: "https://hywlss9.github.io" }}
          target="_blank"
          className="mr-2 underline"
        >
          Blog
        </Link>
        <Link
          href={{ pathname: "https://github.com/hywlss9/hywlss9.github.io" }}
          target="_blank"
          className="underline"
        >
          Repository
        </Link>
      </div>
    </footer>
  );
}
