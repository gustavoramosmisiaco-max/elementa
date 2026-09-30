// scripts/test-nomenclature.js — Verifica fórmulas y nombres contra respuestas de libro de texto
// Uso: node scripts/test-nomenclature.js
const path = require('path');
global.window = global;
require(path.join(__dirname, '..', 'js', 'data', 'elements-data.js'));
const Inorg = require(path.join(__dirname, '..', 'js', 'chem', 'inorganic.js'));
let Org = null;
try { Org = require(path.join(__dirname, '..', 'js', 'chem', 'organic.js')); } catch (e) { /* aún no existe */ }

let pass = 0;
let fail = 0;
function check(label, actual, expected) {
  if (actual === expected) {
    pass++;
  } else {
    fail++;
    console.log(`✗ ${label}\n    obtenido: ${actual}\n    esperado: ${expected}`);
  }
}

// [tipo, parámetros, fórmula, sistemática, stock, tradicional, reacción (texto sin HTML)]
const INORGANIC = [
  ['oxidoBasico', { metal: 'Fe', v: 3 }, 'Fe2O3', 'trióxido de dihierro', 'óxido de hierro (III)', 'óxido férrico', '4Fe + 3O2 → 2Fe2O3'],
  ['oxidoBasico', { metal: 'Fe', v: 2 }, 'FeO', 'monóxido de hierro', 'óxido de hierro (II)', 'óxido ferroso'],
  ['oxidoBasico', { metal: 'Na', v: 1 }, 'Na2O', 'monóxido de disodio', 'óxido de sodio', 'óxido de sodio', '4Na + O2 → 2Na2O'],
  ['oxidoBasico', { metal: 'Ca', v: 2 }, 'CaO', 'monóxido de calcio', 'óxido de calcio', 'óxido de calcio'],
  ['oxidoBasico', { metal: 'Pb', v: 4 }, 'PbO2', 'dióxido de plomo', 'óxido de plomo (IV)', 'óxido plúmbico'],
  ['oxidoBasico', { metal: 'Cu', v: 1 }, 'Cu2O', 'monóxido de dicobre', 'óxido de cobre (I)', 'óxido cuproso'],
  ['oxidoAcido', { nonmetal: 'C', v: 4 }, 'CO2', 'dióxido de carbono', 'óxido de carbono (IV)', 'anhídrido carbónico', 'C + O2 → CO2'],
  ['oxidoAcido', { nonmetal: 'C', v: 2 }, 'CO', 'monóxido de carbono', 'óxido de carbono (II)', 'anhídrido carbonoso'],
  ['oxidoAcido', { nonmetal: 'S', v: 6 }, 'SO3', 'trióxido de azufre', 'óxido de azufre (VI)', 'anhídrido sulfúrico', '2S + 3O2 → 2SO3'],
  ['oxidoAcido', { nonmetal: 'Cl', v: 7 }, 'Cl2O7', 'heptaóxido de dicloro', 'óxido de cloro (VII)', 'anhídrido perclórico', '2Cl2 + 7O2 → 2Cl2O7'],
  ['oxidoAcido', { nonmetal: 'Cl', v: 1 }, 'Cl2O', 'monóxido de dicloro', 'óxido de cloro (I)', 'anhídrido hipocloroso'],
  ['oxidoAcido', { nonmetal: 'N', v: 5 }, 'N2O5', 'pentaóxido de dinitrógeno', 'óxido de nitrógeno (V)', 'anhídrido nítrico'],
  ['oxidoAcido', { nonmetal: 'P', v: 5 }, 'P2O5', 'pentaóxido de difósforo', 'óxido de fósforo (V)', 'anhídrido fosfórico'],
  ['oxidoAcido', { nonmetal: 'Mn', v: 7 }, 'Mn2O7', 'heptaóxido de dimanganeso', 'óxido de manganeso (VII)', 'anhídrido permangánico'],
  ['oxidoAcido', { nonmetal: 'Si', v: 4 }, 'SiO2', 'dióxido de silicio', 'óxido de silicio', 'anhídrido silícico'],
  ['hidroxido', { metal: 'Na', v: 1 }, 'NaOH', 'hidróxido de sodio', 'hidróxido de sodio', 'hidróxido de sodio', 'Na2O + H2O → 2NaOH'],
  ['hidroxido', { metal: 'Ca', v: 2 }, 'Ca(OH)2', 'dihidróxido de calcio', 'hidróxido de calcio', 'hidróxido de calcio'],
  ['hidroxido', { metal: 'Fe', v: 3 }, 'Fe(OH)3', 'trihidróxido de hierro', 'hidróxido de hierro (III)', 'hidróxido férrico', 'Fe2O3 + 3H2O → 2Fe(OH)3'],
  ['hidroxido', { metal: 'Al', v: 3 }, 'Al(OH)3', 'trihidróxido de aluminio', 'hidróxido de aluminio', 'hidróxido de aluminio'],
  ['hidruroMetalico', { metal: 'Na', v: 1 }, 'NaH', 'hidruro de sodio', 'hidruro de sodio', 'hidruro de sodio', '2Na + H2 → 2NaH'],
  ['hidruroMetalico', { metal: 'Ca', v: 2 }, 'CaH2', 'dihidruro de calcio', 'hidruro de calcio', 'hidruro de calcio'],
  ['hidruroMetalico', { metal: 'Fe', v: 2 }, 'FeH2', 'dihidruro de hierro', 'hidruro de hierro (II)', 'hidruro ferroso'],
  ['hidruroNoMetalico', { nonmetal: 'N' }, 'NH3', 'trihidruro de nitrógeno', 'hidruro de nitrógeno (III)', 'amoníaco', 'N2 + 3H2 → 2NH3'],
  ['hidruroNoMetalico', { nonmetal: 'C' }, 'CH4', 'tetrahidruro de carbono', 'hidruro de carbono (IV)', 'metano'],
  ['hidruroNoMetalico', { nonmetal: 'P' }, 'PH3', 'trihidruro de fósforo', 'hidruro de fósforo (III)', 'fosfina'],
  ['hidracido', { nonmetal: 'Cl' }, 'HCl', 'cloruro de hidrógeno', 'cloruro de hidrógeno', 'ácido clorhídrico', 'H2 + Cl2 → 2HCl'],
  ['hidracido', { nonmetal: 'S' }, 'H2S', 'sulfuro de dihidrógeno', 'sulfuro de hidrógeno', 'ácido sulfhídrico', 'H2 + S → H2S'],
  ['hidracido', { nonmetal: 'F' }, 'HF', 'fluoruro de hidrógeno', 'fluoruro de hidrógeno', 'ácido fluorhídrico'],
  ['oxacido', { nonmetal: 'S', v: 6 }, 'H2SO4', 'tetraoxosulfato (VI) de hidrógeno', 'ácido tetraoxosulfúrico (VI)', 'ácido sulfúrico', 'SO3 + H2O → H2SO4'],
  ['oxacido', { nonmetal: 'S', v: 4 }, 'H2SO3', 'trioxosulfato (IV) de hidrógeno', 'ácido trioxosulfúrico (IV)', 'ácido sulfuroso'],
  ['oxacido', { nonmetal: 'N', v: 5 }, 'HNO3', 'trioxonitrato (V) de hidrógeno', 'ácido trioxonítrico (V)', 'ácido nítrico', 'N2O5 + H2O → 2HNO3'],
  ['oxacido', { nonmetal: 'N', v: 3 }, 'HNO2', 'dioxonitrato (III) de hidrógeno', 'ácido dioxonítrico (III)', 'ácido nitroso'],
  ['oxacido', { nonmetal: 'Cl', v: 1 }, 'HClO', 'oxoclorato (I) de hidrógeno', 'ácido oxoclórico (I)', 'ácido hipocloroso'],
  ['oxacido', { nonmetal: 'Cl', v: 7 }, 'HClO4', 'tetraoxoclorato (VII) de hidrógeno', 'ácido tetraoxoclórico (VII)', 'ácido perclórico'],
  ['oxacido', { nonmetal: 'C', v: 4 }, 'H2CO3', 'trioxocarbonato (IV) de hidrógeno', 'ácido trioxocarbónico (IV)', 'ácido carbónico', 'CO2 + H2O → H2CO3'],
  ['oxacido', { nonmetal: 'P', v: 5 }, 'H3PO4', 'tetraoxofosfato (V) de hidrógeno', 'ácido tetraoxofosfórico (V)', 'ácido fosfórico', 'P2O5 + 3H2O → 2H3PO4'],
  ['oxacido', { nonmetal: 'B', v: 3 }, 'H3BO3', 'trioxoborato (III) de hidrógeno', 'ácido trioxobórico (III)', 'ácido bórico'],
  ['oxacido', { nonmetal: 'Mn', v: 7 }, 'HMnO4', 'tetraoxomanganato (VII) de hidrógeno', 'ácido tetraoxomangánico (VII)', 'ácido permangánico'],
  ['oxacido', { nonmetal: 'Cr', v: 6 }, 'H2CrO4', 'tetraoxocromato (VI) de hidrógeno', 'ácido tetraoxocrómico (VI)', 'ácido crómico'],
  ['salBinaria', { metal: 'Na', v: 1, nonmetal: 'Cl' }, 'NaCl', 'cloruro de sodio', 'cloruro de sodio', 'cloruro de sodio', 'NaOH + HCl → NaCl + H2O'],
  ['salBinaria', { metal: 'Fe', v: 3, nonmetal: 'Cl' }, 'FeCl3', 'tricloruro de hierro', 'cloruro de hierro (III)', 'cloruro férrico', 'Fe(OH)3 + 3HCl → FeCl3 + 3H2O'],
  ['salBinaria', { metal: 'Fe', v: 3, nonmetal: 'S' }, 'Fe2S3', 'trisulfuro de dihierro', 'sulfuro de hierro (III)', 'sulfuro férrico'],
  ['salBinaria', { metal: 'Ca', v: 2, nonmetal: 'F' }, 'CaF2', 'difluoruro de calcio', 'fluoruro de calcio', 'fluoruro de calcio'],
  ['salBinaria', { metal: 'Hg', v: 1, nonmetal: 'Cl' }, 'Hg2Cl2', 'dicloruro de dimercurio', 'cloruro de mercurio (I)', 'cloruro mercurioso'],
  ['salBinaria', { metal: 'Mg', v: 2, nonmetal: 'N' }, 'Mg3N2', 'dinitruro de trimagnesio', 'nitruro de magnesio', 'nitruro de magnesio', '3Mg + N2 → Mg3N2'],
  ['oxisal', { metal: 'Na', v: 1, nonmetal: 'S', vn: 6 }, 'Na2SO4', 'tetraoxosulfato (VI) de disodio', 'sulfato de sodio', 'sulfato de sodio', '2NaOH + H2SO4 → Na2SO4 + 2H2O'],
  ['oxisal', { metal: 'Fe', v: 3, nonmetal: 'S', vn: 6 }, 'Fe2(SO4)3', 'tris[tetraoxosulfato (VI)] de dihierro', 'sulfato de hierro (III)', 'sulfato férrico', '2Fe(OH)3 + 3H2SO4 → Fe2(SO4)3 + 6H2O'],
  ['oxisal', { metal: 'Ca', v: 2, nonmetal: 'C', vn: 4 }, 'CaCO3', 'trioxocarbonato (IV) de calcio', 'carbonato de calcio', 'carbonato de calcio'],
  ['oxisal', { metal: 'K', v: 1, nonmetal: 'Mn', vn: 7 }, 'KMnO4', 'tetraoxomanganato (VII) de potasio', 'permanganato de potasio', 'permanganato de potasio'],
  ['oxisal', { metal: 'K', v: 1, nonmetal: 'N', vn: 5 }, 'KNO3', 'trioxonitrato (V) de potasio', 'nitrato de potasio', 'nitrato de potasio'],
  ['oxisal', { metal: 'Na', v: 1, nonmetal: 'Cl', vn: 1 }, 'NaClO', 'oxoclorato (I) de sodio', 'hipoclorito de sodio', 'hipoclorito de sodio'],
  ['oxisal', { metal: 'Ca', v: 2, nonmetal: 'P', vn: 5 }, 'Ca3(PO4)2', 'bis[tetraoxofosfato (V)] de tricalcio', 'fosfato de calcio', 'fosfato de calcio'],
  ['oxisal', { metal: 'Cu', v: 2, nonmetal: 'S', vn: 6 }, 'CuSO4', 'tetraoxosulfato (VI) de cobre', 'sulfato de cobre (II)', 'sulfato cúprico'],
  ['oxisal', { metal: 'Al', v: 3, nonmetal: 'N', vn: 5 }, 'Al(NO3)3', 'tris[trioxonitrato (V)] de aluminio', 'nitrato de aluminio', 'nitrato de aluminio']
];

const strip = html => (html || '').replace(/<[^>]+>/g, '');

for (const [type, params, formula, sis, stock, trad, reaction] of INORGANIC) {
  const label = `${type} ${JSON.stringify(params)}`;
  let r;
  try {
    r = Inorg.build(type, params);
  } catch (e) {
    fail++;
    console.log(`✗ ${label} lanzó error: ${e.message}`);
    continue;
  }
  check(`${label} fórmula`, r.formula, formula);
  check(`${label} sistemática`, r.names.sistematica, sis);
  check(`${label} stock`, r.names.stock, stock);
  check(`${label} tradicional`, r.names.tradicional, trad);
  if (reaction) check(`${label} reacción`, strip(r.reaction), reaction);
  if (!r.reaction) { fail++; console.log(`✗ ${label} sin reacción balanceada`); }
}

// Masa molar de referencia
check('masa molar H2SO4', Inorg.molarMass('H2SO4').toFixed(2), '98.07');
check('masa molar Fe2(SO4)3', Inorg.molarMass('Fe2(SO4)3').toFixed(2), '399.86');

// Recorre TODAS las combinaciones posibles de la interfaz: ninguna debe fallar
let combos = 0;
for (const type of Object.keys(Inorg.TYPES)) {
  const opts = Inorg.optionsFor(type);
  const metals = opts.metals || [null];
  const nonmetals = opts.nonmetals || [null];
  for (const m of metals) {
    for (const v of m ? m.valences : [null]) {
      for (const nm of nonmetals) {
        for (const vn of nm ? nm.valences : [null]) {
          const params = {};
          if (m) { params.metal = m.symbol; params.v = v; }
          if (nm) {
            params.nonmetal = nm.symbol;
            if (type === 'oxisal') params.vn = vn; else if (!m) params.v = vn;
          }
          try {
            const r = Inorg.build(type, params);
            combos++;
            if (!r.reaction || !r.formula || !r.names.tradicional || /undefined/.test(JSON.stringify(r)) || isNaN(r.molarMass)) {
              fail++;
              console.log(`✗ combinación incompleta ${type} ${JSON.stringify(params)}`);
            }
          } catch (e) {
            fail++;
            console.log(`✗ combinación ${type} ${JSON.stringify(params)}: ${e.message}`);
          }
        }
      }
    }
  }
}
console.log(`Combinaciones inorgánicas probadas: ${combos}`);

if (Org) require('./test-organic.js')(Org, check);

console.log(`\n${pass} correctas, ${fail} fallidas`);
process.exit(fail ? 1 : 0);
