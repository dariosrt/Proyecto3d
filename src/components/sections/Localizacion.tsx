import Mapa from "../ui/mapa"

export default function Localizacion() {
  return (
    <section id="coordenadas" className="bg-background px-6 py-20 lg:px-8 border-t border-border/40">
      <div className="mx-auto max-w-7xl">
        
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-primary font-semibold">Marco Geográfico de Referencia</p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
            Ubicación del IES Albarregas
          </h2>
        </div>

        <div className="flex items-center justify-center w-full">
          <div className="w-full max-w-[450px]">
            <Mapa />
          </div>
        </div>

      </div>
    </section>
  )
}