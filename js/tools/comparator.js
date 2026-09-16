/**
 * ELEMENTA - Comparador Multi-Elemento y Gráfico Radar
 */
(function(window) {
  'use strict';

  class ElementComparator {
    constructor(containerId) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.selectedElements = [1, 6, 8]; // Default: H, C, O
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = `
        <div class="comparator-wrapper">
          <div class="tool-header">
            <h3><i class="tool-icon">⚖️</i> Comparador Periódico Multi-Elemento</h3>
            <p class="tool-desc">Selecciona de 2 a 4 elementos químicos para comparar simultáneamente sus tendencias periódicas, radios a escala y métricas en un gráfico radar interactivo.</p>
          </div>

          <div class="comparator-selectors">
            <div class="selector-box">
              <label>Elemento 1:</label>
              <select id="compareSelect1" class="compare-dropdown"></select>
            </div>
            <div class="selector-box">
              <label>Elemento 2:</label>
              <select id="compareSelect2" class="compare-dropdown"></select>
            </div>
            <div class="selector-box">
              <label>Elemento 3 (opcional):</label>
              <select id="compareSelect3" class="compare-dropdown"></select>
            </div>
            <div class="selector-box">
              <label>Elemento 4 (opcional):</label>
              <select id="compareSelect4" class="compare-dropdown"></select>
            </div>
          </div>

          <div class="comparator-presets">
            <span class="examples-label">Comparativas sugeridas:</span>
            <button class="pill-btn" data-preset="1,6,7,8">Bioelementos (H, C, N, O)</button>
            <button class="pill-btn" data-preset="3,11,19,37">Metales Alcalinos (Li, Na, K, Rb)</button>
            <button class="pill-btn" data-preset="9,17,35,53">Halógenos (F, Cl, Br, I)</button>
            <button class="pill-btn" data-preset="26,27,28,29">Metales 3d (Fe, Co, Ni, Cu)</button>
            <button class="pill-btn" data-preset="78,79,80">Metales 6d (Pt, Au, Hg)</button>
          </div>

          <div class="comparator-results-grid">
            <div class="comparator-cards-container" id="compareCardsContainer"></div>
            
            <div class="comparator-radar-container">
              <h4>Perfil Comparativo Radar</h4>
              <div class="canvas-chart-box">
                <canvas id="comparatorRadarCanvas" width="340" height="340"></canvas>
              </div>
              <div class="radar-legend" id="comparatorRadarLegend"></div>
            </div>
          </div>

          <div class="comparator-table-section">
            <h4>Tabla Comparativa de Propiedades</h4>
            <div class="table-responsive">
              <table class="molar-table" id="comparatorFullTable">
                <thead>
                  <tr id="compareTableHead"></tr>
                </thead>
                <tbody id="compareTableBody"></tbody>
              </table>
            </div>
          </div>
        </div>
      `;

      this.populateDropdowns();
      this.setupEvents();
      this.render();
    }

    populateDropdowns() {
      const selects = [
        document.getElementById('compareSelect1'),
        document.getElementById('compareSelect2'),
        document.getElementById('compareSelect3'),
        document.getElementById('compareSelect4')
      ];

      const elements = window.ELEMENTS_DATA || [];

      selects.forEach((sel, idx) => {
        sel.innerHTML = idx >= 2 ? '<option value="">(Ninguno)</option>' : '';
        elements.forEach(el => {
          const opt = document.createElement('option');
          opt.value = el.number;
          opt.textContent = `${el.number}. ${el.name} (${el.symbol})`;
          sel.appendChild(opt);
        });

        if (this.selectedElements[idx]) {
          sel.value = this.selectedElements[idx];
        }
      });
    }

    setupEvents() {
      const selects = [
        document.getElementById('compareSelect1'),
        document.getElementById('compareSelect2'),
        document.getElementById('compareSelect3'),
        document.getElementById('compareSelect4')
      ];

      selects.forEach(sel => {
        sel.addEventListener('change', () => {
          this.selectedElements = selects.map(s => s.value ? parseInt(s.value, 10) : null).filter(Boolean);
          this.render();
        });
      });

      const presetBtns = this.container.querySelectorAll('.pill-btn');
      presetBtns.forEach(btn => {
        btn.addEventListener('click', () => {
          const nums = btn.getAttribute('data-preset').split(',').map(Number);
          this.selectedElements = nums;
          selects.forEach((s, i) => {
            s.value = nums[i] || '';
          });
          this.render();
        });
      });
    }

    render() {
      const elements = this.selectedElements.map(num => window.getElementByNumber(num)).filter(Boolean);
      if (elements.length < 1) return;

      const colors = ['#00f0ff', '#ff6b6b', '#ffd43b', '#69db7c'];

      // Render Cards
      const cardsContainer = document.getElementById('compareCardsContainer');
      cardsContainer.innerHTML = '';

      elements.forEach((el, idx) => {
        const catMeta = window.CATEGORY_META[el.category] || { color: '#00f0ff' };
        const color = colors[idx % colors.length];

        const card = document.createElement('div');
        card.className = 'compare-element-card';
        card.style.borderTop = `4px solid ${color}`;

        // Scale relative circle size based on atomic radius
        const maxRadius = 300;
        const radiusSize = Math.max(20, Math.min(65, (el.atomicRadius || 100) / maxRadius * 65));

        card.innerHTML = `
          <div class="card-head">
            <div class="elem-badge" style="background:${catMeta.color};color:#000;">${el.symbol}</div>
            <div>
              <h3>${el.name}</h3>
              <div style="font-size:12px;color:#94a3b8;">${el.categoryName}</div>
            </div>
          </div>

          <div class="radius-visual-box" style="text-align:center;margin:12px 0;">
            <div style="font-size:11px;color:#94a3b8;margin-bottom:4px;">Radio Atómico a Escala:</div>
            <div style="display:inline-block;width:${radiusSize * 2}px;height:${radiusSize * 2}px;border-radius:50%;background:radial-gradient(circle, ${color} 0%, rgba(0,0,0,0.4) 100%);border:2px solid ${color};box-shadow:0 0 12px ${color}88;"></div>
            <div style="font-size:12px;font-weight:bold;margin-top:4px;">${el.atomicRadius ? el.atomicRadius + ' pm' : 'Desconocido'}</div>
          </div>

          <div class="card-metrics-list">
            <div class="metric-row"><span>Número atómico (Z):</span> <strong>${el.number}</strong></div>
            <div class="metric-row"><span>Masa atómica:</span> <strong>${el.mass} u</strong></div>
            <div class="metric-row"><span>Electronegatividad:</span> <strong>${el.electronegativity !== null ? el.electronegativity : 'N/A'}</strong></div>
            <div class="metric-row"><span>1ª Energía Ioniz.:</span> <strong>${el.ionizationEnergy ? el.ionizationEnergy + ' kJ/mol' : 'N/A'}</strong></div>
            <div class="metric-row"><span>Densidad:</span> <strong>${el.density ? el.density + ' g/cm³' : 'N/A'}</strong></div>
            <div class="metric-row"><span>P. Fusión:</span> <strong>${el.meltingPoint ? (el.meltingPoint - 273.15).toFixed(1) + ' °C' : 'N/A'}</strong></div>
            <div class="metric-row"><span>Configuración:</span> <code>${el.electronConfigurationSemantic}</code></div>
          </div>
        `;

        cardsContainer.appendChild(card);
      });

      // Render Radar Chart
      this.drawRadarChart(elements, colors);

      // Render Full Comparative Table
      this.renderTable(elements, colors);
    }

    drawRadarChart(elements, colors) {
      const canvas = document.getElementById('comparatorRadarCanvas');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = w / 2 - 40;

      ctx.clearRect(0, 0, w, h);

      // Dimensions to compare (normalized 0 to 1)
      const dimensions = [
        { label: 'Electronegatividad', key: 'electronegativity', max: 4.0 },
        { label: 'Radio Atómico', key: 'atomicRadius', max: 300 },
        { label: 'Energía Ioniz.', key: 'ionizationEnergy', max: 2500 },
        { label: 'Densidad', key: 'density', max: 23 },
        { label: 'Punto Fusión', key: 'meltingPoint', max: 4000 },
        { label: 'e⁻ Valencia', key: 'valenceElectrons', max: 8 }
      ];

      const numAxes = dimensions.length;
      const angleStep = (Math.PI * 2) / numAxes;

      // Draw background webs
      const levels = 5;
      for (let l = 1; l <= levels; l++) {
        const r = (radius / levels) * l;
        ctx.beginPath();
        for (let i = 0; i < numAxes; i++) {
          const a = -Math.PI / 2 + i * angleStep;
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a);
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.15)';
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      // Draw axes and labels
      dimensions.forEach((dim, i) => {
        const a = -Math.PI / 2 + i * angleStep;
        const x = cx + radius * Math.cos(a);
        const y = cy + radius * Math.sin(a);

        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(x, y);
        ctx.strokeStyle = 'rgba(148, 163, 184, 0.25)';
        ctx.stroke();

        // Label
        const lx = cx + (radius + 20) * Math.cos(a);
        const ly = cy + (radius + 20) * Math.sin(a);
        ctx.fillStyle = '#94a3b8';
        ctx.font = '10px "Inter", sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(dim.label, lx, ly);
      });

      // Draw each element's polygon
      elements.forEach((el, elIdx) => {
        const color = colors[elIdx % colors.length];
        ctx.beginPath();

        dimensions.forEach((dim, i) => {
          const a = -Math.PI / 2 + i * angleStep;
          let val = el[dim.key] !== null && el[dim.key] !== undefined ? Number(el[dim.key]) : 0;
          if (isNaN(val)) val = 0;
          const norm = Math.max(0.05, Math.min(1.0, val / dim.max));
          const r = radius * norm;
          const x = cx + r * Math.cos(a);
          const y = cy + r * Math.sin(a);

          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        });

        ctx.closePath();
        ctx.fillStyle = `${color}25`; // translucent
        ctx.fill();
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
      });

      // Radar Legend
      const legend = document.getElementById('comparatorRadarLegend');
      legend.innerHTML = elements.map((el, i) => `
        <span class="legend-item" style="display:inline-flex;align-items:center;gap:6px;margin:4px 8px;font-size:12px;">
          <span style="display:inline-block;width:12px;height:12px;border-radius:3px;background:${colors[i % colors.length]};"></span>
          <b>${el.name} (${el.symbol})</b>
        </span>
      `).join('');
    }

    renderTable(elements, colors) {
      const thead = document.getElementById('compareTableHead');
      const tbody = document.getElementById('compareTableBody');

      thead.innerHTML = `
        <th>Propiedad / Característica</th>
        ${elements.map((el, i) => `<th style="color:${colors[i % colors.length]};">${el.name} (${el.symbol})</th>`).join('')}
      `;

      const rows = [
        { name: 'Número Atómico', fn: el => `<b>${el.number}</b>` },
        { name: 'Símbolo & Masa', fn: el => `<b>${el.symbol}</b> (${el.mass} u)` },
        { name: 'Categoría', fn: el => el.categoryName },
        { name: 'Grupo, Periodo, Bloque', fn: el => `Grupo ${el.group || 'N/A'}, P.${el.period}, Bloque ${el.block}` },
        { name: 'Configuración Electrónica', fn: el => `<code>${el.electronConfiguration}</code>` },
        { name: 'Electrones de Valencia', fn: el => el.valenceElectrons },
        { name: 'Electronegatividad (Pauling)', fn: el => el.electronegativity !== null ? el.electronegativity : 'N/A' },
        { name: 'Radio Atómico', fn: el => el.atomicRadius ? `${el.atomicRadius} pm` : 'N/A' },
        { name: '1ª Energía de Ionización', fn: el => el.ionizationEnergy ? `${el.ionizationEnergy} kJ/mol` : 'N/A' },
        { name: 'Punto de Fusión', fn: el => el.meltingPoint ? `${el.meltingPoint} K (${(el.meltingPoint - 273.15).toFixed(1)} °C)` : 'N/A' },
        { name: 'Punto de Ebullición', fn: el => el.boilingPoint ? `${el.boilingPoint} K (${(el.boilingPoint - 273.15).toFixed(1)} °C)` : 'N/A' },
        { name: 'Densidad', fn: el => el.density ? `${el.density} g/cm³` : 'N/A' },
        { name: 'Estados de Oxidación', fn: el => el.oxidationStates ? el.oxidationStates.join(', ') : 'N/A' },
        { name: 'Descubrimiento', fn: el => `${el.discoveredBy} (${el.discoveryYear})` }
      ];

      tbody.innerHTML = rows.map(r => `
        <tr>
          <td><strong>${r.name}</strong></td>
          ${elements.map(el => `<td>${r.fn(el)}</td>`).join('')}
        </tr>
      `).join('');
    }
  }

  window.ElementComparator = ElementComparator;
})(typeof window !== 'undefined' ? window : global);
