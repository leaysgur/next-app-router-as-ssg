import type { Metadata } from "next";
import { getAllPosts } from "./lib";
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const posts = await getAllPosts();

  return (
    <html lang="en">
      <body>
        <nav>
          <a href="/">HOME</a>
          <a href="/about">ABOUT</a>
          {posts.map((path) => (
            <a key={path} href={`/posts/${path}`}>
              {path}
            </a>
          ))}
        </nav>
        <hr />
        {children}
      </body>
    </html>
  );
}
