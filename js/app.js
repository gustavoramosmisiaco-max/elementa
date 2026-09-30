/**
 * ELEMENTA - Controlador Principal de la Aplicación
 */
(function(window) {
  'use strict';

  class ElementaApp {
    constructor() {
      this.tableRenderer = null;
      this.table3D = null;
      this.molarCalculator = null;
      this.equationBalancer = null;
      this.elementComparator = null;
      this.practiceQuiz = null;

      this.currentView = 'view-table';
      this.currentTheme = localStorage.getItem('elementa_theme') || 'light';

      document.addEventListener('DOMContentLoaded', () => this.init());
    }

    init() {
      // Apply initial theme
      this.applyTheme(this.currentTheme);

      // Initialize Main Table Renderer
      const tableContainer = document.getElementById('periodicTableContainer');
      if (tableContainer) {
        this.tableRenderer = new window.TableRenderer(tableContainer, {
          onElementClick: (el) => {
            if (window.ElementModal) window.ElementModal.show(el);
          },
          onRender: (matched) => this.updateFilterStatus(matched)
        });
      }

      this.setupNavigation();
      this.setupSearchAndFilters();
      this.setupFiltersPanel();
      this.setupKeyboardShortcuts();
      this.setupThemeToggle();
      this.setupTemperatureSlider();
      this.setupHeatmapControls();
      this.setupCategoryPills();
      this.setupPrintExport();
    }

    setupNavigation() {
      const navButtons = document.querySelectorAll('.nav-tab-btn');
      const viewSections = document.querySelectorAll('.view-section');

      navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetView = btn.getAttribute('data-view');
          if (!targetView) return;

          navButtons.forEach(b => b.classList.remove('active'));
          btn.classList.add('active');

          viewSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetView) {
              section.classList.add('active');
            }
          });

          this.currentView = targetView;
          this.handleViewActivation(targetView);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    }

    handleViewActivation(viewId) {
      // Show / hide top filter controls for Table view
      const controlsBar = document.getElementById('tableControlsSection');
      if (controlsBar) {
        controlsBar.style.display = viewId === 'view-table' ? 'block' : 'none';
      }

      if (viewId === 'view-3d') {
        const container = document.getElementById('table3DContainer');
        if (!this.table3D && container && typeof window.Table3D !== 'undefined') {
          this.table3D = new window.Table3D(container, {
            onElementClick: (el) => {
              if (window.ElementModal) window.ElementModal.show(el);
            }
          });
        }
      } else if (viewId === 'view-molar') {
        const container = document.getElementById('molarToolContainer');
        if (!this.molarCalculator && container && typeof window.MolarMassCalculator !== 'undefined') {
          this.molarCalculator = new window.MolarMassCalculator(container);
        }
      } else if (viewId === 'view-balancer') {
        const container = document.getElementById('balancerToolContainer');
        if (!this.equationBalancer && container && typeof window.ChemicalEquationBalancer !== 'undefined') {
          this.equationBalancer = new window.ChemicalEquationBalancer(container);
        }
      } else if (viewId === 'view-compounds') {
        const container = document.getElementById('compoundToolContainer');
        if (!this.compoundBuilder && container && typeof window.CompoundBuilder !== 'undefined') {
          this.compoundBuilder = new window.CompoundBuilder(container);
        }
      } else if (viewId === 'view-comparator') {
        const container = document.getElementById('comparatorToolContainer');
        if (!this.elementComparator && container && typeof window.ElementComparator !== 'undefined') {
          this.elementComparator = new window.ElementComparator(container);
        }
      } else if (viewId === 'view-quiz') {
        const container = document.getElementById('quizToolContainer');
        if (!this.practiceQuiz && container && typeof window.PracticeQuiz !== 'undefined') {
          this.practiceQuiz = new window.PracticeQuiz(container);
        }
      }
    }

    setupSearchAndFilters() {
      const searchInput = document.getElementById('globalSearchInput');
      if (searchInput && this.tableRenderer) {
        searchInput.addEventListener('input', (e) => {
          this.tableRenderer.setSearch(e.target.value);
        });

        searchInput.addEventListener('keydown', (e) => {
          if (e.key === 'Enter') {
            // Abre la ficha del mejor resultado (coincidencia exacta de símbolo/número primero)
            const q = searchInput.value.trim().toLowerCase();
            const matches = this.tableRenderer.matchedElements || [];
            if (!q || !matches.length) return;
            const best = matches.find(el => el.symbol.toLowerCase() === q || String(el.number) === q) || matches[0];
            searchInput.blur();
            if (window.ElementModal) window.ElementModal.show(best);
          } else if (e.key === 'Escape') {
            this.clearSearch();
            searchInput.blur();
          }
        });
      }

      const clearBtn = document.getElementById('btnClearSearch');
      if (clearBtn) {
        clearBtn.addEventListener('click', () => {
          this.clearSearch();
          if (searchInput) searchInput.focus();
        });
      }

      // Block filters
      const blockSelect = document.getElementById('blockFilterSelect');
      if (blockSelect && this.tableRenderer) {
        blockSelect.addEventListener('change', (e) => {
          this.tableRenderer.setFilter('block', e.target.value);
        });
      }

      // Type filter (Metals, Non-metals, Metalloids, Radioactive)
      const typeSelect = document.getElementById('typeFilterSelect');
      if (typeSelect && this.tableRenderer) {
        typeSelect.addEventListener('change', (e) => {
          this.tableRenderer.setFilter('type', e.target.value);
        });
      }
    }

    clearSearch() {
      const searchInput = document.getElementById('globalSearchInput');
      if (searchInput) searchInput.value = '';
      if (this.tableRenderer) this.tableRenderer.setSearch('');
    }

    /** Contador de resultados, botón ✕ de la búsqueda y número de filtros activos */
    updateFilterStatus(matched) {
      const r = this.tableRenderer;
      if (!r) return;
      const total = (window.ELEMENTS_DATA || []).length;
      const activeFilters = [r.activeCategoryFilter, r.activeBlockFilter, r.activeTypeFilter]
        .filter(v => v && v !== 'all').length;
      const narrowed = !!r.searchQuery || activeFilters > 0;

      const count = document.getElementById('searchResultCount');
      if (count) {
        count.textContent = narrowed ? `${matched.length} de ${total}` : '';
        count.classList.toggle('is-empty', narrowed && matched.length === 0);
      }

      const wrapper = document.querySelector('.search-box-wrapper');
      if (wrapper) wrapper.classList.toggle('has-value', !!r.searchQuery);

      const badge = document.getElementById('filtersActiveBadge');
      if (badge) badge.textContent = activeFilters ? activeFilters : '';

      const resetBtn = document.getElementById('btnResetFilters');
      if (resetBtn) resetBtn.disabled = !narrowed;
    }

    setupFiltersPanel() {
      const toggleBtn = document.getElementById('btnToggleFilters');
      const panel = document.getElementById('filtersPanel');
      if (toggleBtn && panel) {
        toggleBtn.addEventListener('click', () => {
          const open = panel.classList.toggle('is-open');
          toggleBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
          toggleBtn.classList.toggle('active', open);
        });
      }

      const resetBtn = document.getElementById('btnResetFilters');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          const blockSelect = document.getElementById('blockFilterSelect');
          const typeSelect = document.getElementById('typeFilterSelect');
          if (blockSelect) blockSelect.value = 'all';
          if (typeSelect) typeSelect.value = 'all';
          document.querySelectorAll('.cat-pill').forEach(p => {
            p.classList.toggle('active', p.getAttribute('data-category') === 'all');
          });
          const searchInput = document.getElementById('globalSearchInput');
          if (searchInput) searchInput.value = '';

          if (this.tableRenderer) {
            this.tableRenderer.activeBlockFilter = 'all';
            this.tableRenderer.activeTypeFilter = 'all';
            this.tableRenderer.activeCategoryFilter = 'all';
            this.tableRenderer.setSearch('');
          }
        });
      }
    }

    setupKeyboardShortcuts() {
      window.addEventListener('keydown', (e) => {
        const tag = (e.target.tagName || '').toLowerCase();
        const typing = tag === 'input' || tag === 'select' || tag === 'textarea' || e.target.isContentEditable;
        const modalOpen = !!document.querySelector('.modal-overlay') &&
          document.querySelector('.modal-overlay').style.display !== 'none';
        if (typing || modalOpen || this.currentView !== 'view-table') return;

        // "/" enfoca el buscador
        if (e.key === '/') {
          e.preventDefault();
          const searchInput = document.getElementById('globalSearchInput');
          if (searchInput) searchInput.focus();
        }
      });
    }

    setupCategoryPills() {
      const pillContainer = document.getElementById('categoryPillsContainer');
      if (!pillContainer) return;

      const meta = window.CATEGORY_META || {};
      let html = '<button class="cat-pill active" data-category="all"><span class="pill-dot" style="background:#00f0ff;"></span> Todos (118)</button>';

      for (const [key, val] of Object.entries(meta)) {
        html += `
          <button class="cat-pill" data-category="${key}">
            <span class="pill-dot" style="background:${val.color};"></span>
            ${val.name}
          </button>
        `;
      }

      pillContainer.innerHTML = html;

      const pills = pillContainer.querySelectorAll('.cat-pill');
      pills.forEach(pill => {
        // Vista previa: al pasar sobre la leyenda se iluminan esos elementos en la tabla
        pill.addEventListener('mouseenter', () => {
          const cat = pill.getAttribute('data-category');
          if (this.tableRenderer) this.tableRenderer.highlightCategory(cat === 'all' ? null : cat);
        });
        pill.addEventListener('mouseleave', () => {
          if (this.tableRenderer) this.tableRenderer.highlightCategory(null);
        });

        pill.addEventListener('click', () => {
          pills.forEach(p => p.classList.remove('active'));
          pill.classList.add('active');
          const cat = pill.getAttribute('data-category');
          if (this.tableRenderer) {
            this.tableRenderer.setFilter('category', cat);
          }
        });
      });
    }

    setupTemperatureSlider() {
      const slider = document.getElementById('tempRangeSlider');
      const badge = document.getElementById('tempDisplayBadge');
      const stateModeBtn = document.getElementById('btnModeState');

      if (slider && badge) {
        slider.addEventListener('input', (e) => {
          const kelvin = parseFloat(e.target.value);
          const celsius = (kelvin - 273.15).toFixed(0);
          badge.textContent = `${celsius} °C (${kelvin} K)`;

          if (this.tableRenderer) {
            this.tableRenderer.setTemperature(kelvin);
          }
        });
      }

      if (stateModeBtn) {
        stateModeBtn.addEventListener('click', () => {
          this.setActiveViewModeButton(stateModeBtn);
          const tempBox = document.getElementById('tempSliderWrapper');
          if (tempBox) tempBox.style.display = 'flex';
          const heatBox = document.getElementById('heatmapSelectWrapper');
          if (heatBox) heatBox.style.display = 'none';

          if (this.tableRenderer) {
            this.tableRenderer.setMode('state');
          }
        });
      }

      const defaultCategoryBtn = document.getElementById('btnModeCategory');
      if (defaultCategoryBtn) {
        defaultCategoryBtn.addEventListener('click', () => {
          this.setActiveViewModeButton(defaultCategoryBtn);
          const tempBox = document.getElementById('tempSliderWrapper');
          if (tempBox) tempBox.style.display = 'none';
          const heatBox = document.getElementById('heatmapSelectWrapper');
          if (heatBox) heatBox.style.display = 'none';

          if (this.tableRenderer) {
            this.tableRenderer.setMode('category');
          }
        });
      }
    }

    setupHeatmapControls() {
      const heatModeBtn = document.getElementById('btnModeHeatmap');
      const heatSelect = document.getElementById('heatmapPropSelect');

      if (heatModeBtn) {
        heatModeBtn.addEventListener('click', () => {
          this.setActiveViewModeButton(heatModeBtn);
          const tempBox = document.getElementById('tempSliderWrapper');
          if (tempBox) tempBox.style.display = 'none';
          const heatBox = document.getElementById('heatmapSelectWrapper');
          if (heatBox) heatBox.style.display = 'flex';

          if (this.tableRenderer && heatSelect) {
            this.tableRenderer.setMode('heatmap', heatSelect.value);
          }
        });
      }

      if (heatSelect) {
        heatSelect.addEventListener('change', (e) => {
          if (this.tableRenderer) {
            this.tableRenderer.setMode('heatmap', e.target.value);
          }
        });
      }
    }

    setActiveViewModeButton(targetBtn) {
      const btns = document.querySelectorAll('.view-mode-btn');
      btns.forEach(b => b.classList.remove('active'));
      targetBtn.classList.add('active');
    }

    setupThemeToggle() {
      const toggleBtn = document.getElementById('btnThemeToggle');
      if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
          const nextTheme = this.currentTheme === 'dark' ? 'light' : 'dark';
          this.applyTheme(nextTheme);
        });
      }
    }

    applyTheme(theme) {
      this.currentTheme = theme;
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('elementa_theme', theme);
      const toggleBtn = document.getElementById('btnThemeToggle');
      if (toggleBtn) {
        toggleBtn.textContent = theme === 'dark' ? '☀️' : '🌙';
        toggleBtn.title = theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';
      }
    }

    setupPrintExport() {
      const printBtn = document.getElementById('btnPrintTable');
      if (printBtn) {
        printBtn.addEventListener('click', () => {
          window.print();
        });
      }
    }
  }

  window.ElementaApp = new ElementaApp();
})(typeof window !== 'undefined' ? window : global);
