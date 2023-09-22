import clsx from "clsx";
import { type HTMLAttributes, useMemo } from "react";

import useMapContext from "../../hooks/useMapContext";
import Info from "./Info";

export type InfoCardProps = HTMLAttributes<HTMLElement>;
export default function InfoCard() {
  const { state } = useMapContext();
  const information = useMemo(
    () => [
      ["IP ADDRESS", state.ipAddress],
      [
        "LOCATION",
        state.city,
        state.region,
        state.postalCode === "" ? "" : state.postalCode,
      ],
      ["TIMEZONE", `UTC ${state.timezone}`],
      ["ISP", state.isp],
    ],
    [
      state.city,
      state.ipAddress,
      state.isp,
      state.postalCode,
      state.region,
      state.timezone,
    ]
  );

  return (
    <div
      className={clsx(
        "container__effect shadow-[0px_50px_-25px_rgba(0, 0, 0.10)] absolute inset-x-0 top-10 z-10 mx-auto grid h-[min-content] w-[calc(100%_-_2.4rem)] max-w-[121rem] translate-y-[16.7rem] grid-cols-[1fr] grid-rows-[4.3rem] gap-y-[2.4rem] rounded-[1.5rem] bg-white px-[2.4rem] py-[2.6rem] text-[#2C2C2C]",
        "md:grid-cols-[repeat(4,1fr)] md:grid-rows-[1fr]"
      )}>
      {information.map((item, index) => {
        if (index === 0)
          return (
            <Info
              className={clsx("h-full", "")}
              header={item[0]}
              information={item.slice(1, information.length)}
            />
          );

        return (
          <div
            className={clsx(
              "h-full w-full",
              "md:grid md:grid-cols-[0.1rem_1fr] md:grid-rows-[1fr]"
            )}>
            <div
              className={clsx(
                "md:col-1 md:row-1 md:h-full md:w-[0.1rem] md:bg-black md:opacity-[0.15]"
              )}
            />
            <Info
              className={clsx("h-full w-full", "md:col-2 md:row-1")}
              header={item[0]}
              information={item.slice(1, information.length)}
            />
          </div>
        );
      })}
    </div>
  );
}
