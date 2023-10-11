import "leaflet/dist/leaflet.css";

import clsx from "clsx";

import Header from "./components/Header/Header";
import InfoCard from "./components/Info/InfoCard";
import Maps from "./components/Map/Maps";
import { MapProvider } from "./context/MapContext";
import { useState } from "react";

export default function App() {
  const [errors, setErrors] = useState("");

  return (
    <MapProvider>
      <section
        className={clsx(
          "relative grid min-h-screen grid-cols-[1fr] grid-rows-[28rem_1fr]"
        )}>
        <Header errors={errors} setErrors={setErrors}  />
        <InfoCard />
        <Maps />
      </section>
    </MapProvider>
  );
}
