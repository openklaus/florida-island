"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductCard from "@/components/ProductCard";
import StripeBar from "@/components/StripeBar";

const products = [
  {
    name: "Classic Tee",
    price: "€65",
    lifestyleImage: "/images/ref-4.png",
    accentColor: "#1A2744",
  },
  {
    name: "Resort Hoodie",
    price: "€135",
    lifestyleImage: "/images/ref-3.png",
    accentColor: "#C4735A",
  },
  {
    name: "Island Cap",
    price: "€75",
    lifestyleImage: "/images/ref-1.png",
    accentColor: "#E8C547",
  },
];

const moodImages = ["/images/ref-2.png", "/images/ref-3.png", "/images/ref-4.png"];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/ref-5.png"
          alt="Florida Island"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-navy/30" />

        {/* Stripe bars left */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 hidden md:flex gap-[4px] h-40">
          <span className="w-[1.5px] bg-navy/70" />
          <span className="w-[1.5px] bg-coral/70" />
          <span className="w-[1.5px] bg-yellow/70" />
        </div>

        {/* Stripe bars right */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:flex gap-[4px] h-40">
          <span className="w-[1.5px] bg-yellow/70" />
          <span className="w-[1.5px] bg-coral/70" />
          <span className="w-[1.5px] bg-navy/70" />
        </div>

        {/* Hero text */}
        <motion.div
          className="relative z-10 text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Image
            src="/images/logo.svg"
            alt="Florida Island — Eternal Resort"
            width={600}
            height={120}
            className="h-auto w-[min(580px,85vw)] mx-auto mb-4 brightness-0 invert"
            priority
          />
          <p className="text-champagne/60 text-xs md:text-sm tracking-[0.5em] uppercase mb-12">
            ETERNAL RESORT
          </p>
          <Link
            href="/shop"
            className="inline-block border border-champagne text-champagne text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-champagne hover:text-navy transition-[background-color,color] duration-300"
          >
            SHOP THE COLLECTION
          </Link>
        </motion.div>
      </section>

      {/* ── MOOD GRID ── */}
      <section className="grid grid-cols-1 md:grid-cols-3">
        {moodImages.map((src, i) => (
          <motion.div
            key={i}
            className="relative aspect-[4/5] overflow-hidden"
            whileHover="hover"
            initial="rest"
          >
            <motion.div
              className="absolute inset-0"
              variants={{
                rest: { scale: 1 },
                hover: { scale: 1.03 },
              }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <Image
                src={src}
                alt={`Florida Island mood ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </motion.div>
          </motion.div>
        ))}
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <motion.section
        className="py-28 px-6 bg-champagne"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        <div className="max-w-7xl mx-auto">
          <motion.div className="flex items-center gap-5 mb-16" variants={fadeUp} transition={{ duration: 0.5 }}>
            <StripeBar height="h-8" />
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-navy tracking-[0.25em]">
              THE COLLECTION
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p, i) => (
              <motion.div key={p.name} variants={fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <ProductCard {...p} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── BRAND STATEMENT ── */}
      <motion.section
        className="relative py-36 px-6 bg-navy overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Faint vertical stripes */}
        <div className="absolute inset-0 flex justify-around opacity-[0.04]">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="w-px bg-champagne h-full" />
          ))}
        </div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <p className="font-[family-name:var(--font-display)] text-4xl md:text-6xl text-champagne leading-tight tracking-[0.1em]">
            Not an escape.
            <br />
            Just a reminder.
          </p>
        </motion.div>
      </motion.section>

      {/* ── NEWSLETTER ── */}
      <motion.section
        className="py-24 px-6 bg-champagne"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="max-w-2xl mx-auto text-center"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <p className="text-navy/50 text-xs tracking-[0.3em] uppercase mb-10 leading-relaxed">
            Stay in the sun. We&apos;ll let you know when something new drops.
          </p>
          <form
            className="flex flex-col sm:flex-row max-w-md mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-navy/30 text-navy placeholder-navy/30 px-5 py-3 text-xs tracking-wider outline-none focus:border-navy/60 transition-[border-color] duration-200"
            />
            <button
              type="submit"
              className="bg-coral text-champagne text-xs tracking-[0.3em] uppercase px-8 py-3 hover:opacity-90 active:scale-[0.97] transition-[opacity] duration-150"
            >
              Join
            </button>
          </form>
        </motion.div>
      </motion.section>
    </main>
  );
}
