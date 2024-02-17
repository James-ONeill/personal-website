import Container from "@/components/Container";
import fs from "fs";
import matter from "gray-matter";
import type { Metadata } from "next";
import path from "path";
import Link from "next/link";

interface PostMetadata {
  id: string;
  date: string;
  title: string;
}

const postsDirectory = path.join(process.cwd(), "app/blog/(posts)");

export function getSortedPostsData() {
  return fs
    .readdirSync(postsDirectory)
    .filter(
      (name) =>
        fs.lstatSync(path.join(postsDirectory, name)).isDirectory() &&
        fs.lstatSync(path.join(postsDirectory, name, "page.mdx")).isFile(),
    )
    .map((id): PostMetadata => {
      const fullPath = path.join(postsDirectory, id, "page.mdx");
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data } = matter(fileContents);

      return {
        id,
        date: data.date,
        title: data.title,
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export const metadata: Metadata = {
  title: "Blog | James O'Neill",
};

export default function Blog() {
  const posts = getSortedPostsData();

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
