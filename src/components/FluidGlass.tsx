/* eslint-disable react/no-unknown-property */
// @ts-nocheck
import * as THREE from 'three';
import { useRef, useState, useEffect, memo } from 'react';
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber';
import {
  useFBO,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text
} from '@react-three/drei';
import { easing } from 'maath';

export default function FluidGlass({ mode = 'lens', lensProps = {}, barProps = {}, cubeProps = {} }: any) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens;
  const rawOverrides = mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps;
  const {
    navItems = [
      { label: 'Home', link: '/' },
      { label: 'About', link: '/about' },
      { label: 'Contact', link: '/contact' }
    ],
    ...modeProps
  } = rawOverrides as any;

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === 'bar' && <NavItems items={navItems} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: any) {
  const ref = useRef<any>();
  const { nodes } = useGLTF(glb) as any;
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState(() => new THREE.Scene());
  const geoWidthRef = useRef(1);

  const {
    scale,
    ior,
    thickness,
    anisotropy,
    chromaticAberration,
    pointerDrift,
    pointerLift,
    interactiveRotation,
    baseRotation,
    rotationSpring,
    ...extraMat
  } = modeProps;

  const baseRotationValue = baseRotation ?? [Math.PI / 2, 0, 0];
  const pointerDriftValue = pointerDrift ?? (followPointer ? 0.1 : 0.25);
  const pointerLiftValue = pointerLift ?? (lockToBottom ? 0.1 : 0);
  const interactiveRotationValue = interactiveRotation ?? 0.2;
  const rotationSpringValue = rotationSpring ?? 0.18;

  useEffect(() => {
    if (nodes && nodes[geometryKey]) {
      const geo = nodes[geometryKey].geometry;
      geo.computeBoundingBox();
      geoWidthRef.current = geo.boundingBox.max.x - geo.boundingBox.min.x || 1;
    }
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    const baseX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const baseY = lockToBottom ? -v.height / 2 + 0.2 : followPointer ? (pointer.y * v.height) / 2 : 0;
    const driftX = pointer.x * v.width * pointerDriftValue * 0.25;
    const driftY = pointer.y * v.height * pointerDriftValue * (lockToBottom ? 0.12 : 0.25);
    const destX = baseX + driftX;
    const destY = baseY + driftY + pointerLiftValue;

    if (ref.current) {
      easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);
      if (scale == null) {
        const maxWorld = v.width * 0.9;
        const desired = maxWorld / geoWidthRef.current;
        ref.current.scale.setScalar(Math.min(0.15, desired));
      }
      if (interactiveRotationValue > 0) {
        const targetRotation = [
          baseRotationValue[0] + pointer.y * interactiveRotationValue * (lockToBottom ? -1 : 1),
          baseRotationValue[1] + pointer.x * interactiveRotationValue,
          baseRotationValue[2],
        ];
        easing.dampE(ref.current.rotation, targetRotation, rotationSpringValue, delta);
      }
    }
    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0x5227ff, 0);
  });

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh ref={ref} scale={scale ?? 0.15} rotation={baseRotationValue} geometry={nodes?.[geometryKey]?.geometry} {...props}>
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }: any) {
  return <ModeWrapper glb="/assets/3d/lens.glb" geometryKey="Cylinder" followPointer modeProps={modeProps} {...p} />;
}

function Cube({ modeProps, ...p }: any) {
  return <ModeWrapper glb="/assets/3d/cube.glb" geometryKey="Cube" followPointer modeProps={modeProps} {...p} />;
}

function Bar({ modeProps = {}, ...p }: any) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25
  };
  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items }: any) {
  const group = useRef<any>();
  const { viewport, camera } = useThree();
  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.035 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.035 }
  };

  const getDevice = () => {
    if (typeof window === 'undefined') return 'desktop';
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max ? 'mobile' : w <= DEVICE.tablet.max ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { spacing, fontSize } = DEVICE[device as keyof typeof DEVICE];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);
    group.current.children.forEach((child: any, i: number) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link: string) => {
    if (!link || typeof window === 'undefined') return;
    link.startsWith('#') ? (window.location.hash = link) : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }: any) => (
        <NavText
          key={label}
          label={label}
          link={link}
          fontSize={fontSize}
          onNavigate={handleNavigate}
        />
      ))}
    </group>
  );
}

function NavText({ label, link, fontSize, onNavigate }: any) {
  const ref = useRef<any>();
  const [hovered, setHovered] = useState(false);

  useFrame((_, delta) => {
    if (!ref.current) return;
    const targetScale = hovered ? 1.2 : 1;
    easing.damp3(ref.current.scale, [targetScale, targetScale, targetScale], 0.2, delta);
  });

  return (
    <Text
      ref={ref}
      fontSize={fontSize}
      color={hovered ? '#7AF3C5' : 'white'}
      anchorX="center"
      anchorY="middle"
      // @ts-ignore
      depthWrite={false}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      depthTest={false}
      renderOrder={10}
      onClick={(e: any) => {
        e.stopPropagation();
        onNavigate(link);
      }}
      onPointerOver={(e: any) => {
        e.stopPropagation();
        if (typeof document !== 'undefined') document.body.style.cursor = 'pointer';
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
        if (typeof document !== 'undefined') document.body.style.cursor = 'auto';
      }}
      onPointerMove={(e: any) => {
        e.stopPropagation();
        setHovered(true);
      }}
    >
      {label}
    </Text>
  );
}

function Images() {
  const group = useRef<any>();
  const data = useScroll();
  const { height } = useThree(s => s.viewport);

  useFrame(() => {
    if (group.current) {
      // @ts-ignore
      group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
      // @ts-ignore
      group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
      // @ts-ignore
      group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
      // @ts-ignore
      group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
      // @ts-ignore
      group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2;
    }
  });

  return (
    <group ref={group}>
      <Image position={[-2, 0, 0]} scale={[3, height / 1.1, 1]} url="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" />
      <Image position={[2, 0, 3]} scale={3} url="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" />
      <Image position={[-2.05, -height, 6]} scale={[1, 3, 1]} url="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" />
      <Image position={[-0.6, -height, 9]} scale={[1, 2, 1]} url="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop" />
      <Image position={[0.75, -height, 10.5]} scale={1.5} url="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" />
    </group>
  );
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.6 }
  };

  const getDevice = () => {
    const w = window.innerWidth;
    return w <= 639 ? 'mobile' : w <= 1023 ? 'tablet' : 'desktop';
  };

  const [device, setDevice] = useState(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { fontSize } = DEVICE[device as keyof typeof DEVICE];

  return (
    <Text
      position={[0, 0, 12]}
      fontSize={fontSize}
      letterSpacing={-0.05}
      // @ts-ignore
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      NSB TELECOM
    </Text>
  );
}