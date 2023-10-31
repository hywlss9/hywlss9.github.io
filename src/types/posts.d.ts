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

export type { PostsPreview, Tag };
