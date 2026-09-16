/**
 * ELEMENTA - Controlador del Modal de Detalles del Elemento
 */
(function(window) {
  'use strict';

  class ElementModalController {
    constructor() {
      this.currentElement = null;
      this.bohrInstance = null;
      this.atom3DInstance = null;
      this.spectrumInstance = null;
      this.activeTab = 'tab-overview';

      this.init();
    }

    init() {
      let modalOverlay = document.getElementById('elementModalOverlay');
      if (!modalOverlay) {
        modalOverlay = document.createElement('div');
        modalOverlay.id = 'elementModalOverlay';
        modalOverlay.className = 'modal-overlay';
        modalOverlay.style.display = 'none';
        document.body.appendChild(modalOverlay);
      }

      this.overlay = modalOverlay;
      this.renderSkeleton();
      this.setupEvents();
    }

    renderSkeleton() {
      this.overlay.innerHTML = `
        <div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modalElementName">
          <div class="modal-header" id="modalHeader">
            <div class="modal-identity">
              <div class="modal-elem-badge" id="modalBadge">
                <span class="badge-num" id="modalBadgeNum">1</span>
                <span class="badge-sym" id="modalBadgeSym">H</span>
                <span class="badge-mass" id="modalBadgeMass">1.008</span>
              </div>
              <div class="modal-title-group">
                <div style="display:flex;align-items:center;gap:10px;">
                  <h2 id="modalElementName" class="modal-element-title">Hidrógeno</h2>
                  <button id="btnVoicePronounce" class="icon-btn" title="Escuchar pronunciación" aria-label="Pronunciar elemento">🔊</button>
                  <button id="btnFavoriteToggle" class="icon-btn" title="Guardar como favorito" aria-label="Guardar favorito">⭐</button>
                </div>
                <div class="modal-subtags" id="modalSubtags">
                  <span class="meta-tag tag-category" id="modalCategoryTag">No metales</span>
                  <span class="meta-tag" id="modalGroupTag">Grupo 1</span>
                  <span class="meta-tag" id="modalPeriodTag">Periodo 1</span>
                  <span class="meta-tag" id="modalBlockTag">Bloque s</span>
                </div>
              </div>
            </div>

            <div class="modal-nav-controls">
              <button id="btnPrevElement" class="modal-nav-btn" title="Elemento anterior (Flecha Izquierda)" aria-label="Elemento anterior">◀</button>
              <button id="btnNextElement" class="modal-nav-btn" title="Elemento siguiente (Flecha Derecha)" aria-label="Elemento siguiente">▶</button>
              <button id="btnCloseModal" class="modal-close-btn" title="Cerrar (Esc)" aria-label="Cerrar modal">&times;</button>
            </div>
          </div>

          <!-- Modal Tabs Navigation -->
          <div class="modal-tabs">
            <button class="modal-tab active" data-tab="tab-overview">🌟 Resumen</button>
            <button class="modal-tab" data-tab="tab-atomic">⚛️ Estructura Atómica & 3D</button>
            <button class="modal-tab" data-tab="tab-physical">🌡️ Propiedades Físicas</button>
            <button class="modal-tab" data-tab="tab-chemical">🧪 Propiedades Químicas</button>
            <button class="modal-tab" data-tab="tab-spectrum">🌈 Espectro & Isótopos</button>
            <button class="modal-tab" data-tab="tab-history">📜 Historia & Seguridad</button>
          </div>

          <!-- Modal Tabs Content -->
          <div class="modal-body" id="modalBody">
            <!-- 1. Resumen Tab -->
            <div class="tab-pane active" id="tab-overview">
              <div class="overview-grid">
                <div class="bohr-section-card">
                  <h4>Modelo de Bohr Interactivo</h4>
                  <div class="bohr-model-container" id="modalBohrContainer" style="width:100%;height:270px;"></div>
                  <div class="bohr-controls-bar">
                    <button class="pill-btn" id="btnBohrPause">⏸ Pausar</button>
                    <span style="font-size:12px;color:#94a3b8;">Velocidad:</span>
                    <input type="range" id="bohrSpeedRange" min="0.2" max="3" step="0.2" value="1" style="width:90px;" />
                  </div>
                </div>

                <div class="overview-info-card">
                  <h4>Descripción General</h4>
                  <p class="element-description" id="modalDescriptionText"></p>
                  
                  <div class="quick-props-grid">
                    <div class="quick-prop-item">
                      <span class="prop-label">Fase a 20 °C</span>
                      <span class="prop-val" id="modalPhaseVal">-</span>
                    </div>
                    <div class="quick-prop-item">
                      <span class="prop-label">Electrones Valencia</span>
                      <span class="prop-val" id="modalValenceVal">-</span>
                    </div>
                    <div class="quick-prop-item">
                      <span class="prop-label">Electronegatividad</span>
                      <span class="prop-val" id="modalElectronegVal">-</span>
                    </div>
                    <div class="quick-prop-item">
                      <span class="prop-label">Descubrimiento</span>
                      <span class="prop-val" id="modalDiscoveryVal">-</span>
                    </div>
                  </div>

                  <div class="uses-section">
                    <h5>Usos y Aplicaciones Cotidianas:</h5>
                    <div class="uses-pill-list" id="modalUsesList"></div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 2. Estructura Atómica & 3D Tab -->
            <div class="tab-pane" id="tab-atomic">
              <div class="atomic-grid">
                <div class="atomic-left-col">
                  <div class="detail-card">
                    <h4>Configuración Electrónica</h4>
                    <div class="config-display">
                      <div class="config-label">Notación estándar:</div>
                      <div class="config-code" id="modalElectronConfig">1s¹</div>
                      <div class="config-label" style="margin-top:8px;">Notación abreviada (Gas noble):</div>
                      <div class="config-code" id="modalElectronConfigSemantic">1s¹</div>
                    </div>

                    <h5 style="margin-top:16px;">Distribución de Electrones por Capa</h5>
                    <div class="shells-visual-list" id="modalShellsList"></div>
                  </div>

                  <div class="detail-card" style="margin-top:16px;">
                    <h4>Radios & Dimensiones</h4>
                    <div class="metric-row"><span>Radio Atómico:</span> <strong id="modalAtomicRadiusVal">-</strong></div>
                    <div class="metric-row"><span>Radio Covalente:</span> <strong id="modalCovalentRadiusVal">-</strong></div>
                  </div>
                </div>

                <div class="atomic-right-col">
                  <div class="detail-card">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                      <h4>Visualizador Atómico 3D (Three.js)</h4>
                      <button class="pill-btn" id="btnResetAtom3D">Centrar 3D</button>
                    </div>
                    <div class="atom3d-container" id="modalAtom3DContainer" style="width:100%;height:320px;"></div>
                    <div style="font-size:11px;color:#94a3b8;text-align:center;margin-top:4px;">
                      Arrastra para rotar en 3D | Rueda de ratón para zoom
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. Propiedades Físicas Tab -->
            <div class="tab-pane" id="tab-physical">
              <div class="props-columns-grid">
                <div class="detail-card">
                  <h4>Puntos Térmicos de Cambio de Estado</h4>
                  <div class="thermal-box">
                    <div class="thermal-item">
                      <span class="thermal-label">Punto de Fusión (Sólido ➔ Líquido):</span>
                      <div class="thermal-val" id="modalMeltingVal">-</div>
                    </div>
                    <div class="thermal-item" style="margin-top:12px;">
                      <span class="thermal-label">Punto de Ebullición (Líquido ➔ Gas):</span>
                      <div class="thermal-val" id="modalBoilingVal">-</div>
                    </div>
                  </div>
                </div>

                <div class="detail-card">
                  <h4>Propiedades Mecánicas y Densidad</h4>
                  <div class="metric-row"><span>Densidad:</span> <strong id="modalDensityVal">-</strong></div>
                  <div class="metric-row"><span>Estado Físico a 298.15 K:</span> <strong id="modalPhaseDetailVal">-</strong></div>
                  <div class="metric-row"><span>Masa Atómica Relativa:</span> <strong id="modalAtomicMassVal">-</strong></div>
                </div>
              </div>
            </div>

            <!-- 4. Propiedades Químicas Tab -->
            <div class="tab-pane" id="tab-chemical">
              <div class="props-columns-grid">
                <div class="detail-card">
                  <h4>Estados de Oxidación y Valencias</h4>
                  <p style="font-size:13px;color:#94a3b8;">Los estados de oxidación indican el número de electrones que un átomo gana o cede al formar compuestos:</p>
                  <div class="oxidation-badges-list" id="modalOxidationList"></div>
                  <div class="metric-row" style="margin-top:16px;"><span>Electrones en capa de valencia:</span> <strong id="modalValenceDetailVal">-</strong></div>
                </div>

                <div class="detail-card">
                  <h4>Electronegatividad & Energías</h4>
                  <div class="metric-row"><span>Electronegatividad (Pauling):</span> <strong id="modalElectronegDetailVal">-</strong></div>
                  <div class="progress-bar-bg" style="height:10px;margin:8px 0 16px 0;">
                    <div class="progress-bar-fill" id="modalElectronegBar" style="width:0%;background:linear-gradient(90deg, #4dabf7, #ff6b6b);"></div>
                  </div>

                  <div class="metric-row"><span>1ª Energía de Ionización:</span> <strong id="modalIonizationVal">-</strong></div>
                  <div class="metric-row"><span>Afinidad Electrónica:</span> <strong id="modalAffinityVal">-</strong></div>
                </div>
              </div>
            </div>

            <!-- 5. Espectro & Isótopos Tab -->
            <div class="tab-pane" id="tab-spectrum">
              <div class="detail-card">
                <h4>Espectro Óptico de Emisión Atómica (380 nm - 750 nm)</h4>
                <p style="font-size:13px;color:#94a3b8;">Líneas espectrales discretas emitidas cuando los electrones excitados caen a niveles de energía cuántica inferiores:</p>
                <div id="modalSpectrumContainer" style="margin-top:12px;"></div>
              </div>

              <div class="detail-card" style="margin-top:16px;">
                <h4>Isótopos Principales</h4>
                <div class="table-responsive">
                  <table class="molar-table">
                    <thead>
                      <tr>
                        <th>Isótopo</th>
                        <th>Masa (u)</th>
                        <th>Abundancia Natural / Vida Media</th>
                        <th>Estabilidad</th>
                      </tr>
                    </thead>
                    <tbody id="modalIsotopesTableBody"></tbody>
                  </table>
                </div>
              </div>
            </div>

            <!-- 6. Historia & Seguridad Tab -->
            <div class="tab-pane" id="tab-history">
              <div class="props-columns-grid">
                <div class="detail-card">
                  <h4>Historia & Descubrimiento</h4>
                  <div class="metric-row"><span>Descubridor(es):</span> <strong id="modalDiscovererVal">-</strong></div>
                  <div class="metric-row"><span>Año de Descubrimiento:</span> <strong id="modalDiscoveryYearVal">-</strong></div>
                  <div class="metric-row"><span>Nombre en Latín:</span> <strong id="modalLatinNameVal">-</strong></div>
                  <div style="margin-top:12px;font-size:13px;line-height:1.6;color:#cbd5e1;" id="modalHistoryText"></div>
                </div>

                <div class="detail-card">
                  <h4>Seguridad & Pictogramas GHS</h4>
                  <p style="font-size:13px;color:#94a3b8;">Clasificación de seguridad y precauciones para estudiantes de química:</p>
                  <div class="hazard-pill-list" id="modalHazardList"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    setupEvents() {
      // Close Modal
      this.overlay.querySelector('#btnCloseModal').addEventListener('click', () => this.hide());
      this.overlay.addEventListener('click', (e) => {
        if (e.target === this.overlay) this.hide();
      });

      // Keyboard navigation
      window.addEventListener('keydown', (e) => {
        if (this.overlay.style.display !== 'none') {
          if (e.key === 'Escape') {
            this.hide();
          } else if (e.key === 'ArrowLeft') {
            this.navigateRelative(-1);
          } else if (e.key === 'ArrowRight') {
            this.navigateRelative(1);
          }
        }
      });

      // Navigation arrows
      this.overlay.querySelector('#btnPrevElement').addEventListener('click', () => this.navigateRelative(-1));
      this.overlay.querySelector('#btnNextElement').addEventListener('click', () => this.navigateRelative(1));

      // Tab Switching
      const tabs = this.overlay.querySelectorAll('.modal-tab');
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          tabs.forEach(t => t.classList.remove('active'));
          tab.classList.add('active');
          const targetId = tab.getAttribute('data-tab');
          this.activeTab = targetId;

          const panes = this.overlay.querySelectorAll('.tab-pane');
          panes.forEach(p => p.classList.remove('active'));
          const targetPane = this.overlay.querySelector(`#${targetId}`);
          if (targetPane) targetPane.classList.add('active');

          // Trigger sub-component renders on tab change
          if (targetId === 'tab-overview' && this.bohrInstance) {
            this.bohrInstance.resize();
            this.bohrInstance.draw();
          } else if (targetId === 'tab-atomic' && this.atom3DInstance) {
            this.atom3DInstance.setElement(this.currentElement);
          } else if (targetId === 'tab-spectrum' && this.spectrumInstance) {
            this.spectrumInstance.render();
          }
        });
      });

      // Voice Pronounce
      this.overlay.querySelector('#btnVoicePronounce').addEventListener('click', () => {
        if (!this.currentElement) return;
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(this.currentElement.name);
          utterance.lang = 'es-ES';
          utterance.rate = 0.9;
          window.speechSynthesis.speak(utterance);
        }
      });

      // Favorite toggle
      this.overlay.querySelector('#btnFavoriteToggle').addEventListener('click', () => {
        if (!this.currentElement) return;
        const favorites = JSON.parse(localStorage.getItem('elementa_favorites') || '[]');
        const num = this.currentElement.number;
        const exists = favorites.includes(num);

        if (exists) {
          const updated = favorites.filter(n => n !== num);
          localStorage.setItem('elementa_favorites', JSON.stringify(updated));
          this.updateFavoriteButton(false);
        } else {
          favorites.push(num);
          localStorage.setItem('elementa_favorites', JSON.stringify(favorites));
          this.updateFavoriteButton(true);
        }
      });

      // Bohr Controls
      const btnPause = this.overlay.querySelector('#btnBohrPause');
      if (btnPause) {
        btnPause.addEventListener('click', () => {
          if (this.bohrInstance) {
            const paused = this.bohrInstance.togglePause();
            btnPause.textContent = paused ? '▶ Reanudar' : '⏸ Pausar';
          }
        });
      }

      const speedRange = this.overlay.querySelector('#bohrSpeedRange');
      if (speedRange) {
        speedRange.addEventListener('input', (e) => {
          if (this.bohrInstance) {
            this.bohrInstance.setSpeed(parseFloat(e.target.value));
          }
        });
      }

      // Reset Atom 3D
      const btnReset3D = this.overlay.querySelector('#btnResetAtom3D');
      if (btnReset3D) {
        btnReset3D.addEventListener('click', () => {
          if (this.atom3DInstance) this.atom3DInstance.resetView();
        });
      }
    }

    updateFavoriteButton(isFav) {
      const btn = this.overlay.querySelector('#btnFavoriteToggle');
      if (btn) {
        btn.textContent = isFav ? '⭐' : '☆';
        btn.style.color = isFav ? '#ffd43b' : 'inherit';
      }
    }

    navigateRelative(delta) {
      if (!this.currentElement) return;
      let nextNum = this.currentElement.number + delta;
      if (nextNum < 1) nextNum = 118;
      if (nextNum > 118) nextNum = 1;
      const el = window.getElementByNumber(nextNum);
      if (el) this.show(el);
    }

    show(element) {
      if (!element) return;
      this.currentElement = element;

      const catMeta = window.CATEGORY_META[element.category] || { color: '#00f0ff' };

      // Header Identity
      document.getElementById('modalBadge').style.borderColor = catMeta.color;
      document.getElementById('modalBadgeNum').textContent = element.number;
      document.getElementById('modalBadgeSym').textContent = element.symbol;
      document.getElementById('modalBadgeMass').textContent = element.mass;
      document.getElementById('modalElementName').textContent = element.name;

      const catTag = document.getElementById('modalCategoryTag');
      catTag.textContent = element.categoryName;
      catTag.style.backgroundColor = catMeta.color;
      catTag.style.color = '#000';

      document.getElementById('modalGroupTag').textContent = element.group ? `Grupo ${element.group}` : 'Lantánido/Actínido';
      document.getElementById('modalPeriodTag').textContent = `Periodo ${element.period}`;
      document.getElementById('modalBlockTag').textContent = `Bloque ${element.block}`;

      // Favorites
      const favorites = JSON.parse(localStorage.getItem('elementa_favorites') || '[]');
      this.updateFavoriteButton(favorites.includes(element.number));

      // 1. Resumen Tab
      document.getElementById('modalDescriptionText').textContent = element.description;
      document.getElementById('modalPhaseVal').textContent = element.phase === 'gas' ? 'Gas' : (element.phase === 'liquid' ? 'Líquido' : 'Sólido');
      document.getElementById('modalValenceVal').textContent = element.valenceElectrons;
      document.getElementById('modalElectronegVal').textContent = element.electronegativity !== null ? element.electronegativity : 'N/A';
      document.getElementById('modalDiscoveryVal').textContent = `${element.discoveryYear}`;

      const usesList = document.getElementById('modalUsesList');
      usesList.innerHTML = (element.uses || []).map(u => `<span class="use-pill">${u}</span>`).join('');

      // Initialize Bohr Model
      const bohrBox = document.getElementById('modalBohrContainer');
      if (!this.bohrInstance) {
        this.bohrInstance = new window.BohrModel(bohrBox);
      }
      this.bohrInstance.setElement(element);

      // 2. Estructura Atómica Tab
      document.getElementById('modalElectronConfig').textContent = element.electronConfiguration;
      document.getElementById('modalElectronConfigSemantic').textContent = element.electronConfigurationSemantic;

      const shellsList = document.getElementById('modalShellsList');
      const shellLetters = ['K (n=1)', 'L (n=2)', 'M (n=3)', 'N (n=4)', 'O (n=5)', 'P (n=6)', 'Q (n=7)'];
      shellsList.innerHTML = (element.electronsPerShell || []).map((count, idx) => `
        <div class="shell-row">
          <span class="shell-name">${shellLetters[idx]}</span>
          <div class="progress-bar-bg" style="flex:1;height:8px;margin:0 10px;">
            <div class="progress-bar-fill" style="width:${(count / (2 * Math.pow(idx + 1, 2))) * 100}%;background:${catMeta.color};"></div>
          </div>
          <span class="shell-count"><strong>${count}</strong> e⁻</span>
        </div>
      `).join('');

      document.getElementById('modalAtomicRadiusVal').textContent = element.atomicRadius ? `${element.atomicRadius} pm` : 'N/A';
      document.getElementById('modalCovalentRadiusVal').textContent = element.covalentRadius ? `${element.covalentRadius} pm` : 'N/A';

      // Initialize 3D Atom
      const atom3DBox = document.getElementById('modalAtom3DContainer');
      if (!this.atom3DInstance && typeof window.Atom3D !== 'undefined') {
        this.atom3DInstance = new window.Atom3D(atom3DBox);
      }
      if (this.atom3DInstance) {
        this.atom3DInstance.setElement(element);
      }

      // 3. Propiedades Físicas Tab
      const formatTemp = (kelvin) => {
        if (!kelvin) return 'Desconocido';
        const celsius = (kelvin - 273.15).toFixed(2);
        const fahrenheit = ((celsius * 9/5) + 32).toFixed(2);
        return `<strong>${celsius} °C</strong> <small style="color:#94a3b8;">(${kelvin} K / ${fahrenheit} °F)</small>`;
      };

      document.getElementById('modalMeltingVal').innerHTML = formatTemp(element.meltingPoint);
      document.getElementById('modalBoilingVal').innerHTML = formatTemp(element.boilingPoint);
      document.getElementById('modalDensityVal').textContent = element.density ? `${element.density} g/cm³` : 'Desconocida';
      document.getElementById('modalPhaseDetailVal').textContent = element.phase.toUpperCase();
      document.getElementById('modalAtomicMassVal').textContent = `${element.mass} u (g/mol)`;

      // 4. Propiedades Químicas Tab
      const oxList = document.getElementById('modalOxidationList');
      oxList.innerHTML = (element.oxidationStates || []).map(ox => `
        <span class="ox-badge">${ox > 0 ? '+' + ox : ox}</span>
      `).join('');

      document.getElementById('modalValenceDetailVal').textContent = `${element.valenceElectrons} e⁻`;
      document.getElementById('modalElectronegDetailVal').textContent = element.electronegativity !== null ? element.electronegativity : 'N/A';
      
      const enPercent = element.electronegativity ? (element.electronegativity / 4.0) * 100 : 0;
      document.getElementById('modalElectronegBar').style.width = `${enPercent}%`;

      document.getElementById('modalIonizationVal').textContent = element.ionizationEnergy ? `${element.ionizationEnergy} kJ/mol` : 'N/A';
      document.getElementById('modalAffinityVal').textContent = element.electronAffinity !== null && element.electronAffinity !== undefined ? `${element.electronAffinity} kJ/mol` : 'N/A';

      // 5. Espectro & Isótopos Tab
      const specContainer = document.getElementById('modalSpectrumContainer');
      if (!this.spectrumInstance) {
        this.spectrumInstance = new window.EmissionSpectrum(specContainer);
      }
      this.spectrumInstance.setElement(element);

      const isoTableBody = document.getElementById('modalIsotopesTableBody');
      isoTableBody.innerHTML = (element.isotopes || []).map(iso => `
        <tr>
          <td><strong>${iso.name}</strong></td>
          <td>${iso.mass}</td>
          <td>${iso.abundance || iso.halfLife || '-'}</td>
          <td>
            <span class="${iso.stable ? 'status-balanced' : 'status-unstable'}">
              ${iso.stable ? '🟢 Estable' : '🟡 Radiactivo (' + (iso.halfLife || 'Inestable') + ')'}
            </span>
          </td>
        </tr>
      `).join('');

      // 6. Historia & Seguridad Tab
      document.getElementById('modalDiscovererVal').textContent = element.discoveredBy;
      document.getElementById('modalDiscoveryYearVal').textContent = element.discoveryYear;
      document.getElementById('modalLatinNameVal').textContent = element.latinName;
      document.getElementById('modalHistoryText').textContent = element.summary;

      const hazardList = document.getElementById('modalHazardList');
      hazardList.innerHTML = (element.hazard || ['No peligroso']).map(h => {
        let icon = 'ℹ️';
        if (h.includes('Inflamable')) icon = '🔥';
        else if (h.includes('Tóxico')) icon = '☠️';
        else if (h.includes('Corrosivo')) icon = '🧪';
        else if (h.includes('Radiactivo')) icon = '☢️';
        else if (h.includes('Comburente')) icon = '💥';
        else if (h.includes('presión')) icon = '💨';

        return `<span class="hazard-pill"><span style="margin-right:4px;">${icon}</span> ${h}</span>`;
      }).join('');

      this.overlay.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }

    hide() {
      this.overlay.style.display = 'none';
      document.body.style.overflow = '';
      if (this.bohrInstance) {
        this.bohrInstance.stop();
      }
      if (this.atom3DInstance) {
        this.atom3DInstance.destroy();
        this.atom3DInstance = null;
      }
    }
  }

  window.ElementModal = new ElementModalController();
})(typeof window !== 'undefined' ? window : global);
