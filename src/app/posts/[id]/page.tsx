import { Metadata } from "next";
import { marked } from "marked";

import { siteConfig, defaultMetadata } from "@/config/site";

import { POSTS_STATIC_PARAMS, POSTS_PREVIEWS } from "@/constants/posts";

import Container from "@/components/container";
import PostHeader from "@/components/postHeader";
import Title from "@/components/title";

import "github-markdown-css";

export function generateStaticParams() {
  return POSTS_STATIC_PARAMS;
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const id = Number(params.id);
  const { title, description } = POSTS_PREVIEWS[id];

  return {
    ...defaultMetadata,
    openGraph: {
      ...defaultMetadata.openGraph,
      title,
      description,
      url: `${siteConfig.url}/posts/${id}`,
    },
  };
}

async function getMarkdownToHtml(id: string) {
  const FILE_URL =
    process.env.NODE_ENV === "development"
      ? `${siteConfig.url}/nextjs-github-pages/markdowns/${id}/${id}.md`
      : `${siteConfig.url}/markdowns/${id}/${id}.md`;
  const res = await fetch(FILE_URL);
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

  const { title, date } = POSTS_PREVIEWS[Number(id)];

  const __html: string = await getMarkdownToHtml(id);

  return (
    <Container>
      <PostHeader date={date} border={true}>
        <Title>{title}</Title>
      </PostHeader>
      <div className="markdown-body" dangerouslySetInnerHTML={{ __html }} />
    </Container>
  );
}
