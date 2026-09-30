// scripts/apply-verified-corrections.js
// Correcciones verificadas contra PubChem (NIH), NIST y la literatura (ver comentarios).
// Uso: node scripts/apply-verified-corrections.js  → reescribe js/data/elements-data.js
//      y los archivos parciales elements-part1..4.js para que compile-master-dataset.js siga coherente.
const fs = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, '..', 'js', 'data', 'elements-data.js');

const CORRECTIONS = {
  6: { // Carbono: afinidad electrónica 1,2621 eV (NIST) = 121,8 kJ/mol
    electronAffinity: 121.8
  },
  16: {
    description: 'Sólido cristalino amarillo brillante que compone aminoácidos esenciales como la cisteína y metionina (puentes disulfuro en proteínas). El ácido sulfúrico es uno de los compuestos químicos industriales más producidos del mundo.'
  },
  49: { // Indio: afinidad electrónica 0,3841 eV (medición 2016) = 37,0 kJ/mol
    electronAffinity: 37.0
  },
  71: {
    description: 'El último, más pesado, denso y duro de los lantánidos. El isótopo Lutecio-177, unido a moléculas que se dirigen al tumor (como el PSMA-617), es un tratamiento de medicina nuclear de vanguardia contra el cáncer de próstata avanzado.'
  },
  72: {
    description: 'Metal lustroso que absorbe neutrones de forma excepcional. El dióxido de hafnio (HfO₂) sustituyó al dióxido de silicio (SiO₂) como aislante dieléctrico de alta constante k en los transistores de los microprocesadores modernos.'
  },
  74: {
    description: 'El metal con el punto de fusión más alto de todos los metales (3422 °C) y la menor presión de vapor. El carburo de wolframio es casi tan duro como el diamante.'
  },
  85: { // Ástato: 1ª energía de ionización medida en 2013 (Rothe et al., Nature Communications) = 9,3175 eV = 899,0 kJ/mol
    ionizationEnergy: 899.0
  },
  88: { // Radio: punto de fusión 700 °C = 973 K (CRC Handbook)
    meltingPoint: 973
  },
  95: { // Americio: electronegatividad de Pauling 1,3
    electronegativity: 1.3
  },
  96: { // Curio: electronegatividad de Pauling 1,3
    electronegativity: 1.3,
    description: 'Nombrado en honor a Marie y Pierre Curie. Es un emisor alfa tan potente que sus muestras sólidas se calientan solas por su propia radiactividad. El Curio-244 alimentó los espectrómetros de rayos X y partículas alfa (APXS) de los rovers en Marte.'
  }
};

global.window = global;
require(DATA_FILE);
const data = global.ELEMENTS_DATA;

let changes = 0;
for (const [num, fields] of Object.entries(CORRECTIONS)) {
  const el = data.find(e => e.number === Number(num));
  for (const [k, v] of Object.entries(fields)) {
    if (JSON.stringify(el[k]) !== JSON.stringify(v)) {
      console.log(`${el.number} ${el.symbol} · ${k}: ${JSON.stringify(el[k]).slice(0, 60)} → ${JSON.stringify(v).slice(0, 60)}`);
      el[k] = v;
      changes++;
    }
  }
}

// 1) Reescribe el bloque ELEMENTS_DATA en el archivo maestro (mismo formato que compile-master-dataset.js)
const src = fs.readFileSync(DATA_FILE, 'utf8');
const start = src.indexOf('const ELEMENTS_DATA = ') + 'const ELEMENTS_DATA = '.length;
const end = src.indexOf(';\n\n  // Expose globally');
if (start < 30 || end < 0) throw new Error('No se encontró el bloque ELEMENTS_DATA');
fs.writeFileSync(DATA_FILE, src.slice(0, start) + JSON.stringify(data, null, 2) + src.slice(end), 'utf8');

// 2) Mantiene los archivos parciales sincronizados (1-30, 31-60, 61-90, 91-118)
const ranges = [[1, 30], [31, 60], [61, 90], [91, 118]];
ranges.forEach(([a, b], i) => {
  const part = data.filter(e => e.number >= a && e.number <= b);
  const name = `elementsPart${i + 1}`;
  const out = `// elements-part${i + 1}.js - Elements ${a} to ${b}\nconst ${name} = ${JSON.stringify(part, null, 2)};\n\nif (typeof module !== 'undefined' && module.exports) {\n  module.exports = ${name};\n}\n`;
  fs.writeFileSync(path.join(__dirname, '..', 'js', 'data', `elements-part${i + 1}.js`), out, 'utf8');
});

console.log(`\n${changes} correcciones aplicadas.`);
