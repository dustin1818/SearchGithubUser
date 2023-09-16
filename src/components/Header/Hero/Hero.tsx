import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type HeroProps = HTMLAttributes<HTMLDivElement>;
export default function Hero({ children }: HeroProps) {
  return (
    <div
      className={clsx(
        "grid h-full grid-cols-[1fr] grid-rows-[min-content_5.8rem] justify-center"
      )}>
      {children}
    </div>
  );
}
