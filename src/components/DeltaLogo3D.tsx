import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import { DELTA_PATHS } from './DeltaLogoSvg';

export type LogoAngle = 'frontal' | 'lateral' | 'perspectiva' | 'closeup';
export type LogoTheme = 'white' | 'dark';

interface DeltaLogo3DProps {
  angle?: LogoAngle;
  theme?: LogoTheme;
  exploded?: boolean;
  className?: string;
  allowInteraction?: boolean;
}

export const DeltaLogo3D: React.FC<DeltaLogo3DProps> = ({
  angle = 'perspectiva',
  theme = 'white',
  exploded = false,
  className = "w-full h-full",
  allowInteraction = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGlSupported, setWebGlSupported] = useState(true);
  const targetRotationRef = useRef({ x: 0.1, y: -0.5, z: 0 });
  const currentRotationRef = useRef({ x: 0.1, y: -0.5, z: 0 });
  const targetCamZRef = useRef(10);
  const currentCamZRef = useRef(12);
  const targetDisplaceRef = useRef(0);
  const currentDisplaceRef = useRef(0);
  const mouseRef = useRef({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const prevMousePosRef = useRef({ x: 0, y: 0 });

  // Update target rotation and camera based on angle and exploded props
  useEffect(() => {
    switch (angle) {
      case 'frontal':
        targetRotationRef.current = { x: 0, y: 0, z: 0 };
        targetCamZRef.current = 11;
        break;
      case 'lateral':
        targetRotationRef.current = { x: 0, y: Math.PI / 2 * 0.94, z: 0 };
        targetCamZRef.current = 10;
        break;
      case 'perspectiva':
        targetRotationRef.current = { x: 0.28, y: -0.55, z: 0.05 };
        targetCamZRef.current = 9.5;
        break;
      case 'closeup':
        targetRotationRef.current = { x: 0.15, y: -0.32, z: 0 };
        targetCamZRef.current = 5.2;
        break;
    }
  }, [angle]);

  useEffect(() => {
    targetDisplaceRef.current = exploded ? 1 : 0;
  }, [exploded]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer: THREE.WebGLRenderer | null = null;
    let animId: number;

    try {
      const scene = new THREE.Scene();

      const width = container.clientWidth || 400;
      const height = container.clientHeight || 400;

      const camera = new THREE.PerspectiveCamera(34, width / height, 0.1, 100);
      camera.position.set(0, 0, 12);

      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;

      container.replaceChildren(renderer.domElement);

      // Lights calibrated for theme
      const isWhite = theme === 'white';

      const keyLight = new THREE.DirectionalLight(0xffffff, isWhite ? 2.8 : 3.2);
      keyLight.position.set(6, 7, 8);
      scene.add(keyLight);

      const fillLight = new THREE.DirectionalLight(isWhite ? 0xd1d5db : 0xa5b4fc, isWhite ? 1.5 : 1.8);
      fillLight.position.set(-6, -2, 5);
      scene.add(fillLight);

      const rimLight = new THREE.DirectionalLight(0xffffff, isWhite ? 3.2 : 4.0);
      rimLight.position.set(-5, 6, -6);
      scene.add(rimLight);

      const ambientLight = new THREE.AmbientLight(isWhite ? 0x4a4a52 : 0x222228, isWhite ? 1.8 : 1.2);
      scene.add(ambientLight);

      // Material
      const metalMat = new THREE.MeshPhysicalMaterial({
        color: isWhite ? 0xffffff : 0x141416,
        metalness: isWhite ? 0.06 : 0.92,
        roughness: isWhite ? 0.18 : 0.28,
        clearcoat: 0.9,
        clearcoatRoughness: 0.12,
        reflectivity: isWhite ? 0.8 : 0.9,
      });

      const foldMat = new THREE.MeshPhysicalMaterial({
        color: isWhite ? 0xd8d8dc : 0x1f1f23,
        metalness: isWhite ? 0.04 : 0.88,
        roughness: isWhite ? 0.25 : 0.35,
        clearcoat: 0.85,
        clearcoatRoughness: 0.18,
      });

      // Parse Logo SVG
      const svgText = `
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 210 256">
          <path d="${DELTA_PATHS.fold}" />
          <path d="${DELTA_PATHS.dBody}" />
        </svg>
      `;

      const loader = new SVGLoader();
      const svgData = loader.parse(svgText);

      const logoGroup = new THREE.Group();
      const pieces: {
        holder: THREE.Group;
        offset: THREE.Vector3;
        rot: THREE.Euler;
      }[] = [];

      const S = (1 / 256) * 3.4; // Scale factor

      svgData.paths.forEach((pathData, idx) => {
        const shapes = SVGLoader.createShapes(pathData);
        shapes.forEach((shape) => {
          const geom = new THREE.ExtrudeGeometry(shape, {
            depth: 30,
            bevelEnabled: true,
            bevelThickness: 3.5,
            bevelSize: 2.2,
            bevelSegments: 4,
            curveSegments: 36,
          });

          // Center geometry anchor
          geom.translate(-105, -128, -15);

          const mesh = new THREE.Mesh(geom, idx === 0 ? foldMat : metalMat);
          mesh.scale.set(S, -S, S);

          const holder = new THREE.Group();
          holder.add(mesh);

          const offset = new THREE.Vector3(
            idx === 0 ? -1.8 : 1.4,
            idx === 0 ? 0.9 : -0.7,
            idx === 0 ? 1.5 : -1.2
          );

          const rot = new THREE.Euler(
            idx === 0 ? -0.4 : 0.3,
            idx === 0 ? 0.5 : -0.4,
            idx === 0 ? -0.3 : 0.2
          );

          logoGroup.add(holder);
          pieces.push({ holder, offset, rot });
        });
      });

      scene.add(logoGroup);

      // Handle Resize
      const handleResize = () => {
        if (!container || !renderer) return;
        const w = container.clientWidth;
        const h = container.clientHeight;
        if (w === 0 || h === 0) return;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      };

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(container);

      // Mouse Drag & Movement
      const onPointerDown = (e: PointerEvent) => {
        if (!allowInteraction) return;
        isDraggingRef.current = true;
        prevMousePosRef.current = { x: e.clientX, y: e.clientY };
      };

      const onPointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
          y: -((e.clientY - rect.top) / rect.height - 0.5) * 2,
        };

        if (isDraggingRef.current && allowInteraction) {
          const dx = e.clientX - prevMousePosRef.current.x;
          const dy = e.clientY - prevMousePosRef.current.y;
          targetRotationRef.current.y += dx * 0.01;
          targetRotationRef.current.x += dy * 0.01;
          prevMousePosRef.current = { x: e.clientX, y: e.clientY };
        }
      };

      const onPointerUp = () => {
        isDraggingRef.current = false;
      };

      container.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);

      // Animation Loop
      const animate = () => {
        animId = requestAnimationFrame(animate);

        // Smooth interpolate rotation
        const lerpFactor = 0.06;
        currentRotationRef.current.x +=
          (targetRotationRef.current.x + mouseRef.current.y * 0.15 - currentRotationRef.current.x) *
          lerpFactor;
        currentRotationRef.current.y +=
          (targetRotationRef.current.y + mouseRef.current.x * 0.25 - currentRotationRef.current.y) *
          lerpFactor;
        currentRotationRef.current.z +=
          (targetRotationRef.current.z - currentRotationRef.current.z) * lerpFactor;

        logoGroup.rotation.x = currentRotationRef.current.x;
        logoGroup.rotation.y = currentRotationRef.current.y;
        logoGroup.rotation.z = currentRotationRef.current.z;

        // Smooth interpolate camera position
        currentCamZRef.current +=
          (targetCamZRef.current - currentCamZRef.current) * lerpFactor;
        camera.position.z = currentCamZRef.current;

        // Displace pieces for exploded view
        currentDisplaceRef.current +=
          (targetDisplaceRef.current - currentDisplaceRef.current) * lerpFactor;
        const disp = currentDisplaceRef.current;

        pieces.forEach(({ holder, offset, rot }) => {
          holder.position.set(offset.x * disp, offset.y * disp, offset.z * disp);
          holder.rotation.set(rot.x * disp, rot.y * disp, rot.z * disp);
        });

        // Subtle idle breathing float
        const time = performance.now() * 0.001;
        logoGroup.position.y = Math.sin(time * 1.5) * 0.08;

        if (renderer) {
          renderer.render(scene, camera);
        }
      };

      animate();

      return () => {
        cancelAnimationFrame(animId);
        resizeObserver.disconnect();
        container.removeEventListener('pointerdown', onPointerDown);
        window.removeEventListener('pointermove', onPointerMove);
        window.removeEventListener('pointerup', onPointerUp);
        if (renderer) {
          renderer.dispose();
          if (renderer.domElement.parentNode === container) {
            container.removeChild(renderer.domElement);
          }
        }
      };
    } catch (err) {
      console.warn('WebGL initialization error, falling back to CSS 3D', err);
      setWebGlSupported(false);
    }
  }, [allowInteraction, theme]);

  if (!webGlSupported) {
    const isWhite = theme === 'white';
    return (
      <div className={`relative flex items-center justify-center ${className}`}>
        <div className="relative group p-8 transition-transform duration-700 hover:scale-105">
          <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/20 rounded-full blur-2xl pointer-events-none" />
          <svg
            viewBox="0 0 210 256"
            className="w-48 h-60 drop-shadow-[0_20px_35px_rgba(255,255,255,0.25)] filter"
          >
            <path d={DELTA_PATHS.fold} fill={isWhite ? '#d1d5db' : '#26262a'} stroke={isWhite ? '#ffffff44' : '#ffffff22'} />
            <path d={DELTA_PATHS.dBody} fill={isWhite ? '#ffffff' : '#f4f4f2'} />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`relative cursor-grab active:cursor-grabbing touch-none select-none ${className}`}
      title="Arraste para rotacionar em 3D"
    />
  );
};
