import { useLayoutEffect, useMemo, useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import EscenaCanvas from '@/components/3d/EscenaCanvas'
import { layoutWithLines, prepare, type PreparedTextWithSegments } from '@chenglou/pretext'
import { IconBook, IconMapPin, IconCode, IconBuildingBridge, IconStack } from '@tabler/icons-react'
import FluidTitle from '../ui/FluidTitle'

function FancyTitle({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    const element = containerRef.current
    if (!element) return

    setWidth(element.clientWidth)
    const observer = new ResizeObserver(() => {
      setWidth(element.clientWidth)
    })
    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const lines = useMemo(() => {
    if (!width || !text) return [text]
    try {
      const prepared = prepare(text, '700 3.5rem sans-serif') as PreparedTextWithSegments
      if (!prepared) return [text]
      
      const layout = layoutWithLines(prepared, width, 50)
      if (!layout || !layout.lines) return [text]
      
      return layout.lines.map((line) => line.text)
    } catch (error) {
      return [text]
    }
  }, [text, width])

  return (
    <div ref={containerRef} className="relative max-w-full">
      <div className="flex flex-col gap-2 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl leading-[1.1]">
        {lines.map((line, index) => (
          <span 
            key={index} 
            className="block bg-linear-to-r from-primary via-sky-500 to-indigo-400 bg-clip-text text-transparent animate__animated animate__fadeInUp"
            style={{ animationDelay: `${index * 120}ms`, animationFillMode: 'both' }}
          >
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <main id="presentacion" className="relative min-h-screen overflow-hidden bg-background text-foreground font-sans">
      {/* Luces y degradados ambientales de fondo para realzar el aspecto visual */}
      <div className="pointer-events-none absolute left-1/4 top-24 -z-10 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate__animated animate__fadeIn" />
      <div className="pointer-events-none absolute right-1/4 bottom-24 -z-10 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl animate__animated animate__fadeIn" />

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-12 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:items-center">
          
          {/* Bloque Informativo */}
          <section className="space-y-8">
            <div className="inline-flex items-center justify-center gap-3 rounded-full border border-border bg-muted/50 px-4 py-2 text-xs uppercase tracking-[0.2em] text-muted-foreground shadow-xs backdrop-blur-md font-mono animate__animated animate__fadeInDown">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Centro Público de Formación Profesional
            </div>

            <div className="space-y-6">
              <p className="text-xs uppercase tracking-[0.25em] text-primary font-mono font-bold animate__animated animate__fadeIn">
                Portal Informativo Oficial
              </p>
              
              <FancyTitle text="Instituto de Educación Secundaria Albarregas" />
              
              {/* <p className="max-w-2xl text-base leading-relaxed text-muted-foreground antialiased animate__animated animate__fadeIn [animation-delay:400ms] [animation-fill-mode:both]">
                Ubicado en Mérida, el IES Albarregas constituye un núcleo de desarrollo técnico y académico. Esta plataforma expone de manera objetiva la infraestructura del centro, sus líneas formativas prioritarias y la integración de proyectos técnicos interdisciplinares realizados por el alumnado.
              </p> */}
              <FluidTitle 
                text="Ubicado en Mérida, el IES Albarregas constituye un núcleo de desarrollo técnico y académico. Esta plataforma expone de manera objetiva la infraestructura del centro, sus líneas formativas prioritarias y la integración de proyectos técnicos interdisciplinares realizados por el alumnado." 
                className="max-w-2xl text-base leading-relaxed text-muted-foreground antialiased animate__animated animate__fadeIn [animation-delay:400ms] [animation-fill-mode:both]"
              />
            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-4 animate__animated animate__fadeIn [animation-delay:500ms] [animation-fill-mode:both]">
              <Button size="lg" className="rounded-full gap-2 px-6 shadow-md transition-transform hover:scale-102">
                <a href="#features">
                  <IconBook size={18} />
                  Planes de Estudio
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full gap-2 px-6 backdrop-blur-xs transition-transform hover:scale-102">
                <a href="#contact">
                  <IconMapPin size={18} />
                  Entorno Geográfico
                </a>
              </Button>
            </div>

            {/* Módulos en cuadrícula para las Familias Profesionales */}
            <div className="grid gap-4 sm:grid-cols-3 animate__animated animate__fadeIn [animation-delay:600ms] [animation-fill-mode:both]">
              {[
                { icon: <IconCode size={20} />, label: 'Informática y Redes' },
                { icon: <IconBuildingBridge size={20} />, label: 'Edificación y BIM' },
                { icon: <IconStack size={20} />, label: 'Artes Gráficas' },
              ].map((feature, i) => (
                <div 
                  key={feature.label} 
                  className="rounded-2xl border border-border/60 bg-card/60 p-5 text-center shadow-xs backdrop-blur-md transition-all hover:-translate-y-1 hover:border-primary/40 hover:bg-card flex flex-col items-center justify-center gap-3"
                  style={{ animationDelay: `${700 + i * 80}ms` }}
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {feature.icon}
                  </div>
                  <p className="text-xs font-mono font-bold tracking-tight text-foreground">{feature.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Bloque Contenedor del Visor 3D (Estilo cyberpunk / tecnológico oscuro) */}
          <section className="relative overflow-hidden rounded-[2rem] border border-border bg-slate-950/90 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl animate__animated animate__zoomIn">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/10 via-transparent to-sky-500/5 pointer-events-none" />
            <div className="relative flex h-140 min-h-105 flex-col gap-4 overflow-hidden rounded-[1.75rem] border border-white/5 bg-slate-950 p-6">
              
              <div className="flex h-full items-center justify-center overflow-hidden rounded-[1.5rem] bg-slate-950/50 shadow-inner">
                <EscenaCanvas />
              </div>

              <div className="space-y-1 text-center">
                <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground/80 font-mono font-bold">
                  Acueducto de los milagros
                </p>
                <p className="text-[11px] text-slate-400">
                  Modelo a escala optimizado (Low Poly) del Acueducto de los Milagros.
                </p>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}