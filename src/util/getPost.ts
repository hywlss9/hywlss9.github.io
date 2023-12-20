import { cache } from 'react';
import fs from 'fs/promises';
import matter from "gray-matter";
import path from "path";
import type { FrontMatter } from '@types/posts';

export const getPosts = cache(async () => {
  const posts  = await fs.readdir('./src/posts/');
  
  return Promise.all(
    posts
      .filter((file) => path.extname(file) === '.mdx')
      .map(async (file) => {
        const filePath = `./src/posts/${file}`;
        const postContent = await fs.readFile(filePath, 'utf8');
        const { data, content } = matter(postContent);
        
        return { ...data, body: content } as FrontMatter & { body: string };
      })
  ).then((posts) => posts.sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1));
})

export async function getPost(slug: string) {
  const posts = await getPosts();
  return posts.find((post) => post?.slug === slug);
}

export default getPosts;
