/**
 * ELEMENTA - Calculadora de Masa Molar y Composición Porcentual
 */
(function(window) {
  'use strict';

  class MolarMassCalculator {
    constructor(containerId) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.init();
    }

    init() {
      if (!this.container) return;
      this.container.innerHTML = `
        <div class="molar-tool-wrapper">
          <div class="tool-header">
            <h3><i class="tool-icon">⚖️</i> Calculadora de Masa Molar y Composición</h3>
            <p class="tool-desc">Introduce cualquier fórmula química (soporta paréntesis, hidratos y grupos complejos) para obtener la masa molar exacta en g/mol y el desglose porcentual paso a paso.</p>
          </div>

          <div class="tool-input-group">
            <div class="input-with-action">
              <input type="text" id="molarFormulaInput" class="molar-input" placeholder="Ej: H2SO4, Ca(OH)2, CuSO4*5H2O, C6H12O6" autofocus autocomplete="off" />
              <button id="btnCalculateMolar" class="btn-primary">Calcular Masa</button>
            </div>
            <div class="quick-examples">
              <span class="examples-label">Ejemplos rápidos:</span>
              <button class="pill-btn" data-formula="H2O">H₂O</button>
              <button class="pill-btn" data-formula="NaCl">NaCl</button>
              <button class="pill-btn" data-formula="H2SO4">H₂SO₄</button>
              <button class="pill-btn" data-formula="Ca(OH)2">Ca(OH)₂</button>
              <button class="pill-btn" data-formula="C6H12O6">C₆H₁₂O₆ (Glucosa)</button>
              <button class="pill-btn" data-formula="CuSO4*5H2O">CuSO₄·5H₂O</button>
              <button class="pill-btn" data-formula="Al2(SO4)3">Al₂(SO₄)₃</button>
              <button class="pill-btn" data-formula="KMnO4">KMnO₄</button>
              <button class="pill-btn" data-formula="C8H10N4O2">C₈H₁₀N₄O₂ (Cafeína)</button>
            </div>
          </div>

          <div id="molarError" class="tool-error" style="display:none;"></div>

          <div id="molarResults" class="molar-results" style="display:none;">
            <div class="molar-summary-card">
              <div class="molar-main-stat">
                <span class="molar-stat-label">Masa Molar Total</span>
                <span id="molarTotalValue" class="molar-stat-number">0.000</span>
                <span class="molar-stat-unit">g/mol</span>
              </div>
              <div class="molar-formula-badge" id="molarFormattedFormula"></div>
            </div>

            <div class="molar-layout-grid">
              <div class="molar-table-container">
                <h4>Desglose por Elemento</h4>
                <table class="molar-table">
                  <thead>
                    <tr>
                      <th>Elemento</th>
                      <th>Átomos</th>
                      <th>Masa Atómica</th>
                      <th>Masa Total (g/mol)</th>
                      <th>% en Masa</th>
                    </tr>
                  </thead>
                  <tbody id="molarTableBody"></tbody>
                </table>
              </div>

              <div class="molar-chart-container">
                <h4>Composición Porcentual</h4>
                <div class="canvas-chart-box">
                  <canvas id="molarPieChart" width="220" height="220"></canvas>
                </div>
              </div>
            </div>

            <div class="molar-steps-container">
              <h4>Procedimiento Didáctico Paso a Paso</h4>
              <div id="molarStepsContent" class="molar-steps-box"></div>
            </div>
          </div>
        </div>
      `;

      this.setupEvents();
    }

    setupEvents() {
      const input = document.getElementById('molarFormulaInput');
      const btn = document.getElementById('btnCalculateMolar');

      btn.addEventListener('click', () => this.calculate(input.value));
      input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') this.calculate(input.value);
      });

      const pills = this.container.querySelectorAll('.pill-btn');
      pills.forEach(pill => {
        pill.addEventListener('click', () => {
          const formula = pill.getAttribute('data-formula');
          input.value = formula;
          this.calculate(formula);
        });
      });
    }

    /**
     * Recursive Chemical Formula Parser
     * Supports: H2O, Ca(OH)2, CuSO4*5H2O, [Fe(CN)6]4-
     */
    parseFormula(formulaStr) {
      if (!formulaStr || !formulaStr.trim()) {
        throw new Error('Por favor introduce una fórmula química.');
      }

      let cleanStr = formulaStr.trim()
        .replace(/·/g, '*')
        .replace(/×/g, '*')
        .replace(/\[/g, '(')
        .replace(/\]/g, ')')
        .replace(/\s+/g, '');

      // Handle hydrates: e.g. CuSO4*5H2O
      const parts = cleanStr.split('*');
      const totalCounts = {};

      parts.forEach((part, partIdx) => {
        let multiplier = 1;
        let subFormula = part;

        // Check for leading coefficient on hydrate e.g. 5H2O
        if (partIdx > 0) {
          const matchCoeff = part.match(/^(\d+)(.*)$/);
          if (matchCoeff) {
            multiplier = parseInt(matchCoeff[1], 10);
            subFormula = matchCoeff[2];
          }
        }

        const counts = this.parseSubFormula(subFormula);
        for (const [elem, count] of Object.entries(counts)) {
          totalCounts[elem] = (totalCounts[elem] || 0) + (count * multiplier);
        }
      });

      return totalCounts;
    }

    parseSubFormula(str) {
      const counts = {};
      let i = 0;

      const parseGroup = () => {
        const groupCounts = {};

        while (i < str.length) {
          const char = str[i];

          if (char === '(') {
            i++; // skip '('
            const innerCounts = parseGroup();
            let count = 1;

            // Check if there is a number following ')'
            const numMatch = str.slice(i).match(/^(\d+)/);
            if (numMatch) {
              count = parseInt(numMatch[1], 10);
              i += numMatch[1].length;
            }

            for (const [elem, innerCount] of Object.entries(innerCounts)) {
              groupCounts[elem] = (groupCounts[elem] || 0) + (innerCount * count);
            }
          } else if (char === ')') {
            i++; // skip ')'
            break;
          } else if (/[A-Z]/.test(char)) {
            // Element Symbol
            let sym = char;
            i++;
            if (i < str.length && /[a-z]/.test(str[i])) {
              sym += str[i];
              i++;
            }

            // Verify if element exists in database
            const element = window.getElementBySymbol(sym);
            if (!element) {
              throw new Error(`Símbolo químico desconocido: "${sym}"`);
            }

            // Check count
            let count = 1;
            const numMatch = str.slice(i).match(/^(\d+)/);
            if (numMatch) {
              count = parseInt(numMatch[1], 10);
              i += numMatch[1].length;
            }

            groupCounts[sym] = (groupCounts[sym] || 0) + count;
          } else {
            i++; // Skip unhandled chars
          }
        }

        return groupCounts;
      };

      const result = parseGroup();
      return result;
    }

    formatChemicalFormula(str) {
      return str.replace(/(\d+)/g, '<sub>$1</sub>').replace(/\*/g, ' · ');
    }

    calculate(formulaStr) {
      const errorEl = document.getElementById('molarError');
      const resultsEl = document.getElementById('molarResults');

      try {
        errorEl.style.display = 'none';
        const parsed = this.parseFormula(formulaStr);

        if (Object.keys(parsed).length === 0) {
          throw new Error('No se encontraron elementos válidos en la fórmula.');
        }

        let totalMass = 0;
        const elementsBreakdown = [];

        for (const [symbol, count] of Object.entries(parsed)) {
          const element = window.getElementBySymbol(symbol);
          const elemMass = Number(element.mass || element.number * 2);
          const subtotalMass = count * elemMass;
          totalMass += subtotalMass;

          elementsBreakdown.push({
            element,
            symbol,
            count,
            atomicMass: elemMass,
            subtotalMass
          });
        }

        // Calculate mass percentages
        elementsBreakdown.forEach(item => {
          item.percentage = (item.subtotalMass / totalMass) * 100;
        });

        // Sort by atomic number or mass percentage
        elementsBreakdown.sort((a, b) => b.percentage - a.percentage);

        // Display results
        document.getElementById('molarTotalValue').textContent = totalMass.toFixed(3);
        document.getElementById('molarFormattedFormula').innerHTML = `Fórmula: <strong>${this.formatChemicalFormula(formulaStr)}</strong>`;

        // Populate Table
        const tbody = document.getElementById('molarTableBody');
        tbody.innerHTML = '';

        elementsBreakdown.forEach(item => {
          const tr = document.createElement('tr');
          const catMeta = window.CATEGORY_META[item.element.category] || { color: '#00f0ff' };

          tr.innerHTML = `
            <td>
              <div style="display:flex;align-items:center;gap:8px;">
                <span class="elem-badge" style="background:${catMeta.color};color:#000;">${item.symbol}</span>
                <span><strong>${item.element.name}</strong> <small style="color:#94a3b8;">(${item.symbol})</small></span>
              </div>
            </td>
            <td><strong>${item.count}</strong></td>
            <td>${item.atomicMass.toFixed(3)} u</td>
            <td><strong>${item.subtotalMass.toFixed(3)} g/mol</strong></td>
            <td>
              <div style="display:flex;align-items:center;gap:8px;">
                <div class="progress-bar-bg" style="flex:1;height:8px;background:rgba(255,255,255,0.1);border-radius:4px;overflow:hidden;">
                  <div class="progress-bar-fill" style="width:${item.percentage}%;height:100%;background:${catMeta.color};border-radius:4px;"></div>
                </div>
                <span style="font-weight:bold;min-width:45px;text-align:right;">${item.percentage.toFixed(2)}%</span>
              </div>
            </td>
          `;
          tbody.appendChild(tr);
        });

        // Draw Pie Chart
        this.drawChart(elementsBreakdown);

        // Render Step-by-Step Educational Explanation
        this.renderSteps(formulaStr, elementsBreakdown, totalMass);

        resultsEl.style.display = 'block';
      } catch (err) {
        resultsEl.style.display = 'none';
        errorEl.textContent = `❌ ${err.message}`;
        errorEl.style.display = 'block';
      }
    }

    drawChart(breakdown) {
      const canvas = document.getElementById('molarPieChart');
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;
      const radius = w / 2 - 14;
      const innerRadius = radius * 0.55; // Donut chart

      ctx.clearRect(0, 0, w, h);

      let startAngle = -Math.PI / 2;

      breakdown.forEach((item) => {
        const sliceAngle = (item.percentage / 100) * (Math.PI * 2);
        const endAngle = startAngle + sliceAngle;
        const catMeta = window.CATEGORY_META[item.element.category] || { color: '#00f0ff' };

        ctx.beginPath();
        ctx.arc(cx, cy, radius, startAngle, endAngle);
        ctx.arc(cx, cy, innerRadius, endAngle, startAngle, true);
        ctx.closePath();

        ctx.fillStyle = catMeta.color;
        ctx.fill();

        ctx.strokeStyle = '#0f172a';
        ctx.lineWidth = 2;
        ctx.stroke();

        startAngle = endAngle;
      });

      // Center Text
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 13px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('% Masa', cx, cy - 6);

      ctx.fillStyle = '#94a3b8';
      ctx.font = '10px "Inter", sans-serif';
      ctx.fillText('Elemental', cx, cy + 10);
    }

    renderSteps(formulaStr, breakdown, totalMass) {
      const container = document.getElementById('molarStepsContent');
      let html = `
        <ol class="step-list">
          <li>
            <strong>Paso 1: Contar los átomos de cada elemento químico</strong><br>
            A partir de la fórmula química dada, determinamos la cantidad estequiométrica de cada átomo:<br>
            <ul>
              ${breakdown.map(b => `<li>${b.count} átomo(s) de <b>${b.element.name} (${b.symbol})</b></li>`).join('')}
            </ul>
          </li>
          <li>
            <strong>Paso 2: Multiplicar por las masas atómicas estándar (IUPAC)</strong><br>
            Multiplicamos la cantidad de átomos de cada elemento por su peso atómico correspondiente:<br>
            <ul>
              ${breakdown.map(b => `<li><b>${b.symbol}:</b> ${b.count} × ${b.atomicMass.toFixed(3)} g/mol = <b>${b.subtotalMass.toFixed(3)} g/mol</b></li>`).join('')}
            </ul>
          </li>
          <li>
            <strong>Paso 3: Sumar las masas molares individuales</strong><br>
            Masa Molar Total (M) = ${breakdown.map(b => `${b.subtotalMass.toFixed(3)}`).join(' + ')} = <span style="color:var(--accent,#00f0ff);font-weight:bold;font-size:15px;">${totalMass.toFixed(3)} g/mol</span>
          </li>
          <li>
            <strong>Paso 4: Calcular la composición porcentual en masa (% masa)</strong><br>
            Aplicando la fórmula: <code>% = (Masa del Elemento en la molécula / Masa Molar Total) × 100%</code>:<br>
            <ul>
              ${breakdown.map(b => `<li><b>${b.symbol}:</b> (${b.subtotalMass.toFixed(3)} / ${totalMass.toFixed(3)}) × 100 = <b>${b.percentage.toFixed(2)}%</b></li>`).join('')}
            </ul>
          </li>
        </ol>
      `;
      container.innerHTML = html;
    }
  }

  window.MolarMassCalculator = MolarMassCalculator;
})(typeof window !== 'undefined' ? window : global);
