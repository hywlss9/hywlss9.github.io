import Link from "next/link";

import { POSTS_PREVIEWS } from "@/constants/posts";

import Container from "@/components/container";
import Tag from "@/components/tag";

export default function Posts() {
  const list = POSTS_PREVIEWS.sort((a, b) =>
    new Date(a.date) > new Date(b.date) ? -1 : 1
  );

  return (
    <Container>
      <h2>글 목록</h2>
      <ul>
        {list.map(({ id, title, description, date, tags }) => (
          <li
            key={id}
            className="group flex-col border-b last:border-b-0 dark:border-dark-bo"
          >
            <Link href={{ pathname: `/posts/${id}` }} className="block py-4">
              <strong className="block mb-2 text-xl group-hover:underline">
                {title}
              </strong>
              <p>{description}</p>
              <span className="text-xs">{date}</span>
              <div className="mt-3">
                {tags.map((tag) => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
