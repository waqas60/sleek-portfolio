import Link from "next/link";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function AnimatedReadMoreBtn({ slug }: { slug: string }) {
  return (
    <div>
      <Link
        href={`/blogs/${slug}`}
        className="group text-[11px] flex gap-2 items-center"
      >
        Read more
        <MdKeyboardArrowRight
          size={15}
          className="transition-all group-hover:translate-x-1 duration-200"
        />
      </Link>
    </div>
  );
}
