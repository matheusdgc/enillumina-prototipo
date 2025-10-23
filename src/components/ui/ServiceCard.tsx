import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-[#f8f5ff] hover:border-[#c3a681] group relative overflow-hidden">
      {}
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-[#c3a681]/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

      <div className="relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-[#c3a681] to-[#b39570] rounded-2xl flex items-center justify-center text-white mb-6 shadow-md group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-serif font-semibold text-[#4a2767] mb-3 group-hover:text-[#c3a681] transition-colors">
          {title}
        </h3>
        <p className="text-[#555555] mb-6 leading-relaxed">{description}</p>
        <div className="space-y-2">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 bg-[#c3a681] rounded-full"></div>
              <span className="text-sm text-[#555555]">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
