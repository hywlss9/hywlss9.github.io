import { MetadataRoute } from "next";

import { siteConfig } from "@/config/site";

import { POSTS_STATIC_PARAMS } from "@/constants/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const postsUrls = POSTS_STATIC_PARAMS.map(
    (params) => `${siteConfig.url}/posts/${params.id}`
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
