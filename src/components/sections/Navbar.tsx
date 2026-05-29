import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
          <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center font-mono text-xs">IES</div>
          IES Albarregas
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-muted-foreground md:flex">
          <a href="#presentacion" className="transition hover:text-foreground">Presentación</a>
          <a href="#oferta-academica" className="transition hover:text-foreground">Oferta Académica</a>
          <a href="#coordenadas" className="transition hover:text-foreground">Entorno Geográfico</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button size="sm" variant="outline">
            <a href="https://secretaria.educarex.es" target="_blank" rel="noopener noreferrer">
              Secretaría Virtual
            </a>
          </Button>
        </div>
      </div>
    </header>
  )
}