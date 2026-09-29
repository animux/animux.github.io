"use client";

import { ThemeProvider } from "next-themes";
import { SmoothScroll } from "@/components/SmoothScroll";

export function Providers({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SmoothScroll>{children}</SmoothScroll>
    </ThemeProvider>
  );
}
