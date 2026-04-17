import blogs from "@/data/blogs";
import BlogCard from "./BlogCard";

export default function Blog() {
  return (
    <div className="my-15 grid grid-cols-1 gap-4">
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
    </div>
  );
}
