/**
 * ELEMENTA - Renderizador de la Tabla Periódica Tradicional & Educativa
 * Cuadrícula estricta 18x7 con Notación central y 6 campos por elemento
 */
(function(window) {
  'use strict';

  class TableRenderer {
    constructor(containerId, options = {}) {
      this.container = typeof containerId === 'string' ? document.getElementById(containerId) : containerId;
      this.options = Object.assign({
        onElementClick: null
      }, options);

      this.currentMode = 'category'; // 'category', 'state', 'heatmap'
      this.currentHeatmapProp = 'electronegativity';
      this.currentTempK = 298.15; // 25 °C
      this.searchQuery = '';
      this.activeCategoryFilter = 'all';
      this.activeBlockFilter = 'all';
      this.activeTypeFilter = 'all';

      this.groupRomans = {
        1: 'I A', 2: 'II A', 3: 'III B', 4: 'IV B', 5: 'V B', 6: 'VI B', 7: 'VII B',
        8: 'VIII B', 9: 'VIII B', 10: 'VIII B', 11: 'I B', 12: 'II B',
        13: 'III A', 14: 'IV A', 15: 'V A', 16: 'VI A', 17: 'VII A', 18: 'VIII A'
      };

      this.init();
    }

    init() {
      if (!this.container) return;
      this.render();
      this.setupHeaderInteractions();
    }

    setMode(mode, subParam = null) {
      this.currentMode = mode;
      if (mode === 'heatmap' && subParam) {
        this.currentHeatmapProp = subParam;
      }
      this.render();
    }

    setTemperature(tempK) {
      this.currentTempK = tempK;
      this.render();
    }

    setSearch(query) {
      this.searchQuery = (query || '').trim().toLowerCase();
      this.render();
    }

    setFilter(type, value) {
      if (type === 'category') this.activeCategoryFilter = value;
      if (type === 'block') this.activeBlockFilter = value;
      if (type === 'type') this.activeTypeFilter = value;
      this.render();
    }

    getElementPhaseAtTemp(el, tempK) {
      if (!el.meltingPoint && !el.boilingPoint) return el.phase || 'unknown';
      if (el.meltingPoint && tempK < el.meltingPoint) return 'solid';
      if (el.boilingPoint && tempK > el.boilingPoint) return 'gas';
      if (el.meltingPoint && el.boilingPoint && tempK >= el.meltingPoint && tempK <= el.boilingPoint) return 'liquid';
      if (el.meltingPoint && tempK >= el.meltingPoint && !el.boilingPoint) return 'liquid';
      return el.phase || 'unknown';
    }

    getHeatmapColor(el, prop) {
      const val = el[prop];
      if (val === null || val === undefined || isNaN(val)) {
        return { bg: 'rgba(241, 245, 249, 0.9)', border: '#cbd5e1', text: '#64748b', valStr: 'N/A' };
      }

      let norm = 0;
      let valStr = `${val}`;

      if (prop === 'electronegativity') {
        norm = Math.max(0, Math.min(1, (val - 0.7) / (3.98 - 0.7)));
        valStr = `EN: ${val}`;
      } else if (prop === 'atomicRadius') {
        norm = Math.max(0, Math.min(1, (val - 30) / (270 - 30)));
        valStr = `${val} pm`;
      } else if (prop === 'ionizationEnergy') {
        norm = Math.max(0, Math.min(1, (val - 380) / (2372 - 380)));
        valStr = `${val} kJ`;
      } else if (prop === 'density') {
        norm = Math.max(0, Math.min(1, val / 22.6));
        valStr = `${val} g/cm³`;
      } else if (prop === 'meltingPoint') {
        norm = Math.max(0, Math.min(1, val / 3823));
        valStr = `${(val - 273.15).toFixed(0)} °C`;
      }

      const r = Math.round(norm < 0.5 ? 59 + norm * 2 * (6 - 59) : 6 + (norm - 0.5) * 2 * (239 - 6));
      const g = Math.round(norm < 0.5 ? 130 + norm * 2 * (182 - 130) : 182 + (norm - 0.5) * 2 * (68 - 182));
      const b = Math.round(norm < 0.5 ? 246 + norm * 2 * (212 - 246) : 212 + (norm - 0.5) * 2 * (68 - 212));

      return {
        bg: `rgba(${r}, ${g}, ${b}, 0.22)`,
        border: `rgb(${r}, ${g}, ${b})`,
        text: '#0f172a',
        valStr
      };
    }

    matchesFilter(el) {
      if (this.searchQuery) {
        const q = this.searchQuery;
        const matchNum = el.number.toString() === q;
        const matchSym = el.symbol.toLowerCase().includes(q);
        const matchName = el.name.toLowerCase().includes(q);
        const matchLatin = (el.latinName || '').toLowerCase().includes(q);
        const matchDesc = (el.description || '').toLowerCase().includes(q);
        if (!matchNum && !matchSym && !matchName && !matchLatin && !matchDesc) {
          return false;
        }
      }

      if (this.activeCategoryFilter !== 'all') {
        if (el.category !== this.activeCategoryFilter) return false;
      }

      if (this.activeBlockFilter !== 'all') {
        if (el.block !== this.activeBlockFilter) return false;
      }

      if (this.activeTypeFilter === 'metals') {
        const nonMetals = ['reactive-nonmetal', 'noble-gas', 'metalloid'];
        if (nonMetals.includes(el.category)) return false;
      } else if (this.activeTypeFilter === 'nonmetals') {
        if (el.category !== 'reactive-nonmetal' && el.category !== 'noble-gas') return false;
      } else if (this.activeTypeFilter === 'metalloids') {
        if (el.category !== 'metalloid') return false;
      } else if (this.activeTypeFilter === 'radioactive') {
        if (el.number < 84 && el.number !== 43 && el.number !== 61) return false;
      } else if (this.activeTypeFilter === 'synthetic') {
        if (el.number <= 94 && el.number !== 43 && el.number !== 61) return false;
      }

      return true;
    }

    formatOxidationStates(oxArr) {
      if (!oxArr || oxArr.length === 0) return '';
      if (oxArr.length === 1) return `${oxArr[0]}`;
      if (oxArr.length === 2 && oxArr[0] === -oxArr[1]) return `±${Math.abs(oxArr[1])}`;
      
      const clean = oxArr.map(n => n.toString().replace('+', ''));
      const joined = clean.join(',');
      return joined.length > 7 ? clean.slice(0, 3).join(',') + '..' : joined;
    }

    formatConfigSuperScript(configStr) {
      if (!configStr) return '';
      return configStr
        .replace(/\s+/g, '')
        .replace(/(\d+)([spdf])(\d+)/g, '$1$2<sup>$3</sup>')
        .replace(/([spdf])(\d+)/g, '$1<sup>$2</sup>');
    }

    render() {
      if (!this.container) return;
      const elements = window.ELEMENTS_DATA || [];

      let html = '<h2 class="periodic-main-title">Tabla periódica de los elementos</h2>';
      html += '<div class="periodic-grid-table">';

      // 1. Top-Left Corner Header (Row 1, Col 1)
      html += `
        <div class="grid-corner-label" style="grid-column:1; grid-row:1;">
          <span>Grupo ➔</span>
          <span>Periodo ↓</span>
        </div>
      `;

      // 2. Column Headers (Groups 1 to 18) (Row 1, Cols 2 to 19)
      for (let g = 1; g <= 18; g++) {
        const roman = this.groupRomans[g] || '';
        const colIndex = g + 1;
        html += `
          <div class="grid-header-col" data-group="${g}" style="grid-column:${colIndex}; grid-row:1;" title="Grupo ${g} (${roman})">
            <span class="iupac-num">${g}</span>
            <span class="roman-num">${roman}</span>
          </div>
        `;
      }

      // 3. Row Headers (Periods 1 to 7) (Rows 2 to 8, Col 1)
      for (let p = 1; p <= 7; p++) {
        const rowIndex = p + 1;
        html += `
          <div class="grid-header-row" data-period="${p}" style="grid-column:1; grid-row:${rowIndex};" title="Periodo ${p}">
            ${p}
          </div>
        `;
      }

      // 4. Central "Notación:" Guide Card (Spans Columns 3 to 12 -> grid-column 4 to 14, Rows 1 to 3 -> grid-row 2 to 5)
      html += this.renderNotationGuideCard();

      // 5. Lanthanides Placeholder in Main Grid (Period 6, Group 3 -> Row 7, Col 4)
      html += `
        <div class="grid-cell-placeholder" data-series="lanthanide" style="grid-column:4; grid-row:7;" title="Lantánidos (57-71)">
          <span class="placeholder-range">57-71</span>
          <span class="placeholder-label">La - Lu</span>
          <span class="placeholder-series">Lantánidos</span>
          <span class="placeholder-short">*</span>
        </div>
      `;

      // 6. Actinides Placeholder in Main Grid (Period 7, Group 3 -> Row 8, Col 4)
      html += `
        <div class="grid-cell-placeholder" data-series="actinide" style="grid-column:4; grid-row:8;" title="Actínidos (89-103)">
          <span class="placeholder-range">89-103</span>
          <span class="placeholder-label">Ac - Lr</span>
          <span class="placeholder-series">Actínidos</span>
          <span class="placeholder-short">**</span>
        </div>
      `;

      // 7. Render All 118 Elements with Explicit Grid Coordinates
      elements.forEach(el => {
        // Check if element is main-table element (has group 1 to 18)
        if (el.group && el.period) {
          const colIndex = el.group + 1;
          const rowIndex = el.period + 1;
          html += this.renderElementCell(el, `grid-column:${colIndex}; grid-row:${rowIndex};`);
        }
      });

      html += '</div>'; // End periodic grid

      // 8. Detached Bottom Rows (Lantánidos 57-71 & Actínidos 89-103)
      // Same column template as the main grid, so cells stay aligned with Groups 3-17 at any width
      html += '<div class="periodic-detached-wrapper">';

      // 8a. Lanthanides (57-71)
      html += '<div class="detached-label" style="grid-column:2 / 4; grid-row:1;"><span class="detached-label-full">Lantánidos</span><span class="detached-label-short">*</span></div>';
      for (let num = 57; num <= 71; num++) {
        const el = window.getElementByNumber(num);
        if (el) html += this.renderElementCell(el, `grid-column:${num - 57 + 4}; grid-row:1;`);
      }

      // 8b. Actinides (89-103)
      html += '<div class="detached-label" style="grid-column:2 / 4; grid-row:2;"><span class="detached-label-full">Actínidos</span><span class="detached-label-short">**</span></div>';
      for (let num = 89; num <= 103; num++) {
        const el = window.getElementByNumber(num);
        if (el) html += this.renderElementCell(el, `grid-column:${num - 89 + 4}; grid-row:2;`);
      }

      html += '</div>'; // End detached wrapper

      this.container.innerHTML = html;
      this.attachCellEvents();
    }

    renderNotationGuideCard() {
      return `
        <div class="grid-notation-box" style="grid-column: 4 / 14; grid-row: 2 / 5;">
          <div class="notation-card-wrapper">
            <div class="notation-labels-left">
              <div class="notation-pointer-item">
                <span>Número atómico</span> ➔ <strong>1</strong>
              </div>
              <div class="notation-pointer-item">
                <span>Electronegatividad (Pauling)</span> ➔ <strong>2,1</strong>
              </div>
            </div>

            <div class="notation-diagram">
              <div class="nd-top">
                <strong>1</strong>
                <span>1,00795</span>
              </div>
              <div class="nd-mid">
                <span class="nd-en">2,1</span>
                <span class="nd-symbol">H</span>
                <span class="nd-ox">1</span>
              </div>
              <div class="nd-config">1s¹</div>
              <div class="nd-name">Hidrógeno</div>
            </div>

            <div class="notation-labels-right">
              <div class="notation-pointer-item">
                <strong>1,00795</strong> ➔ <span>Masa atómica / u</span>
              </div>
              <div class="notation-pointer-item">
                <strong>1</strong> ➔ <span>Estado de oxidación</span>
              </div>
              <div class="notation-pointer-item">
                <strong>H</strong> ➔ <span>Símbolo</span>
              </div>
              <div class="notation-pointer-item">
                <strong>1s¹</strong> ➔ <span>Estructura electrónica</span>
              </div>
              <div class="notation-pointer-item">
                <strong>Hidrógeno</strong> ➔ <span>Nombre</span>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    renderElementCell(el, gridPositionStyle = '') {
      const isMatched = this.matchesFilter(el);
      const catMeta = window.CATEGORY_META[el.category] || { color: '#00f0ff', bgAlpha: 'rgba(2,132,199,0.06)' };

      let styleAttr = gridPositionStyle;
      let phaseClass = '';
      let displayMass = typeof el.mass === 'number' ? el.mass.toString().replace('.', ',') : el.mass;
      let displayEN = el.electronegativity !== null ? el.electronegativity.toString().replace('.', ',') : '';
      let displayOxidation = this.formatOxidationStates(el.oxidationStates);
      let displayConfig = this.formatConfigSuperScript(el.electronConfigurationSemantic);

      if (this.currentMode === 'category') {
        styleAttr += ` --elem-accent:${catMeta.color}; background-color:${catMeta.bgAlpha}; border-color:${catMeta.border || '#cbd5e1'};`;
      } else if (this.currentMode === 'state') {
        const currentPhase = this.getElementPhaseAtTemp(el, this.currentTempK);
        phaseClass = `phase-${currentPhase}`;
        let phaseColor = '#2563eb';
        if (currentPhase === 'liquid') phaseColor = '#0284c7';
        else if (currentPhase === 'gas') phaseColor = '#e11d48';
        else if (currentPhase === 'unknown') phaseColor = '#94a3b8';

        styleAttr += ` --elem-accent:${phaseColor}; border-color:${phaseColor};`;
      } else if (this.currentMode === 'heatmap') {
        const heat = this.getHeatmapColor(el, this.currentHeatmapProp);
        styleAttr += ` --elem-accent:${heat.border}; background-color:${heat.bg}; border-color:${heat.border};`;
      }

      return `
        <div class="element-cell ${isMatched ? '' : 'dimmed'} ${phaseClass}" 
             data-number="${el.number}" 
             data-category="${el.category}"
             data-group="${el.group || ''}"
             data-period="${el.period}"
             data-block="${el.block}"
             style="${styleAttr}"
             tabindex="0"
             role="button"
             aria-label="${el.name}, ${el.symbol}, número atómico ${el.number}, masa ${el.mass}">
          
          <!-- Top Row: Atomic Number (left) & Mass (right) -->
          <div class="cell-row-top">
            <span class="cell-atomic-num">${el.number}</span>
            <span class="cell-atomic-mass">${displayMass}</span>
          </div>

          <!-- Mid Row: Electronegativity (left), Symbol (center), Oxidation (right) -->
          <div class="cell-row-mid">
            <span class="cell-electronegativity">${displayEN}</span>
            <span class="cell-symbol">${el.symbol}</span>
            <span class="cell-oxidation">${displayOxidation}</span>
          </div>

          <!-- Sub-center Row: Electron Configuration -->
          <div class="cell-electron-config">${displayConfig}</div>

          <!-- Bottom Row: Element Name -->
          <div class="cell-name">${el.name}</div>
        </div>
      `;
    }

    attachCellEvents() {
      const cells = this.container.querySelectorAll('.element-cell');
      cells.forEach(cell => {
        const num = parseInt(cell.getAttribute('data-number'), 10);
        const el = window.getElementByNumber(num);

        cell.addEventListener('click', () => {
          if (typeof this.options.onElementClick === 'function') {
            this.options.onElementClick(el);
          } else if (window.ElementModal && window.ElementModal.show) {
            window.ElementModal.show(el);
          }
        });

        cell.addEventListener('keydown', (e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (window.ElementModal && window.ElementModal.show) {
              window.ElementModal.show(el);
            }
          }
        });
      });
    }

    setupHeaderInteractions() {
      this.container.addEventListener('mouseover', (e) => {
        const colHeader = e.target.closest('.grid-header-col');
        if (colHeader) {
          const group = colHeader.getAttribute('data-group');
          this.container.querySelectorAll(`.element-cell[data-group="${group}"]`).forEach(c => c.classList.add('highlight-column'));
        }

        const rowHeader = e.target.closest('.grid-header-row');
        if (rowHeader) {
          const period = rowHeader.getAttribute('data-period');
          this.container.querySelectorAll(`.element-cell[data-period="${period}"]`).forEach(c => c.classList.add('highlight-row'));
        }
      });

      this.container.addEventListener('mouseout', (e) => {
        if (e.target.closest('.grid-header-col') || e.target.closest('.grid-header-row')) {
          this.container.querySelectorAll('.element-cell').forEach(c => {
            c.classList.remove('highlight-column', 'highlight-row');
          });
        }
      });
    }
  }

  window.TableRenderer = TableRenderer;
})(typeof window !== 'undefined' ? window : global);
