"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Experience", href: "/experience" },
  { name: "Contact", href: "/contact" },
  { name: "Training", href: "/training" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-md">
      <div className="container-custom flex h-20 items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center"
          onClick={() => setMenuOpen(false)}
          aria-label="Cliff-Tech Solutions Ltd"
        >
          <Image
  src="/logo/cliff-tech-logo.png"
  alt="Cliff-Tech Solutions Ltd"
  width={440}
  height={132}
  priority
  className="h-35 w-auto object-contain"
/>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-gray-600 transition hover:text-black"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 md:block"
        >
          Let's Work Together
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-200 md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <div className="space-y-1.5">
            <span className="block h-0.5 w-5 bg-black"></span>
            <span className="block h-0.5 w-5 bg-black"></span>
            <span className="block h-0.5 w-5 bg-black"></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-base font-medium text-gray-700 transition hover:text-black"
              >
                {item.name}
              </Link>
            ))}

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="rounded-full bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
            >
              Let's Work Together
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}