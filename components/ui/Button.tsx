import { ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  variant = "primary",
  className,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "rounded-full px-6 py-3 transition-all duration-300 font-semibold",
        variant === "primary" &&
          "bg-sky-500 text-white hover:scale-105 hover:bg-sky-600",
        variant === "secondary" &&
          "bg-red-600 text-white hover:bg-red-700",
        variant === "outline" &&
          "border border-slate-300 hover:bg-slate-100",
        className
      )}
      {...props}
    />
  );
}