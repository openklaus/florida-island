"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import StripeBar from "@/components/StripeBar";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

/* Florida Island — About */
export default function AboutPage() {
  return (
    <main className="min-h-screen bg-champagne">
      {/* ── HERO IMAGE ── */}
      <section className="relative aspect-[21/9] w-full overflow-hidden">
        <Image
          src="/images/ref-mockup.png"
          alt="Florida Island"
          fill
          className="object-cover"
          priority
        />
      </section>

      {/* ── BRAND STORY ── */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-[1fr_auto] max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-36 gap-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.1 }}
      >
        {/* Text */}
        <motion.div className="max-w-lg" variants={fadeUp} transition={{ duration: 0.5 }}>
          <StripeBar height="h-6" className="mb-10" />
          <h1 className="font-[family-name:var(--font-display)] text-4xl text-navy mb-10 tracking-[0.2em]">
            THE ISLAND
          </h1>
          <div className="space-y-6 text-navy/65 text-sm leading-relaxed font-light">
            <p>
              Florida Island is a state of mind. Not a destination — a decision.
            </p>
            <p>
              To slow down. To wear something good. To exist, briefly, somewhere
              the light is still right.
            </p>
            <p>The world outside is loud. We already know.</p>
            <p>Florida Island is not a solution. It is a moment.</p>
          </div>
        </motion.div>

        {/* Vertical text */}
        <motion.div
          className="hidden md:flex items-center"
          variants={fadeUp}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p
            className="font-[family-name:var(--font-display)] text-7xl lg:text-8xl text-navy/10 tracking-[0.4em] whitespace-nowrap"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
            }}
          >
            ETERNAL RESORT
          </p>
        </motion.div>
      </motion.section>

      {/* ── BIG CLAIM ── */}
      <motion.section
        className="bg-navy py-28 px-6 overflow-hidden relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Faint stripes */}
        <div className="absolute inset-0 flex justify-around opacity-[0.04]">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-px bg-champagne h-full" />
          ))}
        </div>
        <motion.div
          className="relative z-10 text-center"
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <p className="font-[family-name:var(--font-display)] text-champagne text-5xl md:text-8xl tracking-[0.4em]">
            ETERNAL RESORT
          </p>
        </motion.div>
      </motion.section>
    </main>
  );
}
