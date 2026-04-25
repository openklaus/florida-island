export default function Footer() {
  return (
    <footer className="bg-navy text-champagne py-10 px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <span className="font-[family-name:var(--font-display)] text-lg tracking-[0.25em]">
          FLORIDA ISLAND
        </span>
        <p className="text-xs tracking-[0.3em] uppercase opacity-50">
          Eternal Resort
        </p>
        <p className="text-xs opacity-30 tracking-wider">
          &copy; 2026 Florida Island
        </p>
      </div>
    </footer>
  );
}
