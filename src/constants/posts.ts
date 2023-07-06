type Tag =
  | "Front-End"
  | "Back-End"
  | "Network"
  | "HTML/CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Electron";

interface PostsPreview {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: Tag[];
}

export const POSTS_PREVIEWS: PostsPreview[] = [
  {
    id: 0,
    title: "CSS Convention",
    description: "제가 사용하는 CSS Convention에 대해 소개합니다",
    date: "2021.07.25",
    tags: ["Front-End", "HTML/CSS"],
  },
  {
    id: 1,
    title: "JS Custom Event 만들어보기",
    description:
      "React를 개발하며 event 관련 문제를 해결하기 위한 노력과 방법을 소개합니다",
    date: "2022.04.20",
    tags: ["Front-End", "JavaScript", "TypeScript", "React"],
  },
  {
    id: 2,
    title: "swagger에서 openapi-typescript로 data model 가져오기",
    description:
      "TypeScript를 사용하며 Back-End와 Front-End의 data model을 동기화하는 방법을 소개합니다",
    date: "2023.03.17",
    tags: ["Front-End", "Back-End", "TypeScript"],
  },
];
