interface StripeBarProps {
  orientation?: "horizontal" | "vertical";
  height?: string;
  className?: string;
}

export default function StripeBar({
  orientation = "vertical",
  height = "h-8",
  className = "",
}: StripeBarProps) {
  if (orientation === "horizontal") {
    return (
      <div className={`flex w-full h-[3px] ${className}`}>
        <div className="flex-1 bg-navy" />
        <div className="flex-1 bg-coral" />
        <div className="flex-1 bg-yellow" />
      </div>
    );
  }

  return (
    <div className={`flex gap-[3px] ${height} ${className}`}>
      <span className="w-[2px] bg-navy" />
      <span className="w-[2px] bg-coral" />
      <span className="w-[2px] bg-yellow" />
    </div>
  );
}
