import { marked } from "marked";

import { siteConfig } from "@/config/site";

import { POSTS_STATIC_PARAMS } from "@/constants/posts";

import Container from "@/components/container";

import "github-markdown-css";

export function generateStaticParams() {
  return POSTS_STATIC_PARAMS;
}

async function getMarkdownToHtml(id: string) {
  const res = await fetch(`${siteConfig.url}/markdowns/${id}/${id}.md`);
  // TODO: test code
  // const res = await fetch(
  //   `${siteConfig.url}/nextjs-github-pages/markdowns/${id}/${id}.md`
  // );
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
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html }} />
    </Container>
  );
}
