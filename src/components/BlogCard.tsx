import Link from "next/link";
import { BlogType } from "@/types/blogs";
import AnimatedReadMoreBtn from "./AnimatedReadMoreBtn";

export default function BlogCard(blog: BlogType) {
  return (
    <div className="flex gap-4 rounded-xl border  border-neutral-200 p-2 transition-all duration-300 hover:border-neutral-300 dark:border-neutral-600 dark:hover:border-neutral-500 justify-between">
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-sm font-semibold text-neutral-800 dark:text-neutral-50">
          <Link href={`/blogs/${blog.slug}`}>{blog.title}</Link>
        </h1>

        <div>
          <p className="text-[11px] text-neutral-500">{blog.description}</p>
        </div>

        <AnimatedReadMoreBtn slug={blog.slug}/>
      </div>

      <p className="text-neutral-500 text-[11px] ">{blog.date}</p>
    </div>
  );
}
