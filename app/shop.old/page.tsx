"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  { name: "Classic Tee", price: "€ 65", category: "tees", lifestyleImage: "/images/ref-4.png" },
  { name: "Resort Hoodie", price: "€ 135", category: "hoodies", lifestyleImage: "/images/ref-3.png" },
  { name: "Island Cap", price: "€ 75", category: "caps", lifestyleImage: "/images/ref-1.png" },
];

const filters = ["All", "Tees", "Hoodies", "Caps"];

export default function ShopPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active.toLowerCase());

  return (
    <main className="min-h-screen bg-[#F5F0E8] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <h1
            className="font-display text-5xl md:text-7xl text-[#1A2744] mb-2"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}
          >
            The Collection
          </h1>
          <p className="text-xs text-[#1A2744]/40 tracking-[0.4em] uppercase">
            Eternal Resort
          </p>
        </div>

        {/* Filters */}
        <div className="flex gap-8 mb-14 border-b border-[#1A2744]/10 pb-6">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs tracking-[0.3em] uppercase transition-colors pb-1 ${
                active === f
                  ? "text-[#1A2744] border-b border-[#1A2744]"
                  : "text-[#1A2744]/40 hover:text-[#1A2744]/70"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filtered.map((p) => (
            <ProductCard key={p.name} {...p} large />
          ))}
        </div>

        {/* Coming soon note */}
        <div className="mt-24 text-center">
          <p className="text-xs text-[#1A2744]/30 tracking-[0.4em] uppercase">
            More pieces dropping soon
          </p>
        </div>
      </div>
    </main>
  );
}
