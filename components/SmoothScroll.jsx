"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { ReactLenis, useLenis } from "lenis/react";
import "lenis/dist/lenis.css";

const lenisOptions = {
  autoRaf: true,
  anchors: true,
  allowNestedScroll: true,
  stopInertiaOnNavigate: true,
  smoothWheel: true,
};

function ResetScrollOnNavigate() {
  const pathname = usePathname();
  const lenis = useLenis();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (!lenis) return;
    if (previousPathname.current === pathname) return;
    previousPathname.current = pathname;

    const hash = window.location.hash;
    if (hash) {
      lenis.scrollTo(hash);
      return;
    }

    lenis.scrollTo(0, { immediate: true });
  }, [pathname, lenis]);

  return null;
}

export function SmoothScroll({ children }) {
  return (
    <ReactLenis root options={lenisOptions}>
      <ResetScrollOnNavigate />
      {children}
    </ReactLenis>
  );
}
