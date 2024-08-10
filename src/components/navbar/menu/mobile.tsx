"use client";

import React, { useState, useRef, useCallback } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";
import useOutsideClick from "@/hooks/useOutsideClick";

import HamburgerMenu from "@/components/icon/hamburgerMenu";
import SidebarWrapper from "@/components/sidebarWrapper";
import Overlay from "@/components/overlay";

import { MenuItem, MENU_ITEMS } from "./menu";

import { cn } from "@/lib/utils";

type NavLinkProps = {
  item: MenuItem;
  isActive: boolean;
  toggleMenu: () => void;
};

const NavLink: React.FC<NavLinkProps> = ({ item, isActive, toggleMenu }) => {
  const linkProps = {
    href: item.url,
    className: cn(
      "group relative py-4 px-6 transition-all duration-200 ease-in-out w-full",
      "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white",
      isActive &&
        "text-neutral-950 dark:text-white bg-neutral-200 dark:bg-neutral-800",
    ),
    rel: "noopener noreferrer",
    ...(item.isNewTab && {
      target: "_blank",
    }),
  };

  return (
    <Link {...linkProps} onClick={toggleMenu}>
      <div className="flex items-center gap-5">
        <item.icon className="size-6 group-hover:scale-110" />
        <span className="text-lg font-medium">{item.name}</span>
      </div>
    </Link>
  );
};

const MobileMenu: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsAnimating(true);
    setIsMenuOpen((prev) => !prev);
  }, []);

  const handleAnimationEnd = useCallback(() => {
    setIsAnimating(false);
  }, []);

  useOutsideClick(menuRef, () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  });

  return (
    <>
      <div ref={menuRef}>
        <div className="flex items-center justify-center">
          <HamburgerMenu
            className={cn("block md:hidden", isMenuOpen && "z-30")}
            size={"sm"}
            isOpen={isMenuOpen}
            toggleMenu={toggleMenu}
            aria-label="Toggle menu"
          />
        </div>
        <SidebarWrapper
          isMenuOpen={isMenuOpen}
          isAnimating={isAnimating}
          onAnimationEnd={handleAnimationEnd}
        >
          <div className="flex h-full w-full flex-col items-center justify-start gap-3 py-16">
            {MENU_ITEMS.map((item) => {
              const isActive = pathname === item.url;
              return (
                <NavLink
                  key={item.url}
                  item={item}
                  isActive={isActive}
                  toggleMenu={toggleMenu}
                />
              );
            })}
          </div>
        </SidebarWrapper>
      </div>
      <Overlay
        isMenuOpen={isMenuOpen}
        isAnimating={isAnimating}
        onTransitionEnd={handleAnimationEnd}
      />
    </>
  );
};

export default MobileMenu;
