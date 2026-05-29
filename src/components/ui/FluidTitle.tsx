import { useRef, useEffect } from 'react'

interface FluidTitleProps {
  text: string;
  className?: string;
}

export default function FluidTitle({ text, className = "" }: FluidTitleProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Seleccionamos todos los spans de letras individuales
    const letters = container.querySelectorAll('.fluid-letter') as NodeListOf<HTMLSpanElement>
    
    // Almacenamos las posiciones e inercias de cada letra
    const letterData = Array.from(letters).map((letter) => ({
      element: letter,
      x: 0, // Desplazamiento X actual
      y: 0, // Desplazamiento Y actual
      targetX: 0, // Posición objetivo X
      targetY: 0, // Posición objetivo Y
    }))

    const handleMouseMove = (e: MouseEvent) => {
      letterData.forEach((data) => {
        const rect = data.element.getBoundingClientRect()
        // Centro geométrico de la letra en la pantalla
        const letterCenterX = rect.left + rect.width / 2
        const letterCenterY = rect.top + rect.height / 2

        // Vector de distancia entre el cursor y la letra
        const distX = letterCenterX - e.clientX
        const distY = letterCenterY - e.clientY
        const distance = Math.hypot(distX, distY)

        // Radio de afectación del "agua" (en píxeles)
        const radius = 90 

        if (distance < radius) {
          // Fuerza de empuje inversamente proporcional a la distancia
          const force = (radius - distance) / radius
          const angle = Math.atan2(distY, distX)
          
          // Empujamos la letra en la dirección opuesta al ratón (multiplicado por la intensidad del desplazamiento)
          const pushIntensity = 35 
          data.targetX = Math.cos(angle) * force * pushIntensity
          data.targetY = Math.sin(angle) * force * pushIntensity
        } else {
          // Si el ratón se aleja, el objetivo vuelve a ser el origen
          data.targetX = 0
          data.targetY = 0
        }
      });
    }

    const handleMouseLeave = () => {
      // Si el ratón sale del contenedor, todas las letras vuelven a su sitio
      letterData.forEach((data) => {
        data.targetX = 0
        data.targetY = 0
      })
    }

    // Bucle de animación de alta tasa de refresco (60fps+) para suavizar el retorno elástico
    let animationFrameId: number

    const updatePhysics = () => {
      letterData.forEach((data) => {
        // Interpolación lineal (Ease Out) para simular la viscosidad del agua
        const friction = 0.12 
        data.x += (data.targetX - data.x) * friction
        data.y += (data.targetY - data.y) * friction

        // Aplicamos la transformación mediante hardware de aceleración 3D (translate3d)
        data.element.style.transform = `translate3d(${data.x}px, ${data.y}px, 0)`
      })
      animationFrameId = requestAnimationFrame(updatePhysics)
    }

    // Inicializar listeners y bucle
    window.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseleave', handleMouseLeave)
    animationFrameId = requestAnimationFrame(updatePhysics)

    // Limpieza de memoria al desmontar el componente
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationFrameId)
    }
  }, [text])

  // Rompemos el texto en palabras y luego en letras manteniendo los espacios intactos
  const words = text.split(' ')

  return (
    <div 
      ref={containerRef} 
      className={`flex flex-wrap gap-x-[0.25em] select-none ${className}`}
    >
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split('').map((char, charIndex) => (
            <span
              key={charIndex}
              className="fluid-letter inline-block will-change-transform transition-colors duration-300 hover:text-sky-400"
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </div>
  )
}