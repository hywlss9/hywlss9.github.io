import Link from 'next/link';

import Container from '@/components/container';
import Tag from '@/components/tag';

import getPosts from '@/util/getPost';

export default async function Posts() {
  const posts = await getPosts();

  return (
    <Container>
      <ul>
        {posts.map(({ slug, title, description, date, tags }) => (
          <li key={slug} className='group flex-col border-b last:border-b-0 dark:border-dark-bo'>
            <Link href={{ pathname: `/posts/${slug}` }} className='block py-4'>
              <strong className='block mb-2 text-xl group-hover:underline'>{title}</strong>
              <p>{description}</p>
              <span className='text-xs'>{date}</span>
              <div className='mt-3'>
                {tags.map((tag) => (
                  <Tag key={tag} name={tag} />
                ))}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
