"use client";

import React, { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import useOutsideClick from "@/hooks/useOutsideClick";

import HamburgerMenu from "@/components/icon/hamburgerMenu";
import Link from "next/link";
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
        "text-neutral-950 dark:text-white bg-neutral-100 dark:bg-neutral-800",
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
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  useOutsideClick(menuRef, () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
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
        <aside
          id="sidebar-menu"
          className={cn(
            "fixed left-0 top-0 flex h-full w-full max-w-xs flex-col items-center justify-center bg-white transition duration-500 ease-out-expo md:hidden dark:bg-neutral-900",
            isMenuOpen
              ? "z-20 translate-x-0 opacity-100"
              : "-z-10 -translate-x-full opacity-0",
          )}
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
        </aside>
      </div>
      <div
        className={cn(
          "fixed left-0 top-0 block h-full w-full bg-white/80 transition duration-100 md:hidden dark:bg-neutral-900/80",
          isMenuOpen ? "z-10 opacity-100" : "-z-10 opacity-0",
        )}
      />
    </>
  );
};

export default MobileMenu;
