import React from "react";
import { cn } from "@/lib/utils";

type OverlayProps = {
  isMenuOpen: boolean;
  isAnimating: boolean;
  onTransitionEnd: () => void;
};

const Overlay: React.FC<OverlayProps> = ({
  isMenuOpen,
  isAnimating,
  onTransitionEnd,
}) => {
  const baseClasses =
    "fixed inset-0 transition-opacity duration-300 md:hidden bg-neutral-900/80";

  const visibilityClasses = cn(
    "z-10",
    isMenuOpen ? "opacity-100" : "opacity-0",
    !isMenuOpen && !isAnimating && "-z-10",
  );

  return (
    <div
      className={cn(baseClasses, visibilityClasses)}
      onTransitionEnd={onTransitionEnd}
      aria-hidden={!isMenuOpen}
    />
  );
};

export default Overlay;
