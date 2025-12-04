interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
        <span className="text-primary">#</span> {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`mt-4 h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent ${align === "center" ? "mx-auto max-w-md" : "max-w-xs"}`} />
    </div>
  );
}
