/**
 * ELEMENTA - Modelo Atómico de Bohr Interactivo 2D
 */
(function(window) {
  'use strict';

  class BohrModel {
    constructor(containerId, options = {}) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.options = Object.assign({
        speed: 1,
        autoAnimate: true,
        shellNames: ['K (n=1)', 'L (n=2)', 'M (n=3)', 'N (n=4)', 'O (n=5)', 'P (n=6)', 'Q (n=7)'],
        electronColor: '#00f0ff',
        shellColor: 'rgba(255, 255, 255, 0.18)',
        shellActiveColor: 'rgba(0, 240, 255, 0.5)',
        nucleusColor: '#ff4b4b'
      }, options);

      this.element = null;
      this.animationId = null;
      this.angles = [];
      this.hoveredShell = null;
      this.isPaused = false;
      this.speedMultiplier = 1;

      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';

      this.wrapper = document.createElement('div');
      this.wrapper.className = 'bohr-wrapper';
      this.wrapper.style.position = 'relative';
      this.wrapper.style.width = '100%';
      this.wrapper.style.height = '100%';
      this.wrapper.style.display = 'flex';
      this.wrapper.style.flexDirection = 'column';
      this.wrapper.style.alignItems = 'center';
      this.wrapper.style.justifyContent = 'center';

      this.canvas = document.createElement('canvas');
      this.canvas.className = 'bohr-canvas';
      this.canvas.style.display = 'block';
      this.canvas.style.maxWidth = '100%';
      this.canvas.style.maxHeight = '100%';
      this.ctx = this.canvas.getContext('2d');

      this.tooltip = document.createElement('div');
      this.tooltip.className = 'bohr-tooltip';
      this.tooltip.style.position = 'absolute';
      this.tooltip.style.pointerEvents = 'none';
      this.tooltip.style.display = 'none';
      this.tooltip.style.background = 'rgba(15, 23, 42, 0.92)';
      this.tooltip.style.color = '#fff';
      this.tooltip.style.padding = '6px 12px';
      this.tooltip.style.borderRadius = '6px';
      this.tooltip.style.fontSize = '12px';
      this.tooltip.style.border = '1px solid rgba(0, 240, 255, 0.4)';
      this.tooltip.style.boxShadow = '0 4px 12px rgba(0,0,0,0.5)';
      this.tooltip.style.zIndex = '10';

      this.wrapper.appendChild(this.canvas);
      this.wrapper.appendChild(this.tooltip);
      this.container.appendChild(this.wrapper);

      this.setupEvents();
      this.resize();
    }

    setupEvents() {
      window.addEventListener('resize', () => this.resize());

      this.canvas.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const x = (e.clientX - rect.left) * (this.canvas.width / rect.width);
        const y = (e.clientY - rect.top) * (this.canvas.height / rect.height);
        this.checkHover(x, y, e.clientX - rect.left, e.clientY - rect.top);
      });

      this.canvas.addEventListener('mouseleave', () => {
        this.hoveredShell = null;
        this.tooltip.style.display = 'none';
      });
    }

    resize() {
      if (!this.container) return;
      const rect = this.container.getBoundingClientRect();
      const size = Math.min(rect.width || 320, rect.height || 320);
      const dpr = window.devicePixelRatio || 1;
      
      this.width = size;
      this.height = size;
      this.canvas.width = size * dpr;
      this.canvas.height = size * dpr;
      this.canvas.style.width = `${size}px`;
      this.canvas.style.height = `${size}px`;
      this.ctx.scale(dpr, dpr);
    }

    setElement(element) {
      this.element = element;
      const shells = element.electronsPerShell || [1];
      this.angles = shells.map(() => 0);
      this.resize();
      this.draw();
      if (this.options.autoAnimate && !this.animationId) {
        this.start();
      }
    }

    setSpeed(speed) {
      this.speedMultiplier = Math.max(0.1, Math.min(5, speed));
    }

    togglePause() {
      this.isPaused = !this.isPaused;
      return this.isPaused;
    }

    start() {
      const animate = () => {
        if (!this.isPaused && this.element) {
          const shells = this.element.electronsPerShell || [1];
          shells.forEach((_, idx) => {
            // Inner shells move faster than outer shells (Keplerian/quantum speed illusion)
            const speed = (shells.length - idx * 0.4) * 0.015 * this.speedMultiplier;
            this.angles[idx] = (this.angles[idx] || 0) + (idx % 2 === 0 ? speed : -speed);
          });
        }
        this.draw();
        this.animationId = requestAnimationFrame(animate);
      };
      this.animationId = requestAnimationFrame(animate);
    }

    stop() {
      if (this.animationId) {
        cancelAnimationFrame(this.animationId);
        this.animationId = null;
      }
    }

    checkHover(canvasX, canvasY, clientX, clientY) {
      if (!this.element || !this.element.electronsPerShell) return;
      const shells = this.element.electronsPerShell;
      const numShells = shells.length;
      const centerX = this.width / 2;
      const centerY = this.height / 2;

      const dx = canvasX - centerX;
      const dy = canvasY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      const maxRadius = (this.width / 2) - 18;
      const minRadius = 32;
      const radiusStep = (maxRadius - minRadius) / Math.max(1, numShells);

      let found = null;
      shells.forEach((count, idx) => {
        const shellRadius = minRadius + (idx + 1) * radiusStep;
        if (Math.abs(dist - shellRadius) < 14) {
          found = idx;
        }
      });

      this.hoveredShell = found;

      if (found !== null) {
        const shellLetter = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'][found] || `Capa ${found + 1}`;
        const count = shells[found];
        const maxCapacity = 2 * Math.pow(found + 1, 2);
        this.tooltip.innerHTML = `
          <strong>Capa ${shellLetter} (n=${found + 1})</strong><br>
          Electrones: <span style="color:var(--accent,#00f0ff);font-weight:bold;">${count}</span> / máx. ${maxCapacity}
        `;
        this.tooltip.style.left = `${clientX + 12}px`;
        this.tooltip.style.top = `${clientY - 20}px`;
        this.tooltip.style.display = 'block';
      } else {
        this.tooltip.style.display = 'none';
      }
    }

    draw() {
      if (!this.ctx || !this.element) return;
      const ctx = this.ctx;
      const w = this.width;
      const h = this.height;
      const centerX = w / 2;
      const centerY = h / 2;

      ctx.clearRect(0, 0, w, h);

      const shells = this.element.electronsPerShell || [1];
      const numShells = shells.length;
      const maxRadius = (w / 2) - 18;
      const minRadius = 32;
      const radiusStep = (maxRadius - minRadius) / Math.max(1, numShells);

      // Draw Orbit Shells
      shells.forEach((count, idx) => {
        const radius = minRadius + (idx + 1) * radiusStep;
        const isHovered = this.hoveredShell === idx;

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = isHovered ? 'rgba(0, 240, 255, 0.8)' : 'rgba(148, 163, 184, 0.22)';
        ctx.lineWidth = isHovered ? 2.5 : 1.2;
        ctx.setLineDash(isHovered ? [4, 4] : []);
        ctx.stroke();
        ctx.setLineDash([]);

        // Label on shell
        if (numShells <= 7) {
          const letter = ['K', 'L', 'M', 'N', 'O', 'P', 'Q'][idx] || `${idx + 1}`;
          ctx.fillStyle = isHovered ? '#00f0ff' : 'rgba(148, 163, 184, 0.4)';
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.textAlign = 'left';
          ctx.fillText(letter, centerX + 4, centerY - radius + 10);
        }

        // Draw Electrons on this shell
        const angleOffset = this.angles[idx] || 0;
        const step = (Math.PI * 2) / count;

        for (let e = 0; e < count; e++) {
          const electronAngle = angleOffset + e * step;
          const ex = centerX + radius * Math.cos(electronAngle);
          const ey = centerY + radius * Math.sin(electronAngle);

          // Glow
          ctx.beginPath();
          ctx.arc(ex, ey, isHovered ? 6 : 4, 0, Math.PI * 2);
          ctx.fillStyle = isHovered ? '#00f0ff' : 'rgba(0, 240, 255, 0.9)';
          ctx.shadowColor = '#00f0ff';
          ctx.shadowBlur = isHovered ? 12 : 6;
          ctx.fill();
          ctx.shadowBlur = 0;

          // Inner white core
          ctx.beginPath();
          ctx.arc(ex, ey, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = '#ffffff';
          ctx.fill();
        }
      });

      // Draw Nucleus
      const nucleusRadius = 24;
      const gradient = ctx.createRadialGradient(
        centerX - 4, centerY - 4, 2,
        centerX, centerY, nucleusRadius
      );
      gradient.addColorStop(0, '#ff7675');
      gradient.addColorStop(0.7, '#d63031');
      gradient.addColorStop(1, '#631010');

      ctx.beginPath();
      ctx.arc(centerX, centerY, nucleusRadius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.shadowColor = 'rgba(235, 77, 75, 0.5)';
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.shadowBlur = 0;

      // Nucleus Border
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Nucleus Text (Symbol & Number)
      ctx.fillStyle = '#ffffff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = 'bold 15px "Inter", sans-serif';
      ctx.fillText(this.element.symbol, centerX, centerY - 4);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      ctx.font = '9px "JetBrains Mono", monospace';
      ctx.fillText(`Z=${this.element.number}`, centerX, centerY + 10);
    }

    destroy() {
      this.stop();
      if (this.wrapper && this.wrapper.parentNode) {
        this.wrapper.parentNode.removeChild(this.wrapper);
      }
    }
  }

  window.BohrModel = BohrModel;
})(typeof window !== 'undefined' ? window : global);
