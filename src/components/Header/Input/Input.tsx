import clsx from "clsx";
import { useContext, type HTMLAttributes } from "react";
import { MapContext } from "../../../context/MapContext";

export type InputProps = HTMLAttributes<HTMLInputElement>;
export default function Input() {
  // const { setLong, setLat } = useContext(MapContext)

  const getIpAddress = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <input
      className={clsx(
        "container__effect col-1 row-1 block rounded-l-[1.5rem] border-none px-[2.4rem] text-[1.8rem] font-normal leading-normal outline-none"
      )}
      placeholder="Search for any IP address or domain"
      type="text"
      onChange={(e) => getIpAddress(e)}
    />
  );
}
