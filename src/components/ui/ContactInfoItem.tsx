import { ReactNode } from "react";

interface ContactInfoItemProps {
  icon: ReactNode;
  title: string;
  content: string[];
  iconBgColor?: string;
}

export default function ContactInfoItem({
  icon,
  title,
  content,
  iconBgColor = "bg-gradient-to-br from-[#c3a681] to-[#b39570]",
}: ContactInfoItemProps) {
  return (
    <div className="flex items-start space-x-4 group">
      <div
        className={`flex-shrink-0 w-14 h-14 ${iconBgColor} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300`}
      >
        {icon}
      </div>
      <div>
        <h4 className="font-serif font-semibold text-[#4a2767] mb-2 text-lg group-hover:text-[#c3a681] transition-colors">
          {title}
        </h4>
        {content.map((line, idx) => (
          <p
            key={idx}
            className={
              idx === 0
                ? "text-[#666666] font-medium"
                : "text-sm text-[#666666]"
            }
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
