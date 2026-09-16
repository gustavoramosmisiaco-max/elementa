/**
 * ELEMENTA - Generador y Visualizador del Espectro de Emisión Óptica
 */
(function(window) {
  'use strict';

  class EmissionSpectrum {
    constructor(containerId, options = {}) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.options = Object.assign({
        minWavelength: 380, // nm
        maxWavelength: 750, // nm
        height: 60
      }, options);

      this.element = null;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = '';

      this.wrapper = document.createElement('div');
      this.wrapper.className = 'spectrum-wrapper';
      this.wrapper.style.position = 'relative';
      this.wrapper.style.width = '100%';

      this.canvas = document.createElement('canvas');
      this.canvas.className = 'spectrum-canvas';
      this.canvas.style.width = '100%';
      this.canvas.style.height = `${this.options.height}px`;
      this.canvas.style.borderRadius = '8px';
      this.canvas.style.boxShadow = 'inset 0 2px 8px rgba(0,0,0,0.6)';
      this.canvas.style.cursor = 'crosshair';
      this.ctx = this.canvas.getContext('2d');

      // Wavelength scale ruler
      this.ruler = document.createElement('div');
      this.ruler.className = 'spectrum-ruler';
      this.ruler.style.display = 'flex';
      this.ruler.style.justifyContent = 'space-between';
      this.ruler.style.color = 'var(--text-muted, #94a3b8)';
      this.ruler.style.fontSize = '11px';
      this.ruler.style.fontFamily = 'monospace';
      this.ruler.style.marginTop = '4px';
      this.ruler.innerHTML = `
        <span>380 nm (UV/Violeta)</span>
        <span>450 nm (Azul)</span>
        <span>520 nm (Verde)</span>
        <span>590 nm (Amarillo)</span>
        <span>650 nm (Rojo)</span>
        <span>750 nm (Infrarrojo)</span>
      `;

      // Tooltip
      this.tooltip = document.createElement('div');
      this.tooltip.className = 'spectrum-tooltip';
      this.tooltip.style.position = 'absolute';
      this.tooltip.style.pointerEvents = 'none';
      this.tooltip.style.display = 'none';
      this.tooltip.style.background = 'rgba(15, 23, 42, 0.95)';
      this.tooltip.style.color = '#fff';
      this.tooltip.style.padding = '6px 12px';
      this.tooltip.style.borderRadius = '6px';
      this.tooltip.style.fontSize = '12px';
      this.tooltip.style.border = '1px solid rgba(255, 255, 255, 0.2)';
      this.tooltip.style.boxShadow = '0 6px 16px rgba(0,0,0,0.6)';
      this.tooltip.style.zIndex = '20';

      this.wrapper.appendChild(this.canvas);
      this.wrapper.appendChild(this.ruler);
      this.wrapper.appendChild(this.tooltip);
      this.container.appendChild(this.wrapper);

      this.setupEvents();
    }

    setupEvents() {
      this.canvas.addEventListener('mousemove', (e) => {
        const rect = this.canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const ratio = Math.max(0, Math.min(1, mouseX / rect.width));
        const wavelength = this.options.minWavelength + ratio * (this.options.maxWavelength - this.options.minWavelength);

        // Calculate photon physics
        const energy_eV = (1239.84 / wavelength).toFixed(2); // E = hc/λ in eV
        const freq_THz = (299792458 / (wavelength * 1e-9) / 1e12).toFixed(1); // ν in THz

        // Find closest element spectral line
        let lineMatch = null;
        if (this.element && this.element.spectralLines) {
          this.element.spectralLines.forEach(line => {
            if (Math.abs(line - wavelength) < 6) {
              lineMatch = line;
            }
          });
        }

        const rgb = this.wavelengthToRGB(wavelength);

        this.tooltip.innerHTML = `
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;">
            <span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:rgb(${rgb.r},${rgb.g},${rgb.b});"></span>
            <strong>λ = ${wavelength.toFixed(1)} nm</strong> ${lineMatch ? '<span style="color:#00f0ff;font-weight:bold;">(Línea emitida)</span>' : ''}
          </div>
          <div style="font-size:11px;color:#94a3b8;">
            Energía: <b>${energy_eV} eV</b> | Frecuencia: <b>${freq_THz} THz</b>
          </div>
        `;
        this.tooltip.style.left = `${Math.min(rect.width - 180, Math.max(10, mouseX - 90))}px`;
        this.tooltip.style.top = `-55px`;
        this.tooltip.style.display = 'block';
      });

      this.canvas.addEventListener('mouseleave', () => {
        this.tooltip.style.display = 'none';
      });

      window.addEventListener('resize', () => {
        if (this.element) this.render();
      });
    }

    setElement(element) {
      this.element = element;
      this.render();
    }

    // Physical conversion algorithm: Wavelength (nm) -> sRGB color
    wavelengthToRGB(wavelength) {
      let r = 0, g = 0, b = 0;
      const w = Number(wavelength);

      if (w >= 380 && w < 440) {
        r = -(w - 440) / (440 - 380);
        g = 0.0;
        b = 1.0;
      } else if (w >= 440 && w < 490) {
        r = 0.0;
        g = (w - 440) / (490 - 440);
        b = 1.0;
      } else if (w >= 490 && w < 510) {
        r = 0.0;
        g = 1.0;
        b = -(w - 510) / (510 - 490);
      } else if (w >= 510 && w < 580) {
        r = (w - 510) / (580 - 510);
        g = 1.0;
        b = 0.0;
      } else if (w >= 580 && w < 645) {
        r = 1.0;
        g = -(w - 645) / (645 - 580);
        b = 0.0;
      } else if (w >= 645 && w <= 750) {
        r = 1.0;
        g = 0.0;
        b = 0.0;
      }

      // Intensity fall-off near vision limits
      let factor = 0.0;
      if (w >= 380 && w < 420) {
        factor = 0.3 + 0.7 * (w - 380) / (420 - 380);
      } else if (w >= 420 && w <= 700) {
        factor = 1.0;
      } else if (w > 700 && w <= 750) {
        factor = 0.3 + 0.7 * (750 - w) / (750 - 700);
      }

      const gamma = 0.8;
      return {
        r: Math.round(255 * Math.pow(r * factor, gamma)),
        g: Math.round(255 * Math.pow(g * factor, gamma)),
        b: Math.round(255 * Math.pow(b * factor, gamma))
      };
    }

    render() {
      if (!this.canvas || !this.ctx) return;

      const rect = this.wrapper.getBoundingClientRect();
      const width = rect.width || 400;
      const height = this.options.height;
      const dpr = window.devicePixelRatio || 1;

      this.canvas.width = width * dpr;
      this.canvas.height = height * dpr;
      this.ctx.scale(dpr, dpr);

      const ctx = this.ctx;
      const minW = this.options.minWavelength;
      const maxW = this.options.maxWavelength;
      const range = maxW - minW;

      // Dark background for emission spectrum
      ctx.fillStyle = '#0a0d14';
      ctx.fillRect(0, 0, width, height);

      // Subtle continuous background hint
      const gradient = ctx.createLinearGradient(0, 0, width, 0);
      for (let w = minW; w <= maxW; w += 20) {
        const rgb = this.wavelengthToRGB(w);
        const stop = (w - minW) / range;
        gradient.addColorStop(stop, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.05)`);
      }
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Draw Spectral Emission Lines
      const lines = (this.element && this.element.spectralLines) || [];

      if (lines.length === 0) {
        // Fallback note if synthetic or no visual data
        ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
        ctx.font = '12px "Inter", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText('Espectro experimental ultra-pesado en el rango UV/X profundo', width / 2, height / 2);
        return;
      }

      lines.forEach(lineWavelength => {
        if (lineWavelength < minW || lineWavelength > maxW) return;
        const x = ((lineWavelength - minW) / range) * width;
        const rgb = this.wavelengthToRGB(lineWavelength);

        // Glow spread
        const glowGrad = ctx.createLinearGradient(x - 5, 0, x + 5, 0);
        glowGrad.addColorStop(0, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);
        glowGrad.addColorStop(0.5, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0.6)`);
        glowGrad.addColorStop(1, `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, 0)`);

        ctx.fillStyle = glowGrad;
        ctx.fillRect(x - 5, 0, 10, height);

        // Core bright spectral line
        ctx.fillStyle = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        ctx.fillRect(x - 1, 0, 2, height);
      });
    }
  }

  window.EmissionSpectrum = EmissionSpectrum;
})(typeof window !== 'undefined' ? window : global);
