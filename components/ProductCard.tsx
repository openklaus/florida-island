"use client";

import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  name: string;
  price: string;
  lifestyleImage: string;
  large?: boolean;
}

export default function ProductCard({ name, price, lifestyleImage, large }: ProductCardProps) {
  return (
    <Link href="/shop" className="group block">
      <div className={`product-card relative overflow-hidden bg-[#EDE8DF] ${large ? "aspect-[3/4]" : "aspect-[3/4]"}`}>
        {/* Clean placeholder */}
        <div className="img-clean absolute inset-0 flex flex-col items-center justify-center bg-[#EDE8DF]">
          <div className="w-16 h-16 mb-4 opacity-20">
            <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="16" width="48" height="36" rx="2" stroke="#1A2744" strokeWidth="2"/>
              <path d="M8 28h48" stroke="#1A2744" strokeWidth="2"/>
              <circle cx="32" cy="40" r="4" stroke="#1A2744" strokeWidth="2"/>
            </svg>
          </div>
          <span
            className="font-display text-lg tracking-resort text-[#1A2744]/40"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.25em" }}
          >
            {name}
          </span>
        </div>

        {/* Lifestyle image (shown on hover) */}
        <div className="img-lifestyle">
          <Image
            src={lifestyleImage}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        {/* Stripe accent bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-1 flex">
          <div className="flex-1 bg-[#1A2744]" />
          <div className="flex-1 bg-[#C4735A]" />
          <div className="flex-1 bg-[#E8C547]" />
        </div>
      </div>

      <div className="pt-4">
        <p
          className="font-display text-base tracking-resort text-[#1A2744]"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}
        >
          {name}
        </p>
        <p className="text-sm text-[#1A2744]/60 mt-1 tracking-wider">{price}</p>
      </div>
    </Link>
  );
}
