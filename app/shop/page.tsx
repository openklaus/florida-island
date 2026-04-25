"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Classic Tee",
    price: "€65",
    category: "tees",
    lifestyleImage: "/images/ref-4.png",
    accentColor: "#1A2744",
  },
  {
    name: "Resort Hoodie",
    price: "€135",
    category: "hoodies",
    lifestyleImage: "/images/ref-3.png",
    accentColor: "#C4735A",
  },
  {
    name: "Island Cap",
    price: "€75",
    category: "caps",
    lifestyleImage: "/images/ref-1.png",
    accentColor: "#E8C547",
  },
];

const filters = ["All", "Tees", "Hoodies", "Caps"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function ShopPage() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? products
      : products.filter((p) => p.category === active.toLowerCase());

  return (
    <main className="min-h-screen bg-champagne pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl text-navy mb-2 tracking-[0.2em]">
            THE COLLECTION
          </h1>
          <p className="text-xs text-navy/40 tracking-[0.4em] uppercase">
            Eternal Resort
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          className="flex gap-8 mb-14 border-b border-navy/10 pb-6"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-xs tracking-[0.3em] uppercase pb-1 transition-colors duration-200 ${
                active === f
                  ? "text-navy border-b border-navy"
                  : "text-navy/40 hover:text-navy/70"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filtered.map((p, i) => (
            <motion.div
              key={p.name}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
            >
              <ProductCard {...p} />
            </motion.div>
          ))}
        </div>

        {/* Coming soon */}
        <motion.div
          className="mt-24 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs text-navy/30 tracking-[0.4em] uppercase">
            More pieces dropping soon
          </p>
        </motion.div>
      </div>
    </main>
  );
}
