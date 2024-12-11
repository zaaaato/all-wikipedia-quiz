import type { Metadata } from "next";
import { DotGothic16 } from "next/font/google";
import "./globals.css";

const DotGothic16Font = DotGothic16({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "情け無用クイズ",
  description: "wikipediaからランダムな記事を取得してそこからクイズを出しちゃうぞ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${DotGothic16Font.className} antialiased`}>
        <div className="min-h-screen py-12 flex justify-center">
          <main className="w-5/6">
            <h1 className="text-3xl font-bold">情け無用クイズ</h1>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
