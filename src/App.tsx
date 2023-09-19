import "leaflet/dist/leaflet.css";

import clsx from "clsx";

import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Maps from "./components/Map/Maps";
import { MapProvider } from "./context/MapContext";

export default function App() {
  return (
    <MapProvider>
      <section
        className={clsx(
          "relative grid min-h-screen grid-cols-[1fr] grid-rows-[28rem_1fr]"
        )}>
        <Header />
        <Info />
        <Maps />
      </section>
    </MapProvider>
  );
}
