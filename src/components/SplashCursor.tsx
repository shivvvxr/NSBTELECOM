import { useEffect, useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';
import {
  BASE_VERTEX_SHADER,
  SPLAT_SHADER,
  ADVECTION_SHADER,
  DIVERGENCE_SHADER,
  CURL_SHADER,
  VORTICITY_SHADER,
  PRESSURE_SHADER,
  GRADIENT_SUBTRACT_SHADER,
  DISPLAY_SHADER
} from './SplashCursorShaders';

function FluidSimulation() {
  const { gl, size, pointer } = useThree();
  const simRes = 128; // Simulation resolution
  const dyeRes = 512; // Dye resolution
  
  // Create FBOs
  const createFBO = (w: number, h: number, type: THREE.TextureDataType) => 
    new THREE.WebGLRenderTarget(w, h, {
      type,
      format: THREE.RGBAFormat,
      minFilter: THREE.LinearFilter,
      magFilter: THREE.LinearFilter,
      wrapS: THREE.ClampToEdgeWrapping,
      wrapT: THREE.ClampToEdgeWrapping,
      depthBuffer: false,
      stencilBuffer: false,
    });

  const fbos = useMemo(() => {
    const type = THREE.HalfFloatType;
    return {
      velocity: [createFBO(simRes, simRes, type), createFBO(simRes, simRes, type)],
      density: [createFBO(dyeRes, dyeRes, type), createFBO(dyeRes, dyeRes, type)],
      divergence: createFBO(simRes, simRes, type),
      curl: createFBO(simRes, simRes, type),
      pressure: [createFBO(simRes, simRes, type), createFBO(simRes, simRes, type)],
    };
  }, []);

  // Create Materials
  const materials = useMemo(() => {
    const createMat = (frag: string, uniforms: any) => new THREE.ShaderMaterial({
      vertexShader: BASE_VERTEX_SHADER,
      fragmentShader: frag,
      uniforms,
      depthTest: false,
      depthWrite: false,
    });

    return {
      splat: createMat(SPLAT_SHADER, {
        uTarget: { value: null },
        aspectRatio: { value: 1 },
        color: { value: new THREE.Vector3() },
        point: { value: new THREE.Vector2() },
        radius: { value: 0.0 },
      }),
      advection: createMat(ADVECTION_SHADER, {
        uVelocity: { value: null },
        uSource: { value: null },
        texelSize: { value: new THREE.Vector2() },
        dyeTexelSize: { value: new THREE.Vector2() },
        dt: { value: 0.016 },
        dissipation: { value: 0.98 },
      }),
      divergence: createMat(DIVERGENCE_SHADER, {
        uVelocity: { value: null },
        texelSize: { value: new THREE.Vector2() },
      }),
      curl: createMat(CURL_SHADER, {
        uVelocity: { value: null },
        texelSize: { value: new THREE.Vector2() },
      }),
      vorticity: createMat(VORTICITY_SHADER, {
        uVelocity: { value: null },
        uCurl: { value: null },
        curl: { value: 30 },
        dt: { value: 0.016 },
        texelSize: { value: new THREE.Vector2() },
      }),
      pressure: createMat(PRESSURE_SHADER, {
        uPressure: { value: null },
        uDivergence: { value: null },
        texelSize: { value: new THREE.Vector2() },
      }),
      gradientSubtract: createMat(GRADIENT_SUBTRACT_SHADER, {
        uPressure: { value: null },
        uVelocity: { value: null },
        texelSize: { value: new THREE.Vector2() },
      }),
      display: createMat(DISPLAY_SHADER, {
        uTexture: { value: null },
        texelSize: { value: new THREE.Vector2() },
      }),
    };
  }, []);

  const meshRef = useRef<THREE.Mesh>(null);
  const lastMouse = useRef(new THREE.Vector2(0, 0));
  const lastTime = useRef(0);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const dt = Math.min((time - lastTime.current), 0.1);
    lastTime.current = time;

    const { velocity, density, divergence, curl, pressure } = fbos;
    
    // Swap helpers
    let velRead = velocity[0];
    let velWrite = velocity[1];
    let densRead = density[0];
    let densWrite = density[1];
    let pressRead = pressure[0];
    let pressWrite = pressure[1];

    const swapVel = () => { const temp = velRead; velRead = velWrite; velWrite = temp; };
    const swapDens = () => { const temp = densRead; densRead = densWrite; densWrite = temp; };
    const swapPress = () => { const temp = pressRead; pressRead = pressWrite; pressWrite = temp; };

    // Render helper
    const render = (target: THREE.WebGLRenderTarget | null, material: THREE.ShaderMaterial) => {
      if (meshRef.current) meshRef.current.material = material;
      gl.setRenderTarget(target);
      gl.render(state.scene, state.camera);
      gl.setRenderTarget(null);
    };

    // Input (Splat)
    const mouse = pointer; // -1 to 1
    const velocityX = (mouse.x - lastMouse.current.x) * 10;
    const velocityY = (mouse.y - lastMouse.current.y) * 10;
    
    if (Math.abs(velocityX) > 0 || Math.abs(velocityY) > 0) {
      materials.splat.uniforms.uTarget.value = velRead.texture;
      materials.splat.uniforms.aspectRatio.value = size.width / size.height;
      materials.splat.uniforms.point.value.set(mouse.x * 0.5 + 0.5, mouse.y * 0.5 + 0.5);
      materials.splat.uniforms.color.value.set(velocityX, velocityY, 0.0);
      materials.splat.uniforms.radius.value = 0.005;
      render(velWrite, materials.splat);
      swapVel();

      materials.splat.uniforms.uTarget.value = densRead.texture;
      materials.splat.uniforms.color.value.set(0.2, 0.4, 1.0); // Blueish color
      render(densWrite, materials.splat);
      swapDens();
    }
    lastMouse.current.set(mouse.x, mouse.y);

    // Curl
    materials.curl.uniforms.uVelocity.value = velRead.texture;
    materials.curl.uniforms.texelSize.value.set(1 / simRes, 1 / simRes);
    render(curl, materials.curl);

    // Vorticity
    materials.vorticity.uniforms.uVelocity.value = velRead.texture;
    materials.vorticity.uniforms.uCurl.value = curl.texture;
    materials.vorticity.uniforms.dt.value = dt;
    materials.vorticity.uniforms.texelSize.value.set(1 / simRes, 1 / simRes);
    render(velWrite, materials.vorticity);
    swapVel();

    // Divergence
    materials.divergence.uniforms.uVelocity.value = velRead.texture;
    materials.divergence.uniforms.texelSize.value.set(1 / simRes, 1 / simRes);
    render(divergence, materials.divergence);

    // Clear Pressure
    gl.setRenderTarget(pressRead);
    gl.clear();
    
    // Pressure Solve (Jacobi)
    materials.pressure.uniforms.uDivergence.value = divergence.texture;
    materials.pressure.uniforms.texelSize.value.set(1 / simRes, 1 / simRes);
    for (let i = 0; i < 20; i++) {
      materials.pressure.uniforms.uPressure.value = pressRead.texture;
      render(pressWrite, materials.pressure);
      swapPress();
    }

    // Gradient Subtract
    materials.gradientSubtract.uniforms.uPressure.value = pressRead.texture;
    materials.gradientSubtract.uniforms.uVelocity.value = velRead.texture;
    materials.gradientSubtract.uniforms.texelSize.value.set(1 / simRes, 1 / simRes);
    render(velWrite, materials.gradientSubtract);
    swapVel();

    // Advection (Velocity)
    materials.advection.uniforms.uVelocity.value = velRead.texture;
    materials.advection.uniforms.uSource.value = velRead.texture;
    materials.advection.uniforms.texelSize.value.set(1 / simRes, 1 / simRes);
    materials.advection.uniforms.dyeTexelSize.value.set(1 / simRes, 1 / simRes);
    materials.advection.uniforms.dt.value = dt;
    materials.advection.uniforms.dissipation.value = 0.98;
    render(velWrite, materials.advection);
    swapVel();

    // Advection (Density)
    materials.advection.uniforms.uVelocity.value = velRead.texture;
    materials.advection.uniforms.uSource.value = densRead.texture;
    materials.advection.uniforms.texelSize.value.set(1 / simRes, 1 / simRes);
    materials.advection.uniforms.dyeTexelSize.value.set(1 / dyeRes, 1 / dyeRes);
    materials.advection.uniforms.dissipation.value = 0.96;
    render(densWrite, materials.advection);
    swapDens();

    // Display
    if (meshRef.current) {
      meshRef.current.material = materials.display;
      materials.display.uniforms.uTexture.value = densRead.texture;
      materials.display.uniforms.texelSize.value.set(1 / dyeRes, 1 / dyeRes);
      // Render to screen (final pass)
      gl.setRenderTarget(null);
      // We don't call render() here because the mesh is in the scene and will be rendered by the main loop
      // But since we are hijacking the mesh material for GPGPU, we need to ensure it has the display material for the final draw
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
    </mesh>
  );
}

export default function SplashCursor() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 50, // Behind UI but visible
    }}>
      <Canvas
        camera={{ position: [0, 0, 1] }}
        gl={{
          alpha: true,
          antialias: false,
          powerPreference: "high-performance",
          depth: false,
          stencil: false
        }}
        dpr={[1, 2]}
      >
        <FluidSimulation />
      </Canvas>
    </div>
  );
}