import { ReactNode } from 'react';

export type ContainerSize = "none" | 'fluid' | 'tiny' | "small" | "normal" | "wide" | "wider"

interface IContainerProps {
  id?: string;
  style?: object;
  size?: ContainerSize;
  className?: string;
  children: ReactNode;
}

function Container({ id, style, size = "normal", className, children }: IContainerProps) {
  const options: Record<ContainerSize, string> = {
    tiny: 'max-w-[890px]',
    small: 'max-w-[1000px]',
    normal: 'max-w-[1200px]',
    wide: 'max-w-[1400px]',
    wider: "max-w-[1600px]",
    fluid: 'max-w-none',
    none: "",
  };

  return (
    <div
      id={id}
      style={style}
      className={`container mx-auto px-4 md:px-8 lg:px-12 ${size ? `${options[size]}` : `${options["fluid"]}`} ${className}`}
    >
      {children}
    </div>
  );
}

export default Container;
