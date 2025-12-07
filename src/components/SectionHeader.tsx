import React from "react";

interface ISectionHeaderProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

function SectionHeader({
  kicker,
  title,
  description,
  align = "center",
  children,
  className = "",
  size = "md",
}: ISectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left";

  const sizeClasses: Record<string, string> = {
    xs: "mb-4 lg:mb-8",
    sm: "mb-6 lg:mb-12",
    md: "mb-10 lg:mb-20",
    lg: "mb-14 lg:mb-24",
    xl: "mb-20 lg:mb-32",
  };

  return (
    <header className={`${alignClass} ${sizeClasses[size]} ${className} mx-auto`}>
      {kicker && <span>{kicker}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {children && <div className="mt-6">{children}</div>}
    </header>
  );
}

export default SectionHeader;
