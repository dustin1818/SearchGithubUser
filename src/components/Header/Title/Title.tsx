import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type TitleProps = HTMLAttributes<HTMLHeadingElement> & {
  readonly title: string;
};
export default function Title({ title }: TitleProps) {
  return (
    <h1
      className={clsx(
        "col-1 row-1 mx-auto mt-[2.6rem] text-[2.6rem] font-medium leading-[30px] tracking-[-0.232px] text-white"
      )}>
      {title}
    </h1>
  );
}
