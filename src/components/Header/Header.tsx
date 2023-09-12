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
        <Input />
      </Hero>
    </header>
  );
}
