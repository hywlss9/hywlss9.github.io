import { POSTS_PREVIEWS } from "@/constants/posts";

export default function Posts() {
  return (
    <main>
      <h2>글 목록</h2>
      <ul>
        {POSTS_PREVIEWS.map(({ id, title, description, date, tags }) => (
          <li key={id} className="flex-col">
            <strong>{title}</strong>
            <p>{description}</p>
            <span>{date}</span>
            {tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </li>
        ))}
      </ul>
    </main>
  );
}
