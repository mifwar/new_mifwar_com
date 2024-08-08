"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

const DesktopMenu: React.FC = () => {
  const pathname = usePathname();

  return (
    <div className="hidden md:block">
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
    </div>
  );
};

export default DesktopMenu;
