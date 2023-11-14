import type { Metadata } from "next";

import { defaultMetadata, siteConfig } from "@/config/site";

import Container from "@/components/container";

export const metadata: Metadata = {
  ...defaultMetadata,
  openGraph: {
    ...defaultMetadata.openGraph,
    url: `${siteConfig.url}/about`,
    title: "소개",
    description: "개발자 박형진의 BLOG",
  },
};

const INFO: { title: string; content: string }[] = [
  { title: "이름", content: "박형진" },
  { title: "성별", content: "남자" },
  { title: "생년월일", content: "2001.06.12" },
  { title: "사는 곳", content: "서울" },
];

const HISTORY: { title: string; content: string }[] = [
  { title: "ARTiPIO", content: "2020.08 ~ ing" },
  { title: "서울디지텍고등학교 강사", content: "2020.05" },
  { title: "광운대학교", content: "2023.03 ~ ing" },
  { title: "에이블스토어", content: "2020.06 ~ 2023.04" },
  { title: "서울디지텍고등학교", content: "2017.03 ~ 2020.02" },
];

const SubTitle = ({ children }: { children: React.ReactNode }) => (
  <h3 className="py-2 text-xl">{children}</h3>
);

const HarfBasisText = ({ children }: { children: React.ReactNode }) => (
  <span className="basis-1/2">{children}</span>
);

export default function About() {
  return (
    <Container className="flex-col items-center justify-center">
      <div className="max-w-740 mx-auto">
        <strong className="block pb-4 text-4xl text-center">
          {"/*"} BLOG 개발중 {"*/"}
        </strong>
        <SubTitle>개발자 박형진의 BLOG</SubTitle>
        <hr className="mt-4mb-2" />
        <SubTitle>정보</SubTitle>
        {INFO.map(({ title, content }, index) => (
          <div key={index} className="flex items-center">
            <HarfBasisText>{title}</HarfBasisText>
            <HarfBasisText>{content}</HarfBasisText>
          </div>
        ))}
        <hr className="mt-4 mb-2" />
        <SubTitle>이력</SubTitle>
        <ul>
          {HISTORY.map(({ title, content }, index) => (
            <li key={index} className="flex">
              <HarfBasisText>{title}</HarfBasisText>
              <HarfBasisText>{content}</HarfBasisText>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
}
