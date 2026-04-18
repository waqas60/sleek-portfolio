"use client";
import { ViewAllType } from "@/types/viewAll";
import Link from "next/link";
import { motion } from "motion/react";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function ViewAll({ link }: ViewAllType) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Link
        href={link}
        className="absolute right-0 -bottom-10 text-[10px] text-neutral-600 p-1 rounded-md w-fit flex group justify-center"
      >
        View All
        <MdKeyboardArrowRight
          size={15}
          className="transition-all group-hover:translate-x-1 duration-200"
        />
      </Link>
    </motion.div>
  );
}
