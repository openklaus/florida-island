import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* ── SPLIT SECTION ── */}
      <section className="pt-24 grid grid-cols-1 md:grid-cols-2 min-h-screen">
        {/* Image left */}
        <div className="relative min-h-[60vh] md:min-h-screen">
          <Image
            src="/images/ref-3.png"
            alt="Florida Island"
            fill
            className="object-cover"
          />
        </div>

        {/* Text right */}
        <div className="flex flex-col justify-center px-10 md:px-20 py-20">
          {/* Stripe accent */}
          <div className="flex gap-1 mb-10 h-6">
            <span className="w-1 rounded-full bg-[#1A2744]" />
            <span className="w-1 rounded-full bg-[#C4735A]" />
            <span className="w-1 rounded-full bg-[#E8C547]" />
          </div>

          <h1
            className="font-display text-4xl text-[#1A2744] mb-10"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}
          >
            The Island
          </h1>

          <div className="space-y-6 text-[#1A2744]/70 text-sm leading-relaxed max-w-sm">
            <p>
              Florida Island is a state of mind. Not a destination — a decision.
            </p>
            <p>
              To slow down. To wear something good. To exist, briefly, somewhere
              the light is still right.
            </p>
            <p>
              The world outside is loud. We already know.
            </p>
            <p>
              Florida Island is not a solution. It is a moment.
            </p>
          </div>
        </div>
      </section>

      {/* ── BIG CLAIM ── */}
      <section className="bg-[#1A2744] py-24 px-6 overflow-hidden relative">
        {/* Faint stripes */}
        <div className="absolute inset-0 flex gap-20 opacity-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-12 bg-[#F5F0E8] h-full" />
          ))}
        </div>
        <div className="relative z-10 text-center">
          <p
            className="font-display text-[#F5F0E8] text-5xl md:text-8xl"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.4em" }}
          >
            Eternal Resort
          </p>
        </div>
      </section>
    </main>
  );
}
