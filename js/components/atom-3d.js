/**
 * ELEMENTA - Visualizador Atómico 3D con Three.js
 */
(function(window) {
  'use strict';

  class Atom3D {
    constructor(containerId, options = {}) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.options = Object.assign({
        autoRotate: true,
        rotationSpeed: 0.005,
        electronSpeed: 0.03
      }, options);

      this.element = null;
      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.animationFrameId = null;
      this.atomGroup = null;
      this.shells = [];
      this.electrons = [];
      this.isMouseDown = false;
      this.prevMousePos = { x: 0, y: 0 };
      this.touchDistance = 0;

      this.init();
    }

    init() {
      if (!this.container || typeof THREE === 'undefined') return;

      this.container.innerHTML = '';
      const width = this.container.clientWidth || 360;
      const height = this.container.clientHeight || 360;

      // Scene
      this.scene = new THREE.Scene();

      // Camera
      this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
      this.camera.position.z = 28;

      // Renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.renderer.setClearColor(0x000000, 0);
      this.container.appendChild(this.renderer.domElement);

      // Lights
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
      this.scene.add(ambientLight);

      const dirLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
      dirLight.position.set(10, 20, 15);
      this.scene.add(dirLight);

      const pointLight = new THREE.PointLight(0xff4b4b, 2.0, 50);
      pointLight.position.set(0, 0, 0);
      this.scene.add(pointLight);

      // Atom Root Group
      this.atomGroup = new THREE.Group();
      this.scene.add(this.atomGroup);

      this.setupControls();
      this.setupResize();
    }

    setupControls() {
      const el = this.renderer.domElement;

      el.addEventListener('mousedown', (e) => {
        this.isMouseDown = true;
        this.prevMousePos = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener('mouseup', () => {
        this.isMouseDown = false;
      });

      window.addEventListener('mousemove', (e) => {
        if (!this.isMouseDown || !this.atomGroup) return;
        const deltaX = e.clientX - this.prevMousePos.x;
        const deltaY = e.clientY - this.prevMousePos.y;
        this.atomGroup.rotation.y += deltaX * 0.008;
        this.atomGroup.rotation.x += deltaY * 0.008;
        this.prevMousePos = { x: e.clientX, y: e.clientY };
      });

      el.addEventListener('wheel', (e) => {
        e.preventDefault();
        this.camera.position.z += e.deltaY * 0.02;
        this.camera.position.z = Math.max(12, Math.min(60, this.camera.position.z));
      }, { passive: false });

      // Touch events
      el.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          this.isMouseDown = true;
          this.prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else if (e.touches.length === 2) {
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          this.touchDistance = Math.sqrt(dx * dx + dy * dy);
        }
      });

      el.addEventListener('touchmove', (e) => {
        if (e.touches.length === 1 && this.isMouseDown && this.atomGroup) {
          const deltaX = e.touches[0].clientX - this.prevMousePos.x;
          const deltaY = e.touches[0].clientY - this.prevMousePos.y;
          this.atomGroup.rotation.y += deltaX * 0.01;
          this.atomGroup.rotation.x += deltaY * 0.01;
          this.prevMousePos = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else if (e.touches.length === 2) {
          const dx = e.touches[0].clientX - e.touches[1].clientX;
          const dy = e.touches[0].clientY - e.touches[1].clientY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const diff = this.touchDistance - dist;
          this.camera.position.z += diff * 0.05;
          this.camera.position.z = Math.max(12, Math.min(60, this.camera.position.z));
          this.touchDistance = dist;
        }
      });

      el.addEventListener('touchend', () => {
        this.isMouseDown = false;
      });
    }

    setupResize() {
      this.resizeObserver = new ResizeObserver(() => {
        if (!this.container || !this.renderer || !this.camera) return;
        const width = this.container.clientWidth || 360;
        const height = this.container.clientHeight || 360;
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(width, height);
      });
      this.resizeObserver.observe(this.container);
    }

    setElement(element) {
      if (!element || typeof THREE === 'undefined') return;
      this.element = element;

      // Clear previous atom
      while (this.atomGroup.children.length > 0) {
        const obj = this.atomGroup.children[0];
        this.atomGroup.remove(obj);
        // Libera memoria de la GPU (geometrías y materiales/shaders del átomo anterior)
        obj.traverse(child => {
          if (child.geometry) child.geometry.dispose();
          if (child.material) child.material.dispose();
        });
      }
      this.shells = [];
      this.electrons = [];

      this.buildNucleus(element);
      this.buildOrbits(element);

      if (!this.animationFrameId) {
        this.animate();
      }
    }

    buildNucleus(element) {
      const protons = element.number;
      const neutrons = Math.round(Number(element.mass || protons * 2)) - protons;
      const totalNucleons = Math.min(60, protons + Math.max(0, neutrons)); // Capped for performance/aesthetics

      const nucleusGroup = new THREE.Group();
      const protonMat = new THREE.MeshPhongMaterial({
        color: 0xff3b3b,
        emissive: 0x991b1b,
        shininess: 90
      });
      const neutronMat = new THREE.MeshPhongMaterial({
        color: 0x4a90e2,
        emissive: 0x1e3a8a,
        shininess: 90
      });

      const sphereGeo = new THREE.SphereGeometry(0.55, 16, 16);

      // Fibonacci sphere packing distribution for clustered nucleus
      const goldenRatio = (1 + Math.sqrt(5)) / 2;
      const nucleusRadius = Math.max(1.2, Math.pow(totalNucleons, 1 / 3) * 0.9);

      for (let i = 0; i < totalNucleons; i++) {
        const theta = 2 * Math.PI * i / goldenRatio;
        const phi = Math.acos(1 - 2 * (i + 0.5) / totalNucleons);
        const r = nucleusRadius * (0.4 + 0.6 * Math.random());

        const x = r * Math.sin(phi) * Math.cos(theta);
        const y = r * Math.sin(phi) * Math.sin(theta);
        const z = r * Math.cos(phi);

        const isProton = i % 2 === 0;
        const sphere = new THREE.Mesh(sphereGeo, isProton ? protonMat : neutronMat);
        sphere.position.set(x, y, z);
        nucleusGroup.add(sphere);
      }

      this.buildNucleusGlow(element, nucleusGroup, nucleusRadius);

      this.atomGroup.add(nucleusGroup);
    }

    /** Brillo de energía animado del núcleo (shaders GLSL en js/shaders/nucleus-shaders.js) */
    buildNucleusGlow(element, nucleusGroup, nucleusRadius) {
      this.nucleusUniforms = [];

      if (!window.NucleusShaders) {
        // Respaldo sin shaders: halo plano como antes
        const glowMat = new THREE.MeshBasicMaterial({ color: 0xff6b6b, transparent: true, opacity: 0.25 });
        nucleusGroup.add(new THREE.Mesh(new THREE.SphereGeometry(nucleusRadius * 1.3, 24, 24), glowMat));
        return;
      }

      const catMeta = (window.CATEGORY_META || {})[element.category] || { color: '#ff6b6b' };
      const n = element.number;
      const isRadioactive = n >= 84 || n === 43 || n === 61;

      const makeLayer = (radius, isHalo, intensity) => {
        const uniforms = {
          uTime: { value: 0 },
          uColor: { value: new THREE.Color(catMeta.color) },
          uIntensity: { value: intensity },
          uPulseSpeed: { value: isRadioactive ? 5.5 : 2.2 },
          uIsHalo: { value: isHalo ? 1.0 : 0.0 }
        };
        const material = new THREE.ShaderMaterial({
          uniforms,
          vertexShader: window.NucleusShaders.vertexShader,
          fragmentShader: window.NucleusShaders.fragmentShader,
          transparent: true,
          depthWrite: false,
          side: isHalo ? THREE.BackSide : THREE.FrontSide
        });
        this.nucleusUniforms.push(uniforms);
        const mesh = new THREE.Mesh(new THREE.SphereGeometry(radius, 48, 48), material);
        mesh.renderOrder = isHalo ? 1 : 2;
        return mesh;
      };

      // Corona exterior + capa de energía sobre los nucleones
      nucleusGroup.add(makeLayer(nucleusRadius * 2.1, true, isRadioactive ? 1.25 : 1.0));
      nucleusGroup.add(makeLayer(nucleusRadius * 1.35, false, isRadioactive ? 1.3 : 1.0));
    }

    buildOrbits(element) {
      const electronCounts = element.electronsPerShell || [1];
      const electronGeo = new THREE.SphereGeometry(0.32, 16, 16);
      const electronMat = new THREE.MeshBasicMaterial({ color: 0x00f0ff });

      const baseRadius = 4.2;
      const radiusStep = 1.9;

      electronCounts.forEach((count, shellIdx) => {
        const radius = baseRadius + shellIdx * radiusStep;
        const orbitGroup = new THREE.Group();

        // Aesthetic 3D tilted orientation for each quantum shell
        orbitGroup.rotation.x = (shellIdx * 0.62) + (shellIdx % 2 ? 0.3 : -0.2);
        orbitGroup.rotation.y = (shellIdx * 0.45);
        orbitGroup.rotation.z = (shellIdx * 0.35);

        // Ring line
        const ringGeo = new THREE.RingGeometry(radius - 0.03, radius + 0.03, 64);
        const ringMat = new THREE.MeshBasicMaterial({
          color: 0x64748b,
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.35
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2;
        orbitGroup.add(ring);

        // Orbiting electrons
        const shellElectrons = [];
        const step = (Math.PI * 2) / count;

        for (let e = 0; e < count; e++) {
          const electron = new THREE.Mesh(electronGeo, electronMat);
          const initialAngle = e * step;
          electron.position.set(
            radius * Math.cos(initialAngle),
            0,
            radius * Math.sin(initialAngle)
          );

          orbitGroup.add(electron);
          shellElectrons.push({
            mesh: electron,
            radius: radius,
            angle: initialAngle,
            speed: (0.025 + (electronCounts.length - shellIdx) * 0.008) * (shellIdx % 2 === 0 ? 1 : -1)
          });
        }

        this.atomGroup.add(orbitGroup);
        this.shells.push(orbitGroup);
        this.electrons.push(...shellElectrons);
      });
    }

    animate() {
      const startTime = performance.now();
      const loop = () => {
        // Avanza la animación del shader del núcleo
        const t = (performance.now() - startTime) / 1000;
        (this.nucleusUniforms || []).forEach(u => { u.uTime.value = t; });

        if (this.options.autoRotate && !this.isMouseDown && this.atomGroup) {
          this.atomGroup.rotation.y += this.options.rotationSpeed;
        }

        // Update orbiting electrons
        this.electrons.forEach(el => {
          el.angle += el.speed;
          el.mesh.position.x = el.radius * Math.cos(el.angle);
          el.mesh.position.z = el.radius * Math.sin(el.angle);
        });

        if (this.renderer && this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera);
        }

        this.animationFrameId = requestAnimationFrame(loop);
      };

      this.animationFrameId = requestAnimationFrame(loop);
    }

    resetView() {
      if (this.camera && this.atomGroup) {
        this.camera.position.set(0, 0, 28);
        this.atomGroup.rotation.set(0, 0, 0);
      }
    }

    destroy() {
      if (this.animationFrameId) {
        cancelAnimationFrame(this.animationFrameId);
        this.animationFrameId = null;
      }
      if (this.resizeObserver) {
        this.resizeObserver.disconnect();
      }
      if (this.renderer && this.renderer.domElement && this.renderer.domElement.parentNode) {
        this.renderer.domElement.parentNode.removeChild(this.renderer.domElement);
      }
    }
  }

  window.Atom3D = Atom3D;
})(typeof window !== 'undefined' ? window : global);
