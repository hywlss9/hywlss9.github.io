import type { Metadata } from "next";
import { Inter } from "@next/font/google";

import { defaultMetadata } from "@/config/site";

import Header from "@/components/header";
import Footer from "@/components/footer";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
