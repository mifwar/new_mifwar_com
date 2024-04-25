"use client";

import { useResponsive } from "@/context/ResponsiveContext";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Menu as MenuIcon, X as CloseIcon, Sun, Moon } from "lucide-react";

export interface Menu {
  name: string;
  url: string;
  isNewTab: boolean;
}

const menu: Menu[] = [
  {
    name: "About",
    url: "/about",
    isNewTab: false,
  },
  {
    name: "Projects",
    url: "/projects",
    isNewTab: false,
  },
  {
    name: "Resume",
    url: "/resume",
    isNewTab: true,
  },
  {
    name: "Blog",
    url: "/blog",
    isNewTab: false,
  },
];

const Navbar = () => {
  const { isMobile } = useResponsive();
  const [mounted, setMounted] = useState<boolean>(false);
  const [darkModeEffect, setDarkModeEffect] = useState<boolean>(false);
  const [menuEffect, setMenuEffect] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleToggleThemeClick = () => {
    toggleTheme();
    setDarkModeEffect(true);
  };

  const handleMenuClick = () => {
    setOpenMenu(!openMenu);
    setMenuEffect(true);
  };

  return (
    <nav className="flex h-12 items-center justify-center align-middle">
      <div className="align-midle flex h-full w-full flex-row-reverse items-center justify-center">
        <Link
          href="/"
          className="left-0 select-none py-2 pl-0 text-center text-xl font-extrabold md:absolute md:pl-6"
        >
          mifwar.com
        </Link>
        <div
          className={cn(
            "md:mx-auto md:flex md:gap-4 md:pl-0",
            "absolute left-0 mx-auto items-center justify-center pl-6 align-middle md:static",
          )}
        >
          {isMobile ? (
            <button
              className={cn(
                menuEffect &&
                  (openMenu ? "animate-wiggle-right" : "animate-wiggle-left"),
              )}
              onClick={handleMenuClick}
              onAnimationEnd={() => setMenuEffect(false)}
            >
              {openMenu ? <CloseIcon /> : <MenuIcon />}
            </button>
          ) : (
            menu.map((item) => {
              return (
                <Link
                  className={cn(
                    "text-gray-600 hover:text-gray-950 dark:text-gray-300 hover:dark:text-gray-50",
                    "rounded-lg px-4 py-2 font-semibold",
                    pathname === item.url && "text-gray-950 dark:text-gray-50",
                  )}
                  href={item.url}
                  key={item.url}
                  rel="noopener noreferrer"
                  target={item.isNewTab ? "_blank" : undefined}
                >
                  <span>{item.name}</span>
                </Link>
              );
            })
          )}
        </div>
      </div>
      <button
        className={cn(
          "text-gray-600 hover:text-gray-950 dark:text-gray-300 hover:dark:text-gray-50",
          "absolute right-0 mr-6 cursor-pointer rounded-lg p-2",
          darkModeEffect &&
            (theme === "dark" ? "animate-wiggle-right" : "animate-wiggle-left"),
        )}
        onClick={handleToggleThemeClick}
        onAnimationEnd={() => setDarkModeEffect(false)}
      >
        {mounted ? (
          theme === "dark" ? (
            <Sun />
          ) : (
            <Moon />
          )
        ) : (
          <span className="block size-5 animate-pulse rounded-full bg-gray-300 dark:bg-gray-600" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
