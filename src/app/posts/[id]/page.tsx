import { marked } from "marked";

import { siteConfig } from "@/config/site";

import Container from "@/components/container";

export function generateStaticParams() {
  return [{ id: "0" }, { id: "1" }, { id: "2" }];
}

async function getMarkdownToHtml(id: string) {
  const res = await fetch(`${siteConfig.url}/markdowns/${id}/${id}.md`);
  const data = await res.text();
  const html = marked.parse(data);
  return html;
}

export default async function Post({
  params,
}: {
  params: { [key: string]: string };
}) {
  const { id } = params;

  const __html: string = await getMarkdownToHtml(id);

  return (
    <Container>
      <div
        className="[&>p]:leading-8 [&>table]:border-collapse [&>table>thead>tr>th]:border [&>table>thead>tr>th]:p-3 [&>table>tbody>tr>td]:border [&>table>tbody>tr>td]:p-3"
        dangerouslySetInnerHTML={{ __html }}
      />
    </Container>
  );
}
