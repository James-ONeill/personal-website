import Container from "@/components/Container";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSortedPostsData } from "./posts";

export const metadata: Metadata = {
  title: "Blog | James O'Neill",
};

export default function Blog() {
  const posts = getSortedPostsData();

  if (posts.length < 1) return notFound();

  return (
    <main>
      <Container>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
