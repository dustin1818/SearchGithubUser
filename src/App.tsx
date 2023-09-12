import clsx from "clsx";

import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Map from "./components/Map/Map";

export default function App() {
  return (
    <section
      className={clsx(
        "relative grid min-h-screen grid-cols-[1fr] grid-rows-[30rem_1fr]"
      )}>
      <Header />
      <Info />
      <Map />
    </section>
  );
}
