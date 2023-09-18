import clsx from "clsx";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import type { HTMLAttributes } from "react";
import { useContext, useEffect } from "react";
import { MapContext } from "../../context/MapContext";


const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export type MapProps = HTMLAttributes<HTMLDivElement>;
export default function Maps() {
  const { long, lat, ipAddress, setIpAddress } = useContext(MapContext)
  useEffect(() => {
    const map = L.map("map").setView([lat, long], 13);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        accessToken:
          "pk.eyJ1IjoidGFyLWhlbCIsImEiOiJjbDJnYWRieGMwMTlrM2luenIzMzZwbGJ2In0.RQRMAJqClc4qoNwROT8Umg",
        attribution:
          // eslint-disable-next-line quotes
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        maxZoom: 18,
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(map);
    L.Marker.prototype.options.icon = DefaultIcon;
    const marker = L.marker([lat, long]).addTo(map);
    marker.bindPopup("<b>IP Address:</b><br>You are here!.").openPopup();

    return () => {
      map.off();
      map.remove();
    };
  }, [ipAddress, long, lat]);

  return (
    <div className={clsx("z-0 col-1 row-2")}>
      <div id="map" style={{ height: "100vh" }}></div>
    </div>
  );
}
