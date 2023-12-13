import type { Metadata } from "next";
import { Inter } from "@next/font/google";
import classNames from "classnames";

import { defaultMetadata } from "@/config/site";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "@/styles/globals.css";
import "pretendard/dist/web/static/pretendard.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={classNames(inter.className, 'dark:bg-dark-bg')}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
