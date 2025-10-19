import { ReactNode } from "react";

interface IconCircleProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "gradient";
  className?: string;
}

export default function IconCircle({
  children,
  size = "md",
  variant = "primary",
  className = "",
}: IconCircleProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16 md:w-20 md:h-20",
  };

  const variantClasses = {
    primary: "bg-gradient-to-br from-[#c3a681] to-[#b39570]",
    gradient: "bg-gradient-to-br from-[#4a2767] to-[#6b3d8f]",
  };

  return (
    <div
      className={`${sizeClasses[size]} ${variantClasses[variant]} rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
}
