"use client";
import blogs from "@/data/blogs";
import BlogCard from "./BlogCard";
import { motion } from "motion/react";

export default function Blog() {
  return (
    <motion.div
      className="my-15 grid grid-cols-1 gap-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h1 className="text-md font-semibold">Blogs</h1>

      {blogs.map((blog, index) => {
        return (
          <BlogCard
            key={index}
            title={blog.title}
            description={blog.description}
            link={blog.link}
            date={blog.date}
          />
        );
      })}
    </motion.div>
  );
}
