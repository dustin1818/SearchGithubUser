import clsx from "clsx";
import { useContext, type HTMLAttributes, useState, useEffect } from "react";
import { MapContext } from "../../../context/MapContext";

export type InputProps = HTMLAttributes<HTMLInputElement>;
export default function Input() {
  const { setLong, setLat, ipAddress, setIpAddress } = useContext(MapContext)
  const [errors, setErrors] = useState("");

  const getMapInfo = async () => {
    const api_key = "at_vZC8jbV4HCDqY1KkiHjablyv0HLMu";
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${ipAddress}`)
    const data = await response.json()
    console.log(data.location.lat, 'this is lat value');
    setLat(data.location.lat)
    console.log(data.location.lng, 'this is long value');
    setLong(data.location.lng)
  }

  useEffect(() => {
    if(ipAddress === 0){
      console.log('no value yet');
    }else{
      getMapInfo();
    }
  },[ipAddress])

  const ipAddressValue = (e:any) => {
      const value = e.target.value.trim();
      if(value === '' || 0) {
        setErrors('Please enter a value');
      }else{
        setErrors('');
        setIpAddress(value);
      }
  }

  return (
    <>
      <input
        className={clsx(
          "container__effect col-1 row-1 block rounded-l-[1.5rem] border-none px-[2.4rem] text-[1.8rem] font-normal leading-normal outline-none"
        )}
        placeholder="Search for any IP address or domain"
        type="text"
        onChange={(e) => ipAddressValue(e)}
      />
      {errors ? <p className="mt-5 text-red-400 text-2xl">{errors}</p> : null}
    </>
  );
}
