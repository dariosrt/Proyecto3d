import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type * as THREE from "three"
import type { JSX } from "react/jsx-runtime"
type Props = JSX.IntrinsicElements["group"]

export default function Acueducto(props: Props) {
    const { scene } = useGLTF("../models/Isla.glb");
  const ref = useRef<THREE.Group>(null!)

  // Rotación automática lenta
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.002
  })

  return (
    <group ref={ref} {...props}>
      <primitive object={scene} />
    </group>
  )
}