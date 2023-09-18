import clsx from "clsx";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";
import type { HTMLAttributes } from "react";
import { useEffect } from "react";

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

export type MapProps = HTMLAttributes<HTMLDivElement>;
export default function Maps() {
  useEffect(() => {
    const map = L.map("map").setView([14.5832, 121.0409], 13);
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
    const marker = L.marker([14.5832, 121.0409]).addTo(map);
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

    return () => {
      map.off();
      map.remove();
    };
  }, []);

  return (
    <div className={clsx("z-0 col-1 row-2")}>
      <div id="map" style={{ height: "100vh" }}></div>
    </div>
  );
}
