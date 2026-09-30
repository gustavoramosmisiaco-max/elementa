/**
 * ELEMENTA - Shaders GLSL del núcleo atómico (brillo de energía animado)
 *
 * Se guardan como cadenas de texto para que funcionen sin servidor (file://)
 * y offline, igual que el resto de la app.
 *
 * Uniforms:
 *   uTime       tiempo en segundos (lo avanza Atom3D en cada fotograma)
 *   uColor      color de la familia química del elemento
 *   uIntensity  brillo general
 *   uPulseSpeed velocidad del latido (más rápido en elementos radiactivos)
 *   uIsHalo     0 = capa de energía sobre el núcleo, 1 = halo exterior (corona)
 */
(function(window) {
  'use strict';

  // vertexShader.glsl — basado en el shader original del proyecto.
  // Se añaden vNormal y vViewDir para calcular el brillo de borde (efecto Fresnel).
  const vertexShader = /* glsl */ `
    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewDir;

    void main() {
        vUv = uv;
        vPosition = position;
        vNormal = normalize(normalMatrix * normal);

        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        vViewDir = -mvPosition.xyz;

        // Proyecta la posición del vértice en la pantalla de la app
        gl_Position = projectionMatrix * mvPosition;
    }
  `;

  // fragmentShader.glsl — plasma de energía que fluye y late alrededor del núcleo
  const fragmentShader = /* glsl */ `
    uniform float uTime;
    uniform vec3 uColor;
    uniform float uIntensity;
    uniform float uPulseSpeed;
    uniform float uIsHalo;

    varying vec3 vPosition;
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vViewDir;

    // Ruido 3D suave (value noise) para el movimiento del plasma
    float hash(vec3 p) {
        p = fract(p * 0.3183099 + 0.1);
        p *= 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
    }

    float noise(vec3 p) {
        vec3 i = floor(p);
        vec3 f = fract(p);
        f = f * f * (3.0 - 2.0 * f);
        return mix(
            mix(mix(hash(i + vec3(0.0, 0.0, 0.0)), hash(i + vec3(1.0, 0.0, 0.0)), f.x),
                mix(hash(i + vec3(0.0, 1.0, 0.0)), hash(i + vec3(1.0, 1.0, 0.0)), f.x), f.y),
            mix(mix(hash(i + vec3(0.0, 0.0, 1.0)), hash(i + vec3(1.0, 0.0, 1.0)), f.x),
                mix(hash(i + vec3(0.0, 1.0, 1.0)), hash(i + vec3(1.0, 1.0, 1.0)), f.x), f.y),
            f.z);
    }

    float fbm(vec3 p) {
        float value = 0.0;
        float amplitude = 0.5;
        for (int i = 0; i < 4; i++) {
            value += amplitude * noise(p);
            p *= 2.03;
            amplitude *= 0.5;
        }
        return value;
    }

    void main() {
        vec3 normal = normalize(vNormal);
        vec3 viewDir = normalize(vViewDir);
        float facing = abs(dot(normal, viewDir));

        // Latido de energía
        float pulse = 0.72 + 0.28 * sin(uTime * uPulseSpeed);

        // Plasma que fluye sobre la superficie (usa la posición del vértice)
        vec3 p = normalize(vPosition) * 2.2 + vec3(0.0, uTime * 0.35, uTime * 0.22);
        float plasma = fbm(p);

        // Ondas de energía que suben por la esfera (usa las coordenadas UV)
        float waves = 0.5 + 0.5 * sin(vUv.y * 38.0 - uTime * 3.2 + plasma * 7.0);

        float energy = clamp(plasma * 0.75 + waves * 0.35, 0.0, 1.0);
        float alpha;

        if (uIsHalo > 0.5) {
            // Corona exterior: brilla junto al núcleo y se desvanece hacia fuera
            alpha = pow(facing, 2.6) * (0.35 + 0.35 * energy) * pulse;
        } else {
            // Capa de energía: transparente en el centro (se ven protones y neutrones)
            // y brillante en el borde (Fresnel)
            float rim = pow(1.0 - facing, 2.2);
            alpha = rim * (0.55 + 0.9 * energy) * pulse + energy * 0.08;
        }

        vec3 hot = mix(uColor, vec3(1.0), 0.45 * energy * pulse);
        vec3 color = hot * (0.75 + 0.6 * energy);

        gl_FragColor = vec4(color, clamp(alpha * uIntensity, 0.0, 1.0));
    }
  `;

  window.NucleusShaders = { vertexShader, fragmentShader };
})(typeof window !== 'undefined' ? window : global);
