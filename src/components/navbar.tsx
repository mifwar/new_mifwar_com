import Link from "next/link";
import dynamic from "next/dynamic";

import NavbarMenu from "@/components/navbarMenu";
const ThemeToggler = dynamic(() => import("@/components/themeToggler"), {
  ssr: false,
});

const Navbar = () => (
  <nav className="flex h-12 items-center justify-center align-middle">
    <div className="align-midle flex h-full w-full flex-row-reverse items-center justify-center">
      <Link
        href="/"
        className="left-0 select-none py-2 pl-0 text-center text-xl font-extrabold md:absolute md:pl-6"
      >
        mifwar.com
      </Link>
      <NavbarMenu />
    </div>
    <ThemeToggler />
  </nav>
);

export default Navbar;
