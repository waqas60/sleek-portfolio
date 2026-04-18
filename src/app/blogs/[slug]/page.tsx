import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import blogs from "@/data/blogs";
import BlogPost from "@/components/BlogPost";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const filePath = path.join(process.cwd(), "src/data/blog", `${slug}.md`);
  if (!fs.existsSync(filePath)) notFound();

  const content = fs.readFileSync(filePath, "utf-8");

  return <BlogPost title={blog.title} date={blog.date} content={content} description={blog.description}/>;
}
