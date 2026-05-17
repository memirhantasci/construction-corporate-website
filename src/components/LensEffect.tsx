import { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

const refractionVert = `
varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying float vDist;

uniform float uLensRadius;
uniform float uTime;

float sphereHeight(vec3 p, float r) {
  return sqrt(max(0.0, r * r - dot(p.xy, p.xy)));
}

vec3 displaceSurface(vec3 position, vec3 normal, float radius, float time) {
  float height = sphereHeight(position, radius * 6.0);
  float thickness = radius * 6.0 - height;
  float displacement = thickness * 0.5;
  float noise = fract(sin(dot(position.xy, vec2(12.9898, 78.233))) * 43758.5453) * 0.01;
  vec3 dispNormal = normal * (displacement + noise);
  return position + dispNormal;
}

void main() {
  vPosition = position;
  vNormal = normal;
  vUv = uv;
  float dist = length(position.xy);
  vDist = dist;
  vec3 deformedPosition = displaceSurface(position, normal, uLensRadius, uTime);
  vec4 modelViewPosition = modelViewMatrix * vec4(deformedPosition, 1.0);
  vec3 viewVector = -modelViewPosition.xyz;
  vNormal = normalize((normalMatrix * normal));
  vec3 reflection = reflect(normalize(viewVector), vNormal);
  vViewPosition = reflection;
  gl_Position = projectionMatrix * modelViewPosition;
}
`;

const refractionFrag = `
precision highp float;

uniform sampler2D uTexture;
uniform float uLensRadius;
uniform float uRefractionPower;
uniform float uChromaticAberration;
uniform float uTime;
uniform vec3 uCameraPos;
uniform vec3 uCameraForward;
uniform vec3 uSparkleParams;

varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;
varying vec3 vViewPosition;
varying float vDist;

vec3 refract3(vec3 viewDirection, vec3 normal, float ior) {
  float cosTheta = dot(viewDirection, normal);
  float sinTheta = sqrt(1.0 - cosTheta * cosTheta);
  float sinTheta2 = sinTheta * sinTheta;
  float cosTheta2 = sqrt(1.0 - sinTheta2 / (ior * ior));
  vec3 direction = (viewDirection - cosTheta * normal) / ior;
  direction += (cosTheta2 - sqrt(max(0.0, 1.0 - dot(direction, direction)))) * normal;
  return direction;
}

vec3 chromaticRefraction(vec3 viewDirection, vec3 normal, float refractionPower, float chromaticAberration) {
  float ior = mix(1.0, 2.0, refractionPower);
  vec3 refracted;
  refracted.r = refract3(viewDirection, normal, ior + chromaticAberration * 1.0).r;
  refracted.g = refract3(viewDirection, normal, ior + chromaticAberration * 2.0).g;
  refracted.b = refract3(viewDirection, normal, ior + chromaticAberration * 3.0).b;
  return refracted;
}

float sparkleNoise(vec2 uv, float time) {
  return fract(sin(dot(uv, vec2(12.9898, 78.233) * 2.0)) * 43758.5453);
}

float sparkles(vec3 viewDirection, vec3 normal, float time, vec3 params) {
  float dotProduct = pow(1.0 - max(0.0, dot(viewDirection, -normal)), params.x);
  float angle = atan(viewDirection.y, viewDirection.x);
  float angularFreq = params.y;
  float radialFreq = 20.0;
  float sparkle = pow(sin(angle * angularFreq + time) * cos(atan(viewDirection.z, length(viewDirection.xy)) * radialFreq - time), 6.0);
  sparkle *= smoothstep(0.0, 0.1, dotProduct);
  sparkle *= params.z;
  return sparkle * 10.0;
}

void main() {
  float ior = mix(1.0, 2.0, uRefractionPower);
  float chromaticAberration = uChromaticAberration * 0.1;

  vec3 backgroundColor = vec3(0.969, 0.969, 0.961);

  vec3 viewDir = normalize(vViewPosition);
  vec3 aberration = chromaticRefraction(viewDir, vNormal, ior, chromaticAberration);
  vec2 refractedUV = vUv + aberration.rg * 0.05;

  vec3 aberrationColor = vec3(
    texture2D(uTexture, refractedUV + vec2(0.003, 0.0)).r,
    texture2D(uTexture, refractedUV).g,
    texture2D(uTexture, refractedUV - vec2(0.003, 0.0)).b
  ).rgb;

  if (aberrationColor == vec3(0.0)) {
    aberrationColor = backgroundColor;
  }

  float fresnel = pow(1.0 - max(0.0, dot(-viewDir, vNormal)), 5.0);
  vec3 finalColor = mix(backgroundColor, aberrationColor, fresnel * 0.6);

  float sparkleIntensity = sparkles(viewDir, vNormal, uTime, uSparkleParams);
  finalColor += vec3(sparkleIntensity) * 0.15;

  float edgeGlow = smoothstep(0.8, 1.2, vDist / uLensRadius);
  vec3 rimColor = vec3(0.878, 0.42, 0.353);
  finalColor += rimColor * edgeGlow * fresnel * 0.3;

  float alpha = 1.0 - edgeGlow * 0.3;

  gl_FragColor = vec4(finalColor, alpha);
}
`;

const backgroundFrag = `
precision highp float;
varying vec2 vUv;
uniform vec3 uColor;

float random(vec2 co) {
  return fract(sin(dot(co, vec2(12.9898, 78.233))) * 43758.5453);
}

void main() {
  float dist = distance(vUv, vec2(0.5));
  float strength = dist * 2.0;
  strength *= smoothstep(0.5, 0.0, dist);
  float noise = random(vUv * vec2(1000.0)) * 0.02;
  vec3 color = mix(uColor, vec3(0.9), strength + noise);
  gl_FragColor = vec4(color, 1.0);
}
`;

const backgroundVert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

function LensMesh() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  const lensMaterial = useMemo(() => {
    const tex = new THREE.WebGLRenderTarget(512, 512);
    return new THREE.ShaderMaterial({
      vertexShader: refractionVert,
      fragmentShader: refractionFrag,
      uniforms: {
        uTexture: { value: tex.texture },
        uLensRadius: { value: 1.3 },
        uRefractionPower: { value: 0.6 },
        uChromaticAberration: { value: 0.02 },
        uTime: { value: 0 },
        uCameraPos: { value: new THREE.Vector3() },
        uCameraForward: { value: new THREE.Vector3() },
        uSparkleParams: { value: new THREE.Vector3(0.25, 0.4, 0.01) },
      },
      transparent: true,
      side: THREE.DoubleSide,
    });
  }, []);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.25;
      lensMaterial.uniforms.uTime.value = state.clock.elapsedTime;
      lensMaterial.uniforms.uCameraPos.value.copy(camera.position);
      const forward = new THREE.Vector3(0, 0, -1);
      forward.applyQuaternion(camera.quaternion);
      lensMaterial.uniforms.uCameraForward.value.copy(forward);
    }
  });

  return (
    <mesh ref={meshRef} material={lensMaterial}>
      <circleGeometry args={[1.8, 64]} />
    </mesh>
  );
}

function BackgroundPlane() {
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: backgroundVert,
      fragmentShader: backgroundFrag,
      uniforms: {
        uColor: { value: new THREE.Vector3(0.97, 0.97, 0.96) },
      },
    });
  }, []);

  return (
    <mesh material={material} position={[0, 0, -3]}>
      <planeGeometry args={[20, 20]} />
    </mesh>
  );
}

export default function LensEffect() {
  return (
    <div style={{ position: 'absolute', top: 0, right: 0, width: '55%', height: '100%' }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ width: '100%', height: '100%' }}
      >
        <BackgroundPlane />
        <LensMesh />
      </Canvas>
    </div>
  );
}
