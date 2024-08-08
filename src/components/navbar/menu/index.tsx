import React from "react";

import DesktopMenu from "@/components/navbar/menu/desktop";
import MobileMenu from "@/components/navbar/menu/mobile";

import { cn } from "@/lib/utils";

const NavbarMenu: React.FC = () => {
  return (
    <nav
      className={cn(
        "md:mx-auto md:flex md:gap-4 md:pl-0",
        "absolute left-0 mx-auto items-center justify-center pl-6 align-middle md:static",
      )}
    >
      <MobileMenu />
      <DesktopMenu />
    </nav>
  );
};

export default NavbarMenu;
