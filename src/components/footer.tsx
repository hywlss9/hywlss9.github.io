import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex-col w-screen p-4 border-t">
      <p>COPYRIGHT © 2019 ALL RIGHT 박형진</p>
      <div>
        <Link
          href="https://github.com/hywlss9"
          target="_blank"
          className="mr-2 underline"
        >
          Github
        </Link>
        <Link
          href="https://hywlss9.github.io"
          target="_blank"
          className="mr-2 underline"
        >
          Blog
        </Link>
        <Link
          href="https://github.com/hywlss9/hywlss9.github.io"
          target="_blank"
          className="underline"
        >
          Repository
        </Link>
      </div>
    </footer>
  );
}
