import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type InfoProps = HTMLAttributes<HTMLElement>;
export default function Info() {
  return (
    <div
      className={clsx(
        "container__effect absolute inset-x-0 mx-auto h-[29.4rem] w-[32.7rem] translate-y-[16.7rem] rounded-[1.5rem] bg-blue-500"
      )}></div>
  );
}
