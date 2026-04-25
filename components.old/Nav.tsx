"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#F5F0E8]/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <span
            className="font-display tracking-resort text-[#1A2744] text-xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.25em" }}
          >
            Florida Island
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-10">
          <Link
            href="/shop"
            className="text-xs tracking-widest uppercase text-[#1A2744] hover:text-[#C4735A] transition-colors"
          >
            Shop
          </Link>
          <Link
            href="/about"
            className="text-xs tracking-widest uppercase text-[#1A2744] hover:text-[#C4735A] transition-colors"
          >
            About
          </Link>
          {/* Cart icon */}
          <button
            className="text-[#1A2744] hover:text-[#C4735A] transition-colors"
            aria-label="Cart"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
