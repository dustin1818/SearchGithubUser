import clsx from "clsx";
import type { HTMLAttributes } from "react";

import Hero from "./Hero/Hero";
import Input from "./Input/Input";
import Title from "./Title/Title";

export type HeaderProps = HTMLAttributes<HTMLElement>;
export default function Header() {
  return (
    <header className={clsx("col-1 row-1 h-full bg-red-500")}>
      <Hero>
        <Title title="IP Address Tracker" />
        <div
          className={clsx(
            "mt-[2.9rem] grid grid-cols-[26.9rem_5.8rem] grid-rows-[5.8rem] bg-orange-600"
          )}>
          <Input />
          {/* Make into typescript component */}
          <div
            className={clsx(
              "col-2 row-1 flex items-center justify-center rounded-r-[1.5rem] bg-black"
            )}>
            <svg
              className={clsx("")}
              height="14"
              width="11"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 1l6 6-6 6"
                fill="none"
                stroke="#FFF"
                strokeWidth="3"
              />
            </svg>
          </div>
        </div>
      </Hero>
    </header>
  );
}
