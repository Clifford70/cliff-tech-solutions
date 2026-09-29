"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const TRANSITION_TIME = 1200;

export default function PageTransition() {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);

  const previousPathname = useRef(pathname);
  const startTime = useRef<number | null>(null);

  // Detect clicks on internal links anywhere on the website
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      // Don't interfere with modified clicks
      if (
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");

      if (!link) return;

      const href = link.getAttribute("href");

      // Ignore empty/external/hash links
      if (
        !href ||
        href.startsWith("#") ||
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:")
      ) {
        return;
      }

      // Only handle internal navigation
      if (href.startsWith("/")) {
        const currentPath = window.location.pathname;

        if (href !== currentPath) {
          startTime.current = Date.now();
          setLoading(true);
        }
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  // Keep loader visible for the desired amount of time
  // after the new route has loaded.
  useEffect(() => {
    if (pathname === previousPathname.current) return;

    previousPathname.current = pathname;

    if (!loading || startTime.current === null) return;

    const elapsed = Date.now() - startTime.current;
    const remaining = Math.max(TRANSITION_TIME - elapsed, 0);

    const timer = setTimeout(() => {
      setLoading(false);
      startTime.current = null;
    }, remaining);

    return () => clearTimeout(timer);
  }, [pathname, loading]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center">
        {/* Logo */}
        <div className="relative mb-8 h-auto w-[220px] sm:w-[260px]">
          <Image
            src="/logo/cliff-tech-logo.png"
            alt="Cliff-Tech Solutions Ltd"
            width={440}
            height={132}
            priority
            className="h-auto w-full object-contain"
          />
        </div>

        {/* Loading animation */}
        <div className="relative h-1 w-40 overflow-hidden rounded-full bg-gray-200">
          <div className="absolute left-0 top-0 h-full w-1/2 animate-[loading_1.2s_ease-in-out_infinite] rounded-full bg-black" />
        </div>

        <p className="mt-5 text-sm font-medium tracking-wide text-gray-500">
          Loading...
        </p>
      </div>

      <style jsx>{`
        @keyframes loading {
          0% {
            transform: translateX(-100%);
          }

          50% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(300%);
          }
        }
      `}</style>
    </div>
  );
}