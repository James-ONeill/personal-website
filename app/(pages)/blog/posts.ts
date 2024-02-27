import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface PostMetadata {
  id: string;
  date: string;
  title: string;
  published?: boolean;
}

const postsDirectory = path.join(process.cwd(), "app/(pages)/blog/(posts)");

const directoryHasPost = (dirName: string): boolean =>
  fs.lstatSync(path.join(postsDirectory, dirName)).isDirectory() &&
  fs.lstatSync(path.join(postsDirectory, dirName, "page.mdx")).isFile();

export const getPostMetadata = (id: string): PostMetadata => {
  const fullPath = path.join(postsDirectory, id, "page.mdx");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  const { date, title, published } = data;

  return {
    id,
    date,
    title,
    published,
  };
};

export const getSortedPostsData = () =>
  fs
    .readdirSync(postsDirectory)
    .filter(directoryHasPost)
    .map(getPostMetadata)
    .filter((post) => post.published)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
