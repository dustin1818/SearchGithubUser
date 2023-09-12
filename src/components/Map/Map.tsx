import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type MapProps = HTMLAttributes<HTMLDivElement>;
export default function Map() {
  return <div className={clsx("col-1 row-2 bg-green-500")}></div>;
}
