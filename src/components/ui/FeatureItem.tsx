import { ReactNode } from "react";
import IconCircle from "./IconCircle";

interface FeatureItemProps {
  icon: ReactNode;
  title: string;
  description: string;
  iconSize?: "sm" | "md" | "lg";
}

export default function FeatureItem({
  icon,
  title,
  description,
  iconSize = "sm",
}: FeatureItemProps) {
  return (
    <div className="flex items-start space-x-4 group">
      <div className="flex-shrink-0">
        <IconCircle size={iconSize}>{icon}</IconCircle>
      </div>
      <div>
        <h4 className="font-serif font-semibold text-[#4a2767] mb-2 text-lg group-hover:text-[#c3a681] transition-colors">
          {title}
        </h4>
        <p className="text-[#666666] leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
