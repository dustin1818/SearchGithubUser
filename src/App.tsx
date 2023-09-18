import "leaflet/dist/leaflet.css";

import clsx from "clsx";

import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Maps from "./components/Map/Maps";
import { useState } from "react";
import { MapContext } from "./context/MapContext";

export default function App() {
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);

  return (
    <MapContext.Provider value={{ lat, setLat, long, setLong }}>
      <section
        className={clsx(
          "relative grid min-h-screen grid-cols-[1fr] grid-rows-[28rem_1fr]"
        )}>
        <Header />
        <Info />
        <Maps />
      </section>
    </MapContext.Provider>
  );
}
