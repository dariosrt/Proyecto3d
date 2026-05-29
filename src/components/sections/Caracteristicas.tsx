import { Button } from '@/components/ui/button'

const features = [
  {
    title: 'Innovación tecnológica',
    description:
      'Programas educativos que combinan lo mejor de la ingeniería digital y la creatividad.',
  },
  {
    title: 'Diseño 3D',
    description:
      'Modelado, animación y experiencias interactivas para dar forma a nuevas ideas.',
  },
  {
    title: 'Historia viva',
    description:
      'Aprende dentro de un entorno inspirado en Mérida y su legado romano.',
  },
  {
    title: 'Comunidad activa',
    description:
      'Proyectos colaborativos y espacios para crecer con otros estudiantes.',
  },
]

export default function Caracteristicas() {
  return (
    <section id="features" className="bg-background px-6 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-secondary-foreground">Explora nuestras áreas</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-foreground sm:text-5xl">
            Formación que une tradición y tecnología.
          </h2>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            Descubre las propuestas educativas y las experiencias que te ayudarán a construir un futuro profesional con raíces locales.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.5rem] border border-border bg-input/70 p-6 shadow-xl shadow-black/5"
            >
              <div className="mb-4 h-12 w-12 rounded-3xl bg-primary/10 text-primary grid place-items-center text-lg font-semibold">
                {feature.title.charAt(0)}
              </div>
              <h3 className="text-xl font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 text-center">
          <p className="max-w-2xl text-base leading-7 text-muted-foreground">
            Educación con vista al futuro
          </p>
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            Ver programas disponibles
          </Button>
        </div>
      </div>
    </section>
  )
}
