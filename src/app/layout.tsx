import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InteriorHub - 인테리어 디자인 플랫폼",
  description:
    "인테리어 디자이너를 위한 올인원 SaaS 플랫폼. 룸 디자이너, 가구 카탈로그, 프로젝트 관리, 무드보드까지.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="bg-white text-surface-900 antialiased">{children}</body>
    </html>
  );
}
