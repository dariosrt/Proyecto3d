import { OrbitControls, Stars } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import type { Object3D } from 'three'

function IslandModel() {
  const gltf = useGLTF('/models/Isla.glb')
  const ref = useRef<Object3D>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002
    }
  })

  return <primitive ref={ref} object={gltf.scene} />
}

export default function EscenaCanvas() {
  return (
    <div className="h-full w-full rounded-[1.5rem] bg-slate-950/80">
      <Canvas camera={{ position: [0, 14, 90], fov: 40 }} className="h-full w-full">
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={0.7} />
        <pointLight position={[-8, 5, -5]} intensity={0.4} />
        <Suspense fallback={null}>
          <IslandModel />
        </Suspense>
        <Stars />
        <OrbitControls enablePan={false} autoRotate autoRotateSpeed={0.25} />
      </Canvas>
    </div>
  )
}
