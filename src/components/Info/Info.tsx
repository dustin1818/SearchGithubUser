import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type InfoProps = HTMLAttributes<HTMLElement> & {
  readonly header: string;
  readonly information: string[];
};
export default function Info({ className, header, information }: InfoProps) {
  return (
    <div className={clsx(className)}>
      <p
        className={clsx(
          "mb-[0.7rem] w-full text-center text-[1rem] font-bold uppercase not-italic leading-normal tracking-[0.1458rem] text-[#2C2C2C] opacity-[0.5]"
        )}>
        {header}
      </p>
      <h2
        className={clsx(
          "w-full text-center text-[2rem] font-medium not-italic leading-[2.4rem] tracking-[-0.0179rem] text-[#2C2C2C]",
          "md:h-auto md:break-normal"
        )}>
        {information.map((item, index) => {
          if (index !== information.length - 1) return `${item}, `;
          return `${item}`;
        })}
      </h2>
    </div>
  );
}
