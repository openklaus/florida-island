"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  price: string;
  lifestyleImage: string;
  accentColor?: string;
  large?: boolean;
  category?: string;
}

const easeOut: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function ProductCard({
  name,
  price,
  lifestyleImage,
  accentColor = "#1A2744",
}: ProductCardProps) {
  return (
    <Link href="/shop" className="group block">
      <motion.div
        className="relative overflow-hidden aspect-[3/4] bg-[#EDE8DF]"
        initial="rest"
        whileHover="hover"
        animate="rest"
      >
        {/* Layer 1: Clean placeholder with product name */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-[#EDE8DF]"
          variants={{
            rest: { opacity: 1 },
            hover: { opacity: 0 },
          }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <span className="font-[family-name:var(--font-display)] text-[clamp(1.5rem,4vw,2.5rem)] tracking-[0.25em] text-navy/20 select-none">
            {name.toUpperCase()}
          </span>
        </motion.div>

        {/* Layer 2: Lifestyle image */}
        <motion.div
          className="absolute inset-0"
          variants={{
            rest: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.4, ease: easeOut }}
        >
          <Image
            src={lifestyleImage}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </motion.div>

        {/* Bottom stripe accent */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[3px]"
          style={{ backgroundColor: accentColor }}
        />
      </motion.div>

      <div className="pt-4">
        <p className="font-[family-name:var(--font-display)] text-base tracking-[0.2em] text-navy">
          {name.toUpperCase()}
        </p>
        <p className="text-sm text-navy/50 mt-1 tracking-wider">{price}</p>
      </div>
    </Link>
  );
}
