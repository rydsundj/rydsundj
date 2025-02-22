import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

const WindyLeaves = ({ image }) => {
  const meshRef = useRef();

  useFrame(({ clock }) => {
    meshRef.current.material.uniforms.time.value = clock.getElapsedTime();
  });

  useEffect(() => {
    const texture = new THREE.TextureLoader().load(image);
    meshRef.current.material.uniforms.texture1.value = texture;
  }, [image]); 

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <planeGeometry args={[16, 10]} />
      <shaderMaterial
        attach="material"
        uniforms={{
          time: { value: 0 },
          texture1: { value: new THREE.TextureLoader().load(image) },
        }}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
      />
    </mesh>
  );
};

const vertexShader = `
  varying vec2 vUv;
  uniform float time;

  void main() {
    vUv = uv;
    vec3 pos = position;

    // Simulating wind with random waves across X and Y
    float windStrength = 0.1; // Adjust for stronger/weaker wind
    float speed = 2.0; // Wind speed factor

    // Different parts move at different speeds
    float wave1 = sin(pos.y * 3.0 + time * speed) * windStrength;
    float wave2 = cos(pos.x * 5.0 + time * speed * 0.8) * (windStrength * 0.6);
    float wave3 = sin(pos.y * 2.5 + pos.x * 1.5 + time * speed * 1.2) * (windStrength * 0.4);

    // Apply wind effects
    pos.x += wave1 + wave2;  // Sideways sway
    pos.y += wave3 * 0.5;     // Small up/down movement
    pos.z += sin(time + pos.x * 2.0) * 0.02; // Subtle twisting

    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;


const fragmentShader = `
  varying vec2 vUv;
  uniform sampler2D texture1;

  void main() {
    gl_FragColor = texture2D(texture1, vUv);
  }
`;

export default function Scene({ image }) {
  return (
    <Canvas style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
      <WindyLeaves image={image} />
    </Canvas>
  );
}
