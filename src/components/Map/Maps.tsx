import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type MapProps = HTMLAttributes<HTMLDivElement>;
export default function Maps() {
  return (
    <div className={clsx("col-1 row-2 bg-green-500")}>
      {/* <div id="map" style={{ height: "180px" }}></div> */}
    </div>
  );
}
