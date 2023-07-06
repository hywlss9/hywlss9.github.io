import { POSTS_PREVIEWS } from "@/constants/posts";

import Container from "@/components/container";
import Tag from "@/components/tag";

export default function Posts() {
  return (
    <Container>
      <h2>글 목록</h2>
      <ul>
        {POSTS_PREVIEWS.map(({ id, title, description, date, tags }) => (
          <li key={id} className="flex-col py-4 border-b last:border-b-0">
            <strong>{title}</strong>
            <p>{description}</p>
            <span>{date}</span>
            <div>
              {tags.map((tag) => (
                <Tag key={tag} name={tag} />
              ))}
            </div>
          </li>
        ))}
      </ul>
    </Container>
  );
}
