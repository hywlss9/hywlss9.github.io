import Link from "next/link";

import { siteConfig } from "@config/site";

import Container from "@components/container";
import Button from "@components/button";

export default function NotFound() {
  return (
    <Container className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center mb-24">
        <strong className="py-8 text-7xl">404</strong>
        <h1 className="pb-8 text-xl">없는 페이지 입니다 :(</h1>
        <Link href={siteConfig.url} className="hover:underline">
          <Button>홈으로 이동</Button>
        </Link>
      </div>
    </Container>
  );
}
