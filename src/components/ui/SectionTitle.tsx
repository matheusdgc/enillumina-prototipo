interface SectionTitleProps {
  title: string;
  highlight?: string;
  subtitle?: string;
  className?: string;
}

export default function SectionTitle({
  title,
  highlight,
  subtitle,
  className = "",
}: SectionTitleProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      <h2 className="text-4xl md:text-5xl font-serif font-semibold text-[#4a2767] mb-6 tracking-wide">
        {title}{" "}
        {highlight && (
          <span className="text-[#c3a681] italic">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-lg text-[#666666] max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
