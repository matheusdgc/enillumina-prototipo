"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-[#f8f5ff] via-white to-[#faf8ff] transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      {}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `repeating-linear-gradient(100deg, #4a2767 10%, #c3a681 15%, #f8f5ff 60%, #d4b896 25%, #4a2767 30%)`,
            backgroundSize: "300% 100%",
            animation: "aurora 60s linear infinite",
            filter: "blur(60px)",
          }}
        ></div>
      </div>

      {}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-50"
          style={{
            background: `repeating-linear-gradient(100deg, #c3a681 20%, #4a2767 30%, #f8f5ff 90%, #d4b896 80%, #c3a681 100%)`,
            backgroundSize: "200% 100%",
            animation: "aurora 45s linear infinite reverse",
            filter: "blur(40px)",
          }}
        ></div>
      </div>

      {}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-transparent pointer-events-none"></div>

      {children}
    </div>
  );
};
