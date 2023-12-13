import type { Metadata } from "next";

import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "박형진 블로그",
  description: "개발자 박형진의 블로그 입니다.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://hywlss9.github.io",
  ogImage: "https://hywlss9.github.io/og.png",
  links: {
    github: "https://github.com/hywlss9",
  },
};

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.name,
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  verification: {
    google: "Et3yBpMT_i8rSI6iWT9woCnZtXXLrjeD7p4CEZv9XYw",
    other: {
      naver: "86402e597299c992e080ee68b30026651e809f7b",
    },
  },
};
