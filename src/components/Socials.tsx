"use client"

import socials from "@/data/socials";
import Link from "next/link";
import { motion } from "motion/react";

export default function Socials() {
  return (
    <motion.div
      className="ml-2 mt-8 flex items-center gap-2"
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
    >
      {socials.map((app, index) => (
        <motion.div
          key={index}
          className="group text-md relative text-neutral-500 dark:text-neutral-200"
          variants={{
            hidden: { opacity: 0, x: -10 },
            show: {
              opacity: 1,
              x: 0,
              transition: { duration: 2, ease: "easeOut" },
            },
          }}
        >
          <Link href={app.url} target="_blank">
            {app.icon}
          </Link>

          <span className="pointer-events-none absolute bottom-[calc(100%+8px)] left-1/2 -translate-x-1/2 translate-y-1 rounded bg-neutral-700 px-2 py-0.5 text-xs whitespace-nowrap text-white opacity-0 transition-all duration-150 group-hover:translate-y-0 group-hover:opacity-100">
            {app.text}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
