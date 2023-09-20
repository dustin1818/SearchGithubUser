import clsx from "clsx";
import type { HTMLAttributes } from "react";

import useMapContext from "../../hooks/useMapContext";

export type InfoProps = HTMLAttributes<HTMLElement>;
export default function Info() {
  const { state } = useMapContext();

  return (
    <div
      className={clsx(
        "flex flex-col gap-5 h-auto max-w-[90%]  p-7 md:container__effect md:shadow-[0px_50px_-25px_rgba(0, 0, 0.10)] absolute inset-x-0 top-10 z-10 mx-auto md:flex md:flex-row w-full md:max-w-[1210px] translate-y-[16.7rem] md:items-start md:justify-start md:gap-14 rounded-[1.5rem] bg-white md:p-[37px] text-[#2C2C2C]"
      )}>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase tracking-[1.75px] opacity-[0.5] ">
          IP ADDRESS
        </p>
        <h2 className="text-[26px] font-bold">{state.ipAddress}</h2>
      </div>

      <div className=" h-[1px] w-full  md:h-[75px] md:w-[1px] bg-black opacity-[0.15]"></div>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase tracking-[1.75px] opacity-[0.5] ">
          Location
        </p>
        <h2 className="text-[26px] font-bold">
          {state.city}, {state.region} 10001
        </h2>
      </div>
      <div className=" h-[1px] w-full  md:h-[75px] md:w-[1px] bg-black opacity-[0.15]"></div>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase tracking-[1.75px] opacity-[0.5] ">
          Timezone
        </p>
        <h2 className="text-[26px] font-bold">UTC {state.timezone}</h2>
      </div>

      <div className=" h-[1px] w-full  md:h-[75px] md:w-[1px] bg-black opacity-[0.15]"></div>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase tracking-[1.75px] opacity-[0.5] ">
          ISP
        </p>
        <h2 className="text-[26px] font-bold">{state.isp}</h2>
      </div>
      <div className={state.postalCode ? "flex flex-col gap-3" : "hidden"}>
        <p className="font-bold uppercase tracking-[1.75px] opacity-[0.5] ">
          Postal Code
        </p>
        <h2 className="text-[26px] font-bold">{state.postalCode}</h2>
      </div>
    </div>
  );
}
