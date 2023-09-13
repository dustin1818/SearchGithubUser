import clsx from "clsx";
import type { HTMLAttributes } from "react";

export type InfoProps = HTMLAttributes<HTMLElement>;
export default function Info() {
  return (
    <div
      className={clsx(
        "container__effect flex justify-start items-start p-[37px]  absolute top-10 inset-x-0 mx-auto h-[165px] w-full max-w-[1110px] translate-y-[16.7rem] rounded-[1.5rem] bg-white  text-[#2C2C2C] gap-14 shadow-[px 50px 50px -25px rgba(0, 0, 0, 0.10)] "
      )}>
      
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase opacity-[0.5] tracking-[1.75px]">IP ADDRESS</p>
        <h2 className="font-bold text-[26px]">192.212.174.101</h2>
      </div>

      <div className=" w-[1px] h-[75px] bg-black opacity-[0.15]">
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase opacity-[0.5] tracking-[1.75px]">Location</p>
        <h2 className="font-bold text-[26px]">Brooklyn, NY
10001</h2>
      </div>

      <div className=" w-[1px] h-[75px] bg-black opacity-[0.15]">
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase opacity-[0.5] tracking-[1.75px]">Timezone</p>
        <h2 className="font-bold text-[26px]">UTC -05:00</h2>
      </div>

      <div className=" w-[1px] h-[75px] bg-black opacity-[0.15]">
      </div>
      <div className="flex flex-col gap-3">
        <p className="font-bold uppercase opacity-[0.5] tracking-[1.75px]">ISP</p>
        <h2 className="font-bold text-[26px]">SpaceX <br />Starlink</h2>
      </div>


      </div>
  );
}
