type Tag =
  | "Front-End"
  | "Back-End"
  | "Network"
  | "HTML/CSS"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Next.js"
  | "Electron";

interface FrontMatter {
  title: string;
  description: string;
  date: string;
  tags: Tag[];
  slug: string;
}

export type { FrontMatter, Tag };
