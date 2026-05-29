import { Button } from '@/components/ui/button'
import EscenaCanvas from '@/components/3d/EscenaCanvas'

export default function Hero() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-10 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <section className="space-y-8">
            <div className="inline-flex items-center justify-center rounded-full border border-border bg-muted/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-secondary-foreground">
              Mérida's Heritage & Tech Horizon
            </div>

            <div className="space-y-6">
              <div className="max-w-2xl space-y-6">
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-[0.28em] text-secondary-foreground">IES Albarregas:</p>
                  <h1 className="text-5xl font-semibold leading-tight tracking-[-0.03em] text-foreground sm:text-6xl">
                    Donde la <span className="text-primary">Historia</span> se une al <span className="text-primary">Futuro</span>
                  </h1>
                </div>
                <p className="max-w-xl text-base leading-8 text-muted-foreground">
                  Enclavado en el corazón de Mérida, conectamos la grandeza de nuestras raíces romanas con la innovación tecnológica del mañana. Fórmate en un entorno único donde el pasado inspira el futuro.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Únete Ahora
                </Button>
                <Button variant="outline" size="lg" className="text-foreground border-border hover:bg-muted/60">
                  Descubrir Más
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-border bg-input/70 p-5 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  🔧
                </div>
                <p className="text-sm font-semibold">Tecnología</p>
              </div>
              <div className="rounded-3xl border border-border bg-input/70 p-5 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  🧭
                </div>
                <p className="text-sm font-semibold">Diseño 3D</p>
              </div>
              <div className="rounded-3xl border border-border bg-input/70 p-5 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  🏛️
                </div>
                <p className="text-sm font-semibold">Historia</p>
              </div>
            </div>
          </section>

          <section className="relative overflow-hidden rounded-[2rem] border border-border bg-slate-950/80 p-6 shadow-2xl shadow-black/20">
            <div className="absolute inset-0 rounded-[2rem] border border-white/10" />
            <div className="relative flex h-[560px] flex-col gap-5 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/90 p-6">
              <div className="flex h-full min-h-[420px] items-center justify-center overflow-hidden rounded-[1.5rem] bg-slate-950/70">
                <EscenaCanvas />
              </div>
              <div className="space-y-3 text-center">
                <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">Modelo 3D acueducto de los milagros</p>

              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
