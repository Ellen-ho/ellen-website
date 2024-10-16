import React, { useRef } from 'react';
import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { Sphere, Stars, Sky } from '@react-three/drei';
import fontJson from '../app/fonts/helvetiker_bold.typeface.json';

const FontLoader = require('three/examples/jsm/loaders/FontLoader').FontLoader;
const TextGeometry =
  require('three/examples/jsm/geometries/TextGeometry').TextGeometry;

interface EarthAnimationProps {
  theme: string;
}

const EarthAnimation: React.FC<EarthAnimationProps> = ({ theme }) => {
  const earthRef = useRef<THREE.Mesh>(null);
  const cloudsRef = useRef<THREE.Mesh>(null);
  const atmosphereRef = useRef<THREE.Mesh>(null);
  const textRef1 = useRef<THREE.Mesh>(null);
  const textRef2 = useRef<THREE.Mesh>(null);

  const backgroundColor = theme === 'retro' ? '#e7e0d6' : '#374150';

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    THREE.TextureLoader,
    [
      '/images/earth_daymap.jpg',
      '/images/earth_normal_map.jpg',
      '/images/earth_specular_map.jpg',
      '/images/earth_clouds.jpg',
    ],
  );

  const font = new FontLoader().parse(fontJson);

  const textColor = theme === 'retro' ? '#141A50' : '#ffffff';

  const textGeometry1 = new TextGeometry('Hello, World.', {
    font,
    size: 0.6,
    height: 0.1,
    curveSegments: 30,
  });

  const textGeometry2 = new TextGeometry('Hello, Real World.', {
    font,
    size: 0.4,
    height: 0.1,
    curveSegments: 30,
  });

  const textMaterial1 = new THREE.MeshStandardMaterial({
    color: textColor,
    metalness: 0.7,
    roughness: 0.2,
    emissive: textColor,
    emissiveIntensity: 0.9,
    depthTest: false,
  });

  const textMaterial2 = new THREE.MeshStandardMaterial({
    color: textColor,
    metalness: 0.7,
    roughness: 0.2,
    emissive: textColor,
    emissiveIntensity: 0.9,
    depthTest: false,
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (earthRef.current) {
      earthRef.current.rotation.y = elapsedTime / 15;
    }
    if (cloudsRef.current) {
      cloudsRef.current.rotation.y = elapsedTime / 10;
    }
    if (textRef1.current && textRef2.current) {
      textRef1.current.lookAt(0, 0, 0);
      textRef2.current.lookAt(0, 0, 0);
    }
  });

  const isRetro = theme === 'retro';
  const shininess = isRetro ? 30 : 5;
  const emissiveIntensity = isRetro ? 0.3 : 0;

  return (
    <>
      {isRetro ? (
        <Sky
          distance={450000}
          sunPosition={[1, 1, 1]}
          inclination={0}
          azimuth={0.25}
        />
      ) : (
        <Stars
          radius={300}
          depth={60}
          count={5000}
          factor={7}
          saturation={0}
          fade
        />
      )}

      <Sphere ref={earthRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          map={colorMap}
          normalMap={normalMap}
          specularMap={specularMap}
          shininess={shininess}
          emissive="#ffffff"
          emissiveIntensity={emissiveIntensity}
          depthWrite={false}
        />
      </Sphere>
      <Sphere ref={cloudsRef} args={[2.03, 64, 64]}>
        <meshPhongMaterial map={cloudsMap} transparent={true} opacity={0.4} />
      </Sphere>
      <Sphere ref={atmosphereRef} args={[2.1, 64, 64]}>
        <meshPhongMaterial color="#88c3ff" transparent={true} opacity={0.1} />
      </Sphere>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <mesh
        ref={textRef1}
        geometry={textGeometry1}
        material={textMaterial1}
        position={[2, 3, -6]}
        renderOrder={1}
      />
      <mesh
        ref={textRef2}
        geometry={textGeometry2}
        material={textMaterial2}
        position={[2, 2, -6]}
        renderOrder={1}
      />
    </>
  );
};

export default EarthAnimation;