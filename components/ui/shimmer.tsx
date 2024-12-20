import { cn } from "@/lib/utils";

interface ShimmerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Shimmer({ className, ...props }: ShimmerProps) {
  return (
    <div
      className={cn(
        "animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent",
        "absolute inset-0 -translate-x-full",
        className
      )}
      {...props}
    />
  );
} 