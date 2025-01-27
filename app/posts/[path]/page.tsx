import { getAllPosts } from "../../lib";

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((path) => ({ path }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const path = (await params).path;
  return <div>My Post: {path}</div>;
}
