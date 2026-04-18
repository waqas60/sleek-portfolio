"use client";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function GithubGraph() {
  const { theme } = useTheme();

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="mt-20"
    >
      <h1 className="mb-4 text-md font-semibold">Github</h1>

      <div className="flex w-full justify-center overflow-x-auto rounded-2xl border border-neutral-200 p-4 dark:border-neutral-600">
        <GitHubCalendar
          username="waqas60"
          year={2026}
          blockSize={8}
          blockMargin={3}
          fontSize={10}
          colorScheme={theme === "dark" ? "dark" : "light"}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
          }}
        />
      </div>
    </motion.section>
  );
}
