import { useContext } from "react";

import type { UseMapContext } from "../context/MapContext";
import MapContext from "../context/MapContext";

const useMapContext = (): UseMapContext => {
  return useContext(MapContext);
};

export default useMapContext;
