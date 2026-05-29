import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L, { type LatLngExpression, type Map as LeafletMap } from "leaflet";
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
  const mapRef = useRef<LeafletMap | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const [dimensions, setDimensions] = useState({ width: 400, height: 400 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    const updateSize = () => {
      if (containerRef.current) {
        const width = containerRef.current.getBoundingClientRect().width;
        setDimensions({ width, height: width });
        
        setTimeout(() => {
          if (mapRef.current) {
            mapRef.current.invalidateSize({ animate: false });
          }
        }, 50);
      }
    };

    const resizeObserver = new ResizeObserver(() => updateSize());
    resizeObserver.observe(containerRef.current);
    
    // Disparo inicial
    updateSize();

    return () => resizeObserver.disconnect();
  }, [isMounted]);

  if (!isMounted) {
    return (
      <div className="w-full max-w-[420px] mx-auto aspect-square rounded-2xl bg-muted/15 animate-pulse border border-border" />
    );
  }

  return (
    <div ref={containerRef} className="w-full max-w-[420px] mx-auto p-2">
      {/* MÁSCARA DE HARDWARE ULTRARROBUSTA:
        - clip-path: [circle(50%_at_50%_50%)] Recorta geométricamente los clics del ratón, 
          impidiendo que se pueda arrastrar desde fuera de la circunferencia.
      */}
      <div 
        className="relative border border-border bg-slate-950 shadow-2xl overflow-hidden select-none"
        style={{
          width: `${dimensions.width}px`,
          height: `${dimensions.height}px`,
          clipPath: "circle(50% at 50% 50%)",
          WebkitClipPath: "circle(50% at 50% 50%)" // Compatibilidad con Safari/iOS
        }}
      >
        <MapContainer 
          center={coordenadas} 
          zoom={16} 
          style={{ height: "100%", width: "100%" }}
          className="map_container text-slate-900"
          dragging={true}
          scrollWheelZoom={false} // Desactivamos scroll para no entorpecer la lectura de la página
          ref={(map) => {
            if (map) mapRef.current = map;
          }}
        >
          <TileLayer 
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            keepBuffer={15}         // Mantiene un colchón gigante de 15 bloques descargados en memoria oculta
            updateWhenIdle={false}  // renderiza bloques dinámicamente DURANTE el movimiento, sin esperas
            maxZoom={18}
            minZoom={12}
          />
          <Marker position={coordenadas}>
            <Popup>
              <div className="font-sans text-xs p-1 text-center text-slate-900">
                <p className="font-bold">IES Albarregas 📍</p>
                <p className="text-slate-500 mt-0.5">Mérida, Badajoz</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}