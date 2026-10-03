/**
 * ELEMENTA - Visualizador 3D de la Tabla Periódica (Plano, Hélice y Esfera)
 */
(function(window) {
  'use strict';

  class Table3D {
    constructor(containerId, options = {}) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.options = Object.assign({
        layout: 'grid', // 'grid', 'helix', 'sphere'
        onElementClick: null
      }, options);

      this.scene = null;
      this.camera = null;
      this.renderer = null;
      this.animationFrameId = null;
      this.objects = [];
      this.targets = { grid: [], helix: [], sphere: [] };
      this.isMouseDown = false;
      this.prevMousePos = { x: 0, y: 0 };
      this.currentLayout = 'grid';

      this.init();
    }

    init() {
      if (!this.container || typeof THREE === 'undefined') return;
      this.container.innerHTML = '';

      // Controls Bar
      const controlsBar = document.createElement('div');
      controlsBar.className = 'table3d-controls-bar';
      controlsBar.innerHTML = `
        <div class="table3d-btn-group">
          <button class="t3d-btn active" data-layout="grid">📐 Plano 3D</button>
          <button class="t3d-btn" data-layout="helix">🧬 Hélice Periódica</button>
          <button class="t3d-btn" data-layout="sphere">🌐 Esfera Atómica</button>
          <button class="t3d-btn" id="btnResetCamera3D">🔄 Centrar</button>
        </div>
        <div class="table3d-hint"><span class="hint-pointer">🖱️ Arrastra para rotar | Rueda para zoom | Clic en elemento para ver ficha</span><span class="hint-touch">👆 Arrastra para rotar · Pellizca para zoom · Toca un elemento para ver su ficha</span></div>
      `;
      this.container.appendChild(controlsBar);

      // Canvas Container
      this.canvasWrapper = document.createElement('div');
      this.canvasWrapper.className = 'table3d-canvas-wrapper';
      this.canvasWrapper.style.position = 'relative';
      this.canvasWrapper.style.width = '100%';
      this.canvasWrapper.style.height = 'clamp(360px, 68vh, 620px)';
      this.canvasWrapper.style.overflow = 'hidden';
      this.canvasWrapper.style.borderRadius = '12px';
      this.canvasWrapper.style.background = 'radial-gradient(circle at center, #111827 0%, #030712 100%)';
      this.container.appendChild(this.canvasWrapper);

      const width = this.canvasWrapper.clientWidth || 900;
      const height = this.canvasWrapper.clientHeight || 620;

      // Scene
      this.scene = new THREE.Scene();
      this.rootGroup = new THREE.Group();
      this.scene.add(this.rootGroup);

      // Camera
      this.camera = new THREE.PerspectiveCamera(40, width / height, 1, 10000);
      this.camera.position.z = this.fitDistance(width / height);

      // Renderer
      this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      this.canvasWrapper.appendChild(this.renderer.domElement);

      // Raycaster for clicking elements
      this.raycaster = new THREE.Raycaster();
      this.mouse = new THREE.Vector2();

      this.buildElements3D();
      this.calculateLayouts();
      this.setupControls();
      this.setupTouchAndResize();
      this.transform(this.targets.grid, 2000);
      this.animate();
    }

    /** Distancia de cámara para que la tabla completa (≈2600 × 1750 u) quepa en el lienzo */
    fitDistance(aspect) {
      const halfFov = THREE.MathUtils.degToRad(this.camera ? this.camera.fov / 2 : 20);
      const byWidth = 1300 / (Math.tan(halfFov) * aspect);
      const byHeight = 875 / Math.tan(halfFov);
      return Math.max(800, Math.min(9000, Math.max(byWidth, byHeight) * 1.05));
    }

    /** Gestos táctiles (rotar con un dedo, pellizcar para zoom) y ajuste al cambiar de tamaño */
    setupTouchAndResize() {
      const el = this.renderer.domElement;
      let last = null;
      let pinch = 0;
      let moved = false;

      el.style.touchAction = 'none';
      el.addEventListener('touchstart', (e) => {
        moved = false;
        if (e.touches.length === 1) {
          this.isMouseDown = true;
          last = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        } else if (e.touches.length === 2) {
          pinch = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
        }
      }, { passive: true });

      el.addEventListener('touchmove', (e) => {
        e.preventDefault();
        moved = true;
        if (e.touches.length === 1 && last) {
          const t = e.touches[0];
          this.rootGroup.rotation.y += (t.clientX - last.x) * 0.006;
          this.rootGroup.rotation.x += (t.clientY - last.y) * 0.006;
          last = { x: t.clientX, y: t.clientY };
        } else if (e.touches.length === 2) {
          const d = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
          this.camera.position.z = Math.max(800, Math.min(9000, this.camera.position.z * (pinch / d)));
          pinch = d;
        }
      }, { passive: false });

      el.addEventListener('touchend', (e) => {
        this.isMouseDown = false;
        last = null;
        // Un arrastre no debe abrir la ficha del elemento que quede bajo el dedo
        if (moved) e.preventDefault();
      });

      if (typeof ResizeObserver !== 'undefined') {
        let prevAspect = this.camera.aspect;
        this.resizeObserver = new ResizeObserver(() => {
          const w = this.canvasWrapper.clientWidth;
          const h = this.canvasWrapper.clientHeight;
          if (!w || !h) return;
          const aspect = w / h;
          // Mantiene el mismo encuadre relativo si el usuario ya había hecho zoom
          const ratio = this.camera.position.z / this.fitDistance(prevAspect);
          this.camera.aspect = aspect;
          this.camera.updateProjectionMatrix();
          this.renderer.setSize(w, h);
          this.camera.position.z = this.fitDistance(aspect) * ratio;
          prevAspect = aspect;
        });
        this.resizeObserver.observe(this.canvasWrapper);
      }
    }

    createCardTexture(element) {
      const canvas = document.createElement('canvas');
      canvas.width = 160;
      canvas.height = 200;
      const ctx = canvas.getContext('2d');
      const catMeta = window.CATEGORY_META[element.category] || { color: '#00f0ff' };

      // Background
      ctx.fillStyle = 'rgba(15, 23, 42, 0.9)';
      ctx.roundRect ? ctx.roundRect(0, 0, 160, 200, 12) : ctx.rect(0, 0, 160, 200);
      ctx.fill();

      // Border
      ctx.strokeStyle = catMeta.color;
      ctx.lineWidth = 4;
      ctx.stroke();

      // Number
      ctx.fillStyle = '#94a3b8';
      ctx.font = 'bold 20px "JetBrains Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText(element.number.toString(), 14, 30);

      // Mass
      ctx.fillStyle = '#64748b';
      ctx.font = '14px "JetBrains Mono", monospace';
      ctx.textAlign = 'right';
      ctx.fillText(element.mass.toString(), 146, 30);

      // Symbol
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 58px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(element.symbol, 80, 105);

      // Name
      ctx.fillStyle = catMeta.color;
      ctx.font = 'bold 18px "Inter", sans-serif';
      ctx.fillText(element.name, 80, 145);

      // Category / Shells
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '12px "Inter", sans-serif';
      ctx.fillText(element.categoryName, 80, 175);

      const texture = new THREE.CanvasTexture(canvas);
      texture.minFilter = THREE.LinearFilter;
      return texture;
    }

    buildElements3D() {
      const elements = window.ELEMENTS_DATA || [];
      const planeGeo = new THREE.PlaneGeometry(120, 150);

      elements.forEach((el) => {
        const texture = this.createCardTexture(el);
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          side: THREE.DoubleSide,
          transparent: true
        });

        const mesh = new THREE.Mesh(planeGeo, material);
        mesh.userData = { element: el };

        mesh.position.x = Math.random() * 4000 - 2000;
        mesh.position.y = Math.random() * 4000 - 2000;
        mesh.position.z = Math.random() * 4000 - 2000;

        this.rootGroup.add(mesh);
        this.objects.push(mesh);
      });
    }

    calculateLayouts() {
      const elements = window.ELEMENTS_DATA || [];

      // 1. Grid (Standard Periodic Table)
      elements.forEach(el => {
        let col = el.group || 1;
        let row = el.period;

        // Position Lanthanides (57-71) and Actinides (89-103) below
        if (el.number >= 57 && el.number <= 71) {
          col = el.number - 57 + 3;
          row = 8.5;
        } else if (el.number >= 89 && el.number <= 103) {
          col = el.number - 89 + 3;
          row = 9.8;
        }

        const object = new THREE.Object3D();
        object.position.x = (col * 140) - 1330;
        object.position.y = -(row * 170) + 900;
        object.position.z = 0;
        this.targets.grid.push(object);
      });

      // 2. Helix (Cylindrical spiral)
      const vector = new THREE.Vector3();
      elements.forEach((el, i) => {
        const theta = i * 0.22 + Math.PI;
        const y = -(i * 12) + 650;

        const object = new THREE.Object3D();
        object.position.setFromCylindricalCoords(900, theta, y);

        vector.x = object.position.x * 2;
        vector.y = object.position.y;
        vector.z = object.position.z * 2;
        object.lookAt(vector);

        this.targets.helix.push(object);
      });

      // 3. Sphere
      elements.forEach((el, i) => {
        const phi = Math.acos(-1 + (2 * i) / elements.length);
        const theta = Math.sqrt(elements.length * Math.PI) * phi;

        const object = new THREE.Object3D();
        object.position.setFromSphericalCoords(950, phi, theta);

        vector.copy(object.position).multiplyScalar(2);
        object.lookAt(vector);

        this.targets.sphere.push(object);
      });
    }

    transform(targets, duration = 1200) {
      const startTime = performance.now();
      const initialPositions = this.objects.map(obj => ({
        pos: obj.position.clone(),
        rot: obj.rotation.clone()
      }));

      const step = (now) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / duration);
        // Ease-out cubic
        const ease = 1 - Math.pow(1 - progress, 3);

        this.objects.forEach((obj, i) => {
          const target = targets[i];
          const initial = initialPositions[i];

          obj.position.lerpVectors(initial.pos, target.position, ease);
          obj.quaternion.slerpQuaternions(
            new THREE.Quaternion().setFromEuler(initial.rot),
            target.quaternion,
            ease
          );
        });

        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };

      requestAnimationFrame(step);
    }

    setupControls() {
      const el = this.renderer.domElement;

      // Layout Switch Buttons
      const btns = this.container.querySelectorAll('.t3d-btn[data-layout]');
      btns.forEach(btn => {
        btn.addEventListener('click', () => {
          btns.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const layout = btn.getAttribute('data-layout');
          this.currentLayout = layout;
          this.transform(this.targets[layout], 1400);
        });
      });

      const resetBtn = this.container.querySelector('#btnResetCamera3D');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          this.camera.position.set(0, 0, this.fitDistance(this.camera.aspect));
          this.rootGroup.rotation.set(0, 0, 0);
        });
      }

      // Drag Rotation
      el.addEventListener('mousedown', (e) => {
        this.isMouseDown = true;
        this.prevMousePos = { x: e.clientX, y: e.clientY };
      });

      window.addEventListener('mouseup', () => {
        this.isMouseDown = false;
      });

      window.addEventListener('mousemove', (e) => {
        if (!this.isMouseDown || !this.rootGroup) return;
        const deltaX = e.clientX - this.prevMousePos.x;
        const deltaY = e.clientY - this.prevMousePos.y;
        this.rootGroup.rotation.y += deltaX * 0.005;
        this.rootGroup.rotation.x += deltaY * 0.005;
        this.prevMousePos = { x: e.clientX, y: e.clientY };
      });

      // Zoom
      el.addEventListener('wheel', (e) => {
        e.preventDefault();
        this.camera.position.z += e.deltaY * 1.5;
        this.camera.position.z = Math.max(800, Math.min(9000, this.camera.position.z));
      }, { passive: false });

      // Click to open element modal
      el.addEventListener('click', (e) => {
        const rect = el.getBoundingClientRect();
        this.mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        this.mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        this.raycaster.setFromCamera(this.mouse, this.camera);
        const intersects = this.raycaster.intersectObjects(this.objects);

        if (intersects.length > 0) {
          const clickedMesh = intersects[0].object;
          if (clickedMesh.userData && clickedMesh.userData.element) {
            if (typeof this.options.onElementClick === 'function') {
              this.options.onElementClick(clickedMesh.userData.element);
            } else if (window.ElementModal && window.ElementModal.show) {
              window.ElementModal.show(clickedMesh.userData.element);
            }
          }
        }
      });
    }

    animate() {
      const loop = () => {
        if (this.currentLayout === 'helix' || this.currentLayout === 'sphere') {
          if (!this.isMouseDown && this.rootGroup) {
            this.rootGroup.rotation.y += 0.002;
          }
        }

        if (this.renderer && this.scene && this.camera) {
          this.renderer.render(this.scene, this.camera);
        }

        this.animationFrameId = requestAnimationFrame(loop);
      };

      this.animationFrameId = requestAnimationFrame(loop);
    }
  }

  window.Table3D = Table3D;
})(typeof window !== 'undefined' ? window : global);
