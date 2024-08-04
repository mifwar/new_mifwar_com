"use client";

import React, { useState } from "react";
import { useResponsive } from "@/context/ResponsiveContext";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type MenuItem = {
  name: string;
  url: string;
  isNewTab: boolean;
};

const MENU_ITEMS: MenuItem[] = [
  { name: "Home", url: "/", isNewTab: false },
  { name: "About", url: "/about", isNewTab: false },
  { name: "Projects", url: "/projects", isNewTab: false },
  { name: "Resume", url: "/resume", isNewTab: true },
  { name: "Blog", url: "/blog", isNewTab: false },
];

const NavbarMenu: React.FC = () => {
  const { isMobile } = useResponsive();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuEffect, setMenuEffect] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMenuEffect(true);
  };

  const MenuButton = () => (
    <button
      className={cn(
        "transition-transform",
        menuEffect &&
          (isMenuOpen ? "animate-wiggle-right" : "animate-wiggle-left"),
      )}
      onClick={toggleMenu}
      onAnimationEnd={() => setMenuEffect(false)}
    >
      {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
    </button>
  );

  const MenuItems = () => (
    <>
      {MENU_ITEMS.map((item) => (
        <Link
          key={item.url}
          href={item.url}
          className={cn(
            "rounded-lg px-4 py-2 font-semibold",
            "text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-white",
            pathname === item.url && "text-neutral-950 dark:text-white",
          )}
          rel="noopener noreferrer"
          target={item.isNewTab ? "_blank" : undefined}
        >
          {item.name}
        </Link>
      ))}
    </>
  );

  return (
    <nav
      className={cn(
        "md:mx-auto md:flex md:gap-4 md:pl-0",
        "absolute left-0 mx-auto items-center justify-center pl-6 align-middle md:static",
      )}
    >
      {isMobile ? (
        <>
          <MenuButton />
          {isMenuOpen && (
            <div className="absolute left-0 top-full w-full bg-white py-2 dark:bg-gray-800">
              <MenuItems />
            </div>
          )}
        </>
      ) : (
        <MenuItems />
      )}
    </nav>
  );
};

export default NavbarMenu;
