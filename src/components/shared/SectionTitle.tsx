type SectionTitleProps = {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  badge,
  title,
  subtitle,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {badge && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
          {badge}
        </p>
      )}

      <h2 className="text-3xl font-bold text-slate-900 lg:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-3 max-w-2xl text-slate-500">
          {subtitle}
        </p>
      )}
    </div>
  );
}