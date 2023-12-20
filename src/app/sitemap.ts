import { MetadataRoute } from "next";

import { siteConfig } from "@config/site";

import { getPosts } from '@util/getPost';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const postsUrls = posts.map(
    (params) => `${siteConfig.url}/posts/${params.slug}`
  );

  return [
    {
      url: siteConfig.url,
    },
    {
      url: `${siteConfig.url}/about`,
    },
    {
      url: `${siteConfig.url}/posts`,
    },
    ...postsUrls.map((url) => ({ url })),
  ];
}
