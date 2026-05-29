import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { type LatLngExpression } from "leaflet";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Mapa() {
  const coordenadas: LatLngExpression = [38.92444444, -6.34805556]; 

  return (
    <div className="w-full h-full min-h-[400px] rounded-2xl overflow-hidden border border-border bg-muted/20">
      <MapContainer 
        center={coordenadas} 
        zoom={16} 
        style={{ height: "600px", width: "100%" }}
        className="map_container"
      >
        <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
        />
        <Marker position={coordenadas}>
          <Popup>
            <div className="text-center font-sans text-xs">
              <p className="font-bold">Acueducto de los Milagros</p>
              <p className="text-muted-foreground mt-0.5">Mérida, Extremadura</p>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}