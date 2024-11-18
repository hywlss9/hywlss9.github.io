import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';

import { defaultMetadata, siteConfig } from '@/config/site';

import Container from '@/components/container';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'About 개발자 박형진 - hywlss9',
  description: '개발자 박형진을 소개합니다.',
  openGraph: {
    ...defaultMetadata.openGraph,
    url: `${siteConfig.url}/about`,
    title: 'About 개발자 박형진 - hywlss9',
    description: '개발자 박형진을 소개합니다.',
  },
};

interface AboutListData {
  title: string;
  content: string;
  link?: string;
}

const INFO: AboutListData[] = [
  { title: '이름', content: '박형진' },
  { title: '성별', content: '남자' },
  { title: '생년월일', content: '2001.06.12' },
];

const HISTORY: AboutListData[] = [
  { title: 'ARTiPIO', content: '2023.08 ~ ing', link: 'https://artipio.com' },
  {
    title: '서울디지텍고등학교 강사',
    content: '2023.05',
    link: 'http://www.sdh.hs.kr/',
  },
  { title: '광운대학교', content: '2023.03 ~ ing' },
  {
    title: '에이블스토어',
    content: '2020.06 ~ 2023.04',
    link: 'https://www.ablestor.com',
  },
  { title: '서울디지텍고등학교', content: '2017.03 ~ 2020.02' },
];

const SubTitle = ({ children }: { children: ReactNode }) => <h3 className='py-2 text-xl'>{children}</h3>;

const HarfBasisText = ({ children }: { children: ReactNode }) => <span className='basis-1/2'>{children}</span>;

export default function About() {
  return (
    <Container className='flex-col items-center justify-center'>
      <div className='max-w-740 mx-auto'>
        <SubTitle>개발자 박형진의 BLOG</SubTitle>
        <div className='mb-2'>
          <p>안녕하세요</p>
          <p>프론트엔드 개발자 박형진입니다.</p>
        </div>
        <div>
          <p>블로그 글 내용이나 버그 등 이슈가 있다면 아래 링크에 이슈를 남겨주세요! 감사합니다 :)</p>
          <Link
            href='https://github.com/hywlss9/hywlss9.github.io/issues'
            target='_blank'
            className='bg-transparent text-[#0969da] no-underline hover:underline'
          >
            Blog Issues
          </Link>
        </div>
        <br />
        <hr className='mt-4mb-2' />
        <SubTitle>정보</SubTitle>
        {INFO.map(({ title, content }, index) => (
          <div key={index} className='flex items-center'>
            <HarfBasisText>{title}</HarfBasisText>
            <HarfBasisText>{content}</HarfBasisText>
          </div>
        ))}
        <hr className='mt-4 mb-2' />
        <SubTitle>이력</SubTitle>
        <ul>
          {HISTORY.map(({ title, content, link }, index) => {
            return (
              <li key={index} className='flex'>
                <HarfBasisText>
                  {link ? (
                    <Link href={link} target='_blank' className='hover:underline'>
                      {title}
                    </Link>
                  ) : (
                    title
                  )}
                </HarfBasisText>
                <HarfBasisText>{content}</HarfBasisText>
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
}
