import type { Tag } from "@/constants/posts";

interface TagProps {
  name: Tag;
}

export default function Tag({ name }: TagProps) {
  return (
    <span className={`inline-block mr-2 p-1 rounded bg-[#eeeeee] text-xs`}>
      #{name}
    </span>
  );
}
