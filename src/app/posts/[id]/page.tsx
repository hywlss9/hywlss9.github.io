import { marked } from "marked";

import Container from "@/components/container";

export default async function Post({
  params,
}: {
  params: { [key: string]: string };
}) {
  const { id } = params;

  const res = await fetch(
    `${
      process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""
    }/static/markdowns/${id}/${id}.md`
  );
  const data = await res.text();
  const html = marked.parse(data);

  return (
    <Container>
      <div
        className="[&>p]:leading-8 [&>table]:border-collapse [&>table>thead>tr>th]:border [&>table>thead>tr>th]:p-3 [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:p-3"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  );
}
