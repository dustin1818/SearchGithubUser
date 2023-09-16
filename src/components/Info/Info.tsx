import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type InfoProps = HTMLAttributes<HTMLElement>;
export default function Info() {
  return (
    <div
      className={clsx(
        "container__effect shadow-[0px_50px_-25px_rgba(0, 0, 0.10)] absolute inset-x-0 top-10 z-10 mx-auto flex h-[165px] w-full max-w-[1110px] translate-y-[16.7rem] items-start justify-start gap-14 rounded-[1.5rem] bg-white p-[37px] text-[#2C2C2C]"
      )}>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase tracking-[1.75px] opacity-[0.5] ">
          IP ADDRESS
        </p>
        <h2 className="text-[26px] font-bold">192.212.174.101</h2>
      </div>

      <div className=" h-[75px] w-[1px] bg-black opacity-[0.15]"></div>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase tracking-[1.75px] opacity-[0.5] ">
          Location
        </p>
        <h2 className="text-[26px] font-bold">Brooklyn, NY 10001</h2>
      </div>
      <div className=" h-[75px] w-[1px] bg-black opacity-[0.15]"></div>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase tracking-[1.75px] opacity-[0.5] ">
          Timezone
        </p>
        <h2 className="text-[26px] font-bold">UTC -05:00</h2>
      </div>

      <div className=" h-[75px] w-[1px] bg-black opacity-[0.15]"></div>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase tracking-[1.75px] opacity-[0.5] ">
          ISP
        </p>
        <h2 className="text-[26px] font-bold">
          SpaceX <br />
          Starlink
        </h2>
      </div>
    </div>
  );
}
