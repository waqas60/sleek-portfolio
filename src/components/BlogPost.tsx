"use client";
import ReactMarkdown from "react-markdown";
import { motion } from "motion/react";

type BlogPostType = {
  title: string;
  date: string;
  description: string;
  content: string;
};

export default function BlogPost(blog: BlogPostType) {
  return (
    <motion.div
      className="mx-auto max-w-2xl px-4 py-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="flex flex-col justify-center gap-3 mb-10">
        <h1 className="text-2xl font-semibold text-neutral-800 dark:text-neutral-50">
          {blog.title}
        </h1>
        <p className="text-[11px] text-neutral-500 italic tracking-wider border-l border-neutral-300 pl-2">
          {blog.description}
        </p>
        <p className="text-[11px] text-neutral-400">{blog.date}</p>
      </div>

      <article className=" text-sm">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </motion.div>
  );
}
