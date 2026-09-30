/**
 * ELEMENTA - Formador de Compuestos (inorgánicos y orgánicos)
 * Interfaz sobre los motores js/chem/inorganic.js y js/chem/organic.js
 */
(function(window) {
  'use strict';

  const ROMAN_WORDS = { I: 'uno', II: 'dos', III: 'tres', IV: 'cuatro', V: 'cinco', VI: 'seis', VII: 'siete' };
  const fmtMass = m => m.toFixed(3).replace('.', ',');
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const INORG_EXAMPLES = [
    { label: 'Fe₂O₃', type: 'oxidoBasico', metal: 'Fe', v: 3 },
    { label: 'CO₂', type: 'oxidoAcido', nonmetal: 'C', vn: 4 },
    { label: 'NaOH', type: 'hidroxido', metal: 'Na', v: 1 },
    { label: 'NH₃', type: 'hidruroNoMetalico', nonmetal: 'N' },
    { label: 'HCl', type: 'hidracido', nonmetal: 'Cl' },
    { label: 'H₂SO₄', type: 'oxacido', nonmetal: 'S', vn: 6 },
    { label: 'NaCl', type: 'salBinaria', metal: 'Na', v: 1, nonmetal: 'Cl' },
    { label: 'CaCO₃', type: 'oxisal', metal: 'Ca', v: 2, nonmetal: 'C', vn: 4 },
    { label: 'KMnO₄', type: 'oxisal', metal: 'K', v: 1, nonmetal: 'Mn', vn: 7 },
    { label: 'Fe₂(SO₄)₃', type: 'oxisal', metal: 'Fe', v: 3, nonmetal: 'S', vn: 6 }
  ];

  const ORG_EXAMPLES = [
    { label: 'Etanol', fn: 'alcohol', n: 2, pos: 1, subs: [] },
    { label: 'Acetona', fn: 'cetona', n: 3, pos: 2, subs: [] },
    { label: 'Ácido acético', fn: 'acido', n: 2, subs: [] },
    { label: 'Propeno', fn: 'alqueno', n: 3, pos: 1, subs: [] },
    { label: 'Acetileno', fn: 'alquino', n: 2, pos: 1, subs: [] },
    { label: 'Isobutano', fn: 'alcano', n: 3, subs: [{ type: 'metil', pos: 2 }] },
    { label: 'Cloroformo', fn: 'alcano', n: 1, subs: [{ type: 'cloro', pos: 1 }, { type: 'cloro', pos: 1 }, { type: 'cloro', pos: 1 }] },
    { label: 'Formol', fn: 'aldehido', n: 1, subs: [] },
    { label: '2-metilbutan-2-ol', fn: 'alcohol', n: 4, pos: 2, subs: [{ type: 'metil', pos: 2 }] }
  ];

  const ORG_POS_LABEL = {
    alqueno: p => `C${p}=C${p + 1}`,
    alquino: p => `C${p}≡C${p + 1}`,
    alcohol: p => `C${p}`,
    cetona: p => `C${p}`,
    amina: p => `C${p}`
  };

  const ATOM_COLORS = { O: '#e03131', N: '#1c7ed6', Cl: '#2f9e44', Br: '#a61e4d', I: '#7048e8', F: '#0c8599' };

  class CompoundBuilder {
    constructor(container) {
      this.container = typeof container === 'string' ? document.getElementById(container) : container;
      this.inorg = { type: 'oxidoBasico', metal: 'Fe', v: 3, nonmetal: 'S', vn: 6 };
      this.org = { fn: 'alcohol', n: 3, pos: 2, subs: [] };
      this.activeTab = 'inorganic';
      this.init();
    }

    init() {
      if (!this.container || !window.InorganicChem || !window.OrganicChem) return;
      this.container.innerHTML = `
        <div class="cb-wrapper">
          <div class="tool-header">
            <h3><i class="tool-icon">🧪</i> Formador de Compuestos</h3>
            <p class="tool-desc">Elige los elementos y sus valencias: obtén la fórmula, las tres nomenclaturas (sistemática, Stock y tradicional), la reacción de formación balanceada y la masa molar. En orgánica, construye la cadena y obtén el nombre IUPAC, el nombre común y su estructura.</p>
          </div>

          <div class="cb-tabs" role="tablist">
            <button class="cb-tab active" role="tab" data-tab="inorganic" aria-selected="true">⚗️ Inorgánicos</button>
            <button class="cb-tab" role="tab" data-tab="organic" aria-selected="false">🧬 Orgánicos</button>
          </div>

          <section class="cb-panel" id="cbPanelInorganic">
            <div class="cb-layout">
              <div class="cb-controls">
                <div class="cb-step">
                  <span class="cb-step-label"><b>1</b> Tipo de compuesto</span>
                  <div class="cb-type-grid" id="cbTypeGrid"></div>
                </div>
                <div class="cb-step" id="cbMetalStep">
                  <span class="cb-step-label"><b>2</b> Metal <small id="cbMetalHint"></small></span>
                  <div class="cb-element-grid" id="cbMetalGrid"></div>
                  <div class="cb-valence-row" id="cbMetalValences"></div>
                </div>
                <div class="cb-step" id="cbNonmetalStep">
                  <span class="cb-step-label"><b id="cbNonmetalNum">3</b> No metal <small id="cbNonmetalHint"></small></span>
                  <div class="cb-element-grid" id="cbNonmetalGrid"></div>
                  <div class="cb-valence-row" id="cbNonmetalValences"></div>
                </div>
                <div class="cb-examples">
                  <span class="examples-label">Ejemplos:</span>
                  <div class="cb-example-list" id="cbInorgExamples"></div>
                  <button class="pill-btn cb-random" id="cbInorgRandom">🎲 Al azar</button>
                </div>
              </div>
              <div class="cb-result" id="cbInorgResult" aria-live="polite"></div>
            </div>
          </section>

          <section class="cb-panel" id="cbPanelOrganic" hidden>
            <div class="cb-layout">
              <div class="cb-controls">
                <div class="cb-step">
                  <span class="cb-step-label"><b>1</b> Función química</span>
                  <div class="cb-type-grid" id="cbFnGrid"></div>
                </div>
                <div class="cb-step">
                  <span class="cb-step-label"><b>2</b> Carbonos en la cadena principal: <b class="cb-count" id="cbCarbonCount">3</b></span>
                  <div class="cb-stepper">
                    <button class="cb-stepper-btn" id="cbCarbonMinus" aria-label="Menos carbonos">−</button>
                    <input type="range" id="cbCarbonRange" min="1" max="10" value="3" aria-label="Número de carbonos" />
                    <button class="cb-stepper-btn" id="cbCarbonPlus" aria-label="Más carbonos">+</button>
                  </div>
                </div>
                <div class="cb-step" id="cbPosStep">
                  <span class="cb-step-label"><b>3</b> <span id="cbPosLabel">Posición</span></span>
                  <div class="cb-valence-row" id="cbPosButtons"></div>
                </div>
                <div class="cb-step">
                  <span class="cb-step-label"><b id="cbSubsNum">4</b> Sustituyentes (ramificaciones y halógenos)</span>
                  <div class="cb-subs-list" id="cbSubsList"></div>
                  <button class="pill-btn" id="cbAddSub">＋ Añadir sustituyente</button>
                </div>
                <div class="cb-examples">
                  <span class="examples-label">Ejemplos:</span>
                  <div class="cb-example-list" id="cbOrgExamples"></div>
                  <button class="pill-btn cb-random" id="cbOrgRandom">🎲 Al azar</button>
                </div>
              </div>
              <div class="cb-result" id="cbOrgResult" aria-live="polite"></div>
            </div>
          </section>
        </div>
      `;

      this.setupTabs();
      this.setupInorganic();
      this.setupOrganic();
      this.renderInorganic();
      this.renderOrganic();
    }

    // ---------------------------------------------------------------- Pestañas
    setupTabs() {
      const tabs = this.container.querySelectorAll('.cb-tab');
      tabs.forEach(tab => tab.addEventListener('click', () => {
        this.activeTab = tab.dataset.tab;
        tabs.forEach(t => {
          const on = t === tab;
          t.classList.toggle('active', on);
          t.setAttribute('aria-selected', on ? 'true' : 'false');
        });
        this.container.querySelector('#cbPanelInorganic').hidden = this.activeTab !== 'inorganic';
        this.container.querySelector('#cbPanelOrganic').hidden = this.activeTab !== 'organic';
      }));
    }

    // ------------------------------------------------------------ Inorgánicos
    setupInorganic() {
      const C = window.InorganicChem;
      const typeGrid = this.container.querySelector('#cbTypeGrid');
      typeGrid.innerHTML = Object.entries(C.TYPES).map(([key, t]) => `
        <button class="cb-type-chip" data-type="${key}">
          <span class="cb-type-name">${t.label}</span>
          <span class="cb-type-desc">${t.desc}</span>
        </button>`).join('');
      typeGrid.addEventListener('click', e => {
        const btn = e.target.closest('.cb-type-chip');
        if (!btn) return;
        this.inorg.type = btn.dataset.type;
        this.renderInorganic();
      });

      this.container.querySelector('#cbInorgExamples').innerHTML = INORG_EXAMPLES
        .map((ex, i) => `<button class="pill-btn" data-ex="${i}">${ex.label}</button>`).join('');
      this.container.querySelector('#cbInorgExamples').addEventListener('click', e => {
        const btn = e.target.closest('[data-ex]');
        if (!btn) return;
        const ex = INORG_EXAMPLES[Number(btn.dataset.ex)];
        Object.assign(this.inorg, ex);
        this.renderInorganic(true);
      });

      this.container.querySelector('#cbInorgRandom').addEventListener('click', () => {
        const types = Object.keys(C.TYPES);
        const type = types[Math.floor(Math.random() * types.length)];
        const opts = C.optionsFor(type);
        const pick = arr => arr[Math.floor(Math.random() * arr.length)];
        this.inorg.type = type;
        if (opts.metals) { const m = pick(opts.metals); this.inorg.metal = m.symbol; this.inorg.v = pick(m.valences); }
        if (opts.nonmetals) { const nm = pick(opts.nonmetals); this.inorg.nonmetal = nm.symbol; this.inorg.vn = pick(nm.valences); }
        this.renderInorganic(true);
      });

      const pickHandler = (gridId, key) => {
        this.container.querySelector(gridId).addEventListener('click', e => {
          const btn = e.target.closest('.cb-el');
          if (!btn) return;
          this.inorg[key] = btn.dataset.symbol;
          this.renderInorganic();
        });
      };
      pickHandler('#cbMetalGrid', 'metal');
      pickHandler('#cbNonmetalGrid', 'nonmetal');

      this.container.querySelector('#cbMetalValences').addEventListener('click', e => {
        const btn = e.target.closest('[data-val]');
        if (!btn) return;
        this.inorg.v = Number(btn.dataset.val);
        this.renderInorganic();
      });
      this.container.querySelector('#cbNonmetalValences').addEventListener('click', e => {
        const btn = e.target.closest('[data-val]');
        if (!btn) return;
        this.inorg.vn = Number(btn.dataset.val);
        this.renderInorganic();
      });
    }

    elementTile(symbol, selected) {
      const el = window.getElementBySymbol ? window.getElementBySymbol(symbol) : null;
      const meta = el && window.CATEGORY_META ? window.CATEGORY_META[el.category] : null;
      const color = meta ? meta.color : '#94a3b8';
      return `<button class="cb-el ${selected ? 'selected' : ''}" data-symbol="${symbol}" style="--el-color:${color}" title="${el ? el.name : symbol}" aria-pressed="${selected}">
        <span class="cb-el-num">${el ? el.number : ''}</span>
        <span class="cb-el-sym">${symbol}</span>
        <span class="cb-el-name">${el ? el.name : ''}</span>
      </button>`;
    }

    valenceButtons(values, selected, sign) {
      if (values.length === 1) {
        return `<span class="cb-valence-fixed">Valencia: <b>${sign}${Math.abs(values[0])}</b> (única)</span>`;
      }
      return `<span class="cb-valence-label">Valencia:</span>` + values.map(v =>
        `<button class="cb-val-btn ${v === selected ? 'active' : ''}" data-val="${v}" aria-pressed="${v === selected}">${sign}${Math.abs(v)}</button>`
      ).join('');
    }

    renderInorganic(scrollToResult = false) {
      const C = window.InorganicChem;
      const s = this.inorg;
      const opts = C.optionsFor(s.type);

      this.container.querySelectorAll('.cb-type-chip').forEach(b => b.classList.toggle('active', b.dataset.type === s.type));

      // Metal
      const metalStep = this.container.querySelector('#cbMetalStep');
      metalStep.hidden = !opts.metals;
      if (opts.metals) {
        if (!opts.metals.some(m => m.symbol === s.metal)) s.metal = opts.metals[0].symbol;
        const m = opts.metals.find(x => x.symbol === s.metal);
        if (!m.valences.includes(s.v)) s.v = m.valences[m.valences.length - 1];
        this.container.querySelector('#cbMetalGrid').innerHTML = opts.metals.map(x => this.elementTile(x.symbol, x.symbol === s.metal)).join('');
        this.container.querySelector('#cbMetalValences').innerHTML = this.valenceButtons(m.valences, s.v, '+');
        this.container.querySelector('#cbMetalHint').textContent = `(${opts.metals.length} disponibles)`;
      }

      // No metal
      const nmStep = this.container.querySelector('#cbNonmetalStep');
      nmStep.hidden = !opts.nonmetals;
      this.container.querySelector('#cbNonmetalNum').textContent = opts.metals ? '3' : '2';
      if (opts.nonmetals) {
        if (!opts.nonmetals.some(n => n.symbol === s.nonmetal)) s.nonmetal = opts.nonmetals[0].symbol;
        const nm = opts.nonmetals.find(x => x.symbol === s.nonmetal);
        if (!nm.valences.includes(s.vn)) s.vn = nm.valences[nm.valences.length - 1];
        this.container.querySelector('#cbNonmetalGrid').innerHTML = opts.nonmetals.map(x => this.elementTile(x.symbol, x.symbol === s.nonmetal)).join('');
        const sign = nm.valences[0] < 0 ? '−' : '+';
        this.container.querySelector('#cbNonmetalValences').innerHTML = this.valenceButtons(nm.valences, s.vn, sign);
        const hints = {
          oxisal: '(valencia con la que forma el oxácido)',
          oxacido: '(valencia del no metal en el ácido)',
          oxidoAcido: '(valencia frente al oxígeno)'
        };
        this.container.querySelector('#cbNonmetalHint').textContent = hints[s.type] || '';
      }

      // Parámetros para el motor
      const params = {};
      if (opts.metals) { params.metal = s.metal; params.v = s.v; }
      if (opts.nonmetals) {
        params.nonmetal = s.nonmetal;
        if (s.type === 'oxisal') params.vn = s.vn;
        else if (!opts.metals) params.v = s.vn;
      }

      const out = this.container.querySelector('#cbInorgResult');
      try {
        const r = C.build(s.type, params);
        out.innerHTML = this.inorganicResultHTML(r);
        this.bindSpeak(out);
      } catch (err) {
        out.innerHTML = `<div class="tool-error">${esc(err.message)}</div>`;
      }
      if (scrollToResult) this.scrollIntoViewIfNarrow(out);
    }

    inorganicResultHTML(r) {
      const card = (key, title, badge) => `
        <div class="cb-name-card cb-name-${key}">
          <div class="cb-name-head">
            <span class="cb-name-title">${title}</span>
            <span class="cb-name-badge">${badge}</span>
          </div>
          <div class="cb-name-value">
            <span>${esc(r.names[key])}</span>
            <button class="cb-speak" data-say="${esc(r.names[key])}" title="Escuchar" aria-label="Escuchar el nombre">🔊</button>
          </div>
          <p class="cb-name-note">${r.notes[key]}</p>
        </div>`;

      return `
        <div class="cb-formula-card">
          <span class="cb-type-badge">${r.typeLabel}</span>
          <div class="cb-formula">${r.formulaHTML}</div>
          <div class="cb-mass">Masa molar: <b>${fmtMass(r.molarMass)}</b> g/mol</div>
        </div>
        <div class="cb-names">
          ${card('sistematica', 'Sistemática', 'IUPAC · prefijos')}
          ${card('stock', 'Stock', 'números romanos')}
          ${card('tradicional', 'Tradicional', 'sufijos -oso / -ico')}
        </div>
        <div class="cb-box">
          <h4>⚗️ Reacción de formación</h4>
          <div class="cb-reaction">${r.reaction || '—'}</div>
        </div>
        <div class="cb-box">
          <h4>🧠 ¿Cómo se forma?</h4>
          <ol class="cb-steps">${r.steps.map(st => `<li>${st}</li>`).join('')}</ol>
        </div>`;
    }

    // -------------------------------------------------------------- Orgánicos
    setupOrganic() {
      const O = window.OrganicChem;
      const fnGrid = this.container.querySelector('#cbFnGrid');
      fnGrid.innerHTML = Object.entries(O.FUNCS).map(([key, f]) => `
        <button class="cb-type-chip" data-fn="${key}">
          <span class="cb-type-name">${f.label}</span>
          <span class="cb-type-desc">${f.suffix} · ${f.general}</span>
        </button>`).join('');
      fnGrid.addEventListener('click', e => {
        const btn = e.target.closest('[data-fn]');
        if (!btn) return;
        this.org.fn = btn.dataset.fn;
        const min = O.FUNCS[this.org.fn].min;
        if (this.org.n < min) this.org.n = min;
        this.renderOrganic();
      });

      const range = this.container.querySelector('#cbCarbonRange');
      const setN = n => {
        this.org.n = Math.max(1, Math.min(O.MAX_C, n));
        this.renderOrganic();
      };
      range.addEventListener('input', () => setN(Number(range.value)));
      this.container.querySelector('#cbCarbonMinus').addEventListener('click', () => setN(this.org.n - 1));
      this.container.querySelector('#cbCarbonPlus').addEventListener('click', () => setN(this.org.n + 1));

      this.container.querySelector('#cbPosButtons').addEventListener('click', e => {
        const btn = e.target.closest('[data-pos]');
        if (!btn) return;
        this.org.pos = Number(btn.dataset.pos);
        this.renderOrganic();
      });

      this.container.querySelector('#cbAddSub').addEventListener('click', () => {
        if (this.org.subs.length >= O.MAX_SUBS) return;
        const type = this.org.n >= 3 ? 'metil' : 'cloro';
        const r = O.subRange(type, this.org);
        this.org.subs.push({ type, pos: Math.max(1, r[0]) });
        this.renderOrganic();
      });

      const list = this.container.querySelector('#cbSubsList');
      list.addEventListener('change', e => {
        const row = e.target.closest('[data-idx]');
        if (!row) return;
        const sub = this.org.subs[Number(row.dataset.idx)];
        if (e.target.name === 'type') sub.type = e.target.value;
        if (e.target.name === 'pos') sub.pos = Number(e.target.value);
        this.renderOrganic();
      });
      list.addEventListener('click', e => {
        const del = e.target.closest('.cb-sub-del');
        if (!del) return;
        this.org.subs.splice(Number(del.closest('[data-idx]').dataset.idx), 1);
        this.renderOrganic();
      });

      this.container.querySelector('#cbOrgExamples').innerHTML = ORG_EXAMPLES
        .map((ex, i) => `<button class="pill-btn" data-ex="${i}">${ex.label}</button>`).join('');
      this.container.querySelector('#cbOrgExamples').addEventListener('click', e => {
        const btn = e.target.closest('[data-ex]');
        if (!btn) return;
        const ex = ORG_EXAMPLES[Number(btn.dataset.ex)];
        this.org = { fn: ex.fn, n: ex.n, pos: ex.pos ?? null, subs: ex.subs.map(x => ({ ...x })) };
        this.renderOrganic(true);
      });

      this.container.querySelector('#cbOrgRandom').addEventListener('click', () => {
        const fns = Object.keys(O.FUNCS);
        for (let tries = 0; tries < 50; tries++) {
          const fn = fns[Math.floor(Math.random() * fns.length)];
          const n = O.FUNCS[fn].min + Math.floor(Math.random() * (7 - O.FUNCS[fn].min + 1));
          const pr = O.positionRange(fn, n);
          const pos = pr ? pr[0] + Math.floor(Math.random() * (pr[1] - pr[0] + 1)) : null;
          const subs = [];
          const nSubs = Math.floor(Math.random() * 3);
          const types = Object.keys(O.SUBS);
          for (let k = 0; k < nSubs; k++) {
            const type = types[Math.floor(Math.random() * types.length)];
            const r = O.subRange(type, { fn, n });
            if (r[0] <= r[1]) subs.push({ type, pos: r[0] + Math.floor(Math.random() * (r[1] - r[0] + 1)) });
          }
          const candidate = { fn, n, pos, subs };
          if (O.build(candidate).ok) {
            this.org = candidate;
            break;
          }
        }
        this.renderOrganic(true);
      });
    }

    renderOrganic(scrollToResult = false) {
      const O = window.OrganicChem;
      const s = this.org;
      const f = O.FUNCS[s.fn];

      this.container.querySelectorAll('[data-fn]').forEach(b => b.classList.toggle('active', b.dataset.fn === s.fn));
      const range = this.container.querySelector('#cbCarbonRange');
      range.min = f.min;
      range.value = s.n;
      this.container.querySelector('#cbCarbonCount').textContent = s.n;

      // Posición del grupo / enlace
      const pr = O.positionRange(s.fn, s.n);
      const posStep = this.container.querySelector('#cbPosStep');
      posStep.hidden = !pr;
      this.container.querySelector('#cbSubsNum').textContent = pr ? '4' : '3';
      if (pr) {
        if (!(s.pos >= pr[0] && s.pos <= pr[1])) s.pos = pr[0];
        const what = { alqueno: 'Posición del doble enlace', alquino: 'Posición del triple enlace', alcohol: 'Carbono con el grupo –OH', cetona: 'Carbono con el grupo C=O', amina: 'Carbono con el grupo –NH₂' };
        this.container.querySelector('#cbPosLabel').textContent = what[s.fn];
        let html = '';
        for (let p = pr[0]; p <= pr[1]; p++) {
          html += `<button class="cb-val-btn ${p === s.pos ? 'active' : ''}" data-pos="${p}">${ORG_POS_LABEL[s.fn](p)}</button>`;
        }
        this.container.querySelector('#cbPosButtons').innerHTML = html;
      } else {
        s.pos = f.terminal ? 1 : null;
      }

      // Sustituyentes
      const typeOptions = sel => Object.entries(O.SUBS)
        .map(([k, d]) => `<option value="${k}" ${k === sel ? 'selected' : ''}>${d.label}${d.X ? ` (${d.X})` : d.C === 1 ? ' (–CH₃)' : ' (–CH₂CH₃)'}</option>`).join('');
      const posOptions = sel => Array.from({ length: s.n }, (_, k) => k + 1)
        .map(p => `<option value="${p}" ${p === sel ? 'selected' : ''}>C${p}</option>`).join('');
      this.container.querySelector('#cbSubsList').innerHTML = s.subs.length
        ? s.subs.map((sub, i) => `
          <div class="cb-sub-row" data-idx="${i}">
            <select name="type" class="compare-dropdown" aria-label="Tipo de sustituyente">${typeOptions(sub.type)}</select>
            <span>en</span>
            <select name="pos" class="compare-dropdown" aria-label="Carbono">${posOptions(sub.pos)}</select>
            <button class="cb-sub-del" aria-label="Quitar sustituyente" title="Quitar">✕</button>
          </div>`).join('')
        : '<p class="cb-empty">Sin sustituyentes: cadena lineal.</p>';
      this.container.querySelector('#cbAddSub').disabled = s.subs.length >= O.MAX_SUBS;

      const out = this.container.querySelector('#cbOrgResult');
      const r = O.build(s);
      if (!r.ok) {
        out.innerHTML = `<div class="tool-error"><b>Revisa la estructura:</b><ul>${r.errors.map(e => `<li>${esc(e)}</li>`).join('')}</ul></div>`;
        return;
      }

      // Si la IUPAC exige numerar desde el otro extremo, la interfaz adopta la numeración correcta
      if (r.renumbered) {
        this.org = { fn: r.spec.fn, n: r.spec.n, pos: r.spec.pos, subs: r.spec.subs.map(x => ({ ...x })) };
        this.renderOrganic(scrollToResult);
        this.container.querySelector('#cbOrgResult .cb-renumber-note').hidden = false;
        return;
      }

      out.innerHTML = this.organicResultHTML(r);
      this.bindSpeak(out);
      if (scrollToResult) this.scrollIntoViewIfNarrow(out);
    }

    organicResultHTML(r) {
      return `
        <div class="cb-formula-card">
          <span class="cb-type-badge">${r.functionLabel}</span>
          <div class="cb-iupac">
            <span>${esc(r.name)}</span>
            <button class="cb-speak" data-say="${esc(r.name)}" title="Escuchar" aria-label="Escuchar el nombre">🔊</button>
          </div>
          ${r.commonName ? `<div class="cb-common">Nombre común: <b>${esc(r.commonName)}</b></div>` : ''}
          <p class="cb-renumber-note" hidden>↔ La cadena se renumeró desde el otro extremo para dar los localizadores más bajos (regla IUPAC).</p>
        </div>
        <div class="cb-box cb-structure">
          <h4>🔬 Estructura (fórmula de esqueleto)</h4>
          ${this.skeletonSVG(r)}
        </div>
        <div class="cb-org-formulas">
          <div class="cb-mini-card"><span>Fórmula molecular</span><b>${r.formulaHTML}</b></div>
          <div class="cb-mini-card cb-wide"><span>Semidesarrollada</span><b class="cb-condensed">${r.condensedHTML}</b></div>
          <div class="cb-mini-card"><span>Masa molar</span><b>${fmtMass(r.molarMass)} g/mol</b></div>
          <div class="cb-mini-card"><span>Fórmula general</span><b>${r.general}</b></div>
        </div>
        <div class="cb-box">
          <h4>🧠 ¿Cómo se nombra?</h4>
          <ol class="cb-steps">${r.steps.map(st => `<li>${st}</li>`).join('')}</ol>
        </div>`;
    }

    /** Dibuja la fórmula de esqueleto en zigzag con numeración de carbonos */
    skeletonSVG(r) {
      const spec = r.spec;
      const n = spec.n;
      if (n === 1) {
        return `<div class="cb-single-carbon">${r.condensedHTML}</div>`;
      }

      const dx = 52;
      const yUp = 78;
      const yDown = 108;
      const pad = 70;
      const pts = Array.from({ length: n }, (_, k) => ({ x: pad + k * dx, y: k % 2 === 0 ? yDown : yUp }));
      const width = pad * 2 + (n - 1) * dx;
      const height = 190;
      const lines = [];
      const labels = [];
      const line = (a, b, cls = 'cb-bond') => lines.push(`<line class="${cls}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}"/>`);
      const offsetLine = (a, b, d) => {
        const len = Math.hypot(b.x - a.x, b.y - a.y);
        const ox = (-(b.y - a.y) / len) * d;
        const oy = ((b.x - a.x) / len) * d;
        const shrink = 0.14;
        const a2 = { x: a.x + (b.x - a.x) * shrink + ox, y: a.y + (b.y - a.y) * shrink + oy };
        const b2 = { x: b.x - (b.x - a.x) * shrink + ox, y: b.y - (b.y - a.y) * shrink + oy };
        line(a2, b2);
      };
      const atom = (p, text, sym) => labels.push(
        `<g class="cb-atom"><circle cx="${p.x}" cy="${p.y}" r="13"/><text x="${p.x}" y="${p.y + 5}" fill="${ATOM_COLORS[sym] || 'currentColor'}">${text}</text></g>`
      );

      // Cadena principal
      for (let i = 0; i < n - 1; i++) {
        const order = r.bondOrders[i];
        line(pts[i], pts[i + 1]);
        if (order === 2) offsetLine(pts[i], pts[i + 1], pts[i].y > pts[i + 1].y ? -6 : 6);
        if (order === 3) { offsetLine(pts[i], pts[i + 1], 6); offsetLine(pts[i], pts[i + 1], -6); }
      }

      // Dirección "hacia fuera" de cada carbono
      const outward = i => {
        const p = pts[i];
        if (i === 0) {
          const q = pts[1];
          return { x: p.x - (q.x - p.x), y: p.y - (q.y - p.y) };
        }
        if (i === n - 1) {
          const q = pts[n - 2];
          return { x: p.x + (p.x - q.x), y: p.y + (p.y - q.y) };
        }
        return { x: p.x, y: p.y + (p.y === yUp ? -44 : 44) };
      };
      const inward = i => {
        const p = pts[i];
        return { x: p.x, y: p.y + (p.y === yUp ? 44 : -44) };
      };
      const used = Array(n).fill(0);
      const nextSpot = i => {
        const isEnd = i === 0 || i === n - 1;
        const k = used[i]++;
        if (isEnd) {
          if (k === 0) return outward(i);
          const p = pts[i];
          return { x: p.x, y: p.y + (k === 1 ? (p.y === yUp ? -44 : 44) : (p.y === yUp ? 44 : -44)) };
        }
        return k === 0 ? outward(i) : inward(i);
      };

      // Grupo funcional
      const idx = spec.pos != null ? spec.pos - 1 : null;
      if (spec.fn === 'aldehido' || spec.fn === 'acido') {
        const p0 = pts[0];
        const o = { x: p0.x, y: p0.y + (p0.y === yUp ? -44 : 44) };
        line(p0, o);
        offsetLine(p0, o, 6);
        atom(o, 'O', 'O');
        used[0] = 2;
        if (spec.fn === 'acido') {
          const oh = outward(0);
          line(p0, oh);
          atom(oh, 'OH', 'O');
        } else {
          const h = outward(0);
          line(p0, h, 'cb-bond cb-bond-h');
          labels.push(`<text class="cb-h" x="${h.x}" y="${h.y + 5}">H</text>`);
        }
      } else if (spec.fn === 'cetona') {
        const o = nextSpot(idx);
        line(pts[idx], o);
        offsetLine(pts[idx], o, 6);
        atom(o, 'O', 'O');
      } else if (spec.fn === 'alcohol' || spec.fn === 'amina') {
        const g = nextSpot(idx);
        line(pts[idx], g);
        atom(g, spec.fn === 'alcohol' ? 'OH' : 'NH₂', spec.fn === 'alcohol' ? 'O' : 'N');
      }

      // Sustituyentes
      spec.subs.forEach(sub => {
        const i = sub.pos - 1;
        const p = pts[i];
        const spot = nextSpot(i);
        const d = window.OrganicChem.SUBS[sub.type];
        line(p, spot);
        if (d.X) {
          atom(spot, d.X, d.X);
        } else if (sub.type === 'etil') {
          const tail = { x: spot.x + 30, y: spot.y + (spot.y < p.y ? -18 : 18) };
          line(spot, tail);
        }
      });

      // Numeración de carbonos
      // Si el carbono tiene una rama hacia dentro, el número se desplaza para no quedar tapado
      const nums = pts.map((p, k) => {
        const y = p.y === yUp ? p.y + 22 : p.y - 12;
        const shift = used[k] >= 2 && k > 0 && k < n - 1 ? 13 : 0;
        return `<text class="cb-cnum" x="${p.x + shift}" y="${y}">${k + 1}</text>`;
      }).join('');

      return `<svg class="cb-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Estructura de ${esc(r.name)}">
        ${lines.join('')}${nums}${labels.join('')}
      </svg>
      <p class="cb-svg-legend">Cada vértice es un carbono (con los H que le faltan para 4 enlaces). Los números indican la numeración IUPAC.</p>`;
    }

    // -------------------------------------------------------------- Utilidades
    bindSpeak(scope) {
      scope.querySelectorAll('.cb-speak').forEach(btn => {
        if (!('speechSynthesis' in window)) { btn.hidden = true; return; }
        btn.addEventListener('click', () => {
          const text = btn.dataset.say
            .replace(/\((I|II|III|IV|V|VI|VII)\)/g, (_, r) => ROMAN_WORDS[r])
            .replace(/[[\]]/g, '');
          const u = new SpeechSynthesisUtterance(text);
          u.lang = 'es-ES';
          u.rate = 0.95;
          window.speechSynthesis.cancel();
          window.speechSynthesis.speak(u);
        });
      });
    }

    scrollIntoViewIfNarrow(el) {
      if (window.innerWidth < 1000 && el && el.scrollIntoView) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  window.CompoundBuilder = CompoundBuilder;
})(typeof window !== 'undefined' ? window : global);
