import { Button } from '../ui/button'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-8">
        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.25em] text-secondary-foreground">
          <div className="h-9 w-9 rounded-full bg-primary text-primary-foreground grid place-items-center">A</div>
          IES Albarregas
        </div>

        <nav className="hidden gap-8 text-sm font-medium text-foreground/80 md:flex">
          <a href="#home" className="transition hover:text-foreground">Inicio</a>
          <a href="#features" className="transition hover:text-foreground">Características</a>
          <a href="#contact" className="transition hover:text-foreground">Contacto</a>
        </nav>

        <div className="flex items-center gap-3">
          <Button size="sm" variant="ghost" className="hidden md:inline-flex">Iniciar Sesión</Button>
          <Button size="sm">Regístrate</Button>
        </div>
      </div>
    </header>
  )
}
