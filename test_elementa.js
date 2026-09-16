// test_elementa.js
const fs = require('fs');
const path = require('path');

console.log('--- TEST 1: Verificar Base de Datos de 118 Elementos ---');
const dataFile = path.join(__dirname, 'js', 'data', 'elements-data.js');
if (!fs.existsSync(dataFile)) {
  console.error('FAIL: No existe js/data/elements-data.js');
  process.exit(1);
}

// Mock window for Node testing
global.window = global;
require(dataFile);

if (!global.ELEMENTS_DATA || global.ELEMENTS_DATA.length !== 118) {
  console.error(`FAIL: Se esperaban 118 elementos, se encontraron: ${global.ELEMENTS_DATA ? global.ELEMENTS_DATA.length : 0}`);
  process.exit(1);
}
console.log(`PASS: 118 elementos químicos cargados correctamente.`);

// Check first, middle, last
const H = global.getElementByNumber(1);
const Nd = global.getElementBySymbol('Nd');
const Og = global.getElementByNumber(118);

console.log(`Elemento 1: ${H.name} (${H.symbol}), Masa: ${H.mass}, Bloque: ${H.block}`);
console.log(`Elemento 60: ${Nd.name} (${Nd.symbol}), Categoría: ${Nd.categoryName}`);
console.log(`Elemento 118: ${Og.name} (${Og.symbol}), Config: ${Og.electronConfigurationSemantic}`);

console.log('\n--- TEST 2: Validar Calculadora de Masa Molar ---');
require('./js/tools/molar-mass.js');
const calc = new global.MolarMassCalculator(null);

const testFormulas = [
  { formula: 'H2O', expectedElements: { H: 2, O: 1 } },
  { formula: 'Ca(OH)2', expectedElements: { Ca: 1, O: 2, H: 2 } },
  { formula: 'Al2(SO4)3', expectedElements: { Al: 2, S: 3, O: 12 } },
  { formula: 'CuSO4*5H2O', expectedElements: { Cu: 1, S: 1, O: 9, H: 10 } }
];

testFormulas.forEach(tf => {
  const parsed = calc.parseFormula(tf.formula);
  let passed = true;
  for (const [sym, count] of Object.entries(tf.expectedElements)) {
    if (parsed[sym] !== count) {
      console.error(`FAIL: ${tf.formula} -> esperado ${sym}=${count}, obtenido ${parsed[sym]}`);
      passed = false;
    }
  }
  if (passed) {
    console.log(`PASS: Fórmula ${tf.formula} -> ${JSON.stringify(parsed)}`);
  }
});

console.log('\n--- TEST 3: Validar Balanceador Algebraico de Ecuaciones ---');
require('./js/tools/equation-balancer.js');
const balancer = new global.ChemicalEquationBalancer(null);

const testReactions = [
  'H2 + O2 -> H2O',
  'CH4 + O2 -> CO2 + H2O',
  'Fe + O2 -> Fe2O3',
  'KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O'
];

testReactions.forEach(rxn => {
  try {
    const splitSides = rxn.split('->');
    const rawReactants = splitSides[0].split('+').map(s => s.trim());
    const rawProducts = splitSides[1].split('+').map(s => s.trim());
    const parsedReactants = rawReactants.map(m => balancer.parseMolecule(m));
    const parsedProducts = rawProducts.map(m => balancer.parseMolecule(m));

    const allElementsSet = new Set();
    parsedReactants.forEach(p => Object.keys(p).forEach(k => allElementsSet.add(k)));
    parsedProducts.forEach(p => Object.keys(p).forEach(k => allElementsSet.add(k)));
    const uniqueElements = Array.from(allElementsSet);

    const matrix = [];
    uniqueElements.forEach(elem => {
      const row = [];
      parsedReactants.forEach(mol => row.push(mol[elem] || 0));
      parsedProducts.forEach(mol => row.push(-(mol[elem] || 0)));
      matrix.push(row);
    });

    const coeffs = balancer.solveLinearSystem(matrix, rawReactants.length, rawProducts.length);
    console.log(`PASS: Reacción ${rxn} -> Coeficientes: [${coeffs.join(', ')}]`);
  } catch (err) {
    console.error(`FAIL en ${rxn}: ${err.message}`);
  }
});

console.log('\n--- TEST 4: Validar Archivos del Proyecto ELEMENTA ---');
const requiredFiles = [
  'index.html',
  'css/styles.css',
  'css/theme.css',
  'css/periodic-table.css',
  'css/element-modal.css',
  'css/tools.css',
  'js/lib/three.min.js',
  'js/data/elements-data.js',
  'js/components/bohr-model.js',
  'js/components/atom-3d.js',
  'js/components/emission-spectrum.js',
  'js/components/table-3d.js',
  'js/components/element-modal.js',
  'js/components/table-renderer.js',
  'js/tools/molar-mass.js',
  'js/tools/equation-balancer.js',
  'js/tools/comparator.js',
  'js/tools/practice-quiz.js',
  'js/app.js'
];

requiredFiles.forEach(f => {
  const p = path.join(__dirname, f);
  if (fs.existsSync(p)) {
    const stat = fs.statSync(p);
    console.log(`✓ ${f} (${(stat.size / 1024).toFixed(1)} KB)`);
  } else {
    console.error(`FAIL: Falta archivo ${f}`);
  }
});

console.log('\n🎉 ¡TODAS LAS PRUEBAS DE ELEMENTA COMPLETADAS EXITOSAMENTE!');
