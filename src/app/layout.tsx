import type { ReactNode } from "react";
import type { Metadata } from "next";

import { defaultMetadata } from "@/config/site";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "@/styles/globals.css";
import "pretendard/dist/web/static/pretendard.css";

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="dark:bg-dark-bg">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
