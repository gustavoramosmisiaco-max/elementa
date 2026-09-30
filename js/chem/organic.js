/**
 * ELEMENTA - Motor de formulación y nomenclatura orgánica (IUPAC en español)
 *
 * Cadena lineal de 1 a 10 carbonos con una función principal (alcano, alqueno,
 * alquino, alcohol, aldehído, cetona, ácido carboxílico o amina) y hasta
 * 4 sustituyentes (metil, etil, fluoro, cloro, bromo, yodo).
 *
 * Aplica las reglas de numeración IUPAC: localizador más bajo para el grupo
 * principal, luego para el enlace múltiple, luego para los sustituyentes y,
 * en empate, al primero en orden alfabético.
 * Sin dependencias del DOM: se prueba con Node (scripts/test-nomenclature.js).
 */
(function(root) {
  'use strict';

  const ROOTS = ['', 'met', 'et', 'prop', 'but', 'pent', 'hex', 'hept', 'oct', 'non', 'dec'];
  const MULT = ['', '', 'di', 'tri', 'tetra'];
  const MAX_C = 10;
  const MAX_SUBS = 4;

  const FUNCS = {
    alcano: { label: 'Alcano', suffix: '-ano', general: 'C<sub>n</sub>H<sub>2n+2</sub>', min: 1 },
    alqueno: { label: 'Alqueno', suffix: '-eno', general: 'C<sub>n</sub>H<sub>2n</sub>', min: 2, bond: 2 },
    alquino: { label: 'Alquino', suffix: '-ino', general: 'C<sub>n</sub>H<sub>2n−2</sub>', min: 2, bond: 3 },
    alcohol: { label: 'Alcohol', suffix: '-ol', general: 'C<sub>n</sub>H<sub>2n+1</sub>OH', min: 1, group: 'OH' },
    aldehido: { label: 'Aldehído', suffix: '-al', general: 'C<sub>n</sub>H<sub>2n</sub>O', min: 1, terminal: true },
    cetona: { label: 'Cetona', suffix: '-ona', general: 'C<sub>n</sub>H<sub>2n</sub>O', min: 3, group: 'O' },
    acido: { label: 'Ácido carboxílico', suffix: '-oico', general: 'C<sub>n</sub>H<sub>2n</sub>O<sub>2</sub>', min: 1, terminal: true },
    amina: { label: 'Amina', suffix: '-amina', general: 'C<sub>n</sub>H<sub>2n+3</sub>N', min: 1, group: 'NH2' }
  };

  const SUBS = {
    metil: { label: 'metil', C: 1, H: 3, text: 'CH3' },
    etil: { label: 'etil', C: 2, H: 5, text: 'CH2CH3' },
    fluoro: { label: 'fluoro', X: 'F' },
    cloro: { label: 'cloro', X: 'Cl' },
    bromo: { label: 'bromo', X: 'Br' },
    yodo: { label: 'yodo', X: 'I' }
  };

  // Nombres comunes / tradicionales aceptados
  const COMMON = {
    'eteno': 'etileno',
    'propeno': 'propileno',
    'etino': 'acetileno',
    '2-metilpropano': 'isobutano',
    '2-metilbutano': 'isopentano',
    '2,2-dimetilpropano': 'neopentano',
    'metanol': 'alcohol metílico',
    'etanol': 'alcohol etílico',
    'propan-1-ol': 'alcohol propílico',
    'propan-2-ol': 'alcohol isopropílico',
    'butan-1-ol': 'alcohol butílico',
    '2-metilpropan-2-ol': 'alcohol terc-butílico',
    'metanal': 'formaldehído (formol)',
    'etanal': 'acetaldehído',
    'propanal': 'propionaldehído',
    'butanal': 'butiraldehído',
    'propanona': 'acetona (dimetilcetona)',
    'butanona': 'etil metil cetona (MEK)',
    'ácido metanoico': 'ácido fórmico',
    'ácido etanoico': 'ácido acético',
    'ácido propanoico': 'ácido propiónico',
    'ácido butanoico': 'ácido butírico',
    'ácido pentanoico': 'ácido valérico',
    'ácido hexanoico': 'ácido caproico',
    'metanamina': 'metilamina',
    'etanamina': 'etilamina',
    'propan-1-amina': 'propilamina',
    'clorometano': 'cloruro de metilo',
    'diclorometano': 'cloruro de metileno',
    'triclorometano': 'cloroformo',
    'tetraclorometano': 'tetracloruro de carbono',
    'triyodometano': 'yodoformo',
    'bromometano': 'bromuro de metilo',
    'cloroetano': 'cloruro de etilo',
    'cloroeteno': 'cloruro de vinilo'
  };

  // ---------- Estructura ----------
  const isBondFn = fn => !!FUNCS[fn].bond;

  function bondOrder(spec, i) {
    // orden del enlace entre Ci y Ci+1
    const f = FUNCS[spec.fn];
    return f.bond && spec.pos === i ? f.bond : 1;
  }

  function groupBonds(spec, i) {
    const { fn, pos } = spec;
    if (fn === 'aldehido' && i === 1) return 2;
    if (fn === 'acido' && i === 1) return 3;
    if ((fn === 'alcohol' || fn === 'amina') && pos === i) return 1;
    if (fn === 'cetona' && pos === i) return 2;
    return 0;
  }

  function hydrogens(spec, i) {
    let used = groupBonds(spec, i);
    if (i > 1) used += bondOrder(spec, i - 1);
    if (i < spec.n) used += bondOrder(spec, i);
    used += spec.subs.filter(s => s.pos === i).length;
    return 4 - used;
  }

  function positionRange(fn, n) {
    switch (fn) {
      case 'alqueno':
      case 'alquino': return [1, n - 1];
      case 'alcohol':
      case 'amina': return [1, n];
      case 'cetona': return [2, n - 1];
      default: return null;
    }
  }

  function subRange(type, spec) {
    const n = spec.n;
    const terminal = FUNCS[spec.fn].terminal;
    if (type === 'metil') return [2, n - 1];
    if (type === 'etil') return [3, n - 2];
    return [terminal ? 2 : 1, n]; // halógeno: no sobre el carbono del -CHO / -COOH
  }

  function validate(spec) {
    const errors = [];
    const f = FUNCS[spec.fn];
    if (!f) return ['Función desconocida'];
    if (!(spec.n >= 1 && spec.n <= MAX_C)) errors.push(`La cadena debe tener entre 1 y ${MAX_C} carbonos.`);
    if (spec.n < f.min) errors.push(`Un ${f.label.toLowerCase()} necesita al menos ${f.min} carbonos.`);
    const range = positionRange(spec.fn, spec.n);
    if (range && !(spec.pos >= range[0] && spec.pos <= range[1])) {
      errors.push(`Posición del ${isBondFn(spec.fn) ? 'enlace' : 'grupo'} fuera de rango (${range[0]}–${range[1]}).`);
    }
    if (spec.subs.length > MAX_SUBS) errors.push(`Máximo ${MAX_SUBS} sustituyentes.`);
    spec.subs.forEach(s => {
      const r = subRange(s.type, spec);
      if (!SUBS[s.type]) errors.push('Sustituyente desconocido.');
      else if (r[0] > r[1] || s.pos < r[0] || s.pos > r[1]) {
        const why = s.type === 'metil' || s.type === 'etil'
          ? 'alargaría la cadena principal (debe ser la más larga)'
          : 'no es válida en ese carbono';
        errors.push(`${SUBS[s.type].label} en C${s.pos} ${why}.`);
      }
    });
    if (!errors.length) {
      for (let i = 1; i <= spec.n; i++) {
        if (hydrogens(spec, i) < 0) errors.push(`El carbono ${i} tendría más de 4 enlaces.`);
      }
    }
    return errors;
  }

  // ---------- Numeración IUPAC ----------
  function flip(spec) {
    const n = spec.n;
    const out = { fn: spec.fn, n, subs: spec.subs.map(s => ({ type: s.type, pos: n + 1 - s.pos })) };
    if (isBondFn(spec.fn)) out.pos = n - spec.pos;
    else if (spec.pos != null) out.pos = n + 1 - spec.pos;
    return out;
  }

  function numberingKey(spec) {
    const principal = spec.pos != null && FUNCS[spec.fn].terminal !== true ? [spec.pos] : [];
    const subLocs = spec.subs.map(s => s.pos).sort((a, b) => a - b);
    const alpha = spec.subs.slice()
      .sort((a, b) => SUBS[a.type].label.localeCompare(SUBS[b.type].label, 'es') || a.pos - b.pos)
      .map(s => s.pos);
    return [principal, subLocs, alpha];
  }

  function compareKeys(a, b) {
    for (let k = 0; k < a.length; k++) {
      const x = a[k];
      const y = b[k];
      for (let i = 0; i < Math.max(x.length, y.length); i++) {
        if (x[i] !== y[i]) return (x[i] ?? Infinity) - (y[i] ?? Infinity);
      }
    }
    return 0;
  }

  function canonical(spec) {
    if (FUNCS[spec.fn].terminal) return { spec, renumbered: false };
    const flipped = flip(spec);
    const renumbered = compareKeys(numberingKey(flipped), numberingKey(spec)) < 0;
    return { spec: renumbered ? flipped : spec, renumbered };
  }

  // ---------- Nombre ----------
  function prefixPart(spec) {
    const groups = {};
    spec.subs.forEach(s => { (groups[SUBS[s.type].label] = groups[SUBS[s.type].label] || []).push(s.pos); });
    const names = Object.keys(groups).sort((a, b) => a.localeCompare(b, 'es'));
    const onlyOneSite = spec.n === 1 ||
      (spec.n === 2 && spec.subs.length === 1 && ['alcano', 'alqueno', 'alquino'].includes(spec.fn));
    if (onlyOneSite) return names.map(k => MULT[groups[k].length] + k).join('');
    return names.map(k => {
      const locs = groups[k].sort((a, b) => a - b);
      return `${locs.join(',')}-${MULT[locs.length]}${k}`;
    }).join('-');
  }

  function baseName(spec) {
    const { fn, n, pos } = spec;
    const r = ROOTS[n];
    switch (fn) {
      case 'alcano': return `${r}ano`;
      case 'alqueno': return n <= 3 ? `${r}eno` : `${r}-${pos}-eno`;
      case 'alquino': return n <= 3 ? `${r}ino` : `${r}-${pos}-ino`;
      case 'alcohol': return n <= 2 ? `${r}anol` : `${r}an-${pos}-ol`;
      case 'aldehido': return `${r}anal`;
      case 'cetona': return n <= 4 ? `${r}anona` : `${r}an-${pos}-ona`;
      case 'acido': return `${r}anoico`;
      case 'amina': return n <= 2 ? `${r}anamina` : `${r}an-${pos}-amina`;
      default: return r;
    }
  }

  function iupacName(spec) {
    const name = prefixPart(spec) + baseName(spec);
    return spec.fn === 'acido' ? `ácido ${name}` : name;
  }

  // ---------- Fórmulas ----------
  const H = h => (h === 0 ? '' : h === 1 ? 'H' : `H${h}`);

  function carbonLabel(spec, i) {
    const { fn, n } = spec;
    const h = hydrogens(spec, i);
    const here = spec.subs.filter(s => s.pos === i);
    const isEnd = n === 1 || i === 1 || i === n;

    if (fn === 'aldehido' && i === 1) return n === 1 ? 'HCHO' : 'CHO';
    if (fn === 'acido' && i === 1) return n === 1 ? 'HCOOH' : 'COOH';

    let label = 'C' + H(h);
    const alkyls = here.filter(s => SUBS[s.type].C);
    const alkylTypes = [...new Set(alkyls.map(s => s.type))];
    alkylTypes.forEach(t => {
      const count = alkyls.filter(s => s.type === t).length;
      label += `(${SUBS[t].text})${count > 1 ? count : ''}`;
    });
    const halos = here.filter(s => SUBS[s.type].X);
    [...new Set(halos.map(s => s.type))].forEach(t => {
      const count = halos.filter(s => s.type === t).length;
      label += SUBS[t].X + (count > 1 ? count : '');
    });
    if (fn === 'cetona' && spec.pos === i) label += 'O';
    if ((fn === 'alcohol' || fn === 'amina') && spec.pos === i) {
      const g = fn === 'alcohol' ? 'OH' : 'NH2';
      label += isEnd ? g : `(${g})`;
    }
    return label;
  }

  function condensedFormula(spec) {
    const { n } = spec;
    const labels = [];
    for (let i = 1; i <= n; i++) labels.push(carbonLabel(spec, i));
    const bonds = [];
    for (let i = 1; i < n; i++) bonds.push({ 1: '–', 2: '=', 3: '≡' }[bondOrder(spec, i)]);
    // Si el grupo está en C1 (-CHO, -COOH, -CH2OH, -CH2Cl…) se escribe al final, como en los libros
    const atC1 = s => s.pos === 1;
    const reverse = n > 1 && (
      FUNCS[spec.fn].terminal ||
      ((spec.fn === 'alcohol' || spec.fn === 'amina') && spec.pos === 1) ||
      (spec.fn === 'alcano' && spec.subs.some(atC1) && !spec.subs.some(s => s.pos === n))
    );
    let out = '';
    const order = reverse ? labels.map((_, k) => n - 1 - k) : labels.map((_, k) => k);
    order.forEach((idx, k) => {
      out += labels[idx];
      if (k < n - 1) out += bonds[reverse ? idx - 1 : idx];
    });
    return out;
  }

  function atomCounts(spec) {
    const counts = { C: spec.n, H: 0, O: 0, N: 0, F: 0, Cl: 0, Br: 0, I: 0 };
    for (let i = 1; i <= spec.n; i++) counts.H += hydrogens(spec, i);
    spec.subs.forEach(s => {
      const d = SUBS[s.type];
      if (d.C) { counts.C += d.C; counts.H += d.H; } else counts[d.X]++;
    });
    switch (spec.fn) {
      case 'alcohol': counts.O += 1; counts.H += 1; break;
      case 'aldehido': counts.O += 1; break;
      case 'cetona': counts.O += 1; break;
      case 'acido': counts.O += 2; counts.H += 1; break;
      case 'amina': counts.N += 1; counts.H += 2; break;
      default: break;
    }
    return counts;
  }

  function molecularFormula(counts) {
    // Orden de Hill: C, H y el resto alfabético
    const order = ['C', 'H', ...['Br', 'Cl', 'F', 'I', 'N', 'O'].filter(k => counts[k])];
    return order.filter(k => counts[k]).map(k => k + (counts[k] > 1 ? counts[k] : '')).join('');
  }

  const toHTML = text => text.replace(/(\d+)/g, '<sub>$1</sub>');

  function molarMass(counts) {
    const data = root.ELEMENTS_DATA || [];
    return Object.entries(counts).reduce((sum, [sym, k]) => {
      const el = data.find(e => e.symbol === sym);
      return sum + (el ? Number(el.mass) : 0) * k;
    }, 0);
  }

  // ---------- Explicación ----------
  function steps(spec, renumbered) {
    const f = FUNCS[spec.fn];
    const list = [];
    list.push(`Cadena principal de <b>${spec.n}</b> carbono${spec.n > 1 ? 's' : ''} → raíz <b>«${ROOTS[spec.n]}-»</b>.`);
    const suffixWhy = {
      alcano: 'solo enlaces simples → terminación <b>-ano</b>.',
      alqueno: 'un doble enlace C=C → terminación <b>-eno</b>.',
      alquino: 'un triple enlace C≡C → terminación <b>-ino</b>.',
      alcohol: 'grupo hidroxilo –OH → terminación <b>-ol</b>.',
      aldehido: 'grupo –CHO en el extremo (siempre C1) → terminación <b>-al</b>.',
      cetona: 'grupo carbonilo C=O dentro de la cadena → terminación <b>-ona</b>.',
      acido: 'grupo carboxilo –COOH en el extremo (siempre C1) → «ácido …<b>-oico</b>».',
      amina: 'grupo amino –NH₂ → terminación <b>-amina</b>.'
    };
    list.push(`Función ${f.label.toLowerCase()}: ${suffixWhy[spec.fn]}`);
    if (!f.terminal && spec.n > 2) {
      const what = isBondFn(spec.fn) ? 'al enlace múltiple' : spec.fn === 'alcano' ? 'a los sustituyentes' : 'al grupo funcional';
      list.push(renumbered
        ? `Se numera desde el <b>otro extremo</b>: así ${what} le toca el localizador más bajo.`
        : `Se numera desde el extremo más cercano ${what}.`);
    }
    if (spec.subs.length) {
      list.push('Los sustituyentes se nombran como prefijos en <b>orden alfabético</b> (sin contar di-, tri-), cada uno con su localizador.');
    }
    return list;
  }

  /** Punto de entrada: build({ fn: 'alcohol', n: 3, pos: 2, subs: [{ type: 'metil', pos: 2 }] }) */
  function build(input) {
    const spec = {
      fn: input.fn,
      n: Number(input.n),
      pos: input.pos != null ? Number(input.pos) : null,
      subs: (input.subs || []).map(s => ({ type: s.type, pos: Number(s.pos) }))
    };
    if (FUNCS[spec.fn] && FUNCS[spec.fn].terminal) spec.pos = 1;
    if (spec.fn === 'alcano') spec.pos = null;

    const errors = validate(spec);
    if (errors.length) return { ok: false, errors };

    const { spec: canon, renumbered } = canonical(spec);
    const name = iupacName(canon);
    const counts = atomCounts(canon);
    const formula = molecularFormula(counts);
    const condensed = condensedFormula(canon);

    return {
      ok: true,
      spec: canon,
      renumbered,
      name,
      commonName: COMMON[name] || null,
      formula,
      formulaHTML: toHTML(formula),
      condensed,
      condensedHTML: toHTML(condensed),
      general: FUNCS[canon.fn].general,
      functionLabel: FUNCS[canon.fn].label,
      molarMass: molarMass(counts),
      hydrogens: Array.from({ length: canon.n }, (_, k) => hydrogens(canon, k + 1)),
      bondOrders: Array.from({ length: Math.max(0, canon.n - 1) }, (_, k) => bondOrder(canon, k + 1)),
      steps: steps(canon, renumbered)
    };
  }

  const api = { FUNCS, SUBS, ROOTS, MAX_C, MAX_SUBS, build, validate, positionRange, subRange };
  root.OrganicChem = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : global);
