/* eslint-disable no-console */
import type { ReactElement } from "react";
import { createContext, useCallback, useReducer } from "react";

type MapState = {
  city: string;
  ipAddress: string;
  isp: string;
  latitude: number;
  longitude: number;
  region: string;
  timezone: string;
};

const initialMapState: MapState = {
  city: "South San Gabriel",
  ipAddress: "192.212.174.101",
  isp: "Southern California Edison",
  latitude: 34.04915,
  longitude: -118.09462,
  region: "California",
  timezone: "-07:00",
};

const REDUCER_ACTION_TYPE = {
  SET_CITY: "SETCITY",
  SET_IP_ADDRESS: "SETIPADDRESS",
  SET_ISP: "SETISP",
  SET_LATITUDE: "SETLATITUDE",
  SET_LONGITUDE: "SETLONGITUDE",
  SET_REGION: "SETREGION",
  SET_TIMEZONE: "SETTIMEZONE",
};

export type ReducerActionType = typeof REDUCER_ACTION_TYPE;

export type ReducerAction = {
  payload?: string;
  type: string;
};

const reducer = (state: MapState, action: ReducerAction): MapState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.SET_CITY: {
      return { ...state, city: action.payload as string };
    }

    case REDUCER_ACTION_TYPE.SET_IP_ADDRESS: {
      return { ...state, ipAddress: action.payload as string };
    }

    case REDUCER_ACTION_TYPE.SET_ISP: {
      return { ...state, isp: action.payload as string };
    }

    case REDUCER_ACTION_TYPE.SET_LATITUDE: {
      return { ...state, latitude: Number(action.payload) };
    }

    case REDUCER_ACTION_TYPE.SET_LONGITUDE: {
      return { ...state, longitude: Number(action.payload) };
    }

    case REDUCER_ACTION_TYPE.SET_REGION: {
      const ABBREVIATIONS = {
        alabama: "AL",
        alaska: "AK",
        "american samoa": "AS",
        arizona: "AZ",
        arkansas: "AR",
        california: "CA",
        colorado: "CO",
        connecticut: "CT",
        delaware: "DE",
        "district of columbia": "DC",
        florida: "FL",
        georgia: "GA",
        guam: "GU",
        hawaii: "HI",
        idaho: "ID",
        illinois: "IL",
        indiana: "IN",
        iowa: "IA",
        kansas: "KS",
        kentucky: "KY",
        louisiana: "LA",
        maine: "ME",
        maryland: "MD",
        massachusetts: "MA",
        michigan: "MI",
        minnesota: "MN",
        mississippi: "MS",
        missouri: "MO",
        montana: "MT",
        nebraska: "NE",
        nevada: "NV",
        "new hampshire": "NH",
        "new jersey": "NJ",
        "new mexico": "NM",
        "new york": "NY",
        "north carolina": "NC",
        "north dakota": "ND",
        "northern mariana islands": "MP",
        ohio: "OH",
        oklahoma: "PK",
        oregon: "OR",
        pennsylvania: "PA",
        "puerto rico": "PR",
        "rhode island": "RI",
        "south carolina": "SC",
        "south dakota": "SD",
        tennessee: "TN",
        texas: "TX",
        "trust territories": "TT",
        utah: "UT",
        vermont: "VT",
        virginia: "VA",
        // eslint-disable-next-line sort-keys
        "virgin islands": "VI",
        washington: "WA",
        "west virginia": "WV",
        wisconsin: "WI",
        wyoming: "WY",
      };

      // eslint-disable-next-line guard-for-in
      for (const [key, value] of Object.entries(ABBREVIATIONS)) {
        const payload = action.payload as string;
        if (payload.toLowerCase() === key.toLowerCase()) {
          console.log(value);
          return { ...state, region: value };
        }
      }
      return { ...state, region: action.payload as string };
    }

    case REDUCER_ACTION_TYPE.SET_TIMEZONE: {
      return { ...state, timezone: action.payload as string };
    }

    default: {
      throw new Error("Invalid action type");
    }
  }
};

const useMapContext = (initial: MapState) => {
  const [state, dispatch] = useReducer(reducer, initial);

  const setCity = useCallback(
    (city: string) =>
      dispatch({
        payload: city,
        type: REDUCER_ACTION_TYPE.SET_CITY,
      }),
    []
  );

  const setIpAddress = useCallback(
    (ipAddress: string) =>
      dispatch({
        payload: ipAddress,
        type: REDUCER_ACTION_TYPE.SET_IP_ADDRESS,
      }),
    []
  );

  const setIsp = useCallback(
    (isp: string) =>
      dispatch({
        payload: isp,
        type: REDUCER_ACTION_TYPE.SET_ISP,
      }),
    []
  );

  const setLatitude = useCallback(
    (latitude: string) =>
      dispatch({ payload: latitude, type: REDUCER_ACTION_TYPE.SET_LATITUDE }),
    []
  );

  const setLongitude = useCallback(
    (longitude: string) =>
      dispatch({ payload: longitude, type: REDUCER_ACTION_TYPE.SET_LONGITUDE }),
    []
  );

  const setRegion = useCallback(
    (region: string) =>
      dispatch({ payload: region, type: REDUCER_ACTION_TYPE.SET_REGION }),
    []
  );

  const setTimezone = useCallback(
    (timezone: string) =>
      dispatch({ payload: timezone, type: REDUCER_ACTION_TYPE.SET_TIMEZONE }),
    []
  );

  return {
    setCity,
    setIpAddress,
    setIsp,
    setLatitude,
    setLongitude,
    setRegion,
    setTimezone,
    state,
  };
};

export type UseMapContext = ReturnType<typeof useMapContext>;

const MapContext = createContext<UseMapContext>({
  setCity: () => {},
  setIpAddress: () => {},
  setIsp: () => {},
  setLatitude: () => {},
  setLongitude: () => {},
  setRegion: () => {},
  setTimezone: () => {},
  state: initialMapState,
});

export function MapProvider({
  children,
}: {
  readonly children?: ReactElement | ReactElement[] | undefined;
}): ReactElement {
  return (
    <MapContext.Provider value={useMapContext(initialMapState)}>
      {children}
    </MapContext.Provider>
  );
}

export default MapContext;
