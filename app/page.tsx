import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";

const products = [
  { name: "Classic Tee", price: "€ 65", lifestyleImage: "/images/ref-4.png" },
  { name: "Resort Hoodie", price: "€ 135", lifestyleImage: "/images/ref-3.png" },
  { name: "Island Cap", price: "€ 75", lifestyleImage: "/images/ref-1.png" },
];

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/ref-5.png"
          alt="Florida Island"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#1A2744]/30" />

        {/* Stripe bars left */}
        <div className="absolute left-8 top-1/2 -translate-y-1/2 flex gap-1.5 h-40 hidden md:flex">
          <span className="w-1.5 rounded-full bg-[#E8C547]/80" />
          <span className="w-1.5 rounded-full bg-[#C4735A]/80" />
          <span className="w-1.5 rounded-full bg-[#F5F0E8]/60" />
        </div>

        {/* Stripe bars right */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 flex gap-1.5 h-40 hidden md:flex">
          <span className="w-1.5 rounded-full bg-[#F5F0E8]/60" />
          <span className="w-1.5 rounded-full bg-[#C4735A]/80" />
          <span className="w-1.5 rounded-full bg-[#E8C547]/80" />
        </div>

        {/* Hero text */}
        <div className="relative z-10 text-center px-6">
          <h1
            className="font-display text-[#F5F0E8] text-7xl md:text-[120px] leading-none mb-4"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em" }}
          >
            Florida Island
          </h1>
          <p
            className="text-[#F5F0E8]/70 text-xs md:text-sm tracking-[0.5em] uppercase mb-12"
          >
            Eternal Resort
          </p>
          <Link
            href="/shop"
            className="inline-block border border-[#F5F0E8] text-[#F5F0E8] text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-[#F5F0E8] hover:text-[#1A2744] transition-all duration-300"
          >
            Shop the Collection
          </Link>
        </div>
      </section>

      {/* ── MOOD GRID ── */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-0">
        {["/images/ref-2.png", "/images/ref-3.png", "/images/ref-4.png"].map((src, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={src}
              alt={`Florida Island mood ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-24 px-6 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-6 mb-16">
            <div className="flex gap-1 h-8">
              <span className="w-1 rounded-full bg-[#1A2744]" />
              <span className="w-1 rounded-full bg-[#C4735A]" />
              <span className="w-1 rounded-full bg-[#E8C547]" />
            </div>
            <h2
              className="font-display text-3xl text-[#1A2744]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.25em" }}
            >
              The Collection
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((p) => (
              <ProductCard key={p.name} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BRAND STATEMENT ── */}
      <section className="relative py-32 px-6 bg-[#EDE8DF] overflow-hidden">
        {/* Faint stripe background */}
        <div className="absolute inset-0 flex gap-16 opacity-5">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="w-8 bg-[#1A2744] h-full" />
          ))}
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="font-display text-4xl md:text-6xl text-[#1A2744] leading-tight"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
          >
            Not an escape.
            <br />
            Just a reminder.
          </p>
        </div>
      </section>

      {/* ── NEWSLETTER ── */}
      <section className="py-24 px-6 bg-[#1A2744]">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[#F5F0E8]/60 text-xs tracking-[0.4em] uppercase mb-8">
            Stay in the sun. We will let you know when something new drops.
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-transparent border border-[#F5F0E8]/30 text-[#F5F0E8] placeholder-[#F5F0E8]/30 px-5 py-3 text-xs tracking-wider outline-none focus:border-[#F5F0E8]/60 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#C4735A] text-[#F5F0E8] text-xs tracking-[0.3em] uppercase px-8 py-3 hover:bg-[#C4735A]/80 transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
