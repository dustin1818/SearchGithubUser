import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type HeroProps = HTMLAttributes<HTMLDivElement>;
export default function Hero({ children }: HeroProps) {
  return <div className={clsx("grid place-items-center")}>{children}</div>;
}
