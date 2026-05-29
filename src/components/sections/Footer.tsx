export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border/80 bg-background/90 px-6 py-10 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-secondary-foreground">IES Albarregas</p>
          <p className="mt-4 max-w-lg text-sm leading-7 text-muted-foreground">
            Formación profesional en tecnología, diseño y patrimonio cultural con una mirada hacia el futuro.
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <a href="#home" className="text-sm text-foreground/80 transition hover:text-foreground">
            Privacidad
          </a>
          <a href="#home" className="text-sm text-foreground/80 transition hover:text-foreground">
            Términos
          </a>
          <a href="#contact" className="text-sm text-foreground/80 transition hover:text-foreground">
            Contacto
          </a>
        </div>
      </div>
      <div className="mt-8 border-t border-border/80 pt-6 text-center text-sm text-muted-foreground">
        © 2024 IES Albarregas. Todos los derechos reservados.
      </div>
    </footer>
  )
}
