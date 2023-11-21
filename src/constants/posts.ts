import type { PostsPreview, PostsStaticParams } from "@/types/posts";

export const POSTS_PREVIEWS: PostsPreview[] = [
  {
    id: 0,
    title: "CSS Convention",
    description: "제가 사용하는 CSS Convention을 소개합니다",
    date: "2021.07.25",
    tags: ["Front-End", "HTML/CSS"],
  },
  {
    id: 1,
    title: "JS Custom Event로 Modal 관리하기",
    description:
      "React에서 Custom Event를 사용하여 Modal을 관리하는 방법을 소개합니다",
    date: "2022.04.20",
    tags: ["Front-End", "JavaScript", "TypeScript", "React"],
  },
  {
    id: 2,
    title: "swagger에서 typescript data model 동기화하기",
    description:
      "openapi-typescript를 사용하여 Back-End/Front-End의 data model을 동기화하는 방법을 소개합니다",
    date: "2023.03.17",
    tags: ["Front-End", "Back-End", "TypeScript"],
  },
];

export const POSTS_STATIC_PARAMS: PostsStaticParams[] = POSTS_PREVIEWS.map(
  ({ id }) => ({ id: String(id) })
);
