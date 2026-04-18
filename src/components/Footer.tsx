"use client";
import Link from "next/link";
import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.p
      className="text-[10px] text-neutral-600 leading-tight tracking-wider mx-auto dark:text-neutral-400 justify-center flex mb-10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Built by
      <span className="font-bold underline decoration-neutral-300 ml-0.5">waqas</span>
      . The source code is available on
      <span>
        <Link
          href={"https://github.com/waqas60/sleek-portfolio"}
          target="_blank"
          className="font-bold underline decoration-neutral-300 ml-0.5"
        >
          GitHub
        </Link>
        .
      </span>
    </motion.p>
  );
}
