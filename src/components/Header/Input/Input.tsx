import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type InputProps = HTMLAttributes<HTMLInputElement>;
export default function Input() {
  return (
    <input
      className={clsx(
        "container__effect m-auto mt-[2.9rem] block h-[5.8rem] w-[32.7rem] px-[2.4rem] py-[1.8rem] text-[1.8rem] font-normal leading-normal outline-none"
      )}
      type="text"
    />
  );
}
