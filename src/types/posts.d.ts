type Tag =
  | "Front-End"
  | "Back-End"
  | "Network"
  | "HTML/CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Electron";

interface FrontMatter {
  id: number;
  title: string;
  description: string;
  date: string;
  tags: Tag[];
  slug: string;
}

export type { FrontMatter, Tag };
