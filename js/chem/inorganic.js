/**
 * ELEMENTA - Motor de formulación y nomenclatura inorgánica
 *
 * Genera la fórmula, las tres nomenclaturas (sistemática, Stock y tradicional),
 * la reacción de formación balanceada y la masa molar de las funciones
 * inorgánicas que se enseñan en secundaria y primeros cursos universitarios.
 *
 * Valencias y nombres tradicionales según la tabla escolar habitual en español.
 * Sin dependencias del DOM: se puede probar con Node (scripts/test-nomenclature.js).
 */
(function(root) {
  'use strict';

  const ROMAN = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
  const PREFIX = ['', 'mono', 'di', 'tri', 'tetra', 'penta', 'hexa', 'hepta', 'octa'];
  const GROUP_PREFIX = ['', '', 'bis', 'tris', 'tetrakis', 'pentakis', 'hexakis'];
  const DIATOMIC = ['H', 'N', 'O', 'F', 'Cl', 'Br', 'I'];

  // Metales: valencias y adjetivos tradicionales (-oso menor, -ico mayor)
  const METALS = {
    Li: { v: [1] }, Na: { v: [1] }, K: { v: [1] }, Rb: { v: [1] }, Cs: { v: [1] }, Ag: { v: [1] },
    Be: { v: [2] }, Mg: { v: [2] }, Ca: { v: [2] }, Sr: { v: [2] }, Ba: { v: [2] }, Zn: { v: [2] }, Cd: { v: [2] },
    Al: { v: [3] }, Ga: { v: [3] },
    Cu: { v: [1, 2], trad: { 1: 'cuproso', 2: 'cúprico' } },
    Hg: { v: [1, 2], trad: { 1: 'mercurioso', 2: 'mercúrico' } },
    Au: { v: [1, 3], trad: { 1: 'auroso', 3: 'áurico' } },
    Fe: { v: [2, 3], trad: { 2: 'ferroso', 3: 'férrico' } },
    Co: { v: [2, 3], trad: { 2: 'cobaltoso', 3: 'cobáltico' } },
    Ni: { v: [2, 3], trad: { 2: 'niqueloso', 3: 'niquélico' } },
    Cr: { v: [2, 3], trad: { 2: 'cromoso', 3: 'crómico' } },
    Mn: { v: [2, 3], trad: { 2: 'manganoso', 3: 'mangánico' } },
    Bi: { v: [3, 5], trad: { 3: 'bismutoso', 5: 'bismútico' } },
    Sn: { v: [2, 4], trad: { 2: 'estannoso', 4: 'estánnico' } },
    Pb: { v: [2, 4], trad: { 2: 'plumboso', 4: 'plúmbico' } },
    Pt: { v: [2, 4], trad: { 2: 'platinoso', 4: 'platínico' } },
    Pd: { v: [2, 4], trad: { 2: 'paladioso', 4: 'paládico' } }
  };

  // No metales (y Mn/Cr cuando forman anhídridos y oxácidos)
  //   neg:  valencia negativa (hidruros, hidrácidos, sales binarias)
  //   pos:  valencias positivas (óxidos ácidos / anhídridos)
  //   acid: valencias que forman oxácidos
  //   trad: adjetivo tradicional por valencia · oxo: anión de la oxisal por valencia
  //   ico / ato: raíces para la nomenclatura Stock y sistemática de los oxácidos
  const NONMETALS = {
    F: { neg: 1, anion: 'fluoruro', hydracid: 'fluorhídrico' },
    Cl: {
      neg: 1, anion: 'cloruro', hydracid: 'clorhídrico', pos: [1, 3, 5, 7], acid: [1, 3, 5, 7],
      trad: { 1: 'hipocloroso', 3: 'cloroso', 5: 'clórico', 7: 'perclórico' },
      oxo: { 1: 'hipoclorito', 3: 'clorito', 5: 'clorato', 7: 'perclorato' }, ico: 'clórico', ato: 'clorato'
    },
    Br: {
      neg: 1, anion: 'bromuro', hydracid: 'bromhídrico', pos: [1, 3, 5, 7], acid: [1, 3, 5, 7],
      trad: { 1: 'hipobromoso', 3: 'bromoso', 5: 'brómico', 7: 'perbrómico' },
      oxo: { 1: 'hipobromito', 3: 'bromito', 5: 'bromato', 7: 'perbromato' }, ico: 'brómico', ato: 'bromato'
    },
    I: {
      neg: 1, anion: 'yoduro', hydracid: 'yodhídrico', pos: [1, 3, 5, 7], acid: [1, 3, 5, 7],
      trad: { 1: 'hipoyodoso', 3: 'yodoso', 5: 'yódico', 7: 'peryódico' },
      oxo: { 1: 'hipoyodito', 3: 'yodito', 5: 'yodato', 7: 'peryodato' }, ico: 'yódico', ato: 'yodato'
    },
    S: {
      neg: 2, anion: 'sulfuro', hydracid: 'sulfhídrico', pos: [2, 4, 6], acid: [2, 4, 6],
      trad: { 2: 'hiposulfuroso', 4: 'sulfuroso', 6: 'sulfúrico' },
      oxo: { 2: 'hiposulfito', 4: 'sulfito', 6: 'sulfato' }, ico: 'sulfúrico', ato: 'sulfato'
    },
    Se: {
      neg: 2, anion: 'seleniuro', hydracid: 'selenhídrico', pos: [2, 4, 6], acid: [2, 4, 6],
      trad: { 2: 'hiposelenioso', 4: 'selenioso', 6: 'selénico' },
      oxo: { 2: 'hiposelenito', 4: 'selenito', 6: 'seleniato' }, ico: 'selénico', ato: 'seleniato'
    },
    Te: {
      neg: 2, anion: 'telururo', hydracid: 'telurhídrico', pos: [2, 4, 6], acid: [2, 4, 6],
      trad: { 2: 'hipoteluroso', 4: 'teluroso', 6: 'telúrico' },
      oxo: { 2: 'hipotelurito', 4: 'telurito', 6: 'telurato' }, ico: 'telúrico', ato: 'telurato'
    },
    N: {
      neg: 3, anion: 'nitruro', hydride: 'amoníaco', pos: [3, 5], acid: [3, 5],
      trad: { 3: 'nitroso', 5: 'nítrico' }, oxo: { 3: 'nitrito', 5: 'nitrato' }, ico: 'nítrico', ato: 'nitrato'
    },
    P: {
      neg: 3, anion: 'fosfuro', hydride: 'fosfina', pos: [3, 5], acid: [3, 5], orto: true,
      trad: { 3: 'fosforoso', 5: 'fosfórico' }, oxo: { 3: 'fosfito', 5: 'fosfato' }, ico: 'fosfórico', ato: 'fosfato'
    },
    As: {
      neg: 3, anion: 'arseniuro', hydride: 'arsina', pos: [3, 5], acid: [3, 5], orto: true,
      trad: { 3: 'arsenioso', 5: 'arsénico' }, oxo: { 3: 'arsenito', 5: 'arseniato' }, ico: 'arsénico', ato: 'arseniato'
    },
    Sb: {
      neg: 3, anion: 'antimoniuro', hydride: 'estibina', pos: [3, 5], acid: [3, 5], orto: true,
      trad: { 3: 'antimonioso', 5: 'antimónico' }, oxo: { 3: 'antimonito', 5: 'antimoniato' }, ico: 'antimónico', ato: 'antimoniato'
    },
    C: {
      neg: 4, anion: 'carburo', hydride: 'metano', pos: [2, 4], acid: [4],
      trad: { 2: 'carbonoso', 4: 'carbónico' }, oxo: { 4: 'carbonato' }, ico: 'carbónico', ato: 'carbonato'
    },
    Si: {
      neg: 4, anion: 'siliciuro', hydride: 'silano', pos: [4], acid: [4],
      trad: { 4: 'silícico' }, oxo: { 4: 'silicato' }, ico: 'silícico', ato: 'silicato'
    },
    B: {
      neg: 3, anion: 'boruro', hydride: 'borano', pos: [3], acid: [3], orto: true,
      trad: { 3: 'bórico' }, oxo: { 3: 'borato' }, ico: 'bórico', ato: 'borato'
    },
    Mn: {
      pos: [6, 7], acid: [6, 7], trad: { 6: 'mangánico', 7: 'permangánico' },
      oxo: { 6: 'manganato', 7: 'permanganato' }, ico: 'mangánico', ato: 'manganato'
    },
    Cr: {
      pos: [6], acid: [6], trad: { 6: 'crómico' }, oxo: { 6: 'cromato' }, ico: 'crómico', ato: 'cromato'
    }
  };

  const HYDRACID_FORMERS = ['F', 'Cl', 'Br', 'I', 'S', 'Se', 'Te'];
  const VOLATILE_HYDRIDES = ['N', 'P', 'As', 'Sb', 'C', 'Si', 'B'];

  const TYPES = {
    oxidoBasico: { label: 'Óxido básico', desc: 'Metal + oxígeno' },
    oxidoAcido: { label: 'Óxido ácido (anhídrido)', desc: 'No metal + oxígeno' },
    hidroxido: { label: 'Hidróxido', desc: 'Óxido básico + agua' },
    hidruroMetalico: { label: 'Hidruro metálico', desc: 'Metal + hidrógeno' },
    hidruroNoMetalico: { label: 'Hidruro no metálico', desc: 'No metal (grupos 13-15) + hidrógeno' },
    hidracido: { label: 'Ácido hidrácido', desc: 'Hidrógeno + halógeno o anfígeno' },
    oxacido: { label: 'Ácido oxácido', desc: 'Anhídrido + agua' },
    salBinaria: { label: 'Sal binaria (haloidea)', desc: 'Metal + no metal' },
    oxisal: { label: 'Oxisal', desc: 'Hidróxido + oxácido' }
  };

  // ---------- Utilidades ----------
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  function elementName(sym) {
    const data = root.ELEMENTS_DATA || [];
    const el = data.find(e => e.symbol === sym);
    return el ? el.name.toLowerCase() : sym;
  }

  function atomicMass(sym) {
    const data = root.ELEMENTS_DATA || [];
    const el = data.find(e => e.symbol === sym);
    return el && typeof el.mass === 'number' ? el.mass : Number(el && el.mass) || 0;
  }

  /** Unidad de fórmula: { s: 'Fe', n: 2 } o grupo { g: [...], n: 3 } */
  function unitsToText(units) {
    return units.map(u => {
      if (u.g) {
        const inner = unitsToText(u.g);
        return u.n > 1 ? `(${inner})${u.n}` : inner;
      }
      return u.s + (u.n > 1 ? u.n : '');
    }).join('');
  }

  function unitsToHTML(units) {
    return units.map(u => {
      if (u.g) {
        const inner = unitsToHTML(u.g);
        return u.n > 1 ? `(${inner})<sub>${u.n}</sub>` : inner;
      }
      return u.s + (u.n > 1 ? `<sub>${u.n}</sub>` : '');
    }).join('');
  }

  function textToHTML(text) {
    return text.replace(/(\d+)/g, '<sub>$1</sub>');
  }

  /** Cuenta átomos de una fórmula con paréntesis: "Fe2(SO4)3" → { Fe: 2, S: 3, O: 12 } */
  function parseFormula(text) {
    let i = 0;
    function readGroup() {
      const counts = {};
      while (i < text.length && text[i] !== ')') {
        let part;
        if (text[i] === '(') {
          i++;
          part = readGroup();
          i++; // ')'
        } else {
          const m = /^[A-Z][a-z]?/.exec(text.slice(i));
          if (!m) throw new Error('Fórmula no válida: ' + text);
          i += m[0].length;
          part = { [m[0]]: 1 };
        }
        const num = /^\d+/.exec(text.slice(i));
        const mult = num ? Number(num[0]) : 1;
        if (num) i += num[0].length;
        for (const [k, v] of Object.entries(part)) counts[k] = (counts[k] || 0) + v * mult;
      }
      return counts;
    }
    return readGroup();
  }

  function molarMass(text) {
    const counts = parseFormula(text);
    return Object.entries(counts).reduce((sum, [sym, n]) => sum + atomicMass(sym) * n, 0);
  }

  /** Balancea por búsqueda de coeficientes enteros pequeños (reacciones escolares ≤ 4 especies) */
  function balance(reactants, products, maxCoef = 16) {
    const species = [...reactants, ...products].map(parseFormula);
    const elements = [...new Set(species.flatMap(Object.keys))];
    const nR = reactants.length;
    const coefs = new Array(species.length).fill(1);
    let best = null;

    function check() {
      return elements.every(el => {
        let left = 0;
        let right = 0;
        species.forEach((sp, idx) => {
          const c = (sp[el] || 0) * coefs[idx];
          if (idx < nR) left += c; else right += c;
        });
        return left === right;
      });
    }

    function search(idx) {
      if (best) return;
      if (idx === species.length) {
        if (check()) best = coefs.slice();
        return;
      }
      for (let c = 1; c <= maxCoef && !best; c++) {
        coefs[idx] = c;
        search(idx + 1);
      }
    }
    search(0);
    return best;
  }

  function reactionHTML(reactants, products) {
    const coefs = balance(reactants, products);
    if (!coefs) return null;
    const side = (list, offset) => list.map((f, i) => {
      const c = coefs[i + offset];
      return `${c > 1 ? `<b class="coef">${c}</b>` : ''}${textToHTML(f)}`;
    }).join(' + ');
    return `${side(reactants, 0)} <span class="arrow">→</span> ${side(products, reactants.length)}`;
  }

  const elementalForm = sym => (DIATOMIC.includes(sym) ? sym + '2' : sym);

  // Cruza valencias y simplifica: devuelve subíndices [a, b] y el divisor usado
  function cross(vCation, vAnion) {
    const g = gcd(vCation, vAnion);
    return { a: vAnion / g, b: vCation / g, g };
  }

  function metalAdjective(sym, v) {
    const m = METALS[sym];
    if (!m) throw new Error('Metal no disponible: ' + sym);
    if (!m.v.includes(v)) throw new Error(`${sym} no actúa con valencia ${v}`);
    return m.v.length > 1 ? m.trad[v] : null;
  }

  function stockSuffix(sym, v, table) {
    const t = table[sym];
    const list = t.v || t.pos || [];
    return list.length > 1 ? ` (${ROMAN[v]})` : '';
  }

  const withPrefix = (n, word) => {
    if (n === 1) return word;
    return PREFIX[n] + word;
  };

  // Hg(I) existe como catión dímero Hg₂²⁺ (Hg₂Cl₂, Hg₂O)
  function cationUnit(sym, v) {
    if (sym === 'Hg' && v === 1) return { sym: 'Hg', atoms: 2, charge: 2 };
    return { sym, atoms: 1, charge: v };
  }

  function tradTwoValenceNote(sym, v) {
    const m = METALS[sym];
    if (m.v.length === 1) return `${elementName(sym)} tiene una sola valencia (${m.v[0]}): se nombra «de ${elementName(sym)}».`;
    const which = v === Math.max(...m.v) ? 'mayor → terminación -ico' : 'menor → terminación -oso';
    return `${cap(elementName(sym))} tiene dos valencias (${m.v.join(' y ')}); ${v} es la ${which}.`;
  }

  function tradNonmetalNote(sym, v, list) {
    const labels = {
      4: ['hipo…oso', '…oso', '…ico', 'per…ico'],
      3: ['hipo…oso', '…oso', '…ico'],
      2: ['…oso', '…ico'],
      1: ['…ico']
    }[list.length];
    const idx = list.indexOf(v);
    return `Valencias del ${elementName(sym)}: ${list.join(', ')}. Con ${v} se usa ${labels[idx]}.`;
  }

  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);

  // ---------- Generadores por función ----------
  function oxidoBasico({ metal, v }) {
    const { a, b, g } = cross(v, 2);
    const units = [{ s: metal, n: a }, { s: 'O', n: b }];
    const text = unitsToText(units);
    const name = elementName(metal);
    const adj = metalAdjective(metal, v);
    const nO = units[1].n;
    const nMe = units[0].n;

    return {
      formula: text,
      names: {
        sistematica: `${nO === 1 ? 'monóxido' : PREFIX[nO] + 'óxido'} de ${withPrefix(nMe, name)}`,
        stock: `óxido de ${name}${stockSuffix(metal, v, METALS)}`,
        tradicional: adj ? `óxido ${adj}` : `óxido de ${name}`
      },
      notes: {
        sistematica: 'Prefijos (mono, di, tri…) indican cuántos átomos de cada elemento hay.',
        stock: METALS[metal].v.length > 1 ? `La valencia del metal va en números romanos: ${ROMAN[v]}.` : 'Una sola valencia: no se indica el número romano.',
        tradicional: tradTwoValenceNote(metal, v)
      },
      steps: [
        `El ${name} actúa con valencia <b>+${v}</b> y el oxígeno con <b>−2</b>.`,
        `Se cruzan las valencias como subíndices: ${metal}<sub>2</sub>O<sub>${v}</sub>${g > 1 ? ` y se simplifica dividiendo entre ${g}` : ''} → <b>${unitsToHTML(units)}</b>.`
      ],
      reaction: reactionHTML([metal, 'O2'], [text])
    };
  }

  function oxidoAcido({ nonmetal, v }) {
    const nm = NONMETALS[nonmetal];
    if (!nm || !nm.pos || !nm.pos.includes(v)) throw new Error(`${nonmetal} no forma anhídrido con valencia ${v}`);
    const { a, b, g } = cross(v, 2);
    const units = [{ s: nonmetal, n: a }, { s: 'O', n: b }];
    const text = unitsToText(units);
    const name = elementName(nonmetal);
    return {
      formula: text,
      names: {
        sistematica: `${b === 1 ? 'monóxido' : PREFIX[b] + 'óxido'} de ${withPrefix(a, name)}`,
        stock: `óxido de ${name}${nm.pos.length > 1 ? ` (${ROMAN[v]})` : ''}`,
        tradicional: `anhídrido ${nm.trad[v]}`
      },
      notes: {
        sistematica: 'Prefijos según el número de átomos de oxígeno y del no metal.',
        stock: nm.pos.length > 1 ? `Número romano = valencia del ${name} (${ROMAN[v]}).` : 'Una sola valencia: sin número romano.',
        tradicional: tradNonmetalNote(nonmetal, v, nm.pos)
      },
      steps: [
        `El ${name} actúa con valencia <b>+${v}</b> y el oxígeno con <b>−2</b>.`,
        `Se cruzan las valencias: ${nonmetal}<sub>2</sub>O<sub>${v}</sub>${g > 1 ? ` y se simplifica entre ${g}` : ''} → <b>${unitsToHTML(units)}</b>.`
      ],
      reaction: reactionHTML([elementalForm(nonmetal), 'O2'], [text])
    };
  }

  function hidroxido({ metal, v }) {
    const adj = metalAdjective(metal, v);
    const cat = cationUnit(metal, v);
    const units = [{ s: metal, n: cat.atoms }, { g: [{ s: 'O', n: 1 }, { s: 'H', n: 1 }], n: cat.charge }];
    const text = unitsToText(units);
    const name = elementName(metal);
    const oxide = oxidoBasico({ metal, v }).formula;
    return {
      formula: text,
      names: {
        sistematica: `${withPrefix(cat.charge, 'hidróxido')} de ${withPrefix(cat.atoms, name)}`,
        stock: `hidróxido de ${name}${stockSuffix(metal, v, METALS)}`,
        tradicional: adj ? `hidróxido ${adj}` : `hidróxido de ${name}`
      },
      notes: {
        sistematica: 'El prefijo indica cuántos grupos OH⁻ hay.',
        stock: METALS[metal].v.length > 1 ? `Valencia del metal en romanos: ${ROMAN[v]}.` : 'Una sola valencia: sin número romano.',
        tradicional: tradTwoValenceNote(metal, v)
      },
      steps: [
        `El grupo hidroxilo OH tiene carga <b>−1</b>; el ${name} aporta <b>+${v}</b>.`,
        `Se necesitan ${cat.charge} grupos OH para neutralizar la carga → <b>${unitsToHTML(units)}</b>.`
      ],
      reaction: reactionHTML([oxide, 'H2O'], [text])
    };
  }

  function hidruroMetalico({ metal, v }) {
    const adj = metalAdjective(metal, v);
    const units = [{ s: metal, n: 1 }, { s: 'H', n: v }];
    const text = unitsToText(units);
    const name = elementName(metal);
    return {
      formula: text,
      names: {
        sistematica: `${withPrefix(v, 'hidruro')} de ${name}`,
        stock: `hidruro de ${name}${stockSuffix(metal, v, METALS)}`,
        tradicional: adj ? `hidruro ${adj}` : `hidruro de ${name}`
      },
      notes: {
        sistematica: 'El prefijo indica el número de átomos de hidrógeno.',
        stock: METALS[metal].v.length > 1 ? `Valencia del metal en romanos: ${ROMAN[v]}.` : 'Una sola valencia: sin número romano.',
        tradicional: tradTwoValenceNote(metal, v)
      },
      steps: [
        `En los hidruros metálicos el hidrógeno actúa con valencia <b>−1</b> y el ${name} con <b>+${v}</b>.`,
        `Se escribe primero el metal y luego ${v} hidrógenos → <b>${unitsToHTML(units)}</b>.`
      ],
      reaction: reactionHTML([metal, 'H2'], [text])
    };
  }

  function hidruroNoMetalico({ nonmetal }) {
    const nm = NONMETALS[nonmetal];
    if (!VOLATILE_HYDRIDES.includes(nonmetal)) throw new Error('Elige N, P, As, Sb, C, Si o B');
    const v = nm.neg;
    const units = [{ s: nonmetal, n: 1 }, { s: 'H', n: v }];
    const text = unitsToText(units);
    const name = elementName(nonmetal);
    return {
      formula: text,
      names: {
        sistematica: `${withPrefix(v, 'hidruro')} de ${name}`,
        stock: `hidruro de ${name} (${ROMAN[v]})`,
        tradicional: nm.hydride
      },
      notes: {
        sistematica: 'Prefijo según los átomos de hidrógeno.',
        stock: `Valencia del ${name} en romanos: ${ROMAN[v]}.`,
        tradicional: 'Estos hidruros tienen nombres propios aceptados por la IUPAC.'
      },
      steps: [
        `El ${name} actúa con valencia <b>${v}</b> frente al hidrógeno (+1).`,
        `Se une a ${v} hidrógenos → <b>${unitsToHTML(units)}</b>.`
      ],
      reaction: reactionHTML([elementalForm(nonmetal), 'H2'], [text])
    };
  }

  function hidracido({ nonmetal }) {
    if (!HYDRACID_FORMERS.includes(nonmetal)) throw new Error('Elige F, Cl, Br, I, S, Se o Te');
    const nm = NONMETALS[nonmetal];
    const v = nm.neg;
    const units = [{ s: 'H', n: v }, { s: nonmetal, n: 1 }];
    const text = unitsToText(units);
    return {
      formula: text,
      names: {
        sistematica: `${nm.anion} de ${withPrefix(v, 'hidrógeno')}`,
        stock: `${nm.anion} de hidrógeno`,
        tradicional: `ácido ${nm.hydracid}`
      },
      notes: {
        sistematica: 'Nombre del compuesto en estado gaseoso (puro), con prefijos.',
        stock: 'El hidrógeno solo tiene valencia +1: no lleva número romano.',
        tradicional: 'Nombre en disolución acuosa: ácido + raíz + terminación -hídrico.'
      },
      steps: [
        `El ${elementName(nonmetal)} actúa con valencia <b>−${v}</b> y el hidrógeno con <b>+1</b>.`,
        `Se escribe primero el hidrógeno (${v}) y luego el no metal → <b>${unitsToHTML(units)}</b>.`
      ],
      reaction: reactionHTML(['H2', elementalForm(nonmetal)], [text])
    };
  }

  /** Datos del oxácido de un no metal con valencia v: { h, o, text } */
  function oxacidComposition(nonmetal, v) {
    const nm = NONMETALS[nonmetal];
    if (!nm || !nm.acid || !nm.acid.includes(v)) throw new Error(`${nonmetal} no forma oxácido con valencia ${v}`);
    let h;
    let o;
    if (nm.orto) {
      h = 3;
      o = (v + 3) / 2;
    } else if (v % 2 === 1) {
      h = 1;
      o = (v + 1) / 2;
    } else {
      h = 2;
      o = (v + 2) / 2;
    }
    const units = [{ s: 'H', n: h }, { s: nonmetal, n: 1 }, { s: 'O', n: o }];
    return { h, o, units, text: unitsToText(units) };
  }

  const oxoWord = o => (o === 1 ? 'oxo' : PREFIX[o] + 'oxo');

  function oxacido({ nonmetal, v }) {
    const nm = NONMETALS[nonmetal];
    const { h, o, units, text } = oxacidComposition(nonmetal, v);
    const anhydride = oxidoAcido({ nonmetal, v }).formula;
    return {
      formula: text,
      names: {
        sistematica: `${oxoWord(o)}${nm.ato} (${ROMAN[v]}) de hidrógeno`,
        stock: `ácido ${oxoWord(o)}${nm.ico} (${ROMAN[v]})`,
        tradicional: `ácido ${nm.trad[v]}`
      },
      notes: {
        sistematica: `«${oxoWord(o)}» = ${o} oxígeno(s); raíz terminada en -ato; valencia en romanos.`,
        stock: 'Ácido + prefijo de oxígenos + raíz -ico + valencia en romanos.',
        tradicional: tradNonmetalNote(nonmetal, v, nm.acid.length === nm.pos.length ? nm.pos : nm.acid)
      },
      steps: nm.orto
        ? [
          `El ${elementName(nonmetal)} forma ácidos «orto»: anhídrido + <b>3 H₂O</b>.`,
          `Se suman los átomos y se divide entre 2 → <b>${unitsToHTML(units)}</b> (${h} H, ${o} O).`
        ]
        : [
          `Anhídrido ${textToHTML(anhydride)} + agua (H₂O).`,
          `Se suman los átomos${h === 1 ? ' y se simplifica' : ''} → <b>${unitsToHTML(units)}</b>. Comprueba: ${h}(+1) + ${v} + ${o}(−2) = 0.`
        ],
      reaction: reactionHTML([anhydride, 'H2O'], [text])
    };
  }

  function salBinaria({ metal, v, nonmetal }) {
    const adj = metalAdjective(metal, v);
    const nm = NONMETALS[nonmetal];
    if (!nm || !nm.neg || !nm.anion) throw new Error('No metal no válido para sal binaria');
    const cat = cationUnit(metal, v);
    const { a, b, g } = cross(cat.charge, nm.neg);
    const units = [{ s: metal, n: a * cat.atoms }, { s: nonmetal, n: b }];
    const text = unitsToText(units);
    const name = elementName(metal);
    const fromHydracid = HYDRACID_FORMERS.includes(nonmetal);
    let reaction;
    if (fromHydracid) {
      const base = hidroxido({ metal, v }).formula;
      const acid = hidracido({ nonmetal }).formula;
      reaction = reactionHTML([base, acid], [text, 'H2O']);
    } else {
      reaction = reactionHTML([metal, elementalForm(nonmetal)], [text]);
    }
    return {
      formula: text,
      names: {
        sistematica: `${withPrefix(b, nm.anion)} de ${withPrefix(a * cat.atoms, name)}`,
        stock: `${nm.anion} de ${name}${stockSuffix(metal, v, METALS)}`,
        tradicional: adj ? `${nm.anion} ${adj}` : `${nm.anion} de ${name}`
      },
      notes: {
        sistematica: 'Prefijos según el número de átomos de cada elemento.',
        stock: METALS[metal].v.length > 1 ? `Valencia del metal en romanos: ${ROMAN[v]}.` : 'Una sola valencia: sin número romano.',
        tradicional: tradTwoValenceNote(metal, v)
      },
      steps: [
        `El ${name} actúa con <b>+${v}</b> y el ${elementName(nonmetal)} con <b>−${nm.neg}</b> (anión ${nm.anion}).`,
        `Se cruzan las valencias${g > 1 ? ` y se simplifica entre ${g}` : ''} → <b>${unitsToHTML(units)}</b>.`,
        fromHydracid ? 'Se forma por neutralización: hidróxido + hidrácido → sal + agua.' : 'Se forma por combinación directa del metal con el no metal.'
      ],
      reaction
    };
  }

  function oxisal({ metal, v, nonmetal, vn }) {
    const adj = metalAdjective(metal, v);
    const nm = NONMETALS[nonmetal];
    const acid = oxacidComposition(nonmetal, vn);
    const cat = cationUnit(metal, v);
    const { a, b, g } = cross(cat.charge, acid.h);
    const anionUnits = [{ s: nonmetal, n: 1 }, { s: 'O', n: acid.o }];
    const units = [{ s: metal, n: a * cat.atoms }, { g: anionUnits, n: b }];
    const text = unitsToText(units);
    const name = elementName(metal);
    const anionTrad = nm.oxo[vn];
    const anionSys = `${oxoWord(acid.o)}${nm.ato} (${ROMAN[vn]})`;
    const sysAnion = b > 1 ? `${GROUP_PREFIX[b]}[${anionSys}]` : anionSys;
    const base = hidroxido({ metal, v }).formula;
    return {
      formula: text,
      names: {
        sistematica: `${sysAnion} de ${withPrefix(a * cat.atoms, name)}`,
        stock: `${anionTrad} de ${name}${stockSuffix(metal, v, METALS)}`,
        tradicional: adj ? `${anionTrad} ${adj}` : `${anionTrad} de ${name}`
      },
      notes: {
        sistematica: `Anión ${textToHTML(unitsToText(anionUnits))}: ${anionSys}. Si hay varios se usa bis, tris, tetrakis…`,
        stock: `Anión tradicional (-oso → -ito, -ico → -ato) + metal${METALS[metal].v.length > 1 ? ` y su valencia (${ROMAN[v]})` : ''}.`,
        tradicional: `Del ácido ${nm.trad[vn]} sale el anión ${anionTrad}. ${tradTwoValenceNote(metal, v)}`
      },
      steps: [
        `El ácido ${textToHTML(acid.text)} pierde sus ${acid.h} H y deja el anión <b>${unitsToHTML(anionUnits)}<sup>${acid.h > 1 ? acid.h : ''}−</sup></b>.`,
        `El ${name} aporta <b>+${v}</b>. Se cruzan las cargas${g > 1 ? ` y se simplifica entre ${g}` : ''} → <b>${unitsToHTML(units)}</b>.`
      ],
      reaction: reactionHTML([base, acid.text], [text, 'H2O'])
    };
  }

  const BUILDERS = { oxidoBasico, oxidoAcido, hidroxido, hidruroMetalico, hidruroNoMetalico, hidracido, oxacido, salBinaria, oxisal };

  /** Punto de entrada: build('oxisal', { metal: 'Fe', v: 3, nonmetal: 'S', vn: 6 }) */
  function build(type, params) {
    const fn = BUILDERS[type];
    if (!fn) throw new Error('Tipo de compuesto desconocido');
    const result = fn(params);
    result.type = type;
    result.typeLabel = TYPES[type].label;
    result.formulaHTML = textToHTML(result.formula);
    result.molarMass = molarMass(result.formula);
    return result;
  }

  /** Qué elementos y valencias admite cada tipo (para construir la interfaz) */
  function optionsFor(type) {
    const metals = Object.keys(METALS).map(s => ({ symbol: s, valences: METALS[s].v }));
    const withPos = Object.keys(NONMETALS).filter(s => NONMETALS[s].pos).map(s => ({ symbol: s, valences: NONMETALS[s].pos }));
    const withAcid = Object.keys(NONMETALS).filter(s => NONMETALS[s].acid).map(s => ({ symbol: s, valences: NONMETALS[s].acid }));
    const binary = Object.keys(NONMETALS).filter(s => NONMETALS[s].anion).map(s => ({ symbol: s, valences: [-NONMETALS[s].neg] }));
    switch (type) {
      case 'oxidoBasico':
      case 'hidroxido':
      case 'hidruroMetalico':
        return { metals };
      case 'oxidoAcido':
        return { nonmetals: withPos };
      case 'oxacido':
        return { nonmetals: withAcid };
      case 'hidruroNoMetalico':
        return { nonmetals: VOLATILE_HYDRIDES.map(s => ({ symbol: s, valences: [-NONMETALS[s].neg] })) };
      case 'hidracido':
        return { nonmetals: HYDRACID_FORMERS.map(s => ({ symbol: s, valences: [-NONMETALS[s].neg] })) };
      case 'salBinaria':
        return { metals, nonmetals: binary };
      case 'oxisal':
        return { metals, nonmetals: withAcid };
      default:
        return {};
    }
  }

  const api = { TYPES, METALS, NONMETALS, build, optionsFor, parseFormula, molarMass, balance, ROMAN };
  root.InorganicChem = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})(typeof window !== 'undefined' ? window : global);
