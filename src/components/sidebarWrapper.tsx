import React from "react";
import { cn } from "@/lib/utils";

type SidebarWrapperProps = {
  isMenuOpen: boolean;
  isAnimating: boolean;
  onAnimationEnd: () => void;
  children: React.ReactNode;
};

const SidebarWrapper: React.FC<SidebarWrapperProps> = ({
  isMenuOpen,
  isAnimating,
  onAnimationEnd,
  children,
}) => {
  const baseClasses =
    "fixed left-0 top-0 flex h-full w-full max-w-xs flex-col items-center justify-center bg-neutral-100 transition duration-300 ease-out md:hidden dark:bg-neutral-900";

  const visibilityClasses = cn(
    isMenuOpen || isAnimating ? "z-20" : "-z-10",
    isMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0",
  );

  return (
    <aside
      id="sidebar-menu"
      className={cn(baseClasses, visibilityClasses)}
      onTransitionEnd={onAnimationEnd}
      aria-hidden={!isMenuOpen}
    >
      {children}
    </aside>
  );
};

export default SidebarWrapper;
