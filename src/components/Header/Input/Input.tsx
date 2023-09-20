import clsx from "clsx";
import type { ChangeEvent, HTMLAttributes } from "react";
import { useEffect, useState } from "react";

import useMapContext from "../../../hooks/useMapContext";
import type { ResponseGeoipify } from "../../../types/responses";

export const ApiCall = async () => {};

export type InputProps = HTMLAttributes<HTMLInputElement>;
export default function Input() {
  const {
    setCity,
    setIpAddress,
    setIsp,
    setLatitude,
    setLongitude,
    setRegion,
    setTimezone,
    setPostalCode,
    state,
  } = useMapContext();

  const [errors, setErrors] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const api_key = import.meta.env.VITE_GEOIPIFY_API_KEY;
    fetch(
      `https://geo.ipify.org/api/v2/country,city?apiKey=${api_key}&ipAddress=${state.ipAddress}`
    )
      .then(async (response) => {
        const { isp, location } = (await response.json()) as ResponseGeoipify;

        return {
          city: location.city,
          isp,
          latitude: location.lat,
          longitude: location.lng,
          region: location.region,
          timezone: location.timezone,
          postalCode: location.postalCode,
        };
      })
      .then((data) => {
        setCity(data.city);
        setIsp(data.isp);
        setLatitude(data.latitude);
        setLongitude(data.longitude);
        setRegion(data.region);
        setTimezone(data.timezone);
        setPostalCode(data.postalCode);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.ipAddress]);

  const ipAddressValue = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value === "" || 0) {
      setErrors("Please enter a value");
    } else {
      setErrors("");
      setInputValue(value.trim());
    }
  };

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputValue === "" || 0) {
      setErrors("Please enter a value");
    } else {
      setErrors("");
      setIpAddress(inputValue.trim());
    }
  };

  return (
    <form className="h-full flex" onSubmit={onSubmit}>
      <input
        className={clsx(
          "container__effect col-1 row-1 block rounded-l-[1.5rem] border-none px-[2.4rem] text-[1.8rem] font-normal leading-normal outline-none w-full"
        )}
        placeholder="Search for any IP address or domain"
        type="text"
        onChange={(event) => ipAddressValue(event)}
      />
      {errors ? <p className="mt-5 text-2xl text-red-400">{errors}</p> : null}
    </form>
  );
}
