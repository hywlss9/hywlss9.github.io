import type { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "형진의 blog",
  description: "박형진 입니다.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://hywlss9.github.io",
  ogImage: "https://hywlss9.github.io/og.png",
  links: {
    github: "https://github.com/hywlss9",
  },
};
