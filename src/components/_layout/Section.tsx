import clsx from "clsx";
import { ReactNode } from "react";

interface ISectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: ReactNode;
  size?: "clean" | "xs" | "sm" | "md" | "lg";
}

function Section({ id, className, style, children, size = "md" }: ISectionProps) {
  const sizes = {
    clean: "",
    xs: "py-4 sm:py-8",       // smaller on mobile, larger on sm+
    sm: "py-8 sm:py-16",
    md: "py-14 sm:py-24",
    lg: "py-18 sm:py-32",
    xl: "py-22 sm:py-40",
  };

  return (
    <section id={id} className={clsx(`${className} ${sizes[size]}`)} style={style}>
      {children}
    </section>
  )
}

export default Section;
