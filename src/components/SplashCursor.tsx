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
        zIndex: 10,
        pointerEvents: 'none',
      }}
      eventSource={document.body}
      gl={{ alpha: true, antialias: false }}
    >
      <Suspense fallback={null}>
        <EffectComposer disableNormalPass multisampling={0}>
          <Fluid
            showBackground={false}
            rainbow={true}
            blend={5}
            intensity={10}
            distortion={2}
            curl={10}
            swirl={20}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}