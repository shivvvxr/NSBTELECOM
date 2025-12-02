import { Fluid } from '@whatisjery/react-fluid-distortion';
import { EffectComposer } from '@react-three/postprocessing';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';

export default function SplashCursor() {
  return (
    <Canvas
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100vw',
        background: 'transparent',
        zIndex: 1,
        pointerEvents: 'none',
      }}
      eventSource={document.body}
      gl={{ alpha: true, antialias: false, powerPreference: "high-performance" }}
      dpr={[1, 1]}
    >
      <Suspense fallback={null}>
        <EffectComposer disableNormalPass multisampling={0}>
          <Fluid
            showBackground={false}
            rainbow={false}
            fluidColor="#0066CC"
            blend={2}
            intensity={5}
            distortion={0.5}
            curl={10}
            swirl={10}
            densityDissipation={0.96}
            velocityDissipation={0.98}
            pressureDissipation={0.8}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}