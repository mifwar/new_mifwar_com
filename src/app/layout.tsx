import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";

import { ResponsiveProvider } from "@/context/ResponsiveContext";
import { cn } from "@/lib/utils";
import "@/app/globals.css";

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "mifwar.com",
  description: "Miftahul Anwar's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={cn(plusJakarta.className, "px-6")}>
        <ThemeProvider enableSystem={false} attribute="class">
          <ResponsiveProvider>{children}</ResponsiveProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
