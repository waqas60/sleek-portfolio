"use client";
import Image from "next/image";
import Socials from "./Socials";
import { motion } from "motion/react";
import Role from "./Role";

export default function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mb-12 sm:mb-20"
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <Image
          alt="waqas"
          src={"/assets/profile.png"}
          width={70}
          height={70}
          className="pointer-events-none size-14 sm:size-17.5 rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] select-none shrink-0"
        />

        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-lg sm:text-xl font-bold">Muhammad Waqas</h1>
            <Role />
          </div>
          <p className="mt-1 w-full max-w-[90%] sm:max-w-[80%] text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
            Love to build cool stuff
          </p>
        </div>
      </div>

      <Socials />
    </motion.main>
  );
}
