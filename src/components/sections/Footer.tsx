import FluidTitle from "../ui/FluidTitle";

export default function Footer() {
  return (
    <footer className="border-t border-border/80 bg-background/95 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <FluidTitle
            text="IES Albarregas" 
            className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground"
          />
          <FluidTitle
            text="Plataforma informativa del catálogo de títulos del centro educativo. Diseñado respetando las guías de estilo institucionales y la integración de módulos WebGL de rendimiento optimizado." 
            className="max-w-xl text-xs leading-6 text-muted-foreground"
          />
        </div>
      <FluidTitle
        text="Coordenadas de Referencia: Mérida, España" 
        className="flex gap-6 text-xs font-mono text-muted-foreground"
      />
      </div>
      <FluidTitle
        text="© 2026 Instituto de Educación Secundaria Albarregas. Documentación Informativa Oficial." 
        className="mt-8 border-t border-border/60 pt-6 text-center text-xs text-muted-foreground/60"
      />
    </footer>
  )
}