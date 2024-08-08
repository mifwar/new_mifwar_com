import React, { useState } from "react";

import { cn } from "@/lib/utils";

type Size = "sm" | "md" | "lg" | "xl";

type HamburgerMenuProps = {
  className?: string;
  size?: Size;
  isOpen: boolean;
  toggleMenu: () => void;
};

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  className,
  size = "md",
  isOpen,
  toggleMenu,
}) => {
  // Define size classes
  const sizeClasses = {
    sm: "size-5",
    md: "size-6",
    lg: "size-8",
    xl: "size-10",
  };

  // Define line height classes
  const lineHeightClasses = {
    sm: "h-0.5",
    md: "h-0.5",
    lg: "h-1",
    xl: "h-1",
  };

  // Define translation classes for closed state
  const translationClasses = {
    sm: "-translate-y-1.5 translate-y-1.5",
    md: "-translate-y-2 translate-y-2",
    lg: "-translate-y-2.5 translate-y-2.5",
    xl: "-translate-y-3 translate-y-3",
  };

  const lineClass = [
    "absolute w-full bg-gray-600 dark:bg-gray-300 transition-all duration-300 ease-in-out",
    lineHeightClasses[size],
  ];

  return (
    <button
      className={cn("relative focus:outline-none", className)}
      onClick={toggleMenu}
    >
      <div
        className={cn("flex items-center justify-center", sizeClasses[size])}
      >
        <span
          className={cn(
            lineClass,
            isOpen ? "rotate-45" : translationClasses[size].split(" ")[0],
          )}
        />
        <span className={cn(lineClass, isOpen ? "opacity-0" : "opacity-100")} />
        <span
          className={cn(
            lineClass,
            isOpen ? "-rotate-45" : translationClasses[size].split(" ")[1],
          )}
        />
      </div>
    </button>
  );
};

export default HamburgerMenu;
