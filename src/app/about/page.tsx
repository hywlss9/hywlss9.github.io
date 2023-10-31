import Container from "@/components/container";

const INFO: { title: string; content: string }[] = [
  { title: "이름", content: "박형진" },
  { title: "성별", content: "남자" },
  { title: "생년월일", content: "2001.06.12" },
  { title: "사는 곳", content: "서울" },
];

export default function About() {
  return (
    <Container className="flex-col items-center justift-center">
      <h2>소개</h2>
      <p>개발자 박형진</p>
      <strong>블로그 개발중</strong>
      <hr className="my-3" />
      {INFO.map(({ title, content }, index) => (
        <div key={index} className="flex items-center">
          <p>{title}: </p>
          <p>{content}</p>
        </div>
      ))}
    </Container>
  );
}
