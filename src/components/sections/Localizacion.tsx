import Mapa from "../ui/mapa"

export default function Localizacion() {
  return (
    <section id="coordenadas" className="bg-background px-6 py-20 lg:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Marco Geográfico de Referencia</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
            Ubicación del Acueducto de los Milagros
          </h2>
          <p className="mt-4 text-base leading-7 text-muted-foreground">
            Localización cartográfica real utilizada como referencia objetiva para el desarrollo del entorno tridimensional integrado en la cabecera.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          
          {/* Bloque Izquierdo: Cartografía interactiva OpenStreetMap */}
          <div className="flex flex-col space-y-3">
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
              Sistema de Coordenadas GPS: 38°55′28″N 6°20′53″O (38.92444444, -6.34805556)
            </span>
            <div className="flex-1 min-h-[400px]">
              <Mapa />
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}