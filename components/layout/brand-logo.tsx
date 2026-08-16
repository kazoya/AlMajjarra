import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

export function BrandLogo({
  className,
  alt = "شعار المجرة",
  priority = false,
}: {
  className?: string;
  alt?: string;
  priority?: boolean;
}) {
  const src = typeof logo === "string" ? logo : logo.src;
  const width = typeof logo === "string" ? 400 : logo.width;
  const height = typeof logo === "string" ? 400 : logo.height;
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-full w-full object-contain object-center", className)}
      decoding="async"
      fetchPriority={priority ? "high" : "auto"}
    />
  );
}
