export default function Footer() {
  return (
    <footer className="bg-[#1A2744] text-[#F5F0E8] py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span
          className="font-display text-2xl tracking-resort"
          style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.25em" }}
        >
          Florida Island
        </span>
        <div className="text-xs tracking-widest uppercase opacity-60 text-center">
          <p>Print-on-demand. Ships worldwide.</p>
        </div>
        <p className="text-xs opacity-40 tracking-wider">
          © 2025 Florida Island
        </p>
      </div>
    </footer>
  );
}
