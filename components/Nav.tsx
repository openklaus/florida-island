"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <motion.div
        className="absolute inset-0 backdrop-blur-sm"
        animate={{
          backgroundColor: scrolled
            ? "rgba(245, 240, 232, 0.9)"
            : "rgba(245, 240, 232, 0)",
        }}
        transition={{ duration: 0.15 }}
      />
      <div className="relative max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        <Link href="/" className="block">
          <Image
            src="/images/logo.svg"
            alt="Florida Island"
            width={180}
            height={36}
            className={`h-8 w-auto transition-all duration-200 ${
              scrolled
                ? "brightness-0" // dark on light bg
                : "brightness-0 invert" // white on transparent/dark hero
            }`}
            priority
          />
        </Link>

        <div className="flex items-center gap-10">
          <Link
            href="/shop"
            className="text-xs tracking-[0.2em] uppercase text-navy/80 hover:text-navy transition-colors duration-200"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-xs tracking-[0.2em] uppercase text-navy/80 hover:text-navy transition-colors duration-200"
          >
            About
          </Link>
          <button
            className="text-navy/80 hover:text-navy transition-colors duration-200"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
