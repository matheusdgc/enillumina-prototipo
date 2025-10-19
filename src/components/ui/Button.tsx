interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  size = "lg",
  className = "",
}: ButtonProps) {
  const baseClasses =
    "rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-2xl active:scale-95 tracking-wide touch-manipulation inline-block text-center";

  const variantClasses = {
    primary: "bg-[#c3a681] text-white hover:bg-[#b39570] active:bg-[#a38460]",
    secondary:
      "bg-transparent text-[#4a2767] border-2 border-[#c3a681] hover:bg-[#c3a681] hover:text-white active:bg-[#b39570]",
  };

  const sizeClasses = {
    md: "px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base",
    lg: "px-7 sm:px-10 py-3 sm:py-4 text-base sm:text-lg",
  };

  return (
    <a
      href={href}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </a>
  );
}
