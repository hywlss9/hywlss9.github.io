import { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { siteConfig, defaultMetadata } from "@config/site";

import Container from "@components/container";
import PostHeader from "@components/postHeader";
import Title from "@components/title";

import { getPost, getPosts } from "@util/getPost";

import { mdxComponents } from "@app/mdx-components";

import "github-markdown-css";

export async function generateStaticParams() {
  const posts = await getPosts();
  
  return posts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  return {
    ...defaultMetadata,
    openGraph: {
      ...defaultMetadata.openGraph,
      title: post?.title,
      description: post?.description,
      url: `${siteConfig.url}/posts/${params.slug}`,
    },
  };
}

function PostBody({ children }: { children: string }) {
  return (
    // @ts-ignore
    <MDXRemote
      source={children}
      components={mdxComponents}
    />
  )
}

export default async function Post({
  params,
}: {
  params: { [key: string]: string };
}) {
  const { slug } = params;

  const post = await getPost(slug);

  if (!post) return notFound();

  return (
    <Container>
      <PostHeader date={post?.date} border={true}>
        <Title>{post?.title}</Title>
      </PostHeader>
      <div className="markdown-body">
        <PostBody>{post?.body}</PostBody>
      </div>
    </Container>
  );
}
