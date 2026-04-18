"use client";
import Link from "next/link";
import { useState } from "react";
import ToggleTheme from "./ToggleTheme";
import { motion } from "motion/react";

const items = [
  { href: "/", title: "Home" },
  { href: "/projects", title: "Projects" },
  { href: "/blogs", title: "Blog" },
];

export default function Navbar() {
  const [active, setActive] = useState("Home");

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="flex h-20 items-center justify-end px-6 mr-4"
    >
      <ul className="flex items-center justify-center gap-6 mr-4 rounded-4xl px-4 py-1 text-[10px] ">
        {items.map((item, index) => {
          return (
            <li
              onClick={() => setActive(item.title)}
              className={`cursor-pointer font-medium transition-all duration-300 ease-in-out ${
                active === item.title
                  ? "border-b border-zinc-500"
                  : "border-transparent text-zinc-500"
              }`}
              key={index}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          );
        })}
      </ul>
      <ToggleTheme />
    </motion.div>
  );
}
