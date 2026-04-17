import { FiMoon } from "react-icons/fi";
import { IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export default function ToggleTheme() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  function handleToggleTheme() {
    const currentTheme = theme === "system" ? resolvedTheme : theme;
    setTheme(currentTheme === "dark" ? "light" : "dark");
  }
  return (
    <motion.button
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleToggleTheme}
      className="relative flex cursor-pointer items-center justify-center rounded-md"
    >
      <FiMoon className="absolute inset-0 m-auto size-3 scale-100 text-neutral-500 transition-all duration-300 dark:scale-0 dark:rotate-45" />
      <IoSunnyOutline className="absolute inset-0 m-auto size-3 scale-0 rotate-45 transition-all duration-300 dark:scale-100 dark:rotate-0 dark:text-neutral-200" />
    </motion.button>
  );
}
