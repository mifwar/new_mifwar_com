import { Home, UserSearch, Presentation, File, Rss } from "lucide-react";

export type MenuItem = {
  name: string;
  url: string;
  isNewTab: boolean;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
};

export const MENU_ITEMS: MenuItem[] = [
  { name: "Home", url: "/", isNewTab: false, icon: Home },
  { name: "About", url: "/about", isNewTab: false, icon: UserSearch },
  { name: "Projects", url: "/projects", isNewTab: false, icon: Presentation },
  { name: "Resume", url: "/resume", isNewTab: true, icon: File },
  { name: "Blog", url: "/blog", isNewTab: false, icon: Rss },
];
