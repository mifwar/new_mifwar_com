"use client";

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const ThemeToggler: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [animationEffect, setAnimationEffect] = React.useState(false);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
    setAnimationEffect(true);
  };

  return (
    <button
      className={cn(
        "absolute right-0 mr-6 rounded-lg p-2",
        "text-gray-600 hover:text-gray-950 dark:text-gray-300 dark:hover:text-gray-50",
        animationEffect &&
          (resolvedTheme === "dark"
            ? "animate-wiggle-right"
            : "animate-wiggle-left"),
      )}
      onClick={toggleTheme}
      onAnimationEnd={() => setAnimationEffect(false)}
      aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`}
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ThemeToggler;
