import { OrbitControls, Stars } from '@react-three/drei'
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Object3D } from "three";


function IslandModel() {
  const gltf = useGLTF("/models/Isla.glb");
  // const gltf = useGLTF("/models/isla.glb");
  const ref = useRef<Object3D>(null); // ✅ inicializado correctamente

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={ref} object={gltf.scene} />;
}

export default function IslandScene() {
  return (
      <Canvas style={{ width: '100vw', height: '100vh' }}>
        <ambientLight intensity={0.5} />           {/* luz ambiental */}
        <directionalLight position={[5, 5, 5]} />  {/* luz direccional */}

        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <IslandModel />
        </Suspense>
        <Stars />
        <OrbitControls /> {/* Permite mover la cámara con el ratón */}
      </Canvas>
  );
}



// import { Canvas } from '@react-three/fiber'
// import { OrbitControls, Stars } from '@react-three/drei'

// function Box() {
//   return (
//     <mesh rotation={[10, 10, 0]}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="orange" />
//     </mesh>
//   )
// }

// export default function App() {
//   return (
//     <div style={{ width: '100vw', height: '100vh' }}>
//       <Canvas>
//         <ambientLight intensity={0.5} />
//         <pointLight position={[10, 10, 10]} />
//         <Box />
//         <Stars />
//         <OrbitControls /> {/* Permite mover la cámara con el ratón */}
//       </Canvas>
//     </div>
//   )
// }