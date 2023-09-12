import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type InputProps = HTMLAttributes<HTMLInputElement>;
export default function Input() {
  return (
    <input
      className={clsx(
        "container__effect col-1 row-1 block rounded-l-[1.5rem] border-none px-[2.4rem] text-[1.8rem] font-normal leading-normal outline-none"
      )}
      placeholder="Search for any IP address or domain"
      type="text"
    />
  );
}
